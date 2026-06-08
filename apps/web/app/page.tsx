import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero } from '../components';
import peopleData from '../data/people.json';

export const dynamic = 'force-dynamic';

type Person = {
  id: string;
  name: string;
  role: string;
  projectRole?: string;
  affiliation?: string;
  photoUrl?: string;
};

export default async function Page() {
  const allNews = await getPublishedNews();
  const items = allNews.slice(0, 3);
  const pis = (peopleData as Person[]).filter((p) => p.role === 'PI');

  return (
    <div>
      <Hero />

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="section-label mb-3">Collaborative Research &middot; Expeditions</p>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
            A new computing era at the boundary of mind and machine
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Acorn brings together researchers across institutions and disciplines to build the
            scientific foundations and engineering practices for very large scale brain integrated
            computer systems&mdash;from neuromorphic hardware to the algorithms and theory that make
            brain-scale integration possible.
          </p>
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <Link href="/about" className="text-acorn font-medium hover:text-acorn-dark transition-colors text-sm inline-flex items-center gap-1 group">
              About the expedition
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link href="/research" className="text-acorn font-medium hover:text-acorn-dark transition-colors text-sm inline-flex items-center gap-1 group">
              Explore research
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Principal Investigators */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Leadership</p>
            <h2 className="font-serif text-3xl text-gray-900">Principal Investigators</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pis.map((p) => (
              <div key={p.id} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-100 mx-auto mb-3 overflow-hidden flex items-center justify-center text-gray-400">
                  {p.photoUrl ? (
                    <img src={p.photoUrl} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                <p className="text-xs text-acorn font-semibold">{p.projectRole || 'PI'}</p>
                {p.affiliation && <p className="text-xs text-gray-400 mt-0.5">{p.affiliation}</p>}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/people" className="text-acorn font-medium hover:text-acorn-dark transition-colors text-sm inline-flex items-center gap-1 group">
              Meet the team
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest updates */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="section-label mb-2">News</p>
            <h2 className="font-serif text-3xl text-gray-900">Latest Updates</h2>
          </div>
          <Link href="/news" className="text-acorn font-medium hover:text-acorn-dark transition-colors text-sm inline-flex items-center gap-1 group">
            View all
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="block group">
              <div className="card p-6 h-full flex flex-col">
                <div className="text-xs font-semibold text-acorn uppercase tracking-wide mb-3">
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-acorn-dark transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {item.summary}
                  </p>
                )}
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-acorn transition-colors flex items-center gap-1">
                    Read more &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-acorn-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Interested in our work?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Acorn is an open, collaborative expedition. Explore our research thrusts, browse
            publications, or get in touch to partner with us.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/research" className="inline-block bg-white text-acorn-dark font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all shadow-sm">
              Explore Research
            </Link>
            <Link href="/partners" className="inline-block border border-white/30 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/10 transition-all">
              View Institutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
