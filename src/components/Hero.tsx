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
      {/* Noise texture overlay — fractal noise at low opacity to match Figma grain */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      {/* Blue glow — behind the headphone, blurred radial light blob */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none z-[0]"
        style={{ top: "-14%", width: "88%", maxWidth: "1268px" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-glow.svg"
          alt=""
          className="w-full h-auto"
        />
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

      {/* Top blur band — matches the navbar backdrop from the Figma design */}
      <div
        className="absolute top-0 left-0 right-0 h-[260px] pointer-events-none backdrop-blur-[6px] z-[3]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />

      {/* Bottom gradient fade — blends headphone photo into background */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 100% 55% at 50% 10%, transparent 0%, transparent 30%, rgba(14,23,38,0.6) 55%, #0e1726 75%)",
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
