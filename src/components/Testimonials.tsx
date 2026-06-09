const testimonials = [
  {
    quote: "I've tried everything from Bose to Sony to Audeze. Nothing comes close to what FORGE does at this price. The X1 Pro is simply the best headphone I've ever worn.",
    name: "Marcus T.",
    role: "Recording Engineer, NYC",
    rating: 5,
  },
  {
    quote: "The ANC is so good it scared me the first time I used it. Complete silence. My commute is now something I actually look forward to.",
    name: "Priya K.",
    role: "Software Engineer, London",
    rating: 5,
  },
  {
    quote: "As a mixing engineer, I need flat response and total accuracy. The Forge Studio delivers both without compromise. This is a professional tool.",
    name: "David R.",
    role: "Mix Engineer, Berlin",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff5000]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#ff5000] text-sm font-semibold tracking-widest uppercase mb-3">Reviews</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white">
            Trusted by the <span className="gradient-text">Obsessed</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-hover p-8 rounded-2xl border border-white/8 bg-[#111] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#ff8c00]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-white/8 pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff5000] to-[#ff8c00] flex items-center justify-center text-white text-sm font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
