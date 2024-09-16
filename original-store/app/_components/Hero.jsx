import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text px-20 pb-20">
      <div className="mx-auto max-w-screen-xl px-4 pt-20 pb-10 lg:flex">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-light-primary from-50% via-light-accent via-50% to-light-secondary to-90% inline-block bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl drop-shadow-xl">
            All Of Your Products
            <span className="sm:block text-4xl">
              {" "}
              Are Just One Click Away.{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Perfect Fit. Perfect Sneakers. Discover shoes in your size and
            style. We search over many stores to find you the best price!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 relative">
            <Link
              className="block relative w-full rounded shadow-2xl px-12 py-3 text-sm font-medium text-dark-text hover:text-dark-text focus:outline-none active:text-opacity-75 sm:w-auto hover:scale-105 hover:transition hover:duration-500 bg-light-primary
              dark:bg-gradient-to-r from-light-primary dark:from-dark-primary via-light-accent dark:via-dark-accent via-60% to-light-secondary dark:to-dark-secondary to-90%
              transition-colors z-40

              before:absolute before:left-0 before:top-0 before:-z-50 before:h-full before:w-full before:rounded before:origin-top-left before:scale-x-0 before:bg-light-accent dark:before:bg-dark-secondary before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100"
              href="/products"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <Link href={"/products"}>
          <img
            src="/Sneaker-Trends.png"
            alt="Background Image"
            width={400}
            height={200}
            className="h-full w-full rounded-xl mt-10 mb-20 shadow-xl shadow-gray object-cover"
          />
        </Link>
        <Link href={"/products?brand=nike"}>
          <img
            src="/nike-air-max.png"
            alt="Background Image"
            width={400}
            height={200}
            className="h-full w-full rounded-xl my-20 shadow-xl shadow-gray object-cover"
          />
        </Link>
        <Link href={"/products?color=white"}>
          <img
            src="/weisse-sneaker.png"
            alt="Background Image"
            width={400}
            height={200}
            className="h-full w-full rounded-xl my-20 shadow-xl shadow-gray object-cover"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
