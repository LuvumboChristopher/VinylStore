import React, { useEffect, useReducer } from 'react'
import { Vinyl } from './Vinyl'
import axios from 'axios'

import { VinylListContainer, ListWrapper, VinylList } from '../../style.js'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

const VinylsList = ({ search, handleAddToCart }) => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fecthproducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const url = '/api/v1/products'
        const { data } = await axios.get(url)
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      } catch (err) {
        const error = 'Erreur de serveur, réessayez plus tard'
        dispatch({ type: 'FETCH_FAIL', payload: error })
      }
    }
    fecthproducts()
  }, [])

  return (
    <VinylListContainer>
      <ListWrapper>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <p> En cours de chargement...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center' }}>
            <p>{error}</p>
          </div>
        ) : products ? (
          <VinylList>
            {search(products).length === 0 ? (
              <div style={{ textAlign: 'center' }}>
                <p>Pas de resultats pour votre recherche</p>
              </div>
            ) : (
              search(products).map((vinyl) => {
                return (
                  <Vinyl
                    key={vinyl._id}
                    {...vinyl}
                    handleAddToCart={handleAddToCart}
                  ></Vinyl>
                )
              })
            )}
          </VinylList>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p>Pas de resultats pour votre recherche...</p>
          </div>
        )}
      </ListWrapper>
    </VinylListContainer>
  )
}

export default VinylsList
