/* ================================================================
   Rendering + interaction logic. Reads everything from CONFIG
   (config.js, loaded before this file). You shouldn't need to
   edit this file for routine content changes.
   ================================================================ */

const fmt = (n) => "$" + n.toLocaleString("en-US");

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ---------- NAV ---------- */
document.getElementById("nav-partner-name").textContent = "myBlueprint × " + CONFIG.partnerName;
const navLinksEl = document.getElementById("nav-links");
CONFIG.sections.forEach((s) => {
  const a = el("a", "nav-link hover:text-white transition-colors", s.label);
  a.href = "#" + s.id;
  a.dataset.section = s.id;
  navLinksEl.appendChild(a);
});

/* ---------- HERO ---------- */
document.getElementById("hero-mb-logo").src = CONFIG.logos.myBlueprint.src;
document.getElementById("hero-mb-logo").alt = CONFIG.logos.myBlueprint.alt;
document.getElementById("hero-partner-logo").src = CONFIG.logos.partner.src;
document.getElementById("hero-partner-logo").alt = CONFIG.logos.partner.alt;
document.getElementById("hero-label").textContent = CONFIG.hero.label;
document.getElementById("hero-headline").innerHTML = CONFIG.hero.headline.split("\n").map(l => `<span>${l}</span>`).join("<br/>");
document.getElementById("hero-subheadline").textContent = CONFIG.hero.subheadline;

const heroStatsEl = document.getElementById("hero-stats");
CONFIG.hero.stats.forEach((s) => {
  heroStatsEl.appendChild(el("div", "text-center sm:px-8", `
    <p class="text-2xl md:text-3xl font-bold text-white tabular-nums">${s.value}</p>
    <p class="text-compact text-white/50 mt-1">${s.label}</p>
  `));
});

/* ---------- OPPORTUNITY ---------- */
document.getElementById("opp-heading").textContent = CONFIG.opportunity.heading;
const oppParaEl = document.getElementById("opp-paragraphs");
CONFIG.opportunity.paragraphs.forEach((p) => {
  oppParaEl.appendChild(el("p", "reveal text-body-2 text-text-secondary leading-relaxed", p));
});
document.getElementById("opp-callout-label").textContent = CONFIG.opportunity.callout.label;
const oppStatsEl = document.getElementById("opp-callout-stats");
CONFIG.opportunity.callout.stats.forEach((s, i) => {
  const wrap = el("div", i === 0 ? "mb-6" : "border-t border-mb-blue/15 pt-6 mb-6");
  wrap.innerHTML = `
    <p class="text-mb-navy text-2xl md:text-3xl font-bold leading-tight">${s.value}</p>
    <p class="text-mb-navy text-body-2 font-medium mt-1 flex items-center gap-1.5">
      ${s.label}
      ${s.tooltip ? `<span class="relative group/tip inline-flex">
        <span class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-mb-blue/15 text-mb-blue text-[10px] font-bold cursor-help select-none leading-none">i</span>
        <span class="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 rounded-lg bg-mb-navy text-white text-compact leading-relaxed p-3 shadow-lg opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200 z-50">${s.tooltip}</span>
      </span>` : ""}
    </p>`;
  oppStatsEl.appendChild(wrap);
});
document.getElementById("opp-callout-sources").textContent = CONFIG.opportunity.callout.sources;

/* ---------- THE PACKAGE ---------- */
document.getElementById("pkg-eyebrow").textContent = CONFIG.package.eyebrow;
document.getElementById("pkg-heading").textContent = CONFIG.package.heading;
document.getElementById("pkg-subheading").textContent = CONFIG.package.subheading;
document.getElementById("pkg-intro").textContent = CONFIG.package.intro;

const dotColor = { blue: "bg-mb-blue", navy: "bg-mb-navy", "light-blue": "bg-mb-light-blue" };

