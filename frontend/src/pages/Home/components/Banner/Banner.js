import React from 'react'
import SinginVideo from '../../../../assets/video/banner.mp4'
import data from '../../../../data/data.json'

import { BannerContainer, BannerVideo, BannerOverlay, CitacionContainer, Citacion   } from '../../style'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerOverlay></BannerOverlay>
      <BannerVideo src={SinginVideo} autoPlay loop muted />
      <CitacionContainer>
        <div>
          <Citacion>{data.banner.citation}</Citacion>
          <Citacion>{data.banner.author}</Citacion>
        </div>
      </CitacionContainer>
    </BannerContainer>
  )
}

export default Banner
