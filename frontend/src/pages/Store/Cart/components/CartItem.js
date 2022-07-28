import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const CartItemWrapper = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 1440px) {
    width: 95%;
    margin: auto;
  }
`

export const VinylWrapper = styled.div`
  width: 80%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1440px) {
    width: 100%;
    margin: 2.75rem auto;
    flex-direction: row;
    gap: 3rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
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
export const Price = styled.h1`
  font-size: 1.2rem;
`
const QuantityButtonWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 2px;
  @media (min-width: 1440px) {
    width: fit-content;
    margin: auto;
    padding: 0;
  }
`
const DeleteButton = styled.button`
  width: 100%;
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
    border: 1px solid rgb(129, 8, 8);
  }
  @media (min-width: 1440px) {
    width: fit-content;
  }
`

const VinylInfo = styled.div`
  width: 100%;
  margin: auto;
  text-align: justify;
  @media (min-width: 1440px) {
    width: 40%;
  }
`

export const CartVinylCover = styled.img`
  width: 65%;
  margin: auto;
  @media (min-width: 1440px) {
    width: 250px;
  }
`

export const CartItem = ({
  cartItems,
  updateCartHandler,
  removeItemHandler,
}) => {
  const navigate = useNavigate()

  return (
    <>
      {cartItems.map((item) => (
        <div key={item._id}>
          <CartItemWrapper>
            <VinylWrapper>
              {/*  seccion 1 */}
                <CartVinylCover
                  src={item.img}
                  alt={item.title}
                  onClick={() => navigate(`/products/${item._id}`)}
                />
              {/*  seccion 2 */}
              <VinylInfo>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    margin: '1.5rem auto',
                    borderBottom: '1px solid black',
                    gap:'30px'
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
                  {item.description.slice(0, 220)}
                  {item.description.length > 220 && '...'}
                </p>
              </VinylInfo>
              {/*  seccion 3 */}
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
              {/*  seccion  */}
              <DeleteButton onClick={() => removeItemHandler(item)}>
                Supprimer
              </DeleteButton>
            </VinylWrapper>
          </CartItemWrapper>
        </div>
      ))}
    </>
  )
}
