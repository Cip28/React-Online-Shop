// import React,{useState} from 'react'
import Product from './Product'

export default function Products (props) {
    const { products, onAdd, clicked } = props;

    
    return (
        <div>
           
            {clicked && <div className='added' id='added'>Added to cart! <i className="bi bi-check"></i> </div>}
            <div className='products mt-5 d-flex justify-content-around'>
             {products.map(product => (
                <Product key={product.id} product={product} onAdd={onAdd} ></Product>
                ))
            }
            </div>
        </div>
    )
}
