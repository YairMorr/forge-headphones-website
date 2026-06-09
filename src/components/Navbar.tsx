"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-widest gradient-text">
          FORGE
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#features" className="hover:text-white transition-colors">Technology</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#products"
            className="px-5 py-2 rounded-full bg-[#ff5000] text-white text-sm font-semibold hover:bg-[#ff6a1a] transition-colors"
          >
            Shop Now
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4 text-sm font-medium text-white/70">
          <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Products</a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Technology</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Contact</a>
          <a href="#products" onClick={() => setMenuOpen(false)} className="mt-2 px-5 py-2.5 rounded-full bg-[#ff5000] text-white text-center font-semibold hover:bg-[#ff6a1a] transition-colors">
            Shop Now
          </a>
        </div>
      )}
    </nav>
  );
}