const pkgTilesEl = document.getElementById("pkg-tiles");
CONFIG.package.components.forEach((c) => {
  const wrap = el("div", "reveal rounded-2xl border-2 border-border-light p-6 flex flex-col");
  wrap.innerHTML = `
    <div class="flex items-center gap-2 mb-3">
      <div class="w-3 h-3 rounded-full ${dotColor[c.color] || "bg-mb-blue"}"></div>
      <span class="text-subtitle-1 font-semibold uppercase tracking-wider text-text-muted">${c.stage}${c.subtitle ? " · " + c.subtitle : ""}</span>
    </div>
    <h3 class="text-h4 font-display font-black text-mb-navy mb-2">${c.name}</h3>
    <p class="text-compact text-text-secondary leading-relaxed mb-3 flex-grow">${c.summary}</p>
    <span class="inline-flex items-center justify-center text-subtitle-1 font-medium px-3 py-1.5 rounded-full text-mb-navy bg-mb-navy/10 mb-4 self-start">${c.timing}</span>
    <div class="pkg-detail hidden text-compact text-text-secondary leading-relaxed border-t border-border-light pt-4 mb-4 space-y-2">
      <p><span class="font-semibold text-mb-navy">Format:</span> ${c.format}</p>
      <p><span class="font-semibold text-mb-navy">Audience:</span> ${c.audience}</p>
      <p><span class="font-semibold text-mb-navy">Value prop:</span> ${c.valueProp}</p>
      <p class="text-text-muted pt-1"><span class="font-semibold text-mb-navy">Partner effort:</span> ${c.partnerEffort}</p>
      ${c.link ? `<a href="${c.link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-mb-blue hover:text-[var(--mb-blue-hover)] font-medium pt-1">${c.link.label} →</a>` : ""}
    </div>
    <button class="pkg-learn-more flex items-center justify-center gap-1 text-subtitle-1 font-medium text-mb-navy/60 hover:text-mb-navy mt-auto py-1.5 cursor-pointer">
      <span class="pkg-learn-more-label">Learn more</span>
      <svg class="chevron" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </button>
  `;
  const btn = wrap.querySelector(".pkg-learn-more");
  const label = wrap.querySelector(".pkg-learn-more-label");
  const chevron = wrap.querySelector(".chevron");
  const detail = wrap.querySelector(".pkg-detail");
  btn.addEventListener("click", () => {
    const opening = detail.classList.contains("hidden");
    detail.classList.toggle("hidden");
    chevron.classList.toggle("open", opening);
    label.textContent = opening ? "Show less" : "Learn more";
  });
  pkgTilesEl.appendChild(wrap);
});

const pkgReasonsEl = document.getElementById("pkg-reasons");
CONFIG.package.reasons.forEach((r) => {
  pkgReasonsEl.appendChild(el("li", "flex items-start gap-3", `
    <svg class="mt-0.5 w-5 h-5 text-mb-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
    <span class="text-compact text-text-secondary leading-relaxed">${r}</span>
  `));
});
document.getElementById("pkg-engagement-title").textContent = CONFIG.package.engagement.title;
document.getElementById("pkg-engagement-desc").textContent = CONFIG.package.engagement.desc;

/* ---------- PRICING ---------- */
document.getElementById("price-eyebrow").textContent = CONFIG.pricingSection.eyebrow;
document.getElementById("price-heading").textContent = CONFIG.pricingSection.heading;
document.getElementById("price-desc").textContent = CONFIG.pricingSection.desc;
document.getElementById("scope-label").textContent = CONFIG.scope.label;
document.getElementById("scope-note").textContent = CONFIG.scope.note;

const state = {
  tier: CONFIG.pricingOptions.find((o) => o.recommended)?.id || CONFIG.pricingOptions[0].id,
  scope: CONFIG.scope.default,
  provinces: new Set(),
};

const pricingOptionsEl = document.getElementById("pricing-options");
function renderPricingOptions() {
  pricingOptionsEl.innerHTML = "";
  CONFIG.pricingOptions.forEach((opt) => {
    const selected = state.tier === opt.id;
    const card = el("div", `option-card p-5 ${selected ? "selected" : ""}`, `
      <div class="flex items-start justify-between gap-3 mb-2">
        <span class="font-semibold text-mb-navy text-compact">${opt.label}</span>
        ${opt.recommended ? `<span class="text-subtitle-2 font-bold uppercase tracking-wider text-mb-blue bg-mb-light-blue px-2 py-1 rounded-full shrink-0">Recommended</span>` : ""}
      </div>
      <p class="text-2xl font-bold text-mb-navy tabular-nums mb-2">${fmt(opt.price)}</p>
      <p class="text-subtitle-1 text-text-secondary leading-relaxed">${opt.note}</p>
    `);
    card.addEventListener("click", () => { state.tier = opt.id; renderAll(); });
    pricingOptionsEl.appendChild(card);
  });
}

const scopeButtonsEl = document.getElementById("scope-buttons");
function renderScopeButtons() {
  scopeButtonsEl.innerHTML = "";
  CONFIG.scope.options.forEach((opt) => {
    const selected = state.scope === opt.id;
    const btn = el("button", `scope-btn ${selected ? "selected" : ""} px-5 py-2.5 rounded-xl text-compact font-medium`, opt.label);
    btn.addEventListener("click", () => { state.scope = opt.id; renderAll(); });
    scopeButtonsEl.appendChild(btn);
  });
}

