import React from 'react';
import Link from 'next/link';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="section-label">
            Collaborative Research &middot; Expeditions
          </div>

          <h1 className="font-serif text-5xl md:text-6xl leading-[1.1] tracking-tight">
            The Dawn of{' '}
            <span className="text-acorn">Very Large Scale Brain Integrated Computer Systems</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            Acorn is a multi-institution research expedition laying the scientific and engineering
            foundations for computer systems that integrate with the brain at unprecedented scale —
            bringing together neuroscience, computer architecture, and artificial intelligence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="btn-primary">
              Explore the Vision
            </Link>
            <Link href="/people" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
