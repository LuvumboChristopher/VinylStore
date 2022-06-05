import styled, { keyframes }  from 'styled-components'

import AccueilFond from '../../assets/img/accueil_fond.png'
import ServicesFond from '../../assets/img/services_fond.jpg'
import ContactImage1 from '../../assets/img/contact_img_1.jpg'
import ContactImage2 from '../../assets/img/contact_img_2.jpg'
import JohnDoe from '../../assets/img/john_doe.png'


/*------------------------------------------------------------Navigation------------------------------------------------------------*/

export const FadeNavIn = keyframes`
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
`
export const NavContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 1%;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);
  background: none;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 50px;
  opacity: 0;
  animation: ${FadeNavIn} 1s ease 1 1s forwards;
  @media (max-width: 720px) {
    display: none;
  }
`
export const NavLink = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
`
export const NavIcon = styled.a`
  width: 13px;
  height: 13px;
  background-color: rgba(0, 0, 0, 0.305);
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
  }
`
export const NavTitle = styled.p`
  display: none;
  font-size: 0.93rem;
  color: rgb(255, 255, 255);

  ${NavLink}:hover & {
    display: block;
  }
`

/*------------------------------------------------------------Accueil------------------------------------------------------------*/

export const AccueilSection = styled.section`
  background: url(${AccueilFond});
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`
export const VsLogo = styled.img`
  width: clamp(230px, 20%, 600px);
`

/*------------------------------------------------------------UMDP------------------------------------------------------------*/

export const UmdpContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media screen and (max-height: 768px) {
    height: 900px;
  }
`
export const UmdpImg = styled.div`
  width: 100%;
  background: url(${JohnDoe});
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
export const UmdpTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  flex: 2;
`
export const UmdpText = styled.article`
  width: 80%;
  margin: auto;
  @media (min-width: 768px) {
    width: 100%;
    margin: 2rem auto;
  }
`
export const UmdpTitle = styled.h1`
  font-size: 2rem;
  font-family: var(--font-family-title);
  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`
export const UmdpParagrph = styled.p`
  width: 100%;
  margin: 3rem auto;
  text-align: justify;
  @media (min-width: 768px) {
    width: 80%;
  }
`
export const UmdpSignature = styled.p`
  width: 82%;
  margin-top: 3rem;
  text-align: end;
  font-size: 2rem;
  font-family: var(--font-family-signature);
`

/*------------------------------------------------------------Services------------------------------------------------------------*/

export const ServicesSection = styled.section`
  width: 100%;
  height: 100%;
  background: url(${ServicesFond});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`
export const ContentContainer = styled.div`
  width: 75%;
  margin: 8rem auto;
  display: flex;
  justify-content: space-around;
  gap: 80px;
  @media (max-width: 1440px) {
    width: 80%;
    flex-direction: column;
  }
  @media (max-width: 668px) {
    width: 85%;
  }
`
export const Card = styled.div`
  width: 60%;
  margin: 0 0 3rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(200, 200, 200, 0.055);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  @media (max-width: 1440px) {
    width: 100%;
    height: 320px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
  @media (max-width: 668px) {
    width: 90%;
    flex-direction: column;
    height: auto;
  }
`
export const CardImageContainer = styled.div`
  @media (max-width: 1440px) {
    position: relative;
    width: 45%;
  }
  @media (max-width: 668px) {
    width: 100%;
    height: 600px;
  }
  
`
export const CardImage = styled.img`
  width: 100%;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    position; absolute;
    width: 100%;
    height: 320px;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    border-right: 5px solid white;
    object-fit: cover;
  }
  @media (max-width: 668px) {
    width: 100%;
    height: 600px;
    border-right: none;
  }
`
export const CardTextContainer = styled.div`
  width: 85%;
  margin: 1.6rem auto;
  color: white;
  display: grid;
  place-items: center;
  @media (max-width: 1440px) {
    width: 55%;
    margin: auto 1.4rem;
  }
  @media (max-width: 668px) {
    width: 88%;
    margin: 2rem auto;
  }
`
export const CardTitle = styled.h2`
  width: 100%;
  margin: 0 0 1.5rem;
`
export const CardText = styled.p`
  font-size: 0.7rem;
  margin: auto;
  text-align: justify;
`

/*------------------------------------------------------------Banner------------------------------------------------------------*/

export const BannerContainer = styled.div`
  width: 100%;
  height: 330px;
  border-top: 3px solid white;

  position: relative;
`
export const BannerVideo = styled.video`
  width: 100%;
  height: 328px;
  object-fit: cover;
