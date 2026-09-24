import { EMAIL, FACEBOOK, PHONE, PHONE_DISPLAY, type Content, type Lang } from "./content";

const esc = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const whatsappUrl = (c: Content): string =>
  `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(c.whatsappMessage)}`;

const ICON_CHAT =
  '<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 21l2-4.9A8.4 8.4 0 0 1 3.1 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>';
const ICON_CHECK =
  '<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

const langToggle = (lang: Lang): string => `
  <div class="lang" role="group" aria-label="Language / שפה">
    <button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button>
    <button type="button" data-lang="he" aria-pressed="${lang === "he"}">עב</button>
  </div>`;

const nav = (c: Content): string => `
<header class="nav">
  <div class="nav-in">
    <a class="logo" href="#top"><span>Casa Letizia</span><small>Bagni di Lucca · Tuscany</small></a>
    <nav class="nav-links" aria-label="Sections">
      <a href="#story">${esc(c.nav.story)}</a>
      <a href="#house">${esc(c.nav.house)}</a>
      <a href="#photos">${esc(c.nav.photos)}</a>
      <a href="#area">${esc(c.nav.area)}</a>
      <a href="#know">${esc(c.nav.know)}</a>
    </nav>
    <div class="nav-right">
      ${langToggle(c.lang)}
      <a class="btn btn-primary btn-sm nav-cta" href="${whatsappUrl(c)}" target="_blank" rel="noopener">${ICON_CHAT}${esc(c.nav.cta)}</a>
    </div>
  </div>
</header>`;

const hero = (c: Content): string => `
<section class="hero" id="top">
  <div class="hero-copy">
    <p class="eyebrow">${esc(c.hero.eyebrow)}</p>
    <h1>${esc(c.hero.headline)} <em>${esc(c.hero.headlineAccent)}</em></h1>
    <p class="pitch">${esc(c.hero.pitch)}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="${whatsappUrl(c)}" target="_blank" rel="noopener">${ICON_CHAT}${esc(c.hero.primary)}</a>
      <a class="btn btn-outline" href="#photos">${esc(c.hero.secondary)}</a>
    </div>
    <ul class="trust">
      ${c.hero.trust.map((t) => `<li>${ICON_CHECK}${esc(t)}</li>`).join("")}
    </ul>
  </div>
  <div class="mosaic">
    <button type="button" class="mosaic-main" data-lb="0"><img src="images/gallery-1.jpg" alt="${esc(c.alts.facade)}" fetchpriority="high"></button>
    <button type="button" data-lb="1"><img src="images/interior.jpg" alt="${esc(c.alts.living)}"></button>
    <button type="button" data-lb="2"><img src="images/gallery-3.jpg" alt="${esc(c.alts.kitchen)}"></button>
    <a class="mosaic-all" href="#photos">${esc(c.hero.allPhotos)}</a>
  </div>
</section>`;

const facts = (c: Content): string => `
<section class="facts" aria-label="Key facts">
  ${c.facts
    .map(
      (f) => `<div class="fact"><span class="k">${esc(f.label)}</span><span class="v">${esc(f.value)}${f.tag ? `<span class="tag">${esc(f.tag)}</span>` : ""}</span></div>`,
    )
    .join("")}
</section>`;

const story = (c: Content): string => {
  const [first, second, ...rest] = c.story.paragraphs;
  return `
<section class="story" id="story">
  <div class="story-side">
    <p class="eyebrow">${esc(c.story.eyebrow)}</p>
    <h2>${esc(c.story.title)}</h2>
    <p class="pull">${esc(c.story.quote)}</p>
  </div>
  <div class="story-body prose">
    <p>${esc(first ?? "")}</p>
    <p>${esc(second ?? "")}</p>
    <div id="story-more" hidden>${rest.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    <button type="button" class="link-btn" id="story-toggle" aria-expanded="false" aria-controls="story-more" data-more="${esc(c.story.readMore)}" data-less="${esc(c.story.readLess)}">${esc(c.story.readMore)}</button>
  </div>
</section>`;
};

const band = (c: Content): string => `
<figure class="band">
  <img src="images/interior.jpg" alt="${esc(c.alts.band)}" loading="lazy">
  <figcaption>${esc(c.band.caption)}</figcaption>
</figure>`;

const house = (c: Content): string => `
<section class="house" id="house">
  <div class="house-copy prose">
    <p class="eyebrow">${esc(c.house.eyebrow)}</p>
    <h2>${esc(c.house.title)}</h2>
    ${c.house.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
  </div>
  <aside class="included">
    <div class="card">
      <h3>${esc(c.house.includedTitle)}</h3>
      <ul>${c.house.included.map((i) => `<li>${ICON_CHECK}<span>${esc(i)}</span></li>`).join("")}</ul>
    </div>
    <p class="note">${esc(c.house.ratesNote)} <a href="#know">${esc(c.house.ratesLink)}</a></p>
  </aside>
</section>`;

