export type PortfolioProject = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  visual: string;
  visualDetail: string;
};

export type SupportingProject = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  href: string;
};

export const featuredProjects: PortfolioProject[] = [
  {
    number: '01',
    title: 'Footy Greece',
    category: 'Production full-stack work',
    description:
      'Worked across a production sports platform built as a multi-app React and .NET ecosystem, contributing to frontend features, API integration, real-time functionality and data troubleshooting.',
    stack: ['React 19', 'TypeScript', 'ASP.NET Core', 'SignalR', 'SQL'],
    visual: 'LIVE PRODUCT',
    visualDetail: 'React / .NET / real users',
  },
  {
    number: '02',
    title: 'Biblio Explorer',
    category: 'Frontend engineering',
    description:
      'A polished book discovery application with a strong focus on component structure, responsive UI and automated testing.',
    stack: ['React', 'TypeScript', 'Vitest', 'Testing Library'],
    href: 'https://github.com/fanostomp/Biblio-Explorer',
    linkLabel: 'View repository',
    visual: 'DISCOVER',
    visualDetail: 'Search / browse / test',
  },
  {
    number: '03',
    title: 'Greek++ Compiler',
    category: 'Compiler design',
    description:
      'A compiler for a Greek-language programming language, covering lexical analysis, parsing and intermediate-code generation.',
    stack: ['Python', 'Lexer', 'Parser', 'Intermediate Code'],
    href: 'https://github.com/fanostomp/Compiler-MYY802',
    linkLabel: 'View repository',
    visual: 'πρόγραμμα demo',
    visualDetail: 'lexer → parser → code',
  },
  {
    number: '04',
    title: 'Food Hazard Detection',
    category: 'Machine learning / data',
    description:
      'A data-focused challenge project exploring machine-learning techniques for detecting and classifying food hazards from real-world data.',
    stack: ['Python', 'Machine Learning', 'Data Analysis'],
    href: 'https://github.com/fanostomp/Food-Hazard-Detection-Challenge',
    linkLabel: 'View repository',
    visual: 'ML / DATA',
    visualDetail: 'classify / evaluate / iterate',
  },
];

export const moreProjects: SupportingProject[] = [
  {
    title: 'Operating Systems',
    category: 'Systems / source analysis',
    summary:
      'Source-level systems work around Kiwi and the Linux Kernel Library (LKL), including implementation work and technical reports.',
    stack: ['C', 'Linux', 'Kernel internals'],
    href: 'https://github.com/fanostomp/Operating-Systems-MYY601',
  },
  {
    title: 'Spatial Data R-tree',
    category: 'Data structures / spatial queries',
    summary:
      'R-tree implementation with STR bulk loading and support for window range, distance range and k-nearest-neighbour queries.',
    stack: ['Python', 'R-tree', 'STR', 'k-NN'],
    href: 'https://github.com/fanostomp/Spatial-data-r-tree',
  },
  {
    title: 'Complex Data Management',
    category: 'Database algorithms',
    summary:
      'Database optimization algorithms covering selectivity histograms, semi/anti joins, hash and sort-merge joins, pipelining and three-way joins.',
    stack: ['Python', 'Joins', 'Histograms', 'Query processing'],
    href: 'https://github.com/fanostomp/complex-data-management-algorithms',
  },
];

export const experience = {
  role: 'Full-stack development',
  context: 'Production software · Remote',
  summary:
    'Worked on a production React and .NET platform, supporting feature development and investigating issues across the frontend, backend and data layers.',
  highlights: [
    'Built and supported product features with React and TypeScript.',
    'Integrated and debugged ASP.NET Core APIs and real-time application flows.',
    'Used SQL and Azure Data Studio to investigate production data issues.',
    'Traced problems across UI, API and database layers instead of treating each layer in isolation.',
  ],
};

export const techGroups = [
  {
    title: 'Frontend',
    items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Accessible UI'],
  },
  {
    title: 'Backend',
    items: ['ASP.NET Core', '.NET', 'REST APIs', 'SignalR'],
  },
  {
    title: 'Data',
    items: ['SQL', 'Azure Data Studio', 'Relational databases'],
  },
  {
    title: 'Tooling',
    items: ['Git', 'Docker', 'Linux', 'GitHub Actions'],
  },
  {
    title: 'Testing',
    items: ['xUnit', 'Vitest', 'React Testing Library', 'Playwright'],
  },
];
