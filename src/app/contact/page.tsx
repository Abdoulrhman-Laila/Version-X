import type { Metadata } from 'next';

import ContactCTA from '@/components/contact/ContactCTA';
import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ContactMap from '@/components/contact/ContactMap';
import ContactSidebar from '@/components/contact/ContactSidebar';
import FAQSection from '@/components/contact/FAQSection';

export const metadata: Metadata = {
  title: 'Contact Us — Version X',
  description:
    "Get in touch with Version X. Let's turn your idea into a modern website, app, or AI-powered digital product.",
  openGraph: {
    title: 'Contact Version X',
    description:
      'Reach out to our team in Amsterdam. We build modern digital products for ambitious brands.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <section className="section-padding bg-surface pt-0">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <ContactForm />
            <ContactSidebar />
          </div>
        </div>
      </section>
      <ContactMap />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
