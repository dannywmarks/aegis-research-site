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

import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <main>
      <section className="section bg-[#1a1a1a] text-white text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We provide customized security solutions that combine cyber intelligence and physical protection to address evolving threat landscapes.
        </p>
      </section>

      <section className="section bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service Items */}
        <div className="bg-[#111010] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Threat Intelligence & OSINT Monitoring</h2>
          <p>
            We identify and track potential threats through open-source intelligence, negative sentiment analysis, and deep digital profiling.
          </p>
        </div>

        <div className="bg-[#111010] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Interim CSO Program</h2>
          <p>
            Aegis can step in as your interim Chief Security Officer, establishing cybersecurity policies, SOPs, and training programs while you scale or transition.
          </p>
        </div>

        <div className="bg-[#111010] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Physical Security Consulting</h2>
          <p>
            We assess vulnerabilities at properties and events, and partner with elite protection firms to deploy responsive, intelligence-led security.
          </p>
        </div>

        <div className="bg-[#111010] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Due Diligence & Background Investigations</h2>
          <p>
            Our team provides advanced background checks and threat profiling for individuals and entities using legal, OSINT, and proprietary methods.
          </p>
        </div>

        <div className="bg-[#111010] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Training for EP Teams & Analysts</h2>
          <p>
            We train executive protection firms and analysts in OSINT, threat identification, digital hygiene, and social engineering tactics.
          </p>
        </div>

        <div className="bg-[#111010] p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Custom Dashboards & Reports</h2>
          <p>
            Clients receive access to dashboards that include POI profiles, ongoing alerts, sentiment monitoring, and documentable threat intelligence.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
