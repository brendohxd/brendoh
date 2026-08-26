export type ProjectAccent = 'lime' | 'violet' | 'coral' | 'blue';

export type ProjectLink = {
  label: string;
  href: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  shortDetail: string;
  description: string;
  status: string;
  accent: ProjectAccent;
  number: string;
  tags: string[];
  lead: string;
  whatItDoes: string[];
  retrospective: string;
  links: ProjectLink[];
};

export const researchLinks = [
  {
    label: 'Zenodo',
    value: 'ITSM archive',
    href: 'https://doi.org/10.5281/zenodo.20774996',
  },
  {
    label: 'ORCID',
    value: '0009-0007-4177-2612',
    href: 'https://orcid.org/0009-0007-4177-2612',
  },
];

export const projects: Project[] = [
  {
    slug: 'fleet-service-tracker',
    name: 'fleet-service-tracker',
    kind: 'Field software',
    shortDetail: 'Practical tools for records, fitment, and maintenance.',
    description:
      'A practical service workspace for keeping fleet records, fitment checks, and real-world maintenance in sync.',
    status: 'Shipping carefully',
    accent: 'lime',
    number: '01',
    tags: ['software', 'operations'],
    lead:
      'A browser-based maintenance, workshop, asset, and parts-management system for a landscaping and grounds-maintenance fleet.',
    whatItDoes: [
      'Brings assets, inspections, defects, workshop work orders, parts, service schedules, vehicles, and trailers into one workflow.',
      'Turns a failed inspection into a visible defect, then into a repair path with parts, labour, completion, and the next service due.',
      'Keeps fitment research honest by preserving source links and using check or variant states when model, year, serial, or engine evidence is incomplete.',
    ],
    retrospective:
      'The project started as a way to replace scattered spreadsheets with something that could survive actual depot conditions. Its shape is still being refined around the difference between a useful prototype, a public demo, and a production system that can safely hold tenant data.',
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/brendohxd/fleet-service-tracker',
        description: 'Source, implementation notes, and the public project history.',
      },
    ],
  },
  {
    slug: 'itsm-cosmology',
    name: 'ITSM Cosmology',
    kind: 'Research program',
    shortDetail: 'Cosmology, gravitation, and open-system questions.',
    description:
      'A long-running cosmology research program working to make ambitious ideas more explicit, testable, and honest about their limits.',
    status: 'Deep work',
    accent: 'violet',
    number: '02',
    tags: ['research', 'physics'],
    lead:
      'The Integrated Toroidal-Syntropic Model is an evolving research framework exploring finite-density vacuum ideas, compact toroidal topology, open-system thermodynamics, and emergent low-acceleration dynamics.',
    whatItDoes: [
      'Maintains a covariant architecture, claim ledger, and gate-based research workflow so assumptions, derivations, conditional routes, and rejected arguments remain distinct.',
      'Re-tests the model’s proposed mechanisms and numerical predictions in a declared order rather than treating an attractive result as a finished theory.',
      'Publishes the working record alongside code, manuscripts, archival releases, and reproduction material so the trail can be inspected by other people.',
    ],
    retrospective:
      'ITSM is deliberately presented as a recovery program, not as a completed or validated cosmology. The current branch preserves the model’s identity while reopening mechanisms and predictions behind explicit scientific gates. The useful retrospective is therefore also a record of what did not survive scrutiny, what remains conditional, and what still has to be derived.',
    links: [
      {
        label: 'itsm-cosmology.org',
        href: 'https://itsm-cosmology.org',
        description:
          'The project’s research identity and contact domain, used for author and publication metadata around the ITSM work.',
      },
      {
        label: 'itsm-cosmology.com',
        href: 'https://itsm-cosmology.com',
        description:
          'The public recovery-era research site: the entry point for the vision, architecture, gate map, papers, claims, and reproduction guidance.',
      },
      {
        label: 'GitHub repository',
        href: 'https://github.com/brendohxd/ITSM-Integrated-Toroidal-Syntropic-Model',
        description: 'The canonical working repository for code, manuscripts, gates, and research history.',
      },
      {
        label: 'Zenodo archive',
        href: 'https://doi.org/10.5281/zenodo.20774996',
        description: 'The archived ITSM publication record and versioned research deposit.',
      },
      {
        label: 'ORCID profile',
        href: 'https://orcid.org/0009-0007-4177-2612',
        description: 'Persistent researcher identity for Brendon Boyd.',
      },
    ],
  },
  {
    slug: 'project-relay',
    name: 'Project-Relay',
    kind: 'Open tooling',
    shortDetail: 'Coordination and evidence for clearer human decisions.',
    description:
      'A coordination and evidence layer for turning messy multi-agent work into a clearer human decision.',
    status: 'Building in public',
    accent: 'coral',
    number: '03',
    tags: ['product', 'open source'],
    lead:
      'An evidence-governed coordination layer for multiple AI systems and human reviewers, built around an inspectable record rather than a black-box consensus.',
    whatItDoes: [
      'Gives each task an explicit question, named owners and reviewers, decision authority, evidence references, and a visible disagreement path.',
      'Uses a provider-neutral protocol and Git-backed records so work can move across models, vendors, local tools, and human review without losing provenance.',
      'Treats model output as untrusted input: Relay coordinates work, but it does not decide whether a scientific claim is true or replace peer review.',
    ],
    retrospective:
      'Relay grew out of the practical problem of fragmented AI work: too many chats, copied prompts, and decisions that were hard to reconstruct later. The project keeps becoming more useful when it makes authority, evidence, and uncertainty more visible instead of hiding them behind a smoother interface.',
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/brendohxd/Project-Relay',
        description: 'Protocol, applications, documentation, and the public implementation record.',
      },
    ],
  },
  {
    slug: 'syntropy-nexus',
    name: 'Syntropy-Nexus',
    kind: 'Product lab',
    shortDetail: 'Shared memory, collaboration, and companionable tools.',
    description:
      'A cross-device space for exploring how thoughtful tools can feel more companionable and more capable.',
    status: 'In the lab',
    accent: 'blue',
    number: '04',
    tags: ['software', 'experiments'],
    lead:
      'A local-first, operator-owned continuity environment for keeping memory, context, collaboration, and captured work under the user’s control.',
    whatItDoes: [
      'Connects shared contracts for memory, admission review, causal traces, typed graphs, inquiry records, context packets, and provider receipts.',
      'Extends across a preserved web client, an operational Windows client, and a private-first mobile client with consent-bound pairing.',
      'Keeps continuity useful without making privacy and operator custody an afterthought.',
    ],
    retrospective:
      'Syntropy Nexus is the product-lab side of a recurring question: how can software help a person maintain continuity without quietly taking ownership of their context? Its current direction is shaped by preserving the original prototype while making the authority model, storage boundaries, and release gates more explicit.',
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/brendohxd/Syntropy-Nexus',
        description: 'Clients, shared packages, contracts, and release documentation.',
      },
    ],
  },
  {
    slug: 'planetary-live-risk-watch',
    name: 'Planetary Live Risk Watch',
    kind: 'Public dashboard',
    shortDetail: 'Risk signals, historical context, and visible uncertainty.',
    description:
      'An evidence-aware watch desk for tracking planetary risk signals, historical context, and what remains uncertain.',
    status: 'Watching carefully',
    accent: 'coral',
    number: '05',
    tags: ['research', 'dashboard'],
    lead:
      'A public-facing dashboard and historical archive for following planetary risk signals without collapsing contested evidence into false certainty.',
    whatItDoes: [
      'Brings current signals and historical records into a single, readable watch surface.',
      'Labels evidence strength and dispute rather than presenting every source as equally established.',
      'Keeps the boundary between a live observation, a historical record, an interpretation, and an unresolved question visible to the reader.',
    ],
    retrospective:
      'This project is an exercise in public context: the interface matters, but the deeper work is deciding what a visitor should be able to distinguish at a glance. The archive is designed to make uncertainty legible rather than using urgency as a substitute for evidence.',
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/brendohxd/Planetary-Live-Risk-Watch',
        description: 'Dashboard source, evidence archive, and the public methodology record.',
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
