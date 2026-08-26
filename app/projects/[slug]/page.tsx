import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { getProject, projects } from '../project-data';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Project not found — brendoh' };
  }

  return {
    title: `${project.name} — brendoh`,
    description: project.description,
    openGraph: {
      title: `${project.name} — brendoh`,
      description: project.description,
      url: `https://brendoh.com/projects/${project.slug}`,
      siteName: 'brendoh',
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className={`project-page project-page--${project.accent}`} id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader currentPage="work" />

      <section className="project-detail__hero shell">
        <div className="project-detail__hero-copy">
          <Link className="project-detail__back" href="/work">← All projects</Link>
          <p className="eyebrow"><span className="eyebrow__pulse" /> Project {project.number} · {project.kind}</p>
          <h1>{project.name}</h1>
          <p className="project-detail__lead">{project.lead}</p>
        </div>
        <div className={`project-detail__mark project-mark--${project.accent}`} aria-hidden="true">
          <span>{project.number}</span>
          <span className="project-mark__dot" />
        </div>
      </section>

      <div className="project-detail__layout shell">
        <article className="project-detail__content">
          <section className="project-detail__section">
            <p className="eyebrow">The brief</p>
            <h2>What it<br /><em>does.</em></h2>
            <ul className="project-detail__list">
              {project.whatItDoes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="project-detail__section project-detail__section--retrospective">
            <p className="eyebrow">Retrospective</p>
            <h2>Still<br /><em>becoming.</em></h2>
            <p className="project-detail__retrospective">{project.retrospective}</p>
          </section>
        </article>

        <aside className="project-detail__aside">
          <div className="project-detail__meta-block">
            <span className="project-detail__meta-label">Current status</span>
            <strong>{project.status}</strong>
          </div>
          <div className="project-detail__meta-block">
            <span className="project-detail__meta-label">Threads</span>
            <div className="tag-list">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="project-detail__links">
            <span className="project-detail__meta-label">Follow the trail</span>
            {project.links.map((link) => (
              <a className="project-detail__link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </aside>
      </div>

      <section className="project-detail__return shell">
        <Link className="button button--dark" href="/work">Back to the project map <ArrowUpRight /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
