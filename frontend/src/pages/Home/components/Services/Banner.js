import React from 'react'
import SinginVideo from '../../../../assets/video/banner.mp4'


const Banner = () => {
  return (
    <div className='bannerContainer'>
      <div className='banner_overlay'></div>
      <video src={SinginVideo} autoPlay loop muted />
      <div className='citation'>
        <header className='singin_container'>
          <div>
            <p>
              " Une chanson est une expérience : il n'y a pas besoin de
              comprendre les mots pour comprendre l'expérience. Essayer de
              comprendre le sens complet des mots peut détruire le sentiment de
              l'expérience dans son ensemble".
            </p>
            <p>Bob Dylan</p>
          </div>
          <div></div>
        </header>
      </div>
    </div>
  )
}

export default Banner