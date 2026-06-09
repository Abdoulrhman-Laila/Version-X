'use client';

import TeamCard from '@/components/team/TeamCard';
import { teamMembers } from '@/data/team';
import { useTranslation } from '@/hooks/useTranslation';

export default function TeamGrid() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-secondary-500 uppercase">{t('team.grid.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('team.grid.sectionTitle')}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
