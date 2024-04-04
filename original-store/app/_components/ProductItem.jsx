import { Heart, List, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <Link
      href={`/product_details/${product?.id}`}
      className="group hover:shadow-2xl bg-white overflow-hidden cursor-pointer 
                 w-40 sm:w-52 h-56 sm:h-72 text-black rounded-lg"
    >
      <div className="relative h-[124px] sm:h-[170px] top-0 overflow-hidden">
        <Image
          src={product?.attributes?.image?.data?.attributes?.url}
          alt="Main card"
          width={124}
          height={124}
          className="absolute inset-0 h-[124px] sm:h-[170px] w-full object-cover opacity-100 group-hover:opacity-0 rounded-t-lg "
        />

        { product?.attributes?.gallery?.data &&
          <Image
          // src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          src={product?.attributes?.gallery?.data[1]?.attributes?.url || ''}
          alt="Main card"
          width={170}
          height={170}
          className="absolute inset-0 h-[124px] sm:h-[170px] w-full object-cover opacity-0 group-hover:opacity-100 rounded-t-lg "
        />}

        <Heart className="absolute top-3 right-2 text-red-500" />
      </div>

      <div className="pt-3 px-2 rounded-b-lg h-[105px] sm:h-[120px] flex flex-col justify-between border-t-2 border-primary">

        <h2 className="text-sm text-center font-bold text-black group-hover:underline group-hover:underline-offset-8 truncate">
          {product?.attributes?.title}
        </h2>

        <div className="overflow-hidden text-center">
          {product?.attributes?.description?.map((element) =>
            element.children?.map((item) => (
              <span
                className="text-sm text-gray-700 font-light truncate"
                key={item?.text}
              >
                {item?.text}
              </span>
            ))
          )}
        </div>

        <div className="h-[40px] text-xs flex justify-between items-center text-center border-t border-gray-700 rounded-b-lg">
          <p className="sm:text-sm font-light w-[50%]">5 colors</p>
          <hr className="w-px h-9 bg-gray-200 border-0 dark:bg-gray-700" />
          <p className="sm:text-sm font-light w-[50%]">
            Ab {product?.attributes?.price} €
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
