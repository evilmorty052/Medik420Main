import {UseUserContext} from '../contexts/UserContext'
import {  menu } from "../assets"
import { useState} from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"



const RoundedNavBar = ({expanded,setIsExpanded }) => {


    const {name,setname, loggedIn}= UseUserContext()

     
      return (
        <>
        <nav className="  fixed z-60 top-2 w-full hiddenfromtabupwards ">
          <div className=" mx-auto w-[95%] py-[12px] bg-gray-300 px-4 shadow-2xl rounded-2xl flex items-center justify-between">
          <div className="flex items-center">
          <Link to={'/'} className="text-base font-bold text-gray-800 uppercase">Medik<span className="text-green-500">420</span></Link>
          </div>
            <div className="flex gap-x-2 items-center">
            <Link to={!loggedIn ? "/register" : "/dashboard"} className="py-[4px] px-4 rounded-2xl flex gap-x-2 items-center  bg-gradient-to-bl from-green-200 to-green-400 shadow-inner">
              <div className="rounded-full h-6 w-6 flex items-center justify-center bg-white">
                <FaArrowRight style={{fontSize: '10px'}}/>
              </div>
               <p className="text-xs font-semibold text-gray-800">{ !loggedIn ? "Get started free" : "Go to dashboard"} </p>
            </Link>
            <div onClick={()=> setIsExpanded(!expanded)} className="h-8 w-8 flex items-center justify-center bg-black rounded-full p-2">
            <img src={menu} className="h-full w-full" alt="hemplogo" />
            </div>
            </div>
          </div>
        </nav>
        </>
      )
  }

  export default RoundedNavBar