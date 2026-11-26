import type { ReactNode } from 'react';

import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-editorial-serif',
});

export const metadata: Metadata = {
  title: 'boilerplate-next — Next.js 16 TypeScript Starter',
  description:
    'A production-ready TypeScript starter for Next.js 16 with React 19, Tailwind CSS v4, ESLint 10, Prettier 3, and universal AI agent configuration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
