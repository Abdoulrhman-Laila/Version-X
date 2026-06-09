'use client';

import { Check } from 'lucide-react';

import { useTranslation } from '@/hooks/useTranslation';
import type { ServiceItem } from '@/types/services';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { dictionary } = useTranslation();
  const Icon = service.icon;
  const content = dictionary.services.items[service.id];

  return (
    <article className="glass card-glow hover-lift group relative overflow-hidden rounded-3xl border border-border p-8 transition-transform duration-300 hover:scale-[1.02]">
      <div className="gradient-bg absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="gradient-bg mb-6 inline-flex rounded-2xl p-3.5 text-white shadow-lg shadow-primary-500/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{content.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{content.description}</p>
      <ul className="mt-6 space-y-3 border-t border-border pt-6">
        {content.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
