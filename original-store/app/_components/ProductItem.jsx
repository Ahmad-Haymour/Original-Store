import { Heart, List, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="group overflow-hidden cursor-pointer h-[300px] text-black">
      <div className="relative h-[170px] top-0" href="#">
        <Image
          src={product?.attributes?.image?.data?.attributes?.url}
          alt="Main card"
          width={400}
          height={350}
          //   className="rounded-t-lg h-[170px] object-cover opacity-100 group-hover:opacity-0"
          className="absolute inset-0 w-full h-[170px] object-cover opacity-100 group-hover:opacity-0 rounded-t-lg "
        />

        <Image
          //   src={product?.attributes?.image?.data?.attributes?.url}
          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Main card"
          width={400}
          height={350}
          //   className="rounded-t-lg h-[170px] object-cover opacity-0 group-hover:opacity-100"
          className="absolute inset-0 w-full h-[170px] object-cover opacity-0 group-hover:opacity-100 rounded-t-lg "
        />

        <Heart className="absolute top-3 right-2 text-red-500" />
      </div>

      <div className="pt-3 rounded-b-lg h-[130px] bg-gray-200 flex flex-col justify-between border-t-2 border-primary">
        <h2 className="text-sm text-center font-bold text-black group-hover:underline group-hover:underline-offset-8">
          {product?.attributes?.title}
        </h2>

        {/* <ShoppingBagIcon /> */}
        {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/> */}

        {product?.attributes?.description?.map((element) =>
          element.children?.map((item) => (
            <h2
              className="text-xs text-center text-gray-700 font-light"
              key={item?.text}
            >
              {item?.text}
            </h2>
          ))
        )}

        <div className="h-[40px] flex justify-between items-center text-center border-t border-gray-700 rounded-b-lg">
          <p className="text-sm font-light w-[50%]">5 colors</p>
          <hr class="w-px h-9 bg-gray-200 border-0 dark:bg-gray-700" />
          <p className="text-sm font-light w-[50%]">Ab 129,99 €</p> 
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
