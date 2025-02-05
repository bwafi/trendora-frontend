import Banner from "@/components/Banner";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Navbar />
      <Hero />
      <Shop />
      <Headline />
    </div>
  );
}
