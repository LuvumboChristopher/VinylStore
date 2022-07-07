import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../context/StoreProvider'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { StoreHeader } from '../Store'
import { ContentContainer } from '../style'
import styled from 'styled-components'

export const ExpeditionHeader = styled.div`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid black;
`

export const ExpeditionForm = styled.form`
  width: 100%;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.589);
  display: flex;
  place-items: center;
`

export const ExpeditionFormInput = styled.input`
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  margin: 0;
  padding: 2rem;
  border:none;
  border-right: 1px solid black;
  :focus {
    outline: none;
  }
`

export const ExpeditionFormButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgb(129, 8, 8);
  }
`

const Shipping = () => {
  const { auth, checkUser } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart: { shippingAddress } } = state

  const [firstName, setFirstName] = useState(shippingAddress.firstName || '')
  const [lastName, setlastName] = useState(shippingAddress.lastName || '')
  const [streetAddress, setStreetAddress] = useState(shippingAddress.streetAddress || '')
  const [city, setCity] = useState(shippingAddress.city || '')
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode || '')
  const [country, setCountry] = useState(shippingAddress.country || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADRESS',
      payload: { firstName, lastName, streetAddress, city, country, zipCode },
    })
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        firstName,
        lastName,
        streetAddress,
        city,
        country,
        zipCode,
      })
    )
    checkUser()
    if (auth.user) {
      return navigate('/paiement')
    }
    navigate('/connexion')
  }

  return (
    <div>
      <StoreHeader />
      <ContentContainer>
        <ExpeditionHeader>
          <h2>Adresse de livraison</h2>
        </ExpeditionHeader>

        <ExpeditionForm onSubmit={handleSubmit}>
          <ExpeditionFormInput
            type='text'
            name={'lastName'}
            value={lastName}
            placeholder={'Nom'}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'name'}
            value={firstName}
            placeholder={'Prenom'}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <ExpeditionFormInput
            type='text'
            name={'street address'}
            value={streetAddress}
            placeholder={'Street Address'}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'city'}
            value={city}
            placeholder={'Ville'}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type={'number'}
            name={'zip code'}
            value={zipCode}
            placeholder={'Code postal'}
            maxLength='6'
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
          <ExpeditionFormInput
            type='text'
            name={'country'}
            value={country}
            placeholder={'Pays'}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <ExpeditionFormButton type='submit'>Soumettre</ExpeditionFormButton>
        </ExpeditionForm>
      </ContentContainer>
    </div>
  )
}

export default Shipping
