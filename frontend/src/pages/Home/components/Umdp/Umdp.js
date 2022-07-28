import React from 'react'
import data from '../../../../data/data.json'

import {
  UmdpSection,
  UmdpImgContainer,
  UmdpText,
  UmdpTitle,
  UmdpParagrph,
  UmdpSignature,
} from '../../style'

const Umdp = () => {
  return (
    <UmdpSection id='umdp'>
      <UmdpImgContainer/>
      <UmdpText>
        <UmdpTitle>{data.umdp.title}</UmdpTitle>
        <UmdpParagrph>{data.umdp.text1}</UmdpParagrph>
        <UmdpParagrph>{data.umdp.text2}</UmdpParagrph>
        <UmdpSignature>{data.umdp.signature}</UmdpSignature>
      </UmdpText>
    </UmdpSection>
  )
}

export default Umdp
