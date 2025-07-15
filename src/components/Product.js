import React from "react";
import "./product.css";

const Product = ({ product }) => {
  const { id, name, price, image } = product;
  console.log(product.name);
  return (
    <div className="products">
      <div className="product">
        <p>{id}</p>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h5>$ {price}</h5>{" "}
      </div>
    </div>
  );
};

export default Product;

// {products1.map((product, index) => (
//         <div key={index} className="product">
//           <img src={product.img} alt="" />

//           <h3>{product.name}</h3>
//           <h5>$ {product.price}</h5>
//         </div>
//       ))}
