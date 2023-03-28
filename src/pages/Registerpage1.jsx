import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Route, useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'

import { useAuth } from '../contexts/AuthContext'
// import Sidebar from '../partials/Sidebar'
// import Header from '../partials/Header'
import { Router, Routes } from 'react-router-dom'
import  Registerpage from './Registerpage'
import  Registerpage2 from './Registerpage2'
import  Registerpage3 from './Registerpage3'
import Confirminfo from './confirminfo'


// const Countertutorial =()=>{
  
//   const [Counter, setcounter] = useState(1);
//   const CounterAdd =()=>{
//     setcounter(Counter + 1)
//   };
//   return(
//     <div >
//       {<div className='flex gap-3'><Button onClick={()=>{ setcounter(Counter + 1)}}>dd</Button>{Counter}</div>}
//     </div>
//   )
// }



export default function Registerpage1(sanityuser, sanitydata) {
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordref, setPasswordref] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useRef(false)
  const [name, nametag] = useState(null)
  const namer = useRef(null)
  

sanityuser ={name, email, password}

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  

  return (
    <>
     
     
      <div className='bg-white h-full'>
        {/* <button className='text-4xl' onClick={(e)=>{e.preventDefault, history('/register/registerpage2')}}>click me</button> */}
      <Routes>
      <Route element={<Registerpage />}exact path="" />
      <Route element={<Registerpage2 />} path="registerpage2" />
      <Route element={<Registerpage3 />} path="registerpage3" />
      <Route element={<Confirminfo/>} path="confirminfo" />
      </Routes>
      </div>
      
    </>
   
  )
}
