import Image from "next/image";

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
      <div className="my-20">
        <div className="max-w-sm rounded overflow-hidden bg-white p-4 w-[270px]">
          <div className="relative w-full h-[250px]">
            <Image
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png"
              alt="Nike Court Vision Lo"
              layout="fill"
              objectFit="cover"
              unoptimized={true}
              className="rounded"
            />
          </div>
          <div className="font-bold text-xl mb-2 mt-4">
            Nike Court Vision Lo
          </div>
          <p className="text-gray-700 text-base">$160</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-xl">******</span>
            <span className="text-gray-600 ml-2">(88)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
