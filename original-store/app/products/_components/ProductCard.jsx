import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {

  return (
    <Link
      href={`/products/${product?.id}?brand=${product.attributes.brand}&model=${product.attributes.model}&color=${product.attributes.color}`}
      className="group shadow-md dark:shadow hover:shadow-2xl dark:shadow-gray bg-white dark:bg-dark-dark/40 overflow-hidden cursor-pointer w-40 sm:w-52 h-56 sm:h-72 text-light-text dark:text-dark-text rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <div className="relative h-[124px] sm:h-[170px] top-0 overflow-hidden">
        <img
          src={product?.attributes?.image?.data?.attributes?.url}
          alt="Main card"
          width={124}
          height={124}
          layout="fill"
          className="absolute inset-0 h-[124px] sm:h-[170px] w-full object-cover opacity-100 group-hover:opacity-0 rounded-t-lg "
        />

        { product?.attributes?.gallery?.data &&
          <img
          src={product?.attributes?.gallery?.data[1]?.attributes?.url || ''}
          alt="Main card"
          width={170}
          height={170}
          layout="fill"
          className="absolute inset-0 h-[124px] sm:h-[170px] w-full object-cover opacity-0 group-hover:opacity-100 rounded-t-lg"
        />}
        <Heart className="absolute top-3 right-2 text-red-500" />
      </div>

      <div className="pt-3 px-2 rounded-b-lg h-[105px] sm:h-[120px] flex flex-col justify-between border-t border-light-accent">

        <h2 className="capitalize text-sm text-center font-bold text-light-text dark:text-dark-text group-hover:underline group-hover:underline-offset-8 truncate">
          {product?.attributes?.brand}
        </h2>

        <div className="overflow-hidden text-center capitalize">
          {product?.attributes?.model}
        </div>

        <div className="h-[40px] text-xs flex justify-between items-center text-center border-t border-gray-700 rounded-b-lg">
          <p className="sm:text-sm font-light w-[50%]">{product?.attributes?.color}</p>
          <p className="sm:text-sm font-light w-[50%]">
            Ab { Math.floor(Math.random() * (200 - 80 + 1) ) + 80 } €
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
