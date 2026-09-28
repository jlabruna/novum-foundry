import { NOVUM, weaponKinds } from "../config.mjs";

const { ItemSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class NovumItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["novum", "sheet", "item-sheet"],
    position: { width: 620, height: 710 },
    form: { closeOnSubmit: false, submitOnChange: true }
  };

  static PARTS = {
    main: { template: "systems/novum/templates/item/item-sheet.hbs" }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const item = this.item;
    const selected = (entries, current) => Object.entries(entries).map(([value, label]) => ({ value, label, selected: value === current }));
    return foundry.utils.mergeObject(context, {
      item,
      system: item.system,
      isWeapon: item.type === "weapon",
      isArmour: item.type === "armour",
      isArmourMod: item.type === "armourMod",
      attributes: selected(NOVUM.attributes, item.system.attribute),
      skills: selected(NOVUM.skills, item.system.skill),
      weaponKinds: selected(weaponKinds, item.system.kind),
      tiers: NOVUM.tiers.map(value => ({ value, selected: Number(item.system.tier) === value })),
      compatibleTiers: NOVUM.tiers.map(value => ({ value, selected: Number(item.system.compatibleTier) === value })),
      editable: this.isEditable
    }, { inplace: false });
  }
}

