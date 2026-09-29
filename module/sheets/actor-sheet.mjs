import { NOVUM } from "../config.mjs";
import { getReadiedRangedWeapon, isRangeOverlayEnabled, toggleRangeOverlay } from "../range-overlay.mjs";
import { progressionState, ROLE_DEFINITIONS } from "../progression.mjs";

const { ActorSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin, DialogV2 } = foundry.applications.api;

export class NovumActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["novum", "sheet", "actor-sheet"],
    position: { width: 880, height: 820 },
    form: { closeOnSubmit: false, submitOnChange: true },
    actions: {
      rollWeapon: this.onRollWeapon,
      reloadWeapon: this.onReloadWeapon,
      toggleEquipment: this.onToggleEquipment,
      editItem: this.onEditItem,
      deleteItem: this.onDeleteItem,
      createItem: this.onCreateItem,
      restoreResources: this.onRestoreResources,
      rechargeShield: this.onRechargeShield,
      toggleRangeOverlay: this.onToggleRangeOverlay,
      toggleEffect: this.onToggleEffect,
      deleteEffect: this.onDeleteEffect,
      switchTab: this.onSwitchTab,
      toggleFeat: this.onToggleFeat,
      setAttributeAdvance: this.onSetAttributeAdvance
    }
  };

  static PARTS = {
    main: { template: "systems/novum/templates/actor/character-sheet.hbs" }
  };

  constructor(options = {}) {
    super(options);
    this._activeTab = "combat";
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const actor = this.actor;
    const profile = actor.combatProfile;
    const items = actor.items.contents.slice().sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name));
    const progression = progressionState(actor.system);
    const roleEntries = Object.entries(ROLE_DEFINITIONS);
    const roleOptions = current => [
      { value: "", label: "Choose Role", selected: !current },
      ...roleEntries.map(([value, role]) => ({ value, label: role.label, selected: current === value }))
    ];
    const backgroundSlots = [0, 1, 2].map(index => ({
      index,
      options: [
        { value: "", label: "Unassigned", selected: !progression.backgroundSkills[index] },
        ...Object.entries(NOVUM.skills).map(([value, label]) => ({ value, label, selected: progression.backgroundSkills[index] === value }))
      ]
    }));
    const advances = actor.system.progression.attributeAdvances;
    const attributeMilestones = [5, 9].map(level => {
      const current = advances[`level${level}`];
      return {
        level,
        locked: Number(actor.system.level) < level,
        currentLabel: current ? NOVUM.attributes[current] : "Unassigned",
        options: Object.entries(NOVUM.attributes).map(([value, label]) => ({ value, label, selected: current === value }))
      };
    });
    const tabs = Object.fromEntries(["combat", "skills", "feats", "inventory", "notes"].map(key => [key, this._activeTab === key]));
    return foundry.utils.mergeObject(context, {
      actor,
      system: actor.system,
      profile,
      isNPC: actor.type === "npc",
      attributes: Object.entries(NOVUM.attributes).map(([key, label]) => ({ key, label, value: actor.system.attributes[key].value })),
      skills: Object.entries(NOVUM.skills).map(([key, label]) => ({ key, label, value: actor.system.skills[key].value, cap: progression.skillCap })),
      weapons: items.filter(item => item.type === "weapon").map(item => ({
        id: item.id,
        name: item.name,
        system: item.system,
        technologyLabel: item.system.technology ? `${item.system.technology.charAt(0).toUpperCase()}${item.system.technology.slice(1)}` : "Kinetic"
      })),
      armours: items.filter(item => item.type === "armour"),
      armourMods: items.filter(item => item.type === "armourMod"),
      readiedRangedWeapon: getReadiedRangedWeapon(actor),
      rangeOverlayEnabled: isRangeOverlayEnabled(),
      effects: actor.effects.contents.slice().sort((a, b) => a.name.localeCompare(b.name)),
      progression,
      roleSelectors: {
        primary: roleOptions(actor.system.progression.roles.primary),
        secondary: roleOptions(actor.system.progression.roles.secondary)
      },
      backgroundSlots,
      attributeMilestones,
      tabs,
      editable: this.isEditable
    }, { inplace: false });
  }

  static async onRollWeapon(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    await this.actor.rollWeapon(itemId);
  }

  static async onReloadWeapon(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    await this.actor.reloadWeapon(itemId);
  }

  static onSwitchTab(event, target) {
    this._activeTab = target.dataset.tab;
    const root = target.closest(".novum-sheet-body");
    root?.querySelectorAll("[data-tab]").forEach(element => element.classList.toggle("is-active", element.dataset.tab === this._activeTab));
  }

  static async onToggleFeat(event, target) {
    await this.actor.toggleFeat(target.dataset.featId);
  }

  static async onSetAttributeAdvance(event, target) {
    await this.actor.setAttributeAdvance(Number(target.dataset.level), target.dataset.attribute);
  }

  static async onToggleEquipment(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    await this.actor.toggleEquipment(itemId);
  }

  static async onEditItem(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    const item = this.actor.items.get(itemId);
    item?.sheet?.render({ force: true });
  }

  static async onDeleteItem(event, target) {
    const itemId = target.closest("[data-item-id]")?.dataset.itemId;
    const item = this.actor.items.get(itemId);
    if (!item) return;
    const confirmed = await DialogV2.confirm({
      window: { title: "Delete Item" },
      content: `<p>Delete <strong>${foundry.utils.escapeHTML(item.name)}</strong> from ${foundry.utils.escapeHTML(this.actor.name)}?</p>`,
      rejectClose: false
    });
    if (confirmed) await this.actor.deleteEmbeddedDocuments("Item", [item.id]);
  }

  static async onCreateItem(event, target) {
    const type = target.dataset.itemType;
    const names = { weapon: "New Weapon", armour: "New Armour", armourMod: "New Armour Mod" };
    if (!names[type]) return;
    const [created] = await this.actor.createEmbeddedDocuments("Item", [{
      name: names[type],
      type,
      system: { tier: this.actor.system.tier, compatibleTier: this.actor.system.tier }
    }]);
    created?.sheet?.render({ force: true });
  }

  static async onRestoreResources() {
    await this.actor.restoreResources();
  }

  static async onRechargeShield() {
    await this.actor.rechargeShield(1);
  }

  static onToggleRangeOverlay() {
    toggleRangeOverlay();
  }

  static async onToggleEffect(event, target) {
    const effectId = target.closest("[data-effect-id]")?.dataset.effectId;
    const effect = this.actor.effects.get(effectId);
    if (effect) await effect.update({ disabled: !effect.disabled });
  }

  static async onDeleteEffect(event, target) {
    const effectId = target.closest("[data-effect-id]")?.dataset.effectId;
    if (effectId) await this.actor.deleteEmbeddedDocuments("ActiveEffect", [effectId]);
  }

  _onRender(context, options) {
    super._onRender(context, options);
    const element = this.element;
    element?.querySelectorAll("[data-role-slot]").forEach(select => select.addEventListener("change", event => {
      this.actor.setRole(event.currentTarget.dataset.roleSlot, event.currentTarget.value);
    }));
    element?.querySelectorAll("[data-background-index]").forEach(select => select.addEventListener("change", event => {
      this.actor.setBackgroundSkill(Number(event.currentTarget.dataset.backgroundIndex), event.currentTarget.value);
    }));
  }
}

export class NovumNPCSheet extends NovumActorSheet {
  static DEFAULT_OPTIONS = {
    classes: ["novum", "sheet", "actor-sheet", "npc-sheet"],
    position: { width: 760, height: 720 }
  };

  static PARTS = {
    main: { template: "systems/novum/templates/actor/npc-sheet.hbs" }
  };
}
