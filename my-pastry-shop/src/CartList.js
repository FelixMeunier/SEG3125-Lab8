import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class CartList extends Component{

    state = {
        productAssociationEN : [
            {name:"Vanilla Cake", price:29.99},
            {name:"Chocolate Cake", price:39.99},
            {name:"Honey Donut", price:4.99},
            {name:"White Bread", price:9.99},
            {name:"Whole Wheat Bread", price:14.99},
            {name:"Butter Croissant", price:3.99},
            {name:"Vanilla Cupcake", price:2.99},
            {name:"Chocolate Cupcake", price:3.99},
            {name:"Chocolate Chip Muffin", price:3.49},
            {name:"Blueberry Muffin", price:3.99},
            {name:"Vanilla Cake with Sprinkles", price:31.98},
            {name:"Chocolate Cake", price:41.98},
            {name:"Error", price:0},
            {name:"Error", price:0},
            {name:"Error", price:0},
            {name:"Error", price:0},
            {name:"Vanilla Cupcake with Sprinkles", price:3.48},
            {name:"Chocolate Cupcake", price:4.48},
            {name:"Error", price:0},
            {name:"Error", price:0}
        ],
        productAssociationFR : [
            {name:"Gâteau à la vanille", price:29.99},
            {name:"Gâteau au chocolat", price:39.99},
            {name:"Beigne au miel", price:4.99},
            {name:"Pain blanc", price:9.99},
            {name:"Pain au blé entier", price:14.99},
            {name:"Croissant au beurre", price:3.99},
            {name:"Cupcake à la vanille", price:2.99},
            {name:"Cupcake au chocolat", price:3.99},
            {name:"Muffin aux pépites de chocolat", price:3.49},
            {name:"Muffin aux bleuets", price:3.99},
            {name:"Gâteau à la vanille avec confettis", price:31.98},
            {name:"Gâteau au chocolat avec confettis", price:41.98},
            {name:"Erreur", price:0},
            {name:"Erreur", price:0},
            {name:"Erreur", price:0},
            {name:"Erreur", price:0},
            {name:"Cupcake à la vanille avec confettis", price:3.48},
            {name:"Cupcake au chocolat avec confettis", price:4.48},
            {name:"Erreur", price:0},
            {name:"Erreur", price:0}
        ],
        totalPrice:0,
        textFR:[" X "," : ", ",", "Total: ", "Supprimer"],
        textEN:[" X "," : ", ".","Total price: ", "Remove"],
    }

    render(){
        const { products } = this.props;
        const { language } = this.props;
        console.log(products);
        var totalPrice = 0;
        var productAssociation;
        var text;
        if(language === "FR"){
            productAssociation = this.state.productAssociationFR;
            text = this.state.textFR;
        }else if(language === "EN"){
            productAssociation = this.state.productAssociationEN;
            text = this.state.textEN;
        }
        const productList = products.map((product, index) => {
            if(product.quantity!==0){
                totalPrice +=product.quantity*productAssociation[index].price;
                return(
                <div id={index}><p>{productAssociation[index].name}{text[0]}{product.quantity}{text[1]}{(product.quantity*productAssociation[index].price).toString().replace(".",text[2])}$<Button variant="danger" size="sm">{text[4]}</Button></p></div>
                )
            }
            });

        return(
            <div>
                { productList }
                <p>{text[3]}{totalPrice.toFixed(2).replace(".",text[2])}$</p>
            </div>
        )
    }
}

export default CartList;