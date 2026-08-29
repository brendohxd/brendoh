import type { MetadataRoute } from 'next';
import { notes } from './content/site-content';
import { projects } from './projects/project-data';

const siteUrl = 'https://brendoh.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/work`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/notes`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  return [
    ...pages,
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...notes.map((note) => ({
      url: `${siteUrl}/notes/${note.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  ];
}
