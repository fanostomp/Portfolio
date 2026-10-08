'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { experience, featuredProjects, moreProjects, profile, techGroups } from '@/data/portfolio';

type HelpProps = {
  onCommandClick: (command: string) => void;
};

type TerminalProject = {
  id: number;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  href?: string;
  slug?: string;
};

const terminalProjects: TerminalProject[] = [
  ...featuredProjects.map((project, index) => ({
    id: index + 1,
    title: project.title,
    category: project.category,
    summary: project.description,
    stack: project.stack,
    href: project.href,
    slug: project.slug,
  })),
  ...moreProjects.map((project, index) => ({
    id: featuredProjects.length + index + 1,
    title: project.title,
    category: project.category,
    summary: project.summary,
    stack: project.stack,
    href: project.href,
  })),
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#c7ff4a]">// {children}</p>
);

const WelcomeMessage = () => (
  <div className="space-y-4">
    <div>
      <p className="text-lg font-bold tracking-tight text-[#f3f0e8] sm:text-xl">
        FANOS<span className="text-[#c7ff4a]">_</span> // PORTFOLIO TERMINAL
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#9c9b94]">
        Full-stack developer · alternate interface
      </p>
    </div>

    <div className="border-l border-[#c7ff4a]/40 pl-4 text-[#c8c6bf]">
      <p><span className="text-[#9c9b94]">role:</span> full-stack developer</p>
      <p><span className="text-[#9c9b94]">focus:</span> React / TypeScript / .NET / SQL</p>
      <p><span className="text-[#9c9b94]">status:</span> <span className="text-[#c7ff4a]">available full-time</span></p>
    </div>

    <p className="text-[#9c9b94]">
      Same portfolio, different interface. Type <span className="text-[#c7ff4a]">help</span> or click a command below.
    </p>
  </div>
);

