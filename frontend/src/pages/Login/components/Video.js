import React from 'react'
import SinginVideo from '../../../assets/video/video.mp4'

const Video = () => {
  return (
    <>
      <div className='overlay'></div>
      <video src={SinginVideo} autoPlay loop muted />
    </>
  )
}

export default Video
