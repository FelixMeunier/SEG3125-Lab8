import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import FlavorList from "./FlavorList";
import AddOnsList from "./AddOnsList"

class CustomProducts extends Component{
    state = {
        product:null,
        price:0.00,
        productsEN:["Cake (29.99$)","Donut (4.99$)","Bread (9.99$)","Croissant (3.99$)","Cupcake (2.99$)","Muffin (3.49$)"],
        productsFR:["Gâteau (29,99$)","Beigne (4,99$)", "Pain (9,99$)","Croissant (3,99$)","Cupcake (2,99$)","Muffin (3,49$)"],
        flavorsEN:[
            {name:"Vanilla", price:0.00, category:"Cake (29.99$)", id:0},
            {name:"Chocolate", price:10.00, category:"Cake (29.99$)", id:1},
            {name:"Honey", price:0.00, category:"Donut (4.99$)", id:2},
            {name:"White", price:0.00, category:"Bread (9.99$)", id:3},
            {name:"Whole Weat", price:5.00, category:"Bread (9.99$)", id:4},
            {name:"Butter", price:0.00, category:"Croissant (3.99$)", id:5},
            {name:"Vanilla", price:0.00, category:"Cupcake (2.99$)", id:6},
            {name:"Chocolate", price:1.00, category:"Cupcake (2.99$)", id:7},
            {name:"Chocolate Chip", price:0.00, category:"Muffin (3.49$)", id:8},
            {name:"Blueberry", price:0.50, category:"Muffin (3.49$)", id:9}
        ],
        flavorsFR:[
            {name:"Vanille", price:0.00, category:"Cake (29.99$)", id:0},
            {name:"Chocolat", price:10.00, category:"Cake (29.99$)", id:1},
            {name:"Miel", price:0.00, category:"Donut (4.99$)", id:2},
            {name:"Blanc", price:0.00, category:"Bread (9.99$)", id:3},
            {name:"Blé entier", price:5.00, category:"Bread (9.99$)", id:4},
            {name:"Beurre", price:0.00, category:"Croissant (3.99$)", id:5},
            {name:"Vanille", price:0.00, category:"Cupcake (2.99$)", id:6},
            {name:"Chocolat", price:1.00, category:"Cupcake (2.99$)", id:7},
            {name:"Brisures de chocolat", price:0.00, category:"Muffin (3.49$)", id:8},
            {name:"Bleuets", price:0.50, category:"Muffin (3.49$)", id:9}
        ],
        addOnsEN:[
            {name:"Sprinkles", price:1.99, category:"Cake (29.99$)", id:0},
            {name:"Sprinkles", price:0.49, category:"Cupcake (2.99$)", id:1}
        ],
        addOnsFR:[
            {name:"Confettis", price:1.99, category:"Cake (29.99$)", id:0},
            {name:"Confettis", price:0.49, category:"Cupcake (2.99$)", id:1}
        ],
        addToCartEN : "Add to Cart",
        addToCartFR : "Ajouter au panier",
        titlesEN:["Base Product*", "Flavor*", "Add-Ons"],
        titlesFR:["Produit de base*", "Saveur*", "Extras"],
        flavor:null,
        addOn:null
    }
    productChange = (e) => {
        this.setState({
            product:e.target.value
        });
        console.log(this.state.product);
    }

    updateFlavor = (flavor_) => {
        this.setState({flavor:flavor_});
        if(!(flavor_ === 0 && flavor_ === 1 && flavor_ === 6 && flavor_ === 7)){
            this.updateAddOn(null);
        }
        console.log(this.state.flavor);
    }
    updateAddOn = (addOn_) => {
        this.setState({addOn:addOn_});
        console.log(this.state.addOn);
    }

    formSubmit = (e) => {
        e.preventDefault();

        //get the addCustomItem method
        const { addCustomItem } = this.props;

        addCustomItem(this.state.flavor, this.state.addOn)
    }

    render(){

        //Language selector
        const { language } = this.props;
        var flavors;
        var addOns;
        var addToCart;
        var products;
        var titles;
        if(language === "EN"){
            products = this.state.productsEN;
            flavors = this.state.flavorsEN;
            addOns = this.state.addOnsEN;
            addToCart = this.state.addToCartEN;
            titles = this.state.titlesEN;

        }
        else if(language === "FR"){
            products = this.state.productsFR;
            flavors = this.state.flavorsFR;
            addOns = this.state.addOnsFR;
            addToCart = this.state.addToCartFR;
            titles = this.state.titlesFR;
        }
        //-----------------

        return(
            <div>
                
                <form onSubmit={this.formSubmit}>
                    <h2>{titles[0]}</h2>
                    <input className="margin" type="radio" name="product" value="Cake (29.99$)" onChange={this.productChange}></input><label>{products[0]}</label><br></br>    
                    <input className="margin" type="radio" name="product" value="Donut (4.99$)" onChange={this.productChange}></input><label>{products[1]}</label><br></br>
                    <input className="margin" type="radio" name="product" value="Bread (9.99$)" onChange={this.productChange}></input><label>{products[2]}</label><br></br>
                    <input className="margin" type="radio" name="product" value="Croissant (3.99$)" onChange={this.productChange}></input><label>{products[3]}</label><br></br>
                    <input className="margin"type="radio" name="product" value="Cupcake (2.99$)" onChange={this.productChange}></input><label>{products[4]}</label><br></br>
                    <input className="margin" type="radio" name="product" value="Muffin (3.49$)" onChange={this.productChange}></input><label>{products[5]}</label><br></br>
                    <h2>{titles[1]}</h2>
                    <FlavorList flavors={flavors} category={this.state.product} updateFlavor={this.updateFlavor}/>
                    <h2>{titles[2]}</h2>
                    <AddOnsList addOns={addOns} category={this.state.product} updateAddOn={this.updateAddOn}/>
                    <Button>{addToCart}</Button>
                </form>
                
            </div>
            
        )
    }
}

export default CustomProducts;