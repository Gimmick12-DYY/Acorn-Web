import React from 'react';
import peopleData from '../../data/people.json';
import peopleLists from '../../data/people-lists.json';
import { PersonCard, PageHeader, PeopleListSection } from '../../components';
import type { PeopleListEntry } from '../../components/PeopleListSection';
import { disciplines } from '../../content/site';

type Person = {
  id: string;
  name: string;
  preferredName?: string;
  role: string;
  projectRole?: string;
  major?: string;
  bio: string;
  photoUrl?: string;
  affiliation?: string;
};

type PeopleLists = {
  affiliateFaculty: PeopleListEntry[];
  executiveAdvisoryBoard: PeopleListEntry[];
  postdocResearchers: PeopleListEntry[];
  graduateResearchAssistants: PeopleListEntry[];
  undergraduateResearchers: PeopleListEntry[];
  programManager: PeopleListEntry[];
};

const ADMIN_ORG_IDS = ['bhattacharjee', 'pothukuchi', 'buschman', 'khandelwal', 'zhong'] as const;

const ADMIN_ROLES: Partial<Record<(typeof ADMIN_ORG_IDS)[number], string>> = {
  bhattacharjee: 'Director',
  pothukuchi: 'Co-director',
};

function lastName(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] || name;
}

function sortByLastName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) =>
    lastName(a.name).localeCompare(lastName(b.name), undefined, { sensitivity: 'base' }),
  );
}

function CardSection({ title, children }: { title: string; children: React.ReactNode }) {
  if (React.Children.count(children) === 0) return null;

  return (
    <section className="py-8 border-b border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-1 h-6 bg-acorn rounded-full" />
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </section>
  );
}

export default function PeoplePage() {
  const people = peopleData as Person[];
  const lists = peopleLists as PeopleLists;

  const pi = sortByLastName(people.filter((p) => p.role === 'PI'));
  const adminOrg = ADMIN_ORG_IDS.map((id) => people.find((p) => p.id === id)).filter(
    (p): p is Person => p !== undefined,
  );

  return (
    <div>
      <PageHeader
        label="Team"
        title="People"
        description="Expedition leadership and investigators. Hover a card above to read each person’s bio."
      />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <CardSection title="Administrative Organization">
          {adminOrg.map((p) => (
            <PersonCard
              key={`admin-${p.id}`}
              {...p}
              projectRole={ADMIN_ROLES[p.id as (typeof ADMIN_ORG_IDS)[number]]}
            />
          ))}
        </CardSection>

        <CardSection title="Scientific Organization">
          {pi.map((p) => (
            <PersonCard key={p.id} {...p} projectRole={undefined} />
          ))}
        </CardSection>

        <PeopleListSection title="Acorn Affiliate Faculty" entries={lists.affiliateFaculty} />
        <PeopleListSection title="Executive Advisory Board" entries={lists.executiveAdvisoryBoard} />
        <PeopleListSection title="Post-doc Researchers" entries={lists.postdocResearchers} />
        <PeopleListSection
          title="Graduate Research Assistants"
          entries={lists.graduateResearchAssistants}
        />
        <PeopleListSection
          title="Undergraduate Researchers"
          entries={lists.undergraduateResearchers}
        />
        <PeopleListSection title="Program Manager" entries={lists.programManager} />
      </div>

      <section className="border-t border-gray-200/80 bg-acorn-light/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="accent-rule" />
            <p className="section-label mb-2">Disciplines</p>
            <h2 className="font-serif text-2xl text-gray-900">Cross-disciplinary expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {disciplines.map((d) => (
              <div key={d} className="card px-5 py-4 text-sm font-medium text-gray-700">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
