import React from 'react';
import publications from '../../data/publications.json';
import { PageHeader } from '../../components';

type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  url?: string;
};

export const metadata = {
  title: 'Resources | Acorn',
  description:
    'Publications, papers, and research resources from the Acorn expedition.',
};

export default function ResourcesPage() {
  const pubs = (publications as Publication[]).sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <div>
      <PageHeader
        label="Resources"
        title="Publications & Materials"
        description="Peer-reviewed papers, technical reports, and other research outputs from the Acorn expedition."
      />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="accent-rule" />
          <p className="section-label mb-2">Publications</p>
          <h2 className="font-serif text-2xl text-gray-900">Research output</h2>
        </div>

        <div className="space-y-4">
          {pubs.map((p) => (
            <article key={p.id} className="card p-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {p.url ? (
                    <a href={p.url} className="hover:text-acorn transition-colors">
                      {p.title}
                    </a>
                  ) : (
                    <span>{p.title}</span>
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{p.authors.join(', ')}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {p.venue && <span className="font-semibold text-acorn">{p.venue}</span>}
                  {p.venue && p.year && <span>&middot;</span>}
                  {p.year && <span>{p.year}</span>}
                </div>
              </div>
              {p.url && (
                <div className="flex-shrink-0 self-start md:self-center">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:border-acorn hover:text-acorn transition-all text-sm font-medium"
                  >
                    View Paper
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 italic mt-8">
          Publications shown are placeholders — replace with the project&rsquo;s actual papers.
        </p>
      </section>
    </div>
  );
}
