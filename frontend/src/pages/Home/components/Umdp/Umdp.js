import React from 'react'
import data from '../../../../data/data.json'
import JohnDoe from '../../../../assets/img/john_doe.png'

import { UmdpContainer,UmdpImgContainer, UmdpImg, UmdpTextContainer, UmdpText, UmdpTitle, UmdpParagrph, UmdpSignature   } from '../../style'

const Umdp = () => {
  return (
    <UmdpContainer id='umdp'>
      <UmdpImgContainer>
        <UmdpImg src={JohnDoe}/>
      </UmdpImgContainer>
      <UmdpTextContainer>
        <UmdpText>
          <UmdpTitle>{data.umdp.title}</UmdpTitle>
          <UmdpParagrph>{data.umdp.text1}</UmdpParagrph>
          <UmdpParagrph>{data.umdp.text2}</UmdpParagrph>
          <UmdpSignature>{data.umdp.signature}</UmdpSignature>
        </UmdpText>
      </UmdpTextContainer>
    </UmdpContainer>
  )
}

export default Umdp
