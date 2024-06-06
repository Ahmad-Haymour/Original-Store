import Image from "next/image";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-light-background/95 dark:bg-dark-background/80 shadow-2xl border-b border-slate-400 sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={98}
            height={98}
            className="rounded-sm cursor-pointer z-40 invert dark:invert-0 hover:invert-0 dark:hover:invert transition-all"
            title="Home"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <a
                className="relative text-light-text hover:text-light-text/75 dark:text-dark-text dark:hover:text-dark-text/75 
                  after:content-[''] after:absolute after:duration-300  after:rounded-xl
                  after:-bottom-2 after:left-0 after:bg-light-primary after:h-[3px] after:w-0 hover:after:w-full"
                href="#"
              >
                About
              </a>

              <a
                className="relative text-light-text hover:text-light-text/75 dark:text-dark-text dark:hover:text-dark-text/75 
                  after:content-[''] after:absolute after:duration-300  after:rounded-xl
                  after:-bottom-2 after:left-0 after:bg-light-primary after:h-[3px] after:w-0 hover:after:w-full"
                href="#"
              >
                Explore
              </a>

              <a
                className="relative text-light-text hover:text-light-text/75 dark:text-dark-text dark:hover:text-dark-text/75 
                  after:content-[''] after:absolute after:duration-300  after:rounded-xl
                  after:-bottom-2 after:left-0 after:bg-light-primary after:h-[3px] after:w-0 hover:after:w-full"
                href="#"
              >
                Projects
              </a>

              <a
                className="relative text-light-text hover:text-light-text/75 dark:text-dark-text dark:hover:text-dark-text/75 
                  after:content-[''] after:absolute after:duration-300  after:rounded-xl
                  after:-bottom-2 after:left-0 after:bg-light-primary after:h-[3px] after:w-0 hover:after:w-full"
                href="#"
              >
                About Us
              </a>

              <a
                className="relative text-light-text hover:text-light-text/75 dark:text-dark-text dark:hover:text-dark-text/75 
                  after:content-[''] after:absolute after:duration-300  after:rounded-xl
                  after:-bottom-2 after:left-0 after:bg-light-primary after:h-[3px] after:w-0 hover:after:w-full"
                href="#"
              >
                Contact Us
              </a>
            </ul>
          </nav>
          <DarkModeToggle />
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 relative">
              <a
                className="block relative rounded-md text-light-text dark:hover:text-dark-text px-5 py-2.5 m-2 text-sm hover:scale-110 font-medium transition hover:bg-transparent shadow-xl border-2 border-light-primary
                dark:bg-gradient-to-r from-slate-100 via-slate-200 to-gray dark:border-0 dark:before:bg-dark-accent
                before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-md before:origin-top-left before:scale-y-0 before:bg-light-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
                href="#"
              >
                Login
              </a>
              <a
                className="block relative rounded-md text-light-text hover:text-white dark:hover:text-dark-text px-5 py-2.5 m-2 text-sm hover:scale-110 font-medium transition hover:bg-transparent shadow-xl border-2 border-light-primary
                dark:bg-gradient-to-r from-slate-100 via-slate-200 to-gray dark:border-0 dark:before:bg-dark-accent
                before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-md before:origin-top-left before:scale-y-0 before:bg-light-primary before:transition-transform before:duration-300 before:content-[''] before:hover:scale-y-100"
                href="#"
              >
                Register
              </a>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
