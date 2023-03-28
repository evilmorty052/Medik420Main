import { useState,useEffect } from "react";
import Popover from '../partials/popover'
import Popover2 from '../partials/popover2'
import { Popover as Action } from "antd";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {motion} from 'framer-motion'
import { close, logo, menu } from "../assets";
import Ml from '../assets/hemplogo.png'
import { navLinks } from "../constants";
import Navlink from './Navlink'
import { useAuth } from '../contexts/AuthContext'
import Path from '../pages/Path'

const Navbar = ({setpathopen, open}) => {
 
  const path = useLocation().pathname
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { logout, currentUser } = useAuth()
 const history = useNavigate()

 function setactive(params) {
 active ? setActive(false) : setActive(true)
 }

 function setToggled(params) {
   setToggle(true)
   console.log('clicked')
 }

 function handleuser(params) {
  history('/path')
 }

 let view 
 let pathid

 switch (path) {
  case '/':
    view = <DefaultNav setpathopen={setpathopen} open={open} path={path} />
    
    break;
  case '/digital':
    pathid ='Digital Farming'
    view = <SecondaryNav open={open} setpathopen={handleuser} pathid={pathid} setactive={setactive}/>
    break;
  
    case '/hive':
    pathid ='One Hive'
    view = <SecondaryNav open={open} setpathopen={handleuser} pathid={pathid} setactive={setactive}/>
    break;

  case '/smallbiz':
    pathid ='ONE HIVE'
    view = <SecondaryNav open={open} setpathopen={handleuser} pathid={pathid} setactive={setactive}/>
    
    break;
  
    case '/invest':
    pathid ='INVESTING'
    view = <SecondaryNav open={open} setpathopen={handleuser} pathid={pathid} setactive={setactive}/>
   
    case '/smart':
    pathid ='Smart Portfolio'
    view = <SecondaryNav open={open} setpathopen={handleuser} pathid={pathid} setactive={setactive}/>
    break;
    
    case '/hiveai':
    pathid ='B.E.M'
    view = <SecondaryNav open={open} setpathopen={handleuser} pathid={pathid} setactive={setactive} path={path}/>
    
    break;
 
  default:
    view = <DefaultNav setpathopen={handleuser} open={open} path={path} />
    break;
 }


 
//  const scroll = window.addEventListener('scroll',()=>{})
//  scroll && console.log('scrolled')


  return (
    <motion.div initial ={{background: '#1a1a1a'}} animate={active ? {background: '#f9f8f8'} : {background: '#1a1a1a'} }
     className={`w-full z-50  fixed top-0 left-0  flex px-2 py-2 justify-between items-center navbar transition-colors ease-in-out`}>
      {/* <img src={Ml} alt="medic420" className="w-[100px] h-[70px]" /> */}
     {view}
    </motion.div>
  );
};


export default Navbar;


