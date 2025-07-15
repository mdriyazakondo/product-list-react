import React from "react";

const Product = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h5>$ {price}</h5>
    </div>
  );
};

export default Product;
