# Changelog

All notable changes to Articleall are documented here. This project follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses
[Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-09-27

### Added

- Shared, dependency-free URL-rewrite core for Chrome, Firefox, and Safari.
- Full-page URL rules for 28 supported news and article sites.
- Article-path filtering so homepages, category pages, and searches are not
  redirected.
- Preservation of unrelated query parameters and URL fragments.
- Detection of existing full-page parameters and path suffixes to avoid
  duplicate redirects.
- Numeric pagination normalization for supported query-based sites.
- Per-site enable/disable controls and a global pause/resume control.
- Toolbar status badge, tooltip, and keyboard shortcut for toggling redirects.
- Redirect-loop protection that limits repeated redirects per tab.
- Sync-storage preferences with local-storage fallback.
- Split incognito/private-browsing state.
- Shared test suites for routing, redirect protection, storage, state, and
  site settings.
- Separate Manifest V3 Chrome and Firefox ports plus a Safari Web Extension
  source for Xcode.

### Maintained

- Automated synchronization of shared core files into each browser port.
- Continuous integration and ESLint configuration.
