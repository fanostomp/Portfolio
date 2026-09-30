import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Theofanis Tompolis — Full-Stack Developer',
  description: 'Portfolio of Theofanis Tompolis, a full-stack developer working with React, TypeScript, .NET and SQL.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
