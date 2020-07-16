import React, {Component} from 'react';

import ProductList from "./ProductList";

class Products extends Component{
    state = {
        products : [
            {name:"Vanilla Cake", price:29.99, category:"cakes", id:0},
            {name:"Chocolate Cake", price:39.99, category:"cakes", id:1},
            {name:"Honey Donut", price:4.99, category:"donuts", id:2},
            {name:"White Bread", price:9.99, category:"bread", id:3},
            {name:"Whole Wheat Bread", price:14.99, category:"bread", id:4},
            {name:"Butter Croissant", price:3.99, category:"croissants", id:5},
            {name:"Vanilla Cupcake", price:2.99, category:"cupcakes", id:6},
            {name:"Chocolate Cupcake", price:3.99, category:"cupcakes", id:7},
            {name:"Chocolate Chip Muffin", price:3.49, category:"muffins", id:8},
            {name:"Blueberry Muffin", price:3.99, category:"muffins", id:9}
        ],
        categorySel:null
    }
    shop = (e) => {
        this.setState({
            categorySel: e.target.value
        });
    }
    render(){
        const { addItem } = this.props;
        
        return(
            <div className="split left">
                <div>
                    <button value="cakes" onClick={this.shop}>Shop Cakes</button><br></br>
                    <button value="donuts" onClick={this.shop}>Shop Donuts</button><br></br>
                    <button value="bread" onClick={this.shop}>Shop Bread</button><br></br>
                    <button value="croissants" onClick={this.shop}>Shop Croissants</button><br></br>
                    <button value="cupcakes" onClick={this.shop}>Shop Cupcakes</button><br></br>
                    <button value="muffins" onClick={this.shop}>Shop Muffins</button><br></br>
                    <button value="allProducts" onClick={this.shop}>Shop All Products</button><br></br>
                </div>
                <div className="split right">
                    <ProductList products={this.state.products} category={this.state.categorySel} addItem={this.addItem}/>
                </div>
            </div>
        )
    }
}

export default Products;