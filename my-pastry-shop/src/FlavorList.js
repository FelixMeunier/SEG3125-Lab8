import React, {Component} from 'react';

class FlavorList extends Component{
    render(){
        const { flavors } = this.props;
        const { category } = this.props;
        const { updateFlavor } = this.props;
        const flavorList = flavors.map(flavor => {
            if(flavor.category===category){
                return(
                    <div key={flavor.id}>
                        <div><input className="margin" name="flavors" type="radio" onChange={() => updateFlavor(flavor.id)}></input><label>{flavor.name} : +{flavor.price}$</label></div>
                    </div>
                )
            }
            
        })
        return(
            <div>
                { flavorList }
            </div>
        )
    }
}

export default FlavorList;