import type { Metadata } from 'next';
import './globals.css';
import './section-overrides.css';
import './application.css';
import { profile } from '@/data/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL('https://fanostomp.com'),
  title: 'Theofanis Tompolis — Full-Stack Developer',
  description: 'Full-stack developer in Nicosia, Cyprus. Explore production experience and projects in React, TypeScript, .NET, Java, Python and SQL. Available full-time.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Theofanis Tompolis — Full-Stack Developer',
    description: 'Production experience, documented projects, and the engineering behind them. Nicosia, Cyprus · Available full-time.',
    url: '/', siteName: 'Theofanis Tompolis', type: 'website', locale: 'en_GB',
    images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'Theofanis Tompolis — Full-stack developer' }],
  },
  twitter: { card: 'summary_large_image', title: 'Theofanis Tompolis — Full-Stack Developer', description: 'React, TypeScript, .NET, Java, Python and SQL. Explore my work.', images: ['/social-preview.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: profile.name, url: 'https://fanostomp.com', jobTitle: 'Full-stack developer', sameAs: [profile.github, profile.linkedin] }) }} />
      </body>
    </html>
  );
}

