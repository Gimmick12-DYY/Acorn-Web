import React from 'react';

function initialsFor(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

type PersonAvatarProps = {
  name: string;
  photoUrl?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClass = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
};

function encodePublicPath(path: string): string {
  return path
    .split('/')
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join('/');
}

export function PersonAvatar({ name, photoUrl, className = '', size = 'md' }: PersonAvatarProps) {
  if (photoUrl) {
    return (
      <img
        src={encodePublicPath(photoUrl)}
        alt={name}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-acorn/15 to-acorn/5 text-acorn font-semibold ${sizeClass[size]} ${className}`}
      aria-hidden
    >
      {initialsFor(name)}
    </div>
  );
}
