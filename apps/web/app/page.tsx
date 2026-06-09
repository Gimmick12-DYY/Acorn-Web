import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero, HomeOverviewImage, HomeCtaImage } from '../components';
import peopleData from '../data/people.json';
import { institutions, overview } from '../content/site';

export const dynamic = 'force-dynamic';

type Person = {
  id: string;
  name: string;
  role: string;
  projectRole?: string;
  affiliation?: string;
  photoUrl?: string;
};

const pillars = [
  {
    title: 'About',
    description: 'Overview of VLBI and the Acorn chip and software stack.',
    href: '/about',
  },
  {
    title: 'Research',
    description: 'Intellectual merit — motif-driven, power-efficient BCI systems.',
    href: '/research',
  },
  {
    title: 'Outreach',
    description: 'Broader impacts — education, workforce, and technology transfer.',
    href: '/outreach',
  },
];

export default async function Page() {
  const allNews = await getPublishedNews();
  const items = allNews.slice(0, 4);
  const pis = (peopleData as Person[]).filter((p) => p.role === 'PI');

  return (
    <div>
      <Hero />

      {/* Three pillars */}
      <section className="bg-acorn-light/40 border-b border-acorn/10">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="card p-7 group block h-full"
            >
              <div className="accent-rule group-hover:w-16 transition-all" />
              <h2 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-acorn transition-colors">
                {pillar.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{pillar.description}</p>
              <span className="link-arrow">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Overview — image left, text right */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <HomeOverviewImage />
            <div>
              <div className="accent-rule" />
              <p className="section-label mb-3">The Expedition</p>
              <h2 className="section-title mb-5">
                Very Large-scale Brain Interfacing (VLBI)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {overview.paragraphs[3]}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm mb-4">
                {overview.paragraphs[4]}
              </p>
              <p className="text-xs text-gray-400 mb-6">
                {institutions.join(' · ')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/people" className="link-arrow">
                  Meet the team <span>&rarr;</span>
                </Link>
                <Link href="/publications" className="link-arrow">
                  Publications <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — compact list, not avatar grid */}
      <section className="border-y border-gray-200/80 bg-[#F5F0EA]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="accent-rule" />
            <p className="section-label mb-2">Leadership</p>
            <h2 className="section-title">Principal Investigators</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {pis.map((p) => (
              <div key={p.id} className="card flex items-center gap-4 p-4">
                <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0 overflow-hidden flex items-center justify-center text-gray-300">
                  {p.photoUrl ? (
                    <img src={p.photoUrl} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{p.name}</h3>
                  <p className="text-xs text-acorn font-medium mt-0.5">{p.projectRole || 'PI'}</p>
                  {p.affiliation && (
                    <p className="text-xs text-gray-400 mt-0.5 truncate">{p.affiliation}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News — vertical list */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <div className="accent-rule" />
            <p className="section-label mb-2">News</p>
            <h2 className="section-title">Latest Updates</h2>
          </div>
          <Link href="/news" className="link-arrow shrink-0">
            All updates <span>&rarr;</span>
          </Link>
        </div>
        <div className="card divide-y divide-gray-100 overflow-hidden">
          {items.map((item) => (
            <Link
              href={`/news/${item.id}`}
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 p-6 hover:bg-acorn-light/20 transition-colors group"
            >
              <time className="text-xs font-mono text-acorn shrink-0 sm:w-28 pt-0.5">
                {new Date(item.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-acorn transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                {item.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.summary}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA — split layout with image slot */}
      <section className="bg-acorn-dark text-white border-t border-acorn-dark">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
              Get Involved
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
              Join the expedition
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-sm">
              Acorn is an open, collaborative research effort. Explore our thrusts, browse
              publications, or reach out to partner with us.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/research" className="inline-block bg-white text-acorn-dark font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Explore Research
              </Link>
              <Link href="/outreach" className="btn-outline-light text-sm">
                Outreach
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
            <HomeCtaImage />
          </div>
        </div>
      </section>
    </div>
  );
}
