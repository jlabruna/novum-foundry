/** Pure character-progression helpers. This module has no Foundry dependency. */

export const HP_BY_LEVEL = Object.freeze([14, 14, 15, 16, 16, 17, 18, 18, 19, 20]);
export const SKILL_CAP_BY_LEVEL = Object.freeze([3, 3, 4, 4, 4, 4, 5, 5, 5, 6]);
export const FEAT_LEVELS = Object.freeze([2, 4, 6, 8, 10]);
export const ATTRIBUTE_LEVELS = Object.freeze([5, 9]);

const pair = (level, a, b, concept) => ({ level, options: [a, b], concept });

export const ROLE_DEFINITIONS = Object.freeze({
  soldier: {
    label: "Soldier", icon: "fa-solid fa-crosshairs", ability: "Quickdraw",
    abilityText: "Once per combat scene, spend a Reaction when an enemy closes into melee to draw and fire a Pistol, then keep or holster it.",
    branches: [
      { id: "firearms", label: "Firearms", icon: "fa-solid fa-gun", decisions: [
        pair(2, "Controlled Fire", "Full Send", "Efficient fire or aggressive Auto use"),
        pair(4, "Rapid Reload", "Combat Transition", "Sustain one weapon or switch fluidly"),
        pair(6, "Intercept", "Counterfire", "Punish movement or failed ranged attacks")
      ] },
      { id: "combat-mastery", label: "Combat Mastery", icon: "fa-solid fa-shield-halved", decisions: [
        pair(2, "Gunfighter", "Paired Weapons", "Pistol-melee interplay or paired one-handed fighting"),
        pair(4, "Pursuit", "Hold the Line", "Pursue disengaging enemies or resist close pressure"),
        pair(6, "Drive Back", "Riposte", "Reposition through pressure or retaliate reactively")
      ] }
    ]
  },
  medtech: {
    label: "Medtech", icon: "fa-solid fa-kit-medical", ability: "Combat Dose",
    abilityText: "At the start of combat, once per scene, inject yourself or an adjacent willing ally with one prepared compound as a free activity.",
    branches: [
      { id: "field-medicine", label: "Field Medicine", icon: "fa-solid fa-heart-pulse", decisions: [
        pair(2, "Triage", "Adrenal Support", "Immediate treatment or keep an injured ally functioning"),
        pair(4, "Rapid Dose", "Sustained Dose", "Efficient delivery or extended effect"),
        pair(6, "Trauma Care", "Push Through", "Treat serious injury or suppress consequences briefly")
      ] },
      { id: "adaptive-genomics", label: "Adaptive Genomics", icon: "fa-solid fa-dna", decisions: [
        pair(2, "Overexpression", "Stabilisation", "Stronger Vector benefit or reduced drawback"),
        pair(4, "Amplified Phenotype", "Controlled Expression", "Push transformation or control its negative effect"),
        pair(6, "Hyperadaptation", "Homeostasis", "Extreme capability or substantially contained penalty")
      ] }
    ]
  },
  engineer: {
    label: "Engineer", icon: "fa-solid fa-screwdriver-wrench", ability: "Deployable",
    abilityText: "At the start of combat, place one prepared Device as a free activity. Device statistics remain future work.",
    branches: [
      { id: "deployables", label: "Deployables", icon: "fa-solid fa-tower-broadcast", decisions: [
        pair(2, "Rapid Deployment", "Reinforced Device", "Easier placement or harder neutralisation"),
        pair(4, "Expanded Payload", "Efficient Systems", "Broader function or better resource use"),
        pair(6, "Linked Network", "Autonomous Routine", "Interacting devices or limited preset behaviour")
      ] },
      { id: "smart-weapons", label: "Smart Weapons", icon: "fa-solid fa-bullseye", decisions: [
        pair(2, "Target Lock", "Assisted Aim", "Stronger tracking or guided-shot reliability"),
        pair(4, "Guided Trajectory", "Persistent Track", "Plausible cover-bending or brief LOS retention"),
        pair(6, "Reacquisition", "Multi-Lock", "Regain a target or track multiple targets")
      ] }
    ]
  },
  hacker: {
    label: "Hacker", icon: "fa-solid fa-terminal", ability: "Ping",
    abilityText: "At the start of combat, make one free group scan for broad, actionable information about visible electronic systems.",
    branches: [
      { id: "network-intrusion", label: "Network Intrusion", icon: "fa-solid fa-network-wired", decisions: [
        pair(2, "Signal Boost", "Clean Link", "Wireless reach or reduced wireless penalty"),
        pair(4, "Extended Envelope", "Hardline Expert", "Push wireless range or strengthen direct access"),
        pair(6, "Mesh Access", "Ghost Signal", "Relay through devices or resist tracing")
      ] },
      { id: "combat-hacking", label: "Combat Hacking", icon: "fa-solid fa-microchip", decisions: [
        pair(2, "Fast Breach", "Deep Breach", "Compromise quickly or produce a stronger effect"),
        pair(4, "System Lock", "System Hijack", "Deny control or take limited control"),
        pair(6, "Chain Intrusion", "Persistent Access", "Jump between devices or maintain access")
      ] }
    ]
  },
  pilot: {
    label: "Pilot", icon: "fa-solid fa-helicopter", ability: "Linked Movement",
    abilityText: "Once per round, when a controlled drone uses your Move Action, you may also move your normal distance.",
    branches: [
      { id: "drones", label: "Drones", icon: "fa-solid fa-satellite-dish", decisions: [
        pair(2, "Coordinated Control", "Specialist Drone", "Operator-drone coordination or one specialised drone"),
        pair(4, "Swarm Logic", "Tactical Relay", "Multi-drone coordination or sensor-comms extension"),
        pair(6, "Autonomous Routine", "Direct Override", "Preset autonomy or exceed normal control limits")
      ] },
      { id: "neural-vehicles", label: "Vehicles / Neural Integration", icon: "fa-solid fa-car-side", decisions: [
        pair(2, "Neural Link", "Combat Driver", "Direct integration or aggressive handling"),
        pair(4, "Remote Possession", "Reflex Interface", "Remote operation or exceptional reaction"),
        pair(6, "Machine Embodiment", "Redline", "Vehicle as body or exceed safe performance")
      ] }
    ]
  },
  envoy: {
    label: "Envoy", icon: "fa-solid fa-comments", ability: "Rally",
    abilityText: "At the start of combat, grant a short group buff to allies who can hear your brief command, speech, or performance. Exact effect remains unresolved.",
    branches: [
      { id: "combat-influence", label: "Combat Influence", icon: "fa-solid fa-people-group", decisions: [
        pair(2, "Steady Nerves", "Break Their Nerve", "Resist pressure or increase enemy susceptibility"),
        pair(4, "Rally Through", "Dig In", "Push through control or hold position"),
        pair(6, "Countermand", "Seize the Moment", "Blunt hostile control or create opportunity")
      ] },
      { id: "social-influence", label: "Social Influence", icon: "fa-solid fa-handshake", decisions: [
        pair(2, "Charm", "Pressure", "Cooperation through rapport or leverage"),
        pair(4, "Read the Room", "Control the Frame", "Identify motives or shape encounter direction"),
        pair(6, "Build Rapport", "Apply Leverage", "Deepen cooperation or convert leverage into concessions")
      ] }
    ]
  },
  operative: {
    label: "Operative", icon: "fa-solid fa-user-secret", ability: "Vanish",
    abilityText: "Once per combat scene at combat start, attempt to Hide as a free activity where a plausible hiding place or broken line of sight exists.",
    branches: [
      { id: "infiltration", label: "Infiltration", icon: "fa-solid fa-mask-face", decisions: [
        pair(2, "Ghost Step", "Silent Entry", "Cross exposed space or bypass entry without evidence"),
        pair(4, "Fade", "Disappear in the Noise", "Exploit distraction or chaos to reposition"),
        pair(6, "Shadow Route", "Perfect Cover", "Traverse gaps or exploit marginal concealment")
      ] },
      { id: "precision", label: "Precision", icon: "fa-solid fa-crosshairs", decisions: [
        pair(2, "Deadeye", "Opportunist", "Create an opening or exploit compromised targets"),
        pair(4, "Critical Focus", "Surgical Strike", "Expand crit range or impose a chosen disabling effect"),
        pair(6, "Kill Window", "Exploit Weakness", "High-value opening or identified vulnerability")
      ] }
    ]
  }
});

