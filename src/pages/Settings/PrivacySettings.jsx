import { FaUser,  FaArrowLeft,  FaAngleRight } from "react-icons/fa";
import styles from "../../style";
import { useState } from "react";
import {MenuItem, MenuCheckBox, Menuswitch} from './index'
import {updatePrivacySettings} from "./Features"
import {Loader} from "../../components"

const PrivacySettings = ({func, user}) => {
  const [investmentinfo, setInvestmentInfo] = useState(user?.privacysettings?.investmentinformation)
  const [tradinginfo, setTradingInfo] = useState(user?.privacysettings?.tradinginformation)
  const [locationinfo, setLocationInfo] = useState(user?.privacysettings?.locationinformation)


  const list =[
    {
      itemHeader: 'Trading Information',
      itemSubtext: 'If Enabled We will Collect Data About Your Trades On our Platform. We Collect This Information To Train Our A.i And Create Connections With Other Users',
      switch:      <MenuCheckBox checked={tradinginfo} setChecked={setTradingInfo}/>
        },
    {
      itemHeader: 'Investment Information',
      itemSubtext: 'If Enabled We will Share Data About Your Investments With other Users On our Platform',
      switch:      <MenuCheckBox checked={investmentinfo} setChecked={setInvestmentInfo}/>
    },
    
    {
      itemHeader: 'Location Information',
      itemSubtext: 'Allow Medik 420 to Share Your Location With Other Users',
      switch:      <MenuCheckBox checked={locationinfo} setChecked={setLocationInfo}/>
    },
    // {
    //   itemHeader: 'Profile',
    //   itemSubtext: 'Allow Medik 420 To Share Information like Your Profile Image And Username if Disabled You Will Appear as Anonymous To Other Users',
    //   switch:      <MenuCheckBox/>
    // },
    
  ]

  class UpdatedPrivacySettings{
    constructor({investmentinfo, tradinginfo, locationinfo }){
       this.investmentinformation = investmentinfo,
       this.tradinginformation = tradinginfo,
       this.locationinformation = locationinfo
    }
  }

  const itemHeader = 'Privacy Settings'
  const itemSubtext = 'Choose What Information You Want Us To Collect Or Share'

  function handleUpdate(){
    const newSettings = new UpdatedPrivacySettings(
      {
      investmentinfo,
      tradinginfo,
     locationinfo}
     )
    console.log(newSettings)
    updatePrivacySettings(newSettings,user?._id)
  }

  if(!user){
    return(
      <Loader/>
    )
  }

  return (
    <>
      <MenuItem buttonText={'Update'} func={func} list={list} itemHeader={itemHeader} itemSubtext={itemSubtext} handleUpdate={handleUpdate}/>
    </>
  );
}

export default PrivacySettings