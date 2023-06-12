import React from 'react'
import {useState } from 'react'
import styled from 'styled-components'
import {signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, loginAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
// import { getRedirectResult } from 'firebase/auth'
import Button from '../button/button.component'
import FormInput from '../form-input/FormInput'

const SignIn = () => {

    const defaultFormFields = {
        email: '',
        password: '',
    }

    const [formField, setFormField] = useState(defaultFormFields);
    const {email, password} = formField;

    console.log(formField)
    const handleChange = (e) => {
     const {name, value} = e.target;

     setFormField({...formField, [name]: value})
    }
    

    // useEffect(()=>{
    //     const getData = async () => {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //           const userDocRef = await createUserDocumentFromAuth(response.user)
    //         }
    //         console.log(response)
    //     }
    //     getData();
     
    // }, [])


const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
}


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const {user} = await loginAuthUserWithEmailAndPassword(email, password);
            console.log(user)
            setFormField(defaultFormFields)
        }catch(err){
            if(err.code === "auth/user-not-found"){
                alert("The user is not found")
               
            } else if(err.code === "auth/wrong-password"){
                alert("Incorrect Password")
            }
            console.log(err);
        }

    }

  return (
    <Wrapper className='sign-up-container'>
        <h2>Already have an account ?</h2>
        <span>Sign-In with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}></FormInput>
            <FormInput label='Password'  type="password" required onChange={handleChange} name='password' value={password}></FormInput>
            <div className='buttons-container'>
                <Button buttonType='inverted' type="submit">Sign In</Button>
                 {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button> 
            </div>
        </form> 
    </Wrapper>
  )
}

export default SignIn


const Wrapper = styled.div`

display:flex;
flex-direction: column;
width: 380px;
margin: 20px;
text-align: center;

h2{  
margin: 10px 0;
}

.buttons-container{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
}
`
  