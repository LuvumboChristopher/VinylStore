import React from "react";
import vslogo from '../../../../assets/img/vs_logo.png'
import accueilFond from '../../../../assets/img/accueil_fond.png'
import styled from 'styled-components'

const AccueilSection = styled.section`
  background: url(${accueilFond});
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;

const VsLogo = styled.img`
  width: clamp(200px, 20%, 600px);
`

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