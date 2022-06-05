import React from 'react'
import Form from './Form'
import Title from './Title'
import styled from 'styled-components'

const LoginContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

const ContentContainer = styled.div`
  width: 70%;
  @media (max-width: 1200px) {
    width: 85%;
  }
`

const Content = () => {
  return (
    <LoginContainer>
      <ContentContainer>
        <Title/>
        <Form />
      </ContentContainer>
    </LoginContainer>
  )
}

export default Content