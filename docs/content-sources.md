# Portfolio content sources

The portfolio presents documented work and distinguishes team projects from production experience. Project diagrams describe workflows; they are not product screenshots.

## Production experience

- Role, dates (December 2025–September 2026), remote work, location, degree and availability: the owner's supplied CV, checked on 8 October 2026.
- Footy Greece has closed, as confirmed by the owner. It has no live-product link.
- Registration, chat permissions/recipients, evaluation consistency, attendance lists, payment grouping and course navigation: completed Linear work items assigned to the owner, checked on 8 October 2026.
- Only high-level summaries of those work items are published. Internal ticket links, credentials, uploaded screenshots and third-party account details are excluded.

## Public projects

| Project | Primary documentation |
| --- | --- |
| Biblio Explorer | [README](https://github.com/fanostomp/Biblio-Explorer/blob/main/README.md), [tests](https://github.com/fanostomp/Biblio-Explorer/tree/main/tests), [ETL](https://github.com/fanostomp/Biblio-Explorer/tree/main/etl), [CI](https://github.com/fanostomp/Biblio-Explorer/blob/main/.github/workflows/python-app.yml) |
| Traineeship Management | [Build configuration](https://github.com/fanostomp/Traineeship-Web/blob/master/pom.xml), [application code](https://github.com/fanostomp/Traineeship-Web/tree/master/src/main), [tests](https://github.com/fanostomp/Traineeship-Web/tree/master/src/test) |
| Food Hazard Detection | [README](https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/README.md), [report](https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/Report.pdf), [walkthrough](https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/walkthrough.md) |
| Greek++ Compiler | [README](https://github.com/fanostomp/Compiler-MYY802/blob/main/README.md) |

The Biblio Explorer corpus size is a documented approximate volume, not a benchmark. The Food Hazard score is the repository's reported Subtask 1 result; its transductive vocabulary-fitting setup is stated on the project page. Exact test counts are omitted from website copy so they do not silently become stale.

## Maintaining consistency

- Shared contact details, CV URL, project summaries and experience live in `src/data/portfolio.ts`.
- Detailed project pages use `src/data/case-studies.ts`.
- The homepage and terminal consume the same project data.
- Replace `public/cv/Theofanis_Tompolis_CV.pdf` when updating the CV; check both visible email and its mailto link.
- Social previews use the committed 1200×630 PNG, with an editable SVG source.
