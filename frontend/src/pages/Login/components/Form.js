import React, { useState, useContext, useRef } from 'react'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../../../context/StoreProvider'

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
      <form className='singin_form' onSubmit={handleSubmit}>
        <div className='input_container'>
          <input
            ref={emailRef}
            type='email'
            name='email'
            id='email'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='singin_button'>Se connecter</button>
        </div>
        {/* {errors && <span>{errors.email}</span>} */}
        <Link to='/inscription' className='singup_link'>
          <p>Vous n'avez pas encore de compte ? Créez un compte.</p>
        </Link>
      </form>

      {errors && <p style={{ textAlign: 'center', color: 'red' }}>{errors}</p>}
    </>
  )
}

export default Form
