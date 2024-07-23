import React, { useState } from "react";

const ProductInfo = ({ product }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeClick = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const sizeElements = [...Array(15)].map((_, index) => {
    const size = index + 34;
    const isSelected = selectedSizes.includes(size);
    return (
      <li
        key={size}
        className={`h-7 w-7 cursor-pointer text-sm rounded grid place-items-center hover:bg-light-primary dark:hover:bg-gray hover:text-white ${
          isSelected
            ? "border-2 border-light-primary dark:border-gray"
            : "bg-light-background dark:bg-dark-background"
        } cursor-pointer`}
        onClick={() => handleSizeClick(size)}
      >
        {size}
      </li>
    );
  });

  return (
    <div className="flex flex-col justify-between text-light-text dark:text-dark-text text-lg bg-lightGray/50 dark:bg-gray/50 flex-1 p-8 rounded min-h-60 h-full w-1/2 xl:max-w-[580px]">
      <div className="relative rounded shadow-xl">
        <details className="overflow-hidden rounded border shadow-lg dark:shadow-gray border-gray [&_summary::-webkit-details-marker]:hidden absolute top-0 left-0 w-full">
          <summary className="flex cursor-pointer shadow-xl items-center justify-between gap-2 bg-light-background dark:bg-dark-background p-4 text-gray dark:text-lightGray transition">
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

          <div className="border-t border-gray bg-light-background dark:bg-dark-background">
            <h5 className="font-semibold underline underline-offset-4 decoration-light-primary text-center py-2">
              EU Sizes
            </h5>
            <ul className="border-t border-gray p-4 flex flex-wrap gap-2">
              {sizeElements}
            </ul>
          </div>
        </details>
      </div>

      <div className="mt-20 mb-4 shadow-2xl">
        <div className="rounded text-md bg-light-background w-full h-fit flex justify-between px-4 py-3 shadow-2xl dark:bg-dark-background">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Snipe</span>
            <span>{Math.floor(Math.random() * (200 - 80 + 1)) + 80} €</span>
          </div>

          <button className="rounded py-2 px-4 hover:shadow-lg hover:bg-gray-400 text-md dark:shadow-gray">
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded border-t-2 border-light-primary dark:border-gray shadow-2xl  bg-light-background dark:bg-dark-background">
          {sizeElements}
        </ul>
      </div>

      <div className="my-4 shadow-2xl">
        <div className="rounded text-md bg-light-background w-full h-fit flex justify-between px-4 py-3 shadow-2xl dark:bg-dark-background">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Deichmann</span>
            <span>{Math.floor(Math.random() * (200 - 80 + 1)) + 80} €</span>
          </div>

          <button className="rounded py-2 px-4 hover:shadow-lg hover:bg-gray-400 text-md dark:shadow-gray">
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded border-t-2 border-light-primary dark:border-gray shadow-2xl  bg-light-background dark:bg-dark-background">
          {sizeElements}
        </ul>
      </div>

      <div className="my-4 shadow-2xl">
        <div className="rounded text-md bg-light-background w-full h-fit flex justify-between px-4 py-3 shadow-2xl dark:bg-dark-background">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Zalando</span>
            <span>{Math.floor(Math.random() * (200 - 80 + 1)) + 80} €</span>
          </div>

          <button className="rounded py-2 px-4 hover:shadow-lg hover:bg-gray-400 text-md dark:shadow-gray">
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded border-t-2 border-light-primary dark:border-gray shadow-2xl  bg-light-background dark:bg-dark-background">
          {sizeElements}
        </ul>
      </div>

      <div className="my-4 shadow-2xl">
        <div className="rounded text-md bg-light-background w-full h-fit flex justify-between px-4 py-3 shadow-2xl dark:bg-dark-background">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Amazon</span>
            <span>{Math.floor(Math.random() * (200 - 80 + 1)) + 80} €</span>
          </div>

          <button className="rounded py-2 px-4 hover:shadow-lg hover:bg-gray-400 text-md dark:shadow-gray">
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded border-t-2 border-light-primary dark:border-gray shadow-2xl  bg-light-background dark:bg-dark-background">
          {sizeElements}
        </ul>
      </div>

      <div className="my-4 shadow-2xl">
        <div className="rounded text-md bg-light-background w-full h-fit flex justify-between px-4 py-3 shadow-2xl dark:bg-dark-background">
          <div className="flex justify-center items-center gap-6 text-md">
            <span>Asos</span>
            <span>{Math.floor(Math.random() * (200 - 80 + 1)) + 80} €</span>
          </div>

          <button className="rounded py-2 px-4 hover:shadow-lg hover:bg-gray-400 text-md dark:shadow-gray">
            Zum Shop
          </button>
        </div>
        <ul className="flex flex-wrap gap-1 py-6 px-4 rounded border-t-2 border-light-primary dark:border-gray shadow-2xl  bg-light-background dark:bg-dark-background">
          {sizeElements}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
