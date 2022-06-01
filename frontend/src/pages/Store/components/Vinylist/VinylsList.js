import React, { useEffect, useReducer } from 'react'
import { Vinyl } from './Vinyl'
import axios from 'axios'
import logger from 'use-reducer-logger'

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
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  })

  useEffect(() => {
    const fecthproducts = async () => {
      dispatch({ type: 'FETCH_REQUEST' })
      try {
        const url = '/api/v1/products'
        const result = await axios.get(url)
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
      } catch (err) {
        const error = 'Erreur de serveur, réessayez plus tard'
        dispatch({ type: 'FETCH_FAIL', payload: error })
      }
    }
    fecthproducts()
  }, [])

  return (
    <>
      <div className='vinyl_list_container'>
        <div className='list_wrapper'>
          {loading ? (
            <p style={{ textAlign: 'center' }}> En cours de chargement...</p>
          ) : error ? (
            <p style={{ textAlign: 'center' }}>{error}</p>
          ) : products ? (
            <div className='vinyl_list'>
              {search(products).length === 0 ? (
                <p style={{ textAlign: 'center' }}>
                  Pas de résultats pour votre recherche...
                </p>
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
            </div>
          ) : (
            <p>Pas de resultats pour votre recherche</p>
          )}
        </div>
      </div>
    </>
  )
}

export default VinylsList
