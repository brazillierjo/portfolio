// Génère src/data/activity.json : commits par jour en 2026 sur les dépôts locaux.
// Lancé à la main (`npm run activity`) : les dépôts ne sont pas accessibles au build Vercel.
// Seuls des comptes sont écrits, jamais de messages ni de noms de dépôts clients.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ROOT = join(homedir(), "Documents/Development");
const REPOS = [
  "Perso/mio",
  "Perso/shelltown",
  "Perso/fastflix",
  "Perso/mio-studio",
  "Perso/admin",
  "Perso/portfolio",
  "Pro/Swipelink",
  "Pro/swipelink-smartlink",
  "Pro/shinobi",
  "Pro/coco-chinese",
  "Pro/gallus-french",
  "Pro/leo-english",
  "Pro/analytics-infra",
  "Pro/big-mamma/bmm-hubmenu",
];
const SINCE = "2026-01-01";
const AUTHOR = /brazillier|bzrjoh/i;
const AGENT = /co-authored-by:\s*(claude|codex)|generated with \[?claude code|codex/i;

const days = new Map();
let total = 0,
  withAgent = 0,
  repos = 0;
const seen = new Set();

for (const rel of REPOS) {
  const dir = join(ROOT, rel);
  if (!existsSync(dir)) continue;
  repos++;
  const out = execFileSync(
    "git",
    [
      "-C",
      dir,
      "log",
      "--all",
      `--since=${SINCE}`,
      "--format=%H%x1f%an%x1f%ae%x1f%ad%x1f%B%x1e",
      "--date=short",
    ],
    { encoding: "utf8", maxBuffer: 1 << 28 },
  );
  for (const rec of out.split("\x1e")) {
    const [hash, name, email, date, body = ""] = rec.trim().split("\x1f");
    if (!hash || seen.has(hash) || !AUTHOR.test(`${name} ${email}`)) continue;
    seen.add(hash);
    total++;
    if (AGENT.test(body)) withAgent++;
    days.set(date, (days.get(date) ?? 0) + 1);
  }
}

const today = new Date().toISOString().slice(0, 10);
const series = [];
for (
  let d = new Date(`${SINCE}T00:00:00Z`);
  d.toISOString().slice(0, 10) <= today;
  d.setUTCDate(d.getUTCDate() + 1)
) {
  const k = d.toISOString().slice(0, 10);
  series.push(days.get(k) ?? 0);
}
const activeDays = series.filter(Boolean).length;
const data = {
  since: SINCE,
  until: today,
  repos,
  total,
  withAgent,
  activeDays,
  max: Math.max(...series),
  days: series,
};
mkdirSync(new URL("../src/data/", import.meta.url), { recursive: true });
writeFileSync(new URL("../src/data/activity.json", import.meta.url), JSON.stringify(data) + "\n");
console.log({ ...data, days: `${series.length} jours` });
