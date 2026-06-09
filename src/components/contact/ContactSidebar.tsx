'use client';

import { GithubIcon, LinkedinIcon } from '@/components/icons/dev-social-icons';
import { FacebookIcon, InstagramIcon } from '@/components/icons/social-icons';
import { socialLinks } from '@/data/contact';
import { servicesWhyChooseItems } from '@/data/services';
import { useTranslation } from '@/hooks/useTranslation';

const socialIconMap = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const;

export default function ContactSidebar() {
  const { dictionary, t } = useTranslation();

  return (
    <aside className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-foreground">{t('contact.sidebar.whyChooseTitle')}</h2>
        <div className="mt-5 space-y-3">
          {servicesWhyChooseItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const content = dictionary.services.whyChoose[item.id];
            return (
              <div key={item.id} className="glass hover-lift rounded-2xl border border-border p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary-500/10 p-2 text-primary-500">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{content.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{content.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="glass rounded-3xl border border-border p-6">
        <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">{t('contact.sidebar.followUs')}</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIconMap[social.id];
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted shadow-sm transition-all hover:scale-110 hover:text-primary-500 hover:shadow-md"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
