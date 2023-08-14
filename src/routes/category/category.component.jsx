import React, {useContext, useState, useEffect, Fragment} from 'react'
import './category.styles.scss'
import { useParams } from 'react-router-dom';
import {CategoriesContext} from './/..//../context//categories.context'
import ProductCard from '../../components/product-card/ProductCard';



function Category() {
    const {category} = useParams()
   
    const {allCategories} = useContext(CategoriesContext)
    const [products, setProducts] = useState(allCategories[category])

    useEffect(() => {
        setProducts(allCategories[category])
    }, [category, allCategories])

  return (
    <Fragment>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products && products.map((product =><ProductCard key={product.id} product={product} />))}
    </div>
    </Fragment>
  )
}

export default Category;