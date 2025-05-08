import React from "react";
import { ShieldCheckIcon, SearchIcon, TargetIcon } from "lucide-react";

const Services = () => {
  return (
    <section
      className="px-4 py-10"
      // className="bg-cover bg-center px-4 py-10 text-[#e0c27d]"
      // style={{ backgroundImage: "url('/headline-bg.png')" }}
    >
      <div className="max-w-8xl mx-auto text-center">
        <div className="grid md:grid-cols-4 gap-12">
          {[
            {
              title: "Threat Intelligence",
              icon: <SearchIcon className="h-6 w-6 mr-2" />,
              image: "/threat-intel-card2.png",
              description:
                "We provide digital threat monitoring tailored to high-risk individuals and organizations. We scan dark web forums, social media, and breach repositories to detect negative sentiment, doxxing, or targeted threats. When escalation indicators appear, our team issues real-time alerts and actionable reports—cross-referencing data with known threat actor profiles using OSINT methods to prevent real-world incidents.",
              link: "/services/threat-intelligence",
            },
            {
              title: "Threat Intelligence",
              icon: <SearchIcon className="h-6 w-6 mr-2" />,
              image: "/threat-intel-card2.png",
              description:
                "We provide digital threat monitoring tailored to high-risk individuals and organizations. We scan dark web forums, social media, and breach repositories to detect negative sentiment, doxxing, or targeted threats. When escalation indicators appear, our team issues real-time alerts and actionable reports—cross-referencing data with known threat actor profiles using OSINT methods to prevent real-world incidents.",
              link: "/services/threat-intelligence",
            },
            {
              title: "Consulting",
              icon: <ShieldCheckIcon className="h-6 w-6 mr-2" />,
              image: "/cyber-physical-card2.png",
              description:
                "We provide full-spectrum security consulting that bridges cyber and physical domains through a unified risk model. Services include network and IoT risk assessments, red-teaming, policy audits, and physical security evaluations. We also offer an Interim CSO Program, giving clients expert leadership to design and implement robust security frameworks.",
              link: "/services/cyber-consulting",
            },
            {
              title: "POI Identification",
              icon: <TargetIcon className="h-6 w-6 mr-2" />,
              image: "/poi-id-card2.png",
              description:
                "We identify anonymous threat actors using advanced OSINT, AI, and behavioral profiling. Our specialists track digital breadcrumbs, link aliases, and compile actionable attribution reports—complete with metadata, visual IDs, and escalation readiness for legal or law enforcement handoff.",
              link: "/what-we-do/poi-identification",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-[rgb(15,15,15)] p-6 border border-[#2c2c2c] rounded-lg shadow-lg flex flex-col items-center text-center h-full max-w-md mx-auto drop-shadow-[0_0_10px_#1C9DA1] opacity-95"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <div className="flex items-center justify-center mb-4">
                <span className="text-lg font-semibold uppercase mt-4">
                  {service.title}
                </span>
              </div>
              <p className="text-md text-[#fff2d4] flex-grow">
                {service.description}
              </p>
              <a
                href={service.link}
                className="mt-6 inline-block w-full px-6 py-3 border border-[#e0c27d] text-[#e0c27d] text-sm font-semibold uppercase hover:bg-[#e0c27d] hover:text-black transition duration-200"
              >
                <div className="flex items-center justify-center ">
                  {service.icon}
                  <span className="text-lg font-semibold">Learn More</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
