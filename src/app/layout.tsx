import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maestro Copy',
  description: 'Jasa percetakan di Kabupaten Sleman',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
      <body className={`${inter.className} bg-main grid grid-cols-[1fr,4fr] min-h-[100vh]`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
