import React from 'react'
import { Navbar } from '../../components'
import styles from '../../style'
import Hero1 from './heroes/hero1'
import {Hero} from '../SmallBiz'
import Feature1 from './features/feature1'
import Feature2 from './features/feature2'
import Feature3 from './features/feature3'
import {CTA} from '../../components'
import Pricing from './pricing/pricing'
import {Footer} from '../../components'
import CTA1 from './cta/cta1'
import Example from '../../components/disclosure/disclosure2'
import PricingCard from '../../components/PricingCard'
import Plan1 from '../../components/plans/plan1' 
import { FaChevronRight } from 'react-icons/fa'
import investmentphone from '../../assets/phone.png'
import Banner from '../../partials/Banner'
import AnimatedSidebar from '../../components/AnimatedSidebar'

const investing = () => {
  return (
    <>
    <Navbar /> 
    <AnimatedSidebar/>  
    <div className='bg-plat h-[100vh]'>
     <MainHero/>
    </div>
    </>
  )
}

function MainHero(params) {
  return(
   <>
   
   <body class="bg-gray-900 md:pt-20 pb-10 ">
     
     <div class="border-b  ">
         <div class="container  m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
             <div class="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
                 <div class="col-span-1">
                     <div class="relative w-full">
                         <img src={investmentphone} alt="shoes" loading="lazy" width="100%" height="640"/>
                      
                     </div>
                 </div>
 
                 <div class="relative col-span-1">
                     <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white text-center">Automated<br
                             ></br><span className='text-cyan-800'>Investing.</span></h1>
                     <div class="mt-8 lg:mt-16 space-y-8">
                         <p class="text-gray-300 text-center ">Smart Portfolio is a robo-advisor that gives you a diversified portfolio based on your risk profile. It’s the easy way to invest.</p>
                         {/* <div class="flex space-x-4 mt-6">
                             <button type="button" title="Start buying"
                                 class="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max">
                                 <span class="block text-white text-sm">
                                     Shop now
                                 </span>
                             </button>
                             <button type="button" title="Start buying"
                                 class="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:border-gray-700 sm:w-max">
                                 <span class="block text-gray-800 text-sm dark:text-white">
                                     View store
                                 </span>
                             </button>
                         </div> */}
                     </div>'
                 </div>
             </div>
         </div>
     </div>
 </body>
                                     
   </>
  )
 }
export default investing