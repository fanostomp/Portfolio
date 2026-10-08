import type { PortfolioProject } from '@/data/portfolio';

export default function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <div className={`evidence-visual evidence-${project.slug}`} role="img" aria-label={`${project.visual}: ${project.visualDetail}. ${project.evidence.map((item) => `${item.value}: ${item.label}`).join('. ')}`}>
      <div className="evidence-top"><span>{project.category}</span><span>↗</span></div>
      <div className="evidence-center"><span className="evidence-caption">{project.visualDetail}</span><strong>{project.visual}</strong></div>
      <div className="evidence-grid">{project.evidence.map((item) => <div key={item.value}><b>{item.value}</b><span>{item.label}</span></div>)}</div>
      <span className="evidence-bottom">Explore the work <span>↗</span></span>
    </div>
  );
}
