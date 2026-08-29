import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, SiteFooter, SiteHeader } from '../../components/SiteChrome';
import { getNote, notes } from '../../content/site-content';

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) return { title: 'Note not found — brendoh' };

  return {
    title: `${note.title} — brendoh`,
    description: note.description,
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) notFound();

  return (
    <main className="note-detail" id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader currentPage="notes" />

      <section className="note-detail__hero shell">
        <div>
          <a className="note-detail__back" href="/notes">← Back to notes</a>
          <p className="eyebrow"><span className="eyebrow__pulse" /> {note.label}</p>
          <h1>{note.title}</h1>
          <p className="note-detail__lede">{note.description}</p>
        </div>
        <div className="note-detail__number" aria-hidden="true">{note.number}</div>
      </section>

      <article className="note-detail__body shell">
        <div className="note-detail__body-label">
          <span>BR / note</span>
          <span>Written in public</span>
        </div>
        <div className="note-detail__copy">
          {note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="note-detail__footer">
            <a className="text-link" href="/notes">More notes <span aria-hidden="true">→</span></a>
            <a className="text-link" href="/blog">To the blog <ArrowUpRight /></a>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
