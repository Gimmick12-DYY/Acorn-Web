'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AcornLogo } from './AcornLogo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/people', label: 'People' },
  { href: '/resources', label: 'Resources' },
  { href: '/outreach', label: 'Outreach' },
  { href: '/events', label: 'Events' },
  { href: '/news', label: 'News' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-acorn-dark text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="bg-white rounded-lg p-1.5 shrink-0 group-hover:bg-white/90 transition-colors">
              <AcornLogo height={32} />
            </div>
            <div>
              <span className="font-bold text-lg leading-tight block">Acorn</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 hidden sm:block">
                Brain Integrated Computing
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-white bg-white/15 hover:bg-white/20'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="mailto:contact@acorn-expedition.org?subject=Acorn%20Inquiry"
            className="hidden sm:inline-block text-sm font-semibold btn-outline-light shrink-0"
          >
            Contact
          </Link>

          <button
            className="lg:hidden text-white/80 focus:outline-none p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-acorn-dark">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/80 hover:text-white py-2.5 px-2 rounded-md hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:contact@acorn-expedition.org?subject=Acorn%20Inquiry"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold btn-outline-light text-center mt-2"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
