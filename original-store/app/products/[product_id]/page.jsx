"use client";

import React, { useEffect, useState } from "react";
import ProductApis from "@/app/_utils/ProductApis";
import ProductInfo from "./_components/ProductInfo";
// import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductBanner from "./_components/ProductBanner";
// import Loading from "./Loading";

const ProductDetails = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(true);

  useEffect(() => {
    try {
      if (params?.product_id) getProductById_(params?.product_id);
    } catch (error) {
      console.log(error);
    }
  }, [params?.product_id]);

  const getProductById_ = async () => {
    await ProductApis.getProductById(params?.product_id).then((res) => {
      console.log("Product Item: ", res.data.data);
      setProductDetails(res?.data?.data);
      // setIsLoading(false);
    });
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 w-full bg-light-background dark:bg-dark-background">
        <div className="p-4 h-full lg:w-1/2 w-full lg:max-w-[580px]">
          {/* <BreadCrumb /> */}

          <div className="rounded text-light-text dark:text-dark-text bg-light-background dark:bg-dark-background shadow-2xl my-4 p-4">
            <h5 className="text-xs">{productDetails?.attributes?.marke}</h5>
            <h2 className="text-xl font-extrabold py-1">
              {productDetails?.attributes?.title}
            </h2>
            <p className="text-xs text-gray">
              {productDetails?.attributes?.model}
            </p>
          </div>

          <ProductBanner product={productDetails} />

          {/* 
            <div>
                    Ähnliche produkte
                    Mehr von Nike..
                    Weitere Produkte von <span className='underline'>Marke</span>
            </div> 
          */}

          <div className="text-light-text dark:text-dark-text rounded mt-16 mb-4 bg-light-background dark:bg-dark-dark shadow-2xl dark:shadow-gray">
            <div className="relative rounded shadow-xl dark:border-lightGray">
              <details className="overflow-hidden rounded shadow-xl [&_summary::-webkit-details-marker]:hidden w-full">
                <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 bg-gradient-to-t from-white to-lightGray dark:from-dark-background dark:to-dark-dark p-4 transition">
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
                  <h5 className="font-extralight text-gray dark:text-dark-text text-sm text-left py-2 px-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi, a non! Dolorum exercitationem blanditiis fugiat
                    placeat libero numquam earum facere a corrupti architecto
                    quaerat eligendi, nostrum, magnam ex eveniet facilis?
                  </h5>
                </div>
              </details>
            </div>
            <div className="relative rounded shadow-xl border-t dark:border-lightGray">
              <details className="overflow-hidden rounded shadow-xl [&_summary::-webkit-details-marker]:hidden w-full border-none">
                <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 bg-gradient-to-t from-white to-lightGray dark:from-dark-background dark:to-dark-dark p-4 transition">
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
