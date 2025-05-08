import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111010] text-white py-10 text-sm mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Aegis Research Group</h2>
          <p className="text-gray-400">
            Cyber-Physical Security Consulting & Intelligence Services
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/risk-assessment">Risk Assessment</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Legal + Social */}
        <div>
          <h3 className="text-md font-semibold mb-2">Legal & Info</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <a href="mailto:info@aegisresearchgroup.com">
                info@aegisresearchgroup.com
              </a>
            </li>
            <li className="text-gray-500">
              © {new Date().getFullYear()} Aegis Research Group
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
