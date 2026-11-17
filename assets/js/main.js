/* ==========================================================================
   Site configuration — edit contact details here; every page updates.
   ========================================================================== */
const SITE = {
  name: "Mohammad Rafiq Azad",
  title: "Advocate",
  chamber: "Chamber No. 786 & 92",
  court: "New Court Complex",
  city: "Jalandhar, Punjab, India",
  phoneDisplay: "+91 70096 46869",
  phoneRaw: "+917009646869",
  whatsapp: "917009646869",
  email: "",                       // e.g. "contact@yourdomain.com" — leave empty to hide
  hours: "Open 24 Hours · All 7 Days",
  hoursNote: "Call or WhatsApp anytime, day or night",
  languages: "Hindi, Punjabi & English",
  mapQuery: "District Courts Jalandhar Punjab",
  // Website address (change when you buy your own domain, e.g. "https://www.yourdomain.in/")
  siteUrl: "https://azadadvocate.github.io/",
  // Paste your Google Business Profile link here (Google Maps → your profile → Share → Copy link)
  googleBusiness: "https://share.google/HQ6wc0MuZdKfEx9Nq",
  // Google Analytics 4 Measurement ID (looks like "G-AB12CD34EF"). Leave empty to switch visitor tracking off.
  analyticsId: ""
};

const NAV = [
  ["index.html", "Home", "home"],
  ["about.html", "About", "about"],
  ["services.html", "Practice Areas", "services"],
  ["online-services.html", "Online Services", "online"],
  ["drafting.html", "Drafting", "drafting"],
  ["resources.html", "Legal Resources", "resources"],
  ["contact.html", "Contact", "contact"]
];

