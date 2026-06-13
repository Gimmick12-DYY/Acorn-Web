import React from 'react';
import publications from '../../data/publications.json';
import resources from '../../data/resources.json';
import { PageHeader } from '../../components';

type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year?: number;
  url?: string;
};

type ResourceItem = {
  id: string;
  title: string;
  description?: string;
  url?: string;
  year?: number;
};

type ResourcesData = {
  hardware: ResourceItem[];
  software: ResourceItem[];
};

function ResourceList({
  label,
  title,
  items,
  emptyMessage,
}: {
  label: string;
  title: string;
  items: ResourceItem[];
  emptyMessage: string;
}) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      <div className="mb-8">
        <div className="accent-rule" />
        <p className="section-label mb-2">{label}</p>
        <h2 className="font-serif text-2xl text-gray-900">{title}</h2>
      </div>

      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <article key={item.id} className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                {item.url ? (
                  <a href={item.url} className="hover:text-acorn transition-colors">
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.description}</p>
              )}
              {item.year && <p className="text-sm text-gray-400">{item.year}</p>}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-acorn hover:underline"
                >
                  View resource
                  <span aria-hidden>&rarr;</span>
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic">{emptyMessage}</p>
      )}
    </section>
  );
}

function PublicationList({ pubs }: { pubs: Publication[] }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
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
    </section>
  );
}

export const metadata = {
  title: 'Resources | Acorn',
  description:
    'Hardware, software, and publications from the Acorn expedition.',
};

export default function ResourcesPage() {
  const { hardware, software } = resources as ResourcesData;
  const pubs = (publications as Publication[]).sort((a, b) => (b.year || 0) - (a.year || 0));

  return (
    <div>
      <PageHeader
        label="Resources"
        title="Hardware, Software & Publications"
        description="Designs, releases, and peer-reviewed research outputs from the Acorn expedition."
      />

      <ResourceList
        label="Hardware"
        title="Hardware resources"
        items={hardware}
        emptyMessage="Hardware resources will be listed here."
      />

      <div className="border-y border-gray-200/80 bg-[#F5F0EA]">
        <ResourceList
          label="Software"
          title="Software resources"
          items={software}
          emptyMessage="Software resources will be listed here."
        />
      </div>

      <PublicationList pubs={pubs} />
    </div>
  );
}
