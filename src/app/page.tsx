import Banner from "@/components/Banner";
import BestSelling from "@/components/BestSelling";
import FeatureBanner from "@/components/FeatureBanner";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Navbar />
      <Hero />
      <Shop />
      <Headline />
      <BestSelling />
      <FeatureBanner />
      <Services />
      <Footer />
    </div>
  );
}
