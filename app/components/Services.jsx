import React from "react";
import { ShieldCheckIcon, SearchIcon, TargetIcon } from "lucide-react";

const Services = () => {
  return (
    <section className="bg-cover bg-center px-6 py-20 text-[#e0c27d]" style={{ backgroundImage: "url('/headline-bg.png')" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              title: 'Threat Intelligence',
              icon: <SearchIcon className="h-6 w-6 mr-2" />,
              image: '/threat-intel-card.png',
              description: 'We provide digital threat monitoring tailored to high-risk individuals and organizations. We scan dark web forums, social media, and breach repositories to detect negative sentiment, doxxing, or targeted threats. When escalation indicators appear, our team issues real-time alerts and actionable reports—cross-referencing data with known threat actor profiles using OSINT methods to prevent real-world incidents.',
              link: '/services/threat-intelligence'
            }, {
              title: 'Cyber & Physical Consulting',
              icon: <ShieldCheckIcon className="h-6 w-6 mr-2" />,
              image: '/cyber-physical-card.png',
              description: 'We provide full-spectrum security consulting that bridges cyber and physical domains through a unified risk model. Services include network and IoT risk assessments, red-teaming, policy audits, and physical security evaluations. We also offer an Interim CSO Program, giving clients expert leadership to design and implement robust security frameworks.',
              link: '/services/cyber-consulting'
            }, {
              title: 'POI Identification',
              icon: <TargetIcon className="h-6 w-6 mr-2" />,
              image: '/POI-ID-card.png',
              description: 'We identify anonymous threat actors using advanced OSINT, AI, and behavioral profiling. Our specialists track digital breadcrumbs, link aliases, and compile actionable attribution reports—complete with metadata, visual IDs, and escalation readiness for legal or law enforcement handoff.',
              link: '/services/poi-identification'
            }].map((service, idx) => (
              <div key={idx} className="bg-[#1b1b1b] p-6 border border-[#2c2c2c] rounded-xl shadow-md flex flex-col items-center text-center h-full max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">{service.icon}<span className="text-lg font-semibold">{service.title}</span></div>
                <img src={service.image} alt={service.title} className="w-full h-56 object-cover rounded-md mb-4" />
                <p className="text-sm text-[#fff2d4] flex-grow">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-6 inline-block w-full px-6 py-3 border border-[#e0c27d] text-[#e0c27d] text-sm font-semibold uppercase hover:bg-[#e0c27d] hover:text-black transition duration-200"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services;
