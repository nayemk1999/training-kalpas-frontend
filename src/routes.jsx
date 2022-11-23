import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
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
        </Switch>
      </BrowserRouter>
    );
  }
}
