import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../../context/StoreProvider';

import {
  VinylItem,
  VinylCoverContainer,
  VinylCover,
  VinylData,
  VinylPurchase,
  VinylPurchaseButton,
  VinylDescription,
} from '../../style.js'


const Vinyl = (vinyl) => {
  const { _id, title, author, img, description, year, price } = vinyl
  
  const { state, dispatch: ctxDispatch } = useContext(StoreContext)
  const { cart } = state

  const handleAddToCart = async () => {
    const existItem = cart.cartItems.find(
      (element) => element._id === vinyl._id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...vinyl, quantity },
    })
  }

  return (
    <VinylItem>
      <VinylCoverContainer>
        <Link to={`/products/${_id}`}>
          <VinylCover src={img} alt='Vinyl cover' />
        </Link>
      </VinylCoverContainer>
      <div>
        <VinylData>
          <h2>{title}</h2>
          <h5>{author}</h5>
          <h5>{year}</h5></VinylData>
          <VinylDescription>
            {description.slice(0, 158)}
            {description.length > 158 && '...'}
          </VinylDescription>
        

        <VinylPurchase>
          <div>
            <Link to={`/products/${_id}`}>
              <VinylPurchaseButton voir={true}>Voir</VinylPurchaseButton>
            </Link>

            <VinylPurchaseButton onClick={handleAddToCart}>
              Acheter
            </VinylPurchaseButton>
          </div>
          <h1 style={{ fontSize: '1.20rem' }}>{price} €</h1>
        </VinylPurchase>
      </div>
    </VinylItem>
  )
};

export {Vinyl};