import React from 'react'
import SinginVideo from '../../../assets/video/video.mp4'

import { LoginVideo, Overlay} from '../style';

const Video = () => {
  return (
    <>
      <Overlay></Overlay>
      <LoginVideo src={SinginVideo} autoPlay loop muted />
    </>
  )
}

export default Video
