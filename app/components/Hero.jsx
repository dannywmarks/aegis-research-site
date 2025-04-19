import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <main className="relative flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-8 text-center md:text-left bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#413a29] overflow-hidden">
      {/* Background Circuit Image */}
      <img
        src="/circuits.png"
        alt="Circuit board design"
        className="absolute bottom-0 right-0 w-[120%] md:w-1/2 max-w-none opacity-20 pointer-events-none z-0 transform scale-150 md:scale-100"
      />
      {/* Left: Logo */}
      <div className="w-full md:w-1/2 flex justify-center relative z-10">
        <Image
          src="/logo-gold-light.png"
          alt="Aegis Shield Lion Logo"
          width={820}
          height={20}
          priority
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:md:text-5xl xl:text-7xl font-bold mb-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Predict the Digital. Protect the Physical.
        </h1>
        <p className="text-[#fff2d4] text-base md:text-lg max-w-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          At Aegis Research Group, we specialize in threat intelligence that
          bridges the cyber and physical domains. From analyzing malicious
          digital activity to assessing real-world vulnerabilities, we identify
          risks others miss. Our research-driven approach empowers organizations
          to make informed decisions in a landscape where virtual threats can
          have very real consequences.
        </p>
        <div className="mt-6">
           <a
            href="#contact"
            className="inline-block px-6 py-3 border text-sm font-medium uppercase tracking-wider hover:bg-[#e0c27d] hover:text-black transition"
          >
            Get In Touch
          </a> 
        
        </div>
      </div>
    </main>
  );
}
