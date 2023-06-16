import React from 'react'
import { Fragment, useContext } from 'react'
import { UserContext } from '../context/user.context'
import {Outlet, Link} from 'react-router-dom'
import styled from 'styled-components'
import bunnyLogo from '../assets/logo2.png'
import { signOutUser } from '../utils/firebase/firebase.utils'

//components
import CartIcon from '../components/cart-icon/CartIcon'
import CartDropdown from '../components/cart-dropdown/CartDropdown'
import { CartContext } from '../context/cart.context'

 const Navigation = () =>{

const { currentUser } = useContext(UserContext);
const {cartItems,  setCartItems, isCartOpen, setIsCartOpen} = useContext(CartContext)

// console.log(currentUser)

const signOutHandler = async () =>{
  await signOutUser()
}


    return(
      <Fragment>
        <Wrapper>
            <Link className="logo-container" to='/'>
                    <img src={bunnyLogo} alt='bunny-logo' />
                    <div className="bunny-div"></div>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            {currentUser ? (<span className='nav-link' onClick={signOutHandler}>LOG-OUT</span>) : 
            (<Link className="nav-link" to='/auth'>
                  SIGN-IN
             </Link>)}
            
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown /> }
        </Wrapper>
        <Outlet />
      </Fragment>
    )
  }


  export default Navigation;

  const Wrapper = styled.div`
  padding: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    display: flex;
    flex-direction: column;
    height: 75%;
    width: 75%;
    
    /* background-color: #7e0026; */
  }

  .bunny-div{
    /* min-height: 300px;
    width: 100px;
    background-color: #c1bfbf; */
  }

  .nav-links-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: #c1bfbf; */

    .nav-link {
      padding: 10px 15px;
      cursor: pointer;
    }
  }

  .logo-container img {
    width: 90px;
    
   
  }
  `