"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1a1a1a] text-gold py-4 px-6 shadow-md sticky top-0 z-50 uppercase font-bold">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link
          className="flex items-center cursor-pointer z-2 text-3xl font-bold "
          href="/"
        >
          <Image src="/ARG-logo-gold.png" width={45} height={35} alt="logo" />{" "}
          ARG
        </Link>

        {/* Desktop Navigation */}
        <nav className="space-x-4 hidden md:block">
          <Link href="/about" className="hover:text-gold">
            About
          </Link>
          <Link href="/services" className="hover:text-gold">
            Services
          </Link>
          <Link href="/solutions/personal-clients" className="hover:text-gold">
            Clients
          </Link>
          <Link href="/solutions/event-intel" className="hover:text-gold">
            Events
          </Link>
          <Link href="/risk-assessment" className="hover:text-gold">
            Assessment
          </Link>
          <Link href="/contact" className="hover:text-gold">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111010] text-gold px-6 py-4 space-y-4">
          <Link
            href="/about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/solutions/personal-clients"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Clients
          </Link>
          <Link
            href="/solutions/event-intel"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/risk-assessment"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Assessment
          </Link>
          <Link
            href="/contact"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
