"use client";

import BreadCrumb from "@/app/_components/BreadCrumb";
import ProductApis from "@/app/_utils/ProductApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
// import Loading from "./Loading";

const productDetails = ({ params }) => {
  const [productDetails, setProductDetails] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log("Product Item: ", res.data.data);
      setProductDetails(res?.data?.data);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 w-full bg-white">
        <div className="p-4 h-full lg:w-1/2 w-full lg:max-w-[580px]">
          <BreadCrumb />

          <div className="rounded text-black bg-white shadow-2xl my-4 p-4">
            <h5 className="text-xs">{productDetails?.attributes?.marke}</h5>
            <h2 className="text-xl font-extrabold py-1">
              {productDetails?.attributes?.title}
            </h2>
            <p className="text-xs text-gray-500">
              {productDetails?.attributes?.model}
            </p>
          </div>

          <ProductBanner product={productDetails} isLoading={isLoading} />

          <div className="text-black rounded my-4 bg-white shadow-2xl">
            <div className="relative rounded shadow-xl">
              <details className="overflow-hidden rounded border-y shadow-xl border-gray-300 [&_summary::-webkit-details-marker]:hidden w-full">
                <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                  <span className="text-lg font-semibold">Beschreibung: </span>

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

                <div className="border-t border-gray-300 bg-white py-2 px-4">
                  <h5 className="font-extralight text-gray-600 text-sm text-left py-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi, a non! Dolorum exercitationem blanditiis fugiat
                    placeat libero numquam earum facere a corrupti architecto
                    quaerat eligendi, nostrum, magnam ex eveniet facilis?
                  </h5>
                </div>
              </details>
            </div>
            <div className="relative rounded shadow-xl">
              <details className="overflow-hidden rounded border-y shadow-xl border-gray-300 [&_summary::-webkit-details-marker]:hidden w-full">
                <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                  <span className="text-lg font-semibold">Eigenschaften: </span>

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

                <div className="border-y-2 border-gray-300 bg-white py-2 px-4">
                  <h5 className="font-extralight text-left text-sm text-gray-600 py-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sequi, a non! Dolorum exercitationem blanditiis fugiat
                    placeat libero numquam earum facere a corrupti architecto
                    quaerat eligendi, nostrum, magnam ex eveniet facilis?
                  </h5>
                </div>
              </details>
            </div>
          </div>

          {/* 
            <div>
                    Ähnliche produkte
                    Mehr von Nike..
                    Weitere Produkte von <span className='underline'>Marke</span>
            </div> 
          */}
        </div>
        <ProductInfo product={productDetails} />
      </div>
    </div>
  );
};

export default productDetails;
