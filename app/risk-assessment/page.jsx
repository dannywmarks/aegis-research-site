import React from 'react'

export default function RiskAssessmentPage() {
  return (
    <main className="section bg-[#1a1a1a] text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Free Risk Assessment</h1>
      <p className="text-lg text-center max-w-2xl mx-auto mb-10">
        Complete the form below to request a free preliminary assessment. We use this information to evaluate your exposure, understand potential risks, and identify where intelligence can make the biggest impact.
      </p>

      <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6 text-black">
        <div>
          <label className="block text-white mb-1">Full Name</label>
          <input type="text" className="w-full p-3 rounded" required />
        </div>

        <div>
          <label className="block text-white mb-1">Email Address</label>
          <input type="email" className="w-full p-3 rounded" required />
        </div>

        <div>
          <label className="block text-white mb-1">Phone Number</label>
          <input type="tel" className="w-full p-3 rounded" />
        </div>

        <div>
          <label className="block text-white mb-1">Type of Risk You’re Concerned About</label>
          <select className="w-full p-3 rounded">
            <option>Cybersecurity</option>
            <option>Physical Surveillance</option>
            <option>Online Threats or Harassment</option>
            <option>Event or Public Appearance</option>
            <option>All of the Above</option>
          </select>
        </div>

        <div>
          <label className="block text-white mb-1">Brief Description of Your Concerns</label>
          <textarea className="w-full p-3 rounded" rows="5" placeholder="Optional but helpful"></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary bg-gold text-black py-3 px-6 mt-4 rounded hover:bg-[#e0c27d] transition"
        >
          Submit Assessment Request
        </button>
      </form>
    </main>
  );
}
