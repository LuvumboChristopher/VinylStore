import React from 'react'

import servicesFond from '../../../../assets/img/services_fond.jpg'

import Image1 from '../../../../assets/img/pexels-cottonbro-6863619.jpg'
import Image2 from '../../../../assets/img/pexels-cottonbro-6862363.jpg'
import Image3 from '../../../../assets/img/pexels-cottonbro-6862367.jpg'

import data from '../../../../data/data.json'
import styled from 'styled-components'

const ServicesSection = styled.section`
  width: 100%;
  height: 100%;
  background: url(${servicesFond});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`

const ContentContainer = styled.div`
  width: 80%;
  margin: 8rem auto;
  display: flex;
  justify-content: space-around;
  gap: 100px;
  @media (max-width: 1440px) {
    width: 90%;
    flex-direction: column;
  }
  @media (max-width: 668px) {
    width: 80%;
    flex-direction: column;
  }
`

const Card = styled.div`
  width: 60%;
  margin: 0 0 3rem;
  display: flex;
  flex-direction: column;
  place-items: center;
  background-color: rgba(200, 200, 200, 0.065);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (max-width: 1440px) {
    width: 90%;
    height: auto;
    margin: auto;
    justify-content: center;
    background-color: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
  @media (max-width: 668px) {
    width: 100%;
    flex-direction: column;
  }
`

const Image = styled.img`
  width: 100%;
  margin: auto;
  @media (max-width: 1440px) {
    width: 33%;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    border-right: 4px solid white;
  }
  @media (max-width: 668px) {
    width: 100%;
    border-right: none;
  }
`

const CardTextContainer = styled.div`
  width: 85%;
  height: 80%;
  margin: 1.6rem auto;
  color: white;
  @media (max-width: 1440px) {
    width: 58%;
    margin-top: 2.9rem;
  }
  @media (max-width: 668px) {
    width: 90%;
  }
`

const CardTitle = styled.h2`
  width: 100%;
  margin: auto auto 1.3rem 0;
  color: white;
`

const CardText = styled.p`
  font-size: 0.85rem;
  margin: auto;
  color: white;
  text-align: justify;
`


const Services = () => {
  return (
    <ServicesSection id='services'>
      <ServicesContainer>
        <ContentContainer>
          <Card>
            <Image
              src={Image1}
              title='Vinyles exclusives'
              alt='Vinyles exclusives img'
            />
            <CardTextContainer>
              <CardTitle>{data.services.title_1}</CardTitle>
              <CardText>{data.services.text}</CardText>
            </CardTextContainer>
          </Card>
          <Card reverse>
            <Image
              src={Image2}
              title='Vinyles exclusives'
              alt='Vinyles exclusives img'
            />
            <CardTextContainer>
              <CardTitle>{data.services.title_2}</CardTitle>
              <CardText>{data.services.text}</CardText>
            </CardTextContainer>
          </Card>
          <Card>
            <Image
              src={Image3}
              title='Vinyles exclusives'
              alt='Vinyles exclusives img'
            />
            <CardTextContainer>
              <CardTitle>{data.services.title_3}</CardTitle>
              <CardText>{data.services.text}</CardText>
            </CardTextContainer>
          </Card>
        </ContentContainer>
      </ServicesContainer>
    </ServicesSection>
  )
}

export default Services
