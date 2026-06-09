import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-[#1e2a3a]"
      style={{ background: "#0e1726" }}
    >
      <div className="max-w-[1440px] mx-auto px-[150px] py-16 flex items-center justify-between">
        <Image
          src="/assets/forge-logo.png"
          alt="FORGE"
          width={60}
          height={17}
          className="object-contain opacity-60"
        />

        <p
          className="text-[#3a3a3c] text-[13px]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          © {new Date().getFullYear()} FORGE Audio Systems. All rights reserved.
        </p>

        <nav className="flex items-center gap-8">
          {["Features", "Specs", "Own it first"].map((link) => (
            <a
              key={link}
              href={link === "Own it first" ? "#preorder" : `#${link.toLowerCase()}`}
              className="text-[#808080] text-sm hover:text-[#e8e4dc] transition-colors"
              style={{ fontFamily: "var(--font-exo2)" }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
