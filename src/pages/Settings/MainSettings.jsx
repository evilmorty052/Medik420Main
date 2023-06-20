import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import styles from '../../style'
import AccountInfo from './AccountInfo'



const MainSettings = () => {
   

    return(
        <>
           <ul  className='hidden sm:flex flex-col  gap-y-5'>
                    <div className='px-2 '>
                   <div className=''>
                    <h3  className={`${styles.UiHeading}`}>Settings</h3>
                   </div>
                    </div>
                    <div className='  sm:flex flex-col col-[20%]  gap-y-5 s  '>
                    <li className='relative cursor-pointer flex items-center min-w-[80%]  '>
                            <div className='flex justify-start pr-20 '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className='text-[18px]'>Your Account</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                                            <FaAngleRight/>
                                </a>
                               </div>
                            </div>
                        </li>
                        <li className='relative cursor-pointer flex items-center min-w-[80%]  '>
                            <div className='flex  '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className='text-[18px]'>Investment Account</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                                            <FaAngleRight/>
                                </a>
                               </div>
                            </div>
                        </li>
                        <li className='relative cursor-pointer flex items-center min-w-[80%] '>
                            <div className='flex  '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className='text-[18px]'>Privacy Settings</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                                            <FaAngleRight/>
                                </a>
                               </div>
                            </div>
                        </li>
                        <li className='relative cursor-pointer flex items-center min-w-[80%] '>
                            <div className='flex  '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className='text-[18px]'>Notifications</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                                            <FaAngleRight/>
                                </a>
                               </div>
                            </div>
                        </li>
                    </div>
                    

            </ul>
        </>
    )
}

export default MainSettings



