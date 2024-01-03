import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { BsCartDashFill } from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;
  const handleRemoveItem = () => {
    // Encontra o índice do item no array cartItems com base no seu ID
    const indexToRemove = cartItems.findIndex((item) => item.id === id);

    // Verifica se o item foi encontrado no array (índice diferente de -1)
    if (indexToRemove !== -1) {
      // Cria uma cópia do array cartItems
      const updatedItems = [...cartItems];
      // Remove o item do array usando o índice encontrado
      updatedItems.splice(indexToRemove, 1);
      // Atualiza o estado do carrinho com o novo array sem o item removido
      setCartItems(updatedItems);
    }
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price"> {formatCurrency(price, 'BRL')}</h3>

        <button
          type="button"
          className="button__remove-itens"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;

export default CartItem;
