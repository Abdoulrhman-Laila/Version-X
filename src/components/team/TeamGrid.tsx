'use client';

import { useCallback, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

import TeamCard from '@/components/team/TeamCard';
import ApiErrorState from '@/components/ui/ApiErrorState';
import { useTranslation } from '@/hooks/useTranslation';
import { fetchTeamMembers, getErrorMessage } from '@/lib/api';
import type { TeamMember } from '@/types/team';

export default function TeamGrid() {
  const { t } = useTranslation();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTeam = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchTeamMembers({ page: 1, limit: 50 });
      setMembers(data);
    } catch (err) {
      setMembers([]);
      setError(getErrorMessage(err, t('team.loadError')));
    } finally {
      setLoading(false);
    }
  }, [t]);

  useEffect(() => {
    loadTeam();
  }, [loadTeam]);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-secondary-500 uppercase">
            {t('team.grid.sectionLabel')}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('team.grid.sectionTitle')}
          </h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center gap-2 py-16 text-muted">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span>{t('common.loading')}</span>
          </div>
        ) : error ? (
          <ApiErrorState message={error} onRetry={loadTeam} retryLabel={t('common.retry')} />
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member, index) => (
              <TeamCard key={member.apiId ?? index} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
