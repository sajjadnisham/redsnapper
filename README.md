# Red Snapper & Coffee Beans — website

Static Next.js 16 + Tailwind 4 site for the beachfront restaurant & café in Hulhumalé, Maldives.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in /out
```

## Updating content (no component edits needed)

| What | File |
| --- | --- |
| Menu items & prices | `src/data/menu.ts` (`price: null` + `verify` note = PRICE TO CONFIRM) |
| Hours, phones, email, address, social, facilities | `src/data/site.ts` |
| Food categories, signatures, moments, gallery, social grid | `src/data/content.ts` |
| Photo slots | `src/data/photos.ts` |

**Photos:** drop a file into `public/images/` named after its slot (e.g. `hero-rooftop-sunset.jpg`) and rebuild — the placeholder is replaced automatically. Each placeholder shows its filename.

**Address:** listings disagree on Lot 10710 vs 10716, so the site shows "Kaani Magu, Hulhumalé". Once confirmed, set `address.lot` in `site.ts`.

## Open items for management
- Confirm lot number (10710 / 10716).
- Confirm prices: Rainforest (80 vs 85); Espresso, Americano, Milk Coffee appear at two prices on different menu versions.
- Confirm opening hours (Google vs Tripadvisor vs printed menu differ).
- Supply real photography (see `src/data/photos.ts` for the shot list).

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push.

## Custom domain: redsnappercoffeebeans.com
1. GitHub → repo Settings → Pages → Custom domain: `redsnappercoffeebeans.com` → Save.
2. At the domain's DNS provider:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www`: `sajjadnisham.github.io`
   - Leave `MX`/email records untouched.
3. After DNS resolves (minutes to 24h), tick **Enforce HTTPS** in Settings → Pages.
4. Re-run the deploy so the site builds without the `/redsnapper` sub-path.

`public/CNAME` holds the domain; the build's base path comes from GitHub automatically.
