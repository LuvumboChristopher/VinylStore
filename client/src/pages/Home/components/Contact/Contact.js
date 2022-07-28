import React from 'react'

import { ContactContainer, ContactLeft, ContactRight, ContactSection, SectionContainer, ContactHeader, ContactTitle, ContactSubtitle, ContactForm, FooterNav, ContactInput, ContactTextarea, ContactButton, FooterInfo, FooterContainer, PlanDuSite, PlanDuSiteContainer, PlanDuSiteContent, Copyright, NewsletterContainer, LoremTitle, LoremText, NewsletterInput, NewsletterButton } from '../../style'


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
                  rows='8'
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
                      quasi a animi ullam recusandae In congue nunc rhoncus
                      lorem dapibus, sagittisit amet consecte sagittis mattis
                      neque eleifend. Maecenas in tincidunt tellus a animi
                      ullam.
                    </LoremText>
                    <Copyright>
                      ©{new Date().getFullYear()} VinylStore Lyon.
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
                          <a href='#umdp'>Un mot du proprio</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#services'>Nos Services</a>
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
                Lorem ipsum dolor sit amet consectetur adipisicing corrupti
                quasi a animi ullam recusandae.
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
