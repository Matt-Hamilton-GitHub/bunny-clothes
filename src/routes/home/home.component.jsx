import React from 'react'
import Categories from '../../components/directory-item/directory.component'
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
