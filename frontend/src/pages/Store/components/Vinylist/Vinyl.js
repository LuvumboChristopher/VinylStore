import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../../context/StoreProvider';

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
    <article className='vinyl_item'>
      <div className='vinyl_cover_container'>
        <img className='vinyl_cover' src={img} alt='Vinyl cover' />
      </div>
      <div className='vinyl_data'>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <h5>{year}</h5>
        <p>
          {description.slice(0, 200)}
          {description.length > 200 && '...'}
        </p>
      </div>

      <div className='vinyl_purchase'>
        <div>
          <Link to={`products/${_id}`}>
            <button className='voir_btn btn'>Voir</button>
          </Link>

          <button onClick={handleAddToCart} className='acheter_btn btn'>
            Acheter
          </button>
        </div>
        <p>{price}$</p>
      </div>
    </article>
  )
};

export {Vinyl};