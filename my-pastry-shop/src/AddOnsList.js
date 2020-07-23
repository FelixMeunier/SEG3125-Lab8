import React, {Component} from 'react';

class AddOnsList extends Component{

    updateAddOnState = (e) => {
        const { updateAddOn } = this.props;
        if(e.target.checked){
            updateAddOn(0);
        }
        else{
            updateAddOn(null);
        }
        
    }

    render(){
        const { addOns } = this.props;
        const { category } = this.props;
       
        const addOnsList = addOns.map(addOn => {
            if(addOn.category===category){
                return(
                    <div key={addOn.id}>
                        <div><input className="margin" type="checkbox" onChange={this.updateAddOnState}></input><label>{addOn.name} : +{addOn.price}$</label></div>
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