import React, { Component } from 'react';
import '../src/assets/App.css';
import Nav from './ecom-folder/pages/Nav';
import Footer from './ecom-folder/pages/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from './ecom-folder/pages/products/Products';
import Home from './ecom-folder/pages/home/Home';
import Contact from './ecom-folder/pages/contact/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/products" component={Products} exact/>
            <Route path="/contact" component={Contact} exact/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
