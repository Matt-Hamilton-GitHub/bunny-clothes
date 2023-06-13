import React, { useContext} from 'react'
import styled from 'styled-components'
import {ProductContext}  from '../../context/product.context'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.styles.scss'

 const Shop = () => {

 const {allProducts}  = useContext(ProductContext)

  return (
    <div className='products-container'>
        {allProducts.map((item, id) => {
            return(
            <ProductCard product={item}/>
            )
        })}
    </div>
  )
}


export default Shop


