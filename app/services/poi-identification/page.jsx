import React from "react";
import Image from "next/image";

// components/POIDetail.tsx

export default function POIIdentificationDetail() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 min-h-screen">
       <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1C9DA1] mb-4">POI Identification & Attribution</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Aegis Research Group specializes in identifying anonymous or deceptive threat actors using advanced OSINT techniques, cyber investigation, and behavioral profiling. We connect digital footprints to real-world identities, producing attribution-ready intelligence reports.
        </p>
      </div>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

      {/* LEFT: Visual Section */}
      <div className="flex justify-center">
        <img 
          src="/anonymous-poi.png" 
          alt="Unidentified Person of Interest" 
          className="rounded-lg shadow-[0_0_30px_#1C9DA1] w-full max-w-md"
        />
      </div>

      {/* RIGHT: Content */}
      <div className="space-y-12">
       

        <div>
          <h2 className="text-2xl font-semibold text-[#50BDCE] mb-2">1. Malicious Email Tracing</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Metadata and header analysis</li>
            <li>IP tracing and VPN obfuscation patterns</li>
            <li>Domain cross-referencing and alias correlation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#50BDCE] mb-2">2. Social Media Threat Monitoring</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Archiving hostile or suspicious posts</li>
            <li>Username/handle linking across platforms</li>
            <li>Behavioral and linguistic profiling</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#50BDCE] mb-2">3. SMS and Phone Threat Analysis</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Phone number tracing (spoofed, VoIP, burner apps)</li>
            <li>Associating numbers with social/email accounts</li>
            <li>Dark web lookup and threat actor profiling</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#50BDCE] mb-2">4. Threat Attribution & Reporting</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>PII, alias, and location correlation</li>
            <li>Visual ID confirmation and timeline documentation</li>
            <li>Escalation-ready dossiers for law enforcement or legal handoff</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#50BDCE] mb-2">Our Capabilities</h2>
          <p className="text-gray-400">
            We utilize proprietary OSINT platforms, breach intelligence databases, and AI-enhanced identity mapping to uncover the real identities behind digital threats. Our proven methodology ensures reliable attribution and proactive threat mitigation.
          </p>
        </div>
      </div>
    </div>

    {/* Threat Image Cards */}
    {/* Threat Image Cards */}
    <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        {['tweet1.png', 'tweet2.png', 'tweet3.png'].map((img, i) => (
          <div key={i} className="bg-[#0f0f0f] p-4 rounded-lg shadow-[0_0_20px_#1C9DA1]">
            <img 
              src={`/${img}`} 
              alt={`Threat example ${i + 1}`} 
              className="rounded w-full object-cover"
            />
          </div>
        ))}
      </div>
  </section>

  );
}
