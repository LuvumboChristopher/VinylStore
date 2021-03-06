import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'
import { CartItem } from './components/CartItem'
import styled from 'styled-components'
import useAuth from '../../../hooks/useAuth'
import { StoreFooter, StoreHeader } from '../Store'
import { round2 } from '../Order/Order'

const CartContentContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 90%;
  margin: 13rem auto 0;
  @media (max-width: 768px) {
    width: 77%;
    flex-direction: column;
    margin: 15.5rem auto 0;
    border: none;
  }
`

const Panierwrapper = styled.div`
  width: 100%;
  margin: 0;
  flex: 1.5;
  display: grid;
  place-items: center;
  @media (min-width: 1440px) {
    flex: 3;
  }
  @media (min-width: 768px) {
    border-right: 1px solid black;
  }
`

export const Totalwrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex: 1;
`

export const TotalToPay = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1.5rem;
  font-size: 0.75rem;
`
export const ItemResume = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 1.5rem;
`

const PaimentButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`

export default function CartScreen() {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const {
    cart: { cartItems },
  } = state

  const updateCartHandler = (item, quantity) => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
  }

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  const checkoutHandler = () => {
    if (auth.user) {
      return navigate('/expedition')
    }
    navigate('/connexion?redirect=/expedition')
  }

  return (
    <>
      <StoreHeader />
      <CartContentContainer>
        <Panierwrapper>
          {cartItems.length === 0 ? (
            <div></div>
          ) : (
            <CartItem
              cartItems={cartItems}
              removeItemHandler={removeItemHandler}
              updateCartHandler={updateCartHandler}
            />
          )}
        </Panierwrapper>
        <Totalwrapper>
          <TotalToPay>
            <h1>Panier</h1>
          </TotalToPay>
          <hr />
          {cartItems.map((item) => (
            <div key={item._id}>
              <div>
                <ItemResume>
                  {item.title} x{item.quantity}
                  <p>{round2(item.price * item.quantity)} ???</p>
                </ItemResume>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && <hr />}
          <TotalToPay>
            <div>
              <h1>Total</h1>
              <p>({cartItems.reduce((a, c) => a + c.quantity, 0)} Vinyls)</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2>
                {cartItems.reduce(
                  (a, c) => round2(a + c.price * c.quantity),
                  0
                )}{' '}
                ???
              </h2>
            </div>
          </TotalToPay>
          <PaimentButton
            type='button'
            onClick={checkoutHandler}
            disabled={cartItems.length === 0}
          >
            Proc??der au paiement
          </PaimentButton>
        </Totalwrapper>
      </CartContentContainer>
      <StoreFooter />
    </>
  )
}
