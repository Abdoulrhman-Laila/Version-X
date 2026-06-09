import type { Metadata } from 'next';

import JoinTeamCTA from '@/components/team/JoinTeamCTA';
import TeamGrid from '@/components/team/TeamGrid';
import TeamHero from '@/components/team/TeamHero';
import TeamStats from '@/components/team/TeamStats';

export const metadata: Metadata = {
  title: 'Our Team — Version X',
  description:
    'Meet the Version X team — developers, designers, and AI specialists building exceptional digital products.',
  openGraph: {
    title: 'Meet Our Team — Version X',
    description:
      'Talented developers, designers, and AI experts united to deliver world-class digital solutions.',
    type: 'website',
  },
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <TeamStats />
      <JoinTeamCTA />
    </>
  );
}
