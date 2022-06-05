import React from 'react'
import { useNavigate } from 'react-router-dom'
import Vslogo from '../../../assets/img/vs_logo.png'

import { LoginHeader, VsLogo, LoginSubtitle } from '../style';

const Title = () => {

  const navigate = useNavigate()
  return (
    <LoginHeader onClick={() => navigate('/store')} style={{ cursor: 'pointer' }}>
      <VsLogo src={Vslogo} title='VinyleStore Logo' alt='VinylStore Logo' />
      <LoginSubtitle>Bienvenue a la maison du vinyle</LoginSubtitle>
    </LoginHeader>
  )
}

export default Title
