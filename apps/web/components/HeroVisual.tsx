'use client';

import React, { useState } from 'react';

/** Set when a system photo is available, e.g. '/images/acorn-system.jpg' */
const SYSTEM_IMAGE_URL: string | undefined = undefined;

type AspectPanel = {
  label: string;
  gradient: string;
  footerRight?: React.ReactNode;
  gridClass: string;
  collapseTransform: string;
  delay: string;
  hintPosition: string;
};

const aspects: AspectPanel[] = [
  {
    label: 'Neuromorphic Hardware',
    gradient: 'bg-gradient-to-br from-amber-700 to-orange-900',
    gridClass: 'col-start-1 row-start-1',
    collapseTransform: 'translate-x-[55%] translate-y-[45%] scale-[0.35]',
    delay: '0ms',
    hintPosition: 'top-[22%] left-[25%]',
  },
  {
    label: 'Brain Integration',
    gradient: 'bg-gradient-to-br from-stone-600 to-stone-800',
    gridClass: 'col-start-2 row-start-1',
    collapseTransform: 'translate-x-[-55%] translate-y-[45%] scale-[0.35]',
    delay: '90ms',
    hintPosition: 'top-[22%] left-[75%]',
  },
  {
    label: 'Systems, Algorithms & Theory',
    gradient: 'bg-gradient-to-br from-amber-900 to-stone-900',
    gridClass: 'col-span-2 row-start-2',
    collapseTransform: 'translate-y-[-40%] scale-[0.35]',
    delay: '180ms',
    hintPosition: 'top-[72%] left-1/2 -translate-x-1/2',
    footerRight: (
      <div className="flex items-center gap-2 shrink-0">
        <span className="flex items-center gap-1 text-white/70 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
          Cross-layer
        </span>
        <span className="flex items-center gap-1 text-white/70 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
          Brain-scale
        </span>
      </div>
    ),
  },
];

function PanelCard({
  label,
  gradient,
  footerRight,
}: {
  label: string;
  gradient: string;
  footerRight?: React.ReactNode;
}) {
  return (
    <div className={`relative h-full w-full rounded-2xl overflow-hidden shadow-lg ${gradient}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-sm shadow-amber-300/50" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
        <span className="text-white text-sm font-medium">{label}</span>
        {footerRight}
      </div>
    </div>
  );
}

export function HeroVisual() {
  const [hovered, setHovered] = useState(false);
  const hasSystemImage = Boolean(SYSTEM_IMAGE_URL);
  const showSchematic = !hasSystemImage && !hovered;

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200/80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Unified system view */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${
          hasSystemImage ? 'bg-gray-900' : 'bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100'
        } ${hovered ? 'scale-105 blur-[2px]' : 'scale-100 blur-0'}`}
      >
        {hasSystemImage ? (
          <img
            src={SYSTEM_IMAGE_URL}
            alt="Acorn System"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
            <div
              className={`relative transition-all duration-500 ${hovered ? 'opacity-20 scale-90' : 'opacity-100 scale-100'}`}
            >
              <svg className="w-14 h-14 mb-2 opacity-60 text-acorn" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.5M8 7.5h8a1 1 0 011 1V10a5 5 0 01-5 5h0a5 5 0 01-5-5V8.5a1 1 0 011-1zM12 15v6m-2-2h4" />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-stone-500">Acorn System</span>
            </div>
          </div>
        )}

        {/* Schematic lines & nodes — placeholder only */}
        {showSchematic && (
          <>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
            >
              <line x1="200" y1="150" x2="100" y2="65" stroke="rgb(180 95 43 / 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="150" x2="300" y2="65" stroke="rgb(180 95 43 / 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="200" y1="150" x2="200" y2="215" stroke="rgb(180 95 43 / 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="200" cy="150" r="6" fill="rgb(180 95 43 / 0.15)" stroke="rgb(180 95 43 / 0.4)" strokeWidth="1.5" />
            </svg>
            {aspects.map((aspect) => (
              <div
                key={aspect.label}
                className={`absolute ${aspect.hintPosition} -translate-x-1/2 -translate-y-1/2`}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acorn/40 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-acorn/60 ring-2 ring-white/80" />
                </span>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Frosted overlay on deconstruct */}
      <div
        className={`absolute inset-0 bg-acorn-dark/0 backdrop-blur-0 transition-all duration-500 pointer-events-none ${
          hovered ? 'bg-acorn-dark/25 backdrop-blur-sm' : ''
        }`}
      />

      {/* Aspect panels — expand from system core */}
      <div className="absolute inset-0 p-4 grid grid-cols-2 grid-rows-2 gap-4">
        {aspects.map((aspect) => (
          <div
            key={aspect.label}
            className={`${aspect.gridClass} min-h-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              hovered
                ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                : `opacity-0 pointer-events-none ${aspect.collapseTransform}`
            }`}
            style={{ transitionDelay: hovered ? aspect.delay : '0ms' }}
          >
            <PanelCard
              label={aspect.label}
              gradient={aspect.gradient}
              footerRight={aspect.footerRight}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
