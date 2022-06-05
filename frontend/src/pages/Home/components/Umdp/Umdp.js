import React from 'react'
import data from '../../../../data/data.json'

import { UmdpContainer, UmdpImg, UmdpTextContainer, UmdpText, UmdpTitle, UmdpParagrph, UmdpSignature   } from '../../style'

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
