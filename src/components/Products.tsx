const products = [
  {
    id: 1,
    name: "Forge X1 Pro",
    tagline: "Flagship Wireless",
    price: "$449",
    badge: "New",
    badgeColor: "bg-[#ff5000]",
    features: ["40mm Titanium Driver", "50hr Battery", "ANC -42dB", "Hi-Res Audio"],
    color: "#ff5000",
  },
  {
    id: 2,
    name: "Forge Studio",
    tagline: "Professional Monitor",
    price: "$329",
    badge: "Best Seller",
    badgeColor: "bg-[#ff8c00]",
    features: ["50mm Beryllium Driver", "Wired/Wireless", "Flat Response", "Foldable"],
    color: "#ff8c00",
  },
  {
    id: 3,
    name: "Forge Sport",
    tagline: "Active Performance",
    price: "$199",
    badge: "Waterproof",
    badgeColor: "bg-white/10",
    features: ["Sport Fit Design", "IP68 Rated", "24hr Battery", "Ambient Mode"],
    color: "#ffb700",
  },
];

function HeadphoneIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        d="M35 110 C35 55 65 25 100 25 C135 25 165 55 165 110"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="14" y="95" width="38" height="58" rx="16" fill="#1e1e1e" stroke={color} strokeWidth="1.5" />
      <rect x="22" y="104" width="22" height="40" rx="10" fill="#111" />
      <circle cx="33" cy="124" r="7" fill={color} opacity="0.5" />
      <rect x="148" y="95" width="38" height="58" rx="16" fill="#1e1e1e" stroke={color} strokeWidth="1.5" />
      <rect x="156" y="104" width="22" height="40" rx="10" fill="#111" />
      <circle cx="167" cy="124" r="7" fill={color} opacity="0.5" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#ff5000] text-sm font-semibold tracking-widest uppercase mb-3">Collection</p>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Choose Your <span className="gradient-text">Weapon</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto">
            Three tiers of sonic perfection. Each one engineered to dominate its category.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="card-hover relative rounded-3xl border border-white/10 bg-[#111] overflow-hidden group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Card top glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }}
              />

              <div className="p-8">
                {/* Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-6 ${product.badgeColor}`}>
                  {product.badge}
                </span>

                {/* Headphone visual */}
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <div
                    className="absolute inset-0 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ background: product.color }}
                  />
                  <HeadphoneIcon color={product.color} />
                </div>

                {/* Info */}
                <h3 className="text-2xl font-black text-white mb-1">{product.name}</h3>
                <p className="text-white/40 text-sm mb-6">{product.tagline}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1 h-1 rounded-full" style={{ background: product.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-white">{product.price}</span>
                  <button
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ background: product.color }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
