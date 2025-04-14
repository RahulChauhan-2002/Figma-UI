import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <div className='flex justify-center items-center'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
