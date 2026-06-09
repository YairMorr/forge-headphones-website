import Image from "next/image";

const specs = [
  { label: "Driver Size", value: "50mm" },
  { label: "Frequency Response", value: "5Hz – 40kHz" },
  { label: "Impedance", value: "32Ω" },
  { label: "Active Noise Cancellation", value: "−42dB" },
  { label: "Latency", value: "18ms" },
  { label: "Connectivity", value: "Bluetooth 5.3, dual device simultaneous" },
  { label: "Codec Support", value: "LDAC, aptX Adaptive, AAC" },
  { label: "Mic Array", value: "4-mic beamforming" },
  { label: "Battery Life", value: "36hr (ANC on), 48hr (ANC off)" },
  { label: "Charge Time", value: "90min full, 10min for 5hr" },
  { label: "Weight", value: "310g" },
  { label: "Cable", value: "USB-C charging, 3.5mm analog input" },
  { label: "Water Resistance", value: "IPX4" },
];

export default function Specs() {
  return (
    <section
      id="specs"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#0e1726" }}
    >
      {/* Headphone photo — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] max-w-[720px] pointer-events-none select-none">
        <Image
          src="/assets/headphone-specs.png"
          alt=""
          width={720}
          height={720}
          className="w-full h-auto"
        />
      </div>

      {/* Left fade over the headphone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0e1726 45%, rgba(14,23,38,0.7) 65%, transparent 85%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[150px] w-full py-32">
        {/* Section header */}
        <p
          className="text-[#3a3a3c] text-sm tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          FG-01 / ALLOY
        </p>
        <h2
          className="text-[#e8e4dc] text-[64px] font-black uppercase leading-none mb-16"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          The Numbers
        </h2>

        {/* Spec table */}
        <div className="flex flex-col w-full max-w-[560px]">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between py-4 border-b border-[#1e2a3a]"
            >
              <span
                className="text-[#808080] text-sm"
                style={{ fontFamily: "var(--font-exo2)" }}
              >
                {spec.label}
              </span>
              <span
                className="text-[#e8e4dc] text-sm text-right ml-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#preorder"
          className="mt-14 inline-block bg-[#d4ef3b] text-[#1c1c1e] text-base font-bold px-5 py-[10px] rounded-[5px] hover:brightness-110 transition-all"
          style={{ fontFamily: "var(--font-exo2)" }}
        >
          Own it first
        </a>
      </div>
    </section>
  );
}