const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text || "Hello Advocate Mohammad Rafiq Azad, I would like a legal consultation.")}`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
};

/* ---------- Visitor analytics (Google Analytics 4) ----------
 * Tracks page views plus these events (no names, phone numbers or form text are ever sent):
 *   whatsapp_click   {service, category, link_location}   any WhatsApp button
 *   call_click       {link_location}                      any phone-call button
 *   drafting_request {document, doc_group, source}         Drafting Desk / custom document request
 *   view_service     {service, category}                  service details opened on Practice Areas
 *   search           {search_term, search_location}       site search boxes and popular buttons
 *   generate_lead    {area_of_law, consult_mode}          consultation form sent to WhatsApp
 */
function track(name, params) {
  if (!SITE.analyticsId || typeof window.gtag !== "function") return;
  try { window.gtag("event", name, Object.assign({ page_type: document.body.dataset.page || "" }, params || {})); } catch (e) { /* ignore */ }
}

function waDetails(href) {
  let text = "";
  try { text = new URL(href).searchParams.get("text") || ""; } catch (e) { return {}; }
  let m = text.match(/drafted:\s*(.+)\s\(([^()]+)\)\.\s*Please/);
  if (m) return { document: m[1].trim(), doc_group: m[2].trim() };
  m = text.match(/drafted:\s*([^.]+)\./);
  if (m) return { document: m[1].trim() };
  m = text.match(/(?:regarding|interested in):?\s*(.+?)(?:\s\(([^()]+)\))?\.\s*$/);
  if (m && m[1].trim()) return { service: m[1].trim(), category: (m[2] || "").trim() };
  if (/\bNRI\b/.test(text)) return { service: "NRI enquiry" };
  return {};
}

function linkLocation(el) {
  if (el.closest(".float-actions")) return "floating_button";
  if (el.closest(".topbar")) return "top_bar";
  if (el.closest("footer")) return "footer";
  if (el.closest(".modal")) return "service_popup";
  if (el.closest("#siteResults")) return "home_search_results";
  const sec = el.closest("section");
  if (sec) return sec.id || (sec.className || "").split(" ")[0] || "section";
  return "page";
}

function initAnalytics() {
  const id = (SITE.analyticsId || "").trim();
  if (!/^G-[A-Z0-9]+$/i.test(id)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id);
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
  document.head.appendChild(s);

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (/^https:\/\/wa\.me\//.test(href)) {
      const info = waDetails(href);
      const item = a.closest(".draft-item");
      if (item) {
        info.document = item.dataset.name;
        const g = item.closest(".draft-group");
        info.doc_group = g ? g.querySelector("h2").textContent.trim() : info.doc_group;
      }
      track("whatsapp_click", Object.assign({ link_location: linkLocation(a) }, info));
      if (info.document) track("drafting_request", { document: info.document, doc_group: info.doc_group || "", source: linkLocation(a) });
    } else if (href.startsWith("tel:")) {
      track("call_click", { link_location: linkLocation(a) });
    }
  });

  const timers = {}, sent = {};
  [["siteSearch", "home"], ["svcSearch", "practice_areas"], ["draftSearch", "drafting_desk"]].forEach(([elId, where]) => {
    const input = document.getElementById(elId);
    if (!input) return;
    input.addEventListener("input", () => {
      clearTimeout(timers[where]);
      timers[where] = setTimeout(() => {
        const q = input.value.trim().toLowerCase();
        if (q.length >= 3 && q !== sent[where]) { sent[where] = q; track("search", { search_term: q, search_location: where }); }
      }, 1500);
    });
  });
  document.querySelectorAll("[data-q]").forEach((b) =>
    b.addEventListener("click", () => track("search", { search_term: b.dataset.q.toLowerCase(), search_location: "home_popular" })));
}

/* ---------- Header ---------- */
function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  let page = document.body.dataset.page;
  if (page === "area") page = "services";
  host.outerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="topbar">
    <div class="container">
      <div class="topbar-items">
        <span><i class="fa-solid fa-location-dot"></i>${esc(SITE.chamber)}, ${esc(SITE.court)}, Jalandhar</span>
        <span class="topbar-hide-sm"><i class="fa-regular fa-clock"></i>${esc(SITE.hours)}</span>
      </div>
      <div class="topbar-items">
        <a href="tel:${SITE.phoneRaw}"><i class="fa-solid fa-phone"></i>${esc(SITE.phoneDisplay)}</a>
        <a class="topbar-hide-sm" href="${waLink()}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a>
      </div>
    </div>
  </div>
  <header class="site-header" id="header">
    <div class="container nav-wrap">
      <a class="brand" href="index.html" aria-label="${esc(SITE.name)}, ${esc(SITE.title)} — Home">
        <span class="brand-mark"><i class="fa-solid fa-scale-balanced"></i></span>
        <span class="brand-text">
          <span class="brand-name">${esc(SITE.name)}</span>
          <span class="brand-sub">${esc(SITE.title)} · Jalandhar</span>
        </span>
      </a>
      <nav class="main-nav" id="mainNav" aria-label="Main navigation">
        <button class="nav-toggle nav-close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
        <ul>
          ${NAV.map(([href, label, key]) => `<li><a href="${href}" class="${page === key ? "active" : ""}"${page === key ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
          <li class="nav-cta"><a class="btn btn-gold btn-sm" href="contact.html#book"><i class="fa-regular fa-calendar-check"></i> Book Consultation</a></li>
        </ul>
      </nav>
      <button class="nav-toggle" id="navOpen" aria-label="Open menu" aria-controls="mainNav" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    </div>
  </header>
  <div class="nav-overlay" id="navOverlay"></div>`;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  const cats = (window.LEGAL_CATEGORIES || []).slice(0, 8);
  host.outerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand" href="index.html">
          <span class="brand-mark"><i class="fa-solid fa-scale-balanced"></i></span>
          <span class="brand-text"><span class="brand-name">${esc(SITE.name)}</span><span class="brand-sub">${esc(SITE.title)}</span></span>
        </a>
        <p>Legal advice, drafting and representation in criminal, civil, family, property, corporate, cyber and NRI matters — in chamber and online.</p>
        <p class="footer-disclaimer">As per the rules of the Bar Council of India, this website is meant only to provide information and is not an advertisement or solicitation of work.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          ${NAV.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
          <li><a href="disclaimer.html">Disclaimer & Privacy</a></li>
        </ul>
      </div>
      <div>
        <h4>Practice Areas</h4>
        <ul>
          ${cats.map((c) => `<li><a href="${c.slug}.html">${esc(c.name)}</a></li>`).join("")}
          <li><a href="services.html">View all services &rarr;</a></li>
        </ul>
      </div>
      <div>
        <h4>Chamber</h4>
        <ul class="contact-list">
          <li><i class="fa-solid fa-location-dot"></i><span>${esc(SITE.chamber)},<br>${esc(SITE.court)},<br>${esc(SITE.city)}</span></li>
          <li><i class="fa-solid fa-phone"></i><a href="tel:${SITE.phoneRaw}">${esc(SITE.phoneDisplay)}</a></li>
          <li><i class="fa-brands fa-whatsapp"></i><a href="${waLink()}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
          ${SITE.email ? `<li><i class="fa-solid fa-envelope"></i><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>` : ""}
          <li><i class="fa-regular fa-clock"></i><span>${esc(SITE.hours)}</span></li>
          ${SITE.googleBusiness ? `<li><i class="fa-brands fa-google"></i><a href="${esc(SITE.googleBusiness)}" target="_blank" rel="noopener">Find us on Google</a></li>` : ""}
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>&copy; <span id="year"></span> ${esc(SITE.name)}, ${esc(SITE.title)}. All rights reserved.</span>
        <span><a href="disclaimer.html">Disclaimer</a> · <a href="disclaimer.html#privacy">Privacy Policy</a> · <a href="disclaimer.html#terms">Terms of Use</a></span>
      </div>
    </div>
  </footer>
  <div class="float-actions">
    <button class="float-btn float-top" id="toTop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>
    <a class="float-btn float-call" href="tel:${SITE.phoneRaw}" aria-label="Call ${esc(SITE.phoneDisplay)}"><i class="fa-solid fa-phone"></i></a>
    <a class="float-btn float-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  </div>`;
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- Bar Council of India disclaimer ---------- */
function renderDisclaimer() {
  if (store.get("bci-disclaimer-accepted") === "yes") return;
  if (document.body.dataset.page === "disclaimer") return;
  const el = document.createElement("div");
  el.className = "modal show";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-labelledby", "discTitle");
  el.innerHTML = `
    <div class="modal-box disclaimer-box">
      <div class="seal"><i class="fa-solid fa-scale-balanced"></i></div>
      <h3 id="discTitle">Disclaimer</h3>
      <p>The Bar Council of India does not permit advocates to solicit work or advertise. By clicking <strong>"I Agree"</strong>, you acknowledge that:</p>
      <ul>
        <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort from the advocate to solicit work through this website.</li>
        <li>You wish to gain more information about the advocate and the services for your own information and use.</li>
        <li>The information on this website is not legal advice. Viewing it, or contacting the advocate through it, does not create an advocate–client relationship.</li>
        <li>The advocate is not liable for any action taken by you relying on material or information on this website.</li>
      </ul>
      <div class="disclaimer-actions">
        <button class="btn btn-navy" id="discAgree"><i class="fa-solid fa-check"></i> I Agree</button>
        <a class="btn btn-outline-dark" href="https://www.google.com" rel="noopener">Exit</a>
      </div>
    </div>`;
  document.body.appendChild(el);
  document.body.style.overflow = "hidden";
  const agree = el.querySelector("#discAgree");
  agree.focus();
  agree.addEventListener("click", () => {
    store.set("bci-disclaimer-accepted", "yes");
    el.remove();
    document.body.style.overflow = "";
  });
}

/* ---------- Generic UI ---------- */
function initUI() {
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Mobile nav
  const nav = document.getElementById("mainNav");
  const openBtn = document.getElementById("navOpen");
  const overlay = document.getElementById("navOverlay");
  const setNav = (open) => {
    if (!nav) return;
    nav.classList.toggle("open", open);
    overlay && overlay.classList.toggle("show", open);
    openBtn && openBtn.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  openBtn && openBtn.addEventListener("click", () => setNav(true));
  overlay && overlay.addEventListener("click", () => setNav(false));
  nav && nav.querySelector(".nav-close").addEventListener("click", () => setNav(false));
  nav && nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setNav(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { setNav(false); closeModal(); } });

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const ans = item.querySelector(".faq-a");
      const open = !item.classList.contains("open");
      item.classList.toggle("open", open);
      q.setAttribute("aria-expanded", String(open));
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0";
    });
  });

  // Tabs
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const btns = group.querySelectorAll(".tab-btn");
    btns.forEach((b) => b.addEventListener("click", () => {
      btns.forEach((x) => { x.classList.remove("active"); x.setAttribute("aria-selected", "false"); });
      b.classList.add("active");
      b.setAttribute("aria-selected", "true");
      group.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === b.dataset.tab));
    }));
  });

  // Fill dynamic contact bits
  document.querySelectorAll("[data-wa]").forEach((a) => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-tel]").forEach((a) => { a.href = "tel:" + SITE.phoneRaw; });
  document.querySelectorAll("[data-site]").forEach((el) => { const v = SITE[el.dataset.site]; if (v) el.textContent = v; });
  document.querySelectorAll("[data-gbp]").forEach((a) => {
    if (SITE.googleBusiness) { a.href = SITE.googleBusiness; a.target = "_blank"; a.rel = "noopener"; a.hidden = false; }
  });
  document.querySelectorAll("[data-map]").forEach((f) => { f.src = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=15&output=embed`; });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
}

/* ---------- Service detail modal ---------- */
let modalEl = null;
let lastFocus = null;
function openServiceModal(catName, name, desc) {
  track("view_service", { service: name, category: catName });
  if (!modalEl) {
    modalEl = document.createElement("div");
    modalEl.className = "modal";
    modalEl.setAttribute("role", "dialog");
    modalEl.setAttribute("aria-modal", "true");
    modalEl.addEventListener("click", (e) => { if (e.target === modalEl) closeModal(); });
    document.body.appendChild(modalEl);
  }
  lastFocus = document.activeElement;
  const msg = `Hello Advocate Mohammad Rafiq Azad, I need legal help regarding: ${name} (${catName}).`;
  modalEl.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <span class="tag">${esc(catName)}</span>
      <h3>${esc(name)}</h3>
      <p class="muted">${esc(desc)}</p>
      <p><strong>How we can help:</strong></p>
      <ul>
        <li>Initial consultation to understand facts and documents</li>
        <li>Clear explanation of your legal options, timelines and likely costs</li>
        <li>Drafting, filing and representation at every stage</li>
        <li>Regular updates on progress — in chamber, by phone or online</li>
      </ul>
      <div class="btn-group" style="margin-top:20px">
        <a class="btn btn-whatsapp" href="${waLink(msg)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Discuss on WhatsApp</a>
        <a class="btn btn-outline-dark" href="tel:${SITE.phoneRaw}"><i class="fa-solid fa-phone"></i> Call Now</a>
      </div>
      <p class="form-note">Information shared is kept confidential. This is not legal advice until a consultation takes place.</p>
    </div>`;
  modalEl.querySelector(".modal-close").addEventListener("click", closeModal);
  modalEl.classList.add("show");
  document.body.style.overflow = "hidden";
  modalEl.querySelector(".modal-close").focus();
}
function closeModal() {
  if (modalEl && modalEl.classList.contains("show")) {
    modalEl.classList.remove("show");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
}

/* ---------- Home: practice areas grid ---------- */
function renderPracticeGrid() {
  const host = document.getElementById("practiceGrid");
  if (!host || !window.LEGAL_CATEGORIES) return;
  const limit = parseInt(host.dataset.limit || "0", 10);
  const cats = limit ? window.LEGAL_CATEGORIES.slice(0, limit) : window.LEGAL_CATEGORIES;
  host.innerHTML = cats.map((c) => `
    <a class="card reveal" href="${c.slug}.html">
      <span class="count">${c.services.length} services</span>
      <div class="card-icon"><i class="fa-solid ${c.icon}"></i></div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.summary)}</p>
      <span class="card-link">Explore <i class="fa-solid fa-arrow-right"></i></span>
    </a>`).join("");
  const total = document.getElementById("totalServices");
  if (total) total.textContent = window.LEGAL_CATEGORIES.reduce((n, c) => n + c.services.length, 0) + "+";
}

/* ---------- Online services grid ---------- */
function renderOnlineGrid() {
  const host = document.getElementById("onlineGrid");
  if (!host || !window.ONLINE_SERVICES) return;
  const limit = parseInt(host.dataset.limit || "0", 10);
  const list = limit ? window.ONLINE_SERVICES.slice(0, limit) : window.ONLINE_SERVICES;
  host.innerHTML = list.map((s) => `
    <div class="card reveal">
      <div class="card-icon"><i class="fa-solid ${s.icon}"></i></div>
      <h3>${esc(s.name)}</h3>
      <p>${esc(s.desc)}</p>
      <a class="card-link" href="${waLink(`Hello Advocate Mohammad Rafiq Azad, I am interested in: ${s.name} (online).`)}" target="_blank" rel="noopener">Request on WhatsApp <i class="fa-solid fa-arrow-right"></i></a>
    </div>`).join("");
}

/* ---------- Services directory ---------- */
function initDirectory() {
  const host = document.getElementById("directory");
  if (!host || !window.LEGAL_CATEGORIES) return;
  const cats = window.LEGAL_CATEGORIES;
  const all = [];
  cats.forEach((c) => c.services.forEach(([name, desc]) => all.push({ cat: c, name, desc })));

  const search = document.getElementById("svcSearch");
  const chipsHost = document.getElementById("catChips");
  const azHost = document.getElementById("azBar");
  const countEl = document.getElementById("resultCount");
  const viewBtns = document.querySelectorAll("[data-view]");
  const state = { q: "", cat: "all", letter: "", view: "category" };

  chipsHost.innerHTML = `<button class="chip active" data-cat="all">All (${all.length})</button>` +
    cats.map((c) => `<button class="chip" data-cat="${c.id}">${esc(c.name)}</button>`).join("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  azHost.innerHTML = letters.map((l) => `<button data-letter="${l}" aria-label="Services starting with ${l}">${l}</button>`).join("");

  const svcBtn = (s, showCat) => `
    <button class="svc" data-name="${esc(s.name)}" data-desc="${esc(s.desc)}" data-catname="${esc(s.cat.name)}">
      ${showCat ? `<em>${esc(s.cat.name)}</em>` : ""}
      <strong><i class="fa-solid fa-circle-chevron-right"></i>${esc(s.name)}</strong>
      <span>${esc(s.desc)}</span>
    </button>`;

  function filtered() {
    const q = state.q.trim().toLowerCase();
    return all.filter((s) =>
      (state.cat === "all" || s.cat.id === state.cat) &&
      (!q || (s.name + " " + s.desc + " " + s.cat.name).toLowerCase().includes(q)) &&
      (!state.letter || s.name.toUpperCase().startsWith(state.letter))
    );
  }

  function render() {
    const list = filtered();
    countEl.textContent = `Showing ${list.length} of ${all.length} legal services`;
    // letter availability for current cat/search
    const pool = all.filter((s) => (state.cat === "all" || s.cat.id === state.cat) &&
      (!state.q || (s.name + " " + s.desc + " " + s.cat.name).toLowerCase().includes(state.q.trim().toLowerCase())));
    azHost.querySelectorAll("button").forEach((b) => {
      const has = pool.some((s) => s.name.toUpperCase().startsWith(b.dataset.letter));
      b.disabled = !has;
      b.classList.toggle("active", b.dataset.letter === state.letter);
    });

    if (!list.length) {
      host.innerHTML = `<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><p>No service matched your search. Your matter may still be covered —
        <a href="${waLink("Hello, I could not find my legal issue on the website. My matter is: ")}" target="_blank" rel="noopener">ask on WhatsApp</a> or <a href="contact.html">contact the chamber</a>.</p></div>`;
      return;
    }
    if (state.view === "az" || state.letter) {
      const sorted = list.slice().sort((a, b) => a.name.localeCompare(b.name));
      let html = "", cur = "";
      let open = false;
      sorted.forEach((s) => {
        const L = s.name[0].toUpperCase();
        if (L !== cur) {
          if (open) html += `</div>`;
          html += `<h2 class="az-letter" id="letter-${L}">${L}</h2><div class="svc-grid">`;
          cur = L; open = true;
        }
        html += svcBtn(s, true);
      });
      if (open) html += `</div>`;
      host.innerHTML = html;
    } else {
      host.innerHTML = cats.map((c) => {
        const items = list.filter((s) => s.cat.id === c.id);
        if (!items.length) return "";
        return `<section class="cat-block" id="${c.id}">
          <div class="cat-head"><div class="card-icon"><i class="fa-solid ${c.icon}"></i></div><h2><a href="${c.slug}.html" style="color:inherit">${esc(c.name)}</a></h2></div>
          <p class="cat-summary">${esc(c.summary)} <a href="${c.slug}.html">Read more &rarr;</a></p>
          <div class="svc-grid">${items.map((s) => svcBtn(s, false)).join("")}</div>
        </section>`;
      }).join("");
    }
  }

  host.addEventListener("click", (e) => {
    const b = e.target.closest(".svc");
    if (b) openServiceModal(b.dataset.catname, b.dataset.name, b.dataset.desc);
  });
  let t;
  search.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { state.q = search.value; state.letter = ""; render(); }, 120); });
  chipsHost.addEventListener("click", (e) => {
    const c = e.target.closest(".chip"); if (!c) return;
    chipsHost.querySelectorAll(".chip").forEach((x) => x.classList.toggle("active", x === c));
    state.cat = c.dataset.cat; state.letter = "";
    render();
    if (history.replaceState) history.replaceState(null, "", state.cat === "all" ? "services.html" : "#" + state.cat);
  });
  azHost.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b || b.disabled) return;
    state.letter = state.letter === b.dataset.letter ? "" : b.dataset.letter;
    render();
  });
  viewBtns.forEach((b) => b.addEventListener("click", () => {
    viewBtns.forEach((x) => x.classList.toggle("active", x === b));
    state.view = b.dataset.view; state.letter = "";
    render();
  }));

  const q0 = new URLSearchParams(location.search).get("q");
  if (q0) { search.value = q0; state.q = q0; }
  // Deep-link: services.html#family
  const hash = decodeURIComponent(location.hash.replace("#", ""));
  if (hash && cats.some((c) => c.id === hash)) {
    state.cat = hash;
    chipsHost.querySelectorAll(".chip").forEach((x) => x.classList.toggle("active", x.dataset.cat === hash));
    const chip = chipsHost.querySelector(`[data-cat="${hash}"]`);
    if (chip) chip.scrollIntoView({ block: "nearest", inline: "center" });
  }
  render();
}

