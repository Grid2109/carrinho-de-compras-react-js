import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {

  const [products, setProducts]  = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Função de adicionar um produto
  const handleAddProduct = (product) => {
    // Valida se o array do carrinho está vazio, se tiver vazio insere o produto que o usuário está adicionando.
    if (!cartItems.length) return setCartItems([{...product, quantity: 1}]);

    // Verifica se o produto que o usuário está adicionando já existe no carrinho
    const findProduct = cartItems.find(item => item.id === product.id);

    if (findProduct) {
      return setCartItems(prevItems => prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : {...item}));
    }

    // Adiciona um produto que não está no carrinho
    setCartItems([...cartItems, {...product, quantity: 1 }]);
  };

  // função de remover um produto
  const handleRemoveProduct = (product) => {
    // Guard Clause - Caso não exista itens no carrinho a função retorna um void
    if (!cartItems.length) return;

    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === product.id) {
        // diminuição da quantidade do item que o usuário deseja remover
        return {...item, quantity: item.quantity - 1 };
      }
      // retornar os itens que existe no carrinho
      return {...item };
      // filtra os produtos que tem quantidade > 0
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