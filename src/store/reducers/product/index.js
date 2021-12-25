import * as Const from "../../constant/product";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case Const.All_PRODUCT_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case Const.All_PRODUCT_SUCCESS:
      console.log(action.payload, "action.payload");
      return {
        loading: false,
        product: action.payload?.products,
        productsCount: action.payload?.productsCount,
        resultPerPage: action.payload?.resultPerPage,
      };

    case Const.All_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case Const.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const productDetailReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case Const.All_PRODUCTDETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case Const.All_PRODUCTDETAIL_SUCCESS:
      console.log(action.payload, "action.payload");
      return {
        loading: false,
        product: action.payload,
      };

    case Const.All_PRODUCTDETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case Const.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
