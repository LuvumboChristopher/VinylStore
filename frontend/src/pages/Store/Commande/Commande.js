import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import getError from '../../../utils/ErrorHandler';
import useAuth from '../../../hooks/useAuth'
import { ProductScreenWrapper } from '../Product/Product';
import { ContentContainer, StoreContainer } from '../style';
import { StoreFooter, StoreHeader } from '../Store';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default function OrderScreen() {
  const { auth } = useAuth();
  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] =
    useReducer(reducer, {
      loading: true,
      order: {},
      error: '',
    });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/orders/${orderId}`,
          {
            withCredentials: true,
          }
        )
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    }
    if (!auth.user) {
      return navigate('/connexion');
    }
    fetchOrder()
  }, [])


  return (
    <>
      <StoreContainer>
        <StoreHeader />
        <ContentContainer>
          <ProductScreenWrapper>
            {loading ? (
              <div>
                <p> En cours de chargement...</p>
              </div>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div>
                <div>
                  <h1 className='my-3'>Commande</h1>
                  <small> id:{orderId}</small>
                </div>
                <Row>
                  <Col md={8}>
                    <Card className='mb-3'>
                      <Card.Body>
                        <Card.Title>Adresse d'expédition</Card.Title>
                        <Card.Text>
                          <strong>Nom:</strong> {order.shippingAddress.lastName}{' '}
                          <br />
                          <strong>Prenom:</strong> {order.shippingAddress.name}{' '}
                          <br />
                          <strong>Addresse: </strong>{' '}
                          {order.shippingAddress.streetAddress},
                          {order.shippingAddress.city},{' '}
                          {order.shippingAddress.zipCode},
                          {order.shippingAddress.country}
                        </Card.Text>
                        {order.isDelivered ? (
                          <div variant='success'>
                            Livré le: {order.deliveredAt}
                          </div>
                        ) : (
                          <div variant='danger'>Non livré</div>
                        )}
                      </Card.Body>
                    </Card>
                    <Card className='mb-3'>
                      <Card.Body>
                        <Card.Title>Paiement</Card.Title>
                        <Card.Text>
                          <strong>Méthode:</strong> {order.paymentMethod}
                        </Card.Text>
                        {order.isPaid ? (
                          <div variant='success'>Payé le:{order.paidAt}</div>
                        ) : (
                          <div variant='danger'>Non payé</div>
                        )}
                      </Card.Body>
                    </Card>
                    <Card className='mb-3'>
                      <Card.Body>
                        <Card.Title>Vinyls</Card.Title>
                        <ListGroup variant='flush'>
                          {order.orderItems.map((item) => (
                            <ListGroup.Item key={item._id}>
                              <Row className='align-items-center'>
                                <Col md={6}>
                                  <img
                                    src={item.img}
                                    alt={item.title}
                                    className='img-fluid rounded img-thumbnail'
                                    style={{ width: '160px' }}
                                  ></img>{' '}
                                  <Link to={`/product/${item._id}`}>
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
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className='mb-3'>
                      <Card.Body>
                        <Card.Title>Recapitulatif de la comande</Card.Title>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>
                            <Row>
                              <Col>Vinyls</Col>
                              <Col>${order.itemsPrice.toFixed(2)}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>Prix Livraison</Col>
                              <Col>${order.shippingPrice.toFixed(2)}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>TVA</Col>
                              <Col>${order.taxPrice.toFixed(2)}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>
                                <strong>Total</strong>
                              </Col>
                              <Col>
                                <strong>${order.totalPrice.toFixed(2)}</strong>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}
          </ProductScreenWrapper>
        </ContentContainer>
        <StoreFooter />
      </StoreContainer>
    </>
  )
}