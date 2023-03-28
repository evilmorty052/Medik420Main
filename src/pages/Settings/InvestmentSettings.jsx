import { useState } from "react";
import { FaAngleRight, FaArrowLeft, FaBrain, FaCreditCard, FaRobot, FaUser } from "react-icons/fa";
import styles from "../../style";
import {MenuItem, Menuswitch, MenuCheckBox, MenuSlider} from './index'


const InvestmentSettings = ({func}) => {

const [autoinvest, setautoinvest] = useState(false)
const [medikcoach, setmedikcoach] = useState(false)
const [debitcard, setdebitcard] = useState(false)
const [checking, setchecking] = useState(false)
const [smart, setsmart] = useState(false)

const email = localStorage.getItem('email')

const AutoInvest = () => {
  const [autoInvestSwitch, setautoInvestSwitch] = useState(false)
  const [investmentnotifications, setinvestmentnotifications] = useState(true)

  const list =[
    {
      itemHeader: 'Activate Auto Invest',
      itemSubtext: 'Auto Invest Is designed for expert users already familiar with investing we recommend using Smart Portfolio for New Users.  ',
      switch:      <Menuswitch checked={autoInvestSwitch} onClick={()=> !autoInvestSwitch ? setautoInvestSwitch(true) : setautoInvestSwitch(false) }/>
    },
    {
      itemHeader: 'Investment Notifications',
      itemSubtext: 'Allow Auto-invest to Notify you on every Investment',
      switch:      <Menuswitch checked={investmentnotifications}/>
    },
    {
      itemHeader: 'Max Investment',
      itemSubtext: 'Adjust The Maximum Percentage of Your Portfolio Auto Invest Is Authorized To Spend',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>
    },
    // {
    //   itemHeader: 'One Hive Activity',
    //   itemSubtext: 'Download A Visualization Of One Hive Activity',
    //   switch:      <Menuswitch checked={false}/>
    // },
  ]

  const itemHeader = 'Auto Invest'
  const itemSubtext = 'Manage Your Auto Invest Settings'
 

  return(

  <>
  <div className="max-w-xl">

 <MenuItem func={()=> setautoinvest(false)} itemSubtext={itemSubtext} buttonText={'save'} itemHeader={itemHeader} list={list}>
   {/* <div className="">
   <div className="max-w-[70%]">
   <p className={styles.SettingOption}>Max Investment</p>
   <span className={styles.SettingOptionSubtext}>Adjust The Maximum Percentage of Your Portfolio Auto Invest Is Authorized To Spend</span>
  </div>
   <MenuSlider/>
   </div> */}
 </MenuItem>
  </div>
  </>
  )
}

const SmartPortfolioSettings = () => {
  const [autoInvestSwitch, setautoInvestSwitch] = useState(false)
  const [investmentnotifications, setinvestmentnotifications] = useState(true)

  const list =[
    {
      itemHeader: 'Activate Smart Portfolio',
      itemSubtext: 'Auto Invest Is designed for expert users already familiar with investing we recommend using Smart Portfolio for New Users.  ',
      switch:      <Menuswitch checked={autoInvestSwitch} onClick={()=> !autoInvestSwitch ? setautoInvestSwitch(true) : setautoInvestSwitch(false) }/>
    },
    {
      itemHeader: 'Crypto Investments',
      itemSubtext: 'Allow Smart Portfolio Invest In Crypto',
      switch:      <MenuCheckBox/>
    },
    
    {
      itemHeader: 'Startups',
      itemSubtext: 'Allow Smart Portfolio Invest In High Performing Startups from Medik 420',
      switch:      <MenuCheckBox/>
    },
    {
      itemHeader: 'Risk level',
      itemSubtext: 'Adjust How Much Risk You Want Smart Portfolio To Take On Your Behalf',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>     
    },
    
  ]

  const itemHeader = 'Smart Portfolio'
  const itemSubtext = 'Manage Smart Portfolio Settings'
 

  return(

  <>
 <MenuItem func={()=> setsmart(false)}  itemSubtext={itemSubtext} buttonText={'save'} itemHeader={itemHeader} list={list}>
   
 </MenuItem>
  </>
  )
}


const DebitCardSettings = () => {
  const [autoInvestSwitch, setautoInvestSwitch] = useState(false)
  const [investmentnotifications, setinvestmentnotifications] = useState(true)

  const list =[
    {
      itemHeader: 'Activate Card',
      itemSubtext: 'Activate A Debit Card you Received From Medik 420 ',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>
    },
    {
      itemHeader: 'Request New Card',
      itemSubtext: 'Request A New Debit Card',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>
    },
    
    {
      itemHeader: 'Report Stolen/lost',
      itemSubtext: 'Report A Debit Card Lost or Stolen',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>
    },
    {
      itemHeader: 'Set Transaction Pin',
      itemSubtext: 'Set A pin On Your Debit Card For Secure Transactions',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>
    },
    {
      itemHeader: 'Set Transaction Limit',
      itemSubtext: 'Set A Limit On Transaction Amount',
      switch:      <a className={styles.SettingsIcon}><FaAngleRight/></a>
    },
    
  ]

  const itemHeader = 'Debit Card Settings'
  const itemSubtext = 'Manage Debit Card'
 

  return(

  <>
 <MenuItem func={()=> setdebitcard(false)} itemSubtext={itemSubtext}  itemHeader={itemHeader} list={list}>
   
 </MenuItem>
  </>
  )
}


const CheckingAccountSettings = () => {
  const [autoInvestSwitch, setautoInvestSwitch] = useState(false)
  const [investmentnotifications, setinvestmentnotifications] = useState(true)

  const list =[
    {
      itemHeader: 'Activate Smart Portfolio',
      itemSubtext: 'Auto Invest Is designed for expert users already familiar with investing we recommend using Smart Portfolio for New Users.  ',
      switch:      <Menuswitch checked={autoInvestSwitch} onClick={()=> !autoInvestSwitch ? setautoInvestSwitch(true) : setautoInvestSwitch(false) }/>
    },
    {
      itemHeader: 'Crypto Investments',
      itemSubtext: 'Allow Smart Portfolio Invest In Crypto',
      switch:      <MenuCheckBox/>
    },
    
    {
      itemHeader: 'Startups',
      itemSubtext: 'Allow Smart Portfolio Invest In The Highest Performing Startups from Medik 420',
      switch:      <MenuCheckBox/>
    },
    
  ]

  const itemHeader = 'Checking Account'
  const itemSubtext = 'Manage Smart Portfolio Settings'
 

  return(

  <>
 <MenuItem func={()=> setchecking(false)} itemSubtext={itemSubtext} buttonText={'save'} itemHeader={itemHeader} list={list}>
   
 </MenuItem>
  </>
  )
}

// const MedikCoachtSettings = () => {
//   const [autoInvestSwitch, setautoInvestSwitch] = useState(false)
//   const [investmentnotifications, setinvestmentnotifications] = useState(true)

//   const list =[
//     {
//       itemHeader: 'Activate Medik Coach',
//       itemSubtext: 'Auto Invest Is designed for expert users already familiar with investing we recommend using Smart Portfolio for New Users.  ',
//       switch:      <Menuswitch checked={autoInvestSwitch} onClick={()=> !autoInvestSwitch ? setautoInvestSwitch(true) : setautoInvestSwitch(false) }/>
//     },
//     {
//       itemHeader: 'Crypto Investments',
//       itemSubtext: 'Allow Smart Portfolio Invest In Crypto',
//       switch:      <MenuCheckBox/>
//     },
    
//     {
//       itemHeader: 'Startups',
//       itemSubtext: 'Allow Smart Portfolio Invest In The Highest Performing Startups from Medik 420',
//       switch:      <MenuCheckBox/>
//     },
    
//   ]

//   const itemHeader = 'Medik Coach'
//   const itemSubtext = 'Manage Smart Portfolio Settings'
 

//   return(

//   <>
//  <MenuItem func={()=> setmedikcoach(false)} itemSubtext={itemSubtext} buttonText={'save'} itemHeader={itemHeader} list={list}>
   
//  </MenuItem>
//   </>
//   )
// }

if(autoinvest){
  return(
    <>
    <AutoInvest/>
    </>
  )
}

// else if (medikcoach)
// return(
//   <>
//   <MedikCoachtSettings/>
//   </>
// )

else if (smart)
return(
  <>
 <SmartPortfolioSettings/>
  </>
)

// else if (checking)
// return(
//   <>
//   <CheckingAccountSettings/>
//   </>
// )

else if (debitcard)
return(
  <>
  <DebitCardSettings/>
  </>
)



  return (
    <>
      <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 slide-in-right">
      <div className=' flex items-center gap-x-8 px-4 sm:hidden'>
         <a className={styles.SettingsIcon} ><FaArrowLeft onClick={func} /></a>
         <div>
         <span>Investment Settings</span>
         <p>{email}</p>
         </div>
         </div>
          <div className='pl-4 block  sm:hidden  space-y-2'>
         
          <h3
              className={styles.UiSubHeading}
            >
                           Manage Your Investment Account Settings
            </h3>
          </div>
        <div className="md:block hidden ">
          <div className=" space-y-4  px-4">
            <h3 className={styles.UiHeading}>Investment And Banking</h3>
            <h3 className={`${styles.UiSubHeading} `}>
            Manage Your Investment Or Banking Settings  At Any Time
            </h3>
          </div>
        </div>
        <li onClick={()=> setdebitcard(true)} className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaCreditCard />
            </a>
            </div>
              <div className=' ml-8 pr-4'>
                <p className={styles.UIMenu}>Debit Card Setiings</p>
                <p className="text-[14px]">
                 Lock Your Debit Card Or Adjust Settings
                </p>
              </div>
          <div className=' absolute right-2 hidden sm:block'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li onClick={()=> setsmart(true)}  className='relative flex items-center sm:min-w-[80%] '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaBrain />
            </a>
            </div>
              <div className='min-w-[80%] ml-8 pr-4'>
                <p className={styles.UIMenu}>Smart Portfolio</p>
                <p className="text-[14px]">
                  choose what trading information you share
                </p>
              </div>
          <div className=' absolute right-2 hidden sm:block'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        <li onClick={()=> setautoinvest(true)}  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaRobot />
            </a>
            </div>
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Auto Invest</p>
                <p className="text-[14px]">
                 Turn On Auto Invest
                </p>
              </div>
          <div className=' absolute right-2 hidden sm:block'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li>
        {/* <li onClick={()=> setmedikcoach(true)}  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Medik Coach</p>
                <p className="text-[14px]">
                 Turn On Medik Coach
                </p>
              </div>
          <div className='hidden absolute right-2'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li> */}
        {/* <li onClick={()=> setchecking(true)}  className='relative sm:min-w-[80%] flex items-center  '>
            <div>
            <a className={styles.SettingsIcon}>
              <FaUser />
            </a>
            </div>
              <div className=' ml-8 pr-8'>
                <p className={styles.UIMenu}>Checking Account</p>
                <p className="text-[14px]">
                 Adjust Checking Account Settings
                </p>
              </div>
          <div className=' absolute right-2 hidden'>
                <a>
                  <FaAngleRight />
                </a>
          </div>
        </li> */}
       
      
      </ul>
    </>
  );
}

export default InvestmentSettings