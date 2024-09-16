import Image from "next/image";
import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel";

const ProductBanner = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div
      className="flex justify-center lg:justify-start items-center flex-1 rounded bg-light-background dark:bg-dark-background shadow-2xl dark:shadow-xl dark:shadow-gray h-full sm:h-[380px] md:h-[340px]"
    >
      <div className="h-[200px] sm:h-[340px] flex-initial flex flex-col items-start divide-y-4 overflow-auto custom-scrollbar">
        {product &&
          product?.attributes?.gallery?.data?.map((img, index) => (
            <img
              src={img?.attributes?.url}
              className="object-cover cursor-pointer grayscale hover:grayscale-0 hover:scale-90 transition-transform"
              alt="Banner"
              width={78}
              height={78}
              key={index}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
      </div>

      <ProductCarousel
        product={product}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default ProductBanner;
