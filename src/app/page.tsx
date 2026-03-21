import Terminal from '@/components/Terminal';
import { projects } from '@/data';

const stats = [
  { value: '4+', label: 'Selected projects' },
  { value: '14', label: 'Core technologies' },
  { value: '3+', label: 'Years of hands-on work experience' },
];

const strengths = [
  'Systems programming and low-level problem solving',
  'Full-stack web application development',
  'Compiler, parsing, and software engineering fundamentals',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#020817_45%,_#01040d_100%)] text-white">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <header className="glass-panel sticky top-4 z-10 mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-4 backdrop-blur">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300/90 uppercase">Theofanis Tompolis</p>
            <p className="mt-1 text-sm text-slate-400">Computer Engineering Student · Software Developer</p>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#console" className="transition hover:text-white">Console</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="animate-enter space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
              Available for internships and junior opportunities
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">Portfolio</p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building software with a <span className="text-cyan-300">practical engineering mindset</span>.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                I design and build projects across systems programming, compilers, and web applications. This redesign turns my portfolio into a professional product showcase while keeping the interactive terminal experience that makes it memorable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">View Projects</a>
              <a href="#console" className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Open Console</a>
              <a href="https://github.com/fanostomp" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/12 px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-white">GitHub</a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-3xl p-5">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-enter-delay relative">
            <div className="hero-orb absolute -left-8 top-8 h-32 w-32 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="glass-panel relative overflow-hidden rounded-[32px] p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">What I focus on</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Professional, modern, and technically credible.</h2>
                </div>
                <div className="grid gap-4">
                  {strengths.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-100">
                  The terminal is now part of a larger portfolio system instead of the whole homepage, which makes the site feel stronger and more professional while preserving your original personality.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected engineering work</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              A curated set of projects spanning compiler construction, operating systems, and full-stack web development.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.id} className="glass-panel group rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Project 0{project.id}
                  </span>
                  <span className="text-sm text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <p className="mt-4 text-sm font-medium text-cyan-200">{project.highlight}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.split(',').map((item) => (
                    <span key={item.trim()} className="rounded-full border border-white/8 bg-black/20 px-3 py-1 text-xs text-slate-300">
                      {item.trim()}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white/6 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
                    View Repository
                  </a>
                  <a href="#console" className="rounded-xl border border-cyan-400/25 px-4 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10">
                    Open in Console
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid scroll-mt-28 gap-6 py-12 lg:grid-cols-[0.72fr_1fr]">
          <div className="glass-panel rounded-[28px] p-7">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Technical profile</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              My background combines programming fundamentals, systems-level coursework, and front-end/full-stack implementation. I care about clean execution, clarity, and building things that actually work.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Languages',
                items: ['C', 'C++', 'Java', 'Python'],
              },
              {
                title: 'Web',
                items: ['React', 'JavaScript', 'HTML', 'CSS'],
              },
              {
                title: 'Systems',
                items: ['Linux', 'Assembly', 'VHDL', 'Virtual Machines'],
              },
              {
                title: 'CS Foundations',
                items: ['Compilers', 'Prolog', 'Haskell', 'MySQL'],
              },
            ].map((group) => (
              <div key={group.title} className="glass-panel rounded-[28px] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="grid scroll-mt-28 gap-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[28px] p-7">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Hands-on problem solving</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I bring a practical mindset shaped by technical work experience and academic engineering projects. I enjoy understanding how systems work, improving workflows, and building software that solves real problems.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: 'Computer Engineering Student',
                detail: 'University of Ioannina',
                copy: 'Focused on software engineering, systems programming, and core computer science topics while building a portfolio of hands-on technical work.',
              },
              {
                title: 'Technical Work Experience',
                detail: 'H.A. Garage Equipment Services',
                copy: 'Developed a practical troubleshooting mindset through multi-year technical work, learning how to solve issues methodically and work with responsibility.',
              },
              {
                title: 'Project-Driven Learning',
                detail: 'Personal and academic software projects',
                copy: 'Built projects across compilers, operating systems, and web development to strengthen implementation skills and broaden technical range.',
              },
            ].map((item) => (
              <article key={item.title} className="glass-panel rounded-[28px] p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.detail}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="console" className="scroll-mt-28 py-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Interactive feature</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Terminal experience</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              The original terminal concept is still here—refined into a premium interactive section that complements the rest of the portfolio.
            </p>
          </div>
          <Terminal />
        </section>

        <section id="contact" className="scroll-mt-28 py-12">
          <div className="glass-panel rounded-[32px] p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something useful.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  If you&apos;re looking for an intern, junior developer, or collaborator with strong motivation and a practical engineering mindset, feel free to reach out.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:fanostompolis97@gmail.com" className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Email Me</a>
                <a href="https://www.linkedin.com/in/theofanis-tompolis/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">LinkedIn</a>
                <a href="https://github.com/fanostomp" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/12 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
