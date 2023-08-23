import React, { useContext, Fragment} from 'react'
import {Route, Routes} from 'react-router-dom'
import './shop.styles.scss'
import CategoriesPreview from '../../components/categories-preview/Categories-preview'
import Category from '..//..//routes/category/category.component'
import { CategoriesProvider } from '../../context/categories.context'

const Shop = () => {

  return (
    <CategoriesProvider>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
    </CategoriesProvider>
  )
}

export default Shop


