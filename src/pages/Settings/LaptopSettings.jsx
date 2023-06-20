import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import styles from '../../style'
import {AccountInfo, SecuritySettings, PrivacySettings , InvestmentSettings, NotificationSettings}from './index'






const LaptopSettings = () => {
     const [accountSettings, setaccountSettings] = useState(null)
    const [privacy, setprivacy] = useState(null)
    const [investmentSettings, setinvestmentSettings] = useState(null)
    const [notifications, setnotifications] = useState(null) 

    const MainSettings = () => {

        function handleclick(option) {
            switch (option) {
                case 'Investment':
                    setaccountSettings(false)
                    setprivacy(false)
                    setnotifications(false)
                    setinvestmentSettings(true)
                    break;
                case 'AccountSettings':
                    setnotifications(false)
                    setinvestmentSettings(false)
                    setprivacy(false)
                    setaccountSettings(true)
                    break;
               
                case 'Privacy':
                    setaccountSettings(false)
                    setnotifications(false)
                    setinvestmentSettings(false)
                    setprivacy(true)
                    break;

                case 'Notifications':
                    setaccountSettings(false)
                    setinvestmentSettings(false)
                    setprivacy(false)
                    setnotifications(true)
                    break;


            
                default:
                    break;
            }
            //  const options = [accountSettings, privacy , investmentSettings , notifications]
            //  console.log(options)

        }
   
        return(
            <>
               <ul  className='hidden sm:flex flex-col  gap-y-5'>
                        <div className='px-2 '>
                       <div className=''>
                        <h3  className={`${styles.UiHeading}`}>Settings</h3>
                       </div>
                        </div>
                        <div className='  sm:flex flex-col col-[20%]  gap-y-5 s  '>
                        <li onClick={()=> handleclick('AccountSettings')} 
                        className='relative cursor-pointer flex items-center min-w-[80%]  '>
                                <div className='flex justify-start pr-20 '>
                                    <div className='flex p-2 w-full rounded-sm  items-center justify-between'>
                                        <p className='text-[18px] hover:text-blue-600'>Your Account</p>       
                                    </div>
                                   <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                                   <a >
                                                <FaAngleRight/>
                                    </a>
                                   </div>
                                </div>
                            </li>
                            <li onClick={()=> handleclick('Investment')} className='relative cursor-pointer flex items-center min-w-[80%]  '>
                                <div className='flex  '>
                                    <div className='flex p-2 w-full rounded-sm  items-center justify-between'>
                                        <p className='text-[18px] hover:text-blue-600'>Investment Account</p>       
                                    </div>
                                   <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                                   <a >
                                                <FaAngleRight/>
                                    </a>
                                   </div>
                                </div>
                            </li>
                            <li onClick={()=> handleclick('Privacy')}  className='relative cursor-pointer flex items-center min-w-[80%] '>
                                <div className='flex  '>
                                    <div className='flex p-2 w-full rounded-sm  items-center justify-between'>
                                        <p className='text-[18px] hover:text-blue-600'>Privacy Settings</p>       
                                    </div>
                                   <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                                   <a >
                                                <FaAngleRight/>
                                    </a>
                                   </div>
                                </div>
                            </li>
                            <li onClick={()=> handleclick('Notifications')} className='relative cursor-pointer flex items-center min-w-[80%] '>
                                <div className='flex  '>
                                    <div className='flex p-2 w-full rounded-sm  items-center justify-between'>
                                        <p className='text-[18px] hover:text-blue-600'>Notifications</p>       
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
    const AllSettings = () => {
  
     if (accountSettings) {
        return(
            <>
            <AccountInfo/>
            </>
        )
     }
     else if (privacy) {
        return(
            <>
            <PrivacySettings func={()=> setaccountSettings(true)}/>
            </>
        )
     }
     else if (investmentSettings) {
        return(
            <>
           <InvestmentSettings func={()=> setaccountSettings(true)}/>
            </>
        )
     }
     else if (notifications) {
        return(
            <>
           <NotificationSettings func={()=> setaccountSettings(true)}/>
            </>
        )
     }

     else{
        return(
            <>
            <AccountInfo/>
            </>
        )
     }
   
    }


    return(
        <>
        <div className='container mx-auto  max-w-7xl '>
            <div className='grid grid-cols-3 w-full'>
            <MainSettings />
            <AllSettings />
            </div>
        </div>
        </>
    )
}

export default LaptopSettings



