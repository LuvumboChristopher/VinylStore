import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreProvider'



export default function Historique() {
  const { state } = useContext(StoreContext)
  const { userInfo } = state
  const navigate = useNavigate()

  const [ orders, setOrders ] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          'http://localhost:5000/api/v1/orders',
          {
            headers: {
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        )
        setLoading(false)
        setOrders(data)
      } catch (err) {
        setLoading(false)
        setError(err.message)
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
      ) : orders ? (
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
      ): 'No orders'}
    </div>
  )
}
