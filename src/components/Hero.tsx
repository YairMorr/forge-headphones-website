export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#ff5000]/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#ff8c00]/5 blur-[80px]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24 lg:pt-0">
        {/* Left — Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff5000]/30 bg-[#ff5000]/10 text-[#ff8c00] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5000] animate-pulse" />
            New — Forge X1 Pro
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="block text-white">FORGED</span>
            <span className="block text-white">FOR THE</span>
            <span className="block gradient-text">OBSESSED.</span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed max-w-md mb-10">
            Precision-engineered audio for those who refuse to settle.
            Every frequency tuned. Every driver hand-tested.
            This is what perfection sounds like.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-4 rounded-full bg-[#ff5000] text-white font-bold text-sm tracking-wide hover:bg-[#ff6a1a] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,80,0,0.4)]"
            >
              Explore Collection
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
            {[
              { value: "40mm", label: "Driver Size" },
              { value: "98dB", label: "Sensitivity" },
              { value: "50h", label: "Battery Life" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Headphone visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[420px] h-[420px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[#ff5000]/20 animate-glow-pulse" />
            <div className="absolute inset-8 rounded-full border border-[#ff5000]/10" />

            {/* SVG headphone illustration */}
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-72 h-72 drop-shadow-[0_0_60px_rgba(255,80,0,0.4)]"
              >
                {/* Headband */}
                <path
                  d="M60 150 C60 90 90 50 150 50 C210 50 240 90 240 150"
                  stroke="url(#headband-grad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Left cup */}
                <rect x="28" y="135" width="52" height="80" rx="22" fill="url(#cup-grad-l)" />
                <rect x="36" y="145" width="36" height="60" rx="16" fill="#1a1a1a" />
                <circle cx="54" cy="175" r="10" fill="url(#driver-grad)" opacity="0.6" />
                {/* Right cup */}
                <rect x="220" y="135" width="52" height="80" rx="22" fill="url(#cup-grad-r)" />
                <rect x="228" y="145" width="36" height="60" rx="16" fill="#1a1a1a" />
                <circle cx="246" cy="175" r="10" fill="url(#driver-grad)" opacity="0.6" />
                {/* Cable left */}
                <line x1="54" y1="215" x2="54" y2="240" stroke="#ff5000" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                {/* Accent dots */}
                <circle cx="54" cy="140" r="4" fill="#ff5000" opacity="0.8" />
                <circle cx="246" cy="140" r="4" fill="#ff5000" opacity="0.8" />
                {/* FORGE text on right cup */}
                <text x="246" y="180" textAnchor="middle" fontSize="6" fill="#ff5000" fontWeight="700" letterSpacing="1" opacity="0.9">FORGE</text>

                <defs>
                  <linearGradient id="headband-grad" x1="60" y1="100" x2="240" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff5000" />
                    <stop offset="50%" stopColor="#ff8c00" />
                    <stop offset="100%" stopColor="#ff5000" />
                  </linearGradient>
                  <linearGradient id="cup-grad-l" x1="28" y1="135" x2="80" y2="215" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111111" />
                  </linearGradient>
                  <linearGradient id="cup-grad-r" x1="220" y1="135" x2="272" y2="215" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111111" />
                  </linearGradient>
                  <radialGradient id="driver-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff5000" />
                    <stop offset="100%" stopColor="#ff5000" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#111] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-white/40 mb-0.5">Sound Quality</div>
              <div className="flex items-center gap-2">
                <div className="text-lg font-black text-white">9.8</div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-4 rounded-full ${i < 4 ? "bg-[#ff5000]" : "bg-[#ff5000]/30"}`} style={{ height: `${[16, 20, 14, 18, 10][i]}px` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-4 -left-4 bg-[#111] border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-xs text-white/40 mb-0.5">Active Noise Cancel</div>
              <div className="text-sm font-bold text-[#ff8c00]">-42dB</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