/* ---------- Consultation form → WhatsApp ---------- */
function initContactForm() {
  const form = document.getElementById("consultForm");
  if (!form) return;
  const sel = form.querySelector("#f-area");
  if (sel && window.LEGAL_CATEGORIES) {
    sel.innerHTML = `<option value="">Select area of law</option>` +
      window.LEGAL_CATEGORIES.map((c) => `<option>${esc(c.name)}</option>`).join("") +
      `<option>Online Service</option><option>Not sure / Other</option>`;
    const pre = new URLSearchParams(location.search).get("area");
    if (pre) sel.value = pre;
  }
  const dateEl = form.querySelector("#f-date");
  if (dateEl) dateEl.min = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((inp) => {
      const field = inp.closest(".field") || inp.closest(".consent");
      let valid = inp.type === "checkbox" ? inp.checked : inp.value.trim() !== "";
      if (valid && inp.type === "tel") valid = /^[+\d][\d\s-]{7,15}$/.test(inp.value.trim());
      if (field) field.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) { const f = form.querySelector(".invalid input, .invalid select, .invalid textarea"); if (f) f.focus(); return; }
    const v = (id) => (form.querySelector(id) || {}).value || "";
    const lines = [
      "*New Consultation Request*",
      `Name: ${v("#f-name")}`,
      `Phone: ${v("#f-phone")}`,
      v("#f-city") ? `City / Country: ${v("#f-city")}` : null,
      `Area of law: ${v("#f-area")}`,
      `Preferred mode: ${v("#f-mode")}`,
      v("#f-date") ? `Preferred date: ${v("#f-date")}` : null,
      "",
      `Matter: ${v("#f-msg")}`
    ].filter((x) => x !== null);
    const url = waLink(lines.join("\n"));
    track("generate_lead", { area_of_law: v("#f-area"), consult_mode: v("#f-mode") });
    window.open(url, "_blank", "noopener");
    const ok2 = document.getElementById("formSuccess");
    if (ok2) {
      ok2.innerHTML = `<i class="fa-solid fa-circle-check"></i> Your request is ready. If WhatsApp did not open automatically,
        <a href="${url}" target="_blank" rel="noopener"><strong>tap here to open WhatsApp</strong></a> and press send.
        You can also call <strong>${esc(SITE.phoneDisplay)}</strong>.`;
      ok2.style.display = "block";
    }
    form.reset();
  });
  form.querySelectorAll("input, select, textarea").forEach((el) =>
    el.addEventListener("input", () => { const f = el.closest(".field") || el.closest(".consent"); if (f) f.classList.remove("invalid"); }));
}

