const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Hi-Res Audio Certified",
    description: "40kHz frequency response. Hear the music exactly as the artist intended — every breath, every string, every nuance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Adaptive ANC",
    description: "Our AI-powered noise cancellation reads your environment 1000x/sec and adapts in real-time. Total silence, on demand.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "50-Hour Battery",
    description: "Charge once. Listen all week. When you do need power, 10 minutes gives you 5 hours — because your time matters.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" strokeLinecap="round"/>
      </svg>
    ),
    title: "Spatial Audio",
    description: "360° soundstage with head-tracking. Whether gaming, movies, or music — the sound moves with you, not at you.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Military-Grade Build",
    description: "Aerospace aluminum. Impact-resistant polycarbonate. Tested to MIL-STD-810H. Built to survive as much as you do.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round"/>
        <path d="M8 12s1.5 3 4 3 4-3 4-3" strokeLinecap="round"/>
        <path d="M9 9h.01M15 9h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Comfort Engineering",
    description: "Memory foam protein leather. 3D-hinged earcups. Balanced weight distribution. Wear for 12 hours, feel nothing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ff5000]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#ff5000] text-sm font-semibold tracking-widest uppercase mb-3">Technology</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Engineering <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Every component selected for a reason. Every decision backed by science.
            This is what separates FORGE from everything else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="card-hover p-7 rounded-2xl border border-white/8 bg-[#111] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff5000]/10 text-[#ff5000] flex items-center justify-center mb-5 group-hover:bg-[#ff5000]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
