import React from "react";
import ShopCard from "./ShopCard";

const BestSelling = () => {
  return (
    <div className="px-20">
      <div className="flex justify-between">
        <h4 className="stroke-red-500 text-white font-geist font-extrabold text-4xl text-stroke-sm">
          BEST <span className="text-[#181818]">SELL</span>ING
        </h4>
        <div className="flex gap-8">
          {/* PREV */}
          <div className="flex flex-col justify-center items-center group cursor-pointer">
            <span className="transition-all duration-300 group-hover:text-red-500">
              PREV
            </span>
            <svg
              width="59"
              height="12"
              viewBox="0 0 59 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-x-2 group-hover:scale-110 group-hover:rotate-6">
              <line
                x1="59"
                y1="6"
                x2="5"
                y2="6"
                stroke="#181818"
                strokeWidth="2"
              />
              <path d="M6 0L6 12L-5.24537e-07 6L6 0Z" fill="#181818" />
            </svg>
          </div>

          {/* NEXT */}
          <div className="flex flex-col justify-center items-center group cursor-pointer">
            <span className="transition-all duration-300 group-hover:text-red-500">
              NEXT
            </span>
            <svg
              width="59"
              height="12"
              viewBox="0 0 59 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110 group-hover:-rotate-6">
              <line y1="6" x2="54" y2="6" stroke="#181818" strokeWidth="2" />
              <path d="M53 0L53 12L59 6L53 0Z" fill="#181818" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap">
        <div className="flex-none w-1/5">
          <ShopCard />
        </div>
        <div className="flex-none w-1/5">
          <ShopCard />
        </div>
        <div className="flex-none w-1/5">
          <ShopCard />
        </div>
        <div className="flex-none w-1/5">
          <ShopCard />
        </div>
        <div className="flex-none w-1/5">
          <ShopCard />
        </div>
        <div className="flex-none w-1/5">
          <ShopCard />
        </div>{" "}
        {/* Ini akan menyebabkan scrolling horizontal */}
      </div>
    </div>
  );
};

export default BestSelling;
