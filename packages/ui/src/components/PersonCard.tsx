import React from 'react';

export function PersonCard({ name, bio, photoUrl }: { name: string; bio: string; photoUrl?: string }) {
  return (
    <div className="border rounded-2xl p-4 bg-white">
      {photoUrl && <img src={photoUrl} alt={name} className="w-full h-48 object-cover rounded-xl mb-3" />}
      <h3 className="font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{bio}</p>
    </div>
  );
}
