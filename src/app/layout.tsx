import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import QueryProvider from './providers/QueryProvider';
import { ReactParent } from '@/shared/model/util';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: ReactParent) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