const gallery = (c: Content): string => `
<section class="gallery" id="photos">
  <div class="gallery-head">
    <div><p class="eyebrow">${esc(c.gallery.eyebrow)}</p><h2>${esc(c.gallery.title)}</h2></div>
    <span class="hint">${esc(c.gallery.hint)}</span>
  </div>
  <div class="grid" id="gallery-grid">
    ${c.gallery.photos
      .map(
        (p, i) => `<button type="button" data-lb="${i}"><img src="${p.src}" alt="${esc(p.alt)}" loading="lazy"></button>`,
      )
      .join("")}
  </div>
</section>`;

const guests = (c: Content): string => `
<section class="guests">
  <div class="guests-in">
    <div class="guests-copy">
      <p class="eyebrow">${esc(c.guests.eyebrow)}</p>
      <blockquote>${esc(c.guests.quote)}</blockquote>
      <div class="prose muted">
        ${c.guests.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        <p>${esc(c.guests.closing)}</p>
      </div>
      <p class="sig">${esc(c.guests.signature)}</p>
    </div>
    <figure>
      <img src="images/guestbook.jpg" alt="${esc(c.alts.guestbook)}" loading="lazy">
      <figcaption>${esc(c.guests.caption)}</figcaption>
    </figure>
  </div>
</section>`;

const area = (c: Content): string => `
<section class="area" id="area">
  <div class="area-side">
    <p class="eyebrow">${esc(c.area.eyebrow)}</p>
    <h2>${esc(c.area.title)}</h2>
    <dl class="distances">
      ${c.area.distances.map((d) => `<div><dt>${esc(d.place)}</dt><dd>${esc(d.time)}</dd></div>`).join("")}
    </dl>
  </div>
  <div class="area-body">
    <img src="images/landscape.jpg" alt="${esc(c.alts.landscape)}" loading="lazy">
    <div class="prose">${c.area.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
  </div>
</section>
<section class="activities" aria-labelledby="act-title">
  <h3 id="act-title">${esc(c.activities.title)}</h3>
  <div class="rows">
    ${c.activities.items.map((a) => `<div class="row"><strong>${esc(a.title)}</strong><span>${esc(a.text)}</span></div>`).join("")}
  </div>
</section>`;

const know = (c: Content): string => `
<section class="know" id="know">
  <div class="know-side">
    <p class="eyebrow">${esc(c.know.eyebrow)}</p>
    <h2>${esc(c.know.title)}</h2>
  </div>
  <div class="rows two">
    ${c.know.items.map((k) => `<div class="row"><strong>${esc(k.title)}</strong><span>${esc(k.text)}</span></div>`).join("")}
  </div>
</section>`;

const cta = (c: Content): string => `
<section class="cta" id="contact">
  <div class="cta-copy">
    <h2>${esc(c.cta.title)}</h2>
    <p>${esc(c.cta.text)}</p>
  </div>
  <div class="cta-actions">
    <a class="btn btn-wa" href="${whatsappUrl(c)}" target="_blank" rel="noopener">${ICON_CHAT}${esc(c.cta.whatsapp)}</a>
    <a class="btn btn-ghost" href="mailto:${EMAIL}">${esc(c.cta.email)}</a>
    <span class="contact-line"><a href="tel:${PHONE}">${PHONE_DISPLAY}</a> · <a href="mailto:${EMAIL}">${EMAIL}</a></span>
  </div>
</section>`;

const footer = (c: Content): string => `
<footer class="footer">
  <span class="wordmark">Casa Letizia</span>
  <span>${esc(c.footer.line)} · <a href="${FACEBOOK}" target="_blank" rel="noopener">Facebook</a></span>
  <span>${esc(c.footer.rights)}</span>
</footer>
<div class="sticky-cta">
  <a class="btn btn-wa" href="${whatsappUrl(c)}" target="_blank" rel="noopener">${ICON_CHAT}${esc(c.nav.cta)}</a>
</div>
<div class="lightbox" id="lightbox" hidden>
  <button type="button" class="lb-close" data-lb-close aria-label="${esc(c.lightbox.close)}">✕</button>
  <button type="button" class="lb-nav lb-prev" data-lb-prev aria-label="${esc(c.lightbox.prev)}">‹</button>
  <figure><img id="lightbox-img" src="" alt=""><figcaption id="lightbox-cap"></figcaption></figure>
  <button type="button" class="lb-nav lb-next" data-lb-next aria-label="${esc(c.lightbox.next)}">›</button>
</div>`;

export const renderPage = (c: Content): string =>
  [nav, hero, facts, story, band, house, gallery, guests, area, know, cta, footer].map((s) => s(c)).join("\n");
