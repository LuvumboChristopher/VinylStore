import React, { useContext, useEffect, useReducer } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { StoreContext } from '../../../context/StoreProvider'
import axios from 'axios'
import { ProductHeader } from '../Store'
import { BsArrowLeft } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { IoSave } from 'react-icons/io5'
import { MdAddShoppingCart } from 'react-icons/md'
import { useState } from 'react'

const StyledWrapper = styled.div`
  width: 85%;
  margin: 5rem auto;
  display: flex;
`
const CoverWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
`
const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;
`
const Description = styled.p`
  text-align: justify;
`
const Cover = styled.img`
  width: 500px;
`
const ContentContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20rem;
`
const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`
const ProductButtonsContainer = styled.div`
  width: 100%;
  margin: 3rem auto;
  display: flex;
  align-items: center;
`
const ProductButtons = styled.button`
  width: 100%;
  padding: 2rem 0.4rem;
  border: 1px solid black;
  color:white
  background-color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
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

const Product = ({ props }) => {
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
        const result = await axios.get(
          `http://localhost:5000/api/v1/products/${id}`
        )
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL' })
      }
    }
    fecthproducts()
  }, [id])

  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart } = state

  const [qty, setQty] = useState(1)

  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === product._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    })
    navigate('/cart')
  }

  return (
    <>
      <ProductHeader />
      <ContentContainer>
        <div className='vinyl_container'>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <StyledWrapper>
              <Link to='/store'>
                <BsArrowLeft />
              </Link>
              <CoverWrapper>
                <Cover src={product.img} alt={product.title} />
              </CoverWrapper>
              <ContentWrapper>
                <ContentHeader></ContentHeader>
                <div>
                  <h1>{product.title}</h1>
                  <h2>{product.author}</h2>
                  <small>{product.year}</small>
                </div>

                <Description>{product.description}</Description>
                <p>{product.price}</p>
                <div>
                  <div>Quantité</div>
                  <div>
                    <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                </div>
                <ProductButtonsContainer>
                  <ProductButtons onClick={handleAddToCart}>
                    Ajouter au panier <MdAddShoppingCart />
                  </ProductButtons>
                  <ProductButtons>
                    Ajouter aux favoris <FaHeart />
                  </ProductButtons>
                  <ProductButtons>
                    Enregistrér pour plus tard <IoSave />
                  </ProductButtons>
                </ProductButtonsContainer>
              </ContentWrapper>
            </StyledWrapper>
          )}
        </div>
      </ContentContainer>
      {/* <Footer /> */}
    </>
  )
}

export default Product
