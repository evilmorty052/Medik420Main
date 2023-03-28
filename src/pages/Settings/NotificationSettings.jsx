import { useState } from "react";
import { FaAngleRight, FaArrowLeft, FaUser } from "react-icons/fa";
import styles from "../../style";
import {MenuItem, MenuCheckBox} from './index'

const NotificationSettings = ({func}) => {
  const list =[
    {
      itemHeader: 'Trade Alert',
      itemSubtext: 'If Enabled We will Collect Data About Your Trades On our Platform. We Collect This Information To Train Our A.i And Create Connections With Other Users',
      switch:      <MenuCheckBox/>
        },
    {
      itemHeader: 'Deposit Alert',
      itemSubtext: 'Get Alerts On Every Deposits',
      switch:      <MenuCheckBox/>
    },
    {
      itemHeader: 'Withdrawal Alert',
      itemSubtext: 'Get Notified On Every Withdrawal',
      switch:      <MenuCheckBox/>
    },
    
    {
      itemHeader: 'Private Messages',
      itemSubtext: 'Receive Alerts For Private Messages',
      switch:      <MenuCheckBox/>
    },
    {
      itemHeader: 'Crew Requests',
      itemSubtext: 'Get Notified Anytime A user Sends You A crew Request',
      switch:      <MenuCheckBox/>
    },
    
  ]

  const itemHeader = 'Notification Settings'
  const itemSubtext = 'Customize Or Disable Your Notifications'

  
  return (
    <>
      {/* <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 slide-in-right">
      <div className=' flex items-center gap-x-8 px-4 sm:hidden'>
        <a className={styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a> 
         <div>
         <span>Notification Settings</span>
         <p>evilmorty052@proton.me</p>
         </div>
         </div>
          <div className='pl-4 block  sm:hidden  space-y-2'>
         
          <h3
              className={styles.UiSubHeading}
            >
                           Manage Your Notification Settings
            </h3>
          </div>
          <div className="md:block hidden ">
          <div className=" space-y-4  px-4">
            <h3 className={styles.UiHeading}>Notifications</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            Manage Your Notification Settings
            </h3>
          </div>
        </div>
        <li  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-4 pr-8'>
                <p className={styles.UIMenu}>Agent Notifications</p>
                <p className="text-[14px]">
                Set Up Alerts For An Agent
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-4 pr-4'>
                <p className={styles.UIMenu}>Deposit Alert</p>
                <p className="text-[14px]">
                 Control deposit Alert Settings
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li  className='relative flex items-center sm:min-w-[80%] '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className='min-w-[80%] ml-4 pr-4'>
                <p className={styles.UIMenu}>Trade Alert</p>
                <p className="text-[14px]">
                  Get Notified Everytime Smart Portfolio Does A Trade
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        
       
       
       
      
      </ul> */}

<MenuItem buttonText={'Update'} func={func} list={list} itemHeader={itemHeader} itemSubtext={itemSubtext}/>
    </>
  );
}

export default NotificationSettings