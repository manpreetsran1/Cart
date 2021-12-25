import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import Product from "../product/Product";
import Profile from "../../images/Profile.png";
import MetaData from "../../components/layout/MetaData";
import { getProduct } from "../../store/actions/product";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import { useAlert } from "react-alert";

import "./Home.css";
const product = {
  name: "blue tshirt",
  images: [{ url: Profile }],
  price: "3000",
  _id: "mmmm",
};

function Index() {
  // const Alert = useAlert();

  const Dispatch = useDispatch();

  const StateData = useSelector((state) => state.products);
  const { product, loading, productsCount, error } = StateData;
  useEffect(() => {
    if (error) {
      return console.log("error");
    }
    Dispatch(getProduct());
  }, [Dispatch]);

  console.log(StateData, "StateData");
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Home"} />
          <div className="banner">
            <p>welcom to ecommerce</p>
            <h1>FInd Amazing Product Below</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <div className="featured-section">
            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
              {product &&
                product.map((product) => <Product product={product} />)}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Index;
