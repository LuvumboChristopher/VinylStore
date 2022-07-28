import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  LoginForm,
  LoginInputContainer,
  LoginInput,
  LoginButton,
  ToSingupLink,
} from '../style'

const Form = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)
  const emailRef = useRef()

  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/store'
  
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const url = 'http://localhost:5000/api/v1/auth/login'
      await axios.post(
        url,
        {
          email,
          password,
        },
        {
          withCredentials: true
        }
      )
      navigate(redirect)
    } catch (err) {
      console.error(err)
      setErrors(err.response.data.error)
      setEmail('')
      setPassword('')
      setTimeout(() => {
        setErrors('')
      }, 3000)
      emailRef.current.focus()
    }
  }

  return (
    <>
      <LoginForm onSubmit={handleLogin}>
        <LoginInputContainer>
          <LoginInput
            ref={emailRef}
            type='email'
            name='email'
            id='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LoginInput
            type='password'
            name='password'
            id='password'
            placeholder='Mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton>Se connecter</LoginButton>
        </LoginInputContainer>
        <ToSingupLink to='/inscription'>
          Vous n'avez pas encore de compte? Créez un compte.
        </ToSingupLink>
      </LoginForm>

      {errors && <p style={{ textAlign: 'center', color: 'red' }}>{errors}</p>}
    </>
  )
}

export default Form