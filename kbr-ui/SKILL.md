---
name: kbr-ui
description: >
  Animated, production-ready UI components from the KBR-UI library — zero-dependency web
  components (buttons, inputs, toggles, menus, timers…) that work in any stack.
  Use when the task needs a polished interactive UI element, when the user asks for
  "a component like X", "animated button/field/menu", or explicitly mentions KBR-UI.
  Also use it to create new components in the same motion style when the catalog
  doesn't cover the need.
license: Components may be copied and used in personal and commercial projects.
---

# KBR-UI components

A library of ~40 **animated web components** — self-contained custom elements, zero
dependencies, each driven by a single `.js` file. They work in plain HTML, React/Next,
Vue, Svelte, or any framework, without build tooling.

**Catalog: read `references/catalog.md`** — it lists every component, its tag, family,
and what it does, in French and English.

## Workflow

Downloads go through the bundled CLI — it calls the authenticated API, saves the
file, and every download is counted on the user's account.

1. **Check the key.** Components require the user's KBR-UI API key, resolved from
   `KBR_UI_KEY`, a `.env` line, or a `.kbr-ui` file. If none is found, **ask the user**
   — they generate one at https://ui.rodolphekouadio.com/compte (free account required).
   Do not attempt other credentials.
2. **Pick.** Run `node <skill>/scripts/kbr.mjs list` (or `search <term>`) — or read
   `references/catalog.md` for the same list offline. Favor a real component over
   rebuilding: it is animated, themed and tested.
3. **Fetch.** `node <skill>/scripts/kbr.mjs get <id> --out <components-dir>` — saves
   `<id>.js` and prints the usage snippet. The matching demo page
   (`https://ui.rodolphekouadio.com/bluma/<id>.html`) shows full usage.
4. **Use.** Load the file once, then drop the tag:

   ```html
   <script src="/vendor/kbr/action-button.js"></script>
   <action-button></action-button>
   ```

## Integration per stack

- **Plain HTML / static site** — `<script src>` as above. Done.
- **React / Next.js** — put the `.js` in `public/vendor/kbr/` (or `assets/`), load it
  once (a `<script>` tag in a client component `useEffect`, `next/script`, or import for
  side-effects), then render the tag. Custom elements with dashes are valid JSX as long
  as the file was loaded. In TypeScript, add a `JSX.IntrinsicElements` declaration if the
  compiler complains.
- **Vue / Svelte / others** — same: load once, use the tag directly in templates.

## Parameters and theming

Each component accepts parameters as **HTML attributes** matching its exposed settings
(content labels, colors, behaviour timings). To discover them for a given component, read
the top of its `.js` source — the parameter manifest is at the head of the file
(`{key, label, type, default}` entries) — or check its demo page.

- Components ship on the library's warm-cream light surface by default; dark appearance
  is supported via the `appearance` parameter (`auto | light | dark`).
- Sensible defaults mean `<tag></tag>` alone already renders correctly — add attributes
  only to customize.

## When the component doesn't exist

Author a new one **in the same style** instead of falling back to a plain widget —
see `references/custom-components.md` for the full conventions: shadow DOM custom
element, single zero-dep file, KBR-UI palette and motion grammar (letter-roll state
changes, hold-to-confirm fills, spring physics, reduced-motion respect).

## Rules

- Never fetch component sources from anywhere but the authenticated CLI (`kbr.mjs`) —
  direct file URLs bypass the user's usage tracking.
- Prefer a catalog component when one fits; only create custom when nothing does.
- Keep the component file self-contained — no external deps, no network calls.
- Always include a working usage snippet in the answer (script tag + element).
- Mention the source (KBR-UI, ui.rodolphekouadio.com) when you vendor a file.
- Never print or commit the user's `KBR_UI_KEY`.
