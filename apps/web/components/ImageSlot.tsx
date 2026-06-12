import React from 'react';

type ImageSlotProps = {
  /** Public path, e.g. '/images/hero.jpg'. Leave unset for an empty slot. */
  src?: string;
  alt: string;
  aspect?: 'video' | 'square' | 'wide';
  /** Full-width banner — fixed height, no rounded corners. */
  variant?: 'default' | 'banner';
  /** Use contain for diagrams; cover for photos. */
  fit?: 'cover' | 'contain';
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
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
  fit = 'cover',
  className = '',
  width,
  height,
  loading,
  fetchPriority,
}: ImageSlotProps) {
  const sizeClass =
    variant === 'banner'
      ? 'h-52 sm:h-64 md:h-80 lg:h-[420px] rounded-none ring-0'
      : `${aspectClass[aspect]} rounded-2xl ring-1 ring-gray-200/80`;

  const bgClass = fit === 'contain' ? 'bg-white' : 'bg-gray-50/60';

  return (
    <div
      className={`relative w-full overflow-hidden ${bgClass} ${sizeClass} ${className}`}
      aria-label={src ? undefined : alt}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={fetchPriority}
          className={`absolute inset-0 w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
        />
      ) : (
        <div
          className="absolute inset-0 border-2 border-dashed border-gray-200/90 bg-transparent"
          aria-hidden
        />
      )}
    </div>
  );
}
