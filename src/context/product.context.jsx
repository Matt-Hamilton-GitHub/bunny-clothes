import React, {createContext, useEffect, useState } from 'react'
import PRODUCTS from '../shop-data.json'

export const ProductContext = createContext({
   allProducts: [],
    setAllProducts: () => null,
});

export const ProductProvider = ({children}) =>{


  const [allProducts, setAllProducts] = useState(PRODUCTS);
  const value = {allProducts, setAllProducts}

  return <ProductContext.Provider value=
  {
      value
  }>
      {children}
  </ProductContext.Provider>

}


