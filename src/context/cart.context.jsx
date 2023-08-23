import React, {createContext, useState, useReducer} from 'react'


const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem)
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}


const CART_ACTION_TYPES = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM',
    CLEAR_CART: 'CLEAR_CART',
    TOGGLE_CART: 'TOGGLE_CART',
}

const INITIAL_CART_STATE = {
isCartOpen: false,
cartItems: [],
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.ADD_ITEM:
            return {...state, ...payload}
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {...state, cartItems: payload }
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {...state, isCartOpen: payload}
        default: throw new Error(`Unhandled type ${type} in userReducer`)

        
    }
}


export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    setCartItems: () => null,
    setIsCartOpen: () => null,
    addItemToCart: () => null,

});

export const CartProvider = ({children}) =>{
 const [{cartItems, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE)


 //dispatch functions 
  const addItemToCart = (item) => {
    const newCartItems = addCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems)
  }
  const updateCartItemsReducer = (newCartItems) => {
    dispatch({type: CART_ACTION_TYPES.ADD_ITEM, payload: {cartItems: newCartItems}})
}
 const  setIsCartOpen = (d) => {
    dispatch({type: CART_ACTION_TYPES.TOGGLE_CART, payload:d})
 }

 const setCartItems = (updatedItems) => {
    dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload:updatedItems})
 }

  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart}
//   console.table(cartItems)



  return <CartContext.Provider value=
  {
      value
  }>
      {children}
  </CartContext.Provider>
}

