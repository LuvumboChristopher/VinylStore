import React from 'react'
import './css/style.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Product from './pages/Store/Product/Product'
import Singup from './pages/Signup/Singup'
import Login from './pages/Login/Login'
import Store from './pages/Store/Store'
import Cart from './pages/Store/Cart/Cart'
import Shipping from './pages/Store/Shipping/Shipping'
import Payment from './pages/Store/Payment/Payment'
import Order from './pages/Store/Order/Order'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route>
          <Route exact path='/store' element={<Store />} />
          <Route exact path='store/products/:id' element={<Product />} />
        </Route>
        <Route path='/inscription' element={<Singup/>} />
        <Route path='/se-connecter' element={<Login/>} />
        <Route path='/panier' element={<Cart/>} />
        <Route path='/expedition' element={<Shipping/>} />
        <Route path='/paiement' element={<Payment/>} />
        <Route path='/commande' element={<Order/>} />
      </Routes>
    </div>
  )
}

export default App
