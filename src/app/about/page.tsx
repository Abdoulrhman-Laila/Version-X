import type { Metadata } from 'next';

import AboutCTA from '@/components/about/AboutCTA';
import AboutHero from '@/components/about/AboutHero';
import CompanyStats from '@/components/about/CompanyStats';
import StorySection from '@/components/about/StorySection';
import TeamPreview from '@/components/about/TeamPreview';
import ValuesSection from '@/components/about/ValuesSection';
import VisionMission from '@/components/about/VisionMission';
import WhyChooseUs from '@/components/about/WhyChooseUs';

export const metadata: Metadata = {
  title: 'About Us — Version X',
  description:
    'Learn about Version X — a digital innovation studio building websites, mobile apps, software systems, and AI solutions for ambitious teams.',
  openGraph: {
    title: 'About Version X',
    description:
      'Discover our story, vision, mission, and the values that drive our digital innovation studio.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <VisionMission />
      <ValuesSection />
      <CompanyStats />
      <WhyChooseUs />
      <TeamPreview />
      <AboutCTA />
    </>
  );
}
