export type Note = {
  slug: string;
  number: string;
  label: string;
  title: string;
  description: string;
  paragraphs: string[];
};

export type BlogIdea = {
  label: string;
  title: string;
  description: string;
  stage: string;
};

export const notes: Note[] = [
  {
    slug: 'build-the-trail',
    number: '01',
    label: 'Field note · 06 min',
    title: 'Build the trail, not just the result',
    description:
      'Why the most useful tools leave a legible path from question to evidence to decision.',
    paragraphs: [
      'The result is the part people notice first. A chart, a working interface, a repaired machine, a sentence that finally lands. But the result is rarely the whole thing that makes a piece of work useful.',
      'The trail matters too: what question started the work, which assumptions shaped it, what evidence changed the direction, and where uncertainty is still present. A tool with a visible trail can be checked, repaired, and carried forward by someone who was not in the room when it was made.',
      'That is the standard I keep reaching for across research, software, and practical work. Make the useful thing, then leave enough of a path that another person can understand why it is there and what to do with it next.',
    ],
  },
  {
    slug: 'a-personal-internet',
    number: '02',
    label: 'In progress · 04 min',
    title: 'A personal internet that still feels human',
    description:
      'A few principles for building online spaces with more texture, context, and care.',
    paragraphs: [
      'A personal website does not need to behave like a polished brochure. It can be a small, calm place where projects have context, unfinished ideas are allowed to breathe, and a visitor can understand the person behind the output.',
      'That means leaving room for texture: a note about what changed, a link to the source, a clear distinction between a draft and a finished piece. It also means treating attention as something to respect. The site should help someone find their way rather than asking them to decode a performance.',
      'I want brendoh.com to feel like a living index rather than a final statement — useful when someone arrives for a project, but open enough that the next question has somewhere to go.',
    ],
  },
  {
    slug: 'small-systems-serious-edges',
    number: '03',
    label: 'Working note · 08 min',
    title: 'Small systems, serious edges',
    description:
      'What breaks when a prototype meets weather, memory, changing data, and actual people.',
    paragraphs: [
      'A prototype can look complete in a clean room. The harder test arrives when the data changes, the device is used in bad weather, the person operating it is busy, or yesterday’s assumption no longer holds.',
      'Those edges are not annoying exceptions to the work. They are where the work explains itself. A maintenance tool has to respect the depot. A research system has to distinguish a derived result from a hopeful interpretation. A memory tool has to make its boundaries visible to the person who owns the context.',
      'I like small systems because they make those questions difficult to ignore. They turn abstract principles into choices: what gets recorded, who can change it, what happens when the evidence is incomplete, and how the next person can recover the thread.',
    ],
  },
];

export const blogIdeas: BlogIdea[] = [
  {
    label: 'Essay in progress',
    title: 'The shape of a useful question',
    description:
      'On turning curiosity into a question that can survive contact with evidence, constraints, and the next practical step.',
    stage: 'Developing',
  },
  {
    label: 'Research essay',
    title: 'What it means to keep a theory honest',
    description:
      'A working account of gates, negative results, conditional claims, and why a research record is part of the research.',
    stage: 'Developing',
  },
  {
    label: 'Field essay',
    title: 'The workbench is an editor',
    description:
      'Thoughts on machinery, repair, and the useful friction between an idea and the physical world.',
    stage: 'Coming next',
  },
];

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
