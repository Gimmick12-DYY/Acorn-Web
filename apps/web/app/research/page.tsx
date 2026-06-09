import React from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components';
import { disciplines, intellectualMerit } from '../../content/site';

export const metadata = {
  title: 'Research | Acorn',
  description:
    'Research and intellectual merit of the Acorn VLBI expedition — power-efficient brain-computer interfacing via motif-driven accelerator orchestration.',
};

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        label="Intellectual Merit"
        title="Research"
        description="Acorn advances Very Large-scale Brain Interfacing (VLBI) through power-efficient, motif-driven orchestration of accelerator-rich BCI systems."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="accent-rule" />
          <p className="section-label mb-2">Intellectual Merit</p>
          <h2 className="font-serif text-2xl text-gray-900">Scientific and technical foundations</h2>
        </div>
        <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl">
          {intellectualMerit.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F0EA] border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="accent-rule" />
            <p className="section-label mb-2">Disciplines</p>
            <h2 className="font-serif text-2xl text-gray-900">Cross-disciplinary expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {disciplines.map((d) => (
              <div key={d} className="card px-5 py-4 text-sm font-medium text-gray-700">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/about" className="btn-primary">
            About Acorn
          </Link>
          <Link href="/publications" className="btn-outline">
            Publications
          </Link>
        </div>
      </section>
    </div>
  );
}
