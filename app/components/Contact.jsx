import React from "react";

const Contact = () => {
  return (
    <section
      id="cta"
      className="py-16 px-6 md:px-12 text-center relative w-full overflow-hidden bg-gradient-to-br from-[#413a29] via-[#111010] to-[#1a1a1a]"
    >
      <img
        src="/circuits.png"
        alt="Circuit board design"
        className="absolute top-0 left-0 h-full w-full object-cover transform rotate-180 opacity-10 pointer-events-none z-0"
      />

      <div className=" bg-black text-white px-8 py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#c9b178]">
            Ready to strengthen your security posture?
          </h2>
          <p className="text-[#c9b178] mb-6">
            Reach out to us using the form below. Let’s build a strategy that’s
            proactive, intelligent, and built for the threats of tomorrow.
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-3 rounded bg-black border border-white/30 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-3 rounded bg-black border border-white/30 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded bg-black border border-white/30 text-white"
              />
            </div>
            <button
              type="submit"
              href="#contact"
              className="inline-block px-6 py-3 border border-[#e0c27d] text-sm font-medium uppercase tracking-wider hover:bg-[#e0c27d] hover:text-black transition"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
