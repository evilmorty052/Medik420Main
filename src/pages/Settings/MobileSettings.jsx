import { useState } from 'react'
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa'
import styles from '../../style'
import {AccountInfo, SecuritySettings, PrivacySettings , InvestmentSettings, NotificationSettings}from './index'





const MobileSettings = () => {
    const [accountSettings, setaccountSettings] = useState(null)
    const [privacy, setprivacy] = useState(null)
    const [investmentSettings, setinvestmentSettings] = useState(null)
    const [notifications, setnotifications] = useState(null)
    
    

const AllSettings = () => {
    return(
        <>
         
        <ul  className='flex sm:hidden flex-col font-space slide-in-left '>
                    <div className='px-2 mb-8 '>
                   <div className=''>
                    <h3  className={`${styles.UiHeading}`}>Settings</h3>
                   </div>
                    </div>
                    <div className='flex pr-8 gap-y-5 sm:flex flex-col col-[20%] '>
                    <li onClick={()=> {
                        setaccountSettings(true)
                    } } className='relative cursor-pointer flex items-center min-w-[80%]  '>
                            <div className='flex justify-start pr-20 '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className={styles.UIMenu}>Your Account</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                                            <FaAngleRight style={{fontSize: '20px'}}/>
                                </a>
                               </div>
                            </div>
                        </li>
                        <li onClick={()=> setinvestmentSettings(true) } className='relative cursor-pointer flex items-center min-w-[80%]  '>
                            <div className='flex  '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className={styles.UIMenu}>Investment Account</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                               <FaAngleRight style={{fontSize: '20px'}}/>
                                </a>
                               </div>
                            </div>
                        </li>
                        <li onClick={()=> setprivacy(true) } className='relative cursor-pointer flex items-center min-w-[80%] '>
                            <div className='flex  '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className={styles.UIMenu}>Privacy Settings</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                               <FaAngleRight style={{fontSize: '20px'}}/>
                                </a>
                               </div>
                            </div>
                        </li>
                        <li onClick={()=> setnotifications(true) } className='relative cursor-pointer flex items-center min-w-[80%] '>
                            <div className='flex  '>
                                <div className='flex p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className={styles.UIMenu}>Notifications</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                               <FaAngleRight style={{fontSize: '20px'}}/>
                                </a>
                               </div>
                            </div>
                        </li>
                    </div>
                    

            </ul>
        </>
    )
}



 if (accountSettings) {
    return(
        <>
        <AccountInfo func={()=> setaccountSettings(false)}/>
        </>
    )
 }
 else if (privacy) {
    return(
        <>
        <PrivacySettings func={()=> setprivacy(false)}/>
        </>
    )
 }
 else if (investmentSettings) {
    return(
        <>
       <InvestmentSettings func={()=> setinvestmentSettings(false)}/>
        </>
    )
 }
 else if (notifications) {
    return(
        <>
       <NotificationSettings func={()=> setnotifications(false)}/>
        </>
    )
 }






    return(
        <>
           <AllSettings/>
        </>
    )
}

export default MobileSettings



