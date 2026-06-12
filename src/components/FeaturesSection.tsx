"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  { id: "noise-cancellation", label: "01 noise cancellation" },
  { id: "multi-source", label: "02 multiple audio sources" },
  { id: "low-latency", label: "03 low latency" },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#1c1c1e]">
      {/* Sticky title slider */}
      <div className="sticky top-0 h-dvh hidden lg:flex items-center pointer-events-none z-20">
        <div className="relative ml-[67px] flex flex-col gap-24 pointer-events-auto">
          <div className="absolute left-[5px] -top-24 -bottom-24 w-px bg-[#3a3a3c]" />
          {features.map((feature, i) => (
            <a
              key={feature.id}
              href={`#${feature.id}`}
              className="relative flex items-center gap-[18px] pl-[18px]"
            >
              <span
                className="absolute left-0 h-px w-[11px] transition-colors duration-300"
                style={{ background: active === i ? "#e8e4dc" : "#3a3a3c" }}
              />
              <span
                className="text-base whitespace-nowrap transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-exo2)",
                  color: active === i ? "#e8e4dc" : "#3a3a3c",
                }}
              >
                {feature.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 01 — Noise cancellation */}
      <div
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        id="noise-cancellation"
        className="relative min-h-[150dvh] flex items-center overflow-hidden"
      >
        <Image
          src="/assets/headphone-feature-large.png"
          alt=""
          fill
          className="object-cover object-right pointer-events-none select-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1c1c1e 35%, transparent 70%)" }}
        />
        <div className="relative z-10 px-[150px] max-w-[700px]">
          <h2
            className="text-[64px] font-black uppercase leading-tight max-w-[560px]"
            style={{ fontFamily: "var(--font-exo2)", color: "#e8e4dc" }}
          >
            <span style={{ color: "#1e6ae1" }}>−42dB.</span> Nothing gets through
          </h2>
          <p
            className="text-[20px] mt-[50px] max-w-[560px] leading-snug"
            style={{ fontFamily: "var(--font-exo2)", color: "#e8e4dc" }}
          >
            A four-mic array scans your environment in 360° and strips it away —
            frequency by frequency, in real time. Not reduced. Removed. What&apos;s
            left is only what you chose to hear.
          </p>
        </div>
      </div>

      {/* 02 — Multiple audio sources */}
      <div
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        id="multi-source"
        className="relative min-h-[150dvh] flex items-center overflow-hidden"
      >
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[35%] max-w-[502px] aspect-[502.14/441.31] pointer-events-none select-none">
          <Image src="/assets/headphone-feature-small.png" alt="" fill className="object-contain" />
        </div>
        <div className="relative z-10 px-[150px] max-w-[700px]">
          <h2
            className="text-[64px] font-black uppercase leading-tight max-w-[560px]"
            style={{ fontFamily: "var(--font-exo2)", color: "#e8e4dc" }}
          >
            Two devices. One mix.
          </h2>
          <p
            className="text-[20px] mt-[50px] max-w-[560px] leading-snug"
            style={{ fontFamily: "var(--font-exo2)", color: "#e8e4dc" }}
          >
            Connected to your laptop and phone at the same time with independent
            volume per source. A call comes in over your mix — you hear both, you
            control both, you never switch anything. Your workflow stays unbroken.
          </p>
        </div>
      </div>

      {/* 03 — Low latency */}
      <div
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        id="low-latency"
        className="relative min-h-[150dvh] flex items-center overflow-hidden"
      >
        <Image
          src="/assets/headphone-feature-large.png"
          alt=""
          fill
          className="object-cover object-right scale-x-[-1] pointer-events-none select-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1c1c1e 35%, transparent 70%)" }}
        />
        <div className="relative z-10 px-[150px] max-w-[700px]">
          <h2
            className="text-[64px] font-black uppercase leading-tight max-w-[415px]"
            style={{ fontFamily: "var(--font-exo2)", color: "#e8e4dc" }}
          >
            18ms. Always.
          </h2>
          <p
            className="text-[20px] mt-[50px] max-w-[415px] leading-snug"
            style={{ fontFamily: "var(--font-exo2)", color: "#e8e4dc" }}
          >
            Latency this low is built into the hardware. Audio lands the moment it
            happens — every frame, every cut, every beat. You stop thinking about
            sync because there&apos;s nothing to think about.
          </p>
        </div>
      </div>
    </section>
  );
}
