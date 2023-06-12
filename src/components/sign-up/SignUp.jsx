import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import Button from '../button/button.component'
import FormInput from '../form-input/FormInput'
export const SignUp = () => {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [formField, setFormField] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formField;

    console.log(formField)
    const handleChange = (e) => {
     const {name, value} = e.target;

     setFormField({...formField, [name]: value})
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName})
            console.log(user)
            setFormField(defaultFormFields)
        }catch(err){
            if(err.code === "auth/email-already-in-use"){
                alert("The email is already in use")
               
            }
            console.log(err);
        }

    }

  return (
    <Wrapper className='sign-up-container'>
        <h2>Don't have an account ?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label='Display Name' type="text" required onChange={handleChange} name='displayName' value={displayName}></FormInput>
            <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}></FormInput>
            <FormInput label='Password'  type="password" required onChange={handleChange} name='password' value={password}></FormInput>
            <FormInput label='Confirm Password'  type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}></FormInput>
        </form> 
        <Button buttonType='inverted' type="submit">Sign Up</Button>
    </Wrapper>
  )
}


const Wrapper = styled.div`

display: flex;
flex-direction: column;
width: 380px;
margin: 20px;
text-align: center;



h2{  
margin: 10px 0;
}
`
  