import React from 'react';

type ImageSlotProps = {
  /** Public path, e.g. '/images/hero.jpg'. Leave unset to show the placeholder. */
  src?: string;
  alt: string;
  /** Shown inside the placeholder when no image is set. */
  hint?: string;
  aspect?: 'video' | 'square' | 'wide';
  /** Full-width banner — fixed height, no rounded corners. */
  variant?: 'default' | 'banner';
  className?: string;
};

const aspectClass = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9]',
};

export function ImageSlot({
  src,
  alt,
  hint = 'Add an image',
  aspect = 'video',
  variant = 'default',
  className = '',
}: ImageSlotProps) {
  const sizeClass =
    variant === 'banner'
      ? 'h-52 sm:h-64 md:h-80 lg:h-[420px] rounded-none ring-0'
      : `${aspectClass[aspect]} rounded-2xl ring-1 ring-gray-200/80`;

  return (
    <div
      className={`relative w-full overflow-hidden bg-gray-50 ${sizeClass} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
          <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <span className="text-sm font-medium text-gray-400">{hint}</span>
        </div>
      )}
    </div>
  );
}
