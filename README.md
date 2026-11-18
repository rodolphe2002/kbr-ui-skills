# KBR-UI — Agent Skill

Find, download and integrate **animated UI components** from [KBR-UI](https://ui.rodolphekouadio.com) in any coding agent, via the `kbr.mjs` CLI — and create new components in the same motion style when the catalog doesn't cover your need.

~40 zero-dependency **web components** (buttons, inputs, toggles, menus, timers…): one `.js` file, one custom-element tag, works in plain HTML, React/Next, Vue or Svelte with no build step.

## Install

Cross-agent, via [skills.sh](https://skills.sh) (70+ supported agents — Claude Code, Cursor, Codex, Devin, Cline, Copilot, Goose…):

```bash
npx skills add rodolphe2002/kbr-ui-skills
```

Or copy the `kbr-ui/` folder manually into your agent's skills directory:

| Agent | Location |
|---|---|
| Devin | `.devin/skills/kbr-ui/` or `~/.config/devin/skills/` |
| Claude Code | `.claude/skills/kbr-ui/` or `~/.claude/skills/` |
| Codex | `.codex/skills/kbr-ui/` |
| Cursor | `.cursor/skills/kbr-ui/` |
| Universal | `.agents/skills/kbr-ui/` |

## API key

Every download is authenticated and counted on your account.

1. Create a free account at [ui.rodolphekouadio.com](https://ui.rodolphekouadio.com/connexion)
2. Generate your key at [/compte](https://ui.rodolphekouadio.com/compte) → `kbr_…` (shown once)
3. Expose it to your agent — any of:
   ```bash
   export KBR_UI_KEY=kbr_…          # env var
   ```
   ```
   # .env
   KBR_UI_KEY=kbr_…
   ```
   ```
   # .kbr-ui  (file containing just the key)
   ```

## What the agent does

```
kbr.mjs list                 → catalog (JSON): id, title, family, description
kbr.mjs search <term>        → matching components
kbr.mjs get <id> --out <dir> → download <id>.js + print the usage snippet
```

```html
<script src="./kbr-ui/action-button.js"></script>
<action-button></action-button>
```

- Missing component? The agent follows `references/custom-components.md` — KBR-UI
  conventions (shadow DOM, palette, letter-roll states, hold-to-confirm physics,
  `prefers-reduced-motion`) to author a new one in the same style.
- Live demos of every component: `ui.rodolphekouadio.com/bluma/<id>.html`

## Contents

```
kbr-ui/
├── SKILL.md                        # skill definition (name, description, workflow)
├── scripts/kbr.mjs                 # zero-dep CLI: list / search / get — API-key auth + tracking
└── references/
    ├── catalog.md                  # full component index (tag, family, FR + EN description)
    └── custom-components.md        # conventions for authoring components in KBR-UI style
```

## Licence

Components may be copied and used in personal and commercial projects — see the
[conditions générales](https://ui.rodolphekouadio.com/conditions-generales).
