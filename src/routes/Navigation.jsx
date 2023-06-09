import React from 'react'
import { Fragment } from 'react'
import {Outlet, Link} from 'react-router-dom'
import styled from 'styled-components'
import bunnyLogo from '../assets/bunny-logo.png'

 const Navigation = () =>{
    return(
      <Fragment>
        <Wrapper>
            <Link className="logo-container" to='/'>
                    <img src={bunnyLogo} alt='bunny-logo' />
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to='/sign-in'>
                SIGN IN
            </Link>
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
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .nav-links-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-link {
      padding: 10px 15px;
      cursor: pointer;
    }
  }


  .logo-container img {
    width: 65px;
  }
  `