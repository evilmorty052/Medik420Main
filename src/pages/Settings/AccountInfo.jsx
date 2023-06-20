import { useState } from 'react';
import styles from '../../style';
import { FaAngleRight, FaArrowLeft, FaDownload, FaLock, FaPowerOff, FaUser } from 'react-icons/fa';
import {MenuCheckBox, Menuswitch, MenuItem, UpdateScreen, MenuButton }from './index'

const AccountInfo = ({func}) => {

const [account, setaccount] = useState(null)
const [changePassword, setchangePassword] = useState(null)
const [downloadData, setdownloadData] = useState(null)
const [deleteData, setdeleteData] = useState(null)
const email = localStorage.getItem('email')


const AccountSettings = () => {
  const [emailchange, setemailchange] = useState(false)
  const [username, setusername] = useState(false)
  const [phone, setphone] = useState(false)
  const [mailing, setmailing] = useState(false)
  
  const [email, setemail] = useState(null)
  const [usernameValue, setusernameValue] = useState(null)
  const [phoneValue, setphoneValue] = useState(null)
  const [mailingValue, setmailingValue] = useState(null)
  


  if(emailchange){
    return(
      <UpdateScreen cleanupFunction={()=> setemailchange(false)} onChange={(e)=> setemail(e.target.value)} update={email} succestext={'Email updated'} updateText={'Update'} header={"Change Email Address"} placeholder={'evilmorty052@proton.me'} func={()=> setemailchange(false)}/>
    )
  }

  else if(username){
    return(
      <UpdateScreen cleanupFunction={()=> setusername(false)} onChange={(e)=> setusernameValue(e.target.value)} update={usernameValue} succestext={'Username Updated'} updateText={'Update'} header={"Change Username"} placeholder={'evilmorty052'} func={()=> setusername(false)}/>
    )
  }

  else if(phone){
    return(
      <UpdateScreen cleanupFunction={()=> setphone(false)} onChange={(e)=> setphoneValue(e.target.value)} update={phoneValue} succestext={'Phone Number Updated'} updateText={'Update'} header={"Phone Number"} placeholder={'216-788-8899'} func={()=> setphone(false)}/>
    )
  }
  
  else if(mailing){
    return(
      <UpdateScreen cleanupFunction={()=> setmailing(false)} onChange={(e)=> setmailingValue(e.target.value)} update={mailingValue} succestext={'Mailing Address Updated'} updateText={'Update'} header={"Change Mailing Address"} placeholder={'evilmorty052@proton.me'} func={()=> setmailing(false)}/>
    )
  }


  return(
    <>
    <div className='col-span-2 max-w-md'>
       <div>
           <div className='flex items-center gap-x-5 px-2'>
             <a className={styles.SettingsIcon} onClick={()=> setaccount(false)}><FaArrowLeft/></a>
             <div className='flex-col gap-y-4'>
             <h3 className={'text-20px text-blk font-semibold'}> Account Information</h3>
            <p className='text-[14px]'>Manage Your Account Information At Any Time</p>
             </div>
           </div>
           <div>
             <ul className='flex flex-col  gap-y-2 px-2 py-8'>
                 <ListItem func={()=> setusername(true)} itemHeader={'Username'} itemSubtext={'Morty619052'}/>
                 <ListItem func={()=> setemailchange(true)} itemHeader={'Email'} itemSubtext={'evilmorty@mail.com'}/>
                 <ListItem func={()=> setphone(true)} itemHeader={'Phone'} itemSubtext={'Not Added'}/>
                 <ListItem func={()=> setmailing(true)} itemHeader={'Mailing Address'} itemSubtext={'12 White Hart Lane Michigan 8080  usa'}/>
                 {/* <ListItem func={()=> seteverified(true)}itemHeader={'Verified'} itemSubtext={'No'}/> */}
             </ul>
           </div>
       </div>
    </div>
    </>
  )
}
const ChangePassword = () => {
  
  return(
    <>
    <div>
      <PasswordUpdateScreen func={()=> setchangePassword(false)} header={'Change Your Password'}/>
    </div>
    </>
  )
}

const DownloadData = () => {
  const list =[
    {
      itemHeader: 'Trading History',
      itemSubtext: 'Download An Archive Of All Trading Activity ',
      switch:      <MenuCheckBox/>
    },
    {
      itemHeader: 'Investment Portfolio',
      itemSubtext: 'Download An Archive Of Your Investment Portfolio ',
      switch:      <MenuCheckBox/>
    },
    {
      itemHeader: 'One Hive Activity',
      itemSubtext: 'Download A Visualization Of One Hive Activity',
      switch:      <MenuCheckBox/>
    },
  ]


  return(
    <>
    <div>
    <MenuItem func={()=> setdownloadData(false)} buttonText={'Download'} itemHeader={'Download Your Data'} itemSubtext={'Choose Which datasets You are Interested In downloading Now.'} list={list}/>
    </div>
    </>
  )
}

const DeactivateAccount = () => {
  const [deactivate, setdeactivate] = useState(false)
  const list =[
    {
      itemHeader: 'Deactivate Account',
      itemSubtext: 'This Action Can Not Be Reversed',
      switch:      <Menuswitch checked={deactivate} onClick={()=> !deactivate ? setdeactivate(true) : setdeactivate(false) }/>
    },
    
  ]

  const itemHeader = 'Deactivate Your Account'
  const itemSubtext = 'Confirm Termination Of Your Account'
  return(
    <>
   <MenuItem func={()=>  setdeleteData(false)}  list={list} itemHeader={itemHeader} itemSubtext={itemSubtext} buttonText={'Deactivate'}/>
    </>
  )
}




if (account) {
  return(
    <>
    <AccountSettings/>
    </>
  )
}
else if (changePassword) {
  return(
    <>
    <ChangePassword/>
    </>
  )
}

else if (downloadData) {
  return(
    <>
   <DownloadData/>
    </>
  )
}

else if (deleteData) {
  return(
    <>
   <DeactivateAccount/>
    </>
  )
}





  return (
          <>
            <ul className=" col-span-2 px-2   lg:items-start sm:pl-5  flex flex-col gap-y-5 ">
            <div className=' flex items-center gap-x-8  sm:hidden'>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>Your Account</span>
         <p>{email}</p>
         </div>
         </div>
                <div className=' block  sm:hidden  space-y-2'>
               
                <h3
                    className={`text-gray-600 text-[12px] font-semibold font-space hidden lg:block`}
                  >
                    See information about your account, download an archive of
                    your data, or learn about your account investment settings
                  </h3>
                </div>

                <div className=" hidden md:block ">
          <div className=" space-y-4  ">
            <h3 className={styles.UiHeading}>Your Account</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            See information about your account, download an archive of your data, or learn about your account deactivation options
            </h3>
          </div>
        </div>
              <div className="lg:hidden ">
                <div className="  ">
                  <h3 className={`${styles.UiSubHeading} lg:hidden`}>
                    See information about your account, download an archive of
                    your data, or learn about your account investment settings
                  </h3>
                </div>
              </div>
              <li onClick={()=> setaccount(true)} className='relative flex items-center sm:min-w-[80%] pt-4 sm:pt-0 '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaUser />
                  </a>
                  </div>
                    <div className='min-w-[80%] ml-8 pr-4'>
                      <p className={styles.UIMenu}>Account Information</p>
                      <p className="text-[14px]">
                        See your account information like your 
                        email address.
                      </p>
                    </div>
                <div className=' absolute right-2 hidden sm:block'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
              <li onClick={()=> setchangePassword(true)} className='relative sm:min-w-[80%] flex items-center  '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaLock />
                  </a>
                  </div>
                    <div className=' ml-8 pr-8'>
                      <p className={styles.UIMenu}>Change Password</p>
                      <p className="text-[14px]">
                        Change Your Password At Any Time
                      </p>
                    </div>
                <div className=' absolute right-2 hidden sm:block'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
              <li onClick={()=> setdownloadData(true)} className='relative sm:min-w-[80%] flex items-center  '>
                  <div>
                  <a className={styles.SettingsIcon}>
                  <FaDownload/>
                  </a>
                  </div>
                    <div className=' ml-8 pr-8'>
                      <p className={styles.UIMenu}>Download Your Data</p>
                      <p className="text-[14px]">
                        Download A copy Of All your Trading And Investment Activity<br className='hidden sm:block'/> On Medik 420
                      </p>
                    </div>
                <div className=' absolute right-2 hidden sm:block'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
              <li onClick={()=> setdeleteData(true)} className='relative sm:min-w-[80%] flex items-center  '>
                  <div>
                  <a className={styles.SettingsIcon}>
                    <FaPowerOff/>
                  </a>
                  </div>
                    <div className=' ml-8 pr-8'>
                      <p className={styles.UIMenu}>Deactivate Your Account</p>
                      <p className="text-[14px]">
                       Find out How you Can Delete Your Account
                      </p>
                    </div>
                <div className=' absolute right-2 hidden sm:block'>
                      <a>
                        <FaAngleRight />
                      </a>
                </div>
              </li>
             
            
            </ul>
          </>
        );
    
   
  
}

