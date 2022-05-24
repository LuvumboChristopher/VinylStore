import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartItemWrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: yellow;
`
const VinylWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background-color: blue;
`

const Button = styled.button`
  width: 100%;
  padding: 5px;
  color: white;
  background-color: black;
  border: none;
`

const Price = styled.p`
  width: 100%
  font-size: 1.9rem;
`

const DeleteButton = styled.button`
  width: 100%;
  margin: 0;
  padding: 1.5rem;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.555);
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  color: white;
  background-color: rgb(129, 8, 8);
`

export const CartItem = ({
  cartItems,
  updateCartHandler,
  removeItemHandler,
}) => {
  return (
    <ListGroup>
      {cartItems.map((item) => (
        <ListGroup.Item key={item._id}>
          <CartItemWrapper className='align-items-center'>
            <VinylWrapper>
              <Link to={`/store/products/${item._id}`}>
                <img
                  style={{ width: '120px' }}
                  src={item.img}
                  alt={item.title}
                  className='img-fluid rounded img-thumbnail'
                ></img>
              </Link>
              <div>
                <p>{item.title} </p>
                <p>{item.author}</p>
              </div>
            </VinylWrapper>
            <div>
              <Button
                onClick={() => updateCartHandler(item, item.quantity - 1)}
                disabled={item.quantity === 1}
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button
                variant='light'
                onClick={() => updateCartHandler(item, item.quantity + 1)}
                disabled={item.quantity === 6}
              >
                +
              </Button>
            </div>

            <div>
              <Price>${item.price}</Price>
              <DeleteButton
                onClick={() => removeItemHandler(item)}
                variant='light'
              >
                Supprimer
              </DeleteButton>
            </div>
          </CartItemWrapper>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
