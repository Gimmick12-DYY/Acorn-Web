import React from 'react';
import type { OverviewPanel } from '../content/images';

function PanelCard({ panel, index }: { panel: OverviewPanel; index: number }) {
  return (
    <figure className="flex h-full min-w-0 flex-col">
      <div className="mb-3 flex items-start gap-3">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-acorn text-xs font-bold text-white"
          aria-hidden
        >
          {index + 1}
        </span>
        <div className="min-w-0 pt-0.5">
          <h3 className="font-serif text-lg leading-snug text-gray-900">{panel.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col rounded-xl border border-gray-200/80 bg-white shadow-sm">
        <div className="overflow-x-auto overscroll-x-contain rounded-t-xl bg-white p-3 sm:p-4">
          <img
            src={panel.src}
            alt={panel.alt}
            className="mx-auto block h-auto w-full min-w-[520px] max-w-3xl sm:min-w-[600px] md:min-w-0 md:max-w-full"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className="border-t border-gray-100 px-4 py-3 text-sm leading-relaxed text-gray-500 sm:px-5 sm:py-4">
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
      {/* Mobile & tablet: swipeable carousel */}
      <div className="lg:hidden">
        <p className="mb-3 text-xs text-gray-400 sm:hidden">
          Swipe to view each diagram · scroll sideways on wide figures
        </p>
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-6 pb-2 [scrollbar-width:thin]">
          {panels.map((panel, index) => (
            <div
              key={panel.src}
              className="w-[calc(100vw-3rem)] max-w-md shrink-0 snap-center sm:w-[min(85vw,28rem)]"
            >
              <PanelCard panel={panel} index={index} />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">
          {panels.length} diagrams · {panels.map((_, i) => i + 1).join(' · ')}
        </p>
      </div>

      {/* Desktop: vertical stack, centered readable width */}
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-10">
        {panels.map((panel, index) => (
          <PanelCard key={panel.src} panel={panel} index={index} />
        ))}
      </div>
    </div>
  );
}
