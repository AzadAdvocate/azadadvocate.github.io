# Mohammad Rafiq Azad, Advocate — Website

Professional legal-services website for **Mohammad Rafiq Azad, Advocate**
Chamber No. 786 & 92, New Court Complex, Jalandhar · +91 70096 46869

Pure HTML/CSS/JS — no build step, no server needed. Works on any static host.

## Pages

| Page | What it contains |
|---|---|
| `index.html` | Home — hero, about, practice areas, online services, process, FAQ |
| `services.html` | **Directory of all legal services** by area of law, with search, category filter, alphabetical filter and WhatsApp enquiry per service |
| `online-services.html` | Online consultation modes, 16 online services, NRI Legal Desk |
| `about.html` | Profile, approach, courts & forums |
| `resources.html` | Helplines, know-your-rights, IPC→BNS / CrPC→BNSS tables, limitation periods, document checklists, official links |
| `drafting.html` | **Drafting Desk** — 200 documents (agreements, deeds, affidavits, notices, petitions, policies) with search and alphabetical filter; every document opens WhatsApp in one click |
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

## Live website

**https://azadadvocate.github.io/**

This repository is the GitHub Pages site of the **AzadAdvocate** organization: every push to `main` is published automatically
(Settings → Pages → Deploy from a branch → `main` / `(root)`).

### Using your own domain later
1. At your domain provider, add DNS records: four `A` records for `@` →
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a `CNAME` record for `www` → `azadadvocate.github.io`.
2. Settings → Pages → Custom domain → enter the domain → Save → tick **Enforce HTTPS**.
3. Change `siteUrl` in `assets/js/main.js` to the new domain and run `node tools/build-seo-pages.js`.

## Visitor statistics (Google Analytics)

Put your Google Analytics 4 Measurement ID (looks like `G-AB12CD34EF`) in `analyticsId` in `SITE`
at the top of `assets/js/main.js`. Leave it empty to switch tracking off.

Besides page views, the site sends these events (never names, phone numbers or form text):

| Event | Details |
|---|---|
| `whatsapp_click` | `service`, `category`, `document`, `link_location` |
| `call_click` | `link_location` |
| `drafting_request` | `document`, `doc_group`, `source` |
| `view_service` | `service`, `category` |
| `search` | `search_term`, `search_location` |
| `generate_lead` | `area_of_law`, `consult_mode` |

To see these details in reports, add them in Google Analytics under
**Admin → Custom definitions → Create custom dimension** (scope: Event).

## Google search (SEO)

The site has a separate, search-friendly page for every practice area (`criminal-lawyer-jalandhar.html`,
`divorce-family-lawyer-jalandhar.html`, `court-marriage-jalandhar.html`, `bail-lawyer-jalandhar.html` …) with
everyday search phrases, Hinglish FAQs, structured data (schema.org), plus `sitemap.xml` and `robots.txt`.

These pages are **generated**. After changing services, search phrases or settings, run:

```
node tools/build-seo-pages.js
```

- Search phrases and FAQs: `tools/seo-data.js`
- Drafting Desk documents: `tools/drafting-data.js`
- Website address (`siteUrl`) and Google Business Profile link (`googleBusiness`): `SITE` in `assets/js/main.js`

### Connecting Google Business Profile & Google Search

1. In Google Business Profile → **Edit profile → Contact → Website**, enter the website address.
2. Copy your profile's share link into `googleBusiness` in `assets/js/main.js` and run the build command.
   A "Google Profile" button then appears on the contact and service pages.
3. Keep the name, address and phone **exactly the same** on the website and the Google profile.
4. Add the site to **Google Search Console** (search.google.com/search-console), verify it, and submit `sitemap.xml`.
