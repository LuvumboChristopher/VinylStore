import React from 'react'
import Form from './components/Form'
import '../../css/singup.css'


import { SingupContainer, SingupImg, SingupFormContainer, SingupFormContent, SingupTitle, SingupSubtitle, SingupFormHeader } from './style';

const Singup = () => {
  
  return (
    <section id='singup'>
      <SingupContainer>
        <SingupImg></SingupImg>
        <SingupFormContainer>
          <SingupFormContent>
            <SingupFormHeader>
              <SingupTitle>S'inscrire</SingupTitle>
              <SingupSubtitle>formulaire d'inscription</SingupSubtitle>
            </SingupFormHeader>
            <Form/>
          </SingupFormContent>
        </SingupFormContainer>
      </SingupContainer>
    </section>
  )
}

export default Singup