import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, researchLinks } from '../projects/project-data';

export const metadata: Metadata = {
  title: 'About — brendoh',
  description:
    'About Brendon James Boyd: independent researcher, developer, and practical builder.',
};

const principles = [
  ['01', 'Evidence before certainty', 'Make the claim legible. Keep the trail. Say what is known, what is inferred, and what still needs work.'],
  ['02', 'Useful over ornamental', 'A good idea should be able to leave the page and meet a real person, a real machine, or a real decision.'],
  ['03', 'Curiosity with consequences', 'Follow the interesting question far enough that it changes what you build, test, or choose next.'],
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="brendoh home">
        <span className="wordmark__mark">b</span>
        <span>brendoh</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#notes">Notes</Link>
        <Link href="/about" aria-current="page">About</Link>
      </nav>
      <Link className="header-cta" href="/#support">
        Say hello <ArrowUpRight />
      </Link>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Link className="wordmark wordmark--footer" href="/"><span className="wordmark__mark">b</span><span>brendoh</span></Link>
        <p>Built slowly. Shared honestly.</p>
        <a className="footer-back" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 brendoh</span>
        <span>Projects · notes · experiments</span>
        <span>Made for the curious</span>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />

      <section className="about-hero shell">
        <div className="about-hero__copy">
          <p className="eyebrow"><span className="eyebrow__pulse" /> About Brendon</p>
          <h1>Curious about<br /><em>what holds.</em></h1>
          <p className="about-hero__lede">
            I&apos;m Brendon James Boyd — an independent researcher and developer based in Perth, Western Australia.
          </p>
        </div>
        <div className="about-hero__index">
          <span className="about-hero__index-label">BR / 02</span>
          <span className="about-hero__index-line" />
          <p>Research<br />software<br />practical work</p>
        </div>
      </section>

      <section className="about-story shell">
        <div className="about-story__label">
          <p className="eyebrow">The short version</p>
          <span>01 — 04</span>
        </div>
        <div className="about-story__body">
          <p className="about-lead">
            I move between the whiteboard, the workbench, and the codebase — following difficult questions until they become something clearer, more useful, or more honestly unfinished.
          </p>
          <p>
            My main research project is ITSM Cosmology, an evolving program exploring cosmology, gravitation, and open-system ideas. I treat it as a work in progress: claims should be explicit, testable, and honest about what is derived, computed, inferred, or still unknown.
          </p>
          <p>
            Alongside the research, I build tools that help ideas survive contact with reality: coordination and evidence in Project-Relay, shared memory and collaboration in Syntropy-Nexus, field operations in fleet-service-tracker, and public context in Planetary Live Risk Watch.
          </p>
        </div>
      </section>

      <section className="about-signal shell">
        <div className="about-signal__identity">
          <p className="eyebrow eyebrow--light">A working identity</p>
          <h2>Syntropic Seeker<br /><em>of Truth.</em></h2>
          <p>
            A curious toroidal companion that follows evidence, challenges false certainty, and turns disorder into constructive action while protecting what matters.
          </p>
          <span className="about-signal__orb" aria-hidden="true" />
        </div>
        <div className="about-signal__principles">
          {principles.map(([number, title, description]) => (
            <article className="principle" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-projects shell">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">The work around the work</p>
            <h2>Five threads,<br /><em>one direction.</em></h2>
          </div>
          <p className="section-heading__aside">Different surfaces.<br />The same appetite for useful truth.</p>
        </div>
        <div className="about-project-list">
          {projects.map((project, index) => (
            <Link className="about-project" href={`/projects/${project.slug}`} key={project.name}>
              <span className="about-project__number">0{index + 1}</span>
              <span className="about-project__name">{project.name}</span>
              <span className="about-project__kind">{project.kind}</span>
              <span className="about-project__detail">{project.shortDetail}</span>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="about-grounded shell">
        <div className="about-grounded__heading">
          <p className="eyebrow">Beyond the screen</p>
          <h2>Make it.<br /><em>Fix it.</em></h2>
        </div>
        <div className="about-grounded__body">
          <p>
            Much of what I know has been self-taught through experience, curiosity, and practical work. I enjoy diagnosing, rebuilding, and repairing machinery — especially motorcycles and commercial outdoor equipment — because the physical world is an excellent editor.
          </p>
          <p>
            It pushes back. It reveals the weak assumption. It rewards patience, documentation, and the willingness to take something apart before pretending to understand it.
          </p>
          <Link className="text-link" href="/#work">See the current projects <span aria-hidden="true">↓</span></Link>
        </div>
      </section>

      <section className="about-close shell">
        <div className="about-close__line" />
        <p className="eyebrow">Why this site exists</p>
        <h2>A public index for<br /><em>unfinished good work.</em></h2>
        <p>
          brendoh.com is where the projects, notes, experiments, and support links can meet in one place — not as a polished finish line, but as a record of the trail.
        </p>
        <div className="profile-links profile-links--about">
          <p className="profile-links__label">Research record</p>
          <div className="profile-links__list">
            {researchLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span><strong>{link.label}</strong><small>{link.value}</small></span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
        <Link className="button button--dark" href="/#support">Support the work <ArrowUpRight /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
