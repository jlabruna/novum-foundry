function canApply(message, actor) {
  return game.user.isGM || (message.isAuthor && actor.isOwner);
}

export function resultMatchesActor(result, actor) {
  return Number(actor.system.resources.health.value) === Number(result.pre.hp)
    && Number(actor.system.resources.shield.value) === Number(result.pre.shield);
}

async function applyResult(message, button) {
  const result = message.getFlag("novum", "result");
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
  await message.update({
    "flags.novum.result.applied": true,
    "flags.novum.result.appliedBy": game.user.id,
    "flags.novum.result.appliedAt": Date.now()
  });
  ui.notifications.info(`Applied result to ${actor.name}.`);
}

export function installChatCardHooks() {
  Hooks.on("renderChatMessageHTML", async (message, html) => {
    const result = message.getFlag("novum", "result");
    if (!result) return;
    const button = html.querySelector("[data-action='apply-novum-result']");
    if (!button) return;
    if (result.applied) {
      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-check"></i> Applied';
      return;
    }

    const actor = await fromUuid(result.targetUuid);
    if (!actor || !canApply(message, actor)) button.remove();
    else button.addEventListener("click", event => applyResult(message, event.currentTarget));
  });
}
