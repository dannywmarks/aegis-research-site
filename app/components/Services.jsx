import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-cover bg-center bg-no-repeat text-[#e0c27d] py-20 px-6 md:px-12 "
      style={{ backgroundImage: "url('/headline-bg.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl  md:text-4xl font-bold mb-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1b1b1b] p-6 border border-[#2c2c2c] rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
            <p className="text-sm text-[#fff2d4]">
              We provide digital threat monitoring tailored to high-risk
              individuals and organizations. Our system scans social media, dark
              web forums, public breach repositories, and fringe platforms for
              negative sentiment, doxxing attempts, and targeted mentions. When
              indicators of hostility escalate — such as threats of violence,
              coordinated trolling, or compromised personal data — we issue
              real-time alerts and deliver actionable reports. Our team
              cross-references data with known threat actor profiles and
              utilizes OSINT methods to assess intent, capability, and proximity
              to prevent online rhetoric from becoming real-world incidents.
            </p>
          </div>
          <div className="bg-[#1b1b1b] p-6 border border-[#2c2c2c] rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Cyber & Physical Consulting
            </h3>
            <p className="text-sm text-[#fff2d4]">
              We provide full-spectrum security consulting that bridges cyber
              and physical domains through a unified risk model. Our assessments
              include network security, IoT exposure, access control,
              surveillance systems, and routine-based vulnerabilities. We
              conduct policy audits for organizations lacking formal security
              governance and offer an Interim Chief Security Officer (CSO)
              Program — providing expert leadership to design, implement, and
              enforce security protocols until a permanent hire is made.
              Services include red-teaming, penetration testing, travel risk
              assessments, vendor onboarding/offboarding reviews, and physical
              perimeter audits. Recommendations are tailored to the client's
              lifestyle, risk profile, and threat landscape.
            </p>
          </div>
          <div className="bg-[#1b1b1b] p-6 border border-[#2c2c2c] rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">POI Identification</h3>
            <p className="text-sm text-[#fff2d4]">
              We identify anonymous threat actors across digital platforms using
              advanced OSINT, AI, and social engineering. When a threat surfaces
              — whether a hostile post, impersonation, phishing attempt, or
              harassment campaign — our analysts track digital breadcrumbs, map
              alias usage, and link behavioral patterns across platforms. We
              compile detailed attribution reports that include IP metadata,
              breach traces, visual identifiers, and known affiliations. Where
              necessary, we escalate to legal teams or law enforcement with
              documented profiles and timelines for action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
