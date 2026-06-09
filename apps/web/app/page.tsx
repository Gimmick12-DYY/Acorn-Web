import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../lib/news';
import { Hero, NsfAcknowledgment } from '../components';
import { institutions } from '../content/site';

export const dynamic = 'force-dynamic';

const hubLinks = [
  {
    title: 'About',
    description: 'Expedition overview, participating institutions, and broader impacts.',
    href: '/about',
  },
  {
    title: 'Research',
    description: 'Intellectual merit, five research thrusts, and design goals for Acorn.',
    href: '/research',
  },
  {
    title: 'People',
    description: 'Principal investigators and collaborators across five institutions.',
    href: '/people',
  },
  {
    title: 'Publications',
    description: 'Peer-reviewed papers and technical outputs from the expedition.',
    href: '/publications',
  },
  {
    title: 'Outreach',
    description: 'Education, workforce development, and community engagement.',
    href: '/outreach',
  },
  {
    title: 'News',
    description: 'Project announcements, milestones, and expedition updates.',
    href: '/news',
    highlight: true,
  },
];

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

      {/* Hub — links to every section */}
      <section className="bg-acorn-light/40 border-b border-acorn/10">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="mb-10">
            <div className="accent-rule" />
            <p className="section-label mb-2">Explore</p>
            <h2 className="section-title">Navigate the expedition</h2>
            <p className="text-gray-500 mt-3 max-w-2xl leading-relaxed">
              Jump to any area of the Acorn project&mdash;from research thrusts and team
              members to publications and outreach programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hubLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`card p-6 group block h-full ${
                  link.highlight ? 'ring-2 ring-acorn/20 border-acorn/30' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="accent-rule group-hover:w-16 transition-all mb-0" />
                  {link.highlight && (
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-acorn bg-acorn/10 px-2 py-1 rounded">
                      Updates
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-acorn transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{link.description}</p>
                <span className="link-arrow">
                  Go to {link.title.toLowerCase()}
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
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
