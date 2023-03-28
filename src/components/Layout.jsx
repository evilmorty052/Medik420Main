import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
  <Navbar/>
    <div className='pt-[60px]'>
      <div className=''>
      {children}
      </div> 
    </div>
      </>
  )
}



export default Layout