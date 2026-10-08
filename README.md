# Theofanis Tompolis — Portfolio

Personal portfolio built with Next.js 15, React 19 and TypeScript. The homepage presents production experience, selected projects, a downloadable CV and an optional interactive terminal. Five statically generated case-study pages connect project summaries to engineering details, code, tests and documentation.

## Local development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
npm start
```

Visit the homepage, follow the project case-study links and download the CV. Check terminal commands `projects`, `project 1`, `project 2`, `experience`, `cv` and `status`; Escape closes the terminal and returns focus to its trigger. Unknown project URLs return the custom 404 page.

## Content and assets

- `src/data/portfolio.ts`: shared profile, experience, project summaries and technologies.
- `src/data/case-studies.ts`: detailed engineering write-ups and primary-source links.
- `src/app/work/[slug]/page.tsx`: static case-study pages and per-project metadata.
- `public/cv/Theofanis_Tompolis_CV.pdf`: current downloadable CV.
- `public/social-preview.svg` and `.png`: editable and share-ready preview artwork.
- `docs/content-sources.md`: source provenance and maintenance guidance.

Footy Greece is marked as a closed platform. Its case study summarizes completed work; no live deployment is advertised. Project visuals are workflow/evidence graphics, not screenshots.

Production is hosted at [fanostomp.com](https://fanostomp.com). Pull requests should be reviewed through their branch preview before merging. A pull request alone does not update production.
