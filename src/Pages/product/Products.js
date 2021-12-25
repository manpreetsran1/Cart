import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../store/actions/product";
import "./product.css";

import Slider from "@material-ui/core/Slider";

import { Typography } from "@material-ui/core";

import Pagination from "react-js-pagination";

import Product from "./Product";
import { useParams } from "react-router";

function Products() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setcurrentPage] = useState(1);
  const StateData = useSelector((state) => state.products);

  const { product, loading, productsCount, resultPerPage } = StateData;

  const setCurrentPageNo = (e) => {
    setcurrentPage(e);
  };

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <h2 className="productsHeading">Products</h2>
      <div className="products">
        {product && product.map((product) => <Product product={product} />)}
      </div>

      <div className="filterBox"></div>

      <div className="paginationBox">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productsCount}
          onChange={setCurrentPageNo}
          nextPageText="next"
          prevPageText="prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClas="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div>
    </>
  );
}

export default Products;
