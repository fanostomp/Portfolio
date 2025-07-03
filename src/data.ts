
// src/data.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  githubUrl: string;
  liveUrl?: string;
  contentType: 'markdown' | 'pdf'; // This tells our app what to render
  contentUrl: string; // A single URL for either the raw README or the PDF
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Greek++ Compiler",
    description: "A compiler for a greek proggraming language.",
    tech: "Python,Assebly",
    githubUrl: "https://github.com/fanostomp/Compiler-MYY802",
    contentType: 'markdown', 
    contentUrl: "https://raw.githubusercontent.com/fanostomp/Compiler-MYY802/main/README.md"
  },
  {
    id: 2,
    title: "Operating-Systems-kiwi",
    description: "Oparating System 1",
    tech: "C, Lixux, VM",
    githubUrl: "https://github.com/fanostomp/Operating-Systems-MYY601/tree/main/kiwi-source",
    contentType: 'pdf', 
    contentUrl: "https://raw.githack.com/fanostomp/Operating-Systems-MYY601/main/Kiwi-Source-Report.pdf"
  },
  {
    id: 3,
    title: "Operating-Systems-lkl",
    description: "Oparating System 2",
    tech: "C, Lixux, VM",
    githubUrl: "https://github.com/fanostomp/Operating-Systems-MYY601/tree/main/lkl-source/lkl-source",
    contentType: 'pdf', 
    contentUrl: "https://raw.githack.com/fanostomp/Operating-Systems-MYY601/main/lkl-source-report.pdf"
  },
  {
    id: 4,
    title: "Traineeship-Website",
    description: "A traineeship website for a project i worked on",
    tech: "Java,Html,Css,Spring Boot",
    githubUrl: "https://github.com/fanostomp/Traineeship-Web",
    contentType: 'pdf', 
    contentUrl: "https://raw.githack.com/fanostomp/Traineeship-Web/master/SprintReport-v1_4855_53977.pdf"
  },
];



