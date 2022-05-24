import React, { useContext } from 'react'
import VsLogoBlack from '../../../../assets/img/vs_logo_black.png'
import { IoBagSharp } from 'react-icons/io5'
import { IoPersonAdd } from 'react-icons/io5'
import { IoLogIn } from 'react-icons/io5'
import { BsClipboardData } from 'react-icons/bs'
import { BsDoorOpenFill } from 'react-icons/bs'
import { BsPersonCircle } from 'react-icons/bs'

import { BsFillVinylFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../../context/StoreProvider'

const NavContent = () => {
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart, userInfo } = state

  const singOutHanddler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
  }

  return (
    <nav className='store_nav_container'>
      <ul>
        {userInfo !== null ? (
          <div className='dropdown'>
            <Link to={''} className='dropbtn'>
              <BsFillVinylFill style={{ fontSize: '1.6em' }} /> Mon compte
            </Link>
            <div className='dropdown-content'>
              <Link to='/profil'>
                <BsPersonCircle style={{ fontSize: '1.6em' }} />
                <p>Profil</p>
              </Link>
              <Link to='/commandes'>
                <BsClipboardData style={{ fontSize: '1.6em' }} />
                <p>Suivi des commandes</p>
              </Link>
              <Link to={''} onClick={singOutHanddler}>
                <BsDoorOpenFill style={{ fontSize: '1.6em' }} />
                <p>Déconnexion</p>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Link to='/se-connecter'>
              <IoLogIn style={{ fontSize: '1.6em' }} />
              Connexion
            </Link>
            <Link to='/inscription'>
              <IoPersonAdd style={{ fontSize: '1.3em' }} />
              Inscription
            </Link>{' '}
          </>
        )}

        <Link to='/cart' className='cart_logo'>
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
          <img src={VsLogoBlack} alt='logo' className='vs_logo_black' />
        </Link>
      </div>
      <div>
        <NavContent />
      </div>
    </div>
  )
}

export default Navbar
