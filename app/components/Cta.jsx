import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="section bg-gold text-gold text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Strengthen Your Security Posture?
      </h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Schedule a confidential consultation and learn how Aegis Research Group
        can support your mission.
      </p>
      <Link className="btn-primary inline-block" href="/contact">
        Schedule Consultation
      </Link>
    </section>
  );
}
