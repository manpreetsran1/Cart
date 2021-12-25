import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./Pages/home/index";
import ProductDetail from "./Pages/product/ProductDetail";
import Products from "./Pages/product/Products";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/products/:keyword">
          <Products />
        </Route>
        <Route exact path="/Search">
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
