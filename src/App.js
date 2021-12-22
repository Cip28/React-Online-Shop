
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import Signup from './components/Signup'
import Final from './components/Final'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import data from './data.js'
import $ from "jquery";


function App () {
  const { products } = data;
  const [itemCart, setItemCart] = useState([]);
  const [clicked, setClicked] = useState(false);

  const onAdd = (product) => {
    const exist = itemCart.find(item => item.id === product.id);
    if (exist) {
      setItemCart(itemCart.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item))
    } else {
      setItemCart([...itemCart, { ...product, qty: 1 }]);
    }
    setClicked(true);
    $("#added").slideUp(300).delay(300).fadeIn(800).hide(1000)

  }


// -----------------------------------------
  const onRemove = (product) => {
    const exist = itemCart.find(item => item.id === product.id);
    if (exist.qty === 1) {
      setItemCart(itemCart.filter(item => item.id !== product.id));
    } else {
      setItemCart(itemCart.map(item => item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item))

    }
  }
// -----------------------------------------

  const onDelete = (product) => {
    setItemCart(itemCart.filter(item => item.id !== product.id));
  }

  return (
<Router>
      <div className='container1'>
        <header>
          <Header></Header>
        </header>
        <main>
        <Routes>        
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart itemCart={itemCart} setItemCart={setItemCart} onAdd={onAdd} onRemove={onRemove} onDelete={ onDelete} ></Cart>}></Route>
          <Route path="/products" element={<Products products={products} onAdd={onAdd} clicked={clicked}></Products>}></Route>
          <Route  path="/signup" element={<Signup></Signup>}></Route>
          <Route  path="/final" element={<Final/>}></Route>
        </Routes>
        </main>

        <footer>
           <Footer></Footer>
        </footer>
      </div>
</Router>
  );
}

export default App;
