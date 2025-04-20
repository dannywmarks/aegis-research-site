import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 px-6 md:px-12 bg-[#0f0f0f] overflow-hidden drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] min-h-[500px] md:min-h-[600px]"
    >
      {/* Background Image with opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="/our_mission_bg.png"
          alt="Digital Protection Agents"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10 py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#fff2d4]">
          Our Mission
        </h2>
        <p className="text-[#fff2d4] text-base md:text-2xl">
        We exist to protect the digital and physical integrity of high-profile individuals, organizations, and properties. With a background in executive protection, cybersecurity, and OSINT operations, we offer a holistic approach to modern threat mitigation.

        In today’s evolving threat landscape, our services act as digital executive protection agents, identifying and neutralizing online threats before they reach the real world. We monitor, trace, and attribute malicious digital activity — from threatening emails and social media posts to cyberstalking and doxxing — working alongside our physical security teams to create a seamless shield of protection around those we serve. </p>
      </div>
    </section>
  );
};

export default About;
