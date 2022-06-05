import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, orders: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function Historique() {
  const { state } = useContext(StoreContext)
  const { userInfo } = state
  const navigate = useNavigate()

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const { data } = await axios.get(
          'http://localhost:5000/api/v1/orders/mine',

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        )
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: err,
        })
      }
    }
    fetchData()
  }, [userInfo])

  return (
    <div>

      <h1>Order History</h1>
      {loading ? (
        <p> Loading...</p>
      ) : error ? (
        <p variant='danger'>{error}</p>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type='button'
                    variant='light'
                    onClick={() => {
                      navigate(`/commande/${order._id}`)
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