/* ---------- Drafting Desk: search, filters, custom request ---------- */
function initDraftDesk() {
  const search = document.getElementById("draftSearch");
  if (!search) return;
  const items = Array.from(document.querySelectorAll(".draft-item"));
  const groups = Array.from(document.querySelectorAll(".draft-group"));
  const chips = document.getElementById("draftChips");
  const azHost = document.getElementById("draftAz");
  const countEl = document.getElementById("draftCount");
  const empty = document.getElementById("draftEmpty");
  const state = { q: "", group: "all", letter: "" };
  azHost.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => `<button data-letter="${l}" aria-label="Documents starting with ${l}">${l}</button>`).join("");
  const groupOf = (el) => el.closest(".draft-group").dataset.group;
  const textOf = (el) => (el.textContent + " " + el.closest(".draft-group").querySelector("h2").textContent).toLowerCase();

  function render() {
    const q = state.q.trim().toLowerCase();
    let shown = 0;
    const pool = items.filter((el) => (state.group === "all" || groupOf(el) === state.group) && (!q || textOf(el).includes(q)));
    items.forEach((el) => {
      const ok = pool.includes(el) && (!state.letter || el.dataset.name.toUpperCase().startsWith(state.letter));
      el.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach((g) => { g.hidden = !g.querySelector(".draft-item:not([hidden])"); });
    azHost.querySelectorAll("button").forEach((b) => {
      b.disabled = !pool.some((el) => el.dataset.name.toUpperCase().startsWith(b.dataset.letter));
      b.classList.toggle("active", b.dataset.letter === state.letter);
    });
    countEl.textContent = `Showing ${shown} of ${items.length} documents`;
    empty.hidden = shown > 0;
  }
  let t;
  search.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { state.q = search.value; state.letter = ""; render(); }, 120); });
  chips.addEventListener("click", (e) => {
    const c = e.target.closest(".chip"); if (!c) return;
    chips.querySelectorAll(".chip").forEach((x) => x.classList.toggle("active", x === c));
    state.group = c.dataset.group; state.letter = ""; render();
  });
  azHost.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b || b.disabled) return;
    state.letter = state.letter === b.dataset.letter ? "" : b.dataset.letter; render();
  });
  const dq = new URLSearchParams(location.search).get("q");
  if (dq) { search.value = dq; state.q = dq; }
  const hash = location.hash.replace("#", "");
  const hashChip = hash && chips.querySelector(`[data-group="${hash}"]`);
  if (hashChip) hashChip.click();
  render();

  const form = document.getElementById("draftForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((inp) => {
      const valid = inp.value.trim() !== "";
      inp.closest(".field").classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) { form.querySelector(".invalid input").focus(); return; }
    const v = (id) => form.querySelector(id).value.trim();
    const text = [`Hello Advocate ${SITE.name}, I want to get a document drafted.`, "", `Document: ${v("#d-doc")}`, `Name: ${v("#d-name")}`, v("#d-details") ? `Details: ${v("#d-details")}` : null].filter((x) => x !== null).join("\n");
    const url = waLink(text);
    track("drafting_request", { document: v("#d-doc"), doc_group: "Custom request", source: "custom_form" });
    window.open(url, "_blank", "noopener");
    const box = document.getElementById("draftSuccess");
    box.innerHTML = `<i class="fa-solid fa-circle-check"></i> Your request is ready. If WhatsApp did not open, <a href="${url}" target="_blank" rel="noopener"><strong>tap here to open WhatsApp</strong></a> and press send.`;
    box.style.display = "block";
  });
  form.querySelectorAll("input, textarea").forEach((el) => el.addEventListener("input", () => el.closest(".field").classList.remove("invalid")));
}

