// src/components/Terminal.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import ProjectModal from '@/components/ProjectModal';
import { projects } from '@/data';
import type { Project } from '@/data';

// --- Helper Icon Components for the Header ---

const PowerShellIcon = () => (
  <svg fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path d="M5,28h22.2c0.4,0,0.8-0.4,0.8-0.8V4.8C28,4.4,27.6,4,27.2,4H5C4.4,4,4,4.4,4,5v22C4,27.6,4.4,28,5,28z M6,6h20v20H6V6z"/>
    <path d="M8.8,19.2h8.2v1.5H8.8V19.2z M12.5,15.1l-3,2.4l3,2.4V15.1 M11.8,13.6c-0.3,0-0.5,0.1-0.7,0.3l-4.5,3.6  c-0.2,0.2-0.2,0.5,0,0.7l4.5,3.6c0.2,0.2,0.4,0.3,0.7,0.3c0.4,0,0.8-0.4,0.8-0.8v-7C12.5,13.9,12.2,13.6,11.8,13.6L11.8,13.6z"/>
  </svg>
);

const WindowControls = () => (
  <div className="flex items-center space-x-4">
    <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
    <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18h12V6H6v12z"></path></svg>
    <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
);

// --- SVG Icon Components for Skills ---


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


// --- Component Definitions for Command Outputs ---

interface HelpProps {
  onCommandClick: (command: string) => void;
}
interface ProjectsProps {
  onCommandClick: (command: string) => void;
}

const WelcomeMessage = () => (
  <div>
    <pre className="text-white">
      {`
        ███████╗ █████╗ ███╗   ██╗ ██████╗ ███████╗
        ██╔════╝██╔══██╗████╗  ██║██╔═══██╗██╔════╝
        █████╗  ███████║██╔██╗ ██║██║   ██║███████╗
        ██╔══╝  ██╔══██║██║╚██╗██║██║   ██║╚════██║
        ██║     ██║  ██║██║ ╚████║╚██████╔╝███████║
        ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝
                                                  
      `}
    </pre>
    <p>Welcome to my interactive terminal portfolio!
      My name is Theofanis Tompolis. I am a Computer Engineering student at the University of Ioannina with a passion for coding and building useful software.
      Always learning, always building. Feel free to explore my projects!</p>
  </div>
);

const Help = ({ onCommandClick }: HelpProps) => {
    const commands = [
      { cmd: 'about', desc: 'Learn more about me' },
      { cmd: 'skills', desc: 'View my technical skills'},
      { cmd: 'projects', desc: 'View my projects' },
      { cmd: 'contact', desc: 'Get my contact information' },
      { cmd: 'clear', desc: 'Clear the terminal screen' },
    ];
    return (
        <div>
            <p>Type one of the commands below, or simply click on it:</p>
            {commands.map(({ cmd, desc }) => (
                <p key={cmd} className="mt-1">
                    <button className="text-white underline hover:text-terminal-blue text-left" onClick={() => onCommandClick(cmd)}>{cmd}</button>
                    <span className="text-gray-400"> - {desc}</span>
                </p>
            ))}
        </div>
    );
};

const About = () => {
  const fullText = "I’m Theofanis Tompolis — a passionate and dedicated Computer Engineering student at the University of Ioannina, with a strong background in both practical technical work and software development. I spent over three years working at H.A. Garage Equipment Services, where I developed a hands-on mindset and problem-solving skills that I now apply to coding. I have solid experience in programming languages such as C, Java, Python, and MySQL. I've also worked with C++, Pascal, Haskell, and Prolog, giving me a broad understanding of different paradigms and problem-solving approaches. On the web development side, I designed and built my personal website using React and JavaScript, showcasing both technical functionality and clean, responsive design. I'm always eager to expand my skill set and embrace new technologies. My projects range from full-stack web applications tailored for real-world needs to custom tools like a Greek++ language parser and intermediate code generator — demonstrating my ability to work across the stack and solve complex problems. I'm actively seeking opportunities where I can contribute to impactful software projects, grow alongside talented teams, and turn ideas into high-quality solutions. I’m driven by curiosity, creativity, and a desire to keep improving as a developer.";
  const typedText = useTypewriter(fullText, 10);
  return (
    <div>
      <p className="text-2xl font-bold text-white mb-2">About Me</p>
      <p>{typedText}</p>
    </div>
  );
};

