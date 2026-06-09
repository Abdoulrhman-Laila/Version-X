import type { Metadata } from 'next';

import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';

export const metadata: Metadata = {
  title: 'Version X — Websites, Apps, Software & AI Solutions',
  description:
    'Version X builds high-performance websites, mobile apps, software systems, and AI solutions for ambitious teams worldwide.',
  openGraph: {
    title: 'Version X — Digital Innovation Studio',
    description:
      'We craft websites, mobile apps, software systems, and AI solutions that scale with your ambition.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <CTA />
    </>
  );
}
