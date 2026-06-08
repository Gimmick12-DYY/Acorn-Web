import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Research | Acorn',
  description:
    'Research thrusts of the Acorn expedition: neuromorphic and brain-integrated hardware, systems and architecture, and algorithms and theory for very large scale brain integrated computer systems.',
};

const thrusts = [
  {
    title: 'Neuromorphic & Brain-Integrated Hardware',
    description:
      'Designing devices, circuits, and chips that interface with biological neural systems at scale—exploring energy-efficient, bio-compatible, and high-bandwidth substrates for integration.',
  },
  {
    title: 'Systems & Architecture',
    description:
      'Building the architectures and systems software that integrate heterogeneous components into a coherent, very large scale platform—addressing communication, scheduling, reliability, and scaling.',
  },
  {
    title: 'Algorithms & Theory',
    description:
      'Developing the algorithmic foundations and theoretical models that make brain-scale computation tractable, efficient, and analyzable—from learning algorithms to formal guarantees.',
  },
  {
    title: 'Neuroscience Foundations',
    description:
      'Grounding the system in the principles of biological neural computation, informing design choices and validating integration against real neural dynamics.',
  },
  {
    title: 'Tools & Open Infrastructure',
    description:
      'Creating shared simulators, frameworks, and design files so the broader community can reproduce, extend, and build upon Acorn results.',
  },
  {
    title: 'Trustworthiness & Responsible Design',
    description:
      'Studying the safety, security, privacy, and ethical considerations that brain-integrated computing demands as the technology matures.',
  },
];

const enables = [
  {
    audience: 'Neuroscience Research',
    detail: 'A programmable, high-bandwidth platform for studying neural systems at new scales and resolutions.',
  },
  {
    audience: 'Computing Systems Research',
    detail: 'A testbed for cross-layer co-design, from custom hardware to systems software and algorithms.',
  },
  {
    audience: 'The Broader Community',
    detail: 'Open tools, datasets, and educational materials that lower the barrier to brain-integrated computing.',
  },
];

export default function ResearchPage() {
  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="section-label mb-3">Research Thrusts</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Research
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Acorn&rsquo;s research is organized into interlocking thrusts that span the full computing
            stack&mdash;from devices and circuits to systems, algorithms, and the neuroscience that
            grounds it all.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-4">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Overview</p>
            <h2 className="font-serif text-2xl text-gray-900">A cross-layer effort</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Realizing very large scale brain integrated computer systems requires concurrent advances
              across many fields. Acorn coordinates these advances through tightly coupled research
              thrusts, with shared milestones and artifacts that connect hardware, systems, and theory.
            </p>
            <p className="text-sm text-gray-400 italic">
              The thrusts below are illustrative placeholders. Replace them with the project&rsquo;s
              official research areas and descriptions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Thrusts</p>
            <h2 className="font-serif text-3xl text-gray-900">Areas of investigation</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {thrusts.map((t) => (
              <div key={t.title} className="card p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="section-label mb-2">Impact</p>
          <h2 className="font-serif text-3xl text-gray-900">What Acorn enables</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {enables.map((item) => (
            <div key={item.audience} className="card p-6 text-center">
              <h3 className="text-base font-bold text-acorn mb-3">{item.audience}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Dig deeper</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore the vision behind Acorn, browse our publications, and see the institutions
          collaborating on the expedition.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/about" className="btn-primary">
            About Acorn
          </Link>
          <Link href="/publications" className="btn-outline">
            Publications
          </Link>
          <Link href="/partners" className="btn-outline">
            Institutions
          </Link>
        </div>
      </section>
    </div>
  );
}
