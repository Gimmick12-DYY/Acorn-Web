import React from 'react';
import type { OverviewPanel } from '../content/images';

function StageArrow() {
  return (
    <div
      className="hidden shrink-0 items-center justify-center self-center px-1 text-acorn/35 md:flex lg:px-2"
      aria-hidden
    >
      <svg className="h-5 w-5 lg:h-6 lg:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PanelCard({ panel, index }: { panel: OverviewPanel; index: number }) {
  return (
    <figure className="flex h-full min-w-0 flex-col">
      <div className="mb-2 flex items-start gap-2.5">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-acorn text-[10px] font-bold text-white"
          aria-hidden
        >
          {index + 1}
        </span>
        <div className="min-w-0 pt-0.5">
          <h3 className="font-serif text-base leading-snug text-gray-900 lg:text-[1.05rem]">
            {panel.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col rounded-xl border border-gray-200/80 bg-white shadow-sm">
        <div className="flex items-center justify-center overflow-hidden rounded-t-xl bg-white p-2 sm:p-3">
          <img
            src={panel.src}
            alt={panel.alt}
            className="block h-auto max-h-36 w-full object-contain sm:max-h-40 md:max-h-44 lg:max-h-48"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="border-t border-gray-100 px-3 py-2.5 text-xs leading-relaxed text-gray-500 sm:px-4 sm:py-3">
          {panel.caption}
        </figcaption>
      </div>
    </figure>
  );
}

type OverviewPanelsProps = {
  panels: readonly OverviewPanel[];
};

export function OverviewPanels({ panels }: OverviewPanelsProps) {
  return (
    <div className="min-w-0">
      {/* Mobile: swipe through stages */}
      <div className="md:hidden">
        <p className="mb-3 text-xs text-gray-400">
          Swipe to follow each stage · {panels.length} steps
        </p>
        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-4 pb-2 [scrollbar-width:thin] sm:-mx-6 sm:px-6">
          {panels.map((panel, index) => (
            <div
              key={panel.src}
              className="w-[min(78vw,17rem)] shrink-0 snap-center sm:w-72"
            >
              <PanelCard panel={panel} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & desktop: horizontal sequence */}
      <div className="hidden md:flex md:items-stretch">
        {panels.map((panel, index) => (
          <React.Fragment key={panel.src}>
            <div className="min-w-0 flex-1">
              <PanelCard panel={panel} index={index} />
            </div>
            {index < panels.length - 1 && <StageArrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
