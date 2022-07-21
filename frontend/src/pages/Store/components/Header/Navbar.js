import React, { useContext } from 'react'
import VsLogoBlack from '../../../../assets/img/vs_logo_black.png'
import { IoBagSharp } from 'react-icons/io5'
import { RiLoginCircleFill } from 'react-icons/ri'
import { BsClipboardData } from 'react-icons/bs'
import { BsDoorOpenFill } from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'
import { BsFillVinylFill } from 'react-icons/bs'
import { SiHomebridge } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'
import  Axios  from 'axios'
import useAuth from '../../../../hooks/useAuth'
import styled from 'styled-components'

export const LogoStore = styled.img`
width: 230px;
  transition: transform 230ms ease-in-out;
  cursor: cursor;
  :hover {
    transform: scale(1.025);
  }
`

const NavContent = () => {
  const { auth, logout } = useAuth()
  const { state } = useContext(StoreContext)
  const { cart } = state
  const navigate = useNavigate()

  const signoutHandler = async () => {  
    try {
      await Axios.get(
        'http://localhost:5000/api/v1/auth/logout',
        {
          withCredentials: true
        }
      )
      logout()
      navigate('/store')
    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <nav className='store_nav_container'>
      <ul>
        {auth.user ? (
          <div className='dropdown'>
            <Link to={''} className='dropbtn'>
              <BsFillVinylFill style={{ fontSize: '1.6em' }} /> Mon Compte
            </Link>
            <div className='dropdown-content'>
              <Link to={''}>
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
          <LogoStore src={VsLogoBlack} alt='logo' className='vs_logo_black'/>
        </Link>
      </div>
      <div>
        <NavContent />
      </div>
    </div>
  )
}

export default Navbar
