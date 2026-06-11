import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoPromo from "@/components/VideoPromo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoPromo />
      </main>
      <Footer />
    </>
  );
}
