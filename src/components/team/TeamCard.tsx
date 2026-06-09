'use client';

import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

import { devSocialIconMap, type DevSocialKey } from '@/components/icons/dev-social-icons';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';
import type { TeamMember } from '@/types/team';

interface TeamCardProps {
  member: TeamMember;
}

const socialLabels: Record<DevSocialKey, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  x: 'X (Twitter)',
  dribbble: 'Dribbble',
  behance: 'Behance',
};

export default function TeamCard({ member }: TeamCardProps) {
  const { t } = useTranslation();
  const baseKey = `team.members.${member.memberKey}` as TranslationKey;
  const name = t(`${baseKey}.name` as TranslationKey);
  const socialEntries = (
    Object.entries(member.socialLinks) as [DevSocialKey, string][]
  ).filter(([, href]) => Boolean(href));

  return (
    <article className="glass card-glow hover-lift group overflow-hidden rounded-3xl border border-border">
      <div className="relative aspect-square overflow-hidden">
        <Image src={member.image} alt={name} fill unoptimized sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            <p className="mt-1 text-sm font-medium text-primary-500">{t(`${baseKey}.role` as TranslationKey)}</p>
          </div>
          <BadgeCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">{t(`${baseKey}.bio` as TranslationKey)}</p>
        {member.joinedAt && (
          <p className="mt-3 text-xs text-muted">
            {t('team.grid.joined')} <span className="font-medium text-foreground">{member.joinedAt}</span>
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground">
              {skill}
            </span>
          ))}
        </div>
        {socialEntries.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
            {socialEntries.map(([key, href]) => {
              const Icon = devSocialIconMap[key];
              return (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} on ${socialLabels[key]}`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary-400 hover:text-primary-500">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
