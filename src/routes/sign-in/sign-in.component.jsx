import React from 'react'
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
import styled from 'styled-components'
import { createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)

}

  return (
   <Wrapper>
    <h1>Sign In Page</h1>
    <button onClick={logGoogleUser}>Sign In With Google</button> 
   </Wrapper>
  )
}

export default SignIn

const Wrapper = styled.div`

`