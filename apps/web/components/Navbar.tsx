'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/education', label: 'Education' },
  { href: '/publications', label: 'Publications' },
  { href: '/people', label: 'People' },
  { href: '/partners', label: 'Institutions' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-acorn-dark flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" aria-hidden>
                <circle cx="20" cy="20" r="20" fill="#2B2018" />
                {/* Stylized acorn mark */}
                <path d="M13 17h14a0 0 0 0 1 0 0 7 7 0 0 1-7 7h0a7 7 0 0 1-7-7 0 0 0 0 1 0 0z" fill="#B45F2B" />
                <rect x="12" y="13" width="16" height="5" rx="2.5" fill="#E8A06A" />
                <rect x="19" y="9" width="2" height="4" rx="1" fill="#E8A06A" />
              </svg>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <span className="font-bold text-xl leading-none text-gray-900 tracking-tight group-hover:text-acorn-dark transition-colors">
              Acorn
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          <Link
            href="mailto:contact@acorn-expedition.org?subject=Acorn%20Inquiry"
            className="text-sm font-semibold text-white bg-acorn hover:bg-acorn-dark px-4 py-2 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/admin"
            className="text-sm text-gray-400 italic hover:text-acorn transition-colors"
          >
            /Admin
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-gray-900 py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:contact@acorn-expedition.org?subject=Acorn%20Inquiry"
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-white bg-acorn hover:bg-acorn-dark px-4 py-2.5 rounded-lg transition-colors text-center mt-1"
            >
              Contact Us
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-400 italic hover:text-acorn transition-colors py-2"
            >
              /Admin
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-acorn transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
