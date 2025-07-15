import React from "react";
import Product from "./Product";

const ProductList = ({ name, price }) => {
  return (
    <div>
      <Product name="compiter" price="200"></Product>
      <Product name="laptop" price="400"></Product>
      <Product name="tablet" price="100"></Product>
      <Product name="smartPhone" price="50"></Product>
    </div>
  );
};

export default ProductList;
