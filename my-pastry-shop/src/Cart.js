import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

import CartList from "./CartList";

class Cart extends Component{

    state = {
        textEN:"Proceed to checkout",
        textFR:"Terminer la transaction"
    }

    render(){

        //Get list of products in cart
        const { products } = this.props;

        //Language selector
        const { language } = this.props;
        var text;
        if(language === "EN"){
            text = this.state.textEN;
        }
        else if(language === "FR"){
            text = this.state.textFR;
        }
        //-----------------

        return(
            <div>
                <CartList products={products} language={language}/>
                <form><Button variant="outline-danger">{text}</Button></form>
            </div>
        )
    }
}

export default Cart;