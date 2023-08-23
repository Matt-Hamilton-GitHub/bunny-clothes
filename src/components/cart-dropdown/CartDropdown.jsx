import React, {useContext} from 'react'
import Button from '../button/button.component';
import './cart.dropdown.scss'
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext)


  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
           {cartItems.map(item => 
            <CartItem key={item.id} cartItem={item}/>)}
        </div>
        
        <Link to='check-out'>
            <Button >CHECK OUT</Button>
        </Link>
        
    </div>
  )
}


export default CartDropdown;