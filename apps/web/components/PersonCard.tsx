'use client';

import React, { useState } from 'react';
import { PersonAvatar } from './PersonAvatar';

function displayName(name: string, preferredName?: string) {
  if (!preferredName) return name;
  const parts = name.trim().split(/\s+/);
  const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
  return lastName ? `${preferredName} ${lastName}` : preferredName;
}

export function PersonCard({ name, preferredName, bio, photoUrl, role, projectRole, major, affiliation }: {
  name: string;
  preferredName?: string;
  bio: string;
  photoUrl?: string;
  role?: string;
  projectRole?: string;
  major?: string;
  affiliation?: string;
}) {
  const [showBio, setShowBio] = useState(false);
  const shownName = displayName(name, preferredName);

  return (
    <div
      className="card overflow-hidden group relative h-96"
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
        <PersonAvatar name={shownName} photoUrl={photoUrl} size="lg" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-acorn-dark transition-colors leading-tight">{shownName}</h3>
        {projectRole && <div className="text-xs font-semibold text-acorn uppercase tracking-wider mt-1">{projectRole}</div>}
        {affiliation && <div className="text-xs text-gray-400 mt-0.5">{affiliation}</div>}
      </div>

      {bio && (
        <div
          className={`absolute inset-0 bg-white/95 backdrop-blur-sm p-5 flex flex-col justify-center transition-opacity duration-200 ${
            showBio ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <h3 className="text-base font-bold text-gray-900 mb-1">{shownName}</h3>
          {major && <div className="text-xs font-semibold text-acorn uppercase tracking-wider mb-3">{major}</div>}
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        </div>
      )}
    </div>
  );
}
