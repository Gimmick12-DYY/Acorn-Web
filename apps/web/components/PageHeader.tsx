import React from 'react';

type PageHeaderImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type PageHeaderProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  image?: PageHeaderImage;
};

export function PageHeader({ label, title, description, children, image }: PageHeaderProps) {
  return (
    <section className="bg-white border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div
          className={
            image
              ? 'grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 items-center'
              : 'max-w-2xl'
          }
        >
          <div className={image ? 'min-w-0' : undefined}>
            <div className="accent-rule" />
            {label && <p className="section-label mb-3">{label}</p>}
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-[1.12]">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-500 leading-relaxed">{description}</p>
            )}
            {children}
          </div>

          {image && (
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-black">
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
