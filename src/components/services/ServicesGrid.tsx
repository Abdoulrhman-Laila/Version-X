'use client';

import ServiceCard from '@/components/services/ServiceCard';
import { serviceItems } from '@/data/services';
import { useTranslation } from '@/hooks/useTranslation';

export default function ServicesGrid() {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-primary-500 uppercase">{t('services.grid.sectionLabel')}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('services.grid.sectionTitle')}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
