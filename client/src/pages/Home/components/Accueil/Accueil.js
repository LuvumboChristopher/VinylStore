import React from "react";
import vslogo from '../../../../assets/img/vs_logo.png'
import { AccueilSection, VsLogo } from '../../style';

const Accueil = () => {
return (
  <AccueilSection id='accueil'>
    <VsLogo
      src={vslogo}
      title='VinyleStore Logo'
      alt='VinylStore Logo'
    />
  </AccueilSection>
)
}

export default Accueil;