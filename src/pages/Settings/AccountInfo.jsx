import { useState } from 'react';
import styles from '../../style';
import { FaAngleRight, FaArrowLeft, FaDownload, FaLock, FaPowerOff, FaUser } from 'react-icons/fa';
import {MenuCheckBox, Menuswitch, MenuItem, UpdateScreen, MenuButton }from './index'
import {Link,Route, Routes, useParams, useNavigate} from "react-router-dom"
import {updateUserName, updateEmail, updatePhone, updatePassword} from "./Features"
import {SuccessMessage, ErrorMessage} from "./partials/Message"
import {Loader} from "../../components"

const AccountInfo = ({func, user}) => {



const navigate = useNavigate()


const AccountSettings = () => {

  
  
  
  
  const UsernameUpdatePage = () =>{
    const [usernameValue, setusernameValue] = useState("")
    return(
      <UpdateScreen handleUpdate={() =>  updateUserName(usernameValue, user?._id)} cleanupFunction={()=> setusername(false)} onChange={(e)=> setusernameValue(e.target.value)} update={usernameValue} succestext={'Username Updated'} updateText={'Update'} header={"Change Username"} placeholder={user?.username} func={()=> navigate(-1)}/>
    )
  }

  const EmailUpdatePage = () =>{
    const [email, setemail] = useState("")
    return(
      <UpdateScreen handleUpdate={() =>  updateEmail(email, user?._id)} cleanupFunction={()=> setemailchange(false)} onChange={(e)=> setemail(e.target.value)} update={email} succestext={'Email updated'} updateText={'Update'} header={"Change Email Address"} placeholder={user?.email} func={()=> navigate(-1)}/>
    )
  }

  const PhoneUpdatePage = () =>{
    const [phoneValue, setphoneValue] = useState()
    
    return(
      <UpdateScreen handleUpdate={() =>  updatePhone(Number(phoneValue), user?._id)} cleanupFunction={()=> setphone(false)} onChange={(e)=> setphoneValue(e.target.value)} update={phoneValue} succestext={'Phone Number Updated'} updateText={'Update'} header={"Phone Number"} placeholder={'216-788-8899'} func={()=> navigate(-1)}/>
    )
  }

  const MailingAddressUpdatePage = () =>{
    const [mailingValue, setmailingValue] = useState("")
    return(
      <UpdateScreen cleanupFunction={()=> setmailing(false)} onChange={(e)=> setmailingValue(e.target.value)} update={mailingValue} succestext={'Mailing Address Updated'} updateText={'Update'} header={"Change Mailing Address"} placeholder={'evilmorty052@proton.me'} func={()=> navigate(-1)}  /> 
    )
  }

  // if(emailchange){
  //   return(
  //     <UpdateScreen cleanupFunction={()=> setemailchange(false)} onChange={(e)=> setemail(e.target.value)} update={email} succestext={'Email updated'} updateText={'Update'} header={"Change Email Address"} placeholder={user?.email} func={()=> setemailchange(false)}/>
  //   )
  // }

  // else if(username){
  //   return(
  //     <UpdateScreen cleanupFunction={()=> setusername(false)} onChange={(e)=> setusernameValue(e.target.value)} update={usernameValue} succestext={'Username Updated'} updateText={'Update'} header={"Change Username"} placeholder={user?.username} func={()=> setusername(false)}/>
  //   )
  // }

  // else if(phone){
  //   return(
  //     <UpdateScreen cleanupFunction={()=> setphone(false)} onChange={(e)=> setphoneValue(e.target.value)} update={phoneValue} succestext={'Phone Number Updated'} updateText={'Update'} header={"Phone Number"} placeholder={'216-788-8899'} func={()=> setphone(false)}/>
  //   )
  // }
  
  // else if(mailing){
  //   return(
  //     <UpdateScreen cleanupFunction={()=> setmailing(false)} onChange={(e)=> setmailingValue(e.target.value)} update={mailingValue} succestext={'Mailing Address Updated'} updateText={'Update'} header={"Change Mailing Address"} placeholder={'evilmorty052@proton.me'} func={()=> setmailing(false)}/>
  //   )
  // }

  const AccountSettingsHome = () => {

  if(!user){
    return(<Loader/>)
  }

    return(
      <div className='col-span-2 max-w-md'>
       <div>
           <div className='flex items-center gap-x-5 px-2'>
             <a className={styles.SettingsIcon} onClick={()=> navigate(-1)}><FaArrowLeft/></a>
             <div className='flex-col gap-y-4'>
             <h3 className={'text-20px text-blk font-semibold'}> Account Information</h3>
            <p className='text-[14px]'>Manage Your Account Information At Any Time</p>
             </div>
           </div>
           <div>
             <ul className='flex flex-col  gap-y-2 px-2 py-8'>
                 <ListItem func={()=> navigate("accountinformation/updateusername")} itemHeader={'Username'} itemSubtext={user?.username}/>
                 <ListItem func={()=> navigate("accountinformation/updateemail")} itemHeader={'Email'} itemSubtext={user?.email}/>
                 <ListItem func={()=> navigate("accountinformation/updatephone")} itemHeader={'Phone'} itemSubtext={user?.phone ? user.phone : 'Not Added'}/>
                 {/* <ListItem func={()=> navigate("accountinformation/updatemailing")} itemHeader={'Mailing Address'} itemSubtext={user?.address ? user.address : 'Not Added'}/> */}
                 {/* <ListItem func={()=> seteverified(true)}itemHeader={'Verified'} itemSubtext={'No'}/> */}
             </ul>
           </div>
       </div>
    </div>
    )
  }

  return(
   <Routes>
     <Route path="/" element={<AccountSettingsHome/>}/>
     <Route path="updateusername" element={<UsernameUpdatePage/>}/>
     <Route path="updateemail" element={<EmailUpdatePage/> }/>
     <Route path="updatephone" element={<PhoneUpdatePage/>}/>
     <Route path="updatemailing" element={<MailingAddressUpdatePage/>}/>
   </Routes>
  )
}


const ChangePassword = () => {
  
  return(
    <>
    <div>
      <PasswordUpdateScreen userid={user?._id} userpassword={user?.password} func={()=> navigate(-1)} header={'Update Password'}/>
    </div>
    </>
  )
}

const DownloadData = () => {
  const [checked, setChecked] = useState(false)
  const list =[
    {
      itemHeader: <span className="text-gray-400">Trading History</span>,
      itemSubtext: <span className="text-gray-400">Download An Archive Of All Trading Activity</span> ,
      switch:      <MenuCheckBox disabled={true} />
    },
    {
      itemHeader: <span className="text-gray-400">Investment Portfolio</span>,
      itemSubtext: <span className="text-gray-400">Download An Archive Of Your Investment Portfolio </span>,
      switch:      <MenuCheckBox disabled={true}/>
    },
    {
      itemHeader: 'One Hive Activity',
      itemSubtext: 'Download A Visualization Of One Hive Activity',
      switch:      <MenuCheckBox setChecked={setChecked} checked={checked}/>
    },
  ]

  const handleUpdate = () => {
    if(checked){
      ErrorMessage("Not enough hive activity to download!")
      return
    }

    ErrorMessage("Choose at least one dataset.")

  }

  return(
    <>
    <div className={'sm:col-span-2'}>
    <MenuItem handleUpdate={handleUpdate} func={()=>  navigate(-1)} buttonText={'Download'} itemHeader={'Download Your Data'} itemSubtext={'Choose Which datasets You are Interested In downloading Now.'} list={list}/>
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
   <MenuItem func={()=>  navigate(-1)}  list={list} itemHeader={itemHeader} itemSubtext={itemSubtext} buttonText={'Deactivate'}/>
    </>
  )
}

const AllAccountSettings = () => {
  return (
    <ul className=" col-span-2 px-2   lg:items-start sm:pl-5  flex flex-col gap-y-5 ">
      <Link to={"/dashboard/settings/"} className=" flex items-center gap-x-8  sm:hidden">
        <a className={styles.SettingsIcon}>
          <FaArrowLeft />
        </a>
        <div>
          <span>Your Account</span>
          <p>{user?.email}</p>
        </div>
      </Link>
      <div className=" block    space-y-2">
        <h3
          className={`text-gray-600 text-[12px] font-semibold `}
        >
          See information about your account, download an archive of your data,
          or learn about your account investment settings
        </h3>
      </div>

      {/* <div className=" hidden md:block ">
        <div className=" space-y-4  ">
          <h3 className={styles.UiHeading}>Your Account</h3>
          <h3 className={`${styles.UiSubHeading} `}>
            See information about your account, download an archive of your
            data, or learn about your account deactivation options
          </h3>
        </div>
      </div> */}
      {/* <div className="lg:hidden ">
        <div className="  ">
          <h3 className={`${styles.UiSubHeading} lg:hidden`}>
            See information about your account, download an archive of
            your data, or learn about your account investment settings
          </h3>
        </div>
      </div> */}

      {/* account link */}
      <Link
        to={"accountinformation"}
        className="relative flex items-center sm:min-w-[80%] pt-4 sm:pt-0 "
      >
        <div>
          <a className={styles.SettingsIcon}>
            <FaUser />
          </a>
        </div>
        <div className="min-w-[80%] ml-8 pr-4">
          <p className={styles.UIMenu}>Account Information</p>
          <p className="text-[14px]">
            See your account information like your email address.
          </p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link>

      {/* change password link */}
      <Link
        to={"changepassword"}
        className="relative sm:min-w-[80%] flex items-center  "
      >
        <div>
          <a className={styles.SettingsIcon}>
            <FaLock />
          </a>
        </div>
        <div className=" ml-8 pr-8">
          <p className={styles.UIMenu}>Change Password</p>
          <p className="text-[14px]">Change Your Password At Any Time</p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link>

      {/* download data link */}
      <Link
        to={"downloaddata"}
        className="relative sm:min-w-[80%] flex items-center  "
      >
        <div>
          <a className={styles.SettingsIcon}>
            <FaDownload />
          </a>
        </div>
        <div className=" ml-8 pr-8">
          <p className={styles.UIMenu}>Download Your Data</p>
          <p className="text-[14px]">
            Download A copy Of All your Activity
            <br className="hidden sm:block" /> On Medik 420
          </p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link>

      {/* delete data link */}
      {/* <Link
        to={"deletedata"}
        className="relative sm:min-w-[80%] flex items-center  "
      >
        <div>
          <a className={styles.SettingsIcon}>
            <FaPowerOff />
          </a>
        </div>
        <div className=" ml-8 pr-8">
          <p className={styles.UIMenu}>Deactivate Your Account</p>
          <p className="text-[14px]">
            Find out How you Can Delete Your Account
          </p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link> */}
    </ul>
  );
}








  return (
          <Routes>
             <Route path="/" element={<AllAccountSettings/>}/>
             <Route path="accountinformation/*" element={<AccountSettings/>}/>
             <Route path="changepassword" element={<ChangePassword/>}/>
             <Route path="downloaddata" element={<DownloadData/>}/>
             <Route path="deletedata" element={<DeactivateAccount/>}/>
          </Routes>
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
              <span class={`${styles.SettingOption} `}>
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




const  PasswordUpdateScreen = ({func, header, updateText, placeholder, userpassword, userid }) => {

  const [currentPassword, setCurrentPassword] = useState("")
  const [Password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleunlock = () => {
    if(currentPassword != userpassword){
    setError(true)
    ErrorMessage(`invalid password  `)
    return
    }

    setUnlocked(true)
    setError(false)
  }

  const handleUpdate = () => {
    if(Password != confirmPassword ){
      ErrorMessage(`both fields must match `)
      return
    }
    updatePassword(confirmPassword, userid)
  }

  return(
    <>
    <div className=''>
       <div>

       <div className=' flex items-center gap-x-8 px-8 pt-2 sm:pt-0 sm:px-0'>
         <a className={ styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <p>{header}</p>
         {/* <p>evilmorty052@proton.me</p> */}
         </div>
         </div>

         {/* {"Current Password sections"} */}
           <div className='py-8 pl-8'>
              <label className="text-xs">Confirm your current password.</label>
              <input value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder={'Current Password'} type="text" className={`${styles.Input} ${error && "border border-red-500"}`} /> 
           </div>

           {/* {"Confirm Password sections"} */}
          {unlocked &&
          <div className='px-8 flex flex-col gap-y-4'>
           <input value={Password} onChange={(e) => setPassword(e.target.value)} placeholder={'New Password'} type="text" className={styles.Input} /> 
           <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder={'Confirm Password'} type="text" className={styles.Input} /> 

           
           </div>}

           {/* update button */}
           <div className='flex w-full px-8 py-8 sm:ml-8 sm:px-0'>
              <button onClick={() => {
                !unlocked ? handleunlock() : handleUpdate()
              }} className="btnAlt">
                {unlocked ? "Update Password" : "Confirm"}
              </button>
            </div>
       </div>
    </div>
    </>
  )
}

