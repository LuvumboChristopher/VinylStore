import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import useAuth from '../../../hooks/useAuth'

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true }
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true }
    case 'PAY_FAIL':
      return { ...state, loadingPay: false }
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false }
    default:
      return state
  }
}

export default function Commande() {
  const { auth } = useAuth()
  const { state } = useContext(StoreContext)

  const { id: orderId } = useParams()
  console.log(orderId)
  const navigate = useNavigate()

  const [{ loading, error, order, successPay, loadingPay }, dispatch ] = useReducer(reducer, {
      loading: false,
      order: {},
      error: '',
      successPay: false,
      loadingPay: false,
    })

    // const [loading, setLoading] = useState()
    // const [order, setOrder] = useState()
    // const [error, setError] = useState()
    // const [order, setOrder] = useState()


    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer()

    // function createOrder(data, actions) {
    //   return actions.order
    //     .create({
    //       purchase_units: [
    //         {
    //           amount: { value: order.totalPrice },
    //         },
    //       ],
    //     })
    //     .then((orderID) => {
    //       return orderID
    //     })
    // }

    // function onApprove(data, actions) {
    //   return actions.order.capture().then(async function(details) {
    //     try {
    //       dispatch({ type: 'PAY_REQUEST' })
    //       const { data } = await axios.put(
    //         `http://localhost:5000/api/v1/orders/${order._id}/pay`,
    //         details,
    //         {
    //           withCredentials: true,
    //         }
    //       )
    //       dispatch({ type: 'PAY_SUCCESS', payload: data })
    //     } catch (err) {
    //       dispatch({ type: 'PAY_FAIL', payload: err })
    //       console.error(err)
    //     }
    //   })
    // }

    // function onError(err) {
    //   console.error(err)
    // }

     const fetchOrder = async () => {
       try {
         dispatch({ type: 'FETCH_REQUEST' })
         const { data } = await axios.get(
           `http://localhost:5000/api/v1/orders/${orderId}`,
           {
             withCredentials: true,
           }
         )
         console.log(data)
         dispatch({ type: 'FETCH_SUCCESS', payload: data })
       } catch (err) {
         dispatch({ type: 'FETCH_FAIL', payload: err.message })
       }
     }

     fetchOrder()

  useEffect(() => {

    if (!auth) {
      return navigate('/connexion')
    }

    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' })
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/orders/${orderId}`,
          {
            withCredentials: true
          }
        )
        console.log(data)
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message })
      }
    }

    fetchOrder()

    // if (!order._id || successPay || (order._id && order._id !== orderId)) {
    //   fetchOrder()
    //   if (successPay) {
    //     dispatch({ type: 'PAY_RESET' })
    //   }
    // } else {

    //   const loadPaypalScript = async () => {
    //     const { data: paypalId } = await axios.get(
    //       'http://localhost:5000/api/v1/paypal',
    //       {
    //         withCredentials: true,
    //       }
    //     )
    //     paypalDispatch({
    //       type: 'resetOptions',
    //       value: {
    //         'client-id': paypalId,
    //         currency: 'EUR',
    //       },
    //     })
    //     paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
    //   }

    //   loadPaypalScript()
    // }

    console.log(order)

  }, [order, auth, orderId, paypalDispatch])



  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error...</p>
  ) : (
    <p>ola</p>
    // <div>
    //   <h1 className='my-3'>Order {orderId}</h1>
    //   <Row>
    //     <Col md={8}>
    //       <Card className='mb-3'>
    //         <Card.Body>
    //           <Card.Title>Shipping</Card.Title>
    //           <Card.Text>
    //             <strong>Nom:</strong> {order.shippingAddress.firstName} <br />
    //             <strong>Prenom:</strong> {order.shippingAddress.lastName} <br />
    //             <strong>Address: </strong> {order.shippingAddress.streetAddress}
    //             ,{order.shippingAddress.city}, {order.shippingAddress.zipCode},
    //             {order.shippingAddress.country}
    //           </Card.Text>
    //           {order.isDelivered ? (
    //             <p variant='success'>Delivered at {order.deliveredAt}</p>
    //           ) : (
    //             <p variant='danger'>Not Delivered</p>
    //           )}
    //         </Card.Body>
    //       </Card>
    //       <Card className='mb-3'>
    //         <Card.Body>
    //           <Card.Title>Payment</Card.Title>
    //           <Card.Text>
    //             <strong>Method:</strong> {order.paymentMethod}
    //           </Card.Text>
    //           {order.isPaid === true ? (
    //             <p variant='success'>Paid at {order.paidAt}</p>
    //           ) : (
    //             <p variant='danger'>Not Paid</p>
    //           )}
    //         </Card.Body>
    //       </Card>

    //       <Card className='mb-3'>
    //         <Card.Body>
    //           <Card.Title>Items</Card.Title>
    //           <ListGroup variant='flush'>
    //             {order.orderItems.map((item) => (
    //               <ListGroup.Item key={item._id}>
    //                 <Row className='align-items-center'>
    //                   <Col md={6}>
    //                     <Link to={`/store/products/${item._id}`}>
    //                       <img
    //                         src={item.img}
    //                         alt={item.title}
    //                         style={{ width: '40px' }}
    //                       ></img>{' '}
    //                       {item.title}
    //                     </Link>
    //                   </Col>
    //                   <Col md={3}>
    //                     <span>{item.quantity}</span>
    //                   </Col>
    //                   <Col md={3}>${item.price}</Col>
    //                 </Row>
    //               </ListGroup.Item>
    //             ))}
    //           </ListGroup>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col md={4}>
    //       <Card className='mb-3'>
    //         <Card.Body>
    //           <Card.Title>Order Summary</Card.Title>
    //           <ListGroup variant='flush'>
    //             <ListGroup.Item>
    //               <Row>
    //                 <Col>Items</Col>
    //                 <Col>${order.itemsPrice.toFixed(2)}</Col>
    //               </Row>
    //             </ListGroup.Item>
    //             <ListGroup.Item>
    //               <Row>
    //                 <Col>Shipping</Col>
    //                 <Col>${order.shippingPrice.toFixed(2)}</Col>
    //               </Row>
    //             </ListGroup.Item>
    //             <ListGroup.Item>
    //               <Row>
    //                 <Col>Tax</Col>
    //                 <Col>${order.taxPrice.toFixed(2)}</Col>
    //               </Row>
    //             </ListGroup.Item>
    //             <ListGroup.Item>
    //               <Row>
    //                 <Col>
    //                   <strong> Order Total</strong>
    //                 </Col>
    //                 <Col>
    //                   <strong>${order.totalPrice.toFixed(2)}</strong>
    //                 </Col>
    //               </Row>
    //             </ListGroup.Item>
    //             {!order.isPaid && (
    //               <ListGroup.Item>
    //                 {isPending ? (
    //                   <p>Loading...</p>
    //                 ) : (
    //                   <div>
    //                     <PayPalButtons
    //                       createOrder={createOrder}
    //                       onApprove={onApprove}
    //                       onError={onError}
    //                     ></PayPalButtons>
    //                   </div>
    //                 )}
    //                 {loadingPay && <p>Loading...</p>}
    //               </ListGroup.Item>
    //             )}
    //           </ListGroup>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
  )
}
