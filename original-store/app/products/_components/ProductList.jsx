'use client'

import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";
import BreadCrumb from "@/app/_components/BreadCrumb";
import data from '../../_utils/api'

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = async () => {
    try {
      // const res = await ProductApis.getLatestProducts();
      // const products = res.data.data;
      const products = data;
      setProductList(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filterProducts = useCallback((brand, model, color) => {
    let filtered = productList;
    if (brand) {
      filtered = filtered.filter(product => product.attributes.brand === brand);
    }
    if (model) {
      filtered = filtered.filter(product => product.attributes.model === model);
    }
    if (color) {
      filtered = filtered.filter(product => product.attributes.color === color);
    }
    setFilteredProducts(filtered);
  }, [productList]);

  return (
    <div className="bg-light-background dark:bg-dark-background w-full">
      <BreadCrumb filterProducts={filterProducts} />
      <ProductsFilter products={productList} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
      <div className="w-full flex justify-center items-center bg-light-background dark:bg-dark-background flex-wrap px-2 py-10 md:gap-6 gap-4">
        {filteredProducts && filteredProducts.map((item) => (
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
