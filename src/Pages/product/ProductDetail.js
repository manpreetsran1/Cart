import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

import ReviewCard from "../../components/ReviewCard";
import { addItemsToCart } from "../../store/actions/cart";
import { getProductDetail } from "../../store/actions/product";

const option = {
  edit: false,
  color: "red",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

function ProductDetail(props) {
  const { id } = useParams();
  const [qty, setqty] = useState(1);
  console.log(id, "idiididididiid");
  const dispatch = useDispatch();

  const StateData = useSelector((state) => state.productDetail);

  console.log(StateData, "StateData");
  const { product, loading } = StateData;
  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const increaseQty = () => {
    // if (product.product.Stock <= qty) return;
    const qtys = qty + 1;
    setqty(qtys);
  };

  const DecreaseQty = () => {
    if (1 >= qty) return;

    const qtys = qty - 1;
    setqty(qtys);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, qty));

    alert("item added to cart");
  };
  console.log(product, "productproduct");
  return (
    <>
      <div className="ProductDetails">
        <div></div>
        <div>
          <div className="detailsBlock-1">
            <h2>{product?.product?.name}</h2>
            <p>Product #{product?.product?._id}</p>
          </div>

          <div className="detailsBlock-1">
            <ReactStars {...option} />
            <span>({product?.product?.price})</span>
          </div>

          <div className="detailsBlock-3">
            <h2>$ {product?.product?.price}</h2>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button onClick={DecreaseQty}>-</button>
                <input type="number" value={qty} />
                <button onClick={increaseQty}>+</button>
              </div>
            </div>
            <button onClick={addToCartHandler}>Add To Cart</button>
          </div>
          <p>
            Status
            <b>{product?.product?.Stock}</b>
          </p>

          <div className="detailsBlock-4">
            Description : {product?.product?.description}
          </div>

          <button className="submitReview">Submit Review</button>
        </div>
        <h3 className="reviewsHeading">Reviews</h3>
        {product?.product?.reviews && product?.product?.reviews[0] ? (
          <div className="reviews">
            {product?.product?.reviews &&
              product?.product?.reviews.map((review) => (
                <ReviewCard review={review} />
              ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ProductDetail;
