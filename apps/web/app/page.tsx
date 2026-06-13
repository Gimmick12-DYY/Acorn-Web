import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero, NsfAcknowledgment } from '../components';
import { institutions } from '../content/site';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const allNews = await getPublishedNews();
  const items = allNews.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* News — prominent, above the hub grid */}
      <section className="bg-acorn-dark text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-3">
                Expedition Updates
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">Latest News</h2>
              <p className="text-white/60 text-sm mt-3 max-w-xl leading-relaxed">
                Acorn is a multi-year expedition. Follow project milestones, publications,
                and team announcements here.
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white text-acorn-dark font-semibold py-2.5 px-6 text-sm hover:bg-gray-100 transition-colors"
            >
              View all news
            </Link>
          </div>

          {items.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group rounded-xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 hover:border-white/25 transition-colors"
                >
                  <time className="text-xs font-mono text-acorn-light/90 block mb-3">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="font-semibold text-lg leading-snug mb-2 group-hover:text-acorn-light transition-colors">
                    {item.title}
                  </h3>
                  {item.summary && (
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{item.summary}</p>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 mt-4 group-hover:text-white transition-colors">
                    Read more <span aria-hidden>&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-white/20 px-6 py-12 text-center text-white/50 text-sm">
              News posts will appear here. Add entries in <code className="text-white/70">data/news.json</code>.
            </div>
          )}
        </div>
      </section>

      {/* Institutions + NSF */}
      <section className="bg-white border-b border-gray-200/80">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <p className="section-label mb-4">Participating Institutions</p>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            {institutions.join(' · ')}
          </p>
          <NsfAcknowledgment variant="inline" className="max-w-2xl mx-auto" />
        </div>
      </section>
    </div>
  );
}
