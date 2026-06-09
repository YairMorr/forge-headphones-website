import Image from "next/image";

export default function FeatureLatency() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#0e1726" }}
    >
      {/* Headphone close-up — right, bleeding edge */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] pointer-events-none select-none overflow-hidden">
        <Image
          src="/assets/headphone-latency.png"
          alt=""
          width={900}
          height={900}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-auto max-w-none"
        />
      </div>

      {/* Fade from left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0e1726 30%, rgba(14,23,38,0.85) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[150px] w-full py-32">
        {/* Section nav */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-3 h-px bg-[#3a3a3c]" />
            <span
              className="text-[#3a3a3c] text-base"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              01 noise cancellation
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-px bg-[#3a3a3c]" />
            <span
              className="text-[#3a3a3c] text-base"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              02 multiple audio sources
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-px bg-[#e8e4dc]" />
            <span
              className="text-[#e8e4dc] text-base"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              03 low latency
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2
          className="text-[#e8e4dc] text-[64px] font-black uppercase leading-none max-w-[415px]"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          18ms. Always.
        </h2>

        {/* Body */}
        <p
          className="text-[#e8e4dc] text-[20px] font-normal mt-[50px] max-w-[415px] leading-snug"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Latency this low is built into the hardware. Audio lands the moment
          it happens — every frame, every cut, every beat. You stop thinking
          about sync because there&apos;s nothing to think about.
        </p>
      </div>
    </section>
  );
}
