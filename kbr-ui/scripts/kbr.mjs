#!/usr/bin/env node
/**
 * KBR-UI component CLI — used by AI agents via the kbr-ui skill.
 *
 *   node kbr.mjs list                     list available components (JSON)
 *   node kbr.mjs search <term>            filter the catalog
 *   node kbr.mjs get <id> [--out dir]     download <id>.js into a folder, print usage
 *
 * Auth: API key from (first match) KBR_UI_KEY env, or a `.env` line
 * `KBR_UI_KEY=...`, or a `.kbr-ui` file containing just the key.
 * Users create their key at https://ui.rodolphekouadio.com/compte
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const BASE = "https://ui.rodolphekouadio.com";

function resolveKey() {
  if (process.env.KBR_UI_KEY) return process.env.KBR_UI_KEY.trim();
  try {
    const env = readFileSync(path.join(process.cwd(), ".env"), "utf8");
    const line = env.split("\n").find((l) => l.startsWith("KBR_UI_KEY="));
    if (line) return line.slice("KBR_UI_KEY=".length).trim().replace(/^["']|["']$/g, "");
  } catch { /* ignore */ }
  try {
    const f = readFileSync(path.join(process.cwd(), ".kbr-ui"), "utf8").trim();
    if (f) return f;
  } catch { /* ignore */ }
  return null;
}

function fail(msg, hint) {
  console.error(`error: ${msg}`);
  if (hint) console.error(`hint:  ${hint}`);
  process.exit(1);
}

async function api(endpoint, key) {
  const res = await fetch(`${BASE}${endpoint}`, {
    headers: { Authorization: `Bearer ${key}`, "User-Agent": "kbr-ui-skill/1.0" },
  });
  if (res.status === 401) {
    fail(
      "invalid or missing API key",
      "ask the user for their KBR_UI_KEY — they can generate one at https://ui.rodolphekouadio.com/compte"
    );
  }
  if (!res.ok) fail(`HTTP ${res.status} on ${endpoint}`);
  return res;
}

const [cmd, ...args] = process.argv.slice(2);
const key = resolveKey();

if (!cmd || cmd === "help" || cmd === "--help") {
  console.log(`kbr.mjs — KBR-UI components
  list                 full catalog (JSON)
  search <term>        matching components
  get <id> [--out dir] download the component JS (default out: ./kbr-ui)`);
  process.exit(0);
}

if (!key) {
  fail(
    "no API key found",
    "set KBR_UI_KEY, or write the key to .env / .kbr-ui. The user generates it at https://ui.rodolphekouadio.com/compte"
  );
}

if (cmd === "list" || cmd === "search") {
  const res = await api("/api/kbr/components", key);
  const { components } = await res.json();
  const term = cmd === "search" ? (args[0] ?? "").toLowerCase() : "";
  const out = term
    ? components.filter(
        (c) =>
          c.id.includes(term) ||
          c.title.toLowerCase().includes(term) ||
          c.description.toLowerCase().includes(term) ||
          (c.family ?? "").toLowerCase().includes(term)
      )
    : components;
  if (cmd === "search" && out.length === 0) {
    console.log(JSON.stringify({ components: [], note: "no match — create it following references/custom-components.md" }));
    process.exit(0);
  }
  console.log(JSON.stringify({ components: out }, null, 2));
} else if (cmd === "get") {
  const id = args[0];
  if (!id) fail("missing component id", "run: node kbr.mjs list");
  const outIdx = args.indexOf("--out");
  const outDir = outIdx !== -1 && args[outIdx + 1] ? args[outIdx + 1] : "kbr-ui";
  const res = await api(`/api/kbr/components/${encodeURIComponent(id)}`, key);
  const code = await res.text();
  mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, `${id}.js`);
  writeFileSync(file, code);
  console.log(`saved: ${file}`);
  console.log(`usage: <script src="./${file}"></script>`);
  console.log(`       <${id}></${id}>`);
} else {
  fail(`unknown command "${cmd}"`, "run: node kbr.mjs help");
}
