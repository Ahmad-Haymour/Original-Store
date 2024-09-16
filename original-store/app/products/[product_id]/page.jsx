"use client";

import React, { useEffect, useState } from "react";
// import ProductApis from "@/app/_utils/ProductApis";
import ProductInfo from "./_components/ProductInfo";
import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductBanner from "./_components/ProductBanner";
import data from "@/app/_utils/api"

const ProductDetails = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    console.log('PARAMS Product: ', params)
    try {
      if (params?.product_id) {
         getProductById_(params?.product_id);
      }
    } catch (error) {
      console.log(error);
    }
  }, [params?.product_id]);

  const getProductById_ = async (id) => {
    // await ProductApis.getProductById(params?.product_id).then((res) => {
    //   console.log("Product Item: ", res.data.data);
    //   setProductDetails(res?.data?.data);
    // });
    const product = data?.find((product) => product.id === parseInt(id));
    if (product) {
      console.log("Product Item: ", product);
      setProductDetails(product);
    } else return console.log("Product not found");
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 w-full bg-white dark:bg-dark-background">
        <div className="p-4 h-full lg:w-1/2 w-full lg:max-w-[580px]">
          <BreadCrumb />

          <div className="rounded text-light-text dark:text-lightGray dark:bg-gray/50 shadow-2xl my-4 p-4">
              <p className="text-md font-bold">
                {productDetails?.attributes?.brand}
              </p>
              <h3 className="text-3xl font-extrabold py-3 capitalize">
                {productDetails?.attributes?.model}
              </h3>
              <p className="text-sm font-light text-gray dark:text-lightGray">
                {productDetails?.attributes?.color}
              </p>
          </div>

          <ProductBanner product={productDetails} />

          <div className="text-light-text dark:text-dark-text rounded mt-16 mb-4 bg-light-background dark:bg-dark-dark shadow-lg dark:shadow-gray">
            <div className="relative rounded shadow-lg dark:border-lightGray">
              <details className="overflow-hidden rounded shadow-lg [&_summary::-webkit-details-marker]:hidden w-full">
                <summary className="flex cursor-pointer shadow-lg items-center justify-between gap-2 bg-gradient-to-t from-white to-lightGray dark:bg-none dark:bg-gray/50 p-4 transition">
                  <span className="text-lg font-semibold dark:text-dark-text text-light-text">
                    Details:{" "}
                  </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="bg-gradiant-to-b from-white to-lightGray dark:bg-dark-background py-2 px-4">
                  <h5 className="font-extralight text-gray/50 dark:text-dark-text text-sm text-left py-2 px-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi, a non! Dolorum exercitationem blanditiis fugiat
                    placeat libero numquam earum facere a corrupti architecto
                    quaerat eligendi, nostrum, magnam ex eveniet facilis?
                  </h5>
                </div>
              </details>
            </div>
            <div className="relative rounded shadow-lg border-t dark:border-black">
              <details className="overflow-hidden rounded shadow-lg [&_summary::-webkit-details-marker]:hidden w-full border-none">
              <summary className="flex cursor-pointer shadow-lg items-center justify-between gap-2 bg-gradient-to-t from-white to-lightGray dark:bg-none dark:bg-gray/50 p-4 transition">
                  <span className="text-lg font-semibold dark:text-dark-text text-light-text">
                    Material & Care:{" "}
                  </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div className="bg-gradiant-to-b from-white to-lightGray dark:bg-dark-background py-2 px-4">
                  <h5 className="font-extralight text-gray dark:text-dark-text text-sm text-left py-2 px-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi, a non! Dolorum exercitationem blanditiis fugiat
                    placeat libero numquam earum facere a corrupti architecto
                    quaerat eligendi, nostrum, magnam ex eveniet facilis?
                  </h5>
                </div>
              </details>
            </div>
          </div>
        </div>
        <ProductInfo product={productDetails} />
      </div>
    </div>
  );
};

export default ProductDetails;
