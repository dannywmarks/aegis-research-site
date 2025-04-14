// components/Navbar.jsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full py-6 px-6 md:px-8 flex justify-between items-center bg-black border-b border-white/10 relative z-50">
      <div className="text-[#c9b178] font-serif text-xl font-bold">AEGIS RESEARCH GROUP</div>

      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-[#c9b178] hover:text-white border border-gold rounded"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={toggleMenu} className="text-gold">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:flex gap-6 items-center ${
          menuOpen
            ? "flex flex-col absolute top-20 right-6 bg-black p-6 rounded border border-white/10"
            : "hidden"
        } md:static md:flex-row`}
      >
        <Link href="/" className="text-[#c9b178] hover:text-[#f6f5f2] transition">
          Home
        </Link>
        <Link
          href="/who-we-are"
          className="text-[#c9b178] hover:text-[#f6f5f2] transition"
        >
          About
        </Link>
        <Link
          href="/what-we-do"
          className="text-[#c9b178] hover:text-[#f6f5f2] transition"
        >
          Services
        </Link>
        <Link
          href="/case-studies"
          className="text-[#c9b178] hover:text-[#f6f5f2] transition"
        >
          Case Studies
        </Link>
        <Link
          href="/industries"
          className="text-[#c9b178] hover:text-[#f6f5f2] transition"
        >
          Industries
        </Link>
        <Link href="/risk-management" className="text-[#c9b178] hover:text-[#f6f5f2]transition">Risk Management</Link>
        <Link href="/contact" className="text-[#c9b178] hover:text-[#f6f5f2] transition">
          Contact
        </Link>
        <div className="hidden md:block">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 text-[#c9b178] hover:text-[#f6f5f2] border border-[#c9b178]rounded"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar