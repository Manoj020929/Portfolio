/* =========================================================
   Portfolio Scripts
   ========================================================= */

/* ---------- CONFIG: edit these ---------- */
const CONFIG = {
  // Where contact messages go when no form service is configured (mailto fallback).
  email: "your.email@example.com",
  // OPTIONAL: paste a Formspree / Getform / Web3Forms endpoint to receive messages
  // without opening the visitor's mail app. Example: "https://formspree.io/f/xxxxxxx"
  formEndpoint: "",
  // Typing animation roles
  roles: ["Python Full Stack Developer", "Django Developer", "React.js Developer", "Problem Solver"],
};

/* ---------- Icon set (inline SVG, no external requests) ---------- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Inject icons ---------- */
function injectIcons() {
  $$("[data-icon]").forEach((el) => {
    const svg = ICONS[el.dataset.icon];
    if (svg) el.insertAdjacentHTML("afterbegin", svg);
  });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const toggle = $("#menuToggle");
  const links = $("#navLinks");
  const close = () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$(".nav-link", links).forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  window.addEventListener("resize", () => window.innerWidth > 860 && close());
}

/* ---------- Scroll effects: navbar, progress bar, back-to-top ---------- */
function initScrollEffects() {
  const navbar = $("#navbar");
  const progress = $("#scrollProgress");
  const backTop = $("#backTop");

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    navbar.classList.toggle("scrolled", y > 30);
    progress.style.width = max > 0 ? `${(y / max) * 100}%` : "0";
    backTop.classList.toggle("show", y > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Active nav link on scroll ---------- */
function initScrollSpy() {
  const links = $$(".nav-link");
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => obs.observe(s));
}

/* ---------- Reveal on scroll (with small stagger inside grids) ---------- */
function initReveal() {
  $$(".skills-grid, .projects-grid, .cert-grid, .timeline, .highlights").forEach((group) => {
    $$(".reveal", group).forEach((el, i) => el.style.setProperty("--d", `${i * 0.1}s`));
  });
  const obs = new IntersectionObserver(
    (entries, o) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          o.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => obs.observe(el));
}

/* ---------- Typing animation for the role ---------- */
function initTyping() {
  const el = $(".role");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cursor = $(".cursor", el);
  const textNode = document.createTextNode("");
  el.insertBefore(textNode, cursor);

  let r = 0, c = 0, deleting = false;
  const tick = () => {
    const word = CONFIG.roles[r];
    textNode.nodeValue = word.slice(0, c);
    let delay = deleting ? 45 : 85;
    if (!deleting && c === word.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % CONFIG.roles.length; delay = 400; }
    c += deleting ? -1 : 1;
    setTimeout(tick, delay);
  };
  tick();
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  const btn = $("#submitBtn");

  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address."),
    subject: (v) => (v.trim().length >= 3 ? "" : "Please enter a subject."),
    message: (v) => (v.trim().length >= 10 ? "" : "Message should be at least 10 characters."),
  };

  const validateField = (input) => {
    const msg = rules[input.name](input.value);
    const field = input.closest(".field");
    field.classList.toggle("invalid", !!msg);
    $(".error", field).textContent = msg;
    return !msg;
  };

  $$("input, textarea", form).forEach((i) => {
    i.addEventListener("blur", () => validateField(i));
    i.addEventListener("input", () => i.closest(".field").classList.contains("invalid") && validateField(i));
  });

  const setStatus = (text, type) => {
    status.textContent = text;
    status.className = `form-status ${type || ""}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputs = $$("input, textarea", form);
    const valid = inputs.map(validateField).every(Boolean);
    if (!valid) return setStatus("Please fix the highlighted fields.", "fail");

    const data = Object.fromEntries(new FormData(form));

    // Option A: send through a form service (Formspree, Getform, etc.)
    if (CONFIG.formEndpoint) {
      btn.disabled = true;
      btn.textContent = "Sending...";
      try {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
        form.reset();
        setStatus("Thank you! Your message has been sent.", "ok");
      } catch {
        setStatus("Something went wrong. Please try again or email me directly.", "fail");
      } finally {
        btn.disabled = false;
        btn.textContent = "Send Message";
      }
      return;
    }

    // Option B (default): open the visitor's email app with the message pre-filled
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("Opening your email app to send the message...", "ok");
    form.reset();
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  initMenu();
  initScrollEffects();
  initScrollSpy();
  initReveal();
  initTyping();
  initContactForm();
  $("#year").textContent = new Date().getFullYear();
});
