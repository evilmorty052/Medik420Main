import {useState, useLayoutEffect} from 'react'
import styles from '../../style'
import { FaAngleRight, FaUser } from 'react-icons/fa'
import {AccountInfo, SecuritySettings,MainSettings, MobileSettings, LaptopSettings} from './index'
import { useNavigate } from 'react-router-dom'
import {UseBottomNavigationContext, } from "../../contexts/BottomNavigationContext"


const Settings = ({user}) => {

  
   
const [expanded, setexpanded] = useState(true)
const navigate = useNavigate()

const {setInvisible} = UseBottomNavigationContext()

useLayoutEffect(() => {
  setInvisible(true)
       
     }, [])
  return (
    <>
    <div className=' sm:min-h-screen bg-white '>
            <div className=' sm:container sm:mx-auto max-w-7xl  '>
                <div className="sm:hidden"><MobileSettings user={user}/></div>
                <div className="hidden sm:block min-h-screen "><LaptopSettings user={user}/></div>
            </div>
        </div>
    </>
  )
}






export default Settings