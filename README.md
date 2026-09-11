# Senescent Gaming

The site for Senescent Gaming — a "pro" org for aging players who'd rather show a website than explain, again, why they're not joining your clan.

Live at [senescentgaming.com](https://senescentgaming.com).

## Stack

- [Astro](https://astro.build) — static site, no client-side framework
- Deployed to [Cloudflare Pages](https://pages.cloudflare.com/) as project `senescentgaming-com`
- DNS on Cloudflare (apex + `www` both CNAME to the Pages project, proxied)

## Development

```sh
pnpm install
pnpm dev       # localhost:4321
pnpm build     # outputs to ./dist
pnpm preview   # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to Cloudflare Pages via `wrangler pages deploy`.

To deploy manually from a local checkout:

```sh
pnpm build
pnpm dlx wrangler pages deploy dist --project-name=senescentgaming-com
```

## Structure

```text
src/
├── components/   # OwlMark.astro — the skeletal owl logo
├── data/         # roster.ts, quotes.ts — site content as data
├── layouts/      # Layout.astro — shared nav/footer shell
├── pages/        # one file per route
└── styles/       # global.css
```
