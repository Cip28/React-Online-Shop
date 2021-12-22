import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>
            <h1>Welcome to our online shop!</h1>
            <p>Feel free to explore our newest products</p>
            <Link to="/products"> <button className='btn btn-secondary'>Explore</button></Link>
        </div>
    )
}
