import {initializeApp} from 'firebase/app'
import {getAuth, signOut, 
  signInWithRedirect, 
  signInWithPopup,
   GoogleAuthProvider, 
   createUserWithEmailAndPassword, 
   signInWithEmailAndPassword,
   onAuthStateChanged,
  } from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

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
  const googleProvider = new GoogleAuthProvider()
  //how we want it to behave
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
  


  //#1 initiate

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    //create database for a user using the authentication from Google
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    //if user data does not exists - create a new collection
    if(!userSnapshot.exists()){
      const  {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await setDoc(userDocRef, {displayName, email, createAt, ...additionalInformation})
      }catch(err){
        console.log(err)
      }
    }

    return userDocRef;
  }

  export const loginAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password){
      return;}
      else{
       return await signInWithEmailAndPassword(auth, email, password);
      }
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password){
       return;}
       else{
        return await createUserWithEmailAndPassword(auth, email, password);
       }
  }

  export const signOutUser = async () => {
    await signOut(auth);
  }

  export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)

  
  
                                //------FirestoreDB------

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
 //use writeBatch to perform a successful operation/transaction
  const batch = writeBatch(db);


  objectToAdd.forEach((object) => {
    //get the doc reference (ref, title/key of the object)
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //set (location, value) location with value 
    batch.set(docRef,  object)
  })

  await batch.commit()
  console.log('done batching')

}

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    //generate a query of a the collection
    const q = query(collectionRef)
    // console.log(q)
    //
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot)
    
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      // console.log(docSnapshot.data().title)
      acc[title.toLowerCase()] = items;
      return acc
     
    }, {})

    return categoryMap;
  }
