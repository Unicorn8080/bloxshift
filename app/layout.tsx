import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='bg-primary flex-col flex-wrap flex content-center w-full max-w-[100vw] overflow-hidden'>
          <div className='bg-primary 2xl:max-w-[1440px] xl: max-w-[1180px] lg:max-w-[960px] md:max-w-[700px] sm:max-w-[600px] xs:max-w-[370px]'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
