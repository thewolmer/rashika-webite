import { Inconsolata } from 'next/font/google';
import localFont from 'next/font/local';

export const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

export const gerbil = localFont({
  src: './Gerbil/gerbil.otf',
  variable: '--font-gerbil',
  display: 'swap',
});

export const goudy = localFont({
  src: [
    {
      path: './Goudy/OFLgoudy.otf',
      style: 'normal',
    },
    {
      path: './Goudy/OFLgoudyItalic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-goudy',
  display: 'swap',
});
