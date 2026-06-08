import React from 'react';
import Link from 'next/link';
import { getPublishedNews } from '../../lib/news';
import { PageHeader } from '../../components';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Updates | Acorn',
  description: 'Latest news, announcements, and progress from the Acorn expedition.',
};

export default async function NewsIndexPage() {
  const items = await getPublishedNews();

  return (
    <div>
      <PageHeader
        label="News"
        title="Project Updates"
        description="Stay informed about the latest research milestones, team announcements, and project news."
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
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
                <h2 className="font-semibold text-gray-900 group-hover:text-acorn transition-colors leading-snug mb-1">
                  {item.title}
                </h2>
                {item.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.summary}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
