"use client";

import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e1726]/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[150px] py-[56px] flex items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/forge-logo.svg"
          alt="FORGE"
          width={60}
          height={17}
          className="object-contain"
        />

        <div className="flex items-center gap-10">
          <a
            href="#features"
            className="text-[#e8e4dc] text-base hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Features
          </a>
          <a
            href="#specs"
            className="text-[#e8e4dc] text-base hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Specs
          </a>
          <a
            href="#preorder"
            className="bg-[#d4ef3b] text-[#1c1c1e] text-base font-bold px-5 py-[10px] rounded-[5px] hover:brightness-110 transition-all"
            style={{ fontFamily: "var(--font-exo2)" }}
          >
            Own it first
          </a>
        </div>
      </div>
    </nav>
  );
}
