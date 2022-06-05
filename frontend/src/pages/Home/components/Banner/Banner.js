import React from 'react'
import SinginVideo from '../../../../assets/video/banner.mp4'
import styled from 'styled-components'
import data from '../../../../data/data.json'

const BannerContainer = styled.div`
  width: 100%;
  height: 330px;
  border-top: 3px solid white;

  position: relative;
`

const BannerVideo = styled.video`
  width: 100%;
  height: 328px;
  object-fit: cover;
`
const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 328px;
  background-color: rgba(3, 2, 2, 0.81);
`
const CitacionContainer = styled.div`
  width: 100%;
  position: absolute;
  border-bottom: 3px solid white;
  top: 0;
  left: 0;
  height: 328px;
  display: grid;
  place-items: center;
`
const Citacion = styled.p`
  width: 95%;
  margin: auto;
  display: block;
  color: white;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 6px;
`

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
