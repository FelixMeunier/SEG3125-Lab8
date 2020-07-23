import React, {Component} from 'react';

class Error extends Component{

    state = ({
        textEN : "Unicorns don't exist... So does this page! (Error 404)",
        textFR : "Les licornes n'existent pas, il en est de même pour cette page! (Erreur 404)"
    })

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
            <h2>{text}</h2>
        );
    }
}

export default Error;