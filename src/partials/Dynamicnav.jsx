import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dynamicnav = () => {
const history = useNavigate()
  return (
    <div className='absolute w-full top-0 mb-10 bg-black'>
      <nav className='p-2 flex justify-end'>
         <span onClick={()=>{history(-1)}} className='text-white text-xl uppercase'>back</span>
      </nav>
    </div>
  )
}

export default Dynamicnav