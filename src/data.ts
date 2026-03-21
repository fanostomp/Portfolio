export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  githubUrl: string;
  liveUrl?: string;
  contentType: 'markdown' | 'pdf';
  contentUrl: string;
  highlight: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Greek++ Compiler',
    description: 'Built a compiler for a Greek-inspired programming language with parsing and intermediate code generation.',
    tech: 'Python, Compiler Design, Parsing',
    githubUrl: 'https://github.com/fanostomp/Compiler-MYY802',
    contentType: 'markdown',
    contentUrl: 'https://raw.githubusercontent.com/fanostomp/Compiler-MYY802/main/README.md',
    highlight: 'Language tooling and compiler fundamentals.',
  },
  {
    id: 2,
    title: 'Kiwi Operating Systems Project',
    description: 'Completed an operating systems project focused on low-level systems programming, virtualization, and kernel-oriented concepts.',
    tech: 'C, Linux, Virtual Machines',
    githubUrl: 'https://github.com/fanostomp/Operating-Systems-MYY601/tree/main/kiwi-source',
    contentType: 'pdf',
    contentUrl: 'https://raw.githack.com/fanostomp/Operating-Systems-MYY601/main/Kiwi-Source-Report.pdf',
    highlight: 'Systems thinking, debugging, and low-level implementation.',
  },
  {
    id: 3,
    title: 'LKL Operating Systems Project',
    description: 'Developed a second operating systems project exploring Linux kernel concepts and practical systems development workflows.',
    tech: 'C, Linux, Virtual Machines',
    githubUrl: 'https://github.com/fanostomp/Operating-Systems-MYY601/tree/main/lkl-source/lkl-source',
    contentType: 'pdf',
    contentUrl: 'https://raw.githack.com/fanostomp/Operating-Systems-MYY601/main/lkl-source-report.pdf',
    highlight: 'Hands-on systems programming and kernel-level exploration.',
  },
  {
    id: 4,
    title: 'Traineeship Management Website',
    description: 'Designed and implemented a traineeship platform with a full-stack web workflow and reporting documentation.',
    tech: 'Java, HTML, CSS, Spring Boot',
    githubUrl: 'https://github.com/fanostomp/Traineeship-Web',
    contentType: 'pdf',
    contentUrl: 'https://raw.githack.com/fanostomp/Traineeship-Web/master/SprintReport-v1_4855_53977.pdf',
    highlight: 'Full-stack application delivery for a real-world workflow.',
  },
];
