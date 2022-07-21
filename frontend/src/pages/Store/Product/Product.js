import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { StoreContext } from '../../../context/StoreProvider'
import axios from 'axios'
import { StoreFooter, StoreHeader } from '../Store'
import { BsCartPlusFill } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs'
import { BsFillHeartFill } from 'react-icons/bs'

import { ContentContainer, StoreContainer } from '../style'

export const ProductScreenWrapper = styled.div`
  width: 95%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem;
`

export const DetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: justify;
  margin: 1.5rem auto;
`

export const Description = styled.p`
  text-align: justify;
  margin: 1rem auto;
`

export const ProductVinylCoverContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
`
export const InfoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  flex: 3;
`

export const ProductVinylCover = styled.img`
  width: 500px;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  transition: transform 100ms ease-in-out;
  cursor: zoom-in;
  :hover {
    transform: scale(1.03);
  }
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`
export const ProductButtonsContainer = styled.div`
  width: 100%;
  margin: 2.3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProductButtons = styled.button`
  width: fit-content;
  padding: 1.1rem;
  border: 2px solid black;
  background-color: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.85rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgb(129, 8, 8);
    box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  }
`

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [display, setDisplay] = useState({
    details: true,
    retours: false,
    livraison: false
  })

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fecthproducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {

        const url = `http://localhost:5000/api/v1/products/${id}`
        const { data } = await axios.get(url)
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        const error = 'Erreur de serveur, réessayez plus tard'
        dispatch({ type: 'FETCH_FAIL', payload: error })
      }
    }
    fecthproducts()
  }, [id])

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart } = state

  const handleAddToCartAndNavigate = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
    navigate('/panier')
  }

  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
  }

  return (
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
            product && (
              <>
                <ProductVinylCoverContainer>
                  <ProductVinylCover src={product.img} alt={product.title} />
                </ProductVinylCoverContainer>
                <InfoContainer>
                  <ContentWrapper>
                    <div>
                      <div>
                        <div>
                          <h1>{product.title}</h1>
                          <h2>{product.author}</h2>
                          <p>{product.year}</p>
                        </div>
                      </div>
                      <ProductButtonsContainer>
                        <div style={{ display: 'flex', gap: '0.85rem' }}>
                          <ProductButtons onClick={handleAddToCart}>
                            <BsCartPlusFill style={{ fontSize: '1.5rem' }} />
                            Ajouter au panier
                          </ProductButtons>
                          <ProductButtons onClick={handleAddToCartAndNavigate}>
                            <BsFillBagFill style={{ fontSize: '1.5rem' }} />
                            Achetez maintenant
                          </ProductButtons>
                          <ProductButtons>
                            <BsFillHeartFill style={{ fontSize: '1.5rem' }} />
                          </ProductButtons>
                        </div>
                        <h1>{product.price} €</h1>
                      </ProductButtonsContainer>
                    </div>
                    <div>
                      <DetailsTitle>
                        <h3>Détails du produit</h3>
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            setDisplay({
                              ...display,
                              details: !display.details,
                            })
                          }
                        >
                          {display.details ? <h3>-</h3> : <h3>+</h3>}
                        </span>
                      </DetailsTitle>
                      <hr />
                      {display.details && (
                        <Description>{product.description}</Description>
                      )}

                      <DetailsTitle>
                        <h3>Politique de retour et de remboursement</h3>
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            setDisplay({
                              ...display,
                              retours: !display.retours,
                            })
                          }
                        >
                          {display.retours ? <h3>-</h3> : <h3>+</h3>}
                        </span>
                      </DetailsTitle>
                      <hr />
                      {display.retours && (
                        <Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In iaculis blandit orci, eget feugiat lorem
                          hendrerit id. Proin pulvinar, enim eu ultricies
                          efficitur, elit neque scelerisque ligula, ac ultrices
                          sapien ex sit amet sapien. Nunc accumsan aliquam
                          dignissim. Nulla eu euismod felis, quis auctor dolor.
                        </Description>
                      )}
                      <DetailsTitle>
                        <h3>Info sur la livraison</h3>
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            setDisplay({
                              ...display,
                              livraison: !display.livraison,
                            })
                          }
                        >
                          {display.livraison ? <h3>-</h3> : <h3>+</h3>}
                        </span>
                      </DetailsTitle>
                      <hr />
                      {display.livraison && (
                        <Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. In iaculis blandit orci, eget feugiat lorem
                          hendrerit id. Proin pulvinar, enim eu ultricies
                          efficitur, elit neque scelerisque ligula, ac ultrices
                          sapien ex sit amet sapien. Nunc accumsan aliquam
                          dignissim. Nulla eu euismod felis, quis auctor dolor.
                        </Description>
                      )}
                    </div>
                  </ContentWrapper>
                </InfoContainer>
              </>
            )
          )}
        </ProductScreenWrapper>
      </ContentContainer>
      <StoreFooter />
    </StoreContainer>
  )
}

export default Product
