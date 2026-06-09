import Image from "next/image";

export default function FeatureDualDevice() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#0a0f1a" }}
    >
      {/* Headphone photo — upper right */}
      <div className="absolute right-0 top-0 w-[45%] max-w-[650px] pointer-events-none select-none">
        <Image
          src="/assets/headphone-dual.png"
          alt=""
          width={650}
          height={650}
          className="w-full h-auto"
        />
      </div>

      {/* Fade right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0a0f1a 40%, rgba(10,15,26,0.5) 65%, transparent 85%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[150px] w-full pt-32 pb-24">
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
            <div className="w-3 h-px bg-[#e8e4dc]" />
            <span
              className="text-[#e8e4dc] text-base"
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
          Two devices. One mix.
        </h2>

        {/* Body */}
        <p
          className="text-[#e8e4dc] text-[20px] font-normal mt-[50px] max-w-[560px] leading-snug"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Connected to your laptop and phone at the same time with independent
          volume per source. A call comes in over your mix — you hear both, you
          control both, you never switch anything. Your workflow stays unbroken.
        </p>

        {/* Device lineup */}
        <div className="flex items-end gap-12 mt-20">
          <Image
            src="/assets/device-watch.png"
            alt="Apple Watch"
            width={39}
            height={64}
            className="object-contain"
          />
          <Image
            src="/assets/device-iphone.png"
            alt="iPhone"
            width={69}
            height={136}
            className="object-contain"
          />
          <Image
            src="/assets/device-ipad.png"
            alt="iPad"
            width={162}
            height={209}
            className="object-contain"
          />
          <Image
            src="/assets/device-macbook.png"
            alt="MacBook"
            width={279}
            height={181}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
