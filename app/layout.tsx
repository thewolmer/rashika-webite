import { Footer, Header } from '@/components/Layout';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { siteConfig } from '@/config/site';

import { gerbil, goudy, inconsolata } from './fonts';
import Providers from './providers';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `Tagline | ${siteConfig.name}`,
    // TODO: "Add a tagline here",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    siteName: siteConfig.name,
    url: '/',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitterHandle,
    title: `Tagline | ${siteConfig.name}`,
    // TODO: Add a tagline
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gerbil.variable} ${goudy.variable} ${inconsolata.className} relative`}>
        <Header />
        <FloatingNav />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
