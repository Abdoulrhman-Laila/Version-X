'use client';

import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

import { devSocialIconMap, type DevSocialKey } from '@/components/icons/dev-social-icons';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslationKey } from '@/i18n/translate';
import { resolveLocalized, resolveLocalizedList } from '@/types/api/localized';
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

function formatJoinedDate(isoDate: string, locale: 'ar' | 'en'): string {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(isoDate));
}

export default function TeamCard({ member }: TeamCardProps) {
  const { t, locale } = useTranslation();
  const name = resolveLocalized(member.name, locale);
  const roleKey = `team.roles.${member.roleKey}` as TranslationKey;
  const roleLabel = t(roleKey);
  const role = roleLabel === roleKey ? member.roleKey : roleLabel;
  const bio = resolveLocalized(member.bio, locale);
  const skills = resolveLocalizedList(member.skills, locale);
  const imageSrc = member.image?.trim();
  const joinedLabel = member.joinedAt ? formatJoinedDate(member.joinedAt, locale) : null;
  const socialEntries = Object.entries(member.socialLinks).filter(
    (entry): entry is [DevSocialKey, string] => {
      const [key, href] = entry;
      return Boolean(href) && key in devSocialIconMap;
    },
  );

  return (
    <article className="glass card-glow hover-lift group overflow-hidden rounded-3xl border border-border">
      {imageSrc && (
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-80" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{name}</h3>
            {role && <p className="mt-1 text-sm font-medium text-primary-500">{role}</p>}
          </div>
          <BadgeCheck className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        </div>
        {bio && <p className="mt-4 text-sm leading-relaxed text-muted">{bio}</p>}
        {joinedLabel && (
          <p className="mt-3 text-xs text-muted">
            {t('team.grid.joined')} <span className="font-medium text-foreground">{joinedLabel}</span>
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
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
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on ${socialLabels[key]}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-primary-400 hover:text-primary-500"
                >
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
