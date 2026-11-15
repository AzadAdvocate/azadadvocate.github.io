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
  hours: "Mon – Sat: 10:00 AM – 5:00 PM",
  hoursNote: "Consultations by prior appointment",
  languages: "Hindi, Punjabi & English",
  mapQuery: "District Courts Jalandhar Punjab"
};

const NAV = [
  ["index.html", "Home", "home"],
  ["about.html", "About", "about"],
  ["services.html", "Practice Areas", "services"],
  ["online-services.html", "Online Services", "online"],
  ["resources.html", "Legal Resources", "resources"],
  ["contact.html", "Contact", "contact"]
];

const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text || "Hello Advocate Mohammad Rafiq Azad, I would like a legal consultation.")}`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
};

/* ---------- Header ---------- */
function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  const page = document.body.dataset.page;
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
          ${cats.map((c) => `<li><a href="services.html#${c.id}">${esc(c.name)}</a></li>`).join("")}
          <li><a href="services.html">View all A–Z services &rarr;</a></li>
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
    <a class="card reveal" href="services.html#${c.id}">
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

/* ---------- Services A–Z directory ---------- */
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
    // A–Z availability for current cat/search
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
          <div class="cat-head"><div class="card-icon"><i class="fa-solid ${c.icon}"></i></div><h2>${esc(c.name)}</h2></div>
          <p class="cat-summary">${esc(c.summary)}</p>
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

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderPracticeGrid();
  renderOnlineGrid();
  initDirectory();
  initContactForm();
  initUI();
  initReveal();
  renderDisclaimer();
});
