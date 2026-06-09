import React from 'react';

const NSF_EIC_URL =
  'https://www.nsf.gov/funding/opportunities/expeditions-expeditions-computing';

type NsfAcknowledgmentProps = {
  /** compact = hero badge; inline = body copy; footer = muted legal line */
  variant?: 'badge' | 'inline' | 'footer';
  className?: string;
};

export function NsfAcknowledgment({ variant = 'inline', className = '' }: NsfAcknowledgmentProps) {
  if (variant === 'badge') {
    return (
      <a
        href={NSF_EIC_URL}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border border-acorn/25 bg-acorn-light/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-acorn hover:border-acorn/40 hover:bg-acorn-light transition-colors ${className}`}
      >
        NSF Expeditions in Computing
      </a>
    );
  }

  if (variant === 'footer') {
    return (
      <p className={`text-sm text-white/55 leading-relaxed ${className}`}>
        Supported by the U.S. National Science Foundation{' '}
        <a
          href={NSF_EIC_URL}
          target="_blank"
          rel="noreferrer"
          className="text-white/75 underline underline-offset-2 hover:text-white transition-colors"
        >
          Expeditions in Computing
        </a>{' '}
        program.
      </p>
    );
  }

  return (
    <p className={`text-sm text-gray-500 leading-relaxed ${className}`}>
      Acorn is a U.S. National Science Foundation{' '}
      <a
        href={NSF_EIC_URL}
        target="_blank"
        rel="noreferrer"
        className="text-acorn font-medium hover:text-acorn-dark underline underline-offset-2"
      >
        Expedition in Computing
      </a>{' '}
      uniting Yale, Princeton, UNC Chapel Hill, Iowa State, and UC Riverside.
    </p>
  );
}
