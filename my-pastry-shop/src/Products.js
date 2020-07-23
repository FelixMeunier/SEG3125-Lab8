import React, {Component} from 'react';

import ProductList from "./ProductList";
import Button from 'react-bootstrap/Button';

class Products extends Component{
    state = {
        shopEN : ["Shop Cakes","Shop Donuts","Shop Bread","Shop Croissants","Shop Cupcakes","Shop Muffins","Shop All Products"],
        shopFR : ["Gâteaux","Beignes","Pains","Croissants","Cupcakes","Muffins","Tout les produits"],
        productsEN : [
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
        productsFR : [
            {name:"Gâteau à la vanille", price:29.99, category:"cakes", id:0},
            {name:"Gâteau au chocolat", price:39.99, category:"cakes", id:1},
            {name:"Beigne au miel", price:4.99, category:"donuts", id:2},
            {name:"Pain blanc", price:9.99, category:"bread", id:3},
            {name:"Pain au blé entier", price:14.99, category:"bread", id:4},
            {name:"Croissant au beurre", price:3.99, category:"croissants", id:5},
            {name:"Cupcake à la vanille", price:2.99, category:"cupcakes", id:6},
            {name:"Cupcake au chocolat", price:3.99, category:"cupcakes", id:7},
            {name:"Muffin aux pépites de chocolat", price:3.49, category:"muffins", id:8},
            {name:"Muffin aux bleuets", price:3.99, category:"muffins", id:9}
        ],
        addToCartEN : "Add to Cart",
        addToCartFR : "Ajouter au panier",
        categorySel:null
    }
    shop = (e) => {
        this.setState({
            categorySel: e.target.value
        });
    }
    render(){
        //get the addItem method
        const { addItem } = this.props;

        //Language selector
        const { language } = this.props;
        var products;
        var shop;
        var addToCart;
        if(language === "EN"){
            products = this.state.productsEN;
            shop = this.state.shopEN;
            addToCart = this.state.addToCartEN;

        }
        else if(language === "FR"){
            products = this.state.productsFR;
            shop = this.state.shopFR;
            addToCart = this.state.addToCartFR;
        }
        //-----------------

        return(
            <div className="split left">
                <div>
                    <Button variant="outline-primary" value="cakes" onClick={this.shop}>{shop[0]}</Button><br></br>
                    <Button variant="outline-primary" value="donuts" onClick={this.shop}>{shop[1]}</Button><br></br>
                    <Button variant="outline-primary" value="bread" onClick={this.shop}>{shop[2]}</Button><br></br>
                    <Button variant="outline-primary" value="croissants" onClick={this.shop}>{shop[3]}</Button><br></br>
                    <Button variant="outline-primary" value="cupcakes" onClick={this.shop}>{shop[4]}</Button><br></br>
                    <Button variant="outline-primary" value="muffins" onClick={this.shop}>{shop[5]}</Button><br></br>
                    <Button variant="outline-primary" value="allProducts" onClick={this.shop}>{shop[6]}</Button><br></br>
                </div>
                <div className="split right">
                    <ProductList products={products} category={this.state.categorySel} addToCart={addToCart} addItem={addItem}/>
                </div>
            </div>
        )
    }
}

export default Products;