import React from 'react';
import { PageHeader } from '../../components';
import { getEvents } from '../../lib/events';

export const metadata = {
  title: 'Events | Acorn',
  description:
    'Seminars, workshops, and other events from the Acorn expedition.',
};

export default function EventsPage() {
  const items = getEvents();

  return (
    <div>
      <PageHeader
        label="Events"
        title="Project Events"
        description="Seminars, workshops, and gatherings hosted by or featuring the Acorn expedition."
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) => (
              <article key={item.id} className="card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <div className="shrink-0 sm:w-36">
                    <time className="text-xs font-mono text-acorn block">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-acorn bg-acorn/10 px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-serif text-xl text-gray-900 leading-snug mb-2">
                      {item.url ? (
                        <a href={item.url} className="hover:text-acorn transition-colors">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h2>
                    {item.location && (
                      <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                    )}
                    {item.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 px-6 py-12 text-center text-gray-400 text-sm">
            Events will appear here. Add entries in <code className="text-gray-600">data/events.json</code>.
          </div>
        )}
      </div>
    </div>
  );
}