/* ---------- Home page site search ---------- */
const SEARCH_SYNONYMS = {
  talaq: ["divorce", "talaq"], talak: ["divorce"], zamanat: ["bail"], jamanat: ["bail"], zamant: ["bail"],
  vasiyat: ["will"], wasiyat: ["will"], vasiyatnama: ["will"], kabza: ["possession", "encroachment", "kabza"], kabja: ["possession", "encroachment"],
  kiraya: ["rent", "tenant"], kirayedar: ["tenant", "rent"], kirayanama: ["rent agreement"], zameen: ["land", "property"], jameen: ["land", "property"], zamin: ["land", "property"],
  makan: ["house", "property"], ghar: ["house", "property"], plot: ["property", "plot"], vakil: ["lawyer", "advocate"], wakil: ["lawyer", "advocate"],
  wakf: ["waqf"], vakf: ["waqf"], waqaf: ["waqf"], wakaf: ["waqf"], masjid: ["mosque", "masjid"], qabristan: ["qabristan", "graveyard"], kabristan: ["qabristan", "graveyard"],
  madrasa: ["madrasa"], dargah: ["dargah"], mutawalli: ["mutawalli"], mandir: ["temple"], gurdwara: ["gurdwara"],
  dhokha: ["fraud", "cheating"], dhokhadhadi: ["fraud", "cheating"], thagi: ["fraud", "cheating"], fraud: ["fraud", "scam"],
  naukri: ["employment", "service", "job", "salary"], tankhwah: ["salary"], shaadi: ["marriage"], shadi: ["marriage"], vivah: ["marriage"], nikah: ["nikah", "marriage"],
  kharcha: ["maintenance"], guzara: ["maintenance"], bachcha: ["child", "custody"], bachche: ["child", "custody"], bijli: ["electricity"], bill: ["bill"],
  chori: ["theft"], hissa: ["share", "partition", "inheritance"], batwara: ["partition"], registry: ["sale deed", "registration", "registry"], rajistri: ["sale deed", "registration"],
  intkal: ["mutation", "intkal"], mutation: ["mutation", "intkal"], fard: ["fard", "jamabandi"], patta: ["lease", "theka"], theka: ["theka", "lease"],
  hulfnama: ["affidavit"], halafnama: ["affidavit"], affidavit: ["affidavit"], notice: ["notice"], karza: ["loan", "debt"], udhaar: ["loan", "recovery", "money"], paisa: ["money", "recovery"], paise: ["money", "recovery"], rupaye: ["money", "recovery"],
  gaddi: ["vehicle", "accident"], gaadi: ["vehicle", "accident"], hadsa: ["accident"], durghatna: ["accident"], check: ["cheque"], chek: ["cheque"],
  videsh: ["nri", "abroad", "immigration"], agent: ["agent"], visa: ["visa", "immigration"], passport: ["passport"], fauj: ["armed forces", "ex-servicemen"], fauji: ["armed forces", "ex-servicemen"],
  nri: ["nri"], abroad: ["nri", "abroad"], foreign: ["nri", "abroad"], bahar: ["nri", "abroad"], canada: ["nri", "canada"], uk: ["nri"], england: ["nri"], usa: ["nri"], america: ["nri"],
  australia: ["nri", "australia"], dubai: ["nri", "gulf"], gulf: ["nri", "gulf"], italy: ["nri", "europe"], europe: ["nri", "europe"], zealand: ["nri"],
  khet: ["agricultural", "farm", "land"], panchayat: ["panchayat", "shamlat"], shamlat: ["shamlat", "panchayat"], nahar: ["canal"], pension: ["pension"], bujurg: ["senior citizen", "parents"]
};
const SEARCH_STOP = new Set(["ka", "ki", "ke", "ko", "kaise", "kese", "kya", "hai", "hain", "mein", "me", "se", "liye", "lie", "karna", "karni", "karne", "karwana", "karwani", "karvana", "chahiye", "ho", "gaya", "gayi", "aur", "the", "a", "an", "of", "for", "in", "to", "my", "mera", "meri", "mere", "near", "jalandhar", "punjab", "case", "help", "how", "what", "is", "do", "i", "need", "want", "kare", "karein", "kab", "kahan", "par", "pe",
  "ne", "le", "de", "diya", "liya", "liye", "mil", "mili", "milti", "milta", "milegi", "milega", "raha", "rahi", "rahe", "nahi", "nhi", "nai", "wala", "wali", "wale",
  "kar", "kr", "sakta", "sakti", "sakte", "hua", "hui", "hota", "hoti", "hoga", "lena", "dena", "bana", "banana", "banwana", "banwani", "chahta", "chahti", "vakil", "wakil", "vakeel", "wakeel", "lawyer", "advocate", "new"]);

