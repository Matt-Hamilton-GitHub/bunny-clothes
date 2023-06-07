import React from 'react'
import Categories from '../../components/category-item/categories.component'
import {Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
        <Outlet />
        <Categories />
    </div>
  )
}

export default Home
