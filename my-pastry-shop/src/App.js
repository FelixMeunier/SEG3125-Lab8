import React, {Component} from 'react';
import About from './About';
import HowItWorks from './HowItWorks';
import Products from './Products';
import CustomProducts from './CustomProducts';
import Cart from './Cart';
import Error from './Error';
import cartimg from './cartimg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import {
  Route,
  NavLink,
  HashRouter,
  Switch,
} from "react-router-dom";

class App extends Component {
  state = {
    language : "EN",
    otherLanguage : "FR",
    value:{},
    products : [
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0},
      {quantity:0}
    ],
    numItems:0
  }

  addItem = (id) => {
    var array = this.state.products;
    var product = array[id];
    var num = this.state.numItems;
    product.quantity++;
    num++
    array[id] = product;
    this.setState({
      products : array,
      numItems : num
    })
    console.log(this.state.products);
  }

  addCustomItem = (flavor, addOn) => {
    if(flavor === null){
      return;
    }
    if(addOn === null){
      this.addItem(flavor);
    }
    //handle sprinkles
    if(addOn === 0 || addOn === 1){
      this.addItem(flavor+10);
    }
  }

  changeLanguage = () => {
    var temp = this.state.language;
    this.setState({
      language : this.state.otherLanguage
    });
    this.setState({
      otherLanguage : temp
    });
  }

  render (){
    var about;
    var howItWorks;
    var products;
    var customProducts;
    var cart;
    if(this.state.language === "EN"){
      about = "About";
      howItWorks = "How it Works";
      products = "Products";
      customProducts = "Custom Products";
    }
    else if(this.state.language === "FR"){
      about = "À propos";
      howItWorks = "Comment ça fonctionne";
      products = "Produits";
      customProducts = "Produits personnalisés";
    }
    return(
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1>Your Pastry Shop</h1>
            
            <ul>
                <li><NavLink to="/">{about}</NavLink></li>
                <li><NavLink to="/how-it-works">{howItWorks}</NavLink></li>
                <li><NavLink to="/products">{products}</NavLink></li>
                <li><NavLink to="/custom-products">{customProducts}</NavLink></li>
                <li><Button variant="outline-primary" onClick={this.changeLanguage}>{this.state.otherLanguage}</Button></li>
                <li><NavLink to="/cart"><img src={cartimg} width="25" height="25"></img>{this.state.numItems}</NavLink></li>
            </ul>
              
          </header>
          <div className="content">
            <Switch>
              <Route exact path="/" render={props => <About {...props} language={this.state.language}/>}/>
              <Route exact path="/how-it-works" render={props => <HowItWorks {...props} language={this.state.language}/>}/>
              <Route exact path="/products" render={props => <Products {...props} language={this.state.language} addItem = {this.addItem}/>} />
              <Route exact path="/custom-products" render={props => <CustomProducts {...props} language={this.state.language} addCustomItem = {this.addCustomItem}/>}/>
              <Route exact path="/cart" render={props => <Cart {...props} language={this.state.language} products={this.state.products}/>}/>
              <Route path="*" render={props => <Error {...props} language={this.state.language}/>}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
