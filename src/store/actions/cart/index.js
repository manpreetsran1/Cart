import { ADD_TO_CART } from "../../constant/cart";

// import { getProductDetail } from "../../store/actions/product";
import axios from "axios";
import { getProductDetailCall } from "../../apiCall/apiCall";
export const addItemsToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await getProductDetailCall(id);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      //   image: data.product?.image[0].url,
      stock: data.product.Stock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = () => {};
