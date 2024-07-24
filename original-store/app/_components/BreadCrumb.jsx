import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const BreadCrumb = ({ filterProducts }) => {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand");
  const model = searchParams.get("model");
  const color = searchParams.get("color");

  useEffect(() => {
    if (filterProducts) {
      filterProducts(brand, model, color);
    }
  }, [brand, model, color, filterProducts]);

  return (
    <nav aria-label="Breadcrumb" className="px-4 py-2 mt-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-light-text dark:text-dark-text">
        <li className="flex items-center">
          <Link href="/" className="transition hover:text-gray flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 -mt-px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="pl-2"> Home </span>
          </Link>
        </li>
        <li className="flex items-center rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <Link href={`/products`} className="transition hover:text-gray">
            Sneaker
          </Link>
        </li>
        {brand && (
          <>
            <li className="flex items-center rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href={`/products?brand=${brand}`} className="transition hover:text-gray capitalize">
                {brand}
              </Link>
            </li>
          </>
        )}
        {model && (
          <>
            <li className="flex items-center rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href={`/products?brand=${brand}&model=${model}`} className="transition hover:text-gray-700">
                {model}
              </Link>
            </li>
          </>
        )}
        {color && (
          <>
            <li className="flex items-center rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link href={`/products?brand=${brand}&model=${model}&color=${color}`} className="transition hover:text-gray-700">
                {color}
              </Link>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
