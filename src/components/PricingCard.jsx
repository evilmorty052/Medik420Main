import React from 'react'
import { useState } from 'react'
import { features } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowAltCircleLeft, FaFlipboard } from 'react-icons/fa'

const PricingCard = ({plans, available, unavailable}) => {
const [flipped, setflipped] = useState(false)



function Plan(params) {
    return(
        <>
        {plans?.map((item)=>{
            return(
                <>
                {
                    <div key={item.name}>
                        {item.pass ? <Available item={item} /> : <UnAvailable item={item}/> }
                    </div>
                }
                </>
            )
        })}
        </>
    )
    
}

function Available({item}) {
    return(
        <>
    <li class="flex space-x-3">      
        <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <span class="text-base font-normal leading-tight text-white dark:text-gray-400">{item.name}</span>
    </li>
        </>
    )
    
}

function UnAvailable({item}) {
    return(
        <>
            <li class="flex space-x-3 line-through decoration-gray-500">
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500">{item.name}</span>
            </li>
        </>
    )
    
}

if(!flipped){
    return(
        <>
        <AnimatePresence>
            { !flipped &&   
             <motion.div initial={{y:0}}  exit={{rotateY:200}}
    class={`${"p-4 w-full max-w-md bg-gray-800  rounded-2xl border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 font-poppins flip-in-ver-left  "}`  }>
        <h5 class=" uppercase mb-4 text-xl font-medium text-white dark:text-gray-400 text-center">Standard plan</h5>
        {/* <div className='text-center '><span className='text-lg font-medium text-white '>starting from </span></div> */}
        <div class="flex items-center justify-center text-white dark:text-white my-5  w-full">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">1000</span>
            <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
       
        <button onClick={()=>{setflipped(true)}}
        type="button" class="text-blue-400 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-4 inline-flex justify-center w-full text-center">See More</button>
    </motion.div>}
        </AnimatePresence>
    
        </>
    )
}


  
  else {
    return(

        <>
      <AnimatePresence>
      { flipped && <motion.div  exit={{rotateX:200}}
     
     class="p-4 w-full max-w-md bg-gray-800  rounded-2xl border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 font-poppins flip-in-ver-right relative ">
            <h5 class=" uppercase mb-4 text-xl font-medium text-white dark:text-gray-400 text-center">Standard plan</h5>
        {/* <span className='text-lg font-medium text-white'>flipped </span> */}
        <div class="flex items-baseline text-white dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">1000</span>
            <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
       
        <div className='flex '>
      <ul role="list" class="my-7 space-y-5">
         {available?.map((item)=>{
            return(
                <li key={item.name}>
                <Available item={item}/>
                </li>
            )
         })}
         {unavailable?.map((item)=>{
            return(
                <li key={item.name}>
                <UnAvailable item={item}/>
                </li>

            )
         })}
        </ul>
     </div> 
     <div className='flex flex-col space-y-5'>
     {/* <button onClick={()=>{setflipped(false)}}
        type="button" class="text-blue-400 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-4 inline-flex justify-center w-full text-center">Flip
    </button> */}
     <button 
        type="button" class="text-blue-400 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-3xl text-sm px-5 py-4 inline-flex justify-center w-full text-center">Choose plan
        </button>
     </div>
   <span onClick={()=>{setflipped(false)}} className='absolute top-3 right-3 text-white text-xl'><FaArrowAltCircleLeft/></span>
     </motion.div>}
      </AnimatePresence>
      
        </>
    )
  }
   

  
}

export default PricingCard