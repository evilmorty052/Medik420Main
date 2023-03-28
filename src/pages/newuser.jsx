import {useEffect} from 'react'
import MojoAuth from "mojoauth-web-sdk"
import { Button, Spin } from 'antd'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { client } from '../../lib/client'
// import Newuser from './newuser'
import { useState } from 'react'
import { useQuery } from 'react-query'



const Newuser = () => { 
const history = useNavigate()

useEffect(() => {
  
  setTimeout(() => {
    history('/register')
  }, 10000);

  
}, [])


  
  return (
  <>
  {
        
<div className='absolute inset-0 min-h-screen bg-plat flex flex-col items-center justify-center'>
      <div className=''><Spin size='large'/></div>  
      <h1 className='text-4xl uppercase font-poppins'>Setting Up your Account</h1>
  </div>
    



  }

  {/* {mounteduser ? mounteduser[0].firstname : 'loading'} */}
   
  </>
   
  )
}

  export const mojoauth = new MojoAuth("ddfa0887-b4ce-43dc-9ec8-5c4c53522387",{
    source:[{type:'email', feature:'otp'}],
});
export default Newuser