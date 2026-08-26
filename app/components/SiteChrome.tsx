import Link from 'next/link';

export type SitePage = 'work' | 'notes' | 'blog' | 'about';

export function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export function SiteHeader({ currentPage }: { currentPage?: SitePage }) {
  const navigation: Array<{ href: string; label: string; page: SitePage }> = [
    { href: '/work', label: 'Work', page: 'work' },
    { href: '/notes', label: 'Notes', page: 'notes' },
    { href: '/blog', label: 'Blog', page: 'blog' },
    { href: '/about', label: 'About', page: 'about' },
  ];

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="brendoh home">
        <span className="wordmark__mark">b</span>
        <span>brendoh</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={currentPage === item.page ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/#support">
        Say hello <ArrowUpRight />
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Link className="wordmark wordmark--footer" href="/"><span className="wordmark__mark">b</span><span>brendoh</span></Link>
        <p>Built slowly. Shared honestly.</p>
        <a className="footer-back" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 brendoh</span>
        <span>Work · notes · essays</span>
        <span>Made for the curious</span>
      </div>
    </footer>
  );
}
