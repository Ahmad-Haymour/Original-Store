import Link from "next/link";
import React, { useState } from "react";

const ProductModels = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const models = ["Nike", "Reebok", "Adidas", "Lacoste", "Puma"];

  return (
    <div className="lg:w-[15%] hidden lg:block bg-light-background dark:bg-dark-background border-2 p-4 min-w-52 ">
      <div className="group inline-block overflow-hidden truncate w-full">
        {/* <ul className="group-hover:visible hover:visible lg:relative lg:visible invisible top-18 left-4 z-30 text-lg">
  {models.map((model, index) => (
    <li
      key={index}
      className="cursor-pointer h-[45px] truncate text-gray dark:text-lightGray hover:text-dark-text dark:hover:text-dark-text hover:scale-110 p-2 z-50 relative transition-all"
      style={{ color: selectedModelIndex === index && 'white' }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => setSelectedModelIndex(index)}
    >
      <Link href={`/products?brand=${model.toLowerCase()}`}>
        {model}
      </Link>
    </li>
  ))}
  <div
    className={`absolute -left-4 w-full h-[45px] z-10 lg:block shadow-lg shadow-light-primary/70 dark:shadow-dark-primary/50 bg-gradient-to-bl from-light-primary dark:from-dark-primary from-20% via-light-secondary dark:via-dark-secondary via-50% to-light-accent dark:to-dark-accent to-70% rounded-lg p-2 transition-all duration-300`}
    style={{ top: `${45 * hoveredIndex}px` }}
  ></div>
  <div
    className={`absolute -left-4 w-full h-[45px] z-10 ${selectedModelIndex!== null? 'block' : 'hidden'} lg:block shadow-lg shadow-light-primary/70 dark:shadow-dark-primary/50 bg-gradient-to-bl from-light-primary dark:from-dark-primary from-20% via-light-secondary dark:via-dark-secondary via-50% to-light-accent dark:to-dark-accent to-70% rounded-lg p-2 transition-all duration-300`}
    style={{ top: selectedModelIndex!== null? `${45 * selectedModelIndex}px` : '0px' }}
  ></div>
        </ul> */}

        <ul className="group-hover:visible hover:visible lg:relative lg:visible invisible top-18 left-4 z-30 text-lg">
          {models.map((model, index) => (
            <li
              key={index}
              className="cursor-pointer h-[45px] truncate text-gray dark:text-lightGray hover:text-dark-text dark:hover:text-dark-text hover:scale-110 p-2 z-50 relative transition-all"
              style={{ color: hoveredIndex === index && "white" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              
            >
              <Link href={`/products?brand=${model.toLowerCase()}`}>
                {model}
              </Link>
            </li>
          ))}
          <div
            className={`absolute -left-4 w-full h-[45px] z-10 lg:block shadow-lg shadow-light-primary/70 dark:shadow-dark-primary/50 bg-gradient-to-bl from-light-primary dark:from-dark-primary from-20% via-light-secondary dark:via-dark-secondary via-50% to-light-accent dark:to-dark-accent to-70% rounded-lg p-2 transition-all duration-300`}
            style={{
              top:
                hoveredIndex !== null
                  ? `${45 * hoveredIndex}px`
                  : "0px",
              opacity:
                 hoveredIndex !== null ? 1 : 0,
            }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default ProductModels;
