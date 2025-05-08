import React from 'react'

export default function WhoWeServe() {
  return (
    <section className="section bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        Aegis Research Group provides services for individuals and organizations that require proactive, intelligence-led security strategies.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <li>High-Net-Worth Individuals</li>
        <li>Family Offices</li>
        <li>Corporate Executives</li>
        <li>Event Security Teams</li>
        <li>Private Security Firms</li>
        <li>Political or Public Figures</li>
      </ul>
    </section>
  );
}
