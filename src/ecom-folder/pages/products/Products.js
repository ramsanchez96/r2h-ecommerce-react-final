import React from "react";
import ProductCard from "./ProductCard";

const Products = (props) => {

    if (props.hasWaters === false) {
      return null;
    }

    return (
      <div>
        <h2 className="productHeading">Filter By:</h2>
        <form onSubmit={props.handleFilter} className="filter">
          <label className="filter__label">Type:</label>
          <select id="filterProductType" className="filter__select">
            <option value="--">--</option>
            <option value="flavoredWaters">Flavored Waters</option>
            <option value="unflavoredWaters">Unflavored Waters</option>
          </select>
          <label className="filter__label">Price:</label>
          <select id="filterProductPrice" className="filter__select">
            <option value="--">--</option>
            <option value="0-5">$0.00 - $5</option>
            <option value="6-10">$6.00 - $10.00</option>
            <option value="11-25">$11.00 - $25.00</option>
          </select>
          <input type="submit" value="Filter"   className="filter__submit"/>
        </form>
        <div className="productCardContainer">
          {props.filteredWaters.map(el => <ProductCard info={el} key={el.productId} />)}
        </div>
      </div>
    );
  }

export default Products;