function DefaultNav({setpathopen, open , path}) {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { logout, currentUser } = useAuth()
 const history = useNavigate()
  return(
    <>
    {/* <div className="flex  gap-x-1 " >
        <div className=" w-8 h-[33.915px]">
          <img className="w-full" src={Ml} alt="" />
        </div>
        <div className="pt-1">

        </div>
        
      </div> */}
      <h2 onClick={()=>history('/')}  className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2> 
      <ul className="list-none md:flex hidden justify-between items-center flex-1 px-2 ">
      <h2 onClick={()=>history('/')}  className="uppercase text-gray-50 text-2xl  font-poppins font-black tracking-wide hidden lg:flex  "> MEDIK<span className="text-green-200">420</span>  </h2> 
        <div className="flex self-center items-center">
      {path != '/' &&  <Navlink to='/' name='Home'/>}
        <Popover/>
        <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-base font-bold text-white">Shop</a>
        <Popover2/>
        {path != '/jobs' && <Link to='/jobs'  className='ml-[-10px] text-white text-base font-bold' >Job Search</Link>}
        </div>
        <div className="flex">
        {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/pick' name='Register' />}
        {currentUser && <Navlink to='/register' name='Dashboard' />}
        {currentUser && (
  <Navlink
    to='/logout'
    name='Logout'
    onClick={async e => {
      e.preventDefault()
      await logout()
    }}
  />)}
        </div>
       
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">

      <FaUser className="mr-4 text-white" onClick={setpathopen}/>
     
        {/* {!currentUser && <Link to={'/register'}><button className="mr-4 bg-green-200 px-4 rounded-full text-blk font-poppins font-black text-sm py-2">Sign Up</button></Link>} */}
        {!currentUser && ""}
        
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={open}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 left-0  mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          
          <ul className="list-none flex justify-end items-start flex-1 flex-col -z-50  gap-8">
          <Navlink to='/' name='Home'/>
       
        {currentUser && <Navlink to='/dashboard' name='Dashboard' />}
          <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-base font-bold text-white mx-4">Shop</a>
         {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/pick' name='Register' />}
        <Popover/>
        <Popover2/>
        {currentUser && (
  <Navlink
    to='/logout'
    name='Logout'
    onClick={async e => {
      e.preventDefault()
      await logout()
    }}
  />)}
          </ul>
        </div>
      </div>
    </>
  )
}

function SecondaryNav({setpathopen, pathid, setactive, open, path}) {
 
  const [toggle, setToggle] = useState(false);
  const { logout, currentUser } = useAuth()
 const history = useNavigate()
  return(
    <>
     {/* <h2 onClick={()=>history('/')}  className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2>  */}
     <h3 onClick={setactive} className="md:hidden text-xl font-black text-white tracking-wide">{pathid}</h3>
     {/* <hr className="w-px h-6 bg-white mx-3 md:hidden" />
     <h3 className="text-white"><FaHome/></h3> */}
      <ul className="list-none md:flex hidden justify-between items-center flex-1 px-2 ">
      <div>
      <h2 onClick={()=>history('/')}  className="uppercase text-gray-50 text-2xl  font-poppins font-black tracking-wide hidden lg:flex  "> MEDIK<span className="text-green-200">420</span>  </h2> 
      
      </div>
        <div className="flex self-center items-center">
        <Navlink to='/' name='Home'/>
        <Popover/>
        <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-base font-bold text-white">Shop</a>
        <Popover2/>
        {path != '/jobs' && <Navlink to='/jobs' name='Job Search' />}
        </div>
        <div className="flex">
        {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/pick' name='Register' />}
        {currentUser && <Navlink to='/register' name='Dashboard' />}
        {currentUser && (
  <Navlink
    to='/logout'
    name='Logout'
    onClick={async e => {
      e.preventDefault()
      await logout()
    }}
  />)}
        </div>
       
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">

      <FaUser className="mr-4 text-white" onClick={setpathopen}/>
     
        {/* {!currentUser && <Link to={'/register'}><button className="mr-4 bg-green-200 px-4 rounded-full text-blk font-poppins font-black text-sm py-2">Sign Up</button></Link>} */}
        {!currentUser && ""}
        
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={open}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 left-0  mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          
          <ul className="list-none flex justify-end items-start flex-1 flex-col -z-50  gap-8">
          <Navlink to='/' name='Home'/>
       
        {currentUser && <Navlink to='/dashboard' name='Dashboard' />}
          <a href="https://products-31e31.web.app" target='blank' className="font-poppins text-xl font-bold text-white mx-4">Shop</a>
         {!currentUser && <Navlink to='/login' name='Login' />}
        {!currentUser && <Navlink to='/pick' name='Register' />}
        <Popover/>
        <Popover2/>
        {currentUser && (
  <Navlink
    to='/logout'
    name='Logout'
    onClick={async e => {
      e.preventDefault()
      await logout()
    }}
  />)}
          </ul>
        </div>
      </div>
    </>
  )
}