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
          <img
            src={gallery[currentImageIndex].attributes.url}
            className="object-cover group-hover:scale-125 hover:shadow-2xl dark:hover:shadow-xl dark:shadow-gray z-40 transition-transform duration-500 cursor-pointer h-auto w-auto rounded"
            alt="Banner_1"
            layout="fill"
            objectFit="cover"
          />
              <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
                  <ChevronLeft
                    onClick={prevSlide}
                    className="hidden group-hover:block transition duration-500 cursor-pointer left-4 bg-black/30 rounded-full p-2 size-10 md:size-12"
                  />
                  <ChevronRight
                    onClick={nextSlide}
                    className="hidden group-hover:block transition duration-500 cursor-pointer right-4 bg-black/30 rounded-full p-2 size-10 md:size-12"
                  />
              </div>
        </div>
      ) : (
        <h1>Image Loading..</h1>
      )
  );
};

export default ProductCarousel;
