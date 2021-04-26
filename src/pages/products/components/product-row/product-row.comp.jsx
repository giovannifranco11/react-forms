import  React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">

            {
                props.product.stock === 0
                ?//if true
                <span className="product-without-stock">{props.product.name}</span>
                ://else
                <span>{props.product.name}</span>
            }            
           {' '} {props.product.price}
        </div>
    );
    
}

export default ProductRow ;