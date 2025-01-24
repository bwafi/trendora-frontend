import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full px-20">
      <div className="w-full aspect-[2.68/1]">
        <Image
          src={"/trendora-your-style-your-statement.webp"}
          width={2000}
          height={500}
          priority
          alt={"Trendora - Your Style, Your Statement"}
        />
      </div>
    </div>
  );
};

export default Hero;
