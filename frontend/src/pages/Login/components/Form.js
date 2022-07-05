import axios from 'axios'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'
import useAuth from '../../../hooks/useAuth'

import {
  LoginForm,
  LoginInputContainer,
  LoginInput,
  LoginButton,
} from '../style'

const Form = () => {

  const { auth, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const emailRef = useRef()

  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/store'

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  const { dispatch: ctxDispatch } = useContext(StoreContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      
      const url = 'http://localhost:5000/api/v1/auth/login'
      const { data } = await axios.post(
        url,
        {
          email,
          password,
        },
        {
          withCredentials: true
        }
      )
      login(data)
      ctxDispatch({ type: 'USER_LOGIN', payload: data })
      navigate(redirect || '/store')
    } catch (err) {
      console.error(err)
      setErrors(err.message)
      setEmail('')
      setPassword('')
      setTimeout(() => {
        setErrors('')
      }, 4000)
    }
  }

  useEffect(() => {
    if (auth) {
      navigate(redirect)
    }
  }, [navigate, redirect, auth])

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
        {/* {errors && <span>{errors.email}</span>} */}
        <Link to='/inscription' className='singup_link'>
          <p>Vous n'avez pas encore de compte ? Créez un compte.</p>
        </Link>
      </LoginForm>

      {errors && <p style={{ textAlign: 'center', color: 'red' }}>{errors}</p>}
    </>
  )
}

export default Form