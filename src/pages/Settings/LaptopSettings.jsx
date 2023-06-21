import { useState } from 'react'
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa'
import styles from '../../style'
import {AccountInfo, SecuritySettings, PrivacySettings , InvestmentSettings, NotificationSettings}from './index'
import {Routes, Route, Link, Outlet, useNavigate} from "react-router-dom"


const LaptopSettings = ({user}) => {


    const navigate = useNavigate()

    const MainSettings = () => {

        // function handleclick(option) {
        //     switch (option) {
        //         case 'Investment':
        //             setaccountSettings(false)
        //             setprivacy(false)
        //             setnotifications(false)
        //             setinvestmentSettings(true)
        //             break;
        //         case 'AccountSettings':
        //             setnotifications(false)
        //             setinvestmentSettings(false)
        //             setprivacy(false)
        //             setaccountSettings(true)
        //             break;
               
        //         case 'Privacy':
        //             setaccountSettings(false)
        //             setnotifications(false)
        //             setinvestmentSettings(false)
        //             setprivacy(true)
        //             break;

        //         case 'Notifications':
        //             setaccountSettings(false)
        //             setinvestmentSettings(false)
        //             setprivacy(false)
        //             setnotifications(true)
        //             break;


            
        //         default:
        //             break;
        //     }
        //     //  const options = [accountSettings, privacy , investmentSettings , notifications]
        //     //  console.log(options)

        // }
   
        return(
            <>
               <ul  className='hidden sm:flex flex-col  gap-y-5'>
             
                        <div className='px-2 '>
                       <div className=''>
                        <h3  className={`${styles.UiHeading}`}>Settings</h3>
                       </div>
                        </div>
                        <div className='  sm:flex flex-col col-[20%]  gap-y-5 s  '>
                        <Link to={'account'}  
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
                            </Link>
                            <Link to={'investment'} className='relative cursor-pointer flex items-center min-w-[80%]  '>
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
                            </Link>
                            <Link to={'privacy'}   className='relative cursor-pointer flex items-center min-w-[80%] '>
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
                            </Link>
                            {/* <Link to={'notification'}  className='relative cursor-pointer flex items-center min-w-[80%] '>
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
                            </Link> */}
                        </div>
                        
    
                </ul>
            </>
        )
    }
    const AllSettings = () => {
  
    //  if (accountSettings) {
    //     return(
    //         <>
    //         <AccountInfo/>
    //         </>
    //     )
    //  }
    //  else if (privacy) {
    //     return(
    //         <>
    //         <PrivacySettings func={()=> setaccountSettings(true)}/>
    //         </>
    //     )
    //  }
    //  else if (investmentSettings) {
    //     return(
    //         <>
    //        <InvestmentSettings func={()=> setaccountSettings(true)}/>
    //         </>
    //     )
    //  }
    //  else if (notifications) {
    //     return(
    //         <>
    //        <NotificationSettings func={()=> setaccountSettings(true)}/>
    //         </>
    //     )
    //  }

    
        return(
            <>
            <AccountInfo user={user}/>
            </>
        )
   
    }


    return (
      <>
        <div className="container mx-auto min-h-screen  max-w-7xl ">
          {/* back button */}
          <Link
            to={"/dashboard"}
            className=" flex items-center gap-x-4 py-2 px-2  "
          >
            <a className={styles.SettingsIcon}>
              <FaArrowLeft />
            </a>
            <div>
              <span>Exit settings</span>
            </div>
          </Link>
          <div className="grid grid-cols-3 w-full sm:items-start pt-8">
            <MainSettings />
            <Routes>
              <Route path="/*" element={<AllSettings />} />
              <Route path="account/*" element={<AccountInfo user={user} />} />
              <Route
                path="privacy"
                element={<PrivacySettings user={user} func={() => navigate(-1)} />}
              />
              <Route
                path="investment/*"
                element={
                  <InvestmentSettings
                   user={user}
                    func={() => setinvestmentSettings(false)}
                  />
                }
              />
              <Route
                path="notification"
                element={
                  <NotificationSettings func={() => setnotifications(false)} />
                }
              />
            </Routes>
            <Outlet />
          </div>
        </div>
      </>
    );
}

export default LaptopSettings



