# Partner Proposal Template

A single reusable landing page for myBlueprint partner/sponsorship proposals.

## Files
- `index.html` — page structure. Rarely needs editing.
- `styles.css` — brand colors (from the myBlueprint Brand Style Guide) and component styles.
- `config.js` — **all partner-specific content lives here.** This is what you edit for a new proposal.
- `app.js` — rendering + interaction logic. Reads from `config.js`. Rarely needs editing.
- `assets/` — logo files (see below).

## The pricing model

Pricing is a mandatory **Core Package** (`CONFIG.foundation`) plus optional **à la carte upgrades**
(`CONFIG.upgrades.options`). The "Your Package" summary and the mobile total bar always show the
Core Package price, plus a line (with a leading `+`) for each upgrade the visitor has clicked to
add. The big total at the bottom is `foundation.price + sum of selected upgrades` — nothing is
hardcoded, so adding a third upgrade later is just adding another object to `upgrades.options`.

The **Activation Scope** selector (Canada-wide vs. Province-specific) is informational only — it
never affects price, just what gets recorded/reported as the note under the total.

## Managing logos

Logos are image files in `/assets`, referenced by path in `config.js`:

```js
logos: {
  myBlueprint: { src: "assets/myblueprint-logo.png", alt: "myBlueprint" },
  partner:     { src: "assets/partner-logo.png", alt: "Partner Name" },
},
```

**No partner logo yet?** Leave `logos.partner.src` as an empty string (`""`). The hero will
automatically show a dashed "Your Logo Here" placeholder chip instead of a broken image — useful
while a proposal is still in progress, before the partner has sent their logo over.

**To add a real partner's logo:**
1. Drop their logo file into `assets/` (PNG or SVG both work; SVG scales better).
2. Set `logos.partner.src` in `config.js` to that filename.
3. Set `logos.partner.alt` to the partner's name.

Both logos render inside small white rounded "chips" in the hero rather than being color-filtered
to match the dark background — this is deliberate. It means every logo shows in its real, correct
brand colors regardless of whether the source file has a transparent background (a CSS invert
filter on an opaque PNG turns the whole rectangle solid white, hiding the logo — this actually
happened once with an early asset, which is why the chip approach replaced it).

**Quick check when a logo looks wrong:** open the page in a browser, right-click → Inspect →
Network tab, reload, and look for a 404 on the image path. A logo rendering as a plain colored
block almost always means the image failed to load — usually because `assets/` isn't sitting
directly next to `index.html`, or the filename in `config.js` doesn't exactly match the file on
disk (case-sensitive on Mac/Linux, even if not on Windows).

**File naming convention:** `assets/<partner-slug>-logo.png` (e.g. `win-canada-logo.png`) keeps
things predictable as this folder accumulates logos across proposals.

## Reusing this template for a new proposal
1. Copy the whole folder, renamed to the partner's slug (e.g. `acme-corp/`).
2. Replace/add the partner's logo file in `assets/`.
3. Edit `config.js` top to bottom — hero copy, opportunity stats, package copy, pricing, contact info.
4. Preview with VS Code's Live Server extension (or `python3 -m http.server`) before sending.
