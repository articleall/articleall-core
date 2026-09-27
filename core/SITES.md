# URL verification matrix

Rules only run on article-shaped paths. A rule with `pathPatterns` must match one
of its regular expressions; other rules require at least two non-empty path
segments. Query rules replace numeric pagination values and leave the target
full-page value unchanged.

| Site | Article/paginated example | Full-page URL expected |
| --- | --- | --- |
| kompas.com | `https://nasional.kompas.com/read/123?page=1` | `https://nasional.kompas.com/read/123?page=all` |
| detik.com | `https://news.detik.com/news/d-123/contoh` | `https://news.detik.com/news/d-123/contoh?single=1` |
| merdeka.com | `https://www.merdeka.com/peristiwa/contoh.html?page=2` | `https://www.merdeka.com/peristiwa/contoh.html?page=all` |
| liputan6.com | `https://www.liputan6.com/news/read/123/contoh?page=1` | `https://www.liputan6.com/news/read/123/contoh?page=all` |
| tempo.co | `https://nasional.tempo.co/read/123/contoh?page=1` | `https://nasional.tempo.co/read/123/contoh?page=all` |
| cnnindonesia.com | `https://www.cnnindonesia.com/nasional/123/contoh?page=2` | `https://www.cnnindonesia.com/nasional/123/contoh?page=all` |
| okezone.com | `https://news.okezone.com/read/123/contoh?page=1` | `https://news.okezone.com/read/123/contoh?page=all` |

The five added sites generally serve articles as one page today; the matrix
still records the `page=all` convention used by their article endpoints so a
numeric pagination value is normalized when encountered. These examples are
verification fixtures, not claims that every article currently exposes more
than one page.