`
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 328px;
  background-color: rgba(3, 2, 2, 0.81);
`
export const CitacionContainer = styled.div`
  width: 100%;
  position: absolute;
  border-bottom: 3px solid white;
  top: 0;
  left: 0;
  height: 328px;
  display: grid;
  place-items: center;
`
export const Citacion = styled.p`
  width: 80%;
  margin: auto;
  display: block;
  color: white;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 6px;
`

/*------------------------------------------------------------Contact------------------------------------------------------------*/

export const ContactContainer = styled.div`
  display: grid;
  place-items: center;
  color: white;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  @media (min-width: 1440px) {
    display: flex;
    height: 100%;
  }
`
export const ContactLeft = styled.div`
  background: url(${ContactImage1});
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1440px) {
    width: 65vw;
    height: 100vh;
    display: grid;
    place-items: center;
  }
  @media (min-width: 1440px) and (max-height: 800px) {
    height: 1080px;
  }
`
export const ContactRight = styled.div`
  background: url(${ContactImage2});
  border-top: 5px solid white;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1440px) {
    width: 35vw;
    height: 100vh;
    display: grid;
    border-top: none;
    border-left: 5px solid;
    display: grid;
    place-items: center;
  }
  @media (min-width: 1440px) and (max-height: 800px) {
    height: 1080px;
  }
`
export const ContactSection = styled.div`
  @media (min-width: 992px) {
    margin: 6rem auto;
    display: flex;
    gap: 5rem;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    display: block;
    margin: auto;
    align-items: flex-start;
  }
`
export const SectionContainer = styled.div`
  width: 70%;
  margin: 1rem auto;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 80%;
    margin: 3rem auto;
  }
  @media (min-width: 1440px) {
    width: ${(props) => (props.formSection ? '70%' : '83%')};
  }
`
export const ContactHeader = styled.header`
  margin: 4rem auto;
`
export const ContactTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: 2rem;
  width: 100%;
  margin: 2rem auto 0;
  text-transform: none;
`
export const ContactSubtitle = styled.p`
  margin: 0;
  font-size: 0.60rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`
export const ContactForm = styled.form`
  width: 100%;
  margin: 1.2rem auto;
  text-aplandusitecontentgn: center;
  @media (min-width: 992px) {
    width: 100%;
    text-align: start;
    flex: 2;
  }
`
export const FooterNav = styled.div`
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
  @media (min-width: 992px) {
    flex: 1;
  }
`
export const ContactInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  margin: 0 auto 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  resize: none;
  text-align: justify;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ::placeholder {
    font-size: 0.6rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
`
export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 0.3rem;
  margin: 0 auto 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  resize: none;
  text-align: justify;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ::placeholder {
    font-size: 0.6rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
  ::-webkit-scrollbar {
    width: 7px;
    margin: 0.3rem auto;
  }
  ::-webkit-scrollbar {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
`
export const ContactButton = styled.button`
  width: fit-content;
  margin: 1rem auto;
  padding: 0.5rem 2rem;
  background: transparent;
  border: 1px solid wheat;
  font-size: 0.8rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: white;
  opacity: 1;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(255, 255, 255, 0.801);
  }
`
export const FooterInfo = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 992px) {
    margin: 0;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem auto;
  }
`
export const FooterContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
`
export const PlanDuSite = styled.div`
  @media (min-width: 1440px) {
    width: 100%;
    margin-left: 5rem;
  }
`
export const PlanDuSiteContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
  @media (min-width: 992px) {
    list-style: none;
    display: block;
    justify-content: left;
  }
`
export const PlanDuSiteContent = styled.li`
  margin-right: 0.8rem;
  font-size: 0.8rem;
  text-transform: capitalize;
`
export const Copyright = styled.p`
  width: 100%;
  margin: 1rem auto 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`
export const NewsletterContainer = styled.div`
  width: 100%;
  margin: 4rem auto;
  @media (min-width: 992px) {
    width: 60%;
    margin: 3rem auto;
    border: none;
  }
  @media (min-width: 1440px) {
    width: 85%;
    margin: auto;
  }
`
export const LoremTitle = styled.h3`
  margin: 0 auto 1rem;
  font-size: 0.7rem;
  letter-spacing: 5px;
`
export const LoremText = styled.p`
  width: 100%;
  margin: auto;
  font-size: 0.5rem;
  text-align: justify;
`
export const NewsletterInput = styled.input`
  width: 100%;
  color: white;
  border: 1px solid white;
  background: transparent;
  padding: 0.75rem;
  margin: 1.3rem auto;
  &:focus {
    outline: 1px solid rgb(255, 255, 255);
  }
  ::placeholder {
    font-size: 0.6rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
`
export const NewsletterButton = styled.button`
  width: fit-content;
  margin: auto;
  padding: 0.75rem 2rem;
  background: black;
  border: none;
  font-size: 0.8rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: white;
  opacity: 1;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(255, 255, 255, 0.801);
  }
`
