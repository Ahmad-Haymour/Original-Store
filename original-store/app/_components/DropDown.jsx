import { useState, useEffect, useRef } from 'react';

export default function Dropdown({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 
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
      </div> */}
      <button
            className='flex cursor-pointer shadow-xl shadow-gray/50 items-center justify-between gap-2 px-4 py-2 text-gray dark:text-darkGray transition bg-transparent border-2 border-dark-accent rounded-md hover:text-light-text dark:hover:text-dark-text hover:scale-105 hover:shadow-dark-primary/50 hover:border-dark-primary'
            type="button"
            id="dropdownMenuButton3"
            data-twe-dropdown-toggle-ref
            aria-expanded="false"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
            <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

      {isOpen && (
        <div className="absolute top-full mt-2 rounded-md shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}
