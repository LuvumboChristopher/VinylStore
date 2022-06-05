import React, { useState, useContext, useRef } from 'react'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../../../context/StoreProvider'
import styled from 'styled-components'

const LoginForm = styled.form`
  width: 100%;
  display: grid;
  place-items: center;
`

const LoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 3rem auto 1rem;
  border: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LoginInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 1.5rem;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.555);
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.552);
  }
`

const LoginButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.555);
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: white;
  background-color: rgb(129, 8, 8);
  &:focus {
    outline: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.552);
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(129, 8, 8, 0.837);
  }
`

const Form = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/store'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const emailRef = useRef()

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  const {state,  dispatch: ctxDispatch } = useContext(StoreContext)
  const { userInfo } = state

  const handleSubmit = async (e) => {
    console.log('hey')
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/login',
        {
          email,
          password,
        }
      )
      ctxDispatch({ type: 'USER_LOGIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(redirect)
    } catch (err) {
      setErrors("L'adresse email ou le mot de passe sont incorrects")
      setEmail('')
      setPassword('')
      setTimeout(() => {
        setErrors('')
      }, 4000)
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
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
