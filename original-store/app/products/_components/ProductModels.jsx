import React from "react";

const ProductModels = ({ productList }) => {
  const models = [
    "Nike ",
    "Nike Jordan",
    "Reebok",
    "Adidas",
    "Adidas Originals",
    "Under Armor",
  ];

  return (
    <div className="lg:w-[15%] bg-light-background dark:bg-dark-background border-2 p-4 relative min-w-52">
      <div className="group relative inline-block">
        <h2 className="text-left shadow-2xl text-2xl p-2 text-slate-200 font-extrabold hover:text-slate-300 inline-block cursor-default hover:bg-slate-700 rounded-md bg-slate-500/50"> Models</h2>
        <ul className="group-hover:visible hover:visible absolute lg:static lg:visible invisible top-18 left-4 z-50 text-lg bg-slate-500/70">
          {models.map((model, index) => (
            <li
              key={index}
              className="hover:bg-gray-800 cursor-pointer truncate text-slate-800 hover:text-slate-200 p-2"
            >
              {model}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductModels;
