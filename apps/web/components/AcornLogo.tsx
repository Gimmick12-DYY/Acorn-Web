import React from 'react';

type AcornLogoProps = {
  /** Height in pixels; width scales from the icon aspect ratio. */
  height?: number;
  className?: string;
};

export function AcornLogo({ height = 40, className = '' }: AcornLogoProps) {
  const width = Math.round(height * (380 / 497));

  return (
    <img
      src="/logos/acorn-icon.png"
      alt="Acorn"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  );
}
