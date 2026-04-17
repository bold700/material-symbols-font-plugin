// plugin.js — runs inside Penpot context

penpot.ui.open('Material Symbols', `?theme=${penpot.theme}`, {
  width: 320,
  height: 520,
});

// Send current selection to UI on open
function sendSelection() {
  const selection = penpot.selection;
  if (selection.length === 0) {
    penpot.ui.sendMessage({ type: 'selection', shapes: [] });
    return;
  }

  const shapes = selection.map(shape => ({
    id: shape.id,
    name: shape.name,
    type: shape.type,
    content: shape.type === 'text' ? shape.characters : null,
  }));

  penpot.ui.sendMessage({ type: 'selection', shapes });
}

// Listen for selection changes
penpot.on('selectionchange', sendSelection);
sendSelection();

// Listen for messages from UI
penpot.ui.onMessage(message => {
  if (message.type === 'replace-all-selected') {
    const { iconName, fill, size, style, weight } = message;
    const base = `Material Symbols ${style || 'Rounded'}`;
    const fontFamily = fill ? `${base} Filled` : base;
    const selection = penpot.selection;
    for (const shape of selection) {
      if (shape.type === 'text') {
        shape.characters = iconName;
        shape.fontFamily = fontFamily;
        if (size) shape.fontSize = String(size);
        if (weight) shape.fontWeight = String(weight);
      }
    }
    sendSelection();
  }

  if (message.type === 'place-icon') {
    const { iconName, fill, size, style, weight } = message;
    const fontSize = size || 24;
    const base = `Material Symbols ${style || 'Rounded'}`;
    const text = penpot.createText(iconName);
    if (text) {
      text.name = iconName;
      text.fontFamily = fill ? `${base} Filled` : base;
      text.fontStyle = 'normal';
      text.fontWeight = String(weight || 400);
      text.fontSize = String(fontSize);
      text.growType = 'auto-width';
      text.x = (penpot.viewport.center.x - fontSize / 2) || 0;
      text.y = (penpot.viewport.center.y - fontSize / 2) || 0;
      penpot.selection = [text];
      sendSelection();
    }
  }

  if (message.type === 'get-selection') {
    sendSelection();
  }
});
