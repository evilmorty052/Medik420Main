import {
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  Select,
  SelectField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField
  
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { useAuth } from '../contexts/AuthContext'
import { Router, Routes } from 'react-router-dom'

import { FaAnchor } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import ListBox from '../components/listbox'
import RadioGroups from '../components/radiogroup'
import { client } from '../../lib/client'
import { Button } from 'antd'
import Dynamicnav from '../partials/Dynamicnav'




export default function Registerpage(firstname, lastname, email) {
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  // const [email, setEmail] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [firstName, setFirstName] = useState('')
  const toast = useToast()
  
const fname = localStorage.getItem('firstname')
const lname = localStorage.getItem('lastname')
const emailID = localStorage.getItem('email')




// sanityuser ={firstName, lastName}

const doc = { 
  _type: "users",
  lastname:`${lname}`,
  password :`0000`,
  email :`${emailID}`,
  firstname :`${fname}`,
  service :`Investment`,
  region :`Europe`,
  phone :`0000000000`,
  demo : true,
  pin :`0000`,
  investment: 0,
  earnings: 0,
  plan:"Inactive"

}

const handlesubmit = async () => {

  client.create(doc)
  

}

  
const plans = [
  {
    name: 'INVESTMENT'
  },
  {
    name: 'DIGITAL FARMING',
  },
  {
    name: 'SMALL BUSINESS ASSISTANCE'
  },
]

function func(selected) {
  console.log(selected)
  switch (selected.name) {
     case 'INVESTMENT':
    history('/register') 
         break;
     case 'DIGITAL FARMING':
      history('/digital')
         break;
     case 'SMALL BUSINESS ASSISTANCE':
      history('/smallbiz')
         break;
     default:
         break;
  }
     
   }
   
  return (
    <div className=" bg-plat min-h-screen flex flex-col slide-in-elliptic-top-fwd   ">
    <Dynamicnav/>

<div  className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div  className="mx-auto max-w-lg text-center mt-4">
    <h1 className="text-2xl font-bold sm:text-3xl text-blk uppercase">Pick A Service</h1>

    <p className="mt-4 text-gray-500 uppercase font-poppins">
      We use this info to tailor your onboarding experience
    </p>
  </div>
  <div className='my-4'><RadioGroups options={plans} func={func} show/></div>
  {/* <div className=" ">
      <div className='mt-10 flex items-center justify-between'>
      <button onClick={()=>{history('/register')}} className='text-base bg-green-300 px-4 py-2 rounded-md w-20 h-10 text-white uppercase shadow-2xl font-poppins font-medium'>Back</button>
     <button onClick={()=>{handlesubmit()&history('/register/registerpage3')}}  className='text-base bg-green-300 px-4 py-2 rounded-md w-20 h-10 text-white uppercase shadow-2xl font-poppins font-medium'>Next</button>
      </div>
    </div> */}
    {/* <div className='my-4'>
      <Button style={{ background:"#86efac", borderColor: "white" }} block type='primary' shape='round' size='large'>Confirm</Button>
    </div> */}
</div>

      
    </div>
  )
}
