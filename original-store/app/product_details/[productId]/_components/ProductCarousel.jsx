import Image from "next/image";
import React from "react";

const ProductCarousel = ({ product }) => {
  return (
      <div className="relative w-full">
        <div className="p-4 rounded-lg bg-green-400">
          <div className="">
            <Image
              src={product?.attributes?.image?.data?.attributes?.url}
              className="block w-full h-full"
              alt="Banner_1"
              width={500}
              height={480}
            />
          </div>
        </div>
    </div>
  );
};

export default ProductCarousel;
