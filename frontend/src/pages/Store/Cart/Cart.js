import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'
import { CartItem } from './components/CartItem'
import CartHeader from './components/CartHeader'
import styled from 'styled-components'


const Panierwrapper = styled.div`
  display: grid;
  place-items:center;
`

export default function CartScreen() {
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
    navigate('/se-connecter?redirect=/expedition')
  }

  return (
    <section id='cart'>
      <CartHeader />
      <Panierwrapper>
        <div>
          {cartItems.length === 0 ? (
            <p>
              Le panier est vide... <Link to='/store'>Aller à la boutique</Link>
            </p>
          ) : (
            <CartItem
              cartItems={cartItems}
              removeItemHandler={removeItemHandler}
              updateCartHandler={updateCartHandler}
            />
          )}
        </div>
        <div>
          <h3>
            Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items) : $
            {cartItems.reduce(
              (a, c) =>
                parseFloat(
                  (
                    parseFloat(a.toFixed(2)) +
                    parseFloat(c.price.toFixed(2)) * c.quantity
                  ).toFixed(2)
                ),
              0
            )}
          </h3>
          <button
            type='button'
            onClick={checkoutHandler}
            disabled={cartItems.length === 0}
          >
            Procéder au paiement
          </button>
        </div>
      </Panierwrapper>
    </section>
  )
}
