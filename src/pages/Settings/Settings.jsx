import React, {useState} from 'react'
import styles from '../../style'
import { FaAngleRight, FaUser } from 'react-icons/fa'
import {AnimatedSidebar, LaptopDisplay} from '../../components/index'
import Sidebar from '../../partials/Sidebar2'
import {AccountInfo, SecuritySettings,MainSettings, MobileSettings, LaptopSettings} from './index'
import Header from '../../partials/Header'
import { useNavigate } from 'react-router-dom'
import { LargeHeader } from '../../components/Dashboard/LaptopDisplay'



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

    const navigate = useNavigate()
    
    return(
        <>
        
        <div className='sm:hidden'><Header func={() => navigate(-1)} halfmenu={true}/></div>
        <LargeHeader/>
        <div className=' sm:h-screen '>
            <div className=' sm:pt-24 sm:container sm:mx-auto max-w-7xl  '>
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