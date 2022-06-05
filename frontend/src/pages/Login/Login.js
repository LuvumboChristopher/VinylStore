import React from 'react'
import '../../css/singin.css'
import Content from './components/Content'
import Video from './components/Video'
import styled from 'styled-components'

const LoginVideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Singin = () => {
  return (
    <LoginVideoContainer>
      <Video />
      <Content />
    </LoginVideoContainer>
  )
}

export default Singin
