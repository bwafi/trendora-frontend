import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  logo: string;
}

const ServiceCard = ({ title, desc, logo }: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="w-20 h-20 flex justify-center items-center relative bg-black/30 rounded-full p-4 before:content-[''] before:absolute before:block before:w-3/4 before:h-3/4 before:bg-black before:-z-10 before:rounded-full">
        <Image width={40} height={40} alt="Delivery Service" src={logo} />
      </div>
      <div className="text-center">
        <p className="font-bold text-2xl">{title}</p>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
