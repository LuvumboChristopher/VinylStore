import React from 'react'
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
  ContentContainer,
} from './style'
import Form from './components/Form'



const Login = () => {
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
      <ContentContainer>
        <Title />
        <Form />
      </ContentContainer>
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
