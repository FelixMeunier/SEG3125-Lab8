import React, {Component} from 'react';

import FlavorList from "./FlavorList";
import AddOnsList from "./AddOnsList"

class CustomProducts extends Component{
    state = {
        product:null,
        price:0.00,
        flavors:[
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
        addOns:[
            {name:"Sprinkles", price:1.99, category:"Cake (29.99$)", id:0},
            {name:"Sprinkles", price:0.49, category:"Cupcake (2.99$)", id:1}
        ]
    }
    productChange = (e) => {
        this.setState({
            product:e.target.value
        });
        console.log(this.state.product);
    }
    render(){
        return(
            <div>
                <form>
                    <h2>Base Product</h2>
                    <input type="radio" name="product" value="Cake (29.99$)" onChange={this.productChange}></input><label>Cake (29.99$)</label><br></br>    
                    <input type="radio" name="product" value="Donut (4.99$)" onChange={this.productChange}></input><label>Donut (4.99$)</label><br></br>
                    <input type="radio" name="product" value="Bread (9.99$)" onChange={this.productChange}></input><label>Bread (9.99$)</label><br></br>
                    <input type="radio" name="product" value="Croissant (3.99$)" onChange={this.productChange}></input><label>Croissant (3.99$)</label><br></br>
                    <input type="radio" name="product" value="Cupcake (2.99$)" onChange={this.productChange}></input><label>Cupcake (2.99$)</label><br></br>
                    <input type="radio" name="product" value="Muffin (3.49$)" onChange={this.productChange}></input><label>Muffin (3.49$)</label><br></br>
                    <h2>Flavor</h2>
                    <FlavorList flavors={this.state.flavors} category={this.state.product}/>
                    <h2>Add-Ons</h2>
                    <AddOnsList addOns={this.state.addOns} category={this.state.product}/>
                    <h2>Total price: {this.state.price}$</h2>
                    <button>Add to Cart</button>
                </form>
            </div>
            
        )
    }
}

export default CustomProducts;