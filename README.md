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

Deploys to GitHub Pages via `.github/workflows/deploy.yml`.
