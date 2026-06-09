export default function CTA() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] p-12 lg:p-20 text-center">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff5000]/10 blur-[100px] rounded-full" />
          </div>

          {/* Top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#ff5000] to-transparent" />

          <div className="relative z-10">
            <p className="text-[#ff5000] text-sm font-semibold tracking-widest uppercase mb-4">Limited Launch Offer</p>
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Hear What<br />
              <span className="gradient-text">You&apos;ve Been<br />Missing.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Join 1 million listeners who chose not to settle.
              Free shipping. 60-day returns. 2-year warranty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="px-10 py-4 rounded-full bg-[#ff5000] text-white font-bold text-sm tracking-wide hover:bg-[#ff6a1a] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,80,0,0.5)]"
              >
                Shop the Collection
              </a>
              <a
                href="mailto:hello@forgearudio.com"
                className="px-10 py-4 rounded-full border border-white/20 text-white font-bold text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#ff5000]">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#ff5000]">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                60-Day Returns
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#ff5000]">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                2-Year Warranty
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#ff5000]">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Secure Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
