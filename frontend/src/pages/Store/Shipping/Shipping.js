import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../context/StoreProvider'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Shipping = () => {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart: { shippingAddress } } = state

  const [firstName, setFirstName] = useState()
  const [lastName, setlastName] = useState()
  const [streetAddress, setStreetAddress] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState()
  const [country, setCountry] = useState()

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
    navigate('/paiement')
  }

  useEffect(() => {
    if (!auth || auth === null) {
      navigate('/se-connecter?redirect=/expedition')
    }
  }, [auth, navigate])

  return (
    <div>
      <h1>Adresse de livraison</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name={'lastName'}
          value={lastName}
          placeholder={'Nom'}
          onChange={(e) => setlastName(e.target.value)}
          required
        />
        <input
          type='text'
          name={'name'}
          value={firstName}
          placeholder={'Prenom'}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          type='text'
          name={'street address'}
          value={streetAddress}
          placeholder={'Street Address'}
          onChange={(e) => setStreetAddress(e.target.value)}
          required
        />
        <input
          type='text'
          name={'city'}
          value={city}
          placeholder={'Ville'}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type={'number'}
          name={'zip code'}
          value={zipCode}
          placeholder={'Code postal'}
          maxLength='6'
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
        <input
          type='text'
          name={'country'}
          value={country}
          placeholder={'Pays'}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <button type='submit'>Soumettre</button>
      </form>
    </div>
  )
}

export default Shipping
