import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <div className='header'>
            <nav className='p-4 nav justify-content-between align-items-center' style={{backgroundColor: '#0a4275', color:"#fff"}}>
                <h2><Link to="/React-Online-Shop">Liquor store</Link></h2>
                <div className='px-5 '>
                    <Link to="/products" className='p-4'><i className="bi bi-shop"></i> Products</Link>
                    <Link to="/cart" className='p-4'><i className="bi bi-cart3"></i> Cart </Link>
                </div>
            </nav>
        </div>
    )
}
