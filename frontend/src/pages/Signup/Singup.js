import React, { useEffect } from 'react'
import Form from './components/Form'
import '../../css/singup.css'
import { SingupContainer, SingupImg, SingupFormContainer, SingupFormContent, SingupTitle, SingupSubtitle, SingupFormHeader } from './style';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Singup = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.user) {
      navigate('/store')
    }
  }, [navigate, auth])
  
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