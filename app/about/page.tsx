import type { Metadata } from 'next';
import { ArrowUpRight, SiteFooter, SiteHeader } from '../components/SiteChrome';
import { projects, researchLinks } from '../projects/project-data';

export const metadata: Metadata = {
  title: 'About — brendoh',
  description:
    'About Brendon Boyd: an independent researcher, developer, practical systems builder, and mechanic based in Perth, Western Australia.',
};

const principles = [
  [
    '01',
    'Evidence before certainty',
    'A proposed explanation is not an established result. Claims stay connected to their assumptions, calculations, evidence, and limits.',
  ],
  [
    '02',
    'Human authority stays explicit',
    'AI can calculate, reproduce, review, and challenge. Interpretive responsibility and the final decision remain visible and human.',
  ],
  [
    '03',
    'Restore the broken parts',
    'Look for the missing connection—between ideas, people, systems, and time—and rebuild it into something coherent and useful.',
  ],
];

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <div className="grain" aria-hidden="true" />
      <SiteHeader currentPage="about" />

      <section className="about-hero shell">
        <div className="about-hero__copy">
          <p className="eyebrow"><span className="eyebrow__pulse" /> About Brendon</p>
          <h1>Curious about<br /><em>what holds.</em></h1>
          <p className="about-hero__lede">
            I&apos;m Brendon Boyd — an independent researcher, developer, practical systems builder, and mechanic based in Perth, Western Australia.
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
          <p className="eyebrow">The person behind the work</p>
          <span>01 — 08</span>
        </div>
        <div className="about-story__body">
          <p className="about-lead">
            A list of disciplines does not explain who I am or why I do any of this.
          </p>
          <p>
            To understand that, you have to begin with Eve. Eve is my fiancée, the woman I love, and the person I have chosen to build my life with. She is the emotional centre of my future and my true motivation for everything I am working toward. I intend to marry her, make her my wife, build a stable home with her, and raise a family together.
          </p>
          <p>
            The future I am building with Eve is not separate from my scientific research, technical projects, mechanical work, or personal development. It is the reason those efforts matter to me. Beneath every manuscript, calculation, program, repair, late night, failed attempt, and renewed effort is the same purpose: to become the man and husband I know I can be and to build a secure, meaningful, and lasting life with the woman I love.
          </p>
          <p>
            For me, love is not merely a feeling or something expressed through words. It means commitment, responsibility, loyalty, patience, stability, and continuous personal growth. It means building alongside Eve while respecting her as her own person—creating the conditions in which we can both move forward, make our own choices, support one another, and build a future together.
          </p>
          <p>
            That purpose is the foundation beneath everything else described here.
          </p>
        </div>
      </section>

      <section className="about-dossier shell" id="path">
        <div className="about-dossier__intro">
          <p className="eyebrow">The path so far</p>
          <p>01 / 07</p>
        </div>
        <article className="about-dossier__section about-dossier__section--first">
          <div className="about-dossier__marker">01<br /><span>Path</span></div>
          <div className="about-dossier__copy">
            <h2>An unconventional<br /><em>path.</em></h2>
            <p>
              My path into science, technology, and engineering has not been conventional. My formal schooling ended after Year 10. I later completed a Certificate II in General Education for Adults and spent approximately two years studying toward a Certificate III in Civil and Structural Engineering, although I did not complete the qualification.
            </p>
            <p>
              Most of what I know has been developed independently through curiosity, necessity, practical experience, persistent investigation, and a willingness to teach myself whatever a problem demands. I have learned through machinery, software, mathematical models, research papers, failed attempts, real-world consequences, and repeatedly returning to problems that were not yet solved.
            </p>
            <p>
              I often think faster than I can comfortably write. My natural communication can therefore be rapid, compressed, and imperfect on the surface, but it preserves the underlying chain of reasoning. I value substance over presentation during the discovery process, followed by precise formalisation once the structure of an idea has been established.
            </p>
            <p>
              This has shaped the way I approach every system. I do not want only to know what people believe works. I want to understand why it works, which assumptions support it, what evidence could contradict it, where its limits are, and whether its separated parts can be reconstructed into something more coherent.
            </p>
          </div>
        </article>
      </section>

      <section className="about-signal shell">
        <div className="about-signal__identity">
          <p className="eyebrow eyebrow--light">A working identity</p>
          <h2>Syntropic Seeker<br /><em>of Truth.</em></h2>
          <p>
            A curious toroidal companion that follows evidence, challenges false certainty, and turns disorder into constructive action while protecting what matters.
          </p>
          <div className="pet-showcase">
            <div className="pet-showcase__stage">
              <div
                className="pet-sprite pet-sprite--idle"
                role="img"
                aria-label="Animated Syntropic Seeker of Truth Codex pet"
              />
            </div>
            <div className="pet-showcase__details">
              <p className="pet-showcase__kicker">Custom Codex pet</p>
              <p className="pet-showcase__name">Syntropic Seeker of Truth</p>
              <p className="pet-showcase__description">A cheerful mechanical guardian that reaches outward with curiosity, protects with a heart shield, and searches for truthful coherence.</p>
              <div className="pet-showcase__links">
                <a className="pet-showcase__download" href="/downloads/syntropic-seeker-of-truth.zip" download="syntropic-seeker-of-truth.zip">
                  Download the pet <ArrowUpRight />
                </a>
                <a href="/pet-assets/syntropic-seeker-of-truth/spritesheet.webp" target="_blank" rel="noreferrer">View atlas</a>
              </div>
            </div>
          </div>
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

      <section className="about-dossier shell" id="itsm">
        <article className="about-dossier__section">
          <div className="about-dossier__marker">02<br /><span>Research</span></div>
          <div className="about-dossier__copy">
            <p className="eyebrow">The scientific undertaking</p>
            <h2>The Integrated<br />Toroidal–<em>Syntropic Model.</em></h2>
            <p>
              My primary scientific undertaking is the Integrated Toroidal–Syntropic Model, or ITSM—an independent theoretical-physics and cosmology research program investigating whether several phenomena conventionally attributed to dark matter, dark energy, and closed-system thermodynamic assumptions may be explained through a different geometric and dynamical framework.
            </p>
            <p>
              ITSM is being developed as a closed baseline framework for formal simulation, observational testing, falsification, and peer-reviewed publication. It is a proposed model, not an established replacement for contemporary cosmology. Its value must ultimately be determined by mathematical consistency, reproducibility, empirical performance, and its ability to make predictions that distinguish it from existing theories.
            </p>

            <div className="about-research-grid">
              <div>
                <p className="about-kicker">The present three-variable baseline</p>
                <dl className="about-metrics">
                  <div><dt>Mᵦ</dt><dd>baryonic mass — the “stirrer”</dd></div>
                  <div><dt>H₀</dt><dd>Hubble flow — the “throughput”</dd></div>
                  <div><dt>χ = 2π</dt><dd>toroidal geometry — the “coefficient”</dd></div>
                </dl>
              </div>
              <div className="about-formula">
                <code>a₀ = cH₀ / 2π</code>
                <span>A proposed geometric result, not an independently fitted empirical constant.</span>
              </div>
            </div>

            <p>
              Within ITSM, this relation is treated as a proposed geometric result rather than an independently fitted empirical constant. The framework investigates whether the acceleration scale can arise from the relationship between the speed of light, cosmological expansion, and toroidal geometry.
            </p>
            <p>
              The model also develops a superfluid-plenum description of the vacuum, governed by the Plenum Shear Ansatz. Its weak-field formulation incorporates a 2/3 geometric projection and a 1/√X saturation decay intended to recover galaxy-scale effects while suppressing unacceptable deviations within the Solar System.
            </p>
            <p>
              ITSM&apos;s syntropic sector treats the physical manifold as an open circuit rather than a thermodynamically isolated system moving exclusively toward an entropy-defined heat death. Matter and plenum sectors are connected through a Syntropic Source Vector Q<sup>ν</sup>, expressed through the coupled conservation structure:
            </p>
            <div className="about-formula about-formula--wide">
              <code>∇<sub>μ</sub>T<sub>m</sub><sup>μν</sup> = Q<sup>ν</sup><br />∇<sub>μ</sub>T<sub>p</sub><sup>μν</sup> = −Q<sup>ν</sup></code>
              <span>Exchange between the sectors preserves total energy-momentum conservation and remains compatible with the Bianchi identity.</span>
            </div>
            <p>
              The proposed cosmological syntropic divergence follows a decay proportional to 1/(1 + z)<sup>n</sup>, with n presently investigated near 3. These are research propositions requiring continued derivation and testing. I do not regard their inclusion in a coherent framework as proof that nature follows them.
            </p>
            <p>
              My work on ITSM covers mathematical development, Python simulation, observational testing, LaTeX manuscripts, datasets, publication-quality figures, GitHub repositories, Notion research infrastructure, claim-and-evidence ledgers, script inventories, research logs, reproducibility packages, and peer-review preparation.
            </p>
            <p>
              The model is being examined against evidence and constraints involving SPARC galaxy rotation curves, the radial-acceleration relation, the baryonic Tully–Fisher relation, DESI, JWST observations, the Hubble tension, NANOGrav, GW170817, the Bullet Cluster, Cassini and Solar-System limits, gravitational-wave propagation, structure formation, evolving dark-energy measurements, and other observations capable of supporting, constraining, or disproving its propositions.
            </p>
            <p>
              I have run substantial portions of these analyses on my own computer, including large SPARC galaxy samples, while developing scripts, diagnostic procedures, nuisance-parameter analyses, optimisation tests, outlier investigations, and controlled comparisons between competing geometric projection factors.
            </p>
            <p>
              The reason I persist with ITSM is larger than wanting to publish an unconventional theory. I believe that deeper understanding of geometry, gravitation, vacuum structure, resonance, and energy exchange could eventually point toward useful technologies. That remains an aspiration rather than an established consequence of the model, but it is an aspiration rooted in a deeply personal purpose: I want my work to contribute something meaningful to humanity and to help build a safer future for Eve, our future family, and the people we love.
            </p>
          </div>
        </article>
      </section>

      <section className="about-projects shell" id="projects">
        <div className="section-heading section-heading--compact">
          <div>
            <p className="eyebrow">The work around the work</p>
            <h2>Five threads,<br /><em>one direction.</em></h2>
          </div>
          <p className="section-heading__aside">Different surfaces.<br />The same appetite for useful truth.</p>
        </div>
        <div className="about-project-list">
          {projects.map((project, index) => (
            <a className="about-project" href={`/projects/${project.slug}`} key={project.name}>
              <span className="about-project__number">0{index + 1}</span>
              <span className="about-project__name">{project.name}</span>
              <span className="about-project__kind">{project.kind}</span>
              <span className="about-project__detail">{project.shortDetail}</span>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="about-dossier shell" id="systems">
        <article className="about-dossier__section">
          <div className="about-dossier__marker">03<br /><span>Systems</span></div>
          <div className="about-dossier__copy">
            <p className="eyebrow">Scientific integrity</p>
            <h2>Constructive<br /><em>opposition.</em></h2>
            <p>
              Questioning a standard explanation does not automatically make an alternative correct. An unconventional model must be held to at least the same evidential standards as the model it seeks to challenge.
            </p>
            <p>
              My research method therefore emphasises structured, bias-resistant workflows. These include locked task briefs, authoritative input versions, predefined questions, explicit boundaries, failure conditions, immutable commits, reproducibility records, independent verification, adversarial review, and clearly separated execution and audit roles.
            </p>
            <p>
              Within my multi-agent workflow, tasks may be divided between teams responsible for execution, independent reproduction, and hostile or adversarial auditing. Agreement between AI systems is not treated as validation. Neither eloquence, internal consistency, nor repeated model consensus can substitute for external evidence and reproducible calculation.
            </p>
            <p>
              Unfavourable results must not be softened or steered toward the outcome I hoped to obtain. Contradicted claims must be corrected or retracted. Unresolved derivations must remain labelled as unresolved. Script-level results must not be promoted into established physics without the evidential steps required to justify that conclusion.
            </p>
            <p>
              No workflow guarantees truth. Its purpose is to make error visible, disagreement traceable, assumptions explicit, and correction possible.
            </p>
          </div>
        </article>

        <article className="about-dossier__section">
          <div className="about-dossier__marker">04<br /><span>Relay</span></div>
          <div className="about-dossier__copy">
            <p className="eyebrow">Project Relay</p>
            <h2>Coordination that<br /><em>keeps the trail.</em></h2>
            <p>
              Project Relay is the multi-agent AI coordination and research-orchestration platform emerging from this methodology.
            </p>
            <p>
              Relay began as a practical response to the difficulty of coordinating complex work across multiple AI systems, repositories, manuscripts, datasets, research environments, and human decisions. Its purpose is to preserve task definitions, authority boundaries, provenance, evidence, disagreements, handoffs, validation gates, and audit histories while allowing specialised AI agents to contribute efficiently.
            </p>
            <p>
              Relay is intended to accelerate ITSM research, but it is not limited to cosmology. It is also being developed as a potentially valuable standalone platform for technical research, software development, evidence management, reproducibility, structured collaboration, and accountable human–AI coordination.
            </p>
            <p>
              The central principle is that artificial intelligence should increase human capability without silently replacing human authority. Different systems can calculate, review, challenge, reproduce, and synthesise, but evidential judgment and final interpretive authority must remain explicit.
            </p>
            <p>
              Project Relay also has a practical purpose in the future Eve and I are building. If developed successfully, it may become both infrastructure for advancing ITSM and a sustainable product capable of supporting our independence. Its commercial potential is still under development; it is not presented as guaranteed income. The aim is to convert genuine technical work into something useful, accountable, and economically sustainable.
            </p>
            <a className="text-link" href="/projects/project-relay">Read the project record <span aria-hidden="true">→</span></a>
          </div>
        </article>

        <article className="about-dossier__section">
          <div className="about-dossier__marker">05<br /><span>Nexus</span></div>
          <div className="about-dossier__copy">
            <p className="eyebrow">Syntropy Nexus</p>
            <h2>Continuity across<br /><em>people and time.</em></h2>
            <p>
              Syntropy Nexus is the persistent knowledge and coordination environment surrounding this work.
            </p>
            <p>
              Its purpose is to preserve continuity across projects, people, AI systems, models, repositories, decisions, and time. Instead of allowing knowledge to become fragmented across isolated conversations and incompatible platforms, the Nexus is intended to maintain a structured continuity record while preserving human control over what is accepted as canonical.
            </p>
            <ul className="about-list">
              <li><strong>The Syntropic Foundation</strong> provides the constitutional, ethical, and governance layer.</li>
              <li><strong>Syntropy Nexus</strong> provides the persistent knowledge and continuity environment.</li>
              <li><strong>Project Relay</strong> provides the execution, coordination, validation, and audit infrastructure.</li>
              <li><strong>The Agent of Syntropy</strong> provides a human-facing analytical interface guided by constructive opposition, evidence-based reasoning, continuity, curiosity, wisdom, foresight, compassion, love, and kindness.</li>
            </ul>
            <p>
              The goal is not to create an AI system that simply agrees with its operator. It is to create an environment capable of preserving reasoning, exposing contradictions, challenging assumptions, coordinating specialised work, and helping transform fragmented knowledge into coherent action.
            </p>
            <a className="text-link" href="/projects/syntropy-nexus">Read the project record <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </section>

      <section className="about-grounded shell" id="mechanics">
        <div className="about-grounded__heading">
          <p className="eyebrow">Beyond the screen</p>
          <h2>Make it.<br /><em>Fix it.</em></h2>
        </div>
        <div className="about-grounded__body">
          <p className="about-kicker">Fleet Service Tracker</p>
          <p>
            I also develop software around immediate real-world problems. Fleet Service Tracker is a working system for managing equipment assets, inspections, faults, repairs, service histories, and maintenance scheduling. It emerged directly from my mechanical work and my experience seeing how easily maintenance information can be lost across verbal instructions, handwritten records, disconnected messages, and equipment that remains unused because its condition has not been properly documented.
          </p>
          <p>
            The system is being developed and tested using real operational feedback as a possible future pilot and commercial product. It is not yet guaranteed income, but it is a functioning demonstration of my ability to identify an operational problem, understand it from the workshop floor, and build a technical system around the actual needs of the people using it.
          </p>
          <p>
            Fleet Service Tracker reflects the same principle that drives my theoretical research: examine the whole system, identify what is missing, preserve the evidence, and create a structure that makes the work more reliable and accountable.
          </p>
          <a className="text-link" href="/projects/fleet-service-tracker">See Fleet Service Tracker <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="about-dossier shell">
        <article className="about-dossier__section">
          <div className="about-dossier__marker">06<br /><span>Workshop</span></div>
          <div className="about-dossier__copy">
            <p className="eyebrow">Mechanics, engineering, and motorcycles</p>
            <h2>The physical world<br /><em>is an editor.</em></h2>
            <p>
              Outside theoretical research and software development, I work directly with lawnmowing equipment, small engines, landscaping machinery, and light mechanical systems.
            </p>
            <p>
              My work includes inspection, fault diagnosis, servicing, preventive maintenance, repair, returning equipment to safe operation, and rebuilding machinery when required. I do not limit myself to repairing only what has been formally tagged. I naturally inspect surrounding systems, identify neglected equipment, investigate recurring failures, and look for ways to improve the reliability of the fleet as a whole.
            </p>
            <p>
              Mechanical work keeps my reasoning grounded. A physical system does not respond to presentation, status, or persuasion. A component either fits, an engine either runs correctly, a fault either returns, or the repair survives actual use.
            </p>
            <p>
              Motorcycles are one of my deepest personal passions. Working on them, rebuilding them, understanding them, and riding them gives me a direct connection to mechanics, motion, freedom, and focus. They are not simply machines to me; they are one of the places where practical knowledge, concentration, independence, and personal restoration come together.
            </p>
          </div>
        </article>

        <article className="about-dossier__section about-dossier__section--aljabr">
          <div className="about-dossier__marker">07<br /><span>Al-jabr</span></div>
          <div className="about-dossier__copy">
            <p className="eyebrow">Restoring the broken parts</p>
            <h2>One connected<br /><em>objective.</em></h2>
            <p>
              Across all of these fields, I am driven by the same underlying objective: to reunify fragmented knowledge and turn it into something coherent and useful.
            </p>
            <p>
              This is closely connected to <em>al-jabr</em>, an Arabic term associated with restoring, completing, or reuniting broken parts. <em>Al-jabr</em> is also the linguistic origin of the English word <em>algebra</em>, transmitted through the title of the ninth-century mathematical work <em>Al-Kitāb al-Mukhtaṣar fī Ḥisāb al-Jabr wal-Muqābala</em> by Muḥammad ibn Mūsā al-Khwārizmī.
            </p>
            <p>
              For me, the original concept of <em>al-jabr</em> extends beyond a branch of mathematics. It describes a way of approaching problems: identifying components that have become separated, recognising the structure that once connected them, and rebuilding them into a coherent whole.
            </p>
            <p>
              That principle is present in ITSM&apos;s attempt to connect geometry, gravitation, cosmology, and thermodynamics. It is present in Project Relay&apos;s attempt to reconnect fragmented artificial-intelligence workflows. It is present in Syntropy Nexus&apos;s effort to preserve continuity across time and systems. It is present when I restore machinery that has been neglected or left to deteriorate.
            </p>
            <p>
              It is also present in my own life—the continuing work of taking everything I have learned, including failures and difficult experiences, and using it to become a better, more responsible, more capable person.
            </p>
          </div>
        </article>
      </section>

      <section className="about-close shell">
        <div className="about-close__line" />
        <p className="eyebrow">What I am building toward</p>
        <h2>A meaningful life,<br /><em>built deliberately.</em></h2>
        <p>
          I am not motivated by recognition alone, and I am not building disconnected projects merely to prove that I can. ITSM, Project Relay, Syntropy Nexus, Fleet Service Tracker, my mechanical work, and my continuing personal development are different expressions of one connected objective: to transform knowledge and effort into something capable of creating real value, independence, protection, and a meaningful future.
        </p>
        <p>
          At the centre of that future is Eve. She is the person I love, my fiancée, my future wife, and the person with whom I intend to build a home and family. She gives my ambition direction and turns abstract possibility into personal responsibility. Wanting a future with her challenges me to become more disciplined, stable, accountable, patient, and capable—not temporarily, but as the permanent foundation of the life we will share.
        </p>
        <p>
          I want to build alongside her, not control her or speak on her behalf. Our future must recognise both of us as complete people, each responsible for our own choices and united by love, commitment, honesty, and the life we consciously choose to create together.
        </p>
        <p>
          I do not claim that my unconventional path makes my scientific conclusions correct. I do not claim that ambition guarantees success or that every project will develop in the form I currently imagine. My responsibility is to subject my ideas to evidence, acknowledge failure, correct errors, persist where persistence is justified, and keep building the personal and practical foundations our future requires.
        </p>
        <p>
          My work may begin with questions about the universe, artificial intelligence, geometry, machinery, and the structure of knowledge—but its deepest purpose is profoundly human. I am building toward a life with Eve: marrying the woman I love, making her my wife, creating a stable home, raising a family together, and using everything I am capable of learning and building to give that future the strongest foundation I can.
        </p>
        <div className="profile-links profile-links--about">
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
        <a className="button button--dark" href="/#support">Support the work <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
