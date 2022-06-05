import React from 'react'
import styled from 'styled-components'

import ContactImage1 from '../../../../assets/img/contact_img_1.jpg'
import ContactImage2 from '../../../../assets/img/contact_img_2.jpg'

const ContactContainer = styled.div`
  display: grid;
  place-items: center;
  color: white;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  @media (min-width: 1440px) {
    display: flex;
    height: 100%;
  }
  @media (min-width: 1440px) and (max-height: 800px) {
    height: 100%;
  }
`
const ContactLeft = styled.div`
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

const ContactRight = styled.div`
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

const ContactSection = styled.div`
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

const SectionContainer = styled.div`
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

const ContactHeader = styled.header`
  margin: 4rem auto;
`

const ContactTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: 2.3rem;
  width: 100%;
  margin: 2rem auto 0;
  text-transform: none;
`

const ContactSubtitle = styled.p`
  margin: 0;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`

const ContactForm = styled.form`
  width: 100%;
  margin: 1.2rem auto;
  text-aplandusitecontentgn: center;
  @media (min-width: 992px) {
    width: 100%;
    text-align: start;
    flex: 2;
  }
`
const FooterNav = styled.div`
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
  @media (min-width: 992px) {
    flex: 1;
  }
`

const ContactInput = styled.input`
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

const ContactTextarea = styled.textarea`
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

const ContactButton = styled.button`
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

const FooterInfo = styled.div`
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

const FooterContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
`

const PlanDuSite = styled.div`
  @media (min-width: 1440px) {
    width: 100%;
    margin-left: 5rem;
  }
`

const PlanDuSiteContainer = styled.ul`
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

const PlanDuSiteContent = styled.li`
  margin-right: 0.8rem;
  font-size: 0.8rem;
  text-transform: capitalize;
`
const Copyright = styled.p`
  width: 100%;
  margin: 1rem auto 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`

const NewsletterContainer = styled.div`
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

const LoremTitle = styled.h3`
  margin: 0 auto 1rem;
  font-size: 0.7rem;
  letter-spacing: 5px;
`
const LoremText = styled.p`
  width: 100%;
  margin: auto;
  font-size: 0.5rem;
  text-align: justify;
`

const NewsletterInput = styled.input`
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

const NewsletterButton = styled.button`
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



const Contact = () => {
  return (
    <section id='contact'>
      <ContactContainer>
        <ContactLeft>
          <SectionContainer formSection>
            <ContactHeader>
              <ContactTitle>Contact & Accés</ContactTitle>
              <ContactSubtitle>Formulaire de contact</ContactSubtitle>
            </ContactHeader>
            <ContactSection>
              <ContactForm action='#'>
                <ContactInput
                  type='text'
                  name='Nom'
                  id='nom'
                  placeholder='Nom'
                />
                <ContactInput
                  type='text'
                  name='Prenom'
                  id='prenom'
                  placeholder='Prenom'
                />
                <ContactInput
                  type={'tel'}
                  name='Telefone'
                  id='telefone'
                  pattern='[0-9]{0,9}'
                  placeholder='Telephone'
                  maxLength={'9'}
                />
                <ContactInput
                  type='text'
                  name='Sujet'
                  id='sujet'
                  placeholder='Sujet'
                />
                <ContactTextarea
                  placeholder='Message'
                  name='message'
                  id=''
                  cols='30'
                  rows='5'
                ></ContactTextarea>
                <ContactButton disabled='disabled'>Envoyer</ContactButton>
              </ContactForm>
              <FooterNav>
                <FooterInfo>
                  <FooterContainer>
                    <LoremTitle>A propos du vinyl store</LoremTitle>
                    <LoremText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      ePlanDuSiteContentt. In congue nunc rhoncus lorem dapibus,
                      sagittis mattis neque eleifend. Maecenas in tincidunt
                      tellus. Quisque venenatis viverra justo vestibulum
                      posuere. Integer molestie, eros congue pharetra viverra,
                      nisi tellus finibus sapien, vel luctus quam nunc quis
                      mauris.
                    </LoremText>
                    <Copyright>
                      ©{new Date().getFullYear()} Vinyl Store Lyon.
                    </Copyright>
                  </FooterContainer>
                  <FooterContainer>
                    <PlanDuSite>
                      <LoremTitle>Plan du site</LoremTitle>
                      <PlanDuSiteContainer>
                        <PlanDuSiteContent>
                          <a href='#accueil'>Accueil</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#un_mot_du_proprio'>Un mot du proprio</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#nos_services'>Nos Services</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#contact'>Contact & Accés</a>
                        </PlanDuSiteContent>
                      </PlanDuSiteContainer>
                    </PlanDuSite>
                  </FooterContainer>
                </FooterInfo>
              </FooterNav>
            </ContactSection>
          </SectionContainer>
        </ContactLeft>
        <ContactRight>
          <SectionContainer>
            <NewsletterContainer>
              <LoremTitle>Newsletter</LoremTitle>
              <LoremText>
                Lorem ipsum dolor sit amet consectetur adipisicing
                ePlanDuSiteContentt. Corrupti quasi a animi ullam recusandae
                perferendis amet dolores nobis sed architecto vel quas pariatur
                enim iusto
              </LoremText>
              <NewsletterInput
                type='text'
                name='Newsletter'
                id='newsletter'
                placeholder='example@example.com'
              />
              <NewsletterButton disabled='disabled'>Souscrire</NewsletterButton>
            </NewsletterContainer>
          </SectionContainer>
        </ContactRight>
      </ContactContainer>
    </section>
  )
}

export default Contact
