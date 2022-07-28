import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { StoreContext } from '../../../context/StoreProvider'
import useAuth from '../../../hooks/useAuth'
import { StoreHeader } from '../Store'
import { ContentContainer } from '../style'
import { ExpeditionForm, ExpeditionFormButton, ExpeditionFormInput, ExpeditionHeader } from '../Shipping/Shipping'
import styled from 'styled-components'

const PaymentCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items : center; 
  width: 90%;
  margin: auto;
  padding:  0 2.5rem;
  font-size: 18px;
`
const ExpeditionFormRadio = styled.input`
  accent-color: Black;
  width: 30px;
  height: 30px;
  margin: auto 2rem;
`


export default function Payment() {
  const { auth, checkUser } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart: { paymentMethod } } = state

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  )


  const submitHandler = (e) => {
    e.preventDefault()
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName })
    localStorage.setItem('paymentMethod', paymentMethodName)
    checkUser()
    if (auth.user) {
      return navigate('/commander')
    }
    navigate('/connexion')
  }

  return (
    <div>
      <div>
        <StoreHeader />
        <ContentContainer>
          <ExpeditionHeader>
            <h2>Mode de paiement</h2>
          </ExpeditionHeader>
          <ExpeditionForm onSubmit={submitHandler}>
            <PaymentCheckBox>
              PayPal
              <ExpeditionFormRadio
                type='radio'
                id='PayPal'
                label='PayPal'
                value='PayPal'
                checked={paymentMethodName === 'PayPal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </PaymentCheckBox>
            <PaymentCheckBox>
              Stripe
              <ExpeditionFormRadio
                type='radio'
                id='Stripe'
                label='Stripe'
                value='Stripe'
                checked={paymentMethodName === 'Stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </PaymentCheckBox>
            <ExpeditionFormButton type='submit'>Continuer</ExpeditionFormButton>
          </ExpeditionForm>
        </ContentContainer>
      </div>
    </div>
  )
}
