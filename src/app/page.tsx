import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureANC from "@/components/FeatureANC";
import FeatureDualDevice from "@/components/FeatureDualDevice";
import FeatureLatency from "@/components/FeatureLatency";
import ColorPicker from "@/components/ColorPicker";
import Specs from "@/components/Specs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureANC />
        <FeatureDualDevice />
        <FeatureLatency />
        <ColorPicker />
        <Specs />
      </main>
      <Footer />
    </>
  );
}