const Projects = ({ onCommandClick }: ProjectsProps) => (
    <div>
        <p className="text-2xl font-bold text-white mb-2 fade-in-item">My Projects</p>
        {projects.map((p, index) => (
            <p 
                key={p.id} 
                className="fade-in-item"
                style={{ animationDelay: `${(index + 1) * 75}ms` }}
            >
                {p.id}. 
                <button 
                    className="text-white underline hover:text-terminal-blue text-left ml-2"
                    onClick={() => onCommandClick(`projects ${p.id}`)}
                >
                    {p.title}
                </button>
            </p>
        ))}
        <p 
            className="mt-4 fade-in-item"
            style={{ animationDelay: `${(projects.length + 1) * 75}ms` }}
        >
            Click a project title or type 'projects {'<number>'}' to view details.
        </p>
    </div>
);

const Contact = () => (
    <div>
        <p className="text-2xl font-bold text-white mb-2">Contact Me</p>
        <p>Email: <a href="mailto:fanostompolis97@gmail.com" className="underline text-white hover:opacity-75">fanostompolis97@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/theofanis-tompolis/" target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-75">linkedin.com/in/theofanis-tompolis/</a></p>
        <p>GitHub: <a href="https://github.com/fanostomp" target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-75">github.com/fanostomp</a></p>
        <p>Instagram: <a href="https://www.instagram.com/fanos_tompolis/" target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-75">instagram.com/fanos_tompolis</a></p>
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
    <div>
      <p className="text-2xl font-bold text-white mb-4 fade-in-item">My Skills</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsList.map((skill, index) => (
          <div 
            key={skill.name} 
            className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-md fade-in-item"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            <div className="w-6 h-6 flex-shrink-0">{skill.icon}</div>
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- The Main Terminal Component ---

const initialPrompt = `PS C:\\Profile:`;

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
    const commandHistoryEntry = { command: `${initialPrompt}> ${commandStr}`, output: null };
    
    setHistory(prev => [...prev, commandHistoryEntry]);
    
    if (command.startsWith('projects ')) {
      const parts = command.split(' ');
      if (parts.length > 1 && !isNaN(parseInt(parts[1], 10))) {
          const id = parseInt(parts[1], 10);
          const project = projects.find(p => p.id === id);
          if (project) {
            setSelectedProject(project);
            setIsModalOpen(true);
            return;
          } else {
            output = <p className="text-red-500">Project with ID '{parts[1]}' not found.</p>;
          }
      } else {
          output = <p className="text-red-500">Please specify a project number. e.g., 'projects 1'</p>;
      }
    } else {
      switch (command) {
        case 'clear':
          setHistory([{ command: '', output: <WelcomeMessage /> }, { command: '', output: <Help onCommandClick={runCommand} /> }]);
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
          output = <p className="text-red-500">The term '{command}' is not recognized...</p>;
          break;
      }
    }
    setHistory(prev => [...prev, { command: '', output }]);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    }
  };

  return (
    <>
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
      <div
        className="w-full max-w-4xl bg-[#010101] rounded-md shadow-2xl border border-gray-700 flex flex-col overflow-hidden h-[85vh] md:h-[600px]"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="bg-[#0d0d0d] px-4 py-1.5 flex justify-between items-center flex-shrink-0 border-b border-gray-800">
          <div className="flex items-center space-x-2">
              <PowerShellIcon />
              <span className="text-sm text-white">Fanos Terminal 1.0</span>
          </div>
          <WindowControls />
        </div>
        <div 
          className="flex-grow p-4 overflow-y-auto text-sm text-white"
          ref={terminalRef}
        >
          {history.map((entry, index) => (
            <div key={index}>
              {entry.command && <div className="flex items-center"><span className="text-white">{entry.command}</span></div>}
              {entry.output && <div className="mt-2 mb-4">{entry.output}</div>}
            </div>
          ))}
          <div className="flex items-center">
            <span className="text-white">{initialPrompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1 ml-1 text-white caret-white"
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
}