'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ProjectVisual from '@/components/ProjectVisual';
import { experience, featuredProjects, moreProjects, profile, techGroups } from '@/data/portfolio';

const Terminal = dynamic(() => import('@/components/Terminal'), { loading: () => <p className="terminal-loading">Opening terminal…</p> });

const externalLinks = [
  ['GitHub', profile.github],
  ['LinkedIn', profile.linkedin],
];

export default function PortfolioHome() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!terminalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTerminalOpen(false);
      if (event.key === 'Tab') {
        const controls = Array.from(overlayRef.current?.querySelectorAll<HTMLElement>('a[href], button, input') ?? []).filter((element) => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      openerRef.current?.focus();
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
      <header className="site-nav" inert={terminalOpen}>
        <a className="brand" href="#top" aria-label="Back to top">
          FANOS<span>_</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a className="nav-secondary" href="#experience">Experience</a>
          <a className="nav-secondary" href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="nav-cv" href={profile.cv} download>CV ↓</a>
          <button className="terminal-trigger" onClick={(event) => { openerRef.current = event.currentTarget; setTerminalOpen(true); }} aria-label="Open terminal mode">
            &gt;_
          </button>
        </nav>
      </header>

      <main id="main-content" inert={terminalOpen}>
        <section className="hero section-wrap" id="top">
          <div className="hero-kicker reveal reveal-1">
            <span>Full-stack developer</span>
            <span className="availability"><i /> {profile.availability}</span>
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
              <a className="cv-link" href={profile.cv} download>Download CV ↓</a>
              {externalLinks.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </div>
          </div>

          <div className="hero-profile reveal reveal-4"><span>{profile.name}</span><span>{profile.location}</span><span>Integrated Master&apos;s · Expected 2027</span></div>

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
                    <span className="project-status">{project.status}</span>
                  </div>

                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack-list">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                    <div className="project-actions">
                      <Link className="project-link" href={`/work/${project.slug}`}>Read case study <span>↗</span></Link>
                      {project.href ? <a className="repository-link" href={project.href} target="_blank" rel="noreferrer">Source code ↗</a> : null}
                    </div>
                  </div>

                  <Link className="project-evidence-link" href={`/work/${project.slug}`} aria-label={`Read ${project.title} case study`}><ProjectVisual project={project} /></Link>
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
                  <span className="more-index">0{index + featuredProjects.length + 1}</span>
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
              <div className="experience-employer"><strong>{experience.company}</strong><span>{experience.dates}</span></div>
              <p>{experience.summary}</p>
              <Link className="experience-case-link" href="/work/footy-greece">Read the work story ↗</Link>
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
                I&apos;m Theofanis Tompolis, a final-year Computer Science &amp; Engineering student at the University of Ioannina, completing an integrated master&apos;s degree with expected graduation in 2027.
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
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} ↗</a>
            <div className="contact-actions"><a href={profile.cv} download>Download CV ↓</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>{profile.location} · {profile.availability}</span></div>
          </div>
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Theofanis Tompolis</span>
            <button onClick={(event) => { openerRef.current = event.currentTarget; setTerminalOpen(true); }}>Enter terminal mode &gt;_</button>
          </div>
        </section>
      </main>

      {terminalOpen && (
        <div ref={overlayRef} className="terminal-overlay" role="dialog" aria-modal="true" aria-label="Portfolio terminal mode">
          <div className="terminal-overlay-bar">
            <span>TERMINAL MODE / FANOS PORTFOLIO</span>
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

