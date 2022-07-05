import React, { useContext, useEffect, useReducer } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { StoreContext } from '../../../context/StoreProvider'
import axios from 'axios'
import { ProductHeader, StoreFooter, StoreHeader } from '../Store'
import { BsArrowLeft } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { IoSave } from 'react-icons/io5'
import { BsCartPlusFill } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs'
import { BsFillHeartFill } from 'react-icons/bs'


import { ContentContainer, Copyright, StoreContainer } from '../style'

export const ProductScreenWrapper = styled.div`
  width: 95%;
  margin: auto;
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
`

export const ProductVinylCover = styled.img`
  width: 500px;
  margin: 0 auto 2rem;
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`
export const ProductButtonsContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
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
  gap: 1.5rem;
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

const Product = ({ current }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fecthproducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/products/${id}`
        )
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL' })
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
        <div>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <p> En cours de chargement...</p>
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ProductScreenWrapper>
              <ProductVinylCoverContainer>
                <ProductVinylCover src={product.img} alt={product.title} />
              </ProductVinylCoverContainer>
              <div>
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
                      <h3>+</h3>
                    </DetailsTitle>
                    <hr />
                    <Description>{product.description}</Description>
                    <DetailsTitle>
                      <h3>Politique de retour et de remboursement</h3>
                      <h3>+</h3>
                    </DetailsTitle>
                    <hr />
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In iaculis blandit orci, eget feugiat lorem hendrerit id.
                      Proin pulvinar, enim eu ultricies efficitur, elit neque
                      scelerisque ligula, ac ultrices sapien ex sit amet sapien.
                      Nunc accumsan aliquam dignissim. Nulla eu euismod felis,
                      quis auctor dolor.
                    </Description>
                    <DetailsTitle>
                      <h3>Info sur la livraison</h3>
                      <h3>+</h3>
                    </DetailsTitle>
                    <hr />
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In iaculis blandit orci, eget feugiat lorem hendrerit id.
                      Proin pulvinar, enim eu ultricies efficitur, elit neque
                      scelerisque ligula, ac ultrices sapien ex sit amet sapien.
                      Nunc accumsan aliquam dignissim. Nulla eu euismod felis,
                      quis auctor dolor.
                    </Description>
                  </div>
                </ContentWrapper>
              </div>
            </ProductScreenWrapper>
          )}
        </div>
      </ContentContainer>
      <StoreFooter/>
    </StoreContainer>
  )
}

export default Product