export function levelValue(level) {
  return Math.min(10, Math.max(1, Number(level) || 1));
}

export function hpForLevel(level) {
  return HP_BY_LEVEL[levelValue(level) - 1];
}

export function skillCapForLevel(level) {
  return SKILL_CAP_BY_LEVEL[levelValue(level) - 1];
}

export function skillPointsForLevel(level) {
  return 6 + ((levelValue(level) - 1) * 2);
}

export function skillRankCost(rank) {
  const value = Math.min(6, Math.max(0, Number(rank) || 0));
  return value <= 3 ? value : 3 + ((value - 3) * 2);
}

export function skillPointsSpent(skills = {}, backgroundSkills = []) {
  const free = new Set(backgroundSkills.filter(Boolean));
  return Object.entries(skills).reduce((sum, [key, data]) => {
    const rank = Number(data?.value ?? data ?? 0);
    return sum + Math.max(0, skillRankCost(rank) - (free.has(key) && rank > 0 ? 1 : 0));
  }, 0);
}

export function featSlotsForLevel(level) {
  const value = levelValue(level);
  return FEAT_LEVELS.filter(gate => gate <= value).length;
}

export function attributeSlotsForLevel(level) {
  const value = levelValue(level);
  return ATTRIBUTE_LEVELS.filter(gate => gate <= value).length;
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function featCatalogue() {
  const result = [];
  for (const [roleId, role] of Object.entries(ROLE_DEFINITIONS)) {
    for (const branch of role.branches) {
      branch.decisions.forEach((decision, decisionIndex) => {
        const pairId = `${roleId}.${branch.id}.${decision.level}.${decisionIndex}`;
        decision.options.forEach((name, optionIndex) => result.push({
          id: `${pairId}.${slug(name)}`,
          pairId,
          optionIndex,
          roleId,
          branchId: branch.id,
          branchLabel: branch.label,
          level: decision.level,
          name,
          concept: decision.concept
        }));
      });
    }
  }
  return result;
}

const FEATS = Object.freeze(featCatalogue());
const FEATS_BY_ID = new Map(FEATS.map(feat => [feat.id, feat]));

export function getFeat(featId) {
  return FEATS_BY_ID.get(String(featId)) ?? null;
}

export function validateFeatSelections({ selections = [], roles = [], level = 1 } = {}) {
  const chosen = [...new Set(selections.map(String))];
  const selectedRoles = new Set(roles.filter(Boolean));
  const warnings = [];
  const pairs = new Map();
  for (const id of chosen) {
    const feat = getFeat(id);
    if (!feat) {
      warnings.push(`Unknown feat selection: ${id}`);
      continue;
    }
    if (!selectedRoles.has(feat.roleId)) warnings.push(`${feat.name} belongs to an unselected Role.`);
    if (feat.level > levelValue(level)) warnings.push(`${feat.name} requires Level ${feat.level}.`);
    const previous = pairs.get(feat.pairId);
    if (previous) warnings.push(`${previous.name} and ${feat.name} are mutually exclusive.`);
    else pairs.set(feat.pairId, feat);
  }
  const slots = featSlotsForLevel(level);
  if (chosen.length > slots) warnings.push(`${chosen.length} Feats are selected but Level ${levelValue(level)} provides ${slots} slot${slots === 1 ? "" : "s"}.`);
  return { valid: warnings.length === 0, warnings, selected: chosen, slots, remaining: Math.max(0, slots - chosen.length) };
}

export function canSelectFeat({ featId, selections = [], roles = [], level = 1 } = {}) {
  const feat = getFeat(featId);
  if (!feat) return { allowed: false, reason: "Unknown Feat." };
  if (selections.includes(feat.id)) return { allowed: true, deselect: true, feat };
  if (!roles.includes(feat.roleId)) return { allowed: false, reason: "Choose this Feat's Role first." };
  if (feat.level > levelValue(level)) return { allowed: false, reason: `Requires Level ${feat.level}.` };
  if (selections.some(id => getFeat(id)?.pairId === feat.pairId)) return { allowed: false, reason: "Its paired choice is already selected." };
  if (selections.length >= featSlotsForLevel(level)) return { allowed: false, reason: "No Feat picks remain at this level." };
  return { allowed: true, deselect: false, feat };
}

export function buildRolePanels({ roles = [], selections = [], level = 1 } = {}) {
  const selectedSet = new Set(selections);
  return roles.filter(Boolean).map(roleId => {
    const role = ROLE_DEFINITIONS[roleId];
    if (!role) return null;
    return {
      id: roleId,
      ...role,
      branches: role.branches.map(branch => ({
        ...branch,
        decisions: branch.decisions.map((decision, index) => {
          const pairId = `${roleId}.${branch.id}.${decision.level}.${index}`;
          const pairSelected = FEATS.filter(feat => feat.pairId === pairId).find(feat => selectedSet.has(feat.id));
          return {
            ...decision,
            lockedByLevel: decision.level > levelValue(level),
            options: FEATS.filter(feat => feat.pairId === pairId).map(feat => {
              const check = canSelectFeat({ featId: feat.id, selections, roles, level });
              return {
                ...feat,
                selected: selectedSet.has(feat.id),
                pairedLocked: Boolean(pairSelected && pairSelected.id !== feat.id),
                disabled: !check.allowed,
                status: selectedSet.has(feat.id) ? "Selected" : check.allowed ? "Available" : check.reason
              };
            })
          };
        })
      }))
    };
  }).filter(Boolean);
}

export function progressionState(system = {}) {
  const level = levelValue(system.level);
  const progression = system.progression ?? {};
  const roles = [progression.roles?.primary, progression.roles?.secondary].filter(Boolean);
  const selections = Array.from(progression.feats ?? []);
  const backgroundSkills = Array.from(progression.backgroundSkills ?? []).slice(0, 3);
  const spent = skillPointsSpent(system.skills, backgroundSkills);
  const points = skillPointsForLevel(level);
  const featState = validateFeatSelections({ selections, roles, level });
  const warnings = [...featState.warnings];
  if (roles.length === 2 && roles[0] === roles[1]) warnings.push("Primary and secondary Roles must be different.");
  if (new Set(backgroundSkills.filter(Boolean)).size !== backgroundSkills.filter(Boolean).length) warnings.push("Background skill grants must be three different Skills.");
  if (spent > points) warnings.push(`Skills spend ${spent} points; Level ${level} provides ${points}.`);
  const cap = skillCapForLevel(level);
  for (const [key, data] of Object.entries(system.skills ?? {})) {
    if (Number(data?.value ?? 0) > cap) warnings.push(`${key} exceeds the Level ${level} Skill cap of ${cap}.`);
  }
  const advances = progression.attributeAdvances ?? {};
  if (advances.level5 && advances.level9 && advances.level5 === advances.level9) warnings.push("Level 5 and Level 9 Attribute increases must affect different Attributes.");
  if (advances.level5 && level < 5) warnings.push("The recorded Level 5 Attribute increase is gated while the character is below Level 5.");
  if (advances.level9 && level < 9) warnings.push("The recorded Level 9 Attribute increase is gated while the character is below Level 9.");
  return {
    level,
    hp: hpForLevel(level),
    skillCap: cap,
    skillPoints: points,
    skillSpent: spent,
    skillRemaining: points - spent,
    featSlots: featState.slots,
    featSelected: selections.length,
    featRemaining: featState.remaining,
    attributeSlots: attributeSlotsForLevel(level),
    roles,
    selections,
    selectedFeats: selections.map(id => getFeat(id)).filter(Boolean).map(feat => ({ ...feat, roleLabel: ROLE_DEFINITIONS[feat.roleId]?.label ?? feat.roleId })),
    backgroundSkills,
    warnings,
    rolePanels: buildRolePanels({ roles, selections, level })
  };
}
