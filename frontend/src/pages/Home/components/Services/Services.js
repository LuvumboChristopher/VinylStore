import React from 'react'
import data from '../../../../data/data.json'

import CardImage1 from '../../../../assets/img/services_image_1.jpg'
import CardImage2 from '../../../../assets/img/services_image_2.jpg'
import CardImage3 from '../../../../assets/img/services_image_3.jpg'

import { ServicesSection, ServicesContainer, ContentContainer, Card, CardImage, CardTextContainer, CardTitle, CardText, CardImageContainer, ServicestHeader, ServicesTitle, ServicesSubtitle   } from '../../style'

const Services = () => {
  return (
    <ServicesSection id='services'>
      <ServicestHeader>
        <ServicesTitle>Nos Services</ServicesTitle>
        <ServicesSubtitle>Nos différents produits et services</ServicesSubtitle>
      </ServicestHeader>
      <ServicesContainer>
        <ContentContainer>
          <Card>
            <CardImageContainer>
              <CardImage
                src={CardImage1}
                title='Vinyles exclusives'
                alt='Vinyles exclusives img'
              />
            </CardImageContainer>
            
            <CardTextContainer>
              <CardTitle>{data.services.title_1}</CardTitle>
              <CardText>{data.services.text}</CardText>
            </CardTextContainer>
          </Card>
          <Card reverse>
            <CardImageContainer>
              <CardImage
                src={CardImage2}
                title='Vinyles exclusives'
                alt='Vinyles exclusives img'
              />
            </CardImageContainer>
            <CardTextContainer>
              <CardTitle>{data.services.title_2}</CardTitle>
              <CardText>{data.services.text}</CardText>
            </CardTextContainer>
          </Card>
          <Card>
            <CardImageContainer>
              <CardImage
                src={CardImage3}
                title='Vinyles exclusives'
                alt='Vinyles exclusives img'
              />
            </CardImageContainer>
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
