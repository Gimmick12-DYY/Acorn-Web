import React from 'react';
import Link from 'next/link';
import { CapabilityGrid, OverviewPanels, PageHeader } from '../../components';
import { broaderImpacts, institutions, overview, vision } from '../../content/site';

export const metadata = {
  title: 'About | Acorn',
  description:
    'About Acorn — an NSF Expeditions in Computing project on Very Large-scale Brain Interfacing (VLBI).',
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        label="Expeditions in Computing · Acorn"
        title="The Dawn of Very Large Scale Brain Integrated Computer Systems"
        description="A collaborative expedition across Yale, Princeton, UNC Chapel Hill, Iowa State, and UC Riverside."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="accent-rule" />
          <p className="section-label mb-2">Overview</p>
          <h2 className="font-serif text-2xl text-gray-900">Project overview</h2>
        </div>
        <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl">
          {overview.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="accent-rule" />
            <p className="section-label mb-2">System Overview</p>
            <h2 className="font-serif text-2xl text-gray-900">The Acorn stack</h2>
            <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed text-sm">
              From high-level programming and compilation to implantable hardware, wireless
              power, and rodent brain validation.
            </p>
          </div>
          <OverviewPanels />
        </div>
      </section>

      <section className="bg-[#F5F0EA] border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="accent-rule" />
            <p className="section-label mb-2">Overarching Vision</p>
            <h2 className="font-serif text-2xl text-gray-900">Closing the BCI computing gap</h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed max-w-3xl">
            {vision.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-acorn-light/30 border-y border-acorn/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Participating Institutions</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {institutions.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200/80 text-sm font-medium text-gray-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <CapabilityGrid />
          <div className="text-center mt-10">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <Link href="/research" className="link-arrow">
                Intellectual merit <span>&rarr;</span>
              </Link>
              <Link href="/outreach" className="link-arrow">
                Broader impacts <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="accent-rule" />
            <p className="section-label mb-2">Broader Impacts</p>
            <h2 className="font-serif text-2xl text-gray-900">Societal impact</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            {broaderImpacts.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/research" className="btn-primary">
            Research
          </Link>
          <Link href="/people" className="btn-outline">
            People
          </Link>
        </div>
      </section>
    </div>
  );
}
