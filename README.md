# Penpot Material Symbols

A Penpot plugin to search and insert Material Symbols icons into text layers.

## What it does

- Search the full Material Symbols icon library by name
- Click an icon to insert it into the selected text layer
- Replace an existing icon in a selected text layer
- Switch between styles: Rounded, Sharp, Outlined
- Toggle filled/outlined variant
- Adjust icon size and weight (100–700)

Fonts are self-hosted — no internet connection required after setup.

## Installation

### Requirements

- [Node.js](https://nodejs.org) (any recent version)
- Penpot (cloud or self-hosted)

### Run locally

```bash
git clone https://github.com/bold700/material-symbols-font-plugin.git
cd material-symbols-font-plugin
npm start
```

The server runs at `http://localhost:7777`.

### Add to Penpot

1. Open a Penpot file
2. Go to **Plugins** (the puzzle icon in the toolbar)
3. Click **Add plugin**
4. Enter the URL: `http://localhost:7777/manifest.json`
5. Click **Install**

## Usage

1. Select a text layer in Penpot (optional — you can also insert without a selection)
2. Open the plugin
3. Search for an icon by name (e.g. `home`, `arrow`, `settings`)
4. Click an icon to insert or replace it
5. Adjust style, fill, size and weight as needed
