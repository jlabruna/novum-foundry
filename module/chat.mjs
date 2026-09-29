function canApply(message, actor) {
  return game.user.isGM || (message.isAuthor && actor.isOwner);
}

export function resultMatchesActor(result, actor) {
  return Number(actor.system.resources.health.value) === Number(result.pre.hp)
    && Number(actor.system.resources.shield.value) === Number(result.pre.shield);
}

async function applyResult(message, button) {
  const results = message.getFlag("novum", "results") ?? [];
  const index = Number(button.dataset.resultIndex ?? 0);
  const result = results[index] ?? message.getFlag("novum", "result");
  if (!result || result.applied) return;
  const actor = await fromUuid(result.targetUuid);
  if (!actor) return ui.notifications.error("The target Actor no longer exists.");
  if (!canApply(message, actor)) return ui.notifications.warn("Only a GM, or the owning author, can apply this result.");

  if (!resultMatchesActor(result, actor)) {
    return ui.notifications.warn("The target changed after this roll. The result was not applied; make a fresh attack.");
  }

  button.disabled = true;
  await actor.update({
    "system.resources.health.value": result.post.hp,
    "system.resources.shield.value": result.post.shield
  });
  const prefix = results.length ? `flags.novum.results.${index}` : "flags.novum.result";
  await message.update({
    [`${prefix}.applied`]: true,
    [`${prefix}.appliedBy`]: game.user.id,
    [`${prefix}.appliedAt`]: Date.now()
  });
  ui.notifications.info(`Applied result to ${actor.name}.`);
}

export function installChatCardHooks() {
  Hooks.on("renderChatMessageHTML", async (message, html) => {
    const results = message.getFlag("novum", "results") ?? [];
    const legacy = message.getFlag("novum", "result");
    if (!results.length && !legacy) return;
    const buttons = html.querySelectorAll("[data-action='apply-novum-result']");
    for (const button of buttons) {
      const index = Number(button.dataset.resultIndex ?? 0);
      const result = results[index] ?? legacy;
      if (!result) {
        button.remove();
        continue;
      }
      if (result.applied) {
        button.disabled = true;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Applied';
        continue;
      }
      const actor = await fromUuid(result.targetUuid);
      if (!actor || !canApply(message, actor)) button.remove();
      else button.addEventListener("click", event => applyResult(message, event.currentTarget));
    }
  });
}
