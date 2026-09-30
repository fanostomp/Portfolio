'use client';

import { useEffect, useState } from 'react';
import Terminal from '@/components/Terminal';
import { experience, featuredProjects, moreProjects, techGroups } from '@/data/portfolio';

const externalLinks = [
  ['GitHub', 'https://github.com/fanostomp'],
  ['LinkedIn', 'https://www.linkedin.com/in/theofanis-tompolis/'],
];

export default function PortfolioHome() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = terminalOpen ? 'hidden' : '';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTerminalOpen(false);
    };

    if (terminalOpen) window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [terminalOpen]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-reveal]'));

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Back to top">
          FANOS<span>_</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
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
            <span>REACT — TYPESCRIPT — .NET — SQL — SIGNALR — DOCKER — LINUX — TESTING — </span>
            <span>REACT — TYPESCRIPT — .NET — SQL — SIGNALR — DOCKER — LINUX — TESTING — </span>
          </div>
        </div>

        <section className="work section-wrap" id="work">
          <div className="section-heading scroll-reveal" data-scroll-reveal>
            <span>01 / Selected work</span>
            <h2>Things I&apos;ve built<br />and worked on.</h2>
          </div>

          <div className="projects-list">
            {featuredProjects.map((project, index) => {
              const visualContent = (
                <>
                  <span className="visual-top">{project.visualDetail}</span>
                  <strong>{project.visual}</strong>
                  <div className="visual-grid" />
                  <span className="view-pill">{project.href ? 'OPEN' : 'LIVE'}</span>
                </>
              );

              return (
                <article
                  className="project-row scroll-reveal"
                  data-scroll-reveal
                  style={{ transitionDelay: `${index * 55}ms` }}
                  key={project.number}
                >
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

                  {project.href ? (
                    <a
                      className={`project-visual project-visual-link visual-${project.number}`}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} repository`}
                    >
                      {visualContent}
                    </a>
                  ) : (
                    <div className={`project-visual visual-${project.number}`}>{visualContent}</div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="more-work section-wrap" aria-labelledby="more-work-title">
          <div className="more-work-head scroll-reveal" data-scroll-reveal>
            <div>
              <span className="eyebrow">More work</span>
              <h3 id="more-work-title">More code,<br />less spotlight.</h3>
            </div>
            <a href="https://github.com/fanostomp?tab=repositories" target="_blank" rel="noreferrer">
              All repositories ↗
            </a>
          </div>

          <div className="more-work-grid">
            {moreProjects.map((project, index) => (
              <a
                className="more-card scroll-reveal"
                data-scroll-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <div className="more-card-top">
                  <span className="more-index">0{index + 5}</span>
                  <span className="more-arrow">↗</span>
                </div>
                <span className="more-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <div className="mini-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading scroll-reveal" data-scroll-reveal>
            <span>02 / Experience</span>
            <h2>Production work,<br />not just coursework.</h2>
          </div>

          <div className="experience-grid">
            <div className="experience-card scroll-reveal" data-scroll-reveal>
              <span className="experience-context">{experience.context}</span>
              <h3>{experience.role}</h3>
              <p>{experience.summary}</p>
              <div className="experience-signal">
                <span>UI</span><i />
                <span>API</span><i />
                <span>DATA</span>
              </div>
            </div>

            <div className="experience-highlights">
              {experience.highlights.map((highlight, index) => (
                <div
                  className="highlight-row scroll-reveal"
                  data-scroll-reveal
                  style={{ transitionDelay: `${index * 60}ms` }}
                  key={highlight}
                >
                  <span>0{index + 1}</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stack-section section-wrap" aria-labelledby="stack-title">
          <div className="section-heading scroll-reveal" data-scroll-reveal>
            <span>03 / Stack</span>
            <h2 id="stack-title">Tools I actually<br />work with.</h2>
          </div>

          <div className="tech-grid">
            {techGroups.map((group, index) => (
              <div
                className="tech-group scroll-reveal"
                data-scroll-reveal
                style={{ transitionDelay: `${index * 55}ms` }}
                key={group.title}
              >
                <span className="tech-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tech-items">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading compact scroll-reveal" data-scroll-reveal>
            <span>04 / About</span>
            <h2>Across the stack,<br />not stuck in one layer.</h2>
          </div>
          <div className="about-grid">
            <p className="about-lead scroll-reveal" data-scroll-reveal>
              I like understanding how the whole product works — interface, API, data and the messy debugging in between.
            </p>
            <div className="about-copy scroll-reveal" data-scroll-reveal style={{ transitionDelay: '80ms' }}>
              <p>
                I&apos;m Theofanis Tompolis, a final-year Computer Engineering student at the University of Ioannina.
                My work spans production web applications, systems projects, compiler design and data-focused challenges.
              </p>
              <p>
                I care about clean interfaces, maintainable code and getting features over the line instead of stopping at the demo stage.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="scroll-reveal" data-scroll-reveal>
            <span className="contact-label">05 / Contact</span>
            <h2>Have something<br /><em>interesting</em> to build?</h2>
            <a className="contact-email" href="mailto:fanostompolis97@gmail.com">fanostompolis97@gmail.com ↗</a>
          </div>
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
            <button onClick={() => setTerminalOpen(false)} autoFocus>CLOSE ×</button>
          </div>
          <div className="terminal-stage">
            <Terminal />
          </div>
        </div>
      )}
    </div>
  );
}
