import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, SiteFooter, SiteHeader } from '../components/SiteChrome';
import { blogIdeas } from '../content/site-content';

export const metadata: Metadata = {
  title: 'Blog — brendoh',
  description: 'Long-form writing and essays in development by Brendon James Boyd.',
};

export default function BlogPage() {
  return (
    <main className="section-page blog-page" id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader currentPage="blog" />

      <section className="section-page__hero blog-page__hero shell">
        <div>
          <p className="eyebrow"><span className="eyebrow__pulse" /> Long-form thinking</p>
          <h1>Ideas need a little<br /><em>more room.</em></h1>
          <p className="section-page__lede">
            The blog is where a question can become an essay: longer than a note, still open to revision, and grounded in the work that prompted it.
          </p>
        </div>
        <div className="section-page__index">
          <span>BR / 05</span>
          <span className="section-page__index-line" />
          <p>essays<br />references<br />revisions</p>
        </div>
      </section>

      <section className="blog-page__intro shell">
        <div>
          <p className="eyebrow">A small publishing practice</p>
          <h2>Not content.<br /><em>Context.</em></h2>
        </div>
        <p>
          I&apos;m interested in writing that leaves a useful trace: what changed, what was tested, what remains uncertain, and why the question is worth carrying forward. The first essays are still being developed, so this page is an honest queue rather than a collection of pretend finished posts.
        </p>
      </section>

      <section className="blog-page__queue shell">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">In the queue</p>
            <h2>Things I&apos;m<br /><em>writing toward.</em></h2>
          </div>
          <span className="section-count">03 / 03</span>
        </div>
        <div className="blog-queue">
          {blogIdeas.map((idea, index) => (
            <article className="blog-idea" key={idea.title}>
              <span className="blog-idea__number">0{index + 1}</span>
              <div>
                <p className="editorial-card__label">{idea.label}</p>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </div>
              <span className="blog-idea__stage">{idea.stage}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-page__notes shell">
        <div>
          <p className="eyebrow">Start smaller</p>
          <h2>The notebook is<br /><em>already open.</em></h2>
        </div>
        <div>
          <p>While the longer pieces find their shape, the Notes page is where the shorter observations live now.</p>
          <Link className="button button--dark" href="/notes">Read the notes <ArrowUpRight /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
