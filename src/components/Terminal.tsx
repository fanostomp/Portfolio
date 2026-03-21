'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { useTypewriter } from '@/hooks/useTypewriter';
import { projects } from '@/data';
import type { Project } from '@/data';

import PythonIcon from '@/assets/icons/python.svg';
import MySqlIcon from '@/assets/icons/mysql.svg';
import JavaIcon from '@/assets/icons/java.svg';
import JsIcon from '@/assets/icons/javascript.svg';
import ReactIcon from '@/assets/icons/react.svg';
import HtmlIcon from '@/assets/icons/html.svg';
import CssIcon from '@/assets/icons/css.svg';
import CodeIcon from '@/assets/icons/coding.svg';
import CIcon from '@/assets/icons/c-1.svg';
import CppIcon from '@/assets/icons/cpp.svg';
import VhdlIcon from '@/assets/icons/vhdl.svg';
import HaskellIcon from '@/assets/icons/haskell.svg';
import PrologIcon from '@/assets/icons/prolog.svg';
import AssemblyIcon from '@/assets/icons/assembly.svg';

const PowerShellIcon = () => (
  <svg fill="none" height="18" width="18" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="m8 9 3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M12.5 16H16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
  </svg>
);

const WindowControls = () => (
  <div className="flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
    <span className="h-3 w-3 rounded-full bg-[#61c454]" />
    <span className="h-3 w-3 rounded-full bg-[#ee6a5f]" />
  </div>
);

interface HelpProps {
  onCommandClick: (command: string) => void;
}

interface ProjectsProps {
  onCommandClick: (command: string) => void;
}

const welcomeText = 'Interactive portfolio console ready. Explore projects, technical skills, and contact details using the commands below.';

const WelcomeMessage = () => {
  const typedText = useTypewriter(welcomeText, 18);

  return (
    <div className="space-y-4 text-slate-200">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Portfolio Console</p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">theofanis@portfolio:~$</h3>
      </div>
      <p className="max-w-2xl leading-7 text-slate-300">{typedText}</p>
    </div>
  );
};

