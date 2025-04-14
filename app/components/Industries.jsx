import React from 'react';

const industries = [
  "Manufacturing & Distribution",
  "Municipal Entities (Airports, Docks)",
  "Commercial Banks",
  "Private Equity & Family Offices",
  "Universities & Education",
  "Hospitals & Medical Providers",
  "Construction & Infrastructure",
  "Airport Servicing",
  "Service Industries",
  "Government Agencies"
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold mb-8 text-gold">Industries Served</h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          {industries.map((industry, index) => (
            <li key={index} className="text-white/90">{industry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};