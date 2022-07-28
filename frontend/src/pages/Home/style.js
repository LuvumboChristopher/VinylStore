import React from 'react'
import styled, { keyframes }  from 'styled-components'
import { FaAngleUp } from 'react-icons/fa';
import { MenuAlt1 } from '@styled-icons/heroicons-outline'
import AccueilFond from '../../assets/img/accueil_fond.png'
import ServicesFond from '../../assets/img/services_fond.jpg'
import ContactImage1 from '../../assets/img/contact_img_1.jpg'
import ContactImage2 from '../../assets/img/contact_img_2.jpg'
import JohnDoe from '../../assets/img/john_doe.png'


/*------------------------------------------------------------Top-Button------------------------------------------------------------*/

const Icon = ({ className, children }) => (
  <FaAngleUp className={className}>
    {children}
  </FaAngleUp>
);
export const TopButtonContainer = styled.div`
  position: relative;
`
export const TopButtonIcon = styled(Icon)`
  z-index: 99;
  position: fixed;
  bottom: 40px;
  right: 31px;
  background-color: #000000;
  border: 1px solid #fff;
  height: 40px;
  width: 40px;
  padding: 0.45rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
      background: rgba(255, 255, 255, 0.89);
      color: #000000;
      border: 1px solid #000000;    
  }
`;

/*------------------------------------------------------------Navigation------------------------------------------------------------*/

const FadeNavIn = keyframes`
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
`
export const NavContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 1%;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);
  background: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  opacity: 0;
  animation: ${FadeNavIn} 1s ease 1 1s forwards;
  @media (max-width: 992px) {
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

/*------------------------------------------------------------ResponsiveNavbar------------------------------------------------------------*/

export const ResponsiveNavbar = styled.div`
display: none;
@media (max-width: 992px) {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    margin: auto;
    padding: 1rem;
    padding-top: 10px;
    padding-bottom: 10px;
    background: ${props => props.navbarTransparency? 'transparent':'white'};
    border-bottom: ${props => props.navbarTransparency? 'none':'4px solid black'};
    display: block;
    transition: all 0.1s linear;
  }
`
export const HeaderImage = styled.img`
  position: absolute;
  top: 31.5%;
  left: 25px;
  width: 160px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.05);
  }
`
export const MenuIcon = styled(MenuAlt1)`
  position: absolute;
  top: 30%;
  right: 25px;
  width: 2.8rem;
  color: ${(props) => (props.navbarTransparency ? 'white' : 'black')};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`
export const ResponsiveNavbarContent = styled.div`
  display:none;
  @media (max-width: 992px) {
    display: block;
    z-index: 100;
    position: fixed;
    top: 0;
    right: ${props => props.showNavbarMenu? '0':'-150%'};
    width: 85%;
    height: 100vh;
    margin: auto;
    padding: 1.5rem;
    background-color: rgba(0,0,0,0.96);
    transition: all 0.35s ease-out;
  }
`


/*------------------------------------------------------------Accueil------------------------------------------------------------*/

export const AccueilSection = styled.div`
  background: url(${AccueilFond});
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  @media screen and (max-height: 900px) {
    height: 900px;
  }
`
export const VsLogo = styled.img`
  display: block;
  width: clamp(252px, 20%, 600px);
  
`

/*------------------------------------------------------------UMDP------------------------------------------------------------*/

export const UmdpSection = styled.div`
  width: 100%;
  margin: auto;
  margin-top: -1px;
  display: flex;
  @media (max-width: 720px) {  
    padding-top: 40px;
  }
  
`
export const UmdpImgContainer = styled.div`
  width: 45%;
  height: 100vh;
  margin: auto;
  background: url(${JohnDoe});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-right: 3px solid black;
  @media (max-width: 1440px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-height: 900px) {
    height: 900px;
  }
`
export const UmdpImg = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
export const UmdpText = styled.div`
  width: 100%;
  margin: auto;
  padding: 6rem;
  @media (max-width: 1440px) {
    padding: 3rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin: 4rem auto;
    padding: 4rem;
    padding-top: 15%;
    padding-bottom: 45%;
  }
  
`
export const UmdpTitle = styled.h1`
  width: 100%;
  margin: 2rem auto;
  font-size: clamp(25px, 2vw, 52px);
  font-family: var(--font-family-title);
  @media (max-width: 678px) {
    text-align: center;
  }
`
export const UmdpParagrph = styled.p`
  width: 100%;
  margin: 2rem auto;
  text-align: justify;
`
export const UmdpSignature = styled.p`
  width: 95%;
  margin-top: 4rem;
  text-align: end;
  font-size: 2rem;
  font-family: var(--font-family-signature);
`

/*------------------------------------------------------------Services------------------------------------------------------------*/

export const ServicesSection = styled.div`
  width: 100%;
  height: auto;
  padding-top: 5rem;
  padding-bottom: 7rem;
  background: url(${ServicesFond});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ServicestHeader = styled.header`
  width: 86%;
  margin: 0 auto 3.5rem;
  padding-bottom: 1rem;
  color: white;
  text-align: center;
  @media (max-width: 992px) {
    text-align: left;
    margin-bottom: 3rem;
    padding-top: 70px;
  }
`
export const ServicesTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(40px, 2.35vw, 52px);
  width: 100%;
  margin: auto;
  text-transform: none;
  
`
export const ServicesSubtitle = styled.p`
  width: 100%
  margin: auto;
  font-size: 0.47rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`
export const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`
export const ContentContainer = styled.div`
  width: 86%;
  margin:  auto;
  display: flex;
  justify-content: center;
  gap: 3.5vw;
  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 10vh;
  }
