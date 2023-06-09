import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXuazKChNQRY0h-0LXTzE82ZvHqFxwq8w",
    authDomain: "bunny-clothes-db.firebaseapp.com",
    projectId: "bunny-clothes-db",
    storageBucket: "bunny-clothes-db.appspot.com",
    messagingSenderId: "408654951625",
    appId: "1:408654951625:web:87d96af919fd28a01a8918"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  //to use the google authentication
  const provider = new GoogleAuthProvider()
  //how we want it to behave
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
  
  //use the database connection

  //#1 initiate
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    //create database for a user using the authentication from Google
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    //if user data does not exists
    if(!userSnapshot.exists()){
      const  {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await setDoc(userDocRef, {displayName, email, createAt})
      }catch(err){
        console.log(err)
      }
    }

    return userDocRef;
  }

  
