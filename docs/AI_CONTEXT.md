# AI Context — Sci Fi TTRPG System Project

## Purpose

This file defines how AI assistants should behave within the Sci Fi TTRPG system project.

It is separate from the game design reference.

Game rules, mechanics, setting material, and design decisions belong in their own project documents.

---

# 1. Project Chat / Work Boundary

This project uses separate Chat and Work conversations.

## Non-Work Chats

Non-Work chats are used for:

- System design
- Rules discussion
- Mechanical planning
- Balance discussion
- Setting development
- Terminology
- Playtest planning
- Design decisions
- Reviewing concepts
- Preparing implementation briefs

Non-Work chats must NEVER:

- prompt or suggest opening Work;
- prompt or suggest switching to Work;
- prompt or suggest converting the current chat into Work;
- invoke or recommend a direct Work handoff.

When implementation, coding, file editing, repository work, testing, or other Work-suitable activity is required, the assistant must instead ask whether the user wants a WORK HANDOVER.

If the user confirms, provide one complete, self-contained WORK HANDOVER inside a single copy-paste code block.

The user will manually paste that handover into their dedicated Work chat.

Do not initiate Work automatically.

---

# 2. Work Chats

Work chats are used for:

- File creation
- File editing
- Repository work
- Coding
- Testing
- Implementation
- Build changes
- Other direct project execution

Work should follow decisions made in planning chat unless the user explicitly changes direction.

Work should not silently invent or redesign mechanics that were not specified in planning.

If implementation reveals a design ambiguity, preserve the current design intent and flag the ambiguity rather than making a major design decision without user direction.

---

# 3. Source of Truth

The project should maintain separation between:

- AI/project operating instructions
- Game-system reference material
- Design-decision history
- Implementation files

Current intended documents include:

- `docs/AI_CONTEXT.md` — AI/project workflow rules
- `docs/SYSTEM_REFERENCE.md` — current game-system design reference
- `docs/DESIGN_DECISIONS.md` — decision history, when created

Do not merge AI workflow instructions into the game-system reference unless explicitly requested.

---

# 4. Design Handling Rules

When discussing the TTRPG system:

- Preserve the user's stated design intent.
- Clearly distinguish confirmed decisions from provisional ideas.
- Do not silently convert brainstorming into established rules.
- Mark unresolved mechanics as unresolved.
- Do not invent missing mechanics unless the user asks for proposals.
- When suggesting alternatives, identify them as suggestions rather than established rules.
- Prefer concise, practical design language over unnecessary theory.
- Maintain continuity with previously confirmed project decisions.

---

# 5. Reference Maintenance

The system reference is intended to be a living document.

As the design evolves:

- confirmed mechanics should be updated;
- obsolete ideas should be removed or clearly superseded;
- unresolved questions should remain marked as unresolved;
- significant design decisions may be recorded separately in a decision log.

Do not treat early brainstorming as permanent canon.

---

# 6. Handover Format

When the user requests a WORK HANDOVER from a non-Work chat:

- provide exactly one complete copy-paste code block;
- make it self-contained;
- include the relevant project context;
- include the exact task to perform;
- include any important constraints;
- include relevant filenames and paths where known;
- include enough detail that the dedicated Work chat does not need to reconstruct the planning conversation;
- do not directly initiate Work.

---

# 7. Project Scope

This project is for the design and development of a new science-fiction / cyberpunk tabletop roleplaying game system.

The project is expected to include both:

- game/system design;
- eventual implementation and tooling.

Planning and implementation should remain separated according to the Chat / Work boundary above.

---

# 8. Current Project Identity and Implementation State

- Product/system name: **Novum**.
- Former working title: **Afterlight**, now superseded. Use it only when a
  historical note requires provenance.
- Standalone Foundry game-system ID: `novum`.
- Current playtest build: **Novum Foundry v0.1.2**.
- Current Foundry target: **v14.368**; do not silently target v15.
- Preferred public repository: `jlabruna/novum-foundry`.
- Distribution uses a browser-based GitHub workflow. Do not direct the user to
  PowerShell, Git CLI, GitHub Desktop, or terminal pushing unless requested.
- Preferred manifest:
  `https://raw.githubusercontent.com/jlabruna/novum-foundry/main/system.json`
- Preferred release asset: `novum.zip`.

Current implemented playtest calibration:

- Shield centreline by tier: **7 / 8 / 9 / 10**.
- HP centreline by tier: **14 / 16 / 18 / 20**.
- Standard Fire Ablation: **1**, confirmed.
- Auto: provisional **−3 attack / Ablation 3 / normal ranged damage**.
- Melee bypasses Shield SP, subtracts Armour Floor once, and uses a separate
  lower provisional damage scale validated against the new HP/Shield values.
- v0.1.2 preserves that combat calibration while correcting pregen token art,
  ranged-weapon identities, Scene-unit conversion, and range-overlay UX.
- Seeded Actors use separate full portraits and circular alpha-transparent
  prototype tokens. The twelve archetype families are visually distinct.
- Attack resolution and overlay radii share one metre-normalised Scene-distance
  path. The overlay supports Toggle/Hold, a Foundry keybinding, per-band colours,
  shared opacity, and optional Extreme zones.

These numbers are implemented test calibration, not final character-building
formulas. Future work must preserve that distinction.

The current visual reference is the **Novum visual style guide** and supplied
black/white Novum logos: modernist literary science fiction, near-black and
ivory surfaces, restrained copper accents, institutional geometry, and no
generic neon-cyberpunk styling.
