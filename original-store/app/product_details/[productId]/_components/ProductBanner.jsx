import Image from "next/image";
import React from "react";
import ProductCarousel from "./ProductCarousel";

const ProductBanner = ({ product }) => {
  const gallery = [
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
    product?.attributes?.image?.data?.attributes?.url,
  ];

  return (
    <div className="flex justify-center items-center flex-1
                    overflow-hidden rounded
                    py-8 px-12 bg-gray-600 mx-auto
                    h-[300px] sm:h-[420px] md:h-[450px]"
    >
      {/* H 53 , W 80 */}
      <div className="rounded h-[200px] sm:h-[340px] overflow-auto bg-red-300 flex flex-col items-start p-2 divide-y-8">
        {gallery.map((img) => (
          <Image
            src={img}
            className="object-cover"
            alt="Banner"
            width={78}
            height={78}
            key={img}
          />
        ))}
      </div>

      <div className=" relative rounded-lg sm:h-[340px] h-[200px] min-w-[250px] sm:w-[473px] object-fit p-4 flex justify-center">
        <Image
          src={product?.attributes?.image?.data?.attributes?.url}
          className="object-cover w-full"
          alt="Banner_1"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ProductBanner;
