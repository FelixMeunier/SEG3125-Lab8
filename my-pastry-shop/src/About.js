import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class About extends Component{

    state = {
        textEN:"Your Pastry Shop allows its customers to create custom pastry designs and get them delivered to their homes.",
        textFR:"Your Pastry Shop permet à ses clients de créer des designs de pâtisserie personnalisés et de les faire livrer à domicile."
    }

    render(){

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
                <br></br>
                <Jumbotron>
                    <h3>
                        {text}
                    </h3>
                </Jumbotron>
            </div>
        )
    }
}

export default About;