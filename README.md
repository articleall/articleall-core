# Articleall

Articleall shares one vanilla JavaScript URL-rewrite core across three browser
extension ports:

- `articleall-chrome/` — Chrome Manifest V3 extension
- `articleall-firefox/` — Firefox Manifest V3 extension
- `articleall-safari/` — Safari Web Extension source for Xcode
- `core/` — shared rules, router, and tests

## Development

Run the core tests and synchronize the browser-safe core files into each
extension:

```sh
cd core
npm test
cd ..
npm run sync
```

Run each port's test command from its directory:

```sh
cd articleall-chrome && npm test
cd ../articleall-firefox && npm test
cd ../articleall-safari && npm test
```

After syncing, load `articleall-chrome/` as an unpacked extension in
`chrome://extensions`, or load `articleall-firefox/manifest.json` as a
temporary add-on from `about:debugging`. Build the Safari port through its
containing Xcode app and enable it in Safari settings.
