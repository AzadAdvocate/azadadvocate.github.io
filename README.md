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
