const milestones = [
  { year: "2018", event: "FORGE founded in Berlin by audio engineers from Sennheiser and Sony" },
  { year: "2020", event: "First product launch — the Forge One. 12,000 units sold in 72 hours" },
  { year: "2022", event: "Introduced Adaptive ANC technology. Filed 8 patents" },
  { year: "2024", event: "Reached 1 million customers across 60 countries" },
  { year: "2025", event: "Launched the X1 Pro — our most advanced headphone ever made" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff5000]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Left — text */}
        <div>
          <p className="text-[#ff5000] text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
          <h2 className="text-5xl font-black text-white leading-tight mb-6">
            Built by Listeners,<br />
            <span className="gradient-text">For Listeners.</span>
          </h2>
          <p className="text-white/50 leading-relaxed mb-6">
            FORGE was born from frustration. Our founders — engineers who'd spent decades inside the world's top audio companies — were tired of products built for profit, not sound.
          </p>
          <p className="text-white/50 leading-relaxed mb-10">
            So in 2018, in a small workshop in Berlin, we started over. No compromises, no cost-cutting on what matters, no feature bloat. Just audio equipment that honors the music.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "1M+", label: "Happy Customers" },
              { value: "60+", label: "Countries" },
              { value: "14", label: "Awards Won" },
              { value: "8", label: "Patents Filed" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl border border-white/8 bg-[#111]">
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — timeline */}
        <div>
          <h3 className="text-white/40 text-sm font-semibold tracking-widest uppercase mb-8">Timeline</h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-[52px] top-3 bottom-3 w-px bg-white/10" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-[40px] text-right text-sm font-bold text-white/30">{m.year}</div>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#ff5000] relative z-10 ml-3" />
                  </div>
                  <div className="text-white/60 text-sm leading-relaxed pt-0.5">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
