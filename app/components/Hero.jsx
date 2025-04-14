import Image from 'next/image'

export default function Hero() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-8 text-center md:text-left">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/logo-gold-dark.svg" 
          alt="Aegis Shield Lion Logo" 
          width={820} 
          height={20} 
          priority
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Cyber & Physical Security Intelligence</h2>
        <p className="text-[#c9b178] text-base md:text-lg max-w-xl">
          Aegis Research Group provides expert consulting in cybersecurity, intelligence analysis, and physical risk assessment tailored to modern challenges.
        </p>
        <div className="mt-6">
          <a href="#contact" className="inline-block px-6 py-3 border 8 text-sm font-medium uppercase tracking-wider hover:bg-[#e0c27d] hover:text-black transition">
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  )
}