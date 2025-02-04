import Image from "next/image";
import RatingStars from "./RatingStars";

const ShopCard = () => {
  return (
    <div className="">
      <div className="max-w-sm rounded overflow-hidden bg-white p-4 w-full">
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
        <div className="font-bold text-xl mb-2 mt-4">Nike Court Vision Lo</div>
        <p className="text-gray-700 text-base">$160</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <RatingStars totalReviews={1500} rating={2.7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
