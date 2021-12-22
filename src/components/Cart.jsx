import React from 'react'
import { Link } from 'react-router-dom'


export default function Cart (props) {
    const { itemCart, onAdd, onRemove, onDelete} = props;
    
    const itemPrice = itemCart.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.19;
    const shippingTax = itemPrice > 200 ? 0 : 20;
    const totalPrice = itemPrice + taxPrice + shippingTax;

    return (

        <aside>
        <div className='card-item'>
            <h1 className='d-flex justify-content-center mt-5'>{itemCart.length === 0 ? <p>Your cart is empty.</p> : <p>Your shopping cart:</p>}</h1>
            <hr/>
                {itemCart.map(item => (
                    <div key={item.id} className=''>
                        <div className='cart d-flex justify-content-around'>
                            <img src={`/images/${item.image}`} className='cart-image' alt={item.description} />
                            <div>
                                    <h3>{item.name}</h3>
                                    <div className='d-flex justify-content-around'>
                                        <button onClick={()=> onAdd(item)} className='cart-btn btn-success'><i className="bi bi-plus"></i></button>
                                        <button onClick={()=> onRemove(item)} className='cart-btn btn-warning'><i className="bi bi-dash"></i></button>
                                        <button onClick={()=> onDelete(item)} className='cart-btn btn-danger'><i className="bi bi-trash"></i></button>
                                    </div>
                
                                <p>{item.description}</p>
                                <h5>{item.qty} x ${item.price} = ${item.qty * item.price}</h5>
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))}

                
                {itemCart.length !== 0 && (
                    <div>
                        <div className='row px-5'>
                            <div className='d-flex justify-content-between'>
                                <p>Item price: </p>
                                <p>${itemPrice.toFixed(2) }</p>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='d-flex justify-content-between'>
                                <p>Tax price: </p>
                                <p>${taxPrice.toFixed(2) }</p>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='d-flex justify-content-between'>
                                <p>Shipping tax: </p>
                                <p>${shippingTax.toFixed(2) }</p>
                            </div>
                        </div>
                        <div className='row px-5'>
                            <div className='d-flex justify-content-between'>
                                <h4>TOTAL: </h4>
                                <h4 >Total price: ${ totalPrice.toFixed(2)}</h4>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                           <Link to='/signup'><button className='btn btn-primary next-section-btn'>Shipping Address</button></Link> 
                        </div>
                    </div>
                )}   
                
                
        </div>
        </aside>
    )
}