function searchSite(query) {
  const index = window.SEARCH_INDEX || [];
  const tokens = query.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((t) => t && !SEARCH_STOP.has(t));
  if (!tokens.length) return null;
  // each word matches at the start of a word, through its synonyms too
  const reEsc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  let alts = tokens.map((t) => [t, ...(SEARCH_SYNONYMS[t] || [])].map((w) => new RegExp("(^|[^\\p{L}\\p{N}])" + reEsc(w), "u")));
  const texts = index.map((it) => ({ it, name: it.t.toLowerCase(), hay: (it.t + " " + it.d + " " + (it.c || "") + " " + (it.k || "")).toLowerCase() }));
  // ignore words that appear nowhere on the site (filler words, typos), unless that leaves nothing
  const useful = alts.filter((a) => texts.some((x) => a.some((r) => r.test(x.hay))));
  if (useful.length) alts = useful;
  const scored = [];
  for (const x of texts) {
    let matched = 0, score = 0;
    for (const a of alts) {
      if (a.some((r) => r.test(x.name))) { matched++; score += 3; }
      else if (a.some((r) => r.test(x.hay))) { matched++; score += 1; }
    }
    if (matched) scored.push({ it: x.it, matched, score: score + (x.it.y === "p" ? 0.5 : 0) });
  }
  const full = scored.filter((x) => x.matched === alts.length);
  const list = (full.length ? full : scored).sort((a, b) => b.score - a.score);
  return { exact: full.length > 0, list: list.map((x) => x.it) };
}

