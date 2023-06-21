import { useState } from "react";
import { FaAngleRight, FaArrowLeft, FaBrain, FaCreditCard, FaRobot, FaUser } from "react-icons/fa";
import styles from "../../style";
import {MenuItem, Menuswitch, MenuCheckBox, MenuSlider} from './index'
// import {RiskCalculator} from "../index"
import {base, neutral, growthgraph, brain } from '../../assets';
import { Slider} from 'antd';
import { motion } from '../../hooks/useMotion';
import {Link, Routes, Route, useNavigate} from "react-router-dom"
import {updateRisk, updateDefaultAccount, updateSmartPortfolio} from "./Features"
import {ErrorMessage} from "./partials/Message"
import {Loader} from "../../components"

const InvestmentSettings = ({func, user}) => {



const navigate = useNavigate()

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
  <div className="col-span-2">

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

const RiskCalculator = ({to}) => {

  

  const uservalue = () => {
    let defaultValue = user?.risklevel
    if(defaultValue == "Stable"){
      return 20
    }
    
    else if(defaultValue == "Neutral"){
      return 50
    }

    else if(defaultValue == "Growth"){
      return 70
    }

    
    
  }
  const [riskvalue, setriskvalue] = useState(uservalue())


  function Grid(params) {
   
  if (riskvalue < 50) {
    return (
      <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>
        <div className="w-full  max-h-32">
          <img src={base} className='w-full' alt="" />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-blk">
            I prefer stability over growth
          </h3>
          <p className="text-sm">
            I prefer stability over growth. I may prefer to play it safe and
            am willing to have smaller investment returns to avold potential
            losses
          </p>
        </div>
      </motion.div>       
      </>
    );
  }

  else if (riskvalue == 50) {
    return(
      <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>

      <div className="w-full  max-h-32">
      <img src={neutral} className='w-full' alt="" />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-blk">
          I prefer equal stability and growth.
          </h3>
          <p className="text-sm">
          I value stability and investment growth. However, I may be willing to take on more risk (i.e investment loss), for potential growth (investment gains)
          </p>
        </div>
      </motion.div>
      </>
    )
  }

  else if (riskvalue > 50) {
    return(
      <>
      <motion.div initial={{opacity:0}} animate={{opacity:1}}>

      <div className="w-full  max-h-32">
      <img src={growthgraph} className='w-full' alt="" />
        </div>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-blk">
          I prefer growth over stability.
          </h3>
          <p className="text-sm">
          I prefer growth over stability. I'm prepared to risk bigger investment losses for the potential of bigger Investment gains.
          </p>
        </div>
      </motion.div>
      </>
    )
  }

    
  }

  const marks = {
    0: {
      label: <strong className='mt-2 px-2 text-blue-400 hover:text-blue-600 transition-all duration-500 ease-in-out text-sm sm:text-xl'>Stable</strong>,
    },
    50: {
      label: <strong>Neutral</strong>,
    },
    100: {
      style: {
        color: '#f50',
      },
      label: <strong className='text-green-400 hover:text-green-600 transition-all duration-500 ease-in-out text-sm sm:text-xl'>Growth</strong>,
    },
  };

  const handleUpdate = () => {
  let risk = ""
    if(riskvalue < 50){
      risk = "Stable"
    }

    else if(riskvalue == 50){
      risk = "Neutral"
    }

    else{
      risk = "Growth"
    }

    updateRisk(risk, user?._id)
  }


  return (
    <>
      <div className="h-screen sm:h-auto bg-white sm:col-span-2">
      <Link
  to={"/dashboard/settings/investment/smart"}
  className=" flex items-center gap-x-4 py-2 px-2  "
>
  <a className={styles.SettingsIcon}>
    <FaArrowLeft />
  </a>
  <div>
    <span>back to smart portfolio settings</span>
  </div>
</Link>
        <div className="flex  px-4 space-y-4 sm:container max-w-7xl sm:mx-auto ">
          <div className="py-4 mx-auto ">
            {/* question container */}

            <div className="text-start space-y-2 pb-4">
              <h3
                className={
                  "sm:text-[28px] text-[25px]  font-bold text-gray-800"
                }
              >
                Adjust Smart Portfolio Risk Level
              </h3>
              <p className="text-[14px] text-blue-500 font-medium">
                What does this mean ?
              </p>
            </div>

            <div className="py-4 flex gap-x-4">
              <div className="flex items-center gap-x-2">
                <span className='text-sm  font-semibold text-blk'>Investment</span>
                <div className="inline-block rounded-xl p-[6px] bg-blue-400"></div>
              </div>
              <div className="flex items-center gap-x-2">
                <span className='text-sm  font-semibold text-blk'>Returns</span>
                <div className="inline-block rounded-lg p-[6px] bg-purple-600"></div>
              </div>
            </div>

            {/* risk input section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4 pt-4 "
            >
              <Grid />
            </motion.div>

           

            {/* slider container */}

            <div className="py-10  w-full">
              <div className=" max-w-[95%] mx-auto sm:max-w-[85%]">
                <Slider
                 value={riskvalue}
                  onChange={(value) => {
                    setriskvalue(value);
                  }}
                  marks={marks}
                />
              </div>
            </div>

            {/* go back/ continue section */}

            <div className="flex justify-between items-center ">
              <div>
              <Link to={`${to}`} className='text-[20px] text-gray-700'><FaArrowLeft /></Link>
              </div>

              <div className="py-2">
                <button
                  onClick={() => handleUpdate()}
                  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl"
                >
                  {"Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SmartPortfolioSettings = () => {
  const [smartPortfolio, setSmartPortfolio] = useState(user?.smartportfolioison? false : true)
  const [autoInvest, setautoInvest] = useState(user?.autoinvest)
  const [pipeFunding, setPipeFunding] = useState(user?.pipefunding)
  const [crypto, setCrypto] = useState(user?.cryptoinvestments)

  const list =[
    {
      itemHeader: 'Deactivate Smart Portfolio',
      itemSubtext: 'Smart Portfolio Is designed to maximise your profits while taking out the hassle of manual investments. we strongly recommend using Smart Portfolio.  ',
      switch:      <Menuswitch enabled={smartPortfolio} setEnabled={setSmartPortfolio} />
    },
    {
      itemHeader: 'Auto Investments',
      itemSubtext: 'Allow Smart Portfolio identify and make investments on your behalf, if turned on smart portfolio will only notify you of the best investments.',
      switch:      <Menuswitch  enabled={autoInvest} setEnabled={setautoInvest}  />
    },
    {
      itemHeader: 'Crypto Investments',
      itemSubtext: 'Allow Smart Portfolio Invest In Crypto',
      switch:      <MenuCheckBox checked={crypto} setChecked={setCrypto}/>
    },
    
    {
      itemHeader: 'Pipe Funding',
      itemSubtext: 'Allow Smart Portfolio Invest In High Performing Startups.',
      switch:      <MenuCheckBox  checked={pipeFunding} setChecked={setPipeFunding}/>
    },
    
    {
      itemHeader: <Link to={'risk'} >Risk level</Link>,
      itemSubtext: <Link to={'risk'} >Adjust How Much Risk You Want Smart Portfolio To Take On Your Behalf</Link>,
      switch:      <Link to={'risk'} className={styles.SettingsIcon}><FaAngleRight/></Link>     
    },
    
  ]

  const itemHeader = <Link to="/dashboard/settings/investment">Back to investment settings</Link>
  const itemSubtext = 'Manage Smart Portfolio Settings'
 
class SmartPortfolioObject{
  constructor({pipefunding, cryptoinvestments, smartportfolioison, autoinvest}){
  this.pipefunding = pipefunding
  this.cryptoinvestments = cryptoinvestments
  this.smartportfolioison = smartportfolioison
  this.autoinvest = autoinvest
  }
}

  const handleUpdate = () => {

    const updatedSettings = new SmartPortfolioObject({
  pipefunding:pipeFunding,
  cryptoinvestments:crypto,
  smartportfolioison:!smartPortfolio,
  autoinvest:autoInvest
    })

    console.log(updatedSettings)

    updateSmartPortfolio(updatedSettings, user?._id)
   
  }

  if(!user){
    return(
      <Loader/>
    )
  }

  return(

  <>
 <Routes>
   <Route path='/' element={<MenuItem handleUpdate={handleUpdate} func={()=> navigate("/dashboard/settings/investment")}  itemSubtext={itemSubtext} buttonText={'save'} itemHeader={itemHeader} list={list}></MenuItem>}/>
   <Route path='risk' element={<RiskCalculator  to={"/dashboard/settings/investment/smart/"}/>}/>
 </Routes>
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


const DefaultAccountSettings = () => {
  const [accountNumber, setAccountNumber] = useState("")
  const [routingNumber, setRoutingNumber] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountName, setAccountName] = useState("")
  const [savings, setSavings] = useState(false)
  const [checking, setChecking] = useState(false)



  const list =[
    // {
    //   itemHeader: 'Activate Smart Portfolio',
    //   itemSubtext: 'Auto Invest Is designed for expert users already familiar with investing we recommend using Smart Portfolio for New Users.  ',
    //   switch:      <Menuswitch checked={autoInvestSwitch} onClick={()=> !autoInvestSwitch ? setautoInvestSwitch(true) : setautoInvestSwitch(false) }/>
    // },
    // {
    //   itemHeader: 'Crypto Investments',
    //   itemSubtext: 'Allow Smart Portfolio Invest In Crypto',
    //   switch:      <MenuCheckBox/>
    // },
    
    // {
    //   itemHeader: 'Startups',
    //   itemSubtext: 'Allow Smart Portfolio Invest In The Highest Performing Startups from Medik 420',
    //   switch:      <MenuCheckBox/>
    // },
    
  ]

  const itemHeader = 'Default Account'
  const itemSubtext = 'Setup your quick withdrawal account'

  // class DefaultAccount{
  //   constructor({accountnumber,routingnumber,bankname,accountname }){
  //     this.accountnumber = accountNumber,
  //     this.routingnumber = routingNumber,
  //     this.bankname = bankName,
  //     this.accountname = accountName,

  //   }
  // }

  class DefaultAccount{
    constructor({investmentinfo, tradinginfo, locationinfo, savings }){
       this.accountnumber = accountNumber  
       this.routingnumber = routingNumber
       this.bankname = bankName
       this.accountname = accountName
       this.savings = savings
       this.checking = checking
    }
  }

  const handleUpdate = () => {
    const accountsettings = new DefaultAccount({
      accountNumber,
      routingNumber,
      bankName,
      accountName,
      savings,
      checking
    })
    console.log(accountsettings)
    updateDefaultAccount(accountsettings, user?._id)
  }
 

  return(

  <>
 <MenuItem func={()=> navigate(-1)} itemSubtext={itemSubtext} buttonText={'Save Account'} itemHeader={itemHeader} list={list} handleUpdate={handleUpdate}>
 <div>
    <div>
        <ul className="space-y-4  pt-4">
            <li className="flex flex-col">
               <label>Account Holder:</label>
               <input className="border-gray-400  rounded-xl mt-1" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder={user?.defaultaccount?.accountname} type="text"/>
            </li>
            <li className="flex flex-col">
               <label>Bank Name:</label>
               <input className="border-gray-400  rounded-xl mt-1" value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder={user?.defaultaccount?.bankname} type="text"/>
            </li>
           
            <li className="flex flex-col">
               <label>Account Number:</label>
               <input className="border-gray-400  rounded-xl mt-1" value={accountNumber} onChange={(e) => setAccountNumber(Number(e.target.value))} placeholder={user?.defaultaccount?.accountnumber} type="number"/>
            </li>
            <li className="flex flex-col">
               <label>Routing Number:</label>
               <input className="border-gray-400  rounded-xl mt-1" value={routingNumber} onChange={(e) => setRoutingNumber(Number(e.target.value))} placeholder={user?.defaultaccount?.routingnumber}type="number"/>
            </li>


            {/* {account type} */}
            <li className="flex items-center gap-x-2">
                <span>Account Type:</span>
                {/* checking option */}
               <div className="flex items-center gap-x-2 ">
               <span>Checking:</span>
               <input value={checking} className="border-gray-400 rounded-md "  onChange={(e) => setChecking(Boolean(!checking))} placeholder={""} type="checkbox"/>
               </div>
                {/* savings option */}
               <div className="flex items-center gap-x-2">
               <span>Savings:</span>
               <input value={savings} className="border-gray-400 rounded-md"  onChange={(e) => setSavings(Boolean(!savings))} placeholder={""} type="checkbox"/>
               </div>
            </li>
        </ul>
    </div>
  </div>
 </MenuItem>
  
  </>
  )
}







const AllInvestmentSettings = () => {
  return (
    <ul className=" col-span-2 px-2  lg:items-start sm:pl-5  flex flex-col gap-y-5 ">
      {/* back button */}
      <div className=" flex items-center gap-x-8 px-4 sm:hidden">
        <Link to={"/dashboard/settings"} className={styles.SettingsIcon}>
          <FaArrowLeft />
        </Link>
        <div>
          <span>Investment Settings</span>
          <p>{email}</p>
        </div>
      </div>

      {/* header */}
      <div className=" block   space-y-2">
        <h3 className={styles.UiSubHeading}>
          Manage Your Investment Account Settings
        </h3>
      </div>

    
      {/* smart portfolio settings */}
      <Link to={"smart"} className="relative flex items-center sm:min-w-[80%] ">
        <div>
          <a className={styles.SettingsIcon}>
            <img className="h-6 w-6" src={brain} />
          </a>
        </div>
        <div className="min-w-[80%] ml-8 pr-4">
          <p className={styles.UIMenu}>Smart Portfolio</p>
          <p className="text-[14px]">
            Adjust smart portfolio settings
          </p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link>

      {/* auto invest settings */}
      {/* <Link
        to="autoinvest"
        className="relative sm:min-w-[80%] flex items-center  "
      >
        <div>
          <a className={styles.SettingsIcon}>
            <FaRobot />
          </a>
        </div>
        <div className=" ml-8 pr-8">
          <p className={styles.UIMenu}>Auto Invest</p>
          <p className="text-[14px]">Turn On Auto Invest</p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link> */}

      {/* withdrawal account settings */}
      <Link
        to="defaultaccount"
        className="relative sm:min-w-[80%] flex items-center  "
      >
        <div>
          <a className={styles.SettingsIcon}>
            <img className="h-6 w-6" src="https://www.svgrepo.com/show/475304/plus.svg"/>
          </a>
        </div>
        <div className=" ml-8 pr-8">
          <p className={styles.UIMenu}>Add withdrawal account</p>
          <p className="text-[14px]">Add your default account for quick withdrawals.</p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight />
          </a>
        </div>
      </Link>

      {/* debit card settings */}
      <li
        onClick={()=> ErrorMessage("No card linked to this account.")}
        className="relative sm:min-w-[80%] flex items-center cursor-not-allowed  "
      >
        <div>
          {/* <a className={"text-[20px] text-gray-400"}>
            <FaCreditCard />
          </a> */}
          <img className="h-6 w-6" src="https://www.svgrepo.com/show/275105/debit-card-credit-card.svg"/>
        </div>
        <div className=" ml-8 pr-4">
          <p className={"text-[19px] text-gray-400 font-semibold "}>
            Debit Card Setiings
          </p>
          <p className="text-[14px] text-gray-400">
            Activate Your Debit Card Or Adjust Settings
          </p>
        </div>
        <div className=" absolute right-2 hidden sm:block">
          <a>
            <FaAngleRight className={"text-[20px] text-gray-400"} />
          </a>
        </div>
      </li>
    </ul>
  );
}

  return (
   <Routes>
     <Route path={'/'} element={<AllInvestmentSettings/>}/>
     <Route path={'smart/*'} element={<SmartPortfolioSettings/>}/>
     <Route path={'autoinvest'} element={<AutoInvest/>}/>
     <Route path={'defaultaccount'} element={<DefaultAccountSettings/>}/>
   </Routes>
  );
}

export default InvestmentSettings