import React, {useState} from 'react'
import styles from '../../style'
import { FaAngleRight, FaUser } from 'react-icons/fa'
import {AnimatedSidebar, LaptopDisplay} from '../../components/index'
import Sidebar from '../../partials/Sidebar2'
import { SettingPage, switchSettings } from '../../Redux/slices/settingsSlice'
import {useDispatch} from 'react-redux'
import {AccountInfo, SecuritySettings,MainSettings, MobileSettings, LaptopSettings} from './index'
import Header from '../../partials/Header'
import { useNavigate } from 'react-router-dom'



const Settings = () => {

   
const [expanded, setexpanded] = useState(true)
const navigate = useNavigate()
function handleSideBar(params) {
    !expanded ? setexpanded(true) : setexpanded(false)
}
  return (
    <>
    <div className='hidden sm:block'><Header func={()=> navigate(-1) } halfmenu={true}/></div>
    {/* <AnimatedSidebar isExpanded={expanded} /> */}
    <AllSettings/>
    </>
  )
}

function AllSettings(params) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    return(
        <>
        
        <div className='sm:hidden'><Header func={() => navigate(-1)} halfmenu={true}/></div>
        <div className='flex  h-screen '>
            <div className=' sm:pt-20 container mx-auto  '>
                  <div>
                    <div className='hidden sm:block '>
                 <LaptopSettings/>
                    </div>
                  </div>
                <div className='sm:hidden'>
                    <div className='pt-8 sm:pt-0'>
                    <MobileSettings/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}





export default Settings