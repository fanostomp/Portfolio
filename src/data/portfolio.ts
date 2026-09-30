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
