import React from 'react';

type PageHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ label, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-white border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="max-w-2xl">
          <div className="accent-rule" />
          {label && <p className="section-label mb-3">{label}</p>}
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">{title}</h1>
          {description && (
            <p className="text-lg text-gray-500 leading-relaxed">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
