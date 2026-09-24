import "./styles.css";
import { content, type Lang } from "./content";
import { renderPage } from "./render";

const STORAGE_KEY = "cl-lang";
const app = document.getElementById("app");
if (!app) throw new Error("#app missing");

/* ---------- language ---------- */

const isLang = (v: unknown): v is Lang => v === "he" || v === "en";

function detectLang(): Lang {
  const q = new URLSearchParams(location.search).get("lang");
  if (isLang(q)) return q;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  return /^he/i.test(navigator.language ?? "") ? "he" : "en";
}

function applyLang(lang: Lang): void {
  const c = content[lang];
  const root = document.documentElement;
  root.lang = lang;
  root.dir = c.dir;
  document.title = c.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", c.metaDescription);
  app!.innerHTML = renderPage(c);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  try {
    const url = new URL(location.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  } catch {
    /* ignore */
  }
  wire(lang);
}

/* ---------- behaviour ---------- */

function wire(lang: Lang): void {
  const c = content[lang];

  // language toggle
  app!.querySelectorAll<HTMLButtonElement>("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      const next = b.dataset.lang;
      if (isLang(next) && next !== lang) {
        const y = window.scrollY;
        applyLang(next);
        window.scrollTo({ top: y });
      }
    });
  });

  // story expander
  const toggle = document.getElementById("story-toggle") as HTMLButtonElement | null;
  const more = document.getElementById("story-more");
  if (toggle && more) {
    toggle.addEventListener("click", () => {
      const open = more.hidden;
      more.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? (toggle.dataset.less ?? "") : (toggle.dataset.more ?? "");
    });
  }

  // lightbox
  const photos = c.gallery.photos;
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img") as HTMLImageElement | null;
  const lbCap = document.getElementById("lightbox-cap");
  let idx = 0;
  let lastFocus: HTMLElement | null = null;

  const show = (i: number): void => {
    if (!lb || !lbImg || !lbCap) return;
    idx = (i + photos.length) % photos.length;
    const p = photos[idx];
    if (!p) return;
    lbImg.src = p.src;
    lbImg.alt = p.alt;
    lbCap.textContent = p.alt;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const hide = (): void => {
    if (!lb) return;
    lb.hidden = true;
    document.body.style.overflow = "";
    lastFocus?.focus();
  };

  app!.querySelectorAll<HTMLButtonElement>("[data-lb]").forEach((b) => {
    b.addEventListener("click", () => {
      lastFocus = b;
      show(Number(b.dataset.lb));
    });
  });
  lb?.querySelector("[data-lb-close]")?.addEventListener("click", hide);
  lb?.querySelector("[data-lb-prev]")?.addEventListener("click", () => show(idx - 1));
  lb?.querySelector("[data-lb-next]")?.addEventListener("click", () => show(idx + 1));
  lb?.addEventListener("click", (e) => {
    if (e.target === lb) hide();
  });
  document.onkeydown = (e: KeyboardEvent): void => {
    if (!lb || lb.hidden) return;
    if (e.key === "Escape") hide();
    // Arrow keys follow reading direction
    const forward = c.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const back = c.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    if (e.key === forward) show(idx + 1);
    if (e.key === back) show(idx - 1);
  };

  // hide the mobile sticky bar while the big CTA panel is on screen
  const sticky = app!.querySelector<HTMLElement>(".sticky-cta");
  const panel = document.getElementById("contact");
  if (sticky && panel && "IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        const visible = entries.some((en) => en.isIntersecting);
        sticky.classList.toggle("is-hidden", visible);
      },
      { threshold: 0.2 },
    ).observe(panel);
  }
}

applyLang(detectLang());