const Help = ({ onCommandClick }: HelpProps) => {
  const commands = [
    { cmd: 'about', desc: 'View a concise professional summary' },
    { cmd: 'skills', desc: 'Open my technical stack overview' },
    { cmd: 'projects', desc: 'Browse selected engineering projects' },
    { cmd: 'contact', desc: 'Get email, GitHub, and LinkedIn links' },
    { cmd: 'clear', desc: 'Reset the console output' },
  ];

  return (
    <div className="space-y-3 rounded-2xl border border-white/8 bg-white/4 p-4">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Suggested commands</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {commands.map(({ cmd, desc }) => (
          <button
            key={cmd}
            className="group rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-left transition hover:border-cyan-400/40 hover:bg-cyan-400/8"
            onClick={() => onCommandClick(cmd)}
          >
            <div className="font-mono text-sm text-cyan-300 group-hover:text-cyan-200">{cmd}</div>
            <div className="mt-1 text-sm text-slate-400">{desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div className="space-y-4 rounded-2xl border border-white/8 bg-white/4 p-5">
    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Profile</p>
    <p className="text-xl font-semibold text-white">Software-focused engineer with a systems mindset.</p>
    <p className="leading-7 text-slate-300">
      I&apos;m Theofanis Tompolis, a Computer Engineering student at the University of Ioannina focused on building practical software,
      learning core computer science fundamentals, and improving through hands-on projects. My work spans systems programming,
      compilers, and web development, with a strong interest in turning complex ideas into usable products.
    </p>
  </div>
);

const Projects = ({ onCommandClick }: ProjectsProps) => (
  <div className="space-y-4">
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Projects</p>
      <p className="mt-2 text-2xl font-semibold text-white">Selected work</p>
    </div>
    <div className="grid gap-3">
      {projects.map((project, index) => (
        <button
          key={project.id}
          className="fade-in-item rounded-2xl border border-white/8 bg-white/4 p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/8"
          style={{ animationDelay: `${(index + 1) * 70}ms` }}
          onClick={() => onCommandClick(`projects ${project.id}`)}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-200">0{project.id}</span>
            <span className="text-lg font-medium text-white">{project.title}</span>
          </div>
          <p className="mt-2 text-sm text-slate-300">{project.highlight}</p>
          <p className="mt-1 text-sm text-slate-500">Type or click: projects {project.id}</p>
        </button>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="space-y-4 rounded-2xl border border-white/8 bg-white/4 p-5">
    <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Contact</p>
    <div className="grid gap-3 sm:grid-cols-3">
      <a href="mailto:fanostompolis97@gmail.com" className="rounded-xl border border-white/8 bg-black/20 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/8">
        <p className="text-sm text-slate-400">Email</p>
        <p className="mt-1 text-sm font-medium text-white">fanostompolis97@gmail.com</p>
      </a>
      <a href="https://github.com/fanostomp" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/8 bg-black/20 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/8">
        <p className="text-sm text-slate-400">GitHub</p>
        <p className="mt-1 text-sm font-medium text-white">github.com/fanostomp</p>
      </a>
      <a href="https://www.linkedin.com/in/theofanis-tompolis/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/8 bg-black/20 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/8">
        <p className="text-sm text-slate-400">LinkedIn</p>
        <p className="mt-1 text-sm font-medium text-white">theofanis-tompolis</p>
      </a>
    </div>
  </div>
);

const Skills = () => {
  const skillsList = [
    { name: 'C', icon: <CIcon /> },
    { name: 'C++', icon: <CppIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'MySQL', icon: <MySqlIcon /> },
    { name: 'Java', icon: <JavaIcon /> },
    { name: 'JavaScript', icon: <JsIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'HTML', icon: <HtmlIcon /> },
    { name: 'CSS', icon: <CssIcon /> },
    { name: 'VHDL', icon: <VhdlIcon /> },
    { name: 'Prolog', icon: <PrologIcon /> },
    { name: 'Pascal', icon: <CodeIcon /> },
    { name: 'Haskell', icon: <HaskellIcon /> },
    { name: 'Assembly', icon: <AssemblyIcon /> },
  ];

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">Stack</p>
        <p className="mt-2 text-2xl font-semibold text-white">Tools and languages</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skillsList.map((skill, index) => (
          <div
            key={skill.name}
            className="fade-in-item flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
            style={{ animationDelay: `${(index + 1) * 40}ms` }}
          >
            <div className="h-6 w-6 flex-shrink-0 text-cyan-200">{skill.icon}</div>
            <span className="text-sm font-medium text-slate-100">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const initialPrompt = 'visitor@portfolio:~$';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const runCommand = (commandStr: string) => {
    const command = commandStr.trim().toLowerCase();
    let output: React.ReactNode;
    const commandHistoryEntry = { command: `${initialPrompt} ${commandStr}`, output: null };

    setHistory((prev) => [...prev, commandHistoryEntry]);

    if (command.startsWith('projects ')) {
      const parts = command.split(' ');
      if (parts.length > 1 && !Number.isNaN(parseInt(parts[1], 10))) {
        const id = parseInt(parts[1], 10);
        const project = projects.find((item) => item.id === id);
        if (project) {
          setSelectedProject(project);
          setIsModalOpen(true);
          return;
        }
        output = <p className="text-rose-400">Project with ID &apos;{parts[1]}&apos; was not found.</p>;
      } else {
        output = <p className="text-rose-400">Use a project number, for example: projects 1</p>;
      }
    } else {
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
        case 'about':
          output = <About />;
          break;
        case 'skills':
          output = <Skills />;
          break;
        case 'projects':
          output = <Projects onCommandClick={runCommand} />;
          break;
        case 'contact':
          output = <Contact />;
          break;
        default:
          output = <p className="text-rose-400">Unknown command. Try: help, about, skills, projects, contact, clear</p>;
          break;
      }
    }

    setHistory((prev) => [...prev, { command: '', output }]);
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
    <>
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
      <div
        className="terminal-shell w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#06111f]/90 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center justify-between border-b border-white/8 bg-white/4 px-5 py-4">
          <div className="flex items-center gap-3 text-slate-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-cyan-200">
              <PowerShellIcon />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Portfolio Console</p>
              <p className="text-xs text-slate-400">Interactive overview · terminal inspired</p>
            </div>
          </div>
          <WindowControls />
        </div>

        <div ref={terminalRef} className="max-h-[680px] min-h-[540px] overflow-y-auto p-5 text-sm text-slate-100 sm:p-6">
          {history.map((entry, index) => (
            <div key={index} className="mb-4">
              {entry.command ? <div className="font-mono text-cyan-300">{entry.command}</div> : null}
              {entry.output ? <div className="mt-3">{entry.output}</div> : null}
            </div>
          ))}

          <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
            <span className="font-mono text-cyan-300">{initialPrompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  runCommand(input);
                  setInput('');
                }
              }}
              className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
              placeholder="Type a command and press Enter"
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
}
