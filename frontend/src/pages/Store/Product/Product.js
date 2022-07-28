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
  width: 100%;
  margin: auto;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 4rem;
  @media (max-width: 1440px) {
    padding: 0;
    margin: 0 auto;
    flex-direction: column;
    place-items: center;
    gap: 0;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const ProductInfoHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1440px) {
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
  }
`

export const DetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  gap: 1rem;
  margin: auto;
  padding: 1rem 0;
  border-bottom: 1px solid black;
`

export const Description = styled.p`
  text-align: justify;
  margin: 1.5rem auto;
`

export const ProductVinylCoverContainer = styled.div`
  width: fit-content;
  margin: 2rem auto;
  display: grid;
  place-items: center;
  flex: 1;
  @media (max-width: 1440px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProductVinylCover = styled.img`
  width: 100%;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  transition: transform 100ms ease-in-out;
  cursor: zoom-in;
`

export const InfoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  flex: 2;
  @media (min-width: 768px) and (max-width: 1440px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProductButtonsContainer = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductButtonsContent = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: start;
  @media (max-width: 1280px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProductButtons = styled.button`
  width: 100%;
  margin: auto;
  padding: 1rem;
  border: 1px solid black;
  background-color: transparent;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgb(129, 8, 8);
    box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 1280px) {
    width: 100%;
    text-align: center;
  }
`

export const ProductHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  alignItems: center;
  padding: 1rem 0;
  margin: 0 auto;
  border-bottom: 1px solid black;     
`
export const DetailsContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 2rem auto 0;
  border: 1px solid black;
  @media (max-width: 768px) {
    padding: 0;
    border: none;
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
    retours: true,
    livraison: true,
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
            <div style={{ padding: '3rem', textAlign: 'center' }}>
              <p> En cours de chargement...</p>
            </div>
          ) : error ? (
            <div style={{ padding: '3rem', textAlign: 'center' }}>
              <p>{error}</p>
            </div>
          ) : (
            product && (
              <>
                <ProductVinylCoverContainer>
                  <ProductVinylCover src={product.img} alt={product.title} />
                </ProductVinylCoverContainer>
                <InfoContainer>
                  <ContentWrapper>
                    <div>
                      <ProductHeader>
                        <div>
                          <h2>{product.title}</h2>
                          <h4>{product.author}</h4>
                          <h4>{product.year}</h4>
                        </div>
                        <h2>{product.price}€</h2>
                      </ProductHeader>
                      <ProductButtonsContainer>
                        <ProductButtonsContent>
                          <ProductButtons onClick={handleAddToCart}>
                            <BsCartPlusFill style={{ fontSize: '1.5rem' }} />
                            Ajouter au panier
                          </ProductButtons>
                          <ProductButtons onClick={handleAddToCartAndNavigate}>
                            <BsFillBagFill style={{ fontSize: '1.5rem' }} />
                            Achetez maintenant{' '}
                            <small> ({product.price}€)</small>
                          </ProductButtons>
                          <ProductButtons>
                            <BsFillHeartFill style={{ fontSize: '1.5rem' }} />
                            Coups de cœur
                          </ProductButtons>
                        </ProductButtonsContent>
                      </ProductButtonsContainer>
                    </div>
                    <DetailsContainer>
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
                    </DetailsContainer>
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
