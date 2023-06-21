import { useState } from 'react'
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa'
import styles from '../../style'
import {AccountInfo, SecuritySettings, PrivacySettings , InvestmentSettings, NotificationSettings}from './index'
import {Routes, Route, Link, useNavigate} from "react-router-dom"




const MobileSettings = ({user}) => {
    const [accountSettings, setaccountSettings] = useState(null)
    const navigate = useNavigate()

const AllSettings = () => {
    return (
      <>
        <div className=" sm:hidden flex-col w-full ">
          {/* back button */}
        <Link to={"/dashboard"} className=" flex items-center gap-x-4 py-2 px-2  ">
        <a className={styles.SettingsIcon}>
          <FaArrowLeft  />
        </a>
        <div>
          <span>Exit settings</span>
        </div>
      </Link>
          {/* header */}
          <div className="px-2 mb-4 flex justify-center mt-4 ">
            <div className="">
              <h3 className={`${styles.UiHeading} text-center`}>Settings</h3>
            </div>
          </div>
          {/* {menu items} */}
          <div className="flex  gap-y-8 sm:flex flex-col  pl-2 pr-6  ">

            

            {/* account settings */}
            <Link
              to={'account'}
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
            </Link>
        
        {/* investment settings */}
            <Link
              to={'investment'}
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
            </Link>
            
            {/* privacy settings */}

            <Link
              to={'privacy'}
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
            </Link>

            {/* notification settings */}

            {/* <Link
              to={'notification'}
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
            </Link> */}

          </div>
          {/* {end menu items} */}
        </div>
      </>
    );
}



//  if (accountSettings) {
//     return(
//         <>
//         <AccountInfo func={()=> setaccountSettings(false)}/>
//         </>
//     )
//  }
//  else if (privacy) {
//     return(
//         <>
//         <PrivacySettings func={()=> setprivacy(false)}/>
//         </>
//     )
//  }
//  else if (investmentSettings) {
//     return(
//         <>
//        <InvestmentSettings func={()=> setinvestmentSettings(false)}/>
//         </>
//     )
//  }
//  else if (notifications) {
//     return(
//         <>
//        <NotificationSettings func={()=> setnotifications(false)}/>
//         </>
//     )
//  }






    return(
        <>
        <Routes>
           <Route path='/' element={<AllSettings/>}/>
           <Route path='account/*' element={<AccountInfo user={user}/>}/>
           <Route path='privacy' element={<PrivacySettings user={user} func={()=> navigate(-1)}/>}/>
           <Route path='investment/*' element={<InvestmentSettings user={user} />}/>
           <Route path='notification' element={<NotificationSettings />}/>
        </Routes>
        </>
    )
}

export default MobileSettings



