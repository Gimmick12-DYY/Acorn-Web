import React from 'react';
import { AcornLogo } from './AcornLogo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <AcornLogo height={32} />
              <h3 className="font-bold text-lg text-gray-900">Acorn</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Acorn: The Dawn of Very Large Scale Brain Integrated Computer Systems — a collaborative
              research expedition uniting neuroscience, computer architecture, and AI.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Collaborative Research conducted in the spirit of the{' '}
              <a
                href="https://www.nsf.gov/funding/opportunities/expeditions-expeditions-computing"
                target="_blank"
                rel="noreferrer"
                className="text-acorn hover:text-acorn-dark transition-colors"
              >
                NSF Expeditions in Computing
              </a>{' '}
              program.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Pages</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</a></li>
              <li><a href="/research" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Research</a></li>
              <li><a href="/education" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Education</a></li>
              <li><a href="/publications" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Publications</a></li>
              <li><a href="/people" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">People</a></li>
              <li><a href="/partners" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Institutions</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/news" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Project News
                </a>
              </li>
              <li>
                <a href="https://www.nsf.gov/cise/ccf/expeditions-awards" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Expeditions Awards
                </a>
              </li>
              <li>
                <a href="mailto:contact@acorn-expedition.org" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Acorn Project. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Collaborative Research &middot; Very Large Scale Brain Integrated Computer Systems</p>
        </div>
      </div>
    </footer>
  );
}
