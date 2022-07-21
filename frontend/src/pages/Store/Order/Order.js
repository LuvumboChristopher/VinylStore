import React, { useContext, useEffect, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { StoreContext } from '../../../context/StoreProvider'
import axios from 'axios'
import { StoreFooter, StoreHeader } from '../Store'
import {
  ContentContainer,
  VinylCover,
  VinylCoverContainer,
  VinylData,
  VinylItem,
} from '../style'
import { ExpeditionFormButton, ExpeditionHeader } from '../Shipping/Shipping'
import useAuth from '../../../hooks/useAuth'
import { ItemResume, TotalToPay, Totalwrapper } from '../Cart/Cart'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true }
    case 'CREATE_SUCCESS':
      return { ...state, loading: false }
    case 'CREATE_FAIL':
      return { ...state, loading: false }
    default:
      return state
  }
}

export const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100 // 123.2345 => 123.23

export default function Order() {
  const navigate = useNavigate()
  const { auth, checkUser } = useAuth()

  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
  })

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const {
    cart,
    cart: { cartItems },
  } = state

  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  )
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10)
  cart.taxPrice = round2(0.15 * cart.itemsPrice)
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice

  const placeOrderHandler = async (e) => {
    e.preventDefault()
    try {
      dispatch({ type: 'CREATE_REQUEST' })

      const { data } = await axios.post(
        'http://localhost:5000/api/v1/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          withCredentials: true,
        }
      )
      ctxDispatch({ type: 'CART_CLEAR' })
      dispatch({ type: 'CREATE_SUCCESS' })
      localStorage.removeItem('cartItems')
      checkUser()
      if (auth.user) {
        return navigate(`/commande/${data.order._id}`)
      }
      navigate('/connexion')
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' })
    }
  }

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/paiement')
    }
  }, [cart, navigate])

  return (
    <>
      <StoreHeader />
      <ContentContainer>
        <ExpeditionHeader>
          <h2>Prévisualiser la commande</h2>
        </ExpeditionHeader>
        <section style={{ width: '100%', margin: '0', textAlign: 'right' }}>
          {/* Mi primer bloque de datos */}
          <div
            className='vinyls'
            style={{ width: '50%', margin: '3rem auto 7rem' }}
          >
            <Totalwrapper>
              <TotalToPay>
                <h3>Vinyls</h3>
              </TotalToPay>
              <hr style={{ border: '1px solid black' }} />
              {cartItems.map((item) => (
                <div key={item._id}>
                  <div>
                    <ItemResume>
                      {item.title} x{item.quantity}
                      <p>{round2(item.price * item.quantity)} €</p>
                    </ItemResume>
                  </div>
                </div>
              ))}
            </Totalwrapper>
            <ExpeditionFormButton
              onClick={() => navigate('/panier')}
              style={{
                color: 'white',
                backgroundColor: 'black',
                margin: '4rem auto 0',
              }}
            >
              Edit
            </ExpeditionFormButton>
          </div>
          {/* Mi segundo bloque de datos */}
          <div
            className='expedition'
            style={{ width: '50%', margin: '3rem auto 7rem' }}
          >
            <Totalwrapper>
              <TotalToPay>
                <h3>Adresse d'expedition</h3>
              </TotalToPay>
              <hr style={{ border: '1px solid black' }} />
              <div>
                <ItemResume>
                  <h4>Nom:</h4>
                  {cart.shippingAddress.lastName}
                </ItemResume>
                <ItemResume>
                  <h4>Prenom:</h4>
                  {cart.shippingAddress.firstName}
                </ItemResume>

                <ItemResume>
                  <h4>Address: </h4>
                  {cart.shippingAddress.streetAddress}
                  <br />
                  {`${cart.shippingAddress.city} ${cart.shippingAddress.zipCode} ${cart.shippingAddress.country}`}
                </ItemResume>
              </div>
            </Totalwrapper>
            <ExpeditionFormButton
              onClick={() => navigate('/expedition')}
              style={{
                color: 'white',
                backgroundColor: 'black',
                margin: '4rem auto 0',
              }}
            >
              Modifier
            </ExpeditionFormButton>
          </div>
          {/* Mi tercer bloque de datos */}
          <div
            className='payment'
            style={{ width: '50%', margin: '3rem auto 7rem' }}
          >
            <div>
              <TotalToPay>
                <h3>Payment</h3>
              </TotalToPay>

              <hr style={{ border: '1px solid black' }} />

              <ItemResume>
                <h4>Method:</h4> {cart.paymentMethod}
              </ItemResume>
              <ExpeditionFormButton
                onClick={() => navigate('/paiement')}
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  margin: '4rem auto 0',
                }}
              >
                Modifier
              </ExpeditionFormButton>
            </div>
          </div>
          {/* Mi cuarto bloque de datos */}

          <div
            className='summary'
            style={{ width: '50%', margin: '3rem auto 7rem' }}
          >
            <TotalToPay>
              <h3>Sommaire de la commande</h3>
            </TotalToPay>{' '}
            <hr style={{ border: '1px solid black' }} />
            <div variant='flush'>
              <TotalToPay>
                <h4>Vinyls</h4>x{cart.cartItems.length}
              </TotalToPay>
              <TotalToPay>
                <h4>Montant</h4>
                {cart.itemsPrice.toFixed(2)}
              </TotalToPay>

              <TotalToPay>
                <h4>Expedition</h4>
                {cart.shippingPrice.toFixed(2)}€
              </TotalToPay>

              <TotalToPay>
                <h4>TVA </h4>
                {cart.taxPrice.toFixed(2)}€
              </TotalToPay>

              <TotalToPay>
                <h4>Total </h4>
                {cart.totalPrice.toFixed(2)}€
              </TotalToPay>

              <ExpeditionFormButton
                onClick={placeOrderHandler}
                disabled={cart.cartItems.length === 0}
                style={{ margin: '4rem auto 0' }}
              >
                Commander
              </ExpeditionFormButton>
            </div>
          </div>
        </section>
      </ContentContainer>
      <StoreFooter />
    </>
  )
}
