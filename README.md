# Articleall

Articleall is a lightweight browser extension that automatically opens
supported multi-page articles in their full-page view. It rewrites only
top-level navigation URLs, keeps unrelated query parameters and fragments,
avoids duplicate redirects, and lets users pause all redirects or disable
individual sites. It runs locally, has no analytics, and does not transmit
browsing data.

This repository (`articleall-core/`) is the shared monorepo. Browser ports
live as sibling directories in the workspace:

```text
Articleall/
├── articleall-core/      ← this repo (core, scripts, docs, CI)
├── articleall-chrome/    ← Chrome Manifest V3 extension
├── articleall-firefox/   ← Firefox Manifest V3 extension
└── articleall-safari/    ← Safari Web Extension source for Xcode
```

Inside `articleall-core/`:

- `core/` — shared rules, router, storage helpers, options UI, and tests
- `scripts/` — sync script that copies core files into each port

## Architecture

```text
                         +----------------------+
                         |  browser navigation  |
                         +----------+-----------+
                                    |
                         +----------v-----------+
                         | port background      |
                         | service worker       |
                         +----------+-----------+
                                    |
                 +------------------v------------------+
                 | shared core: rules -> router ->     |
                 | redirect guard + site preferences   |
                 +------------------+------------------+
                                    |
                         +----------v-----------+
                         | full-page URL locally |
                         +----------------------+
                                    |
             +----------------------+----------------------+
             |                      |                      |
       Chrome MV3             Firefox MV3             Safari Web Extension
```

The sync script copies browser-safe core files into each port so routing
behavior and tests stay consistent.

## Development

Install dependencies once, then run the complete synchronized test suite:

```sh
cd articleall-core
npm install
npm run test:all
```

To synchronize the shared core without running tests:

```sh
npm run sync
```

The individual port tests can also be run with `npm test` from the sibling
`../articleall-chrome/`, `../articleall-firefox/`, or `../articleall-safari/`
directories. Run `npm run lint` from `articleall-core/`. No production build
step is required for Chrome or Firefox.

## Install

### Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the sibling `articleall-chrome/` directory.

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on**.
3. Select `articleall-firefox/manifest.json` from the sibling directory.

For a persistent Firefox installation, package and sign the add-on through the
Firefox Add-ons Developer Hub.

### Safari

1. Open the repository in Xcode on macOS.
2. Create or open a macOS app with a **Safari Web Extension** target.
3. Use `articleall-safari/` as the extension source directory.
4. Build and run the containing app.
5. Enable Articleall under **Safari > Settings > Extensions**.

Safari Web Extensions are distributed inside a containing app; Xcode performs
the final packaging and signing.

## Supported sites

The shared rules support 31 domains, including Kompas, Suara, Tribunnews,
Grid.id, Viva, Detik, Merdeka, Liputan6, Tempo, CNN Indonesia, Okezone,
Sindonews, Poskota, Beritasatu, iNews, and Wahana News. The complete
verification matrix and example URLs are in [`core/SITES.md`](core/SITES.md).

## Privacy and release preparation

- [Privacy policy](PRIVACY.md) — Articleall performs URL rewriting locally and
  stores preferences only in browser local/sync storage.
- [Changelog](CHANGELOG.md)
- [Store submission checklist](docs/STORE.md)
- [MIT license](LICENSE)

Before publishing, use the store checklist for screenshots, permission
justifications, and the public HTTPS privacy-policy URL required by store
submissions. Chrome listing notes and Firefox AMO notes are maintained in
[`docs/STORE.md`](docs/STORE.md).
