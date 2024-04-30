import React from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

const ProductList = ({ productList }) => {
  return (
    <div className="bg-light-background dark:bg-dark-background w-full">
      <ProductsFilter products={productList} />
      
      <div className="w-full flex justify-center items-center bg-light-background dark:bg-dark-background flex-wrap px-2 py-10 md:gap-6 gap-4">
        {productList.map((item) => (
          <ProductCard
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
