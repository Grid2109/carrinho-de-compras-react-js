import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {

  const [products, setProducts]  = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddProduct = (product) => {
    if (!cartItems.length) return setCartItems([{...product, quantity: 1}]);

    const findProduct = cartItems.find(item => item.id === product.id);

    if (findProduct) {
      return setCartItems(prevItems => prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : {...item}));
    }

    setCartItems([...cartItems, {...product, quantity: 1 }]);
  };

  const handleRemoveProduct = (product) => {
    if (!cartItems.length) return;

    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === product.id) {
        return {...item, quantity: item.quantity - 1 };
      }
      return {...item };
    }).filter(item => item.quantity));
  };

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    handleAddProduct,
    handleRemoveProduct
  };

  console.log(cartItems);

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;