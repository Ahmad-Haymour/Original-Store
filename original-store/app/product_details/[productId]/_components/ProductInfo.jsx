import React, { useState } from "react";

const ProductInfo = ({ product }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeClick = (size) => {
    setSelectedSizes((prev) => prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size] );
  };

  const sizeElements = [...Array(15)].map((_, index) => {
    const size = index + 34;
    const isSelected = selectedSizes.includes(size);
    return (
      <li
        key={size}
        className={`h-7 w-7 cursor-pointer text-sm border-2 rounded grid place-items-center ${
          isSelected
            ? "bg-primary text-white hover:bg-none"
            : "border-gray-200 bg-white hover:bg-gray-400"
        } cursor-pointer`}
        onClick={() => handleSizeClick(size)}
      >
        {size}
      </li>
    );
  });

  return (
    <div
      className="flex flex-col justify-between text-black text-lg bg-gray-100 
                 flex-1 p-8 rounded min-h-60 h-full w-1/2 xl:max-w-[580px]"
    >
      <div className="relative rounded shadow-xl">
        <details className="overflow-hidden rounded border shadow-xl border-gray-300 [&_summary::-webkit-details-marker]:hidden absolute top-0 left-0 w-full">
          <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span className="text-sm font-medium"> Pick your size: </span>

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

          <div className="border-t border-gray-200 bg-white">
            <h5 className="font-semibold underline underline-offset-4 text-center py-2">
              EU Sizes
            </h5>
            <ul className="border-t border-gray-200 p-4 flex flex-wrap gap-2">
              {sizeElements}
            </ul>
          </div>
        </details>
      </div>

      <div>
        <div className="rounded text-md bg-white w-full h-fit flex justify-between px-4 py-3 mt-28 shadow-2xl">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Logo </span>
            <span>{product?.attributes?.price} €</span>
          </div>

          <button
            className="border-2 border-gray-400 bg-purple text-white rounded py-2 px-4 
                             hover:shadow-lg hover:bg-gray-400 text-md"
          >
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded bg-white border-2 border-t-purple-400 shadow-2xl">
          {sizeElements}
        </ul>
      </div>

      <div className="my-4">
        <div className="rounded text-md bg-white w-full h-fit flex justify-between px-4 py-3 shadow-2xl">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Nike </span>
            <span>{product?.attributes?.price} €</span>
          </div>

          <button
            className="border-2 border-gray-400 bg-darkPurple text-white rounded py-2 px-4 
                             hover:shadow-lg hover:bg-gray-400 text-md"
          >
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded bg-white border-2 border-t-purple-400 shadow-2xl">
          {sizeElements}
        </ul>
      </div>

      <div className="my-4">
        <div className="rounded text-md bg-white w-full h-fit flex justify-between px-4 py-3 shadow-2xl">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Snipe </span>
            <span>{product?.attributes?.price} €</span>
          </div>

          <button
            className="border-2 border-gray-400 bg-primary text-white rounded py-2 px-4 
                             hover:shadow-lg hover:bg-gray-400 text-md"
          >
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded bg-white border-2 border-t-purple-400 shadow-2xl">
          {sizeElements}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
