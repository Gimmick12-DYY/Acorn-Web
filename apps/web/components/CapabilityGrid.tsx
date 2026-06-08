import React from 'react';

const icons = {
  scale: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  crosslayer: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6M3.75 12A2.25 2.25 0 016 9.75h12A2.25 2.25 0 0120.25 12M3.75 18A2.25 2.25 0 016 15.75h12A2.25 2.25 0 0120.25 18" />
    </svg>
  ),
  bio: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75a3.75 3.75 0 117.5 0v.75M8.25 7.5A3.75 3.75 0 004.5 11.25v.75a3.75 3.75 0 003.75 3.75M15.75 7.5a3.75 3.75 0 013.75 3.75v.75a3.75 3.75 0 01-3.75 3.75M9 18a3 3 0 006 0M12 3v18" />
    </svg>
  ),
  collaborative: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
};

const capabilities = [
  { stat: 'Brain-Scale', label: 'Very large scale integration', icon: icons.scale },
  { stat: 'Cross-Layer', label: 'From devices to algorithms', icon: icons.crosslayer },
  { stat: 'Bio-Inspired', label: 'Neural computing principles', icon: icons.bio },
  { stat: 'Multi-Institution', label: 'Collaborative expedition', icon: icons.collaborative },
];

export function CapabilityGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {capabilities.map((cap) => (
        <div key={cap.stat} className="text-center p-6 rounded-2xl bg-gray-50/80 border border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-acorn/10 text-acorn flex items-center justify-center mx-auto mb-3">
            {cap.icon}
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{cap.stat}</div>
          <div className="text-sm text-gray-500">{cap.label}</div>
        </div>
      ))}
    </div>
  );
}
