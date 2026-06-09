import Image from "next/image";

export default function FeatureANC() {
  return (
    <section
      id="features"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#0e1726" }}
    >
      {/* Headphone photo — right side, bleeding off edge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[800px] pointer-events-none select-none">
        <Image
          src="/assets/headphone-anc.png"
          alt=""
          width={800}
          height={800}
          className="w-full h-auto"
        />
      </div>

      {/* Fade from left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0e1726 35%, rgba(14,23,38,0.7) 55%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[150px] w-full py-32">
        {/* Section nav */}
        <div className="flex flex-col gap-2 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-3 h-px bg-[#e8e4dc]" />
            <span
              className="text-[#e8e4dc] text-base"
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
            <div className="w-3 h-px bg-[#3a3a3c]" />
            <span
              className="text-[#3a3a3c] text-base"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              03 low latency
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2
          className="text-[#e8e4dc] text-[64px] font-black uppercase leading-none max-w-[560px]"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          <span className="text-[#1e6ae1]">−42dB.</span> Nothing gets through
        </h2>

        {/* Body */}
        <p
          className="text-[#e8e4dc] text-[20px] font-normal mt-[50px] max-w-[560px] leading-snug"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          A four-mic array scans your environment in 360° and strips it away —
          frequency by frequency, in real time. Not reduced. Removed.
          What&apos;s left is only what you chose to hear.
        </p>
      </div>
    </section>
  );
}
