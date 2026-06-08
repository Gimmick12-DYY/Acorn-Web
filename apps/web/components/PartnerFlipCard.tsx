'use client';

import React, { useState } from 'react';

export type PartnerFlipCardProps = {
  name: string;
  subtitle?: string;
  institution?: string;
  logoUrl?: string;
  logoScale?: number;
  description: string;
  url?: string;
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

export function PartnerFlipCard({
  name,
  subtitle,
  institution,
  logoUrl,
  logoScale,
  description,
  url,
}: PartnerFlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="card overflow-hidden group relative h-96"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="relative h-64 bg-gradient-to-br from-acorn-dark to-acorn flex items-end p-5">
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">{name}</h3>
          {subtitle && (
            <p className="text-sm font-semibold text-white/80 mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="p-4">
        {institution && (
          <p className="text-xs font-semibold text-acorn uppercase tracking-wider">{institution}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">Hover for details</p>
      </div>

      <div
        className={`absolute inset-0 bg-white transition-opacity duration-200 flex ${
          flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-[42%] shrink-0 bg-gray-50 border-r border-gray-100 flex items-center justify-center p-5">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${institution || name} logo`}
              className="max-h-24 max-w-full object-contain"
              style={logoScale ? { transform: `scale(${logoScale})` } : undefined}
            />
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-acorn/10 text-acorn flex items-center justify-center text-2xl font-bold">
              {initials(institution || name)}
            </div>
          )}
        </div>
        <div className="flex-1 p-5 flex flex-col justify-center min-w-0">
          <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">{name}</h3>
          {subtitle && (
            <p className="text-xs font-semibold text-acorn uppercase tracking-wider mb-2">{subtitle}</p>
          )}
          {institution && <p className="text-xs text-gray-400 mb-3">{institution}</p>}
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 text-acorn font-medium text-sm hover:text-acorn-dark inline-flex items-center gap-1"
            >
              Visit site
              <span aria-hidden>&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
