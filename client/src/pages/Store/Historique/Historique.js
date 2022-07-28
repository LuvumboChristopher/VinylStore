import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { StoreFooter, StoreHeader } from '../Store'
import { ContentWrapper, InfoContainer, ProductScreenWrapper, ProductVinylCoverContainer } from '../Product/Product'
import { ContentContainer, StoreContainer } from '../style'

export const  Historique = ()=> {
  const { auth } = useAuth()
  const navigate = useNavigate()

  const [ orders, setOrders ] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          '/api/v1/orders',
          {
            withCredentials: true
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
  }, [auth.user])

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
        ) : (
          'No orders'
        )}
          </ProductScreenWrapper>
        </ContentContainer>
        <StoreFooter />
      </StoreContainer>
    </>
  )
}
