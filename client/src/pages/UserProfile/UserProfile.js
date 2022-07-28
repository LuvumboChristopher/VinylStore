import React, { useContext, useReducer, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import { StoreContext } from '../../context/StoreProvider'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true }
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false }
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false }

    default:
      return state
  }
}

export const UserProfile = () => {

  const {auth, setAuth}=useAuth()
  const {userId}= auth

  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(async()=>{
    const { data } = await Axios.get(
    `http://localhost:5000/api/v1/users/${userId}`,
    {
      withCredentials: true
    })

    if(data){
      setFirstName(data.firstName)
      setLastName(data.firstName)
      setEmail(data.email)
    }
  },[])

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  })

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await Axios.put(
        'http://localhost:5000/api/v1/users',
        {
          email,
          password,
        },
        {
          withCredentials: true
        }
      )
      dispatch({
        type: 'UPDATE_SUCCESS',
      })
      ctxDispatch({ type: 'USER_SIGNIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      console.log('User updated successfully')
    } catch (err) {
      dispatch({
        type: 'FETCH_FAIL',
      })
      console.error(err)
    }
  }

  return (
    <div className='container small-container'>
      <h1 className='my-3'>User Profile</h1>
      <form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <div className='mb-3'>
          <Button type='submit'>Update</Button>
        </div>
      </form>
    </div>
  )
}
