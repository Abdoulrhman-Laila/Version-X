import type { Metadata } from 'next';

import ProcessSection from '@/components/services/ProcessSection';
import ServicesCTA from '@/components/services/ServicesCTA';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesHero from '@/components/services/ServicesHero';
import TechnologiesSection from '@/components/services/TechnologiesSection';
import WhyChooseSection from '@/components/services/WhyChooseSection';

export const metadata: Metadata = {
  title: 'Our Services — Version X',
  description:
    'Version X offers web development, web design, mobile apps, e-commerce, AI solutions, and maintenance support for ambitious brands.',
  openGraph: {
    title: 'Our Services — Version X',
    description:
      'Modern websites, mobile applications, business systems, and AI solutions built to scale.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TechnologiesSection />
      <WhyChooseSection />
      <ServicesCTA />
    </>
  );
}
