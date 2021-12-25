import { get, post, put } from "axios";
import * as URL from "./apiUrl";
import Axios from "../../helper/Axios";

export const getProductCall = () =>
  Axios.get(URL.API_URL + URL.PRODUCT_LIST_API);

export const getProductSearchCall = (data) =>
  Axios.get(URL.API_URL + URL.PRODUCT_LIST_API + data);

export const getProductDetailCall = (data) =>
  Axios.get(URL.API_URL + URL.PRODUCT_DETAIL_API + data);
