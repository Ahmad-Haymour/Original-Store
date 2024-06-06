import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = ({ product, currentImageIndex, setCurrentImageIndex }) => {
  const [gallery, setGallery] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentImageIndex === 0;
      const newIndex = isFirstSlide
        ? gallery.length - 1
        : currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
    },
    nextSlide = () => {
      const isLastSlide = currentImageIndex === gallery.length - 1;
      const newIndex = isLastSlide ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
    };

  useEffect(() => {
    if (product?.attributes?.gallery?.data) {
      setGallery(product?.attributes?.gallery?.data);
    }
  }, [product]);

  return (
      gallery[currentImageIndex]?.attributes?.url ? (
        <div
          className="object-fit relative p-4 flex justify-center rounded-lg sm:h-[340px] h-[200px] min-w-[250px] sm:w-[473px] group flex-initial mx-auto"
        >
          <Image
            src={gallery[currentImageIndex].attributes.url}
            className="object-cover group-hover:scale-125 hover:shadow-2xl dark:hover:shadow-xl dark:shadow-gray z-40 transition-transform duration-500 cursor-pointer h-auto w-auto rounded"
            alt="Banner_1"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative w-full">
            <ChevronLeft
              onClick={prevSlide}
              className="hidden group-hover:block absolute top-[50%] -start-10 transition duration-500 -translate-x-0 translate-y-[-50%] rounded-full p-1 bg-black/20 text-black cursor-pointer z-40 group-hover:scale-125 size-6 md:size-8"
            />
            <ChevronRight
              onClick={nextSlide}
              className="hidden group-hover:block absolute top-[50%] -end-10 transition duration-500 -translate-x-0 translate-y-[-50%] rounded-full p-1 bg-black/20 text-black cursor-pointer z-40 group-hover:scale-125 size-6 md:size-8"
            />
          </div>
        </div>
      ) : (
        <h1>Image Loading..</h1>
      )
  );
};

export default ProductCarousel;
