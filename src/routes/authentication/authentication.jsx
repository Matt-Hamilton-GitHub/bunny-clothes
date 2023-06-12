import React from 'react'
import styled from 'styled-components'
import { SignUp } from '../../components/sign-up/SignUp'
import SignInForm from '../../components/sign-in-form/SignIn'

const Authentication = () => {




  return (
   <Wrapper>
      <SignInForm />
      <SignUp /> 
   </Wrapper>
  )
}

export default Authentication

const Wrapper = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;


`