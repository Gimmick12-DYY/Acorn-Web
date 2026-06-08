import React from 'react';
import Link from 'next/link';
import { CapabilityGrid } from '../../components/CapabilityGrid';

export const metadata = {
  title: 'About | Acorn',
  description:
    'About Acorn: The Dawn of Very Large Scale Brain Integrated Computer Systems — a collaborative research expedition spanning neuroscience, computer architecture, and AI.',
};

const timeline = [
  { year: 'Y1', label: 'Foundations: research thrusts launched & cross-team alignment', active: true },
  { year: 'Y2', label: 'Hardware/software co-design & early prototypes' },
  { year: 'Y3', label: 'Brain-integrated system integration & validation' },
  { year: 'Y4+', label: 'Scaling, open release, and broad community adoption' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-acorn/10 text-acorn text-sm font-semibold mb-6">
            Collaborative Research &middot; Expeditions
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            The Dawn of Very Large Scale Brain Integrated Computer Systems
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Acorn is a multi-institution research expedition that aims to define a new field at the
            intersection of neuroscience, computer architecture, and artificial intelligence&mdash;
            building the foundations for computer systems that integrate with the brain at
            unprecedented scale.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Why Acorn</p>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              A grand challenge for the next decade
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Just as an acorn holds the blueprint for a towering oak, Acorn plants the seed for a
              future generation of brain-integrated computing&mdash;tackled across the full stack,
              from devices and circuits to systems, algorithms, and theory.
            </p>
          </div>
          <CapabilityGrid />
          <div className="text-center mt-10 space-y-4">
            <p className="text-sm font-medium text-gray-700">Learn more</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <Link href="/research" className="text-acorn font-medium hover:text-acorn-dark transition-colors text-sm inline-flex items-center gap-1 group">
                Research thrusts
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              <Link href="/education" className="text-acorn font-medium hover:text-acorn-dark transition-colors text-sm inline-flex items-center gap-1 group">
                Education &amp; outreach
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Vision</p>
            <h2 className="font-serif text-2xl text-gray-900">What we are building</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Acorn envisions very large scale brain integrated computer systems&mdash;computing
              platforms that interface with biological neural systems at a scale and fidelity well
              beyond what is possible today. Realizing this vision requires concurrent advances across
              many fields, which is precisely why Acorn is organized as a collaborative expedition.
            </p>
            <p>
              The project unites expertise in neuroscience, computer architecture, hardware design,
              systems software, and machine learning. By co-designing across these layers, Acorn aims
              to deliver shared instruments, open tools, and reusable knowledge that the broader
              research community can build on.
            </p>
            <p className="text-sm text-gray-400 italic">
              This page contains placeholder narrative text. Replace it with the official Acorn
              project abstract and overview.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Approach</p>
            <h2 className="font-serif text-2xl text-gray-900">Cross-layer co-design</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-[15px]">
            <p>
              Acorn&rsquo;s research spans the full computing stack. Neuromorphic and brain-integrated
              hardware provides the substrate; systems and architecture provide the scaffolding to
              integrate components at scale; and algorithms and theory provide the principles that make
              brain-scale computation tractable, efficient, and trustworthy.
            </p>
            <p>
              The expedition emphasizes the translation of research outcomes into practical artifacts:
              open hardware, software frameworks, datasets, and educational materials that lower the
              barrier to entry for the entire community.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Roadmap</p>
            <h2 className="font-serif text-3xl text-gray-900">Project Timeline</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex-1 relative">
                <div className="flex items-center md:flex-col md:items-center gap-4 md:gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                    t.active
                      ? 'bg-acorn text-white shadow-md shadow-acorn/30'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-0 h-px bg-gray-200 z-0"></div>
                  )}
                  <p className="text-sm text-gray-600 md:text-center max-w-[200px]">{t.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 italic mt-10">
            Placeholder timeline — update with the project&rsquo;s actual milestones and dates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-3xl text-gray-900 mb-4">Open to the community</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Acorn is committed to open science. Tools, designs, datasets, and educational resources will
          be shared with the community as they mature.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/partners" className="btn-primary">
            View Institutions
          </Link>
          <Link href="/publications" className="btn-outline">
            Publications &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
