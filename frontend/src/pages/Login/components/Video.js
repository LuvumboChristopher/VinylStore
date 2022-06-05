import React from 'react'
import SinginVideo from '../../../assets/video/video.mp4'
import styled from 'styled-components'

const LoginVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(3, 2, 2, 0.655);
`


const Video = () => {
  return (
    <>
      <Overlay></Overlay>
      <LoginVideo src={SinginVideo} autoPlay loop muted />
    </>
  )
}

export default Video
