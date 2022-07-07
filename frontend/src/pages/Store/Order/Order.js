import React, { useContext, useEffect, useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { StoreContext } from '../../../context/StoreProvider'
import axios from 'axios'
import { StoreHeader } from '../Store'
import { ContentContainer } from '../style'
import { ExpeditionFormButton, ExpeditionHeader } from '../Shipping/Shipping'
import useAuth from '../../../hooks/useAuth'
import { CartContentContainer, ItemResume, TotalToPay } from '../Cart/Cart'

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
  const { cart } = state

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
    <section>
      <StoreHeader />

      <ContentContainer>
        <ExpeditionHeader>
          <h2>Prévisualiser la commande</h2>
        </ExpeditionHeader>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <div>
              <div>
                <div>
                  <TotalToPay>
                    <h3>Adresse d'expedition</h3>
                  </TotalToPay>
                  <hr />
                  <div>
                    <Row>
                      <ItemResume>
                        <strong>Nom:</strong>
                        {cart.shippingAddress.lastName}
                      </ItemResume>
                    </Row>
                    <Row>
                      <ItemResume>
                        <strong>Prenom:</strong>
                        {cart.shippingAddress.firstName}
                      </ItemResume>
                    </Row>
                    <Row>
                      <ItemResume>
                        <strong>Address: </strong>

                        {cart.shippingAddress.streetAddress}
                        <br />
                        {cart.shippingAddress.city}
                        <br />
                        {cart.shippingAddress.zipCode}
                        <br />
                        {cart.shippingAddress.country}
                      </ItemResume>
                    </Row>
                  </div>
                  <hr />
                  <ExpeditionFormButton
                    to='/expedition'
                    style={{ color: 'white', backgroundColor: 'black' }}
                  >
                    Modifier
                  </ExpeditionFormButton>
                </div>
              </div>
              <hr />
              <Card className='mb-3'>
                <Card.Body>
                  <TotalToPay>
                    <h3>Payment</h3>
                  </TotalToPay>

                  <hr />

                  <ItemResume>
                    <strong>Method:</strong> {cart.paymentMethod}
                  </ItemResume>
                  <hr />

                  <ExpeditionFormButton
                    to='/paiement'
                    style={{ color: 'white', backgroundColor: 'black' }}
                  >
                    Modifier
                  </ExpeditionFormButton>
                </Card.Body>
              </Card>
            </div>
            <hr />
            <div>
              <div>
                <h3>Items</h3>
                <hr />
                <div>
                  {cart.cartItems.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row className='align-items-center'>
                        <Col md={6}>
                          <Link to={`/products/${item._id}`}>
                            <img
                              src={item.img}
                              alt={item.title}
                              style={{ width: '40px' }}
                            ></img>{' '}
                            {item.title}
                          </Link>
                        </Col>
                        <Col md={3}>
                          <span>{item.quantity}</span>
                        </Col>
                        <Col md={3}>${item.price}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </div>
                <ExpeditionFormButton
                  to='/panier'
                  style={{ color: 'white', backgroundColor: 'black' }}
                >
                  Edit
                </ExpeditionFormButton>
              </div>
            </div>
          </div>

          <hr />
          <div>
            <div>
              <div>
                <TotalToPay>
                  <h3>Order Summary</h3>
                </TotalToPay>
                <hr />
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <ItemResume>
                        <h4>Items</h4>

                        {cart.itemsPrice.toFixed(2)}
                      </ItemResume>{' '}
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <ItemResume>
                        <h4>Expedition</h4>
                        {cart.shippingPrice.toFixed(2)}€
                      </ItemResume>{' '}
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <ItemResume>
                        <h4>TVA </h4>
                        {cart.taxPrice.toFixed(2)}€
                      </ItemResume>{' '}
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <ItemResume>
                        <h4>Total </h4>
                        {cart.totalPrice.toFixed(2)}€
                      </ItemResume>{' '}
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className='d-grid'>
                      <ExpeditionFormButton
                        type='button'
                        onClick={placeOrderHandler}
                        disabled={cart.cartItems.length === 0}
                      >
                        Commander
                      </ExpeditionFormButton>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
