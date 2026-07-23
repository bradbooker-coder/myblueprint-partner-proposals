# myBlueprint Partner Proposals

A collection of partner/sponsorship proposal landing pages, all built on the same reusable
template. Each proposal is a self-contained static site (no build step) — open its `index.html`
directly, or serve the folder with any static host.

## Structure

```
myblueprint-partner-proposals/
├── _template/                        ← master baseline. Copy FROM this, never edit it directly
│   for a real proposal.
├── internal-industry-partner-demo/   ← generic internal demo — "here's the plan for our
│   industry partners." Identical to _template today; this is what you show around internally.
├── win-nuclear/                      ← the real Women in Nuclear Canada proposal (archived,
│   industry-specific content).
└── <next-partner-slug>/              ← every new real proposal gets its own folder here.
```

Each folder is fully self-contained: `index.html`, `styles.css`, `config.js`, `app.js`, and an
`assets/` folder with that proposal's logos. You can zip any single folder and hand it to someone,
or deploy it on its own — nothing reaches outside its own folder.

## Starting a new partner proposal

1. Copy `_template/` → rename to the partner's slug (e.g. `acme-corp/`).
2. Open that folder's `config.js` and edit top to bottom — partner name, hero copy, opportunity
   stats, package copy, pricing/upgrades, contact info.
3. Drop the partner's logo into that folder's `assets/`, and point `logos.partner.src` at it in
   `config.js` (see that folder's own `README.md` for details — leave it blank for a "Your Logo
   Here" placeholder if you don't have the logo yet).
4. Preview locally with VS Code's Live Server extension, or `python3 -m http.server` from inside
   the folder.
5. Commit and push.

## Fixing something for every proposal at once

`index.html`, `styles.css`, and `app.js` are duplicated across every folder rather than shared, so
a design or logic fix (spacing, a color token, the pricing calculator) needs to be applied to
`_template/` and then manually copied into whichever proposals are still active/in-flight. At the
number of concurrent partner conversations this is meant for, that's a small amount of manual work
— much less than rebuilding a proposal from scratch each time. If this ever grows past a handful of
proposals at once, it'd be worth revisiting (e.g. genuinely shared `styles.css`/`app.js` files
referenced by relative path from every proposal folder) — not necessary yet.

## Why this structure

- **Self-contained per-proposal folders** — you can hand any single one to someone (zipped) or
  deploy it independently, exactly like a one-off site.
- **`_template/` stays clean** — it's never the thing you send to a partner, so it's always safe to
  copy from without un-picking someone else's real numbers and copy first.
- **`internal-industry-partner-demo/`** is the generic pitch you show around inside myBlueprint —
  same content as the template, kept as its own folder so it doesn't drift if `_template/` changes
  later without you noticing.
