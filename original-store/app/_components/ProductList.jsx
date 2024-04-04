import React from "react";
import ProductItem from "./ProductItem";
import ProductsFilter from "../products/_components/ProductsFilter";

const ProductList = ({ productList }) => {
  return (
    <div className="bg-slate-400">
      <ProductsFilter products={productList} />
      
      <div className="w-full flex justify-center items-start bg-slate-500 flex-wrap px-2 py-10 md:gap-6 gap-4">
        {productList.map((item) => (
          <ProductItem
            product={item}
            key={item.id}
            className="hover:shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