const scopeProvincesEl = document.getElementById("scope-provinces");
function renderScopeProvinces() {
  const show = state.scope === "province-specific";
  scopeProvincesEl.classList.toggle("hidden", !show);
  scopeProvincesEl.innerHTML = "";
  if (!show) return;
  CONFIG.scope.provinces.forEach((p) => {
    const checked = state.provinces.has(p.id);
    const label = el("label", `flex items-center gap-2.5 rounded-lg px-3 py-2.5 cursor-pointer transition-colors text-compact ${checked ? "bg-mb-navy/10 text-mb-navy font-medium" : "bg-white text-text-secondary hover:bg-neutral-1"}`, `
      <div class="checkbox-box" style="${checked ? "background:#22224C;border-color:#22224C" : ""}">
        ${checked ? `<svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>` : ""}
      </div>
      ${p.label}
    `);
    label.addEventListener("click", (e) => {
      e.preventDefault();
      if (state.provinces.has(p.id)) state.provinces.delete(p.id);
      else state.provinces.add(p.id);
      renderAll();
    });
    scopeProvincesEl.appendChild(label);
  });
}

function currentPrice() {
  return CONFIG.pricingOptions.find((o) => o.id === state.tier).price;
}

function scopeNoteText() {
  if (state.scope === "canada-wide") return "Canada-wide activation";
  if (state.provinces.size === 0) return "Province-specific — no provinces selected yet";
  const labels = CONFIG.scope.provinces.filter((p) => state.provinces.has(p.id)).map((p) => p.label);
  return "Province-specific — " + labels.join(", ");
}

function renderSummary() {
  const tier = CONFIG.pricingOptions.find((o) => o.id === state.tier);
  const summaryEl = document.getElementById("summary-lines");
  summaryEl.innerHTML = "";
  CONFIG.package.components.forEach((c) => {
    summaryEl.appendChild(el("div", "flex items-start justify-between gap-4", `
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-mb-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
        <span class="text-compact text-white/90">${c.name}</span>
      </div>
    `));
  });
  summaryEl.appendChild(el("div", "flex items-start justify-between gap-4 pt-1", `
    <span class="text-compact text-white/60">${tier.label}</span>
  `));

  const total = fmt(currentPrice());
  document.getElementById("summary-total").textContent = total;
  document.getElementById("mobile-total").textContent = total;
  document.getElementById("summary-scope-note").textContent = scopeNoteText();
}

function renderAll() {
  renderPricingOptions();
  renderScopeButtons();
  renderScopeProvinces();
  renderSummary();
}
renderAll();

["summary-cta", "mobile-cta", "contact-cta"].forEach((id) => {
  document.getElementById(id).href = CONFIG.contact.schedulingUrl;
});

/* ---------- ABOUT ---------- */
document.getElementById("about-eyebrow").textContent = CONFIG.about.eyebrow;
document.getElementById("about-heading").textContent = CONFIG.about.heading;
document.getElementById("about-desc").textContent = CONFIG.about.description;
document.getElementById("about-link").href = CONFIG.about.url;
const aboutStatsEl = document.getElementById("about-stats");
CONFIG.about.stats.forEach((s) => {
  aboutStatsEl.appendChild(el("div", "reveal bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center", `
    <p class="text-3xl md:text-4xl font-bold text-white tabular-nums mb-2">${s.value}</p>
    <p class="text-white/50 text-compact">${s.label}</p>
  `));
});

/* ---------- NEXT STEPS ---------- */
document.getElementById("next-heading").textContent = CONFIG.nextSteps.heading;
document.getElementById("next-desc").textContent = CONFIG.nextSteps.description;
document.getElementById("contact-name").textContent = CONFIG.contact.name;
document.getElementById("contact-title").textContent = CONFIG.contact.title;
document.getElementById("contact-email").href = "mailto:" + CONFIG.contact.email;
document.getElementById("contact-email-text").textContent = CONFIG.contact.email;
document.getElementById("next-footer").textContent = CONFIG.nextSteps.footerText;

/* ---------- SCROLL REVEAL ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((e) => io.observe(e));

/* ---------- SCROLLSPY NAV ---------- */
const sectionEls = CONFIG.sections.map((s) => document.getElementById(s.id)).filter(Boolean);
const navAnchors = Array.from(document.querySelectorAll(".nav-link"));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navAnchors.forEach((a) => a.classList.toggle("active", a.dataset.section === entry.target.id));
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });
sectionEls.forEach((s) => spy.observe(s));

navAnchors.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById(a.dataset.section).scrollIntoView({ behavior: "smooth" });
  });
});

const nav = document.getElementById("site-nav");
window.addEventListener("scroll", () => {
  nav.style.opacity = window.scrollY > 400 ? "1" : "0";
  nav.style.pointerEvents = window.scrollY > 400 ? "auto" : "none";
});
nav.style.transition = "opacity .2s ease";
nav.style.opacity = "0";
