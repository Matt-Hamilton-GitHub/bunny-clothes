import React from 'react'
import { Fragment, useContext } from 'react'
import { UserContext } from '../context/user.context'
import {Outlet, Link} from 'react-router-dom'
import styled from 'styled-components'
import bunnyLogo from '../assets/logo2.png'
import { signOutUser } from '../utils/firebase/firebase.utils'
 const Navigation = () =>{

const { currentUser } = useContext(UserContext);
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
            
          </div>
        </Wrapper>
        <Outlet />
      </Fragment>
    )
  }


  export default Navigation;

  const Wrapper = styled.div`

  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 25px;
    background-color: #7e0026;
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
    background-color: #c1bfbf;

    .nav-link {
      padding: 10px 15px;
      cursor: pointer;
    }
  }

  .logo-container img {
    width: 100px;
    height: 100px;
   
  }
  `