import axios from "axios";
import {
  getProductCall,
  getProductDetailCall,
  getProductSearchCall,
} from "../../apiCall/apiCall";
import * as Const from "../../constant/product";

import { API_URL, PRODUCT_DETAIL_API } from "../../apiCall/apiUrl";

export const getProduct = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: Const.All_PRODUCT_REQUEST,
    });
    console.log("try");
    let Data = [];
    if (keyword) {
      Data = getProductSearchCall(keyword);
    } else {
      Data = await getProductCall();
    }

    const { data } = Data;

    // console.log(response, "response");

    // const { data } = response.data;

    console.log(Data, "Datadata ");

    dispatch({
      type: Const.All_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error, "error in action");
    dispatch({
      type: Const.All_PRODUCT_FAIL,
      payload: error,
    });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: Const.All_PRODUCTDETAIL_REQUEST,
    });
    const { data } = await getProductDetailCall(id);
    dispatch({
      type: Const.All_PRODUCTDETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Const.All_PRODUCTDETAIL_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: Const.CLEAR_ERRORS,
  });
};
