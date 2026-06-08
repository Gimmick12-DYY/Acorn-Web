import React from 'react';
import Link from 'next/link';
import partnersData from '../../data/partners.json';
import { PartnerFlipCard, PageHeader } from '../../components';
import type { PartnerFlipCardProps } from '../../components/PartnerFlipCard';

export const metadata = {
  title: 'Institutions | Acorn',
  description: 'Institutions and partner labs collaborating on the Acorn expedition.',
};

type PartnerEntry = PartnerFlipCardProps & { id: string };

function PartnerSection({
  title,
  description,
  partners,
}: {
  title: string;
  description?: string;
  partners: PartnerEntry[];
}) {
  if (partners.length === 0) return null;

  return (
    <section className="py-8 border-b border-gray-100 last:border-0">
      <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
        <span className="w-1 h-6 bg-acorn rounded-full"></span>
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-sm max-w-2xl mb-6 ml-4">{description}</p>
      )}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <PartnerFlipCard
            key={p.id}
            name={p.name}
            subtitle={p.subtitle}
            institution={p.institution}
            logoUrl={p.logoUrl || undefined}
            logoScale={p.logoScale}
            description={p.description}
            url={p.url || undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default function PartnersPage() {
  const collaborators = partnersData.collaborators as PartnerEntry[];
  const users = partnersData.users as PartnerEntry[];

  return (
    <div>
      <PageHeader
        label="Ecosystem"
        title="Institutions"
        description="Acorn is a collaborative expedition spanning multiple institutions and partner labs working together to advance brain-integrated computing."
      />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <PartnerSection
          title="Collaborating Institutions"
          description="Institutions contributing to the Acorn expedition. Hover a card to view details."
          partners={collaborators}
        />
        <PartnerSection
          title="Affiliates"
          description="Affiliated labs and external collaborators engaging with the Acorn community."
          partners={users}
        />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Want to collaborate?</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Get in touch with our team to discuss research collaborations, partnerships, or other
          opportunities with the Acorn expedition.
        </p>
        <Link href="/people" className="btn-primary">
          Contact the Team
        </Link>
        <p className="text-xs text-gray-400 italic mt-8">
          Institutions shown are placeholders — edit <code>apps/web/data/partners.json</code> with the
          real collaborating institutions and logos (place logos in <code>public/logos/</code>).
        </p>
      </section>
    </div>
  );
}
