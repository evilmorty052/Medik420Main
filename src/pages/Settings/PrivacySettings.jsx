import { FaUser,  FaArrowLeft,  FaAngleRight } from "react-icons/fa";
import styles from "../../style";
import { useState } from "react";
import {MenuItem, MenuCheckBox, Menuswitch} from './index'


const PrivacySettings = ({func}) => {

  const list =[
    {
      itemHeader: 'Trading Information',
      itemSubtext: 'If Enabled We will Collect Data About Your Trades On our Platform. We Collect This Information To Train Our A.i And Create Connections With Other Users',
      switch:      <MenuCheckBox/>
        },
    {
      itemHeader: 'Investment Information',
      itemSubtext: 'If Enabled We will Share Data About Your Investments With other Users On our Platform',
      switch:      <MenuCheckBox/>
    },
    
    {
      itemHeader: 'Location Information',
      itemSubtext: 'Allow Medik 420 to Share Your Location With Other Users',
      switch:      <MenuCheckBox/>
    },
    {
      itemHeader: 'Profile',
      itemSubtext: 'Allow Medik 420 To Share Information like Your Profile Image And Username if Disabled You Will Appear as Anonymous To Other Users',
      switch:      <MenuCheckBox/>
    },
    
  ]

  const itemHeader = 'Privacy Settings'
  const itemSubtext = 'Choose What Information You Want Us To Collect Or Share'
  return (
    <>
      {/* <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 slide-in-right">
      <div className=' flex items-center gap-x-8 px-4 sm:hidden'>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>Privacy Settings</span>
         <p>evilmorty052@proton.me</p>
         </div>
         </div>
        
          <div className='pl-4 block  sm:hidden  space-y-2'>
         
          <h3
              className={styles.UiSubHeading}
            >
                           Manage What Information you Share
            </h3>
          </div>
          <div className="md:block hidden ">
          <div className=" space-y-4  px-4">
            <h3 className={styles.UiHeading}>Privacy And Safety</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            Manage What Information you Share
            </h3>
          </div>
        </div>
        <li  className='relative flex items-center sm:min-w-[80%] '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className='min-w-[80%] ml-8 pr-4'>
                <p className={styles.UIMenu}>Trading Information</p>
                <p className="text-[14px]">
                  choose what trading information you share
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
              <div className=' ml-8 pr-4'>
                <p className={styles.UIMenu}>Investment Information</p>
                <p className="text-[14px]">
                  Choose how You share Your Information
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
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Location Information</p>
                <p className="text-[14px]">
                  Choose what data we collect about your location<br className='hidden sm:block'/> On Medik 420
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
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Profile Information</p>
                <p className="text-[14px]">
                 Choose What Information About Your Profile We Share And Collect
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

export default PrivacySettings