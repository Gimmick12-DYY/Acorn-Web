import React from 'react';
import { AcornLogo } from './AcornLogo';

export function Footer() {
  return (
    <footer className="bg-[#1a1410] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 shrink-0">
                <AcornLogo height={28} />
              </div>
              <span className="font-bold text-lg">Acorn</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              The Dawn of Very Large Scale Brain Integrated Computer Systems — a collaborative
              research expedition uniting neuroscience, computer architecture, and AI.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['About', '/about'],
                ['Research', '/research'],
                ['Education', '/education'],
                ['Publications', '/publications'],
                ['People', '/people'],
                ['Institutions', '/partners'],
                ['News', '/news'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/60 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.nsf.gov/funding/opportunities/expeditions-expeditions-computing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  NSF Expeditions in Computing
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@acorn-expedition.org"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  contact@acorn-expedition.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Acorn Project</p>
          <p>Collaborative Research Expedition</p>
        </div>
      </div>
    </footer>
  );
}
