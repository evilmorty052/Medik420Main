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
  Select,
  SelectField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField
  
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Longform from '../components/Longform'





export default function Registerpage(sanityuser) {
  const history = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

const fname = localStorage.getItem('firstname')
const lname = localStorage.getItem('lastname')
const emailID = localStorage.getItem('email')




// sanityuser ={firstName, lastName}

const doc = { 
  _type: "users",
  lastname:`${fname}`,
  password :`0000`,
  email :`${emailID}`,
  firstname :`${lname}`,
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
  history('/setpin')

}


return(
 <>

 <Longform/>
 </>


)
}
