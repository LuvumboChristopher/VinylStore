import React, { useState, useEffect, useRef } from 'react'
import VsLogoBlack from '../../../../assets/img/vs_logo_black.png'
import { IoCloseSharp } from 'react-icons/io5'
import { ResponsiveNavbar, HeaderImage, ResponsiveNavbarContent, NavContainer, MenuIcon } from '../../style'
import { useNavigate } from 'react-router-dom'

const ResponsiveMenu = () => {
  const ref = useRef()
  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(false)
  const [showNavbarMenu, setShowNavbarMenu] = useState(false)
  const [navbarTransparency, setNavbarTransparency] = useState(true)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showNavbarMenu && ref.current && !ref.current.contains(e.target)) {
        setShowNavbarMenu(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showNavbarMenu])

  useEffect(() => {
    setShowNavbar(true)
    window.addEventListener('scroll', () => {
      if (window.scrollY > 845) {
        setNavbarTransparency(false)
      } else {
        setNavbarTransparency(true)
      }
    })
  }, [showNavbar])

  const HandleMenu = () => {
    setShowNavbarMenu(!showNavbarMenu)
  }

  return (
    <>
      <ResponsiveNavbarContent ref={ref} showNavbarMenu={showNavbarMenu}>
        <IoCloseSharp
          style={{ color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}
          onClick={HandleMenu}
        />
        <div>
          <ul style={{ color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}>
            <li>
              <a
                href='/#accueil'
                onClick={() => setShowNavbarMenu(false)}
                style={{
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href='/#umdp'
                onClick={() => setShowNavbarMenu(false)}
                style={{
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
              >
                UMDP
              </a>
            </li>
            <li>
              <a
                href='/#services'
                onClick={() => setShowNavbarMenu(false)}
                style={{
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='/store'
                onClick={() => setShowNavbarMenu(false)}
                style={{
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
              >
                Store
              </a>
            </li>
            <li>
              <a
                href='/#contact'
                onClick={() => setShowNavbarMenu(false)}
                style={{
                  color: 'white',
                  fontSize: '2rem',
                  cursor: 'pointer',
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNavbarContent>
      {showNavbar && (
        <ResponsiveNavbar navbarTransparency={navbarTransparency}>
          <a href={'/#accueil'}>
            <HeaderImage
              src={navbarTransparency ? '' : VsLogoBlack}
              className='vs_logo_black'
            />
          </a>

          <MenuIcon
            onClick={HandleMenu}
            navbarTransparency={navbarTransparency}
          />
        </ResponsiveNavbar>
      )}
    </>
  )
}

export default ResponsiveMenu
