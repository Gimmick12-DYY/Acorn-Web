import React from 'react';
import Link from 'next/link';
import { CapabilityGrid, PageHeader } from '../../components';
import { aboutBrainImage, rodentValidationImage } from '../../content/images';
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
        title={
          <>
            The Dawn of Very Large Scale
            <br />
            Brain Integrated Computer Systems
          </>
        }
        description="A collaborative expedition across Yale, Princeton, UNC Chapel Hill, Iowa State, and UC Riverside."
        image={{
          src: aboutBrainImage,
          alt: 'Stylized neural network brain representing Acorn brain integrated computing research',
          width: 800,
          height: 533,
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-8 md:mb-10">
          <div className="accent-rule" />
          <p className="section-label mb-2">Overview</p>
          <h2 className="font-serif text-2xl text-gray-900 md:text-3xl">Project overview</h2>
        </div>
        <div className="max-w-3xl space-y-5 text-gray-600 leading-relaxed sm:space-y-6">
          {overview.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="min-w-0">
              <div className="accent-rule" />
              <p className="section-label mb-2">Overarching Vision</p>
              <h2 className="font-serif text-2xl text-gray-900 md:text-3xl">
                Closing the BCI computing gap
              </h2>
              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed sm:space-y-6">
                {vision.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <img
                src={rodentValidationImage}
                alt="Acorn rodent brain interfacing — wireless power, implantable system and probes, and wearables integration"
                width={739}
                height={324}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-acorn/10 bg-acorn-light/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
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

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
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

      <section className="mx-auto max-w-6xl border-t border-gray-100 px-4 py-12 text-center sm:px-6 md:py-16">
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
