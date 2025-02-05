import Image from "next/image";
import React from "react";

const Headline = () => {
  return (
    <div className="relative w-full min-h-[1100px] px-20 py-36 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap justify-center gap-5">
        <div className="relative w-[520px] h-[700px] group hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
          <Image
            src="https://www.adidas.co.id/media/wysiwyg/Teaser_carousel_Desktop_1050x1400px_4.jpg"
            alt="Nike Court Vision Lo"
            layout="fill"
            objectFit="cover"
            unoptimized={true}
            className="rounded"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded"></div>
          <div className="absolute flex flex-col text-white bottom-10 px-12 z-10">
            <span className="font-extrabold text-4xl">FAMOUS MUICHES</span>
            <button className="font-bold text-lg border border-white w-[120px] py-2 mt-2 transition duration-300 ease-in-out transform hover:scale-105 hover:skew-x-3 hover:bg-white hover:text-black hover:shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative w-[520px] h-[700px] mt-16 group hover:scale-105 hover:shadow-xl transition duration-500 ease-in-out">
          <Image
            src="https://www.adidas.co.id/media/wysiwyg/TAEKWONDO_Teaser-Carousel_1050x1400.png"
            alt="Nike Court Vision Lo"
            layout="fill"
            objectFit="cover"
            unoptimized={true}
            className="rounded"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded"></div>
          <div className="absolute flex flex-col text-white bottom-10 px-12 z-10">
            <span className="font-extrabold text-4xl">SPECIAL COLLECTION</span>
            <button className="font-bold text-lg border border-white w-[120px] py-2 mt-2 transition duration-300 ease-in-out transform hover:scale-105 hover:skew-x-3 hover:bg-white hover:text-black hover:shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
