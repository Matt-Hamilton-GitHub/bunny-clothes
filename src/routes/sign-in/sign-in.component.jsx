import React from 'react'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import styled from 'styled-components'
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from '../../utils/firebase/firebase.utils'

import Button from '../../components/button/button.component'
import { SignUp } from '../../components/sign-up/SignUp'

const SignIn = () => {


    useEffect(()=>{
        const getData = async () => {
            const response = await getRedirectResult(auth);
            if(response){
              const userDocRef = await createUserDocumentFromAuth(response.user)
            }
            console.log(response)
        }
        getData();
     
    }, [])

const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user)
}



  return (
   <Wrapper>
    <h1>Sign In Page</h1>
    <Button buttonType='google' onClick={logGoogleUser}>Sign In With Google</Button> 
    {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
    <SignUp /> 
   </Wrapper>
  )
}

export default SignIn

const Wrapper = styled.div`

`