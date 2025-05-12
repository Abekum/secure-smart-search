// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Secure & Smart Search',
  description: 'AI-powered open data search portal',
  openGraph: {
    title: 'Secure & Smart Search',
    description: 'AI-powered open data search portal',
    url: 'https://yourdomain.com',
    siteName: 'Secure & Smart Search',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fallback meta tags */}
        <meta name="description" content="AI-powered open data search portal" />
        <meta property="og:title" content="Secure & Smart Search" />
      </head>
      <body>{children}</body>
    </html>
  );
}
