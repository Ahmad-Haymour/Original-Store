import Image from "next/image";
import React, { useState } from "react";
// import Loading from "../Loading";
// import ProductCarousel from "./ProductCarousel";

const ProductBanner = ({ product, isLoading }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // if (isLoading) return <Loading />

  return (
    <div
      className="flex justify-center lg:justify-start items-center flex-1
                 rounded bg-white shadow-2xl h-full sm:h-[380px] md:h-[340px]"
    >
      <div className="rounded h-[200px] sm:h-[340px] flex-initial flex flex-col items-start divide-y-4 overflow-auto">
        {product &&
          product?.attributes?.gallery?.data?.map((img, index) => (
            <Image
              src={img?.attributes?.url}
              className="object-cover rounded cursor-pointer grayscale 
                         hover:grayscale-0 hover:scale-90 transition-transform"
              alt="Banner"
              width={78}
              height={78}
              key={img}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
      </div>

      {/* <ProductCarousel
        product={product}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      /> */}
    </div>
  );
};

export default ProductBanner;
