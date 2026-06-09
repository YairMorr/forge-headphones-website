import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORGE ALLOY — Everything else is noise",
  description:
    "The FORGE ALLOY. Your next headphones with 4 mics scanning 360° of ambient noise. Only your music gets in.",
  openGraph: {
    title: "FORGE ALLOY — Everything else is noise",
    description: "Only your music gets in.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-[#0e1726] text-[#e8e4dc] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
