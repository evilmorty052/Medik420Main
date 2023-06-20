import {UseUserContext} from '../contexts/UserContext'
import { Outlet, Route, Routes, Link } from "react-router-dom"
import { AnimatedSidebar,} from "../components"
import { useState,useEffect, useLayoutEffect } from "react"
import { NewNav } from "../components/Dashboard/LaptopDisplay"
import { hemplogo, mediklogo, menu } from "../assets"
import {RoundedNavBar} from "../components"



const PublicRoutes = () => {
    const [expanded, setIsExpanded] = useState(false)
    
   

  return (
    <>
    <div className="bg-white">
    <NewNav/>
    {/* <Navbar open={setIsExpanded} setSideBarOpen={setIsExpanded} sideBarOpen={expanded}/> */}
    <RoundedNavBar expanded={expanded} setIsExpanded={setIsExpanded} />
    <AnimatedSidebar isExpanded={expanded} setIsExpanded={setIsExpanded}/>
    <Outlet/>
    </div>
    </>
  )
}

export default PublicRoutes