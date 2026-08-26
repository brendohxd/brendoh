'use client';

import { useMemo, useState } from 'react';

type Project = {
  name: string;
  kind: string;
  description: string;
  status: string;
  accent: string;
  number: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    name: 'Project Relay',
    kind: 'Open tooling',
    description:
      'A coordination and evidence layer for turning messy work into a clearer human decision.',
    status: 'Building in public',
    accent: 'coral',
    number: '01',
    tags: ['product', 'open source'],
    href: 'https://github.com/brendohxd/Project-Relay',
  },
  {
    name: 'ITSM',
    kind: 'Research notebook',
    description:
      'A long-running attempt to make ambitious ideas more explicit, testable, and honest about their limits.',
    status: 'Deep work',
    accent: 'violet',
    number: '02',
    tags: ['research', 'physics'],
    href: 'https://github.com/brendohxd/ITSM-Integrated-Toroidal-Syntropic-Model',
  },
  {
    name: 'Fleet Service Tracker',
    kind: 'Field software',
    description:
      'A practical service workspace for keeping fleet records, fitment checks, and real-world maintenance in sync.',
    status: 'Shipping carefully',
    accent: 'lime',
    number: '03',
    tags: ['software', 'operations'],
    href: 'https://github.com/brendohxd/fleet-service-tracker',
  },
  {
    name: 'Syntropy-Nexus',
    kind: 'Product lab',
    description:
      'A cross-device space for exploring how thoughtful tools can feel more companionable and more capable.',
    status: 'In the lab',
    accent: 'blue',
    number: '04',
    tags: ['apps', 'experiments'],
    href: 'https://github.com/brendohxd/Syntropy-Nexus',
  },
];

const notes = [
  {
    label: 'Field notes · 06 min',
    title: 'Build the trail, not just the result',
    description:
      'Why the most useful tools leave a legible path from question to evidence to decision.',
  },
  {
    label: 'In progress · 04 min',
    title: 'A personal internet that still feels human',
    description:
      'A few principles for building online spaces with more texture, context, and care.',
  },
  {
    label: 'Working note · 08 min',
    title: 'Small systems, serious edges',
    description:
      'What breaks when a prototype meets weather, memory, changing data, and actual people.',
  },
];

const filters = ['all', 'product', 'research', 'software'];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
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
    </>
  );

  return project.href ? (
    <a className="project-card" href={project.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : <article className="project-card">{content}</article>;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="brendoh home">
          <span className="wordmark__mark">b</span>
          <span>brendoh</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#support">
          Say hello <ArrowUpRight />
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__pulse" /> Personal site · 2026</p>
          <h1>Making room for<br /><em>better questions.</em></h1>
          <p className="hero__lede">
            I&apos;m Brendon. This is where I collect the things I&apos;m building, researching, and learning in public.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#work">Explore the work <ArrowUpRight /></a>
            <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero__signal" aria-label="Current focus: making complex things more useful">
          <div className="signal-orbit signal-orbit--outer" />
          <div className="signal-orbit signal-orbit--inner" />
          <div className="signal-core"><span>in<br />progress</span></div>
          <span className="signal-label signal-label--top">curiosity</span>
          <span className="signal-label signal-label--right">care</span>
          <span className="signal-label signal-label--bottom">craft</span>
          <span className="signal-label signal-label--left">evidence</span>
        </div>
      </section>

      <section className="ticker" aria-label="Current focus">
        <div className="ticker__track">
          <span>Useful things</span><b>✳</b><span>Careful research</span><b>✳</b><span>Good questions</span><b>✳</b><span>Useful things</span><b>✳</b><span>Careful research</span><b>✳</b><span>Good questions</span>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few things<br /><em>taking shape.</em></h2>
          </div>
          <p className="section-heading__aside">Not a portfolio of finished trophies.<br />More like a map of the trail.</p>
        </div>

        <div className="filter-row" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={activeFilter === filter ? 'filter filter--active' : 'filter'}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section className="notes-section shell" id="notes">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">From the notebook</p>
            <h2>Notes worth<br /><em>sharing.</em></h2>
          </div>
          <span className="section-count">03 / 03</span>
        </div>
        <div className="notes-grid">
          {notes.map((note, index) => (
            <article className="note-card" key={note.title}>
              <span className="note-card__number">0{index + 1}</span>
              <div>
                <p className="note-card__label">{note.label}</p>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>
              <button className="note-card__link" type="button" aria-label={`Read ${note.title}`}>
                Read note <ArrowUpRight />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="about-panel">
          <div className="about-panel__stamp">BR / 01</div>
          <div className="about-panel__copy">
            <p className="eyebrow eyebrow--light">A little about me</p>
            <h2>Part builder,<br /><em>part witness.</em></h2>
            <p>
              I like ideas that can survive contact with reality. That usually means making something, testing the edges, keeping the receipts, and staying open to being wrong.
            </p>
            <p>
              brendoh.com is the public-facing index: the work, the thinking behind it, and the small discoveries in between.
            </p>
            <a className="button button--light" href="#support">Keep in touch <ArrowUpRight /></a>
          </div>
          <div className="about-panel__shape" aria-hidden="true">
            <span className="shape-ring shape-ring--one" />
            <span className="shape-ring shape-ring--two" />
            <span className="shape-square" />
            <span className="shape-caption">still<br />becoming</span>
          </div>
        </div>
      </section>

      <section className="support-section shell" id="support">
        <div className="support-section__copy">
          <p className="eyebrow">Support the work</p>
          <h2>If it&apos;s useful,<br /><em>help it travel.</em></h2>
          <p>
            This space will collect the ways to support the projects, research, and writing. Sponsorship links are ready to be added as they become real.
          </p>
        </div>
        <div className="support-links">
          <div className="support-link support-link--placeholder">
            <span className="support-link__icon">+</span>
            <span><strong>Sponsor links</strong><small>Coming soon</small></span>
            <span className="support-link__status">open</span>
          </div>
          <div className="support-link support-link--placeholder">
            <span className="support-link__icon">+</span>
            <span><strong>Collaborate</strong><small>Details to follow</small></span>
            <span className="support-link__status">open</span>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <div className="footer-top">
          <a className="wordmark wordmark--footer" href="#top"><span className="wordmark__mark">b</span><span>brendoh</span></a>
          <p>Built slowly. Shared honestly.</p>
          <a className="footer-back" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 brendoh</span>
          <span>Projects · notes · experiments</span>
          <span>Made for the curious</span>
        </div>
      </footer>
    </main>
  );
}
