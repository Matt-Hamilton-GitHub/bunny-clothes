import React, { useContext, Fragment} from 'react'
import styled from 'styled-components'
import {CategoriesContext}  from '../../context/categories.context'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.styles.scss'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

 const Shop = () => {

  const {allCategories} = useContext(CategoriesContext)


  return (
  <div className="shop-container">
    {
      Object.keys(allCategories).map(title => {
        const products = allCategories[title]
        return <CategoryPreview key={title} title={title} products={products} />
       
      })
    }
  </div>
  )
}


export default Shop


