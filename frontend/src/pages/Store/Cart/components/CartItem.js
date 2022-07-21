import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { VinylData } from '../../style'

const CartItemWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const VinylWrapper = styled.div`
  width: 650px;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 55px;
`

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.555);
  border-radius: 2px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`

const Price = styled.h1`
  font-size: 1.3rem;
`

const QuantityButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;
  border-radius: 2px;
`

const DeleteButton = styled.button`
  width: fit-content;
  padding: 1rem 3rem;
  border: 1px solid rgba(0, 0, 0, 0.555);
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  background-color: rgb(129, 8, 8);
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: rgb(129, 8, 8);
    border: 2px solid rgb(129, 8, 8);
  }
`

export const CartItem = ({
  cartItems,
  updateCartHandler,
  removeItemHandler,
}) => {
  const navigate = useNavigate()

  return (
    <ListGroup>
      {cartItems.map((item) => (
        <ListGroup.Item key={item._id}>
          <CartItemWrapper>
            <VinylWrapper>
              <img
                style={{
                  width: '230px',
                  borderRadius: '2px',
                  boxShadow: '2px 3px 23px -3px rgba(0,0,0,0.25)',
                  cursor: 'pointer',
                }}
                src={item.img}
                alt={item.title}
                onClick={() => navigate(`/products/${item._id}`)}
              ></img>
              <div>
                <VinylData>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem 0',
                      margin: '1.1rem auto',
                      borderBottom: '1px solid black',
                    }}
                  >
                    <div>
                      <h2
                        onClick={() => navigate(`/products/${item._id}`)}
                        style={{
                          cursor: 'pointer',
                        }}
                      >
                        {item.title}
                      </h2>
                      <h5>{item.author}</h5>
                      <h5>{item.year}</h5>
                    </div>
                    <Price>{item.price}€</Price>
                  </div>
                  <p style={{ fontSize: '0.8rem' }}>
                    {item.description.slice(0, 170)}
                    {item.description.length > 170 && '...'}
                  </p>
                </VinylData>
              </div>
            </VinylWrapper>
            <div>
              <QuantityButtonWrapper>
                <Button
                  onClick={() => updateCartHandler(item, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  onClick={() => updateCartHandler(item, item.quantity + 1)}
                  disabled={item.quantity === 6}
                >
                  +
                </Button>
              </QuantityButtonWrapper>
            </div>
            <DeleteButton onClick={() => removeItemHandler(item)}>
              supprimer
            </DeleteButton>
          </CartItemWrapper>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
