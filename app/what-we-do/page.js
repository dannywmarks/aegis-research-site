import React from 'react';

const services = [
  "Background Investigations (Domestic & International)",
  "Due Diligence Reports",
  "Travel Threat Assessments",
  "Threat Intelligence & Digital Tracing",
  "Physical Threat Surveillance",
  "Security SOP and Protocol Creation",
  "Cybersecurity Compliance & Best Practices",
  "Red Team / Blue Team / Purple Team Testing",
  "Outsourced Risk Management (Interim CSO Program)",
  "Security Vendor Vetting",
  "OSHA Compliance Integration",
  "Risk Transfer & Insurance Advisory"
];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold mb-8 text-gold">What We Do</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          {services.map((service, index) => (
            <li key={index} className="text-white/90">{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo