"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
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
