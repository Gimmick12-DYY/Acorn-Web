import React from 'react';
import { overviewPanels } from '../content/images';

export function OverviewPanels() {
  return (
    <div className="space-y-10">
      {overviewPanels.map((panel) => (
        <figure key={panel.src} className="space-y-3">
          <div className="rounded-xl overflow-hidden border border-gray-200/80 bg-white">
            <img
              src={panel.src}
              alt={panel.alt}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="text-sm text-gray-500 leading-relaxed max-w-3xl">
            {panel.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
