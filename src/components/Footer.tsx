export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black tracking-widest gradient-text mb-4">FORGE</div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Premium audio for those who demand perfection. Berlin, Germany.
            </p>
          </div>

          {[
            {
              title: "Products",
              links: ["Forge X1 Pro", "Forge Studio", "Forge Sport", "Accessories"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Investors"],
            },
            {
              title: "Support",
              links: ["Help Center", "Warranty", "Returns", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/30 text-sm hover:text-white/70 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/20 text-xs">
          <span>© 2025 FORGE Audio GmbH. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
