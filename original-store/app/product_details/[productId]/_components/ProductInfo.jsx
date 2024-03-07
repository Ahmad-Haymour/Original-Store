import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <div className="flex flex-col justify-between text-black text-lg bg-sky-300 flex-1 py-4 px-8 border-2 border-red-400 min-h-60 h-full w-1/2">

      <div className="relative">
        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden absolute top-0 left-0 w-full">
          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
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
            <ul className="border-t border-gray-200 p-4 flex flex-wrap gap-2">
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                36
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                37
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                38
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                39
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                40
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                41
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                42
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                43
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                44
              </li>
              <li className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
                45
              </li>
            </ul>
          </div>
        </details>
      </div>

      <div className="rounded text-md bg-gray-300 w-full h-fit flex justify-between px-4 py-3 mt-10">

        <div className="flex justify-center items-center gap-6 text-md">
          <span>Logo </span>
          <span>{product?.attributes?.price} €</span>
        </div>
        <button className="border-2 border-gray-400 rounded py-2 px-4 hover:shadow-lg hover:bg-gray-400 text-md">
          Zum Shop
        </button>
      </div>

      <div className="flex flex-wrap gap-1">
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          36
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          37
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          38
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          39
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          40
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          41
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          42
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          43
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          44
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          45
        </div>
        <div className="h-7 w-7 cursor-pointer hover:bg-gray-200 text-sm border-2 border-gray-400 rounded grid place-items-center">
          46
        </div>
      </div>

    </div>
  );
};

export default ProductInfo;
