import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col items-center"
      style={{
        background:
          "radial-gradient(ellipse 140% 100% at 50% 0%, #0a244d 0%, #0e1726 60%)",
      }}
    >
      {/* Noise texture — Multi type, size 8.9, density 100%, opacity 15% (from Figma) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.15, mixBlendMode: "soft-light" }}
      >
        <filter id="hero-noise-filter" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.11"
            numOctaves="2"
            stitchTiles="stitch"
            result="turbulence"
          />
          {/* Force full opacity so the soft-light blend reads at full strength */}
          <feColorMatrix
            in="turbulence"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 1"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise-filter)" />
      </svg>

      {/* Blue glow blob — inline SVG so feGaussianBlur renders (blocked in <img>) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none z-[0]"
        style={{ top: "-12%", width: "90%", maxWidth: "1268px" }}
      >
        <svg
          viewBox="0 0 1267.84 1383.12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          overflow="visible"
        >
          <g filter="url(#hero-glow-blur)">
            <path
              d="M942.593 352.517C879.128 263.666 743.131 231.027 630.708 227.4C518.284 227.4 451.192 267.292 393.167 303.558C335.142 339.824 262.61 434.115 235.411 570.111C208.211 706.108 255.357 845.731 300.689 936.395C346.021 1027.06 342.395 1139.48 409.486 1153.99C476.578 1168.5 534.603 1086.9 618.014 1086.9C701.426 1086.9 773.957 1150.36 822.916 1139.48C871.875 1128.6 882.754 1070.58 926.273 1007.11C969.792 943.648 1006.06 836.664 1033.26 707.921C1060.46 579.178 1006.06 441.368 942.593 352.517Z"
              fill="url(#hero-glow-gradient)"
            />
          </g>
          <defs>
            <filter
              id="hero-glow-blur"
              x="5.1856e-06"
              y="0"
              width="1267.84"
              height="1383.12"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur stdDeviation="113.45" />
            </filter>
            <radialGradient
              id="hero-glow-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(633.918 691.558) rotate(-133.408) scale(377.392 377.392)"
            >
              <stop stopColor="#A3C1F2" />
              <stop offset="1" stopColor="#1E6AE1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Headphone photo — bleeds from top, sits above glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[79%] max-w-[1136px] pointer-events-none select-none z-[2]"
        style={{ top: "-32px" }}
      >
        <Image
          src="/assets/headphone-hero.png"
          alt=""
          width={1136}
          height={998}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Top blur band */}
      <div
        className="absolute top-0 left-0 right-0 h-[260px] pointer-events-none backdrop-blur-[6px] z-[3]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />

      {/* Bottom gradient fade — covers glow bleed in lower half */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(14,23,38,0.7) 65%, #0e1726 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 mt-[38vh]">
        {/* FORGE small wordmark above ALLOY */}
        <div className="mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/forge-logo.svg"
            alt="FORGE"
            width={80}
            height={22}
            className="object-contain opacity-90"
          />
        </div>

        {/* ALLOY cutout — locked to natural 842×199 SVG aspect ratio */}
        <div className="w-full max-w-[842px]" style={{ aspectRatio: "842 / 199" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/alloy-text.svg"
            alt="ALLOY"
            width={842}
            height={199}
            className="w-full h-full"
          />
        </div>

        {/* Tagline */}
        <h1
          className="text-[#e8e4dc] text-[32px] lg:text-[40px] font-normal mt-5"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Everything else is noise
        </h1>

        {/* Body */}
        <p
          className="text-[#e8e4dc] text-base lg:text-[20px] font-normal mt-6 max-w-[560px] leading-snug"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Your next headphones with 4 mics scanning 360° of ambient noise.
          Only your music gets in.
        </p>

        {/* CTA */}
        <a
          href="#preorder"
          className="mt-10 bg-[#d4ef3b] text-[#1c1c1e] text-base font-bold px-5 py-[10px] rounded-[5px] hover:brightness-110 transition-all inline-block"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Own it first
        </a>
      </div>

      {/* Bottom spacer */}
      <div className="h-24" />
    </section>
  );
}
