const caseStudies = [
  {
    title: "Pen Testing: International Client, London",
    summary: "Uncovered malicious nation-state code during pen test. Executed full recovery plan post-removal."
  },
  {
    title: "Insider Threat: NY Transportation Firm",
    summary: "Detected compromised IT manager. Traced activity to hostile state. Case escalated to FBI."
  },
  {
    title: "Background Check: German Defense Contractor",
    summary: "Revealed money laundering links in a new hire missed by in-house checks."
  },
  {
    title: "Interim CSO: California Startup",
    summary: "Established SOPs across departments, reduced security costs, improved compliance."
  },
  {
    title: "Red/Blue Team Audit: Vendor Risk",
    summary: "Demonstrated flaws in remote monitoring solution. Prevented costly integration risk."
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-semibold mb-8 text-gold">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="border border-gold p-6 rounded-xl bg-black/80 hover:bg-black/90 transition">
              <h3 className="text-xl font-semibold text-gold mb-2">{study.title}</h3>
              <p className="text-white/90">{study.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;