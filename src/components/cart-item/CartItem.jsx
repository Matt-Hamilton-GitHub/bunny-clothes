import React from 'react'
import './cart.item.styles.scss'

 const CartItem = ({item}) => {
    const {name, quantity} = item;
    console.log(name, quantity)
  return (
    <div>
        <h2>{name}</h2>
        <span>{quantity}</span>
        
    </div>
  )
}

export default CartItem