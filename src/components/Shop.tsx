import React from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
  return (
    <div className="px-20 mt-28">
      <div className="flex gap-9">
        <button className="bg-[#4A4C6C] px-[28px] py-2 rounded-[100px] text-[#F4F4F4] font-bold tracking-tight border-4 border-[#7C7EA1] drop-shadow-[0_5px_8px_rgba(74,76,108,0.4)] transition-all duration-300 ease-in-out hover:bg-[#5A5C7C] hover:border-[#8C8EAA] hover:scale-105 hover:drop-shadow-[0_8px_12px_rgba(74,76,108,0.6)] hover:translate-y-[-2px]">
          NEW ARRIVALS
        </button>
        <button className="bg-[#77794E] px-[28px] py-2 rounded-[100px] text-[#F4F4F4] font-bold tracking-tight border-4 border-[#9FA16D] drop-shadow-[0_5px_8px_rgba(74,76,108,0.4)] transition-all duration-300 ease-in-out hover:bg-[#898B5C] hover:border-[#B1B37A] hover:scale-105 hover:drop-shadow-[0_8px_12px_rgba(74,76,108,0.6)] hover:translate-y-[-2px]">
          WHAT’S TRENDING
        </button>
      </div>
      <div className="grid grid-cols-5 mt-16">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default Shop;
