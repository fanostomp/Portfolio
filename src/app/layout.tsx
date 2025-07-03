// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Theofanis | Portfolio',
  description: 'My interactive terminal portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-terminal-bg text-white font-mono">{children}</body>
    </html>
  );
}