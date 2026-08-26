import Link from 'next/link';
import { ProjectCard } from './components/ProjectCard';
import { ArrowUpRight, SiteFooter, SiteHeader } from './components/SiteChrome';
import { notes } from './content/site-content';
import { projects, researchLinks } from './projects/project-data';

export default function Home() {
  return (
    <main id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />

      <section className="hero shell">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__pulse" /> Personal site · 2026</p>
          <h1>Making room for<br /><em>better questions.</em></h1>
          <p className="hero__lede">
            I&apos;m Brendon. This is where I collect the things I&apos;m building, researching, and learning in public.
          </p>
          <div className="hero__actions">
            <Link className="button button--dark" href="/work">Explore the work <ArrowUpRight /></Link>
            <Link className="text-link" href="/about">A little about me <span aria-hidden="true">↓</span></Link>
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

      <section className="home-preview work-section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>A few things<br /><em>taking shape.</em></h2>
          </div>
          <div className="section-heading__aside">
            <p>Five threads.<br />One direction.</p>
            <Link className="text-link" href="/work">See all work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="project-grid home-preview__grid">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section className="home-notes notes-section shell" id="notes">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">From the notebook</p>
            <h2>Notes worth<br /><em>sharing.</em></h2>
          </div>
          <div className="section-heading__aside">
            <p>Small observations.<br />Open questions.</p>
            <Link className="text-link" href="/notes">Open the notebook <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="notes-grid">
          {notes.map((note) => (
            <Link className="note-card" href={`/notes/${note.slug}`} key={note.slug}>
              <span className="note-card__number">{note.number}</span>
              <div>
                <p className="note-card__label">{note.label}</p>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>
              <span className="note-card__link">Read note <ArrowUpRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-section shell">
        <div className="about-panel">
          <div className="about-panel__stamp">BR / 01</div>
          <div className="about-panel__copy">
            <p className="eyebrow eyebrow--light">A little about me</p>
            <h2>Part builder,<br /><em>part witness.</em></h2>
            <p>
              I&apos;m Brendon James Boyd — an independent researcher and developer who moves between the whiteboard, the workbench, and the codebase.
            </p>
            <p>
              I like ideas that can survive contact with reality: explicit claims, practical tools, honest uncertainty, and a clear trail.
            </p>
            <Link className="button button--light" href="/about">Read the longer version <ArrowUpRight /></Link>
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
        <div className="profile-links">
          <p className="profile-links__label">Research record</p>
          <p className="profile-links__intro">Follow the work through its archive and persistent researcher identity.</p>
          <div className="profile-links__list">
            {researchLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span><strong>{link.label}</strong><small>{link.value}</small></span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
