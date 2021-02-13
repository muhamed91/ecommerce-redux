import "./App.css";
import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
    const { products } = this.state;

    return (
      <div className='grid-container'>
        <header className='App-header'>
          <a href='/'>Nike Shoes Shopping</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Products products={products} />
            </div>
            <div className='sidebar'>
              <strong>Cart Items</strong>
            </div>
          </div>
        </main>
        <footer>All Richt reserved Nike</footer>
      </div>
    );
  }
}

export default App;
