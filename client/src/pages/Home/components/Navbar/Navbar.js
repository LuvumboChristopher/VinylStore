import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NavContainer, NavLink, NavIcon, NavTitle } from '../../style'

const Navbar = () => {
  const navigate = useNavigate()
  return (
      <NavContainer>
        <NavLink>
          <NavIcon
            href='#accueil'
          ></NavIcon>
          <NavTitle>Accueil</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            href='#umdp'
          ></NavIcon>
          <NavTitle>UMDP</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            href='#services'
          ></NavIcon>
          <NavTitle>Services</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            onClick={() => navigate('/store')}
          ></NavIcon>
          <NavTitle>Store</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            href='#contact'
          ></NavIcon>
          <NavTitle>Contact</NavTitle>
        </NavLink>
      </NavContainer>
  )
}

export default Navbar
