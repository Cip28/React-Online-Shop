import React from 'react'

export default function Product (props) {
    const {  product, onAdd } = props;

    return (
    
        
        <div className='product'>   
            <div className='img'>
            <img src={process.env.PUBLIC_URL + `/images/${product.image}`} />
            </div>    
            <div className=' d-flex justify-content-between align-items pt-3'>
                <h1 style={{fontSize:'1.7rem'}}>{product.name}</h1>
                <p  style={{fontSize:'1.4rem', color:'red'}}>${product.price}</p>
            </div>
            <p className='text-center' style={{ fontSize: '1.2rem' }}>{product.description}</p>
            <p className='btn-wrapper text-center'>
                <button className='btn btn-primary' onClick={() => onAdd(product)}>Add to cart</button> 
            </p>
        </div>
    )
}
