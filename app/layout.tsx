import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'brendoh — making room for better questions',
  description:
    'The personal site of Brendon: projects, research, notes, and experiments taking shape in public.',
  metadataBase: new URL('https://brendoh.com'),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
