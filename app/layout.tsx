import localFont from 'next/font/local';

import { Footer, Header } from '@/components/Layout';
import { siteConfig } from '@/config/site';

import type { Metadata } from 'next';

import './globals.css';

const gerbil = localFont({
  src: './fonts/Gerbil/gerbil.otf',
  variable: '--font-gerbil',
  display: 'swap',
});
const goudy = localFont({
  src: [
    {
      path: './fonts/Goudy/OFLgoudy.otf',
      style: 'normal',
    },
    {
      path: './fonts/Goudy/OFLgoudyItalic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-goudy',
  display: 'swap',
});

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
    <html lang="en" className={`${gerbil.variable} ${goudy.variable} relative`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
