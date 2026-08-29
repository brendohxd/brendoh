import type { Metadata } from 'next';
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
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
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
          <a className="project-detail__back" href="/work">← All projects</a>
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
          {project.coreIdentity && (
            <section className="project-detail__section project-detail__section--identity">
              <p className="eyebrow">Core identity</p>
              <h2>What the model<br /><em>is.</em></h2>
              <p className="project-detail__section-lede">{project.coreIdentity.summary}</p>
              <div className="project-detail__identity-grid">
                {project.coreIdentity.elements.map((element) => (
                  <article className="project-detail__identity-item" key={element.label}>
                    <span>{element.label}</span>
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {project.thermodynamics && (
            <section className="project-detail__section project-detail__section--thermodynamics" id="thermodynamics">
              <p className="eyebrow">Dedicated proposal</p>
              <h2>Completing<br /><em>the second law.</em></h2>
              <p className="project-detail__section-lede">{project.thermodynamics.lead}</p>
              <div className="project-detail__thermodynamics-grid">
                <div className="project-detail__thermodynamics-copy">
                  {project.thermodynamics.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="project-detail__equations">
                  <div className="project-detail__equation">
                    <span className="project-detail__equation-label">Proposed global balance</span>
                    <code>∂S/∂t = σ<sub>ent</sub> − ∇ · Ξ<sub>syn</sub></code>
                    <span>Local entropy production minus the convergence of the syntropic source vector.</span>
                  </div>
                  <div className="project-detail__equation project-detail__equation--accent">
                    <span className="project-detail__equation-label">Balanced manifold</span>
                    <code>σ<sub>ent</sub> = ∇ · Ξ<sub>syn</sub> ⇒ ∂S/∂t = 0</code>
                    <span>A proposed balance, conditional on the open T³ boundary and source term being physically real.</span>
                  </div>
                </div>
              </div>
              <p className="project-detail__caveat">{project.thermodynamics.caveat}</p>
              <a className="text-link" href={project.thermodynamics.sourceHref} target="_blank" rel="noreferrer">
                {project.thermodynamics.sourceLabel} <ArrowUpRight />
              </a>
            </section>
          )}

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
        <a className="button button--dark" href="/work">Back to the project map <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
