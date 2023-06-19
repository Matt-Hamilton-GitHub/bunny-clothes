import React, {useContext} from 'react'
import './cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, cartItems} = useContext(CartContext)
  const getTotalItems = () => cartItems.reduce((total, curr) => total + curr.quantity, 0)

  
  return (
    <div className="cart-icon-container" onClick={() => setIsCartOpen(!isCartOpen)} >
         <ShoppingIcon className='shopping-icon'/>
         <span className='item-count'>{getTotalItems()}</span>
    </div>
  )
}

export default CartIcon
