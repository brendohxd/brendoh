import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'brendoh — making room for better questions',
  description:
    'The personal site of Brendon: projects, research, notes, and experiments taking shape in public.',
  metadataBase: new URL('https://brendoh.com'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Brendon James Boyd', url: 'https://brendoh.com/about' }],
  icons: {
    icon: [{ url: '/brendoh-icon.svg', type: 'image/svg+xml' }],
    shortcut: ['/brendoh-icon.svg'],
    apple: [{ url: '/brendoh-icon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'brendoh — making room for better questions',
    description:
      'Projects, research, notes, and experiments taking shape in public.',
    url: 'https://brendoh.com',
    siteName: 'brendoh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'brendoh — making room for better questions',
    description:
      'Projects, research, notes, and experiments taking shape in public.',
  },
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://brendoh.com/#website',
  name: 'brendoh',
  url: 'https://brendoh.com/',
  description:
    'The personal site of Brendon: projects, research, notes, and experiments taking shape in public.',
  publisher: {
    '@type': 'Person',
    '@id': 'https://brendoh.com/about#person',
    name: 'Brendon James Boyd',
    url: 'https://brendoh.com/about',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