function initGlobalSearch() {
  const input = document.getElementById("siteSearch");
  if (!input) return;
  const form = document.getElementById("siteSearchForm");
  const box = document.getElementById("siteResults");
  const docMsg = (it) => `Hello Advocate ${SITE.name}, I want to get this document drafted: ${it.t} (${it.c}). Please tell me what details and documents are needed.`;

  function render() {
    const q = input.value.trim();
    if (q.length < 2) { box.hidden = true; box.innerHTML = ""; return; }
    const res = searchSite(q);
    if (!res || !res.list.length) {
      box.hidden = false;
      box.innerHTML = `<div class="sr-empty"><p>No exact match for <strong>${esc(q)}</strong>, but your matter can still be handled.</p>
        <a class="btn btn-whatsapp btn-sm" href="${waLink(`Hello Advocate ${SITE.name}, I need legal help regarding: ${q}`)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Ask about "${esc(q)}" on WhatsApp</a></div>`;
      return;
    }
    const pagesR = res.list.filter((x) => x.y === "p").slice(0, 4);
    const svcR = res.list.filter((x) => x.y === "s");
    const docR = res.list.filter((x) => x.y === "d");
    const col = (title, icon, items, total, more) => !items.length ? "" : `
      <div class="sr-col">
        <h3><i class="fa-solid ${icon}"></i> ${title} <span>${total}</span></h3>
        <ul>${items.join("")}</ul>
        ${more || ""}
      </div>`;
    box.hidden = false;
    box.innerHTML = (res.exact ? "" : `<p class="sr-note">Showing the closest matches for <strong>${esc(q)}</strong>.</p>`) + `<div class="sr-grid">` +
      col("Pages", "fa-file-lines", pagesR.map((x) => `<li><a href="${x.u}"><strong>${esc(x.t)}</strong><span>${esc(x.d)}</span></a></li>`), pagesR.length) +
      col("Legal services", "fa-scale-balanced", svcR.slice(0, 6).map((x) => `<li><a href="${x.u}"><strong>${esc(x.t)}</strong><span>${esc(x.c)}</span></a></li>`), svcR.length,
        svcR.length > 6 ? `<a class="sr-more" href="services.html?q=${encodeURIComponent(q)}">See all ${svcR.length} services &rarr;</a>` : "") +
      col("Drafting · WhatsApp", "fa-file-pen", docR.slice(0, 6).map((x) => `<li><a class="sr-doc" href="${waLink(docMsg(x))}" target="_blank" rel="noopener"><span class="sr-doc-text"><strong>${esc(x.t)}</strong><span>${esc(x.c)}</span></span><i class="fa-brands fa-whatsapp"></i></a></li>`), docR.length,
        docR.length > 6 ? `<a class="sr-more" href="drafting.html?q=${encodeURIComponent(q)}">See all ${docR.length} documents &rarr;</a>` : "") +
      `</div><div class="sr-foot">Can't find it? <a href="${waLink(`Hello Advocate ${SITE.name}, I need legal help regarding: ${q}`)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Ask about "${esc(q)}" on WhatsApp</a></div>`;
  }
  let t;
  input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 120); });
  form.addEventListener("submit", (e) => { e.preventDefault(); render(); box.scrollIntoView({ behavior: "smooth", block: "nearest" }); });
  form.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => { input.value = b.dataset.q; render(); input.focus(); }));
}

