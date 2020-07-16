import React, {Component} from 'react';

class ProductsList extends Component{

    componentDidMount(){
        const {product } = this.props.location.state
    }

    render(){
        return(
            <p>Shop { this.props.location.state.product } Page!</p>
        )
    }
}

export default ProductsList;