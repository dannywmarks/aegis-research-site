import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold mb-6 text-gold">Who We Are</h2>
        <p className="mb-4 text-lg">
          Aegis Research Group is a multidisciplinary team composed of former and current national CSIRT operatives, law enforcement and military investigators, elite network engineers, and penetration testers.
        </p>
        <p className="mb-4 text-lg">
          Our mission is to protect people and organizations by identifying and disrupting modern threats—both digital and physical. Our team brings decades of combined experience across private, public, and international sectors.
        </p>
        <p className="mb-4 text-lg">
          We operate independently and without bias, designing tailored security frameworks and proactive intelligence solutions based on your industry, your vulnerabilities, and your goals.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;