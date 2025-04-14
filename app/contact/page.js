import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold mb-6 text-gold">Contact Us</h2>
        <p className="text-lg mb-6 text-white/80">
          Ready to strengthen your security posture? Reach out to us using the form below.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
            <input id="name" name="name" type="text" required className="w-full p-3 rounded bg-black border border-white/30 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input id="email" name="email" type="email" required className="w-full p-3 rounded bg-black border border-white/30 text-white" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full p-3 rounded bg-black border border-white/30 text-white" />
          </div>
          <button type="submit" className="px-6 py-3 border border-gold text-gold rounded hover:bg-gold hover:text-black transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
