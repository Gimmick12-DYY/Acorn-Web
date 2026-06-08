import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Education | Acorn',
  description:
    'Education, outreach, and broadening-participation activities of the Acorn expedition: curricula, training, and community programs at the intersection of computing and neuroscience.',
};

const programs = [
  {
    title: 'Curriculum Development',
    description:
      'New courses and modules at the intersection of computer systems and neuroscience, from the undergraduate level through a research-driven graduate curriculum.',
  },
  {
    title: 'Research Training',
    description:
      'Mentored research experiences that train the next generation of investigators in cross-disciplinary, full-stack brain-integrated computing.',
  },
  {
    title: 'Broadening Participation',
    description:
      'Programs and partnerships designed to broaden participation in computing and neuroscience across institutions and communities.',
  },
  {
    title: 'Outreach & Public Engagement',
    description:
      'Workshops, seminars, and public-facing materials that share Acorn research with students, educators, and the wider public.',
  },
];

export default function EducationPage() {
  return (
    <div>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="section-label mb-3">Education &amp; Outreach</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Education</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Acorn is committed to training the next generation of researchers and practitioners at the
            intersection of computing and neuroscience&mdash;and to broadening participation in the field.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <p className="section-label mb-2">Mission</p>
            <h2 className="font-serif text-2xl text-gray-900">Building the field</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <p>
              A new computing field needs a new generation of people to advance it. Acorn develops
              educational programs and research training that prepare students to work fluently across
              hardware, systems, algorithms, and neuroscience.
            </p>
            <p className="text-sm text-gray-400 italic">
              Placeholder content — replace with the project&rsquo;s actual education and outreach plans.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="card p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <h2 className="font-serif text-2xl text-gray-900 mb-4">Get involved</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Interested in Acorn&rsquo;s educational programs or in joining the team? Reach out or meet
          the people behind the expedition.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/people" className="btn-primary">
            Meet the Team
          </Link>
          <a href="mailto:contact@acorn-expedition.org?subject=Acorn%20Education" className="btn-outline">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
