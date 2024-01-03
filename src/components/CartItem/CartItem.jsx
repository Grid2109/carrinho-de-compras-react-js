import React, { useContext } from 'react';
import propTypes from 'prop-types';


import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';


function CartItem( {data} ) {

  const  { handleRemoveProduct } = useContext(AppContext);
  const { thumbnail, title , price, quantity} = data;
  /* const handleRemoveItem = () => {
    const indexToRemove = cartItems.findIndex(item => item.id === id);


    if (indexToRemove !== -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(indexToRemove, 1);

      setCartItems(updatedItems);
    }
  }; */

  return(
    <section className='cart-item'>
      <img
        src={thumbnail}
        alt="imagem do produto"
        className='cart-item-image'
      />

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className='cart-item-price'> {formatCurrency(price, 'BRL')}</h3>
        <h3>{quantity}</h3>
        <button
          type='button'
          className='button__remove-itens'
          onClick={ () => handleRemoveProduct(data) }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;

export default CartItem;

