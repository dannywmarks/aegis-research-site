// components/Navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import clsx from "clsx";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header  className={clsx(
      "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
      hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
    )}>
      <nav className="w-full px-6 md:px-8 flex justify-between items-center relative z-50">

        <div className="text-[#b8d7ea] font-serif  font-bold flex items-center opacity-20">
        <Link className="flex-1 cursor-pointer z-2" href="/">
          <Image src="/ARG-logo-gold.png" width={85} height={35} alt="logo" />
        </Link>
          {/* <h1 className="mx-1 text-5xl">ARG</h1> */}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-[#c9b178] hover:text-[#fff2d4] border border-gold rounded"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={toggleMenu} className="text-[#c9b178]">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`md:flex gap-6 items-center ${
            menuOpen
              ? "flex flex-col absolute top-20 right-6 bg-black p-6 rounded border border-white/10"
              : "hidden"
          } md:static md:flex-row text-2xl font-bold uppercase`}
        >
          <Link
            href="/"
            className="text-[#c9b178] hover:text-[#fff2d4] transition drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Home
          </Link>
          <Link
            href="/who-we-are"
            className="text-[#c9b178] hover:text-[#fff2d4] transition drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
          >
            About
          </Link>
          <Link
            href="/what-we-do"
            className="text-[#c9b178] hover:text-[#fff2d4] transition drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="text-[#c9b178] hover:text-[#fff2d4] transition drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Case Studies
          </Link>
          <Link
            href="/industries"
            className="text-[#c9b178] hover:text-[#fff2d4] transition drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className="text-[#c9b178] hover:text-[#fff2d4] transition"
          >
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
    </header>
  );
};

export default Navbar;
