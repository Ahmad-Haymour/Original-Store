import Image from "next/image";
import React, { useState } from "react";
import ProductCarousel from "./ProductCarousel";
import Loading from "../Loading";

const ProductBanner = ({ product, isLoading }) => {
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

  // const [ mainImage, setMainImage ] = useState(product?.attributes?.image?.data?.attributes?.url)
  const [ mainImage, setMainImage ] = useState(gallery[0])

  if(isLoading) return <Loading/>

  return (
    <div
      className="flex justify-center lg:justify-start items-center flex-1
                    overflow-hidden rounded bg-white 
                    h-full sm:h-[380px] md:h-[340px]" 
    >
      {/* H 53 , W 80 */}
      <div 
        className="rounded h-[200px] sm:h-[340px] bg-red-300 
                  flex flex-col items-start divide-y-4
                  overflow-y-scroll scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-blue-100"
      >
        {gallery.map((img) => (
          <Image
            src={img}
            className="object-cover"
            alt="Banner"
            width={78}
            height={78}
            key={img}
            onClick={()=>setMainImage(img)}
          />
        ))}
      </div>
        <div className="relative rounded-lg 
                        sm:h-[340px] h-[200px] min-w-[250px] sm:w-[473px]
                        object-fit p-4 flex justify-center">
          <Image
            // src={product?.attributes?.image?.data?.attributes?.url}
            src={mainImage && mainImage}
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
