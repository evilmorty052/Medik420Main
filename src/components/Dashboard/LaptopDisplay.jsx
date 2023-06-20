import { useState, useEffect } from 'react'
import { FaBriefcase, FaComments, FaCreditCard, FaGlobe, FaHome , FaClock, FaMoneyBill, FaChevronRight, FaUserPlus, FaInfoCircle, FaCog, FaBell,  FaLeaf, FaUser, FaGraduationCap, FaUserTie, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { Link, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { DebitCard, NewsTab } from '../../partials/dashboard'
import { wrappedgift , brain, calendar, useroutlined, honeycomb, pipesvg, hemplogo, careerslogo, subscribe} from '../../assets'
import { ClaimModal, RefferalModal, BreakDownModal } from '../InformationModal'
import { Progress , Empty, Avatar} from 'antd'
import Dropdown, { NotificationsDropdown } from '../Dropdown'
import { SmartPortfolio, AnnouncementBanner } from '../../partials/dashboard/Elements'
import { day } from '../../../lib/dayjs'
import DashboardCard03 from "../../partials/dashboard/DashboardCard03"
import {UsePaymentModalContext,} from "../../contexts/PaymentModalContext"

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const LaptopDisplay = ({avatar, logo, name , children , user}) => {
   const [dropDown, setdropDown] = useState(false)

  
   
 function LaptopSidebar({avatar , stashlogo}) {

    const links = [
      {
        name: 'Dashboard',
        icon: <FaHome style={{fontSize: '20px', color: 'white'}}/>,
        to: 'dashboard'
      },
      {
        name: 'Portfolio',
        icon: <FaBriefcase style={{fontSize: '20px', color: 'white'}}/>,
        to: 'dashboard/portfolio'
      },
      {
        name: 'Withdraw',
        icon: <FaCreditCard style={{fontSize: '20px', color: 'white'}}/>,
        to: 'dashboard/withdraw'
      },
      {
        name: 'Hub',
        icon: <FaGlobe style={{fontSize: '20px', color: 'white'}}/>,
        to: 'dashboard/hub'
      },
      {
        name: 'Chat',
        icon: <FaComments style={{fontSize: '20px', color: 'white'}}/>,
        to: 'dashboard/messages'
      },
    ]

   const SideBarLink = ({to, name, icon}) => {
    return(
      <>
      <li>
                <Link to={`/${to}`}>
                <a
                  
                  aria-label="dashboard"
                  class="relative flex items-center justify-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 md:w-[40px] lg:w-[250px] "
                >
                  <span>{icon}</span>
                  <span class="-mr-1 font-medium hidden lg:block text-white flex-1">{name}</span>
                </a>
                </Link>
              </li>
      </>
    )
   }

        return(
          <>
          <aside
          class="fixed top-0 z-[600]  flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-[100px] lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] "
        >
          <div>
            {/* <div class="-mx-6 px-6 py-4">
              <a href="#" title="home">
                <img src={stashlogo} class="w-32" alt="tailus logo" />
              </a>
            </div> */}
      
            <div class="mt-8 text-center">
              <img
                src={avatar}
                alt=""
                class="m-auto h-10 w-10 md:h-12 md:w-12 rounded-full object-cover lg:h-28 lg:w-28"
              />
              <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 lg:block">{name}</h5>
              <span class="hidden text-gray-400 lg:block">Admin</span>
            </div>
      
            <ul class="mt-8 space-y-4 tracking-wide">
               {
                links?.map((link)=>(
                  <SideBarLink 
                    name={link.name}
                    to={link.to}
                    icon={link.icon}/>
                ))
               }
            </ul>
          </div>
      
          <div class="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
            <button class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span class="group-hover:text-gray-700  hidden lg:block">Logout</span>
            </button>
          </div>
        </aside>
          </>
        )
      }
    
      function LaptopHeader({}) {
        const path = useLocation().pathname
        let visibility

        // const handleActive = () => {

        //   switch (path) {
        //     case path.includes('crypto'):
        //     visibility = 'md:hidden'
        //       break;
        
          
        //     default:
        //       visibility = 'md:hidden'
              
        //       break;
        //   }
        //   }
          
        //   useEffect(() => {
        //     handleActive()
        //    }, [path])


        const links = [
          {
            name: 'Dashboard',
            icon: <FaHome style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard'
          },
          {
            name: 'Portfolio',
            icon: <FaBriefcase style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/portfolio'
          },
          {
            name: 'Withdraw',
            icon: <FaCreditCard style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/withdraw'
          },
          {
            name: 'Hub',
            icon: <FaGlobe style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/hub'
          },
          {
            name: 'Digital Farming',
            icon: <FaLeaf style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/digitalfarm'
          },
        ]
        const extralinks = [
          {
            name: 'Chat',
            icon: <FaComments style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/messages'
          },
          {
            name: 'Profile',
            icon: <FaUser style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/portfolio'
          },
          {
            name: 'Coach',
            icon: <FaGraduationCap style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/withdraw'
          },
          {
            name: 'Agents',
            icon: <FaUserTie style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/withdraw'
          },
          {
            name: 'Settings',
            icon: <FaCog style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/withdraw'
          },
          
        ]

        const HeaderLink = ({to, name, icon}) =>{
          return(
          <NavLink  to={`/${to}`} end>
          <li className='flex items-center gap-x-2'>
            <span>{icon}</span>
            <span className={`text-sm`}>{name}</span>
         </li>
          </NavLink>
          )
        }

        return(
          <>
          <div class={`fixed laptopnav z-60 top-0 md:left-0 right-0  border-b shadow-md bg-white h-14 py-2  ${path.includes('setup') || path.includes('crypto') && 'hidden'}`}>
            <div class="flex  items-center justify-between space-x-4 px-6 2xl:container">
              <h5  class="text-[20px] font-black uppercase text-gray-800 lg:block ml-2 ">Medik <span className='text-green-300'>420</span></h5>
               <div className='relative '>
               <ul className='flex flex-1 gap-x-8 pl-4'>
                 {links.map((link, index)=>{
                  return(
                    <HeaderLink key={index} to={link.to} name={link.name} icon={link.icon}/>
                  )
                 })}
               <div className='self-center -ml-4'>
               {/* <FaAngleDown onClick={()=> setdropDown(!dropDown)}/> */}
               <Dropdown/>
               </div>
               </ul>
               {/* {
                dropDown &&
                <div className='absolute bg-red-300  -bottom-10 left-0 right-0 px-2 flex items-center transition-all duration-500 ease-in'>
                <motion.ul initial={{x: '-100vh'}} animate={{x:'0'}} transition={{duration: 0.4, ease: 'easeInOut'}} className='flex  flex-1 gap-x-8 pl-2 '>
                   {extralinks.map((link, index)=>{
                    return(
                      <HeaderLink key={index} to={link.to} name={link.name} icon={link.icon}/>
                    )
                   })}
                 </motion.ul>   
                </div>
              } */}
               </div>
               {/* {Header-Rightside} */}

              <div class="flex space-x-4 items-center">   
                {/* <button
                  aria-label="notification"
                  class="h-8 w-8 rounded-xl border bg-gray-100 active:bg-gray-200 flex justify-center items-center"
                >
                  <FaBell/>
                </button> */}
                <NotificationsDropdown notifications={user?.notifications}/>
                {/* <FaComments/> */}
                {/* <button
                  aria-label="notification"
                  class="h-8 w-8 rounded-xl border bg-gray-100 active:bg-gray-200 flex justify-center items-center "
                >
                <FaCog/>
                </button> */}
                {/* <div className='max-w-[14ch] '>
                <h3 className='text-[14px] font-space font-semibold  truncate '>{user?.firstname}{" "}{user?.lastname}</h3>
                </div> */}
              </div>
            </div>
          </div>
          </>
        )
      }
    
      function DisplayArea({children}) {
        return(
          <>
            <div class="pt-[68px]  md:container w-10  md:mx-auto">
            {
              children
            }
          </div>
          </>
        )
      }


   


  return (
   
        <>
        <body class="min-h-screen bg-white overflow-y-scroll "> 
     {/* <LaptopSidebar avatar={people01} stashlogo={logo}/> */}
      <LaptopHeader/>
        <DisplayArea  >
           {children}
        </DisplayArea>
    </body>
        </>
      )
  
}

export function NewNav(){
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        setNavbarBg('bg-white');
      } else {
        setNavbarBg('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return(
    <header className="md:flex hidden laptopnav sticky top-0 flex-wrap md:justify-start md:flex-nowrap z-50 w-full  text-sm  md:py-0   ">
  <nav className={`max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8  py-2 ${navbarBg}`} aria-label="Global">
    <div className="relative md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        {/* logo */}
        <h2 onClick={()=>history('/')}  className="uppercase  text-blk text-lg  font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2> 
        {/* <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
      </div>

      <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
        <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
          <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row  md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid ">
            <NavLink className="font-medium   " to={'/'} aria-current="page">Home</NavLink>

            <NavLink className="font-medium text-gray-500 hover:text-gray-400 " to="/smart">
              Investing
            </NavLink>
            
            <a className="font-medium text-gray-500 hover:text-gray-400  " >
              Shopping
            </a>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] ">
              <button type="button" class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium ">
                Explore
                <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex flex-col mx-1 md:mx-0">
                    <NavLink className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 " to={'/digital'}>
                      {/* <svg className="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                      </svg> */}
                      <img className="flex-shrink-0 w-6 h-6 mt-1" src={hemplogo} />
                      <div class="grow">
                        <p className="font-medium text-gray-800 ">Digital Farming</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 ">Passive income with Digital Farming.</p>
                      </div>
                    </NavLink>

                    <NavLink className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 " to={'/hive'}>
                      {/* <svg className="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                      </svg> */}
                      <img className="flex-shrink-0 w-6 h-6 mt-1" src={honeycomb} />
                      <div className="grow">
                        <p className="font-medium text-gray-800 ">One Hive</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 ">Learn about one hive and its benefits.</p>
                      </div>
                    </NavLink>

                    <NavLink className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4  dark:hover:bg-gray-900" to="/jobs">
                      {/* <svg className="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
                      </svg> */}
                      <img className="flex-shrink-0 w-6 h-6 mt-1" src={careerslogo} />
                      <div className="grow">
                        <p className="font-medium text-gray-800 ">Careers</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 ">Join an evergrowing remote first team of highly skilled employees.</p>
                      </div>
                    </NavLink>
                  </div>

                  <div class="flex flex-col mx-1 md:mx-0">
                    <NavLink className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 "  to={'/team'}>
                      <svg className="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                      </svg>
                      <div className="grow">
                        <p className="font-medium text-gray-800 ">Medik 420</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 ">Learn about Medik 420 team.</p>
                      </div>
                    </NavLink>

                    <NavLink className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 " to="/pricing">
                      {/* <svg className="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                      </svg> */}
                      <img className="flex-shrink-0 w-6 h-6 mt-1" src={subscribe} />
                      <div className="grow">
                        <p className="font-medium text-gray-800 ">Pricing</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 ">Transparent pricing for premium features.</p>
                      </div>
                    </NavLink>

                    <NavLink className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 " to={'/bem'}>
                      {/* <svg className="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                      </svg> */}
                      <img className="flex-shrink-0 w-6 h-6 mt-1" src={pipesvg} />
                      <div className="grow">
                        <p className="font-medium text-gray-800 ">Pipe Funding</p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 ">Turn future revenue into up front capital with pipe funding.</p>
                      </div>
                    </NavLink>
                  </div>

                  <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                    <span className="text-sm font-semibold uppercase text-gray-800 ">A.I Training</span>

                    <a className="mt-4 group flex gap-x-5 items-center" >
                      <img className="w-32 h-32 rounded-lg" src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80" alt="Image Description"/>
                      <div className="grow">
                        <p className="text-gray-800 ">Learn how you can start earning by simply recording your day.</p>
                        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
                          Learn more
                          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                          </svg>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to={"/register"} className="font-medium text-gray-500 hover:text-gray-400 ">
              Join us
            </NavLink>

            <div class="md:pt-0">
              <NavLink to={'/login'} className="inline-flex justify-center items-center gap-x-2 text-center bg-green-300 hover:bg-green-700 border border-transparent text-white text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition px-3 " >
                {/* <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg> */}
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
  )
}

export function LargeHeader({user}) {
  const [dropDown, setdropDown] = useState(false)
  const [active, setactive] = useState(null)

  const path = useLocation().pathname
  let visibility


  const links = [
    {
      name: 'Dashboard',
      icon: <FaHome style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard'
    },
    {
      name: 'Portfolio',
      icon: <FaBriefcase style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/portfolio'
    },
    {
      name: 'Withdraw',
      icon: <FaCreditCard style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/withdraw'
    },
    {
      name: 'Hub',
      icon: <FaGlobe style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/hub'
    },
    {
      name: 'Digital Farming',
      icon: <FaLeaf style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/digitalfarm'
    },
  ]
  const extralinks = [
    {
      name: 'Farming',
      icon: <FaLeaf style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard'
    },
    {
      name: 'Profile',
      icon: <FaUser style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/portfolio'
    },
    {
      name: 'Coach',
      icon: <FaGraduationCap style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/withdraw'
    },
    {
      name: 'Agents',
      icon: <FaUserTie style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/withdraw'
    },
    {
      name: 'Settings',
      icon: <FaCog style={{fontSize: '16px', color: 'gray'}}/>,
      to: 'dashboard/withdraw'
    },
    
  ]

  const HeaderLink = ({to, name, icon}) =>{
    
    return(
    <NavLink   to={`/${to}`} end>
    <li className='flex items-center gap-x-2'>
      <span>{icon}</span>
      <span className={`text-sm ${active?.toLowerCase().includes(name?.toLowerCase()) && 'text-green-300'}`}>{name}</span>
   </li>
    </NavLink>
    )
  }

  const handleActive = () => {

  switch (path) {
    case path.includes('crypto'):
    visibility = 'md:hidden'
      break;

  
    default:
      visibility = 'md:hidden'
      
      break;
  }
  }
  
  useEffect(() => {
    handleActive()
   }, [path])
  

  return(
    <>
    <div class={`hidden laptopnav md:block fixed  z-60 top-0 md:left-0 right-0  border-b shadow-md bg-white h-14 py-2   ${visibility}`}>
      <div class="flex  items-center justify-between space-x-4 px-6 2xl:container">
        <h5  class="text-[20px] font-black uppercase text-gray-800 lg:block ml-2 ">Medik <span className='text-green-300'>420</span></h5>
         <div className='relative '>
         <ul className='flex flex-1 gap-x-8 pl-4'>
           {links.map((link, index)=>{
            return(
              <HeaderLink key={index} to={link.to} name={link.name} icon={link.icon}/>
            )
           })}
         <div className='self-center -ml-4'>
         {/* <FaAngleDown onClick={()=> setdropDown(!dropDown)}/> */}
         <Dropdown/>
         </div>
         </ul>
         </div>
         {/* {Header-Rightside} */}

        <div class="flex space-x-4 items-center">   
          {/* <button
            aria-label="notification"
            class="h-8 w-8 rounded-xl border bg-gray-100 active:bg-gray-200 flex justify-center items-center"
          >
            <FaBell/>
          </button> */}
          <NotificationsDropdown notifications={user?.notifications}/>
          {/* <FaComments/> */}
          {/* <button
            aria-label="notification"
            class="h-8 w-8 rounded-xl border bg-gray-100 active:bg-gray-200 flex justify-center items-center "
          >
          <FaCog/>
          </button> */}
          {/* <div className='max-w-[14ch] '>
          <h3 className='text-[14px] font-space font-semibold  truncate '>{user?.firstname}{" "}{user?.lastname}</h3>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export function LargeSidebar({avatar , stashlogo, posting, setposting, firstname, lastname}) {

  const links = [
    {
      name: 'Dashboard',
      icon: <FaHome style={{fontSize: '20px', }}/>,
      to: 'dashboard'
    },
    {
      name: 'Portfolio',
      icon: <FaBriefcase style={{fontSize: '20px', }}/>,
      to: 'dashboard/portfolio'
    },
    {
      name: 'Withdraw',
      icon: <FaCreditCard style={{fontSize: '20px', }}/>,
      to: 'dashboard/withdraw'
    },
    {
      name: 'Hub',
      icon: <FaGlobe style={{fontSize: '20px',  color: 'steelblue'}}/>,
      to: 'dashboard/hub'
    },
    // {
    //   name: 'Chat',
    //   icon: <FaComments style={{fontSize: '20px', }}/>,
    //   to: 'dashboard/messages'
    // },
  ]

 const SideBarLink = ({to, name, icon}) => {
  return(
    <>
    <li>
              <Link to={`/${to}`}>
              <a
                
                aria-label="dashboard"
                class="group hover:bg-green-300 transition-all ease-in duration-500  relative flex items-center justify-center space-x-4 rounded-xl  px-4 py-3 md:w-[40px] lg:w-full"
              >
                <span className='text-blk'>{icon}</span>
                <span class=" -mr-1 font-medium hidden lg:block text-blk flex-1">{name}</span>
              </a>
              </Link>
            </li>
    </>
  )
 }

 const PostButton = () => {
  const [hidden, sethidden] = useState(false)
  
  return (
     <>
    
     <div className="postButton_container hidden   py-4 md:flex flex-col gap-y-4">
      <Link to={'/dashboard/hub/post'}  className="postButton h-12 w-12 rounded-full bg-green-300 p-2 ">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="w-full "
        >
          <g>
            <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
          </g>
        </svg>
      </Link>
    </div>
     </>
  );
}

      return(
        <>
        <aside
        class="  top-0 z-[6]  flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 sm:w-[100px] lg:w-[250px]   "
      >
        <div>
          {/* <div class="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img src={stashlogo} class="w-32" alt="tailus logo" />
            </a>
          </div> */}
    
          <div class="mt-8 text-center">
            {/* <img
              src={avatar}
              alt=""
              class="m-auto h-10 w-10 md:h-12 md:w-12 rounded-full object-cover lg:h-28 lg:w-28"
            /> */}
           
           <div className='flex justify-center lg:hidden'>
               {/* <div>
               <Avatar
              src={avatar}
              alt=""
              size={60}
            />
               </div> */}
                <div className="h-[50px] w-[50px] grid place-content-center rounded-full bg-rose-400">
                  <div className="flex gap-x-1">
                  <span className="text-base font-black uppercase">{firstname}</span>
                  <span className="text-base font-black uppercase">{lastname}</span>
                  </div>
               </div>
             </div>

           <div className='lg:flex justify-center hidden '>
               {/* <div>
               <Avatar
              src={avatar}
              alt=""
              size={80}
            />
               </div> */}
               <div className="h-20 w-20 grid place-content-center rounded-full bg-rose-400">
                  <div className="flex gap-x-2">
                  <span className="text-2xl font-black uppercase">{firstname}</span>
                  <span className="text-2xl font-black uppercase">{lastname}</span>
                  </div>
               </div>
             </div>
             
            <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 ">{name}</h5>
            <div className='truncate hidden max-w-[30ch]'>
            <span class="text-[10px] hidden fonst-semibold text-gray-400  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit laudantium asperiores magnam eaque dolores sapiente, molestiae minus saepe dolorem porro veritatis blanditiis aliquam modi. Quaerat laboriosam asperiores numquam a.</span>
            </div>
          </div>
    
          <ul class="mt-8 space-y-4 tracking-wide pl-1">
             {
              links?.map((link)=>(
                <SideBarLink 
                  name={link.name}
                  to={link.to}
                  icon={link.icon}/>
              ))
             }
             <div className=' lg:pl-2'>
             <PostButton/>
             </div>
          </ul>
        </div>
    
        <div class="-mx-6 flex items-center justify-between  px-6 pt-4  ">
          <button class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="group-hover:text-gray-700  hidden ">Exit Hive</span>
          </button>
          
        </div>
      </aside>
        </>
      )
    }

export  function LaptopDashboard ({user}) {
  const [claim , setClaim] = useState()
  const [breakDown, setbreakDown] = useState()
  const [referral, setReferral] = useState()
  const [hidden, setHidden] = useState()

  const {invisible, setInvisible, setPaymentHeader, setPaymentText, setActionsModal, setSubscriptionModal} = UsePaymentModalContext();

  const accounts = user?.accounts?.map((account)=>{
    return{
      ...account,
      accountname: account.type
    }
  })

  const personalAccount = accounts?.filter((account)=>{
    return account.type == 'Personal'
  })

  const smartPortfolio = accounts?.filter((account) => {
    return account.type == 'Smart'
})


  const Infobutton = ({func}) => {
    return (
      <>
        <button onClick={func} className=''>
            <a className='text-gray-500 '>
            <FaInfoCircle style={{fontSize: '14px'}}/>
            </a>
        </button>
      </>
    );
}

  const GiftCard = () => {
    return(
        <>
        
<div class="max-w-2xl min-w-[672px] p-6 bg-white border border-gray-200 rounded-lg shadow  relative ">
{/* <svg class="w-10 h-10 mb-2 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
<div className='w-14 h-14 mb-2'>
    <img src={wrappedgift} className={'w-full heartbeat'} />
</div>
<a href="#">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Claim 10 $</h5>
</a>
<p class="mb-3 font-normal text-gray-500 "> Get $10 To kickstart Your investment journey</p>
<a onClick={()=> setClaim(true)} class="inline-flex items-center text-blue-600 hover:underline">
    Claim Now
    <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
</a>
</div>

        </>
    )
}

const LatestTransactions = ({transactions}) => {
  const [showtransactions, setshowtransactions] = useState(true)

  const Handlestatus = (type) => {
    let icon

    if (type == 'deposit'){
        icon = <span className='text-green-400'><FaArrowDown/></span>
    }

    else if (type == 'withdrawal'){
        icon = <span className='text-rose-400'><FaArrowUp/></span>
    }

        return(
            <>
            {icon}
            </>
        )
    }

    const handleTime = (time) => {
      const createdAt = time;
      const parsedCreatedAt = day(createdAt);
      const timeAgo = parsedCreatedAt?.fromNow();
      return(
          <>
          {timeAgo}
          </>
      )
  }
      return(
          <>
          
<div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  md:min-w-[700px] max-w-2xl">
  <div class="flex items-center justify-between mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 ">Transactions</h5>
      <a onClick={()=> setshowtransactions(!showtransactions)} class="text-sm font-medium text-blue-600 hover:underline ">
          {!showtransactions ? "View" : 'Hide'}
      </a>
 </div>
{ showtransactions &&
 <div class="flow-root transition-all duration-500">
      <ul role="list" class="divide-y divide-gray-200 ">
          {transactions?.map((transaction)=>{
              return(
                  <>
                  <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                      {Handlestatus(transaction.type)}
                  </div>
                  <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {transaction.sendername}
                      </p>
                      <p class="text-sm text-gray-500 truncate ">
                         {handleTime(transaction.created)}
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      {formatter.format(transaction.amount)}
                  </div>
              </div>
          </li>
                  </>
              )
          })}
          
      </ul>
 </div>}
</div>

          </>
      )
  }

  const TotalReturns = () => {
    return(
        <>
            <div className=''>
            <div className='flex flex-col gap-y-4 bg-gray-200  p-4 sm:p-6 rounded-md md:min-w-[673px]'>
                  <div className=''>
                       <h3 className='text-base sm:text-2xl text-gray-800 font-semibold mb-2'>Total Returns</h3>
                  </div>
                  <div className='flex gap-x-8 sm:gap-x-40'>
                       <div >
                            <span className='text-base sm:text-xl text-gray-700 font-semibold'>Portfolio Return</span>
                             <div className='py-2'>
                             <p className='text-lg  sm:text-2xl tracking-wide '>+0.00 <span>{`(+ 0.00%)`}</span></p>
                             </div>
                       </div>
                       <div>
                            <span className='text-base sm:text-xl text-gray-700 font-semibold'>Amount Invested</span>
                             <div className='py-2'>
                             <p className='text-lg sm:text-2xl tracking-wide '>0.00 </p>
                             </div>
                       </div>
                  </div>
            </div>
            </div>
        </>
    )
}

const Outstandings = () => {
  return(
    <>
    <div className='container max-w-[700px] space-y-8 py-4'>
         <div className='flex justify-between pb-4 border-b border-gray-800'>
                  <div className='flex gap-x-2 items-center'>
                     {/* <span className='text-xl'><FaMoneyBill /></span> */}
                     <img src={useroutlined} alt="" className='h-10 w-10' />
                     <p className='sm:text-[24px] text-gray-800 font-semibold'>Personal Portfolio</p>
                  </div>
                  <div>
                      <p className='text-base sm:text-xl font-semibold text-gray-800'>{formatter.format(personalAccount?.[0].balance)}</p>
                  </div>
         </div>
         <div className='flex justify-between pb-4 border-b border-gray-800'>
                  <div className='flex gap-x-2 items-center'>
                      {/* <span className='text-xl'><FaMoneyBill /></span> */}
                      <img src={brain} alt="" className='h-10 w-10' />
                      <p className='sm:text-[24px] text-gray-800 font-semibold'>Smart Portfolio</p>
                  </div>
                  <div>
                      <p className='text-base sm:text-xl font-semibold text-gray-800'>{formatter.format(smartPortfolio?.[0].balance)}</p>
                  </div>
         </div>
        
         <div className='flex justify-between pb-4 border-b border-gray-800'>
                  <div className='flex gap-x-2 items-center'>
                  <img src={calendar} alt="" className='h-10 w-10' />
                     <p className='sm:text-[24px] text-gray-800 font-semibold'>Unsettled Investments</p>
                  </div>
                  <div>
                      <p className='text-base sm:text-xl font-semibold text-gray-800'>$0.00</p>
                  </div>
         </div>
    </div>
    </>
  )
}

const Performance = () =>{

  function performanceInfo(params) {
      setquestion(explainers.portfolioBalance.question)
      setanswer(explainers.portfolioBalance.answer)
      setshowInfo(true)
  }

  return(
      <>
   <div className='bg-gray-200 rounded-lg p-4'>
       <div className='mb-4'>
           <h3 className='text-lg font-semibold text-gray-800'>How Balanced Is Your Portfolio ? <span><Infobutton func={performanceInfo}/></span></h3>
           <p className='text-sm text-gray-700'>No investment activity</p>
      </div>
   <div>
    <div className='flex justify-between'>
       <span className='text-xs text-gray-700 font-semibold'>Less balanced</span>
       <span className='text-xs text-gray-700 font-semibold'>More balanced</span>
    </div>
   <Progress trailColor='gray' showInfo={false} type='line'/>
   <p className='text-xs'>Portfolio diversification is something you always need to maintain. We can help you get closer to your ideal balance.</p>

   <div className='py-4'>
   <button onClick={()=> setbreakDown(true)}  className='py-2 px-4 rounded-3xl bg-green-300 shadow-md focus:bg-green-500 transition-all duration-500 ease-in'>
       See my breakdown
   </button>
   </div>
   </div>
       </div>
      </>
  )
}

// const RecentInvestments = ({investments}) => {

//   const InvestmentActivity = ({name, amount, avatar, status}) => {
//       return(
//         <>
//          <li class="py-3 sm:py-4">
//                   <div class="flex items-center space-x-4">
//                       <div class="flex-shrink-0">
//                           <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
//                       </div>
//                       <div class="flex-1 min-w-0">
//                           <p class="text-sm font-medium text-gray-900 truncate ">
//                               {name}
//                           </p>
//                           <p class="text-sm text-gray-500 truncate ">
//                               {status}
//                           </p>
//                       </div>
//                       <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
//                           {formatter.format(amount)}
//                       </div>
//                   </div>
//               </li>
//         </>
//       )
//     }
   
//   return(
//       <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
//       <div class="flex items-center justify-between mb-4">
//           <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
//           <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//           <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
//               <span class="sr-only">Open dropdown</span>
//               <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
//           </button>
//           </a>
//      </div>
//      <div  class="flow-root my-4">
//           <ul  role="list" class="divide-y divide-gray-200 ">
//                {investments?.map((investment)=>{
//         return(
//           <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
//         )
//        })}
//           </ul>
//      </div>
//      <div className="">
//          <div>
//              <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
//              <p className="text-2xl font-bold text-gray-800">$0.00</p>
//          </div>
//      </div>
//   </div>
//   )
// }

const RecentInvestments = ({investments}) => {

  const InvestmentActivity = ({name, amount, avatar, status}) => {
      return(
        <>
         <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                              {name}
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                              {status}
                          </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          {formatter.format(amount)}
                      </div>
                  </div>
              </li>
        </>
      )
    }
   
  return(
      <div class="w-full max-w-2xl p-4 bg-[#f9f8f8] border border-gray-200 rounded-lg shadow-xl sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
          <Infobutton/>
     </div>
     <div  class="flow-root my-4">
          <ul  role="list" class="divide-y divide-gray-200 ">
               {investments?.map((investment)=>{
        return(
          <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
        )
       })}
          </ul>
     </div>
     <div className="">
         <div>
             <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
             <p className="text-2xl font-bold text-gray-800">$0.00</p>
         </div>
     </div>
  </div>
  )
}

const Refferal = () => {
  return(
      <>
        <div className='bg-gray-200 p-4 rounded-lg md:min-w-[673px] '>
            <div onClick={()=> setReferral(true)} className='flex items-center gap-x-4'>
                 <a className='text-xl' ><FaUserPlus/></a>
                   <div className='flex flex-1 justify-between items-center '>
                       <div className=''>
                       <h3 className='text-lg font-semibold text-gray-800'>Invite A Friend</h3>
                       <p>Boost your portfolio up to $500</p>
                       </div>
                       <a className='text-gray-600'> <FaChevronRight/></a>
                   </div>    
                </div>      
            </div>
      </>
  )
}

// const DigitalFarms = ({investments}) => {

//   const NoData = () => {
//       return(
//           <>
//              <h3>No Farms</h3>
//           </>
//       )
//   }

//   const InvestmentActivity = ({name, amount, avatar, status}) => {
//       return(
//         <>
//          <li class="py-3 sm:py-4">
//                   <div class="flex items-center space-x-4">
//                       <div class="flex-shrink-0">
//                           <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
//                       </div>
//                       <div class="flex-1 min-w-0">
//                           <p class="text-sm font-medium text-gray-900 truncate ">
//                               {name}
//                           </p>
//                           <p class="text-sm text-gray-500 truncate ">
//                               {status}
//                           </p>
//                       </div>
//                       <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
//                           {formatter.format(amount)}
//                       </div>
//                   </div>
//               </li>
//         </>
//       )
//     }
   
//   return(
//       <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
//       <div class="flex items-center justify-between mb-4">
//           <h5 class="text-xl font-bold leading-none text-gray-900 ">Digital Farms <span><Infobutton/></span></h5> 
//           <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//           <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
//               <span class="sr-only">Open dropdown</span>
//               <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
//           </button>
//           </a>
//      </div>
//      <div  class="flow-root my-4">
//           <ul  role="list" class="divide-y divide-gray-200 ">
//            <>
//            {investments ?
//              <>
//                 {investments?.map((investment)=>{
//         return(
//           <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
//         )
//        })}
//             </>
//              :
//               <Empty description={<NoData/>}/>
//             }
//            </>
//           </ul>
//      </div>
//      <div className="">
//          <div>
//              <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
//              <p className="text-2xl font-bold text-gray-800">$0.00</p>
//          </div>
//      </div>
//   </div>
//   )
// }

const DigitalFarms = ({investments}) => {

  const NoData = () => {
      return(
          <>
             <h3>No Farms</h3>
          </>
      )
  }

  const InvestmentActivity = ({name, amount, avatar, status}) => {
      return(
        <>
         <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                              {name}
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                              {status}
                          </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          {formatter.format(amount)}
                      </div>
                  </div>
              </li>
        </>
      )
    }
   
  return(
      <div class="w-full max-w-2xl p-4 bg-[#f9f8f8] border border-gray-200 rounded-lg  shadow-xl sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Digital Farms </h5> 
          <Infobutton/>
     </div>
     <div  class="flow-root my-4">
          <ul  role="list" class="divide-y divide-gray-200 ">
           <>
           {investments ?
             <>
                {investments?.map((investment)=>{
        return(
          <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
        )
       })}
            </>
             :
              <Empty description={<NoData/>}/>
            }
           </>
          </ul>
     </div>
     <div className="">
         <div>
             <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
             <p className="text-2xl font-bold text-gray-800">$0.00</p>
         </div>
     </div>
  </div>
  )
}

const RecentNews = () => {
  return(
      <>
      {/* <!-- Card Blog --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
{/* <!-- Title --> */}
<div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
  <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Recent News</h2>
  <p class="mt-1 text-gray-600 text-lg ">Stay in the know with insights and latest news from Medik 420.</p>
</div>
{/* <!-- End Title --> */}

{/* <!-- Grid --> */}
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* <!-- Card --> */}
  <a class="group rounded-xl overflow-hidden" href="#">
    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://cdn.sanity.io/images/noj3nhym/production/d6c8ee27b9150eb19feb9ca7a52a20ae608aacdd-724x992.png" alt="Image Description"/>
      {/* <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 ">
        Sponsored
      </span> */}
    </div>

    <div class="mt-7">
      <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
         Digital Farming 2.0 is here.
      </h3>
      <p class="mt-3 text-gray-800 ">
        With the new updates to digital farming users can now schedule auctions with the auto sell feature.
      </p>
      {/* <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
        Read more
        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </p> */}
    </div>
  </a>
  {/* <!-- End Card --> */}

  {/* <!-- Card --> */}
  <a class="group rounded-xl overflow-hidden" href="#">
    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://cdn.sanity.io/images/noj3nhym/production/ca85adece4ea58749d662e3235a554a0878590e6-687x1031.png" alt="Image Description"/>
    </div>

    <div class="mt-7">
      <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
      Pipe funding now Available in Europe
      </h3>
      <p class="mt-3 text-gray-800 ">
        Good news European users!, pipe funding is now available everywhere in Europe with full functionality.
      </p>
      {/* <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
        Read more
        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </p> */}
    </div>
  </a>
  {/* <!-- End Card --> */}

  {/* <!-- Card --> */}
  <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')]" href="#">
    <div class="flex-auto p-4 md:p-6">
      <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">Medik 420</span> Digital Farming NFT in the works.</h3>
    </div>
    <div class="pt-0 p-4 md:p-6">
      <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
        Free for all digital farm owners.
        {/* <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg> */}
      </div>
    </div>
  </a>
  {/* <!-- End Card --> */}
</div>
{/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
      </>
  )
}

  return(
   <>
     <div>
     <div className='  container  flex flex-col items-center gap-y-14 mx-auto min-h-screen overflow-y-scroll max-w-[1080px] pb-20 '>
      <AnnouncementBanner hidden={hidden} setHidden={setHidden}/>
          <div className={`${!hidden ? "pt-[54px] " : ""}flex gap-x-8 items-center `}>
          <DebitCard func={()=> setActionsModal(true)} firstname={user?.firstname} lastname={user?.lastname} amount={personalAccount?.[0].balance} />
          <SmartPortfolio func={()=> setActionsModal(true)} amount={smartPortfolio?.[0].balance}/>
        </div>
          <LatestTransactions transactions={user?.transactions} />
          <RecentInvestments investments={user?.investments}/> 
          {/* <DashboardCard03 plan={user?.plan} /> */}
          <DigitalFarms/>
        {!user?.claimed && <GiftCard/>}
        <Outstandings/>
        <TotalReturns/>
        <Performance/>
        <Refferal/>
        <RecentNews/>
      </div>
      <ClaimModal modal={claim} setmodal={setClaim}/>
      <BreakDownModal modal={breakDown} setmodal={setbreakDown}/>
      <RefferalModal modal={referral} setmodal={setReferral}/>
     </div>
   </>
  )
}


export default LaptopDisplay