const Help = ({ onCommandClick }: HelpProps) => {
  const commands = [
    ['about', 'Who I am and how I work'],
    ['experience', 'Production full-stack experience'],
    ['stack', 'Tools I actually work with'],
    ['projects', 'Featured and supporting projects'],
    ['project <n>', 'Open details for one project'],
    ['contact', 'Email, GitHub and LinkedIn'],
    ['status', 'Current availability'],
    ['cv', 'Download my current CV'],
    ['clear', 'Clear the terminal'],
  ];

  return (
    <div>
      <SectionTitle>commands</SectionTitle>
      <div className="space-y-1.5">
        {commands.map(([cmd, desc]) => (
          <div className="grid grid-cols-[minmax(120px,180px)_1fr] gap-4" key={cmd}>
            {cmd.includes('<n>') ? (
              <span className="text-[#c7ff4a]">{cmd}</span>
            ) : (
              <button
                className="w-fit text-left text-[#c7ff4a] underline decoration-[#c7ff4a]/35 underline-offset-4 hover:decoration-[#c7ff4a]"
                onClick={() => onCommandClick(cmd)}
              >
                {cmd}
              </button>
            )}
            <span className="text-[#8f8e88]">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div>
    <SectionTitle>about</SectionTitle>
    <div className="max-w-3xl space-y-3 leading-7 text-[#c8c6bf]">
      <p>
        I&apos;m Theofanis Tompolis, a final-year Computer Science &amp; Engineering student at the University of Ioannina and a full-stack developer. I&apos;m completing an integrated master&apos;s degree with expected graduation in 2027, based in Nicosia, Cyprus and available full-time.
      </p>
      <p>
        I like understanding how the whole product works — interface, API, data and the messy debugging in between. My work spans production web applications, systems projects, compiler design and data-focused challenges.
      </p>
      <p>
        I care about clean interfaces, maintainable code and getting features over the line instead of stopping at the demo stage.
      </p>
    </div>
  </div>
);

const Experience = () => (
  <div>
    <SectionTitle>experience</SectionTitle>
    <p className="text-xl font-bold uppercase tracking-tight text-[#f3f0e8]">{experience.role}</p>
    <p className="mt-2 text-[#c7ff4a]">{experience.company} · {experience.dates}</p>
    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9c9b94]">{experience.context}</p>
    <p className="mt-4 max-w-3xl leading-7 text-[#c8c6bf]">{experience.summary}</p>
    <div className="mt-5 space-y-2">
      {experience.highlights.map((highlight, index) => (
        <p className="flex gap-3 text-[#b4b2ab]" key={highlight}>
          <span className="text-[#c7ff4a]">0{index + 1}</span>
          <span>{highlight}</span>
        </p>
      ))}
    </div>
  </div>
);

const Stack = () => (
  <div>
    <SectionTitle>stack</SectionTitle>
    <div className="grid gap-5 sm:grid-cols-2">
      {techGroups.map((group, index) => (
        <div className="border-l border-[#f3f0e8]/15 pl-4" key={group.title}>
          <p className="text-xs text-[#c7ff4a]">0{index + 1}</p>
          <p className="mt-1 font-bold uppercase text-[#f3f0e8]">{group.title}</p>
          <p className="mt-2 leading-6 text-[#9c9b94]">{group.items.join(' · ')}</p>
        </div>
      ))}
    </div>
  </div>
);

const Projects = ({ onCommandClick }: HelpProps) => (
  <div>
    <SectionTitle>projects</SectionTitle>
    <div className="space-y-2">
      {terminalProjects.map((project) => (
        <div className="grid grid-cols-[42px_minmax(0,1fr)] gap-2" key={project.id}>
          <span className="text-[#6f706b]">0{project.id}</span>
          <div>
            <button
              className="text-left font-medium text-[#f3f0e8] hover:text-[#c7ff4a]"
              onClick={() => onCommandClick(`project ${project.id}`)}
            >
              {project.title}
            </button>
            <span className="ml-3 text-xs uppercase tracking-[0.08em] text-[#73746f]">{project.category}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="mt-5 text-[#8f8e88]">
      Type <span className="text-[#c7ff4a]">project 1</span> through <span className="text-[#c7ff4a]">project {terminalProjects.length}</span> for details.
    </p>
  </div>
);

const ProjectDetails = ({ project }: { project: TerminalProject }) => (
  <div>
    <SectionTitle>project 0{project.id}</SectionTitle>
    <p className="text-xl font-bold uppercase tracking-tight text-[#f3f0e8]">{project.title}</p>
    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9c9b94]">{project.category}</p>
    <p className="mt-4 max-w-3xl leading-7 text-[#c8c6bf]">{project.summary}</p>
    <p className="mt-4 text-[#8f8e88]">
      <span className="text-[#c7ff4a]">stack:</span> {project.stack.join(' · ')}
    </p>
    {project.slug ? <p className="mt-4"><Link className="text-[#c7ff4a] underline underline-offset-4" href={`/work/${project.slug}`}>read case study ↗</Link></p> : null}
    {project.href ? (
      <p className="mt-4">
        <a className="text-[#c7ff4a] underline underline-offset-4" href={project.href} target="_blank" rel="noreferrer">
          open repository ↗
        </a>
      </p>
    ) : (
      <p className="mt-4 text-[#8f8e88]">
        <span className="text-[#c7ff4a]">status:</span> platform closed · production source private
      </p>
    )}
  </div>
);

const Contact = () => (
  <div>
    <SectionTitle>contact</SectionTitle>
    <div className="space-y-2 text-[#c8c6bf]">
      <p>
        <span className="inline-block w-24 text-[#8f8e88]">email</span>
        <a className="text-[#c7ff4a] underline underline-offset-4" href="mailto:fanostompolis97@gmail.com">fanostompolis97@gmail.com</a>
      </p>
      <p>
        <span className="inline-block w-24 text-[#8f8e88]">github</span>
        <a className="text-[#f3f0e8] hover:text-[#c7ff4a]" href="https://github.com/fanostomp" target="_blank" rel="noreferrer">github.com/fanostomp ↗</a>
      </p>
      <p>
        <span className="inline-block w-24 text-[#8f8e88]">linkedin</span>
        <a className="text-[#f3f0e8] hover:text-[#c7ff4a]" href="https://www.linkedin.com/in/theofanis-tompolis/" target="_blank" rel="noreferrer">linkedin.com/in/theofanis-tompolis ↗</a>
      </p>
    </div>
  </div>
);

const Status = () => (
  <div>
    <SectionTitle>status</SectionTitle>
    <div className="border-l border-[#c7ff4a]/40 pl-4">
      <p><span className="text-[#8f8e88]">availability:</span> <span className="text-[#c7ff4a]">{profile.availability}</span></p>
      <p><span className="text-[#8f8e88]">location:</span> {profile.location}</p>
      <p><span className="text-[#8f8e88]">focus:</span> full-stack development</p>
      <p><span className="text-[#8f8e88]">current stack:</span> React · TypeScript · .NET · SQL</p>
    </div>
  </div>
);

const initialPrompt = 'fanos@portfolio:~$';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const runCommand = (commandStr: string) => {
    const command = commandStr.trim().toLowerCase();
    if (!command) return;

    setHistory((previous) => [
      ...previous,
      { command: `${initialPrompt} ${commandStr}`, output: null },
    ]);

    const projectMatch = command.match(/^(?:project|projects)\s+0?(\d+)$/);
    if (projectMatch) {
      const id = Number(projectMatch[1]);
      const project = terminalProjects.find((item) => item.id === id);
      const output = project ? (
        <ProjectDetails project={project} />
      ) : (
        <p className="text-red-400">Project {id} was not found. Type projects to see the available IDs.</p>
      );
      setHistory((previous) => [...previous, { command: '', output }]);
      return;
    }

    let output: React.ReactNode;

    switch (command) {
      case 'clear':
        setHistory([
          { command: '', output: <WelcomeMessage /> },
          { command: '', output: <Help onCommandClick={runCommand} /> },
        ]);
        return;
      case 'help':
        output = <Help onCommandClick={runCommand} />;
        break;
      case 'whoami':
      case 'about':
        output = <About />;
        break;
      case 'work':
      case 'experience':
        output = <Experience />;
        break;
      case 'skills':
      case 'stack':
        output = <Stack />;
        break;
      case 'projects':
        output = <Projects onCommandClick={runCommand} />;
        break;
      case 'links':
      case 'contact':
        output = <Contact />;
        break;
      case 'cv':
        output = <p><a className="text-[#c7ff4a] underline underline-offset-4" href={profile.cv} download>Download Theofanis Tompolis CV ↓</a></p>;
        break;
      case 'status':
        output = <Status />;
        break;
      default:
        output = (
          <p className="text-red-400">
            Command not found: {command}. Type <span className="text-[#c7ff4a]">help</span> to see available commands.
          </p>
        );
        break;
    }

    setHistory((previous) => [...previous, { command: '', output }]);
  };

  useEffect(() => {
    setHistory([
      { command: '', output: <WelcomeMessage /> },
      { command: '', output: <Help onCommandClick={runCommand} /> },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div
      className="flex h-[82vh] w-full max-w-5xl flex-col overflow-hidden border border-[#f3f0e8]/15 bg-[#0d0e0e] shadow-2xl md:h-[650px]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex flex-shrink-0 items-center justify-between border-b border-[#f3f0e8]/10 bg-[#141515] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em]">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#c7ff4a] shadow-[0_0_12px_#c7ff4a]" />
          <span className="text-[#f3f0e8]">FANOS // TERMINAL MODE</span>
        </div>
        <span className="text-[#73746f]">portfolio_v2 · online</span>
      </div>

      <div
        className="flex-grow overflow-y-auto p-4 font-mono text-sm text-[#c8c6bf] sm:p-6"
        ref={terminalRef}
      >
        {history.map((entry, index) => (
          <div key={index}>
            {entry.command && (
              <div className="mt-3 flex items-start gap-2">
                <span className="whitespace-nowrap text-[#c7ff4a]">{initialPrompt}</span>
                <span className="text-[#f3f0e8]">{entry.command.replace(`${initialPrompt} `, '')}</span>
              </div>
            )}
            {entry.output && <div className="mb-6 mt-3 fade-in-item">{entry.output}</div>}
          </div>
        ))}

        <div className="flex items-center gap-2 border-t border-[#f3f0e8]/8 pt-4">
          <span className="whitespace-nowrap text-[#c7ff4a]">{initialPrompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                runCommand(input);
                setInput('');
              }
            }}
            className="min-w-0 flex-1 border-none bg-transparent text-[#f3f0e8] outline-none caret-[#c7ff4a]"
            aria-label="Terminal command"
            autoFocus
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

