import React, {createContext, useEffect, useReducer } from 'react'
import { onAuthStateChangeListener , signOutUser, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';


const INITIAL_STATE = {
    currentUser: null,
}

//actual value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    const {type, payload}  = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, currentUser: payload
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}



//provider
export const UserProvider = ({children}) =>{


    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)

 
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }
    

    const value = {currentUser, setCurrentUser}


    useEffect(() => {
       const unsubscribe = onAuthStateChangeListener((user) => {
    
       setCurrentUser(user)
       if(user) {
            createUserDocumentFromAuth(user)
       }})
       return unsubscribe
    }, [])

    return <UserContext.Provider value=
    {
        value
    }>
        {children}
    </UserContext.Provider>

}