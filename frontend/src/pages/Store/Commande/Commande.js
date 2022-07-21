import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { StoreContext } from '../../../context/StoreProvider';
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
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false };

    default:
      return state;
  }
}
export default function OrderScreen() {
  const { state } = useContext(StoreContext);
  const { auth } = useAuth();
  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order, successPay, loadingPay }, dispatch] =
    useReducer(reducer, {
      loading: true,
      order: {},
      error: '',
      successPay: false,
      loadingPay: false,
    });

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `http://localhost:5000/api/v1/orders/${order._id}/pay`,
          details,
          {
            withCredentials: true,
          }
        )
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('Order is paid');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: err });
        toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

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
    };
    if (!auth.user) {
      return navigate('/connexion');
    }
    if (!order._id || successPay || (order._id && order._id !== orderId)) {
      fetchOrder();
      if (successPay) {
        dispatch({ type: 'PAY_RESET' });
      }
    } else {
      const loadPaypalScript = async () => {
        const { data: clientId } = await axios.get(
          'http://localhost:5000/api/v1/keys/paypal',
          {
            withCredentials: true,
          }
        )
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': clientId,
            currency: 'EUR',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      loadPaypalScript();
    }
  }, [order, auth, orderId, navigate, paypalDispatch, successPay])


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
                        <Card.Title>Items</Card.Title>
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
                        <Card.Title>Order Summary</Card.Title>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>
                            <Row>
                              <Col>Items</Col>
                              <Col>${order.itemsPrice.toFixed(2)}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>Shipping</Col>
                              <Col>${order.shippingPrice.toFixed(2)}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>Tax</Col>
                              <Col>${order.taxPrice.toFixed(2)}</Col>
                            </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Row>
                              <Col>
                                <strong> Order Total</strong>
                              </Col>
                              <Col>
                                <strong>${order.totalPrice.toFixed(2)}</strong>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                          {!order.isPaid && (
                            <ListGroup.Item>
                              {isPending ? (
                                <div />
                              ) : (
                                <div>
                                  <PayPalButtons
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                    onError={onError}
                                  ></PayPalButtons>
                                </div>
                              )}
                              {loadingPay && <div></div>}
                            </ListGroup.Item>
                          )}
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