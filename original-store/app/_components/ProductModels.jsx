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
    <div className="lg:w-[15%] bg-slate-600 p-4 relative min-w-56">
      <h2 className="text-2xl group hover:cursor-pointer inline-block">
        Models
        <ul className="group-hover:visible hover:visible absolute lg:static lg:visible invisible top-10 left-5 z-50 bg-slate-600 text-lg border border-red-600">
          {models.map((model, index) => (
            <li key={index} className="hover:bg-gray-800 text-gray-300 p-2">{model}</li>
          ))}
        </ul>
      </h2>
      {/* <ul className="group-hover:visible absolute lg:static lg:visible invisible top-20 left-5 z-50 bg-slate-900 py-8 px-4 space-y-6 border border-red-600">
        {models.map((model, index) => <li key={index}>{model}</li> )}
      </ul> */}
    </div>
  );
};

export default ProductModels;
