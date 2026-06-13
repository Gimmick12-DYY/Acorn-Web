import React from 'react';

export type PeopleListEntry = {
  name: string;
  department?: string;
  affiliation?: string;
};

function formatEntry({ name, department, affiliation }: PeopleListEntry): string {
  return [name, department, affiliation].filter(Boolean).join(', ');
}

type PeopleListSectionProps = {
  title: string;
  entries: PeopleListEntry[];
};

export function PeopleListSection({ title, entries }: PeopleListSectionProps) {
  return (
    <section className="py-8 border-b border-gray-100 last:border-0">
      <h2 className="font-serif text-2xl text-gray-900 mb-5">{title}</h2>
      {entries.length > 0 ? (
        <div className="text-gray-700 text-[15px] leading-relaxed">
          {entries.map((entry, index) => (
            <React.Fragment key={`${entry.name}-${index}`}>
              {index > 0 && <br />}
              {formatEntry(entry)}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic">To be announced.</p>
      )}
    </section>
  );
}
