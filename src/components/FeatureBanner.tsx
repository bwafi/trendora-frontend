import Image from "next/image";
import CtaButton from "./ui/CtaButton";

const FeatureBanner = () => {
  return (
    <div className="w-full flex flex-wrap gap-1">
      <div className="w-full h-[530px] relative">
        <Image
          src="/kids-banner.jpg"
          fill
          alt="Banner"
          className="object-cover object-[0%_75%]"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <CtaButton title="KIDS" />
        </div>
      </div>
      <div className="w-2/3 h-[630px] relative">
        <Image
          src="/women-banner.jpg"
          fill
          alt="Banner"
          className="object-cover"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <CtaButton title="WOMEN" className="bg-white text-black" />
        </div>
      </div>
      <div className="w-[33%] h-[630px] relative">
        <Image
          src="/sneaker-banner.jpg"
          fill
          alt="Banner"
          className="object-cover"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <CtaButton title="SNEAKERS" className="text-white" />
        </div>
      </div>
      <div className="w-[33%] h-[630px] relative">
        <Image
          src="/sport-banner.jpg"
          fill
          alt="Banner"
          className="object-cover object-[100%_75%]"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <CtaButton title="SPORTS" className="text-white" />
        </div>
      </div>
      <div className="w-2/3 h-[630px] relative">
        <Image
          src="/men-banner.jpg"
          fill
          alt="Banner"
          className="object-cover"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
          <CtaButton title="MEN" className="bg-white text-black" />
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
