import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer, productDetailReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
const reducer = combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

let INITIAL_STATE = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
