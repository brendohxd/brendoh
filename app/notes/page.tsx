import type { Metadata } from 'next';
import { ArrowUpRight, SiteFooter, SiteHeader } from '../components/SiteChrome';
import { notes } from '../content/site-content';

export const metadata: Metadata = {
  title: 'Notes — brendoh',
  description: 'Field notes and working observations from Brendon James Boyd.',
};

export default function NotesPage() {
  return (
    <main className="section-page notes-page" id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader currentPage="notes" />

      <section className="section-page__hero notes-page__hero shell">
        <div>
          <p className="eyebrow"><span className="eyebrow__pulse" /> The notebook</p>
          <h1>Notes from<br /><em>the middle.</em></h1>
          <p className="section-page__lede">
            Short pieces about building, researching, repairing, and paying attention while the work is still in motion.
          </p>
        </div>
        <div className="section-page__index">
          <span>BR / 04</span>
          <span className="section-page__index-line" />
          <p>field notes<br />working ideas<br />open questions</p>
        </div>
      </section>

      <section className="notes-page__content shell">
        <div className="editorial-list">
          {notes.map((note) => (
            <a className="editorial-card" href={`/notes/${note.slug}`} key={note.slug}>
              <span className="editorial-card__number">{note.number}</span>
              <div className="editorial-card__copy">
                <p className="editorial-card__label">{note.label}</p>
                <h2>{note.title}</h2>
                <p>{note.description}</p>
              </div>
              <span className="editorial-card__action">Read note <ArrowUpRight /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="notes-page__blog-callout shell">
        <div>
          <p className="eyebrow">Longer thoughts</p>
          <h2>The blog is<br /><em>taking shape.</em></h2>
        </div>
        <div>
          <p>When a note grows into something longer, it will move into the blog — with room for references, revisions, and a little more breathing space.</p>
          <a className="text-link" href="/blog">See what&apos;s developing <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
