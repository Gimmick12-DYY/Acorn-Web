import React from 'react';
import Link from 'next/link';
import { ImageSlot } from './ImageSlot';

/*
 * Homepage images — drop files into public/images/ and set paths below.
 *
 *   hero.jpg      → full-width banner
 *   overview.jpg  → overview section (left column)
 *   cta.jpg       → bottom call-to-action (right column)
 */
export const HERO_IMAGE_URL: string | undefined = undefined;
export const OVERVIEW_IMAGE_URL: string | undefined = undefined;
export const CTA_IMAGE_URL: string | undefined = undefined;

export function Hero() {
  return (
    <>
      <ImageSlot
        src={HERO_IMAGE_URL}
        alt="Acorn expedition"
        hint="public/images/hero.jpg"
        variant="banner"
      />

      <section className="bg-white border-b border-gray-200/80">
        <div className="max-w-3xl mx-auto px-6 py-14 md:py-20 text-center">
          <p className="section-label mb-4">NSF Expeditions in Computing</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-gray-900 mb-6">
            Acorn: The Dawn of Very Large Scale Brain Integrated Computer Systems
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Brain-Computer Interfaces enable machines to read from and modulate biological neurons.
            Acorn lays the foundation for Very Large-scale Brain Interfacing (VLBI)&mdash;milliwatt-scale,
            programmable, real-time systems that interface with large volumes of brain data.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/about" className="btn-primary">About the Expedition</Link>
            <Link href="/research" className="btn-outline">Research</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function HomeOverviewImage() {
  return (
    <ImageSlot
      src={OVERVIEW_IMAGE_URL}
      alt="Acorn research overview"
      hint="public/images/overview.jpg"
      aspect="square"
    />
  );
}

export function HomeCtaImage() {
  return (
    <ImageSlot
      src={CTA_IMAGE_URL}
      alt="Acorn collaboration"
      hint="public/images/cta.jpg"
      aspect="video"
    />
  );
}
