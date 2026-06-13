import type { Metadata } from 'next';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NavigationLoader from '@/components/layout/NavigationLoader';
import { LocaleProvider } from '@/providers/LocaleProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Version X',
  description: 'Version X application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <LocaleProvider>
          <NavigationLoader />
          <Header />
          <main className="flex flex-1 flex-col pt-20">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
