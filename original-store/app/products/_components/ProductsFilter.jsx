import React, { useState } from "react";
import Dropdown from "@/app/_components/DropDown";

const ProductsFilter = ({ products, setFilteredProducts }) => {

  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProducts(
      products.filter((product) =>
        Object.values(product.attributes)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="lg:ml-4 xl:ml-8">
      <div className="relative py-4 px-2 flex w-full flex-wrap items-stretch shadow-md rounded">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border-2 border-darkGray bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-light-accent focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-400 dark:focus:border-lightGray "
          placeholder="Search by brand, model or color.."
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {/* Search icon */}
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 cursor-pointer hover:scale-125"
          id="basic-addon2"
          title="Search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      {/* Dropdown menu */}
      <div className="rounded shadow-xl bg-light-background dark:bg-dark-background py-4 mx-2 flex gap-6">
        <div className="relative" data-twe-dropdown-ref>
          <Dropdown title={"Fashion"}>
            <ul
              className="absolute z-[1000] border-2 border-dark-secondary float-left m-0 min-w-36 list-none overflow-hidden rounded-lg border-none bg-violet-100 bg-clip-padding text-base shadow-xl shadow-light-secondary dark:shadow-dark-secondary/50 data-[twe-dropdown-show]:block dark:bg-dark-dark divide-y divide-darkGray/50 transition-all"
              aria-labelledby="dropdownMenuButton3"
              data-twe-dropdown-menu-ref
            >
              <li
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-gray hover:text-white hover:bg-darkGray active:bg-darkGray dark:text-darkGray dark:hover:text-dark-text hover:scale-105 cursor-pointer dark:hover:bg-dark-secondary/50 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 transition-all"
                data-twe-dropdown-item-ref
              >
                Men
              </li>
              <li
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-gray hover:text-white hover:bg-darkGray active:bg-darkGray dark:text-darkGray dark:hover:text-dark-text hover:scale-105 cursor-pointer dark:hover:bg-dark-secondary/50 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 transition-all"
                data-twe-dropdown-item-ref
              >
                Women
              </li>
              <li
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-gray hover:text-white hover:bg-darkGray active:bg-darkGray dark:text-darkGray dark:hover:text-dark-text hover:scale-110 cursor-pointer dark:hover:bg-dark-secondary/50 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 transition-all"
                data-twe-dropdown-item-ref
              >
                Kids
              </li>
            </ul>
          </Dropdown>
        </div>

        <div className="relative" data-twe-dropdown-ref>
          <Dropdown title={"Marke"}>
            <ul
              className="absolute z-[1000] border-2 border-dark-secondary float-left m-0 min-w-36 list-none overflow-hidden rounded-lg border-none bg-violet-100 bg-clip-padding text-base shadow-xl shadow-light-secondary dark:shadow-dark-secondary/50 data-[twe-dropdown-show]:block dark:bg-dark-dark divide-y divide-darkGray/50 transition-all"
              aria-labelledby="dropdownMenuButton3"
              data-twe-dropdown-menu-ref
            >
              <li
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-gray hover:text-white hover:bg-darkGray active:bg-darkGray dark:text-darkGray dark:hover:text-dark-text hover:scale-105 cursor-pointer dark:hover:bg-dark-secondary/50 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 transition-all"
                data-twe-dropdown-item-ref
              >
                Action
              </li>
              <li
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-gray hover:text-white hover:bg-darkGray active:bg-darkGray dark:text-darkGray dark:hover:text-dark-text hover:scale-105 cursor-pointer dark:hover:bg-dark-secondary/50 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 transition-all"
                data-twe-dropdown-item-ref
              >
                Another action
              </li>
              <li
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-gray hover:text-white hover:bg-darkGray active:bg-darkGray dark:text-darkGray dark:hover:text-dark-text hover:scale-105 cursor-pointer dark:hover:bg-dark-secondary/50 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 transition-all"
                data-twe-dropdown-item-ref
              >
                Something else here
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
