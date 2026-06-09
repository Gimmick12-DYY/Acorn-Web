import React from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components';
import { broaderImpacts, outreachPrograms } from '../../content/site';

export const metadata = {
  title: 'Outreach | Acorn',
  description:
    'Outreach, education, and broader impacts of the Acorn VLBI expedition.',
};

export default function OutreachPage() {
  return (
    <div>
      <PageHeader
        label="Broader Impacts"
        title="Outreach"
        description="Education, workforce development, and societal engagement around VLBI and brain-computer interfacing."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="accent-rule" />
          <p className="section-label mb-2">Broader Impacts</p>
          <h2 className="font-serif text-2xl text-gray-900">Impact beyond the lab</h2>
        </div>
        <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl mb-12">
          {broaderImpacts.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outreachPrograms.map((program) => (
            <div key={program.title} className="card p-6">
              <h3 className="font-serif text-lg text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F0EA] border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-acorn mb-1">120M+</p>
              <p className="text-sm text-gray-600">People who could benefit from BCIs globally</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-acorn mb-1">200K+</p>
              <p className="text-sm text-gray-600">Annual museum visitors reached through exhibits</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-acorn mb-1">5</p>
              <p className="text-sm text-gray-600">Institutions nucleating a neurotechnology workforce</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Get in touch</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Questions about outreach or collaboration? Contact the team.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/people" className="btn-primary">
            Meet the Team
          </Link>
          <a href="mailto:contact@acorn-expedition.org?subject=Acorn%20Outreach" className="btn-outline">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
