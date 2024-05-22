import { type Metadata } from 'next';

import { Providers } from '@/app/providers';

import './styles/tailwind.css';
import { Layout } from './components/Layout';

import './globals.css';

export const metadata: Metadata = {
  title: 'Hilde Hemelaers',
  description:
    'Ik ben Hilde Hemelaers, student applicatieontwikkeling aan de Thomas More hogeschool in Geel.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body className='flex h-full bg-repeat'>
        <Providers>
          <div className='flex w-full'>
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
