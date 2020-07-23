import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class HowItWorks extends Component{
    state = {
        text1EN:"Your Pastry Shop allows its customers to create custom pastry designs and get them delivered to their homes.",
        text1FR:"Vous pouvez acheter des produits dans la section Produits et les personnaliser dans votre panier, ou accéder directement à Produits personnalisés pour créer vos produits personnalisés.",
        text2EN:"If you need assisance, contact us at (XXX)XXX-XXXX.",
        text2FR:"Si vous avez besoin d'aide, contactez-nous au (XXX) XXX-XXXX."
    }

    render(){

        //Language selector
        const { language } = this.props;
        var text1;
        var text2;
        if(language === "EN"){
            text1 = this.state.text1EN;
            text2 = this.state.text2EN;
        }
        else if(language === "FR"){
            text1 = this.state.text1FR;
            text2 = this.state.text2FR;
        }
        //-----------------

        return(
            <div>
                <br></br>
                <Jumbotron>
                    <h3>
                        {text1}
                    </h3>
                    <br></br>
                    <h3>
                        {text2}
                    </h3>
                </Jumbotron>
            </div>
        )
    }
}

export default HowItWorks;