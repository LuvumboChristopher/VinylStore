import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import vslogo from '../../../assets/img/vs_logo.png'

const Header = styled.div`
  width:100%;
  text-align: center;
`

const VsLogo = styled.img`
  width: clamp(270px, 37%, 600px);
  margin: 1.5rem auto;
  display: block;
`

const LoginSubtitle = styled.p`
  margin: 0;
  font-size: 0.36rem;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
`

const Title = () => {

  const navigate = useNavigate()
  return (
    <header onClick={() => navigate('/store')} style={{ cursor: 'pointer' }}>
      <VsLogo src={vslogo} title='VinyleStore Logo' alt='VinylStore Logo' />
      <LoginSubtitle>Bienvenue a la maison du vinyle</LoginSubtitle>
    </header>
  )
}

export default Title
