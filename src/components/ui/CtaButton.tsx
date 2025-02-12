import React from "react";

const CtaButton = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <button
      className={`bg-[#181818] font-bold font-cabinetGrotesk text-white px-5 py-2 transition duration-300 ease-in-out transform hover:skew-x-6 hover:scale-105 ${className}`}>
      {title}
    </button>
  );
};

export default CtaButton;
