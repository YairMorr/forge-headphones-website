import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoPromo from "@/components/VideoPromo";
import TransitionToFeatures from "@/components/TransitionToFeatures";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoPromo />
        <TransitionToFeatures />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
