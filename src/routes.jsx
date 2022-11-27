import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/products/ProductDetails";
import Products from "./pages/products/Products";
import UserDetails from "./pages/Users/UserDetails";
import Users from "./pages/Users/Users";

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/products" component={Products} />
          <Route path="/add-product" component={Products} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/user/:id" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
