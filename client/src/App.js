import React, { useEffect } from 'react'
import './css/style.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Store/Product/Product'
import Singup from './pages/Signup/Singup'
import Login from './pages/Login/Login'
import Store from './pages/Store/Store'
import Cart from './pages/Store/Cart/Cart'
import Shipping from './pages/Store/Shipping/Shipping'
import Payment from './pages/Store/Payment/Payment'
import Order from './pages/Store/Order/Order'
import Commande from './pages/Store/Commande/Commande'
import ScrollToTop from './pages/Home/components/ScrollToTop/ScrollToTop'
import useAuth from './hooks/useAuth'
import RequireAuth from './utils/RequireAuth'
import { UserProfile } from './pages/UserProfile/UserProfile'
import { Historique } from './pages/Store/Historique/Historique'


function App() {
  const { auth, checkUser } = useAuth()
  const location = useLocation()

  useEffect(() => {
    checkUser()
  }, [checkUser, auth.user, location])

  return (
    <div className='container'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inscription' element={<Singup />} />
        <Route path='/connexion' element={<Login />} />
        <Route path='/store' element={<Store />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/panier' element={<Cart />} />
        <Route
          path='/expedition'
          element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          }
        />
        <Route
          path='/paiement'
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path='/commander'
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path='/commande/:id'
          element={
            <RequireAuth>
              <Commande />
            </RequireAuth>
          }
        />
        <Route
          path='/profil'
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path='/historique'
          element={
            <RequireAuth>
              <Historique />
            </RequireAuth>
          }
        />

        {/* Crear una pagina 404 */}
        {/* <Route path='*' element={<Store />} /> */}
      </Routes>
    </div>
  )
}

export default App
