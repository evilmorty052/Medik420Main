import {
 
  useToast,

  
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'

import Longform from '../components/Longform2'





export default function Registerpage(fname, lname) {
  const history = useNavigate()
  const { signInWithGoogle, register } = useAuth()
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [passwordref, setPasswordref] = useState('')
  const [region, setRegion] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const mounted = useRef(false)
 const [wave, setwave] = useState(false)
  const namer = useRef(null)



// fname ={firstName}
// lname ={lastName}


const handlesubmit = async () => {
  localStorage.setItem('firstname', firstName)
  localStorage.setItem('lastname',lastName)
  localStorage.setItem('email', email)
  history('/register/registerpage2')
 
}



  function Waver (params) {
    return(
      <>
      <span className='text-2xl sm:text-4xl sidebar'>👋</span>
      </>
    )
    
  }
  
   
  return (
//     <div className="absolute inset-0 bg-plat min-h-screen flex flex-col slide-in-elliptic-top-fwd py-5  ">
    

// <div  className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//   <div  className="mx-auto max-w-lg text-center">
//     <div className="text-2xl font-bold sm:text-3xl text-blk uppercase flex items-center justify-center ">
//       <>
//       <span>{`HI ${firstName} `}</span>
//       <AnimatePresence><motion.span className='ml-2' initial={{ scale:0}}  whileInView={{scale:1}} transition={{duration: 2}} exit={{scale:0}} >{wave && <Waver/>}</motion.span></AnimatePresence>
//       </>
     
//     </div>

//     <p className="mt-4 text-gray-500 uppercase font-poppins">
//       we will never share your info with any 3rd party provider or store your data on an external server
//     </p>
//   </div>

//   <form onSubmit={(e)=>{ e.preventDefault()
//     handlesubmit()}}  className="mx-auto mt-8 mb-0 max-w-md space-y-4">
//     <div>


//       <div className="relative">
//         <input
//           type="text"
//            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
//           placeholder="FIRST NAME"
//           value={firstName}
//           onChange={e => {
//              setwave(false)
//             setFirstName(e.target.value)}}
//         />

//       </div>
//     </div>

//     <div>
    
//       <div  className="relative">
//         <input
//           type="text"
//           class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
//           placeholder={'LAST NAME'}
//           value={lastName}
//           onChange={e => {
//           setwave(true)
//           setLastName(e.target.value)}}
//         />

//       </div>
//     </div>
//     <div>

//       <div  className="relative">
//         <input
//           type="email"
//           class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
//           placeholder={'EMAIL'}
//           value={email}
//           onChange={e => {
//           setEmail(e.target.value)}}
//         />
//   <span class="absolute inset-y-0 right-4 inline-flex items-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             class="h-5 w-5 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//             />
//           </svg>
//         </span>
//       </div>
//     </div>

//     <div className=" ">
//       <div className='mt-10 flex items-center justify-between'>
//       <button onClick={()=>{history(-1)}} className='text-base bg-green-300 px-4 py-2 rounded-md w-20 h-10 text-white uppercase shadow-2xl font-poppins font-medium'>Back</button>
//      <button type='submit'   className='text-base bg-green-300 px-4 py-2 rounded-md w-20 h-10 text-white uppercase shadow-2xl font-poppins font-medium'>Next</button>
//       </div>
//     </div>
//   </form>
// </div>

      
//     </div>
<Longform/>
  )
}
