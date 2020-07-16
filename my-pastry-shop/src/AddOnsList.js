import React, {Component} from 'react';

class AddOnsList extends Component{
    render(){
        const { addOns } = this.props;
        const { category } = this.props;
        const addOnsList = addOns.map(addOn => {
            if(addOn.category===category){
                return(
                    <div key={addOn.id}>
                        <div><input type="checkbox"></input>{addOn.name} : +{addOn.price}$</div>
                    </div>
                )
            }
            
        })
        return(
            <div>
                { addOnsList }
            </div>
        )
    }
}

export default AddOnsList;