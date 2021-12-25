import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";

function Search() {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };
  return (
    <div>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        "
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
