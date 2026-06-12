import React from 'react';
import Link from 'next/link';
import { heroImage } from '../content/images';
import { ImageSlot } from './ImageSlot';
import { NsfAcknowledgment } from './NsfAcknowledgment';

export function Hero() {
  return (
    <>
      <ImageSlot
        src={heroImage}
        alt="Neural network connected to a glowing brain — Acorn brain-computer interfacing research"
        variant="banner"
        fit="cover"
        className="bg-black"
        width={1016}
        height={571}
        loading="eager"
        fetchPriority="high"
      />

      <section className="bg-white border-b border-gray-200/80">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
          <div className="mb-5 flex justify-center">
            <NsfAcknowledgment variant="badge" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] text-gray-900 mb-5">
            Acorn: The Dawn of Very Large Scale Brain Integrated Computer Systems
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            A long-term collaborative expedition laying the foundation for Very Large-scale
            Brain Interfacing (VLBI)&mdash;milliwatt-scale, programmable, real-time systems
            that interface with large volumes of brain data.
          </p>
          <NsfAcknowledgment variant="inline" className="mb-8 max-w-2xl mx-auto" />
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/news" className="btn-primary">
              Latest News
            </Link>
            <Link href="/about" className="btn-outline">
              About the Expedition
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
