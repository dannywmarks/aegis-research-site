import React from 'react'


export default function StatsSection() {
  return (
    <section className="section bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">The Current Threat Landscape</h2>
      <p className="max-w-xl mx-auto text-lg mb-12">
        In today's hybrid threat environment, understanding risk is the first step toward neutralizing it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gold">
        <div>
          <p className="text-5xl font-bold">84%</p>
          <p className="text-lg">of threats to public figures begin online</p>
        </div>
        <div>
          <p className="text-5xl font-bold">36 hrs</p>
          <p className="text-lg">average time to identify a new digital threat manually</p>
        </div>
        <div>
          <p className="text-5xl font-bold">3x</p>
          <p className="text-lg">increase in event-targeted harassment in the last 12 months</p>
        </div>
      </div>
    </section>
  );
}