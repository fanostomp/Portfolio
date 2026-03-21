import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Theofanis Tompolis | Software Portfolio',
  description: 'Professional portfolio of Theofanis Tompolis, featuring software engineering projects, technical skills, and an interactive terminal showcase.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
