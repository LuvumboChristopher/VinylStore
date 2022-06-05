import React from 'react'
import Content from './components/Content'
import Video from './components/Video'

import { LoginVideoContainer } from './style';

const Singin = () => {
  return (
    <LoginVideoContainer>
      <Video />
      <Content />
    </LoginVideoContainer>
  )
}

export default Singin
