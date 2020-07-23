import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ProductList extends Component{
    render(){
        const { products } = this.props;
        const { category } = this.props;
        const { addItem } = this.props;
        const { addToCart } = this.props; 
        const productList = products.map(product => {
            if(product.category===category || category === null || category==="allProducts"){
                return(
                    <div key={product.id}>
                        <div>{product.name} : {product.price}$ <Button size="sm" onClick={() => addItem(product.id)}>{addToCart}</Button></div>
                    </div>
                )
            }
            
        })
        return(
            <div>
                { productList }
            </div>
        )
    }
}

export default ProductList;