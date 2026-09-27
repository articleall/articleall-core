# Store submission checklist

This checklist covers the Chrome Web Store and Firefox Add-ons (AMO)
submissions. Complete the public URLs and store-account fields before
submitting. Do not publish a store listing with a placeholder privacy URL.

## Shared preparation

- [ ] Build the listing from the matching browser port and confirm its
      `manifest.json` version is `1.1.0`.
- [ ] Run `npm run test:all` from the repository root.
- [ ] Prepare a square icon at 128 x 128 px and verify the packaged extension
      contains the required 16, 32, 48, and 128 px icons.
- [ ] Capture clear screenshots of the toolbar popup and options page on a
      supported article. Use 1280 x 800 px (or a 640 x 400 px equivalent) for
      consistent listing quality; keep text legible and avoid personal data.
- [ ] Host [`PRIVACY.md`](../PRIVACY.md) at a stable public HTTPS URL, such as
      `https://<publisher-domain>/articleall/privacy`, and use that exact URL
      in every store listing.
- [ ] Ensure the listing description, screenshots, permissions, and privacy
      disclosure match the shipped extension.

## Chrome Web Store

- [ ] Package only the contents of `articleall-chrome/`, with
      `manifest.json` at the archive root.
- [ ] Upload the ZIP in the Chrome Web Store Developer Dashboard and set the
      extension category, language, support contact, and distribution regions.
- [ ] Add the public HTTPS privacy policy URL in the **Privacy practices**
      section. Chrome requires a privacy policy URL when the extension's data
      practices or requested permissions call for one; provide it even though
      Articleall does not collect data.
- [ ] In the single-purpose and data-use disclosures, state that Articleall
      rewrites supported top-level navigation URLs locally and stores only
      extension preferences.
- [ ] Justify `webNavigation`: it observes top-level committed navigation on
      the listed supported domains so the extension can redirect an article to
      its full-page URL.
- [ ] Justify `storage`: it saves the global enabled state and per-site
      preferences in browser sync storage, with a local fallback.
- [ ] Justify each host permission: the listed domains are the sites whose
      article URL conventions Articleall supports; no unrelated site access is
      requested.
- [ ] Confirm the listing contains no remote code, analytics, advertising, or
      collection/transmission of browsing data.
- [ ] Submit for review and verify the published privacy policy remains
      reachable without login.

## Firefox Add-ons (AMO)

- [ ] Package only the contents of `articleall-firefox/`, with
      `manifest.json` at the archive root.
- [ ] Confirm the Firefox manifest includes the stable add-on ID
      `articleall@faiz.at` and the required minimum Firefox version.
- [ ] Upload the ZIP to the AMO Developer Hub, then complete the listing name,
      summary, description, categories, support email, and license fields.
- [ ] Add screenshots at 1280 x 800 px (or 640 x 400 px) and ensure each
      screenshot shows the extension's real UI without private information.
- [ ] Add the public HTTPS privacy policy URL and select the data practices
      disclosures that indicate no data is collected or transmitted.
- [ ] Explain `webNavigation` as top-level navigation observation used only to
      rewrite supported article URLs.
- [ ] Explain `storage` as local/sync preference storage for the global and
      per-site enablement settings.
- [ ] Explain the host permissions as limited access to the supported domains
      listed in the manifest, not general browsing-data access.
- [ ] Confirm the package contains no remote code and passes AMO's automated
      validation before requesting review.
