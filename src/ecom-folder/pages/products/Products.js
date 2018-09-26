import React, { Component } from "react";
import ProductCard from "./ProductCard";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      waters: [],
      hasWaters: false,
      filteredWaters: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/products/")
      .then(response => 
        response.json()
      
      )
      .then(data => {
        this.setState({
          waters: data.products,
          hasWaters: true,
          filteredWaters: data.products
        });
      });
  }

  callback = el => {
    return <ProductCard info={el} key={el.productId} />;
  };

  handleSubmit = e => {
    e.preventDefault();
    let productTypeValue = document.getElementById("filterProductType").value;
    let productPriceValue = document.getElementById("filterProductPrice").value;

    let productArray = this.state.waters;

    if (productTypeValue !== "--") {
      productArray = productArray.filter(el => {
        if (productTypeValue === "flavoredWaters") {
          return el.flavored;
        } else if (productTypeValue === "unflavoredWaters") {
          return !el.flavored;
        }
      });
    }

    if (productPriceValue !== "--") {
      productArray = productArray.filter(el => {
        var minmax = productPriceValue.split("-");
        var min = parseInt(minmax[0]);
        if (minmax.length === 2) {
          var max = parseInt(minmax[1]);
          if (el.price >= min && el.price <= max) {
            return true;
          } else {
            return false;
          }
        }

        if (el.price >= min) {
          return true;
        } else {
          return false;
        }
      });
    }
    this.setState({
      filteredWaters: productArray
    });
  };

  render() {
    if (this.state.hasWaters === false) {
      return null;
    }

    return (
      <div>
        <h2>Filter By:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Type-</label>
          <select id="filterProductType">
            <option value="--">--</option>
            <option value="flavoredWaters">Flavored Waters</option>
            <option value="unflavoredWaters">Unflavored Waters</option>
          </select>
          <label>Price-</label>
          <select id="filterProductPrice">
            <option value="--">--</option>
            <option value="0-5">$0.00 - $5</option>
            <option value="6-10">$6.00 - $10.00</option>
            <option value="11-25">$11.00 - $25.00</option>
          </select>
          <input type="submit" value="Filter" />
        </form>
        {this.state.filteredWaters.map(this.callback)}
      </div>
    );
  }
}

export default Products;
