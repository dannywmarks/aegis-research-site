
import Hero from "./components/Hero"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0c27d] dark:bg-black dark:text-[#e0c27d] transition-colors">
      <Hero />
      <Footer />
    </div>
  );
}
