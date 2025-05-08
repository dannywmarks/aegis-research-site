import React from 'react';
import CTA from '../components/CTA';


export default function AboutPage() {
  return (
    <main>
      {/* Risk Landscape */}
      <section className="section bg-[#1a1a1a] text-white">
        <h1 className="text-4xl font-bold mb-4">Understanding the Risk Landscape</h1>
        <p className="text-lg max-w-3xl">
          Threats to high-profile individuals, executives, and organizations evolve rapidly across both physical and digital domains. Our mission starts with recognizing this shift — and addressing it head-on.
        </p>
      </section>

      {/* Why We Exist */}
      <section className="section bg-[#111010] text-white">
        <h2 className="text-3xl font-bold mb-4">Why Aegis Exists</h2>
        <p className="text-lg max-w-3xl">
          Aegis Research Group was founded to address a widening gap in security: the disconnect between cyber threats and real-world consequences. We bridge this gap through intelligence-driven protection.
        </p>
      </section>

      {/* What Sets Us Apart */}
      <section className="section bg-[#413a29] text-white">
        <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
        <ul className="list-disc list-inside text-lg max-w-3xl">
          <li>Our OSINT program continuously scans for digital threats</li>
          <li>We integrate cyber intelligence with real-world EP tactics</li>
          <li>Custom-built dashboards and alerting workflows</li>
          <li>Staffed by professionals from law enforcement, intelligence, and special operations</li>
        </ul>
      </section>

      {/* Who We Serve (reuse component if needed) */}
      <section className="section bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Who We Serve</h2>
        <p className="text-lg max-w-3xl">
          We work with individuals and teams who face disproportionate risks due to their status, influence, or exposure — including:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg">
          <li>High-Net-Worth Individuals</li>
          <li>Executives & Founders</li>
          <li>Political Figures & Celebrities</li>
          <li>Family Offices & Security Directors</li>
        </ul>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section bg-[#1a1a1a] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Mission. Vision. Values.</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Our mission is to protect the people who shape the world. Our vision is a future where intelligence is the cornerstone of security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p>To proactively identify and neutralize threats through cyber-physical intelligence.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p>To redefine modern security through innovation, foresight, and expertise.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Values</h3>
            <p>Discipline. Discretion. Adaptability. Integrity.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}