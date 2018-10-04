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
      filterPrice: "",
      filterType: ""
    };
  }

  //PRODUCTS PAGE
  componentDidMount() {
    fetch("http://localhost:8080/products/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          waters: data.products,
          hasWaters: true
        });
      });
  }

  handleFilter = e => {
    e.preventDefault();

    this.setState({
      filterPrice: document.getElementById("filterProductPrice").value,
      filterType: document.getElementById("filterProductType").value
    });
  };

  //ADMIN PAGE
  handleProductDelete = e => {
    // console.log('here', e.target);
    // // let url = 'hello';
    const id = e.target.parentNode.querySelector(".adminCard__productId").innerHTML;
    fetch(`http://localhost:8080/products/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let adminWaters = this.state.waters;
        let updatedAdminWaters = adminWaters.filter(el => {
          if (data.productId !== el.productId) {
            return true;
          } else {
            return false;
          }
        });
        this.setState({
          waters: updatedAdminWaters
        });
      });
    // state: products: [water1, water2]
  };

  handleProductUpdate = e => {
    fetch(`http://localhost:8080/products/${e.productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(e)
    })
      .then(response => response.json())
      .then(data => {
        let adminWaters = this.state.waters;
        let updatedAdminWaters = adminWaters.map(el => {
          if (data.productId === el.productId) {
            return data;
          } else {
            return el;
          }
        });
        this.setState({
          waters: updatedAdminWaters
        });
      });
    // state: products: [water1, water2]
  };

  render() {
    let productArray = this.state.waters;
    const productTypeValue = this.state.filterType;
    const productPriceValue = this.state.filterPrice;

    if (productTypeValue !== "") {
      productArray = productArray.filter(el => {
        if (productTypeValue === "flavoredWaters") {
          return el.flavored;
        } else if (productTypeValue === "unflavoredWaters") {
          return !el.flavored;
        } else {
          return true;
        }
      });
    }

    if (productPriceValue !== "") {
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
                  waters={productArray}
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
              waters={this.state.waters}
              hasWaters={this.state.hasWaters}
              handleProductDelete={this.handleProductDelete}
              handleAddItem={this.handleAddItem}
              handleProductUpdate={this.handleProductUpdate}
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
