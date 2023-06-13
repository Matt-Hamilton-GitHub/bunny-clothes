import React, {createContext, useEffect, useState } from 'react'
import { onAuthStateChangeListener , signOutUser, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';


//actual value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});


//provider
export const UserProvider = ({children}) =>{


    const [currentUser, setCurrentUser] = useState(null);
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