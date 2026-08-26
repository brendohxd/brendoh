import Link from 'next/link';
import { ArrowUpRight } from './SiteChrome';
import type { Project } from '../projects/project-data';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <div className={`project-mark project-mark--${project.accent}`}>
        <span>{project.number}</span>
        <span className="project-mark__dot" />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.kind}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-card__footer">
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <ArrowUpRight />
        </div>
      </div>
    </Link>
  );
}
