'use client';

import { useEffect, useState } from 'react';
import Terminal from '@/components/Terminal';
import { featuredProjects } from '@/data/portfolio';

const externalLinks = [
  ['GitHub', 'https://github.com/fanostomp'],
  ['LinkedIn', 'https://www.linkedin.com/in/theofanis-tompolis/'],
];

export default function PortfolioHome() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = terminalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [terminalOpen]);

  return (
    <div className="portfolio-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Back to top">
          FANOS<span>_</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="terminal-trigger" onClick={() => setTerminalOpen(true)} aria-label="Open terminal mode">
            &gt;_
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="top">
          <div className="hero-kicker reveal reveal-1">
            <span>Full-stack developer</span>
            <span className="availability"><i /> Open to opportunities</span>
          </div>

          <h1 className="hero-title" aria-label="I build software people actually use">
            <span className="reveal reveal-1">I build</span>
            <span className="reveal reveal-2">software people</span>
            <span className="reveal reveal-3 hero-outline">actually use.</span>
          </h1>

          <div className="hero-bottom reveal reveal-4">
            <p>
              Final-year Computer Engineering student and full-stack developer working across React, TypeScript,
              .NET and SQL — from polished interfaces to APIs and production debugging.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">Explore selected work <span>↘</span></a>
              {externalLinks.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
          </div>

          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-ring" />
            <span className="orbit-dot" />
            <span className="orbit-code">{`{ build: ship }`}</span>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>REACT — TYPESCRIPT — .NET — SQL — SIGNALR — DOCKER — LINUX — </span>
            <span>REACT — TYPESCRIPT — .NET — SQL — SIGNALR — DOCKER — LINUX — </span>
          </div>
        </div>

        <section className="work section-wrap" id="work">
          <div className="section-heading">
            <span>01 / Selected work</span>
            <h2>Things I&apos;ve built<br />and worked on.</h2>
          </div>

          <div className="projects-list">
            {featuredProjects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-meta">
                  <span className="project-number">{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  {project.href && (
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel} <span>↗</span>
                    </a>
                  )}
                </div>

                <div className={`project-visual visual-${project.number}`}>
                  <span className="visual-top">{project.visualDetail}</span>
                  <strong>{project.visual}</strong>
                  <div className="visual-grid" />
                  <span className="view-pill">VIEW</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading compact">
            <span>02 / About</span>
            <h2>Across the stack,<br />not stuck in one layer.</h2>
          </div>
          <div className="about-grid">
            <p className="about-lead">
              I like understanding how the whole product works — interface, API, data and the messy debugging in between.
            </p>
            <div className="about-copy">
              <p>
                I&apos;m Theofanis Tompolis, a final-year Computer Engineering student at the University of Ioannina.
                My work spans production web applications, university systems projects, compiler design and data-focused challenges.
              </p>
              <p>
                I care about clean interfaces, maintainable code and getting features over the line instead of stopping at the demo stage.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <span className="contact-label">03 / Contact</span>
          <h2>Have something<br /><em>interesting</em> to build?</h2>
          <a className="contact-email" href="mailto:fanostompolis97@gmail.com">fanostompolis97@gmail.com ↗</a>
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Theofanis Tompolis</span>
            <button onClick={() => setTerminalOpen(true)}>Enter terminal mode &gt;_</button>
          </div>
        </section>
      </main>

      {terminalOpen && (
        <div className="terminal-overlay" role="dialog" aria-modal="true" aria-label="Legacy terminal portfolio">
          <div className="terminal-overlay-bar">
            <span>LEGACY MODE / FANOS TERMINAL 1.0</span>
            <button onClick={() => setTerminalOpen(false)}>CLOSE ×</button>
          </div>
          <div className="terminal-stage">
            <Terminal />
          </div>
        </div>
      )}
    </div>
  );
}
