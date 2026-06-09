import React from 'react';

type ImageSlotProps = {
  /** Public path, e.g. '/images/hero.jpg'. Leave unset for an empty slot. */
  src?: string;
  alt: string;
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
      className={`relative w-full overflow-hidden bg-gray-50/60 ${sizeClass} ${className}`}
      aria-label={src ? undefined : alt}
    >
      {src ? (
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div
          className="absolute inset-0 border-2 border-dashed border-gray-200/90 bg-transparent"
          aria-hidden
        />
      )}
    </div>
  );
}
