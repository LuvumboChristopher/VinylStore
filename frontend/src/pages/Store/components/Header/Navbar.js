import React, { useContext } from 'react'
import VsLogoBlack from '../../../../assets/img/vs_logo_black.png'
import { IoBagSharp } from 'react-icons/io5'
import { IoPersonAdd } from 'react-icons/io5'
import { RiLoginCircleFill } from 'react-icons/ri'
import { BsClipboardData } from 'react-icons/bs'
import { BsDoorOpenFill } from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'
import { BsFillVinylFill } from 'react-icons/bs'
import { SiHomebridge } from 'react-icons/si'

import { Link, Navigate, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'
import  Axios  from 'axios'
import useAuth from '../../../../hooks/useAuth'


const NavContent = () => {
  const { auth, logout } = useAuth()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart, userInfo } = state
  const navigate = useNavigate()

  const signoutHandler = async () => {  
    try {
      const { data } = await Axios.get(
        'http://localhost:5000/api/v1/auth/logout',
        {
          withCredentials: true
        }
      )
      logout()
      ctxDispatch({ type: 'USER_SIGNOUT' })
      localStorage.removeItem('cart')
      navigate('/store')
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <nav className='store_nav_container'>
      <ul>
        {auth ? (
          <div className='dropdown'>
            <Link to={''} className='dropbtn'>
              <BsFillVinylFill style={{ fontSize: '1.6em' }} /> Mon compte
            </Link>
            <div className='dropdown-content'>
              <Link to='/profil'>
                <BsPersonCircle style={{ fontSize: '1.6em' }} />
                <p>Profil</p>
              </Link>
              <Link to='/historique'>
                <BsClipboardData style={{ fontSize: '1.6em' }} />
                <p>Suivi des commandes</p>
              </Link>
              <Link to={''} onClick={signoutHandler}>
                <BsDoorOpenFill style={{ fontSize: '1.6em' }} />
                <p>Déconnexion</p>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Link to='/connexion'>
              <RiLoginCircleFill style={{ fontSize: '1.6em' }} />
              Connexion
            </Link>
            <Link to='/inscription'>
              <IoPersonAdd style={{ fontSize: '1.3em' }} />
              Inscription
            </Link>
          </>
        )}
        <Link to='/' className='backtosite'>
          <SiHomebridge style={{ fontSize: '1.3em' }} />
          Visiter VinylStore.fr
        </Link>
        <Link to='/panier' className='cart_logo'>
          <div>
            <IoBagSharp style={{ color: 'white', fontSize: '1.8em' }} />
            <div>
              {cart.cartItems.length > 0 ? (
                <span>
                  {cart.cartItems.reduce(
                    (acc, current) => acc + current.quantity,
                    0
                  )}
                </span>
              ) : (
                <span>0</span>
              )}
            </div>
          </div>
        </Link>
      </ul>
    </nav>
  )
}

const Navbar = () => {
  return (
    <div className='store_header'>
      <div>
        <Link to='/store'>
          <img src={VsLogoBlack} alt='logo' className='vs_logo_black'/>
        </Link>
      </div>
      <div>
        <NavContent />
      </div>
    </div>
  )
}

export default Navbar
