import React, {Component} from 'react';

class FlavorList extends Component{
    render(){
        const { flavors } = this.props;
        const { category } = this.props;
        const flavorList = flavors.map(flavor => {
            if(flavor.category===category){
                return(
                    <div key={flavor.id}>
                        <div><input type="checkbox"></input>{flavor.name} : +{flavor.price}$</div>
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