import React from "react";
import ColorPicker from "./ColorPicker";

const ProductsFilter = ({ products }) => {
  return (
    <div>
      <div className="mt-8 block lg:hidden">
        <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
          <span className="text-sm font-medium"> Filters & Sorting </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 rtl:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="relative py-4 px-2 flex w-full flex-wrap items-stretch">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border-2 border-neutral-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-newPurple focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-newPurple"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
              <span
                  onClick={()=> window.alert("Search") }
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 cursor-pointer"
                  id="basic-addon2" title="Search">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>

      <div className="rounded shadow-xl bg-light-background dark:bg-dark-background py-4 mx-2 flex gap-6">
        <details className="relative rounded border shadow-xl border-white [&_summary::-webkit-details-marker]:hidden inline-block">
          <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 px-4 py-2 text-gray-600 transition">
            <h4 className="text-md font-medium">Fashion</h4>

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
          <div className="border-t text-black rounded-md border-gray-200 absolute top-14 left-4 z-50 shadow-2xl">
            <ul className="border-t border-gray-200 p-4 flex flex-wrap gap-6 ">
              <li className="p-2 border-2 rounded cursor-pointer hover:bg-slate-700 shadow-xl hover:text-white border-slate-600 w-20 text-center">
                Men
              </li>
              <li className="p-2 border-2 rounded cursor-pointer hover:bg-slate-700 shadow-xl hover:text-white border-slate-600 w-20 text-center">
                Women
              </li>
              <li className="p-2 border-2 rounded cursor-pointer hover:bg-slate-700 shadow-xl hover:text-white border-slate-600 w-20 text-center">
                Kids
              </li>
            </ul>
          </div>
        </details>
        <details className="relative rounded border shadow-xl border-white [&_summary::-webkit-details-marker]:hidden inline-block">
          <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 px-4 py-2 text-gray-900 transition">
            <h4 className="text-md font-medium">Marke</h4>

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
          <div className="border-t text-black rounded-md border-gray-200 absolute top-14 left-4 z-50 shadow-2xl">
            <ul className="border-t border-gray-200 p-4 flex flex-wrap gap-6 ">
              <li className="p-2 border-2 rounded cursor-pointer hover:bg-slate-600 hover:text-white border-slate-600 w-20 text-center">
                Puma
              </li>
              <li className="p-2 border-2 rounded cursor-pointer hover:bg-slate-600 hover:text-white border-slate-600 w-20 text-center">
                Adidas
              </li>
              <li className="p-2 border-2 rounded cursor-pointer hover:bg-slate-600 hover:text-white border-slate-600 w-20 text-center">
                Reebok
              </li>
            </ul>
          </div>
        </details>
        <details className="relative rounded border shadow-xl border-white [&_summary::-webkit-details-marker]:hidden inline-block">
          <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 px-4 py-2 text-gray-900 transition">
            <h4 className="text-md font-medium">Color</h4>

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
          <div className="border-t text-black rounded-md border-gray-200 absolute top-14 left-4 z-50 shadow-2xl">
            <ColorPicker />
          </div>
        </details>
      </div>
    </div>
  );
};

export default ProductsFilter;
