import React, {createContext, useState } from 'react'


const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem)
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}




export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    setCartItems: () => null,
    setIsCartOpen: () => null,
    addItemToCart: () => null,

});

export const CartProvider = ({children}) =>{

  const [isCartOpen,  setIsCartOpen] = useState(false);
  const [cartItems,  setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));

  }


  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart}
  console.table(cartItems)

  return <CartContext.Provider value=
  {
      value
  }>
      {children}
  </CartContext.Provider>
}

