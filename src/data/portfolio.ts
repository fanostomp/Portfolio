export const profile = {
  name: 'Theofanis Tompolis', email: 'fanostompolis97@gmail.com', location: 'Nicosia, Cyprus',
  availability: 'Available full-time', cv: '/cv/Theofanis_Tompolis_CV.pdf',
  github: 'https://github.com/fanostomp', linkedin: 'https://www.linkedin.com/in/theofanis-tompolis/',
};

export type PortfolioProject = {
  number: string; slug: string; title: string; category: string; description: string; stack: string[];
  href?: string; status: string; visual: string; visualDetail: string;
  evidence: { value: string; label: string }[];
};
export type SupportingProject = { title: string; category: string; summary: string; stack: string[]; href: string };

export const featuredProjects: PortfolioProject[] = [
  {
    number: '01', slug: 'footy-greece', title: 'Footy Greece',
    category: 'Production full-stack work', status: 'Platform closed · Case study',
    description: 'Contributed to a multi-application sports platform with React 19, TypeScript and ASP.NET Core. My work covered registration, role-aware chat, attendance reporting and data consistency. The platform has since closed; the case study documents my contributions.',
    stack: ['React 19', 'TypeScript', 'ASP.NET Core', 'SignalR', 'SQL'],
    visual: 'PRODUCT DELIVERY', visualDetail: 'Dec 2025 — Sep 2026 · Remote',
    evidence: [{ value: 'UX', label: 'Registration & navigation' }, { value: 'Roles', label: 'Chat permissions' }, { value: 'Data', label: 'Attendance & evaluations' }],
  },
  {
    number: '02', slug: 'biblio-explorer', title: 'Biblio Explorer',
    category: 'Data engineering / full-stack', status: 'Public source',
    description: 'A bibliographic analytics platform combining Python ETL, Flask REST APIs and MySQL with a JavaScript/D3.js dashboard. Integrates DBLP publications and venue rankings for search, author profiles and interactive comparisons.',
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'D3.js', 'pytest'],
    href: 'https://github.com/fanostomp/Biblio-Explorer',
    visual: '2.5M+', visualDetail: 'Publication records processed',
    evidence: [{ value: 'ETL', label: 'Clean & match venues' }, { value: 'API', label: 'Profiles & search' }, { value: 'D3.js', label: 'Interactive comparisons' }],
  },
  {
    number: '03', slug: 'traineeship-management', title: 'Traineeship Management',
    category: 'Java / application engineering', status: 'Public source',
    description: 'A Java 17 and Spring Boot application for traineeship management, with authentication, role-based workflows, placement matching, logbooks and evaluations. Controller and service behavior is covered with JUnit 5 and Mockito.',
    stack: ['Java 17', 'Spring Boot', 'MySQL', 'JUnit 5', 'Mockito'],
    href: 'https://github.com/fanostomp/Traineeship-Web',
    visual: 'ROLE-AWARE', visualDetail: 'Placement → logbook → evaluation',
    evidence: [{ value: 'Auth', label: 'Role-based access' }, { value: 'Match', label: 'Placement strategies' }, { value: 'Test', label: 'Controllers & services' }],
  },
  {
    number: '04', slug: 'food-hazard-detection', title: 'Food Hazard Detection',
    category: 'Machine learning / NLP', status: 'Public source & report',
    description: 'Text classification for SemEval-2025 Task 9: predicting food hazard and product categories from recall reports. Compared word/character TF-IDF and LinearSVC pipelines with a DistilBERT baseline; the final reported Subtask 1 score was 0.78003.',
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'LinearSVC', 'NLP'],
    href: 'https://github.com/fanostomp/Food-Hazard-Detection-Challenge',
    visual: '0.78003', visualDetail: 'Reported final Subtask 1 score',
    evidence: [{ value: '10', label: 'Hazard categories' }, { value: '22', label: 'Product categories' }, { value: 'SVC', label: 'Final classifier' }],
  },
  {
    number: '05', slug: 'greek-compiler', title: 'Greek++ Compiler',
    category: 'Compiler design', status: 'Public source',
    description: 'A multi-stage compiler for a Greek-language programming language. Python lexical and recursive-descent analysis lead to intermediate quadruples, symbol tables and RISC-V assembly, with support for functions, procedures and parameter passing.',
    stack: ['Python', 'Lexer', 'Parser', 'Quadruples', 'RISC-V'],
    href: 'https://github.com/fanostomp/Compiler-MYY802',
    visual: 'SOURCE → RISC-V', visualDetail: 'A complete compilation pipeline',
    evidence: [{ value: '.gr', label: 'Greek++ source' }, { value: '.int', label: 'Intermediate code' }, { value: '.asm', label: 'RISC-V assembly' }],
  },
];

export const moreProjects: SupportingProject[] = [
  { title: 'Operating Systems', category: 'Systems / source analysis', summary: 'Source-level systems work around Kiwi and the Linux Kernel Library (LKL), including implementation work and technical reports.', stack: ['C', 'Linux', 'Kernel internals'], href: 'https://github.com/fanostomp/Operating-Systems-MYY601' },
  { title: 'Spatial Data R-tree', category: 'Data structures / spatial queries', summary: 'R-tree implementation with STR bulk loading and window range, distance range and k-nearest-neighbour queries.', stack: ['Python', 'R-tree', 'STR', 'k-NN'], href: 'https://github.com/fanostomp/Spatial-data-r-tree' },
  { title: 'Complex Data Management', category: 'Database algorithms', summary: 'Database optimization algorithms covering selectivity histograms, semi/anti joins, hash and sort-merge joins, pipelining and three-way joins.', stack: ['Python', 'Joins', 'Histograms', 'Query processing'], href: 'https://github.com/fanostomp/complex-data-management-algorithms' },
];

export const experience = {
  role: 'Full-stack developer', company: 'Footy Greece', dates: 'Dec 2025 — Sep 2026', context: 'Ioannina, Greece · Remote',
  summary: 'Developed and maintained features across a multi-application React 19 / TypeScript and ASP.NET Core platform. Worked across UI, APIs and SQL data, with Git-based reviews and testing supporting delivery.',
  highlights: [
    'Improved registration and course navigation with responsive, consistent user flows.',
    'Worked on chat permissions and recipient selection across user roles.',
    'Resolved attendance, evaluation and payment presentation issues across product screens.',
    'Investigated production issues with browser tools, REST APIs, SQL and Azure Data Studio.',
  ],
};

export const techGroups = [
  { title: 'Frontend', items: ['React 19', 'TypeScript', 'JavaScript / D3.js', 'Tailwind CSS / MUI', 'Accessible UI'] },
  { title: 'Backend', items: ['ASP.NET Core / C#', 'Java / Spring Boot', 'Python / Flask', 'REST APIs', 'SignalR'] },
  { title: 'Data', items: ['SQL / MySQL', 'Azure Data Studio', 'ETL pipelines', 'Relational modeling'] },
  { title: 'Tooling', items: ['Git / GitHub', 'Docker', 'Linux', 'GitHub Actions'] },
  { title: 'Testing', items: ['xUnit', 'pytest', 'JUnit 5 / Mockito', 'Vitest / Testing Library', 'Playwright'] },
];
