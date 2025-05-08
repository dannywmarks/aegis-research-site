import React from 'react'

import CTA from '../../components/CTA';

export default function EventIntelLandingPage() {
  return (
    <main>
      <section className="section bg-[#1a1a1a] text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Real-Time Intelligence for Event Security</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We equip event security teams with proactive intelligence tools to prevent disruptions, identify POIs, and track threats before they become incidents.
        </p>
      </section>

      <section className="section bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">The Data</h2>
        <ul className="list-disc list-inside text-lg max-w-3xl">
          <li>Live social media monitoring reduces incident response time by 68%</li>
          <li>Negative sentiment spikes are early indicators of hostile activity</li>
          <li>Proactive identification of online chatter leads to early interdiction</li>
        </ul>
      </section>

      <section className="section bg-[#413a29] text-white">
        <h2 className="text-3xl font-bold mb-4">Common Failures</h2>
        <p className="text-lg max-w-3xl">
          Many event teams miss pre-incident warning signs because they rely solely on physical observation. Digital threats are often overlooked.
        </p>
      </section>

      <section className="section bg-[#111010] text-white">
        <h2 className="text-3xl font-bold mb-4">The Aegis Advantage</h2>
        <p className="text-lg max-w-3xl">
          We integrate digital threat monitoring into your security operations — combining live social listening, POI tracking, and pre-event scanning.
        </p>
      </section>

      <section className="section bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Deliverables You Can Count On</h2>
        <ul className="list-disc list-inside text-lg max-w-3xl">
          <li>POI profiles and digital backgrounders</li>
          <li>Live negative sentiment monitoring before and during the event</li>
          <li>Real-time alerts to your physical security team</li>
          <li>Post-event threat reporting and trend analysis</li>
        </ul>
      </section>

      <section className="section bg-[#1a1a1a] text-white">
        <h2 className="text-3xl font-bold mb-4">Our Method</h2>
        <ol className="list-decimal list-inside text-lg max-w-3xl">
          <li>Initial pre-event scan for keywords, threats, and POIs</li>
          <li>Custom intelligence dashboard access</li>
          <li>Live monitoring during the event</li>
          <li>Debrief + after-action reporting</li>
        </ol>
      </section>

      <section className="section bg-[#413a29] text-white">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-lg max-w-2xl">
          Pricing is based on event scale, number of monitored platforms, and reporting frequency. Standard packages range from $4,000 to $15,000 per event.
        </p>
      </section>

      <CTA />
    </main>
  );
}