/* ---------- NRI desk: Jalandhar time vs visitor's time ---------- */
function initNriClock() {
  const ist = document.getElementById("clockIST");
  if (!ist) return;
  const istDate = document.getElementById("clockISTDate");
  const local = document.getElementById("clockLocal");
  const localDate = document.getElementById("clockLocalDate");
  const localLabel = document.getElementById("clockLocalLabel");
  const localRow = document.getElementById("clockLocalRow");
  let zone = "";
  try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) { /* ignore */ }
  const inIndia = /Asia\/(Kolkata|Calcutta)/.test(zone);
  if (inIndia) localRow.hidden = true;
  else if (zone) localLabel.textContent = "Your time · " + zone.split("/").pop().replace(/_/g, " ");
  const fmt = (tz, opts) => { try { return new Intl.DateTimeFormat("en-IN", Object.assign({ timeZone: tz }, opts)).format(new Date()); } catch (e) { return ""; } };
  const tick = () => {
    ist.textContent = fmt("Asia/Kolkata", { hour: "numeric", minute: "2-digit", hour12: true }).toUpperCase();
    istDate.textContent = fmt("Asia/Kolkata", { weekday: "long", day: "numeric", month: "short" }) + " · IST";
    if (!inIndia) {
      const tz = zone || undefined;
      local.textContent = new Intl.DateTimeFormat("en-IN", { timeZone: tz, hour: "numeric", minute: "2-digit", hour12: true }).format(new Date()).toUpperCase();
      localDate.textContent = new Intl.DateTimeFormat("en-IN", { timeZone: tz, weekday: "long", day: "numeric", month: "short" }).format(new Date());
    }
  };
  tick();
  setInterval(tick, 15000);
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initAnalytics();
  renderHeader();
  renderFooter();
  renderPracticeGrid();
  renderOnlineGrid();
  initDirectory();
  initContactForm();
  initDraftDesk();
  initGlobalSearch();
  initNriClock();
  initUI();
  initReveal();
  renderDisclaimer();
});
