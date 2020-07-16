import React, {Component} from 'react';

class ProductList extends Component{
    render(){
        const { products } = this.props;
        const { category } = this.props;
        const { addItem } = this.props;
        const productList = products.map(product => {
            if(product.category===category || category === null || category==="allProducts"){
                console.log(addItem)
                return(
                    <div key={product.id}>
                        <div>{product.name} : {product.price}$ <button onClick={addItem}>Add to Cart</button></div>
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