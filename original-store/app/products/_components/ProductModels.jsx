"use client";

import React, { useState } from "react";

const ProductModels = ({ productList }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  
  const models = [
    "Nike ",
    "Nike Jordan",
    "Reebok",
    "Adidas",
    "Adidas Originals",
    "Lacoste",
  ];

  return (
    <div className="lg:w-[15%] hidden lg:block bg-light-background dark:bg-dark-background border-2 p-4 min-w-52 ">
      <div className="group inline-block overflow-hidden truncate w-full">
        {/* <h2 className="text-left shadow-2xl text-2xl p-2 text-slate-200 font-extrabold hover:text-slate-300 inline-block cursor-default rounded-md">
          {" "}
          Models
        </h2> */}
        <ul className="group-hover:visible hover:visible lg:relative lg:visible invisible top-18 left-4 z-30 text-lg">
          {models.map((model, index) => (
            <li
              key={index}
              className="cursor-pointer h-[45px] truncate text-gray dark:text-lightGray hover:text-dark-text dark:hover:text-dark-text hover:scale-110 p-2 z-50 relative transition-all"
              style={{ color: hoveredIndex === null && index === 0 && 'white' }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {model}
            </li>
          ))}
          <div
            className="absolute -left-4 w-full h-[45px] z-10 hidden lg:block shadow-lg shadow-light-primary/70 dark:shadow-dark-primary/50 bg-gradient-to-bl from-light-primary dark:from-dark-primary from-20% via-light-secondary dark:via-dark-secondary via-50% to-light-accent dark:to-dark-accent to-70% rounded-lg p-2 transition-all duration-300"
            style={{ top: hoveredIndex !== null ? `${ 45 * hoveredIndex}px` : '0px' }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default ProductModels;
