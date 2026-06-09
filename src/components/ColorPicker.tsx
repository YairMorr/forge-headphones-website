"use client";

import { useState } from "react";
import Image from "next/image"; // used for headphone PNGs

const colors = [
  {
    name: "Voltage Blue",
    desc: "The colour of current under load.",
    rgb: "RGB 30.106.225 — Cool",
    status: "ACTIVE",
    swatch: "linear-gradient(225deg, #1f6eeb 2%, #1e4e9a 97%)",
    border: true,
    bg: "radial-gradient(ellipse 100% 100% at 50% 50%, #1e6ae1 0%, #1959bc 25%, #14479b 50%, #0f3672 75%, #0a244d 100%)",
    img: "/assets/headphone-blue.png",
  },
  {
    name: "Flux Orange",
    desc: "The glow of metal before it bends.",
    rgb: "RGB 200.212.0 — TEMP CRITICAL",
    status: "REACTIVE",
    swatch: "#c4622a",
    border: false,
    bg: "radial-gradient(ellipse 100% 100% at 50% 50%, #ff9356 0%, #d67740 25%, #ad5a2b 50%, #853e15 75%, #5c2100 100%)",
    img: "/assets/headphone-orange.png",
  },
  {
    name: "Ingot Green",
    desc: "The shade that forms when heat finally leaves.",
    rgb: "RGB 107.95.207 — TEMP AMBIENT",
    status: "STABLE",
    swatch: "#d4ef3b",
    border: false,
    bg: "radial-gradient(ellipse 100% 100% at 50% 50%, #a6bd23 0%, #8b9f1c 25%, #719115 50%, #576414 75%, #3d4607 100%)",
    img: "/assets/headphone-green.png",
  },
  {
    name: "Ember Dark",
    desc: "Afterglow radiance.",
    rgb: "RGB 160.82.45 — TEMP RESIDUAL",
    status: "COOLING",
    swatch: "#443762",
    border: false,
    bg: "radial-gradient(ellipse 100% 100% at 50% 50%, #6645b2 0%, #523695 25%, #3f2678 50%, #2b175a 75%, #17073d 100%)",
    img: "/assets/headphone-purple.png",
  },
];

export default function ColorPicker() {
  const [active, setActive] = useState(0);
  const color = colors[active];

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center transition-all duration-700"
      style={{ background: color.bg }}
    >
      {/* FORGE logo watermark behind headphone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/forge-logo.svg"
          alt=""
          className="w-64 lg:w-80 object-contain"
        />
      </div>

      {/* Headphone */}
      <div className="relative w-[75%] max-w-[900px] pointer-events-none select-none">
        <Image
          src={color.img}
          alt={color.name}
          width={900}
          height={900}
          className="w-full h-auto transition-opacity duration-500"
          key={active}
        />
      </div>

      {/* Bottom UI */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 px-[150px]">
        <div className="flex items-end justify-between">
          {/* Color name + desc */}
          <div>
            <p
              className="text-[#e8e4dc] text-base mb-1"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              {color.name}
            </p>
            <p
              className="text-[10px]"
              style={{ fontFamily: "var(--font-mono)", color: "#e8e4dc" }}
            >
              {color.desc}
            </p>
          </div>

          {/* Swatches */}
          <div className="flex items-center gap-[22px]">
            {colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-[5px] transition-all hover:scale-110 ${
                  i === active
                    ? "w-[60px] h-[60px] border border-[#e8e4dc]"
                    : "w-[40px] h-[40px]"
                }`}
                style={{
                  background: c.swatch,
                  boxShadow:
                    i === active ? "0 0 0 1px rgba(232,228,220,0.5)" : "none",
                }}
                aria-label={c.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Status indicator — left side, rotated */}
      <div
        className="absolute left-[150px] top-1/2 -translate-y-1/2"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span
          className="text-[#e8e4dc] text-[10px] tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {color.status}
        </span>
      </div>

      {/* RGB label — right side, rotated */}
      <div
        className="absolute right-[150px] top-1/2 -translate-y-1/2"
        style={{ writingMode: "vertical-rl" }}
      >
        <span
          className="text-[#e8e4dc] text-[10px] tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {color.rgb}
        </span>
      </div>
    </section>
  );
}
