import React from 'react'
import Form from './Form'
import Title from './Title'

import { LoginContainer,ContentContainer  } from '../style';

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