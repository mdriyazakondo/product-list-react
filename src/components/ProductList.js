import React from "react";
import Product from "./Product";
import "./product.css";
import products1 from "../data/products";

const ProductList = () => {
  return (
    <div className="producrs">
      {products1.map((product, index) => (
        <Product key={index} product={product}></Product>
      ))}
    </div>
  );
};

export default ProductList;
