# Mohammad Rafiq Azad, Advocate — Website

Professional legal-services website for **Mohammad Rafiq Azad, Advocate**
Chamber No. 786 & 92, New Court Complex, Jalandhar · +91 70096 46869

Pure HTML/CSS/JS — no build step, no server needed. Works on any static host.

## Pages

| Page | What it contains |
|---|---|
| `index.html` | Home — hero, about, practice areas, online services, process, FAQ |
| `services.html` | **A–Z directory of 170+ legal services** in 20 areas of law, with search, category filter, A–Z filter and WhatsApp enquiry per service |
| `online-services.html` | Online consultation modes, 16 online services, NRI Legal Desk |
| `about.html` | Profile, approach, courts & forums |
| `resources.html` | Helplines, know-your-rights, IPC→BNS / CrPC→BNSS tables, limitation periods, document checklists, official links |
| `contact.html` | Consultation form (sends to WhatsApp), chamber details, Google Map |
| `disclaimer.html` | Bar Council of India disclaimer, privacy policy, terms |

A BCI-compliant disclaimer popup appears on the first visit.

## Editing

- **Phone, address, hours, languages, email:** edit the `SITE` object at the top of `assets/js/main.js`
  (header, footer and buttons update on every page). Some pages also mention the phone/address in
  their text — search for `70096` to find them.
- **Add / remove legal services:** edit `assets/js/services-data.js`.
- **Add a photo:** save it as `assets/img/advocate.jpg` and follow the comment in `about.html`.
- **Colours / fonts:** CSS variables at the top of `assets/css/style.css`.

## Publish free on GitHub Pages

1. Merge this branch into `main`.
2. Repository → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. The site goes live at `https://<username>.github.io/<repo>/` in a minute or two.
4. Optional: add your own domain under **Settings → Pages → Custom domain**.

Works the same on Netlify, Vercel, Cloudflare Pages or any shared hosting (upload all files).

## Google search (SEO)

The site has a separate, search-friendly page for every practice area (`criminal-lawyer-jalandhar.html`,
`divorce-family-lawyer-jalandhar.html`, `court-marriage-jalandhar.html`, `bail-lawyer-jalandhar.html` …) with
everyday search phrases, Hinglish FAQs, structured data (schema.org), plus `sitemap.xml` and `robots.txt`.

These pages are **generated**. After changing services, search phrases or settings, run:

```
node tools/build-seo-pages.js
```

- Search phrases and FAQs: `tools/seo-data.js`
- Website address (`siteUrl`) and Google Business Profile link (`googleBusiness`): `SITE` in `assets/js/main.js`

### Connecting Google Business Profile & Google Search

1. In Google Business Profile → **Edit profile → Contact → Website**, enter the website address.
2. Copy your profile's share link into `googleBusiness` in `assets/js/main.js` and run the build command.
   A "Google Profile" button then appears on the contact and service pages.
3. Keep the name, address and phone **exactly the same** on the website and the Google profile.
4. Add the site to **Google Search Console** (search.google.com/search-console), verify it, and submit `sitemap.xml`.
