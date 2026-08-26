import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';
import { WorkExplorer } from '../components/WorkExplorer';

export const metadata: Metadata = {
  title: 'Work — brendoh',
  description: 'Projects, research programs, and practical tools by Brendon James Boyd.',
};

export default function WorkPage() {
  return (
    <main className="section-page work-page" id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader currentPage="work" />

      <section className="section-page__hero work-page__hero shell">
        <div>
          <p className="eyebrow"><span className="eyebrow__pulse" /> The project index</p>
          <h1>Work that is still<br /><em>becoming.</em></h1>
          <p className="section-page__lede">
            A living map of the things I&apos;m building, researching, and trying to make more useful. Open a project to see the brief, the current shape, and the trail of links around it.
          </p>
        </div>
        <div className="section-page__index">
          <span>BR / 03</span>
          <span className="section-page__index-line" />
          <p>research<br />software<br />field work</p>
        </div>
      </section>

      <section className="work-page__content shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Five active threads</p>
            <h2>Follow the<br /><em>trail.</em></h2>
          </div>
          <p className="section-heading__aside">Filter by the kind of question<br />the work is asking.</p>
        </div>
        <WorkExplorer />
      </section>

      <section className="work-page__closing shell">
        <p className="eyebrow">A note on unfinished work</p>
        <p>
          These are not presented as finished trophies. They are working surfaces: some are shipping, some are in deep research, and some are still finding the right shape. The detail pages keep that distinction visible.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
