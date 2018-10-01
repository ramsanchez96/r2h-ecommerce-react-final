import React, { Component } from "react";
import "../src/assets/App.css";
import Nav from "./ecom-folder/pages/Nav";
import Footer from "./ecom-folder/pages/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./ecom-folder/pages/products/Products";
import Home from "./ecom-folder/pages/home/Home";
import Contact from "./ecom-folder/pages/contact/Contact";
import Callback from "./Callback";
import Admin from "./ecom-folder/pages/admin/Admin";
import SecuredRoute from "./SecuredRoute";

class App extends Component {
  constructor() {
    super();

    this.state = {
      waters: [],
      hasWaters: false,
      filteredWaters: []
    };
  }

  //PRODUCTS PAGE
  componentDidMount() {
    fetch("http://localhost:8080/products/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          waters: data.products,
          hasWaters: true,
          filteredWaters: data.products
        });
      });
  }

  handleFilter = e => {
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
        } else {
          return null;
        }
      });
    }

    if (productPriceValue !== "--") {
      productArray = productArray.filter(el => {
        var minmax = productPriceValue.split("-");
        var min = parseInt(minmax[0], 10);
        if (minmax.length === 2) {
          var max = parseInt(minmax[1], 10);
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

  //ADMIN PAGE
  


  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/products"
              render={() => (
                <Products
                  filteredWaters={this.state.filteredWaters}
                  hasWaters={this.state.hasWaters}
                  handleFilter={e => this.handleFilter(e)}
                />
              )}
              exact
            />
            <Route path="/contact" component={Contact} exact />
            <SecuredRoute
              path="/admin"
              component={Admin}
              filteredWaters={this.state.filteredWaters}
              hasWaters={this.state.hasWaters}
              exact
            />
            <Route exact path="/callback" component={Callback} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
