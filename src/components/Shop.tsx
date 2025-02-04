import React from "react";
import ShopCard from "./ShopCard";

const Shop = () => {
  return (
    <div className="px-20 mt-28">
      <div className="flex gap-9">
        <button className="bg-[#4A4C6C] px-[28px] py-2 rounded-[100px] text-[#F4F4F4] font-bold tracking-tight border-4 border-[#7C7EA1]">
          NEW ARRIVALS
        </button>
        <button className="bg-[#77794E] px-[28px] py-2 rounded-[100px] text-[#F4F4F4] font-bold tracking-tight border-4 border-[#9FA16D]">
          WHAT’S TRENDING
        </button>
      </div>
      <div className="grid grid-cols-5">
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
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default Shop;
