#!/usr/bin/env node
/*
 * Builds the search-friendly landing pages, sitemap.xml and robots.txt.
 *
 *   node tools/build-seo-pages.js
 *
 * Reads:  assets/js/services-data.js  (services per category)
 *         assets/js/main.js           (SITE settings: phone, siteUrl, googleBusiness …)
 *         tools/seo-data.js           (titles, search phrases, FAQs)
 * Writes: <slug>.html for every category and topic, sitemap.xml, robots.txt,
 *         canonical tags on the main pages, and the static link blocks marked
 *         <!-- AUTO:AREA-LINKS --> … <!-- /AUTO:AREA-LINKS --> in index.html / services.html.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);

// ---- load data ----
const sandbox = { window: {} };
vm.runInNewContext(read("assets/js/services-data.js"), sandbox);
const CATS = sandbox.window.LEGAL_CATEGORIES;
const siteMatch = read("assets/js/main.js").match(/const SITE = (\{[\s\S]*?\n\});/);
if (!siteMatch) throw new Error("Could not find SITE settings in assets/js/main.js");
const SITE = vm.runInNewContext("(" + siteMatch[1] + ")");
const BASE = SITE.siteUrl.endsWith("/") ? SITE.siteUrl : SITE.siteUrl + "/";
const { categories: SEO, topics: TOPICS } = require("./seo-data.js");

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const wa = (t) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t)}`;
const short = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)) + "…");

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: `${SITE.chamber}, ${SITE.court}`,
  addressLocality: "Jalandhar",
  addressRegion: "Punjab",
  addressCountry: "IN"
};
function businessLd(extra) {
  const o = {
    "@type": "LegalService",
    "@id": BASE + "#advocate",
    name: `${SITE.title} ${SITE.name}`,   // same as the Google Business Profile name
    url: BASE,
    telephone: SITE.phoneRaw,
    address: ADDRESS,
    areaServed: ["Jalandhar", "Punjab", "India"],
    knowsLanguage: ["hi", "pa", "en"],
    image: BASE + "assets/img/favicon.svg"
  };
  if (SITE.googleBusiness) o.sameAs = [SITE.googleBusiness];
  return Object.assign(o, extra || {});
}

// ---- shared head ----
function head({ title, description, url }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#0b1f3a">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:locale" content="en_IN">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/vendor/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">`;
}

// ---- landing page ----
function landingPage(p) {
  const url = BASE + p.slug + ".html";
  const fullTitle = `${p.title} – Adv. ${SITE.name}`;
  const description = `${short(p.intro, 140)} Adv. ${SITE.name}, ${SITE.court}, Jalandhar. Call ${SITE.phoneDisplay}.`;
  const askMsg = `Hello Advocate ${SITE.name}, I need legal help regarding ${p.name}.`;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      businessLd(),
      {
        "@type": "Service",
        name: p.h1,
        serviceType: p.name,
        description: p.intro,
        provider: { "@id": BASE + "#advocate" },
        areaServed: { "@type": "City", name: "Jalandhar" },
        url
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Practice Areas", item: BASE + "services.html" },
          { "@type": "ListItem", position: 3, name: p.h1, item: url }
        ]
      }
    ]
  };
  if (p.faqs && p.faqs.length) {
    ld["@graph"].push({
      "@type": "FAQPage",
      mainEntity: p.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
    });
  }

  const servicesHtml = p.services && p.services.length ? `
    <section class="section bg-soft">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Services</span>
          <h2>${esc(p.servicesHeading || "How we can help")}</h2>
        </div>
        <div class="svc-grid">
          ${p.services.map(([n, d]) => `<div class="svc svc-static"><strong><i class="fa-solid fa-circle-check"></i>${esc(n)}</strong><span>${esc(d)}</span></div>`).join("\n          ")}
        </div>
      </div>
    </section>` : "";

  const stepsHtml = p.steps && p.steps.length ? `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Step by Step</span>
          <h2>The ${esc(p.name)} process</h2>
        </div>
        <div class="grid grid-4 process">
          ${p.steps.map(([h, t]) => `<div class="step"><h3>${esc(h)}</h3><p>${esc(t)}</p></div>`).join("\n          ")}
        </div>
      </div>
    </section>` : "";

  const docsHtml = p.docs && p.docs.length ? `
    <section class="section-sm bg-soft">
      <div class="container">
        <div class="section-head" style="margin-bottom:24px">
          <span class="eyebrow">Checklist</span>
          <h2>Documents usually needed</h2>
        </div>
        <div class="card"><ul class="doc-list">${p.docs.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
      </div>
    </section>` : "";

  const faqHtml = p.faqs && p.faqs.length ? `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Sawaal &amp; Jawaab</span>
          <h2>Common questions</h2>
          <p>General information only. Your exact position depends on the facts of your case.</p>
        </div>
        <div class="faq">
          ${p.faqs.map(([q, a]) => `<div class="faq-item"><button class="faq-q">${esc(q)}<i class="fa-solid fa-plus"></i></button><div class="faq-a"><div>${esc(a)}</div></div></div>`).join("\n          ")}
        </div>
      </div>
    </section>` : "";

  const relatedLinks = [
    ...TOPICS.filter((t) => t.slug !== p.slug).map((t) => [t.slug, t.h1]),
    ...CATS.filter((c) => c.slug !== p.slug).map((c) => [c.slug, SEO[c.id] ? SEO[c.id].h1 : c.name])
  ];

  return `${head({ title: fullTitle, description, url })}
  <script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
  </script>
</head>
<body data-page="area">
  <div id="site-header"></div>

  <main id="main">
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="index.html">Home</a> / <a href="services.html">Practice Areas</a> / ${esc(p.h1)}</div>
        <h1>${esc(p.h1)}</h1>
        <p>${esc(p.intro)}</p>
        <div class="btn-group" style="margin-top:24px">
          <a class="btn btn-gold" href="tel:${SITE.phoneRaw}"><i class="fa-solid fa-phone"></i> ${esc(SITE.phoneDisplay)}</a>
          <a class="btn btn-outline" href="${esc(wa(askMsg))}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Ask on WhatsApp</a>
        </div>
      </div>
    </section>
${servicesHtml}${stepsHtml}${docsHtml}${faqHtml}
    <section class="section-sm${faqHtml ? " bg-soft" : ""}">
      <div class="container split" style="align-items:start">
        <div>
          <span class="eyebrow">People also search for</span>
          <h2 style="font-size:1.5rem">Searches related to ${esc(p.name)}</h2>
          <ul class="search-tags">${p.searches.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        </div>
        <div class="info-card">
          <h3>Advocate ${esc(SITE.name)}</h3>
          <ul class="contact-list">
            <li><i class="fa-solid fa-location-dot"></i><span>${esc(SITE.chamber)},<br>${esc(SITE.court)},<br>${esc(SITE.city)}</span></li>
            <li><i class="fa-solid fa-phone"></i><a href="tel:${SITE.phoneRaw}">${esc(SITE.phoneDisplay)}</a></li>
            <li><i class="fa-regular fa-clock"></i><span>${esc(SITE.hours)}</span></li>
          </ul>
          <div class="btn-group">
            <a class="btn btn-gold" href="contact.html#book"><i class="fa-regular fa-calendar-check"></i> Book Consultation</a>
            <a class="btn btn-outline" data-gbp href="#" hidden><i class="fa-brands fa-google"></i> Google Profile</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <h2 style="font-size:1.4rem">Other practice areas</h2>
        <ul class="area-links">${relatedLinks.map(([s, n]) => `<li><a href="${s}.html">${esc(n)}</a></li>`).join("")}</ul>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <div>
          <h2>Discuss your ${esc(p.name.toLowerCase())} matter</h2>
          <p>${esc(SITE.chamber)}, ${esc(SITE.court)}, Jalandhar · ${esc(SITE.phoneDisplay)}</p>
        </div>
        <div class="btn-group">
          <a class="btn btn-navy" href="tel:${SITE.phoneRaw}"><i class="fa-solid fa-phone"></i> Call Now</a>
          <a class="btn btn-whatsapp" href="${esc(wa(askMsg))}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
        </div>
      </div>
    </section>
  </main>

  <div id="site-footer"></div>
  <script src="assets/js/services-data.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
`;
}

// ---- build pages ----
const pages = [];
for (const c of CATS) {
  const s = SEO[c.id] || {};
  pages.push({
    slug: c.slug,
    name: c.name,
    title: s.title || `${c.name} Lawyer in Jalandhar`,
    h1: s.h1 || c.name,
    intro: s.intro || c.summary,
    searches: s.searches || [],
    faqs: s.faqs || [],
    services: c.services,
    servicesHeading: `${c.name} services`
  });
}
for (const t of TOPICS) {
  const cat = CATS.find((c) => c.id === t.category);
  const matched = cat ? cat.services.filter(([n]) => n.toLowerCase().includes(t.name.split(" ")[0].toLowerCase())) : [];
  pages.push(Object.assign({}, t, { services: matched.length >= 3 ? matched : [] }));
}
for (const p of pages) write(p.slug + ".html", landingPage(p));

// ---- canonical tags on main pages ----
const MAIN = ["index.html", "about.html", "services.html", "online-services.html", "resources.html", "contact.html", "disclaimer.html"];
for (const f of MAIN) {
  let html = read(f);
  const url = f === "index.html" ? BASE : BASE + f;
  const tag = `<link rel="canonical" href="${url}">`;
  if (/<link rel="canonical"[^>]*>/.test(html)) html = html.replace(/<link rel="canonical"[^>]*>/, tag);
  else html = html.replace(/(<meta name="theme-color"[^>]*>)/, `$1\n  ${tag}`);
  write(f, html);
}

// ---- index.html structured data ----
{
  let html = read("index.html");
  const ld = Object.assign({ "@context": "https://schema.org" }, businessLd({
    description: "Legal consultation, drafting and representation in criminal, civil, family, property, corporate, cyber, consumer and NRI matters.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal services",
      itemListElement: CATS.map((c) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: c.name, url: BASE + c.slug + ".html" } }))
    }
  }));
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">\n${JSON.stringify(ld, null, 2)}\n  </script>`);
  write("index.html", html);
}

// ---- static link blocks (crawlable) ----
const linkBlock = `<!-- AUTO:AREA-LINKS -->
        <ul class="area-links">${pages.map((p) => `<li><a href="${p.slug}.html">${esc(p.h1)}</a></li>`).join("")}</ul>
        <!-- /AUTO:AREA-LINKS -->`;
for (const f of ["index.html", "services.html"]) {
  let html = read(f);
  if (!html.includes("<!-- AUTO:AREA-LINKS -->")) throw new Error(`${f} is missing the AUTO:AREA-LINKS marker`);
  html = html.replace(/<!-- AUTO:AREA-LINKS -->[\s\S]*?<!-- \/AUTO:AREA-LINKS -->/, linkBlock);
  write(f, html);
}

// ---- sitemap & robots ----
const today = new Date().toISOString().slice(0, 10);
const urls = [
  [BASE, "1.0"],
  ...MAIN.filter((f) => f !== "index.html").map((f) => [BASE + f, f === "disclaimer.html" ? "0.3" : "0.8"]),
  ...pages.map((p) => [BASE + p.slug + ".html", "0.9"])
];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, pr]) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join("\n")}
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`);

console.log(`Built ${pages.length} landing pages, sitemap.xml (${urls.length} URLs) and robots.txt for ${BASE}`);
