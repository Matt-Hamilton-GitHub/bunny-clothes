import React, {Fragment,useContext} from 'react'
import {CategoriesContext}  from '../../context/categories.context'
import CategoryPreview from '../category-preview/CategoryPreview'


const CategoriesPreview = () => {
  const {allCategories} = useContext(CategoriesContext)

  return (
    <Fragment>
        {Object.keys(allCategories).map((title) => {
          const products = allCategories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })}
    </Fragment>
  )
}

export default CategoriesPreview