export default AccountInfo



function ListItem({func , itemHeader, itemSubtext}) {
  return (
    <>
      <a
        onClick={func}
        role="tab"
        aria-selected="false"
        data-testid="pivot"
        className="text-sm  tap-transparent pointer-events-auto bg-transparent text-inherit font-inherit list-none  align-stretch border-0 box-border flex flex-col flex-shrink-0 mb-0 ml-0 mr-0 mt-0 min-w-0 relative z-0 pl-4 pr-4 pb-3 pt-3 transition duration-200 bg-none shadow-none outline-none cursor-pointer justify-between min-h-[48px]"
      >
        <div className="flex-shrink-0 flex-grow-1 flex min-w-0 min-h-0 p-0 m-0 relative z-0 align-center justify-between">
          <div className="select-none box-border flex flex-col items-stretch justify-start w-auto h-auto p-0 m-0 relative z-0 bg-transparent cursor-pointer text-inherit border-solid border-0 text-left whitespace-pre-wrap align-middle text-base font-normal leading-5 flex-grow flex-shrink" >
            <div
              dir="ltr"
              class="inline-block leading-normal whitespace-pre-wrap break-words"
            >
              <span class={`${styles.SettingOption} uppercase`}>
                {itemHeader}
              </span>
            </div>
            <div
              dir="ltr"
              className="text-xs font-normal leading-4 text-blue-gray-600"
            >
              <span className={styles.SettingOptionSubtext}>
                {itemSubtext}
              </span>
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`${styles.SettingsIcon} -webkit-text-size-adjust-100 -webkit-tap-highlight-color-rgba-0-0-0-0 pointer-events-auto font-inherit list-none text-align-inherit cursor-pointer -webkit-box-direction-normal inline-block fill-current h-5 max-w-full relative align-text-bottom select-none flex-shrink-0  pl-3 self-center`}          >
            <g>
              <path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"></path>
            </g>
          </svg>
        </div>
      </a>
    </>
  );
}




const  PasswordUpdateScreen = ({func, header, updateText, placeholder,}) => {
  return(
    <>
    <div className=''>
       <div>
       <div className=' flex items-center gap-x-8 px-4 '>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>{header}</span>
         {/* <p>evilmorty052@proton.me</p> */}
         </div>
         </div>
           <div className='py-8 px-8'>
            {/* <label className='ml-2 mb-2'>Current Password</label> */}
              <input placeholder={'Current Password'} type="text" className={styles.Input} /> 
              {/* <div className='py-8 text-center'>
                  <span>{updateText}</span>
              </div> */}
           </div>
           <div className='px-8 flex flex-col gap-y-4'>
           <input placeholder={'New Password'} type="text" className={styles.Input} /> 
           <input placeholder={'Confirm Password'} type="text" className={styles.Input} /> 
           <div className='flex w-full py-8'>
              <button className="btnAlt">
                Update
              </button>
            </div>
           </div>
       </div>
    </div>
    </>
  )
}

