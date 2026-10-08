import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProjects, profile } from '@/data/portfolio';
import { caseStudies } from '@/data/case-studies';
import ProjectVisual from '@/components/ProjectVisual';

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return featuredProjects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) return { title: 'Project not found' };
  const title = `${project.title} — Theofanis Tompolis`;
  return {
    title, description: project.description, alternates: { canonical: `/work/${slug}` },
    openGraph: { title, description: project.description, url: `/work/${slug}`, type: 'article', images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'Theofanis Tompolis — Full-stack developer' }] },
    twitter: { card: 'summary_large_image', title, description: project.description, images: ['/social-preview.png'] },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  const study = caseStudies[slug];
  if (!project || !study) notFound();
  const nextProject = featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length];
  return (
    <div className="portfolio-shell case-shell">
      <header className="site-nav">
        <Link className="brand" href="/" aria-label="Theofanis Tompolis portfolio home">FANOS<span>_</span></Link>
        <nav aria-label="Case study navigation"><Link href="/#work">All work</Link><a href={profile.cv} download>Download CV ↓</a><a href={`mailto:${profile.email}`}>Contact ↗</a></nav>
      </header>
      <main id="main-content" className="case-main section-wrap">
        <Link className="case-back" href="/#work">← Back to selected work</Link>
        <div className="case-kicker"><span>{project.category}</span><span>{project.status}</span></div>
        <h1 className="case-title">{project.title}</h1><p className="case-intro">{study.intro}</p>
        <div className="case-meta"><span>{study.role}</span><span>{project.stack.join(' / ')}</span></div>
        <div className="case-overview">
          <div><span className="eyebrow">The context</span><p>{study.context}</p>{project.href ? <a className="primary-link" href={project.href} target="_blank" rel="noreferrer">View repository ↗</a> : <p className="case-note">{study.note}</p>}</div>
          <ProjectVisual project={project} />
        </div>
        <section className="case-flow" aria-labelledby="flow-title">
          <div className="case-section-head"><span className="eyebrow">How it connects</span><h2 id="flow-title">The workflow.</h2></div>
          <ol>{study.flow.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>)}</ol>
          <p className="case-caption">{study.flowCaption}</p>
        </section>
        <section className="case-delivery" aria-labelledby="delivery-title">
          <div className="case-section-head"><span className="eyebrow">Engineering details</span><h2 id="delivery-title">Inside the work.</h2></div>
          <div className="delivery-grid">{study.approach.map((item, index) => <article key={item.title}><span className="delivery-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </section>
        <section className="case-lessons" aria-labelledby="lessons-title"><h2 id="lessons-title">What I took from it.</h2><ul>{study.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></section>
        {study.resources.length > 0 ? <section className="case-resources" aria-labelledby="resources-title"><div><span className="eyebrow">See for yourself</span><h2 id="resources-title">Source & documentation.</h2></div><div>{study.resources.map((resource) => <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer">{resource.label}<span>↗</span></a>)}</div></section> : null}
        <div className="case-next"><span className="eyebrow">Next project</span><Link href={`/work/${nextProject.slug}`}>{nextProject.title}<span>↗</span></Link></div>
      </main>
      <footer className="case-footer section-wrap"><span>© {new Date().getFullYear()} {profile.name}</span><a href={profile.cv} download>Download CV ↓</a><a href={`mailto:${profile.email}`}>{profile.email}</a></footer>
    </div>
  );
}
