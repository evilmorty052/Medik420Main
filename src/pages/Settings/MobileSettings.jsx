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
    return (
      <>
        <div className=" sm:hidden flex-col w-full ">
          <div className="px-2 mb-8 flex justify-center ">
            <div className="">
              <h3 className={`${styles.UiHeading} text-center`}>Settings</h3>
            </div>
          </div>
          <div className="flex  gap-y-8 sm:flex flex-col  pl-2 pr-6  ">

            {/* {menu items} */}

            <div
              onClick={() => {
                setaccountSettings(true);
              }}
              className=" cursor-pointer "
            >
              <div className="flex items-center justify-between  w-full ">
                <div className="flex flex-1 p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between">
                  <p className={styles.UIMenu}>Your Account</p>
                </div>
                <div className="">
                  <a>
                    <FaAngleRight style={{ fontSize: "20px" }} />
                  </a>
                </div>
              </div>
            </div>
        
            <div
              onClick={() => {
                setinvestmentSettings(true);
              }}
              className=" cursor-pointer "
            >
              <div className="flex items-center justify-between  w-full ">
                <div className="flex flex-1 p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between">
                  <p className={styles.UIMenu}>Investment Account</p>
                </div>
                <div className="">
                  <a>
                    <FaAngleRight style={{ fontSize: "20px" }} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* privacy settings */}

            <div
              onClick={() => {
                setprivacy(true);
              }}
              className=" cursor-pointer "
            >
              <div className="flex items-center justify-between  w-full ">
                <div className="flex flex-1 p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between">
                  <p className={styles.UIMenu}>Privacy Settings</p>
                </div>
                <div className="">
                  <a>
                    <FaAngleRight style={{ fontSize: "20px" }} />
                  </a>
                </div>
              </div>
            </div>

            {/* notification settings */}

            <div
              onClick={() => {
                setnotifications(true);
              }}
              className=" cursor-pointer "
            >
              <div className="flex items-center justify-between  w-full ">
                <div className="flex flex-1 p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between">
                  <p className={styles.UIMenu}>Notifications</p>
                </div>
                <div className="">
                  <a>
                    <FaAngleRight style={{ fontSize: "20px" }} />
                  </a>
                </div>
              </div>
            </div>


            {/*
                      
                        <li onClick={()=> setnotifications(true) } className='relative cursor-pointer flex items-center min-w-[80%] '>
                            <div className='flex  '>
                                <div className='flex flex-1 p-2 w-full rounded-sm hover:bg-gray-300 items-center justify-between'>
                                    <p className={styles.UIMenu}>Notifications</p>       
                                </div>
                               <div className='absolute right-2 sm:right-10 md:right-20 flex items-center  h-full'>
                               <a >
                               <FaAngleRight style={{fontSize: '20px'}}/>
                                </a>
                               </div>
                            </div>
                        </li> */}
          </div>
        </div>
      </>
    );
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



