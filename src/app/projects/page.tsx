import type { Metadata } from 'next';

import ProjectsBrowse from '@/components/projects/ProjectsBrowse';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import ProjectsHero from '@/components/projects/ProjectsHero';

export const metadata: Metadata = {
  title: 'Our Projects — Version X',
  description:
    'Explore Version X portfolio — websites, mobile apps, e-commerce platforms, and corporate systems built for ambitious brands.',
  openGraph: {
    title: 'Our Projects — Version X',
    description:
      'Browse our portfolio of high-performance digital products engineered with modern technology.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsBrowse />
      <ProjectsCTA />
    </>
  );
}
