import Hero from "./components/Hero";

import Services from "./components/Services";
import About from "./components/About";
import CTA from "./components/CTA";
import WhoWeAre from "./components/WhoWeServe.jsx";
import StatsSection from "./components/StatsSection";
import VideoEmbed from "./components/VideoEmbed";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0c27d] transition-colors">
      <Hero />
      <WhoWeAre />
      <VideoEmbed />
      <StatsSection />
     

      <CTA />
 
    </div>
  );
}
