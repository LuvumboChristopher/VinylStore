import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { StoreContext } from '../../../context/StoreProvider'
import useAuth from '../../../hooks/useAuth'

export default function Payment() {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart: { paymentMethod } } = state

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  )

  useEffect(() => {
    if (!auth || auth === null) {
      navigate('/expedition')
    }
  }, [ navigate ])
  
  const submitHandler = (e) => {
    e.preventDefault()
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
    localStorage.setItem('paymentMethod', paymentMethodName)
    navigate('/commander ')
  }
  return (
    <div>
      <div className='container small-container'>
        <h1 className='my-3'>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <div className='mb-3'>
            <Form.Check
              type='radio'
              id='PayPal'
              label='PayPal'
              value='PayPal'
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <Form.Check
              type='radio'
              id='Stripe'
              label='Stripe'
              value='Stripe'
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <Button type='submit'>Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
