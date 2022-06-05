import React from 'react'
import data from '../../../../data/data.json'
import styled from 'styled-components'
import johnDoe from '../../../../assets/img/john_doe.png'

const UmdpContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media screen and (max-height: 1000px) {
    height: 1080px;
  }
`

const UmdpImg = styled.div`
  width: 100%;
  background: url(${johnDoe});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  display: none;
  transition: 0.5;
  @media (min-width: 1200px) {
    display: block;
  }
`

const UmdpTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  flex: 2;
`
const UmdpText = styled.article`
  width: 80%;
  margin: auto;
  @media (min-width: 768px) {
    width: 100%;
    margin: 2rem auto;
  }
`
const UmdpTitle = styled.h1`
  font-size: 2.4rem;
  font-family: var(--font-family-title);
  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`

const UmdpParagrph = styled.p`
  width: 100%;
  margin: 3rem auto;
  text-align: justify;
  @media (min-width: 768px) {
    width: 80%;
  }
`

const UmdpSignature = styled.p`
  width: 82%;
  margin-top: 3rem;
  text-align: end;
  font-size: 2rem;
  font-family: var(--font-family-signature);
`

const Umdp = () => {
  return (
    <section id='umdp'>
      <UmdpContainer>
        <UmdpImg></UmdpImg>
        <UmdpTextContainer>
          <UmdpText>
            <UmdpTitle>{data.umdp.title}</UmdpTitle>
            <UmdpParagrph>{data.umdp.text1}</UmdpParagrph>
            <UmdpParagrph>{data.umdp.text2}</UmdpParagrph>
            <UmdpSignature>{data.umdp.signature}</UmdpSignature>
          </UmdpText>
        </UmdpTextContainer>
      </UmdpContainer>
    </section>
  )
}

export default Umdp
