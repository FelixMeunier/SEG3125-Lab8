import React, {Component} from 'react';
import About from './About';
import HowItWorks from './HowItWorks';
import Products from './Products';
import CustomProducts from './CustomProducts';
import Cart from './Cart';


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  state = {
    products : [],
  }

  addItem = () => {
    console.log("Add item")
  }

  render (){
    return(
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1>Your Pastry Shop</h1>
            
            <ul>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/how-it-works">How it Works</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/custom-products">Custom Products</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
              
          </header>
          <div className="content">
              <Route exact path="/" component={About}/>
              <Route exact path="/how-it-works" component={HowItWorks}/>
              <Route exact path="/products" component={Products} addItem={this.addItem}/>
              <Route exact path="/custom-products" component={CustomProducts}/>
              <Route exact path="/cart" component={Cart}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
