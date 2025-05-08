import React from 'react'

import CTA from '../../components/CTA';

export default function PersonalClientsLandingPage() {
  return (
    <main>
      <section className="section bg-[#1a1a1a] text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Intelligence-Led Protection for Individuals & Families</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Aegis Research Group offers tailored security intelligence programs that help high-profile clients detect and neutralize threats before they escalate.
        </p>
      </section>

      <section className="section bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">The Data</h2>
        <ul className="list-disc list-inside text-lg max-w-3xl">
          <li>84% of targeted threats start online</li>
          <li>Leaked personal data increases physical risk vectors</li>
          <li>Most digital threats go unmonitored by traditional EP firms</li>
        </ul>
      </section>

      <section className="section bg-[#413a29] text-white">
        <h2 className="text-3xl font-bold mb-4">How Others Fail</h2>
        <p className="text-lg max-w-3xl">
          Most protective services focus solely on physical presence, missing the digital breadcrumbs that adversaries exploit to plan attacks.
        </p>
      </section>

      <section className="section bg-[#111010] text-white">
        <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
        <p className="text-lg max-w-3xl">
          We provide a fusion of online monitoring, OSINT profiling, and field-ready threat assessments, all designed to inform your protection strategy.
        </p>
      </section>

      <section className="section bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">What You Can Expect</h2>
        <ul className="list-disc list-inside text-lg max-w-3xl">
          <li>Customized weekly threat reports</li>
          <li>Negative sentiment alerts</li>
          <li>Data removal and exposure tracking</li>
          <li>Profile identification and escalation pathways</li>
        </ul>
      </section>

      <section className="section bg-[#1a1a1a] text-white">
        <h2 className="text-3xl font-bold mb-4">Why Aegis?</h2>
        <p className="text-lg max-w-3xl">
          We’ve served as trusted advisors for high-net-worth families, executive protection teams, and political figures. Our blend of cyber intelligence and field expertise gives us a unique edge.
        </p>
      </section>

      <section className="section bg-[#111010] text-white">
        <h2 className="text-3xl font-bold mb-4">Our Process</h2>
        <ol className="list-decimal list-inside text-lg max-w-3xl">
          <li>Initial intake and digital footprint scan</li>
          <li>Custom profile build and background audit</li>
          <li>Deployment of ongoing monitoring protocols</li>
          <li>Regular briefings and escalation framework</li>
        </ol>
      </section>

      <section className="section bg-[#413a29] text-white">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-lg max-w-2xl">
          Pricing is based on level of monitoring, scope of profile development, and threat environment. Most clients engage with us between $3,500–$10,000/mo depending on complexity.
        </p>
      </section>

      <CTA />
    </main>
  );
}