import React from "react";

const ProductModels = ({ productList }) => {

  const models = [
    "Nike ",
    "Nike Jordan",
    "Reebok",
    "Adidas",
    "Adidas Originals",
    "Under Armor",
  ]

  return (
    <div className="lg:w-[15%] bg-slate-600">
      <h2>Modelle</h2>
      <ul>
        {models.map((model, index) => <li key={index}>{model}</li> )}
      </ul>
    </div>
  );
};

export default ProductModels;
