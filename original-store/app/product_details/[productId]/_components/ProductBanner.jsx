import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCarousel from "./ProductCarousel";

const ProductBanner = ({ product, isLoading }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // [gallery, setGallery] = useState(0);

  // const prevSlide = ()=> {
  //   const isFirstSlide = currentImageIndex === 0
  //   const newIndex = isFirstSlide ? gallery.length - 1 : currentImageIndex -1
  //   setCurrentImageIndex(newIndex)
  // },
  // nextSlide = ()=> {
  //   const isLastSlide = currentImageIndex === gallery.length -1
  //   const newIndex = isLastSlide ? 0 : currentImageIndex + 1
  //   setCurrentImageIndex(newIndex)
  // };

  // useEffect(() => {
  //   if (product?.attributes?.gallery?.data) {
  //     setGallery(product?.attributes?.gallery?.data);
  //   }
  // }, [product]);

  if (isLoading) return <Loading />;

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
                         hover:grayscale-0 hover:scale-90"
              alt="Banner"
              width={78}
              height={78}
              key={img}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
      </div>
      <ProductCarousel product={product} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
      {/* {gallery[currentImageIndex]?.attributes?.url ? (
        <div
          className="object-fit relative p-4 flex justify-centerrelative rounded-lg
                      sm:h-[340px] h-[200px] min-w-[250px] sm:w-[473px] group flex-initial mx-auto"
        >
          <Image
            src={gallery[currentImageIndex].attributes.url}
            className="object-cover w-full group-hover:scale-125 hover:shadow-2xl hover:z-50
                     transition duration-500 cursor-pointer "
            alt="Banner_1"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative w-full">
            <ChevronLeft onClick={prevSlide} className="hidden group-hover:block absolute top-[50%] -start-10 transition duration-500 -translate-x-0 translate-y-[-50%] rounded-full p-1 bg-black/20 text-black cursor-pointer z-50 group-hover:scale-125 size-6 md:size-8" />
            <ChevronRight onClick={nextSlide} className="hidden group-hover:block absolute top-[50%] -end-10 transition duration-500 -translate-x-0 translate-y-[-50%] rounded-full p-1 bg-black/20 text-black cursor-pointer z-50 group-hover:scale-125 size-6 md:size-8" />
          </div>
        </div>
      ) : (
        <h1>Image Loading..</h1>
      )} */}
    </div>
  );
};

export default ProductBanner;
