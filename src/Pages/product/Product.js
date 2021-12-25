import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const option = {
  edit: false,
  color: "red",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};
function Product({ product }) {
  return (
    <div>
      <Link className="productCard" to={`product/${product._id}`}>
        <img src={product?.images[0]?.url} alt={product.name} />
        <p>{product.name}</p>
        <div>
          <ReactStars {...option} />
          <span>$ {product.price}</span>
        </div>
      </Link>
    </div>
  );
}

export default Product;
