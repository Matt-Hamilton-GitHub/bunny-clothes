import React, {createContext, useEffect, useState } from 'react'
import SHOP_DATA from '../shop-data.js'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';


export const CategoriesContext = createContext({
    allCategories: {},
    
});

export const CategoriesProvider = ({children}) =>{
  const [allCategories, setAllCategories] = useState({});
  const value = {allCategories}

   useEffect(()=>{
// set new values
//      addCollectionAndDocuments('categories',SHOP_DATA )
    const getCategories = async() => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        console.log(categoryMap)
        setAllCategories(categoryMap)
    }

    getCategories();

   },[])

  return <CategoriesContext.Provider value=
  {
      value
  }>
      {children}
  </CategoriesContext.Provider>

}


