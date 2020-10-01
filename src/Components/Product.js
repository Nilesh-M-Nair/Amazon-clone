import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <img
        alt="product"
        src="https://m.media-amazon.com/images/I/81snLg55xeL._AC_SX352_SY330_.jpg"
      />
      <div className="product__info">
        <p>The Samsung S20</p>
        <p className="product__price">
          <small>Rs</small>
          <strong>20,000</strong>
        </p>
      </div>
      <div className="product__rating">*****</div>
      <div className="product__button">
        <button>Buy Now</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
