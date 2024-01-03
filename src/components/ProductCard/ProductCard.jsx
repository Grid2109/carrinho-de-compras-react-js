import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const { title, thumbnail, price} = data;

  const  { handleAddProduct } = useContext(AppContext);

  // const handleAddCart = () =>  setCartItems([ ...cartItems, data]);
  const handleAddCart = (product) => handleAddProduct(product);

  return (
    <section className='product-card'>

      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className='card__image' />

      <div className="card__infos">
        <h2 className='card__price'>{formatCurrency(price, 'BRL')}</h2>
        <h2 className='card__title'>{title}</h2>
      </div>

      <button
        type='button'
        className='button__add-cart'
        onClick={ () => handleAddCart(data) }
      >


        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({})
}.isRequired;