`
export const Card = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(200, 200, 200, 0.055);
  border-radius: 2px;
  box-shadow: 2px 3px 23px -3px rgba(0,0,0,0.25);
  transition: 0.3s ease;

  @media (max-width: 1440px) {
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    background: none;
    box-shadow: none;
  }
`
export const CardImageContainer = styled.div`
  @media (max-width: 1440px) {
    position: relative;
    width: 80%;
    margin: auto;
    height: 330px;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 400px;
  }
`
export const CardImage = styled.img`
    width: 100%;
    height: 360px;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 1440px) {
      width: 100%;
      height: 330px;
      flex-direction: ${(props) =>
        props.reverse ? 'row-reverse' : 'row'};
      object-fit: cover; 
    }
    @media (max-width: 720px) {
      width: 100%;
      height: 400px;
    }
  `
export const CardTextContainer = styled.div`
  width: 85%;
  margin: 2rem auto;
  color: white;
  display: grid;
  place-items: center;
  @media (max-width: 1440px) {
    width: 100%;
    margin: auto 1.5rem;
  }
  @media (max-width: 720px) {
    width: 100%;
    margin: 1rem auto;
    padding: 0;
  
  }
`
export const CardTitle = styled.p`
  width: 100%;
  font-size: 1.35rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  text-align: left;
`
export const CardText = styled.p`
  font-size: 0.9rem;
  margin: auto;
  text-align: justify;
`

/*------------------------------------------------------------Banner------------------------------------------------------------*/

export const BannerContainer = styled.div`
  width: 100%;
  height: 322px;
  position: relative;
  border-top: 3px solid white;
`
export const BannerVideo = styled.video`
  width: 100%;
  height: 322px;
  object-fit: cover;

`
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 322px;
  border-bottom: 3px solid white;
  background-color: rgba(3, 2, 2, 0.81);
`
export const CitacionContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 322px;
  display: grid;
  place-items: center;
`
export const Citacion = styled.p`
  width: 90%;
  margin: auto;
  display: block;
  color: white;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 6px;
  @media (min-width: 1440px){
    width: 50%;
    font-size: 0.8rem;
  }
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
  @media (max-width: 868px) {
    padding-top: 120px;
    margin-top: -115px;
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
  @media (min-width: 1440px) and (max-height: 920px) {
    height: 1025px;
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
  @media (min-width: 1440px) and (max-height: 920px) {
    height: 1025px;
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
  width: 85%;
  margin: 4rem auto;
  @media (min-width: 1440px) {
    width: ${(props) => (props.formSection ? '75%' : '85%')};
  }
`
export const ContactHeader = styled.header`
  margin: 4rem auto;
`
export const ContactTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(32px, 2.2vw, 42px);
  width: 100%;
  margin: 2rem auto 0;
  text-transform: none;
`
export const ContactSubtitle = styled.p`
  margin: 0;
  font-size: 0.47rem;
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
  transition: all 0.3s linear;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(255, 255, 255, 0.801);
    transition: all 0.1s linear;
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
  font-size: 0.75rem;
  letter-spacing: 5px;
`
export const LoremText = styled.p`
  width: 100%;
  margin: auto;
  font-size: 0.8rem;
  text-align: justify;
  text-transform: lowercase;
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
  transition: all 0.3s linear;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(255, 255, 255, 0.801);
  }
`
