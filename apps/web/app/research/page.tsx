import React from 'react';
import Link from 'next/link';
import { PageHeader } from '../../components';
import { designGoals, disciplines, intellectualMerit, researchThrusts } from '../../content/site';

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
          <div className="accent-rule" />
          <p className="section-label mb-2">Research Map</p>
          <h2 className="font-serif text-2xl text-gray-900 mb-4">Five integrated thrusts</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Acorn organizes computing research across four technical thrusts—MoMA, hardware,
            systems software, and wireless integration—validated through rodent brain interfacing
            and integrated with dedicated ethics and education efforts.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="accent-rule" />
          <p className="section-label mb-2">Research Thrusts</p>
          <h2 className="font-serif text-2xl text-gray-900">Technical research areas</h2>
        </div>
        <div className="space-y-6">
          {researchThrusts.map((thrust) => (
            <div key={thrust.id} className="card p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-acorn/10 text-acorn font-bold flex items-center justify-center text-sm">
                  T{thrust.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-gray-900 mb-1">{thrust.title}</h3>
                  <p className="text-xs text-acorn font-medium mb-3">{thrust.leaders}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{thrust.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-acorn-light/30 border-y border-acorn/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="accent-rule" />
            <p className="section-label mb-2">Design Goals</p>
            <h2 className="font-serif text-2xl text-gray-900">Acorn system requirements</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {designGoals.map((goal) => (
              <div key={goal} className="card px-5 py-4 text-sm text-gray-700 leading-relaxed flex gap-3">
                <span className="text-acorn shrink-0 mt-0.5">&#9679;</span>
                {goal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
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
