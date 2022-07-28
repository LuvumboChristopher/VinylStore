import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SinginVideo from '../../assets/video/video.mp4'
import Vslogo from '../../assets/img/vs_logo.png'

import {
  LoginVideoContainer,
  LoginVideo,
  Overlay,
  LoginHeader,
  VsLogo,
  LoginSubtitle,
  LoginContainer,
  LoginContentContainer,
} from './style'
import Form from './components/Form'
import useAuth from '../../hooks/useAuth'



const Login = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (auth.user) {
      navigate('/store')
    }
  }, [navigate, auth])

  return (
    <LoginVideoContainer>
      <Video />
      <Content />
    </LoginVideoContainer>
  )
}

const Video = () => {
  return (
    <>
      <Overlay></Overlay>
      <LoginVideo src={SinginVideo} autoPlay loop muted />
    </>
  )
}


const Content = () => {
  return (
    <LoginContainer>
      <LoginContentContainer>
        <Title />
        <Form />
      </LoginContentContainer>
    </LoginContainer>
  )
}

const Title = () => {
  const navigate = useNavigate()
  return (
    <LoginHeader
      onClick={() => navigate('/store')}
      style={{ cursor: 'pointer' }}
    >
      <VsLogo src={Vslogo} title='VinyleStore Logo' alt='VinylStore Logo' />
      <LoginSubtitle>Bienvenue a la maison du vinyle</LoginSubtitle>
    </LoginHeader>
  )
}


export default Login
