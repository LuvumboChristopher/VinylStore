import React from 'react'
import { Link } from 'react-router-dom'
import VsLogoBlack from '../../../../assets/img/vs_logo_black.png'
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  margin: auto;
`

const HeaderwRapper = styled.div`
  width: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid black;
`

const HeaderLogo = styled.img`
  width: 275px;
  padding: 3rem;
  
`

const CartHeader = () => {
  return (
    <Header>
      <HeaderwRapper>
        <Link to='/store'>
          <HeaderLogo src={VsLogoBlack} alt='logo' className='vs_logo_black' />
        </Link>
        <Link to='/store'>Back to Store</Link>
      </HeaderwRapper>
    </Header>
  )
}

export default CartHeader
