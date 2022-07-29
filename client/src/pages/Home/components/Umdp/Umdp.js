import React from 'react'
import data from '../../../../data/data.json'

import {
  UmdpSection,
  UmdpImgContainer,
  UmdpTextContainer,
  UmdpTextContent,
  UmdpParagrph,
  UmdpSignature,
  UmdpTitle,
} from '../../style'

const Umdp = () => {
  return (
    <UmdpSection id='umdp'>
      <UmdpImgContainer />
      <UmdpTextContainer>
        <UmdpTextContent>
          <UmdpTitle>{data.umdp.title}</UmdpTitle>
          <UmdpParagrph>{data.umdp.text1}</UmdpParagrph>
          <UmdpParagrph>{data.umdp.text2}</UmdpParagrph>
          <UmdpSignature>{data.umdp.signature}</UmdpSignature>
        </UmdpTextContent>
      </UmdpTextContainer>
    </UmdpSection>
  )
}

export default Umdp
