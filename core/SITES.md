# URL verification matrix

Rules only run on article-shaped paths. A `pathPatterns` rule must match its
regular expression; other query rules require at least two non-empty path
segments. Query rules normalize an existing numeric pagination value and set
the target full-page value.

| Domain | Rule | Example paginated URL | Expected full-page URL | Verified |
| --- | --- | --- | --- | --- |
| kompas.com | `page=all` | `https://nasional.kompas.com/read/123?page=1` | `https://nasional.kompas.com/read/123?page=all` | yes |
| suara.com | `page=all` | `https://www.suara.com/news/123?page=2` | `https://www.suara.com/news/123?page=all` | pending |
| tribunnews.com | `page=all` | `https://www.tribunnews.com/nasional/123?page=2` | `https://www.tribunnews.com/nasional/123?page=all` | pending |
| grid.id | `page=all` | `https://www.grid.id/read/123?page=2` | `https://www.grid.id/read/123?page=all` | pending |
| viva.co.id | `page=all` | `https://www.viva.co.id/berita/123?page=2` | `https://www.viva.co.id/berita/123?page=all` | pending |
| intipseleb.com | `page=all` | `https://www.intipseleb.com/lokal/123?page=2` | `https://www.intipseleb.com/lokal/123?page=all` | pending |
| parapuan.co | `page=all` | `https://www.parapuan.co/read/123?page=2` | `https://www.parapuan.co/read/123?page=all` | pending |
| sonora.id | `page=all` | `https://www.sonora.id/read/123?page=2` | `https://www.sonora.id/read/123?page=all` | pending |
| herstory.co.id | `page=all` | `https://www.herstory.co.id/read/123?page=2` | `https://www.herstory.co.id/read/123?page=all` | pending |
| motorplus-online.com | `page=all` | `https://www.motorplus-online.com/read/123?page=2` | `https://www.motorplus-online.com/read/123?page=all` | pending |
| kompasiana.com | `page=all` | `https://www.kompasiana.com/kompasiana/123?page=2` | `https://www.kompasiana.com/kompasiana/123?page=all` | pending |
| idntimes.com | `page=all` | `https://www.idntimes.com/indonesia/123?page=2` | `https://www.idntimes.com/indonesia/123?page=all` | pending |
| popmama.com | `page=all` | `https://www.popmama.com/life/123?page=2` | `https://www.popmama.com/life/123?page=all` | pending |
| kosadata.com | `page=all` | `https://www.kosadata.com/berita/123?page=2` | `https://www.kosadata.com/berita/123?page=all` | pending |
| fajar.co.id | `page=all` | `https://fajar.co.id/berita/123?page=2` | `https://fajar.co.id/berita/123?page=all` | pending |
| sindonews.com | `showpage=all` | `https://news.sindonews.com/read/1?showpage=2` | `https://news.sindonews.com/read/1?showpage=all` | yes |
| poskota.co.id | `view=all` | `https://www.poskota.co.id/read/1?view=2` | `https://www.poskota.co.id/read/1?view=all` | yes |
| detik.com | `single=1` | `https://news.detik.com/news/d-123/contoh` | `https://news.detik.com/news/d-123/contoh?single=1` | yes |
| insidermonkey.com | `singlepage=1` | `https://insidermonkey.com/read/1` | `https://insidermonkey.com/read/1?singlepage=1` | pending |
| merdeka.com | `page=all` | `https://www.merdeka.com/peristiwa/contoh.html?page=2` | `https://www.merdeka.com/peristiwa/contoh.html?page=all` | yes |
| liputan6.com | `page=all` | `https://www.liputan6.com/news/read/123/contoh?page=1` | `https://www.liputan6.com/news/read/123/contoh?page=all` | yes |
| tempo.co | `page=all` | `https://nasional.tempo.co/read/123/contoh?page=1` | `https://nasional.tempo.co/read/123/contoh?page=all` | yes |
| cnnindonesia.com | `page=all` | `https://www.cnnindonesia.com/nasional/123/contoh?page=2` | `https://www.cnnindonesia.com/nasional/123/contoh?page=all` | yes |
| okezone.com | `page=all` | `https://news.okezone.com/read/123/contoh?page=1` | `https://news.okezone.com/read/123/contoh?page=all` | yes |
| antaranews.com | `page=all` | `https://www.antaranews.com/berita/123/contoh?page=1` | `https://www.antaranews.com/berita/123/contoh?page=all` | yes |
| republika.co.id | `page=all` | `https://news.republika.co.id/berita/abc123/contoh?page=1` | `https://news.republika.co.id/berita/abc123/contoh?page=all` | yes |
| bisnis.com | `page=all` | `https://finansial.bisnis.com/read/20260926/215/2007491/contoh?page=1` | `https://finansial.bisnis.com/read/20260926/215/2007491/contoh?page=all` | yes |
| jawapos.com | `/` + `page=all` | `https://www.jawapos.com/read/1/?page=2` | `https://www.jawapos.com/read/1/?page=all` | pending |
| beritasatu.com | `/` + `view=all` | `https://beritasatu.com/read/1/?view=2` | `https://beritasatu.com/read/1/?view=all` | pending |
| inews.id | `/all` suffix | `https://www.inews.id/read/1` | `https://www.inews.id/read/1/all` | pending |
| wahananews.co | `/0` suffix | `https://wahananews.co/read/1` | `https://wahananews.co/read/1/0` | pending |

The `Verified` column records whether the URL convention has been checked
against a live article endpoint; pending entries remain useful routing fixtures
but should be confirmed before being treated as site guarantees.
