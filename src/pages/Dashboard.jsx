import React, { useState , useRef} from 'react';
import Sidebar from '../partials/Sidebar2';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

import DashboardCard13 from '../partials/dashboard/DashboardCard13';

import Tabs from './Aboutus';
import Agents from '../partials/dashboard/AgentCard';
// import { getsanityuser } from './Loginpage';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { client, urlFor } from '../../lib/client';
import Loader from '../components/Loader';
import cbd from '../assets/airbnb.png'
import pattern from '../assets/pattern.png'
import stashlogo from '../assets/stashlogo.png'
import { FaPlusCircle } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';


function Dashboard() {
  const history = useNavigate()
  const emailID = localStorage.getItem('email')
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;

 let notifications = user && user[0].notifications 
//  let preview = notifications && notifications.reverse()
let unread = notifications?.filter((msg)=>{
  return(
    msg.read !== true
  )
 })



  const [sidebarOpen, setSidebarOpen] = useState(false);
if(!user){
  return (
    <Loader/>
  )
}
  return (
    <>
      {
        <div
          onClick={() => {
            sidebarOpen && setSidebarOpen(false);
          }}
          className="flex lg:hidden h-screen overflow-hidden bg-plat pb-[73px]"
        >
          {/* Sidebar */}
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            avatar={user[0].avatar && urlFor(user[0].avatar)}
          />

          {/* Content area */}
          <div className="lg:hidden relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
            {/*  Site header */}
            <div>
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                name={user[0].firstname}
                notifications={user[0].notifications && notifications}
                // unread={unread}
                avatar={user[0].avatar ? `${urlFor(user[0].avatar)}` : cbd}
              />
            </div>

            {/* {Mobile display} */}
            <main>
              <div className=" sm:hidden lg:px-8 py-8 w-full max-w-9xl mx-auto element-1">
                {/* Welcome banner */}
                <div className="hidden sm:w-full sm:grid gap-x-5  grid-cols-2 ">
                  <div className="self-center pt-10">
                    <WelcomeBanner
                      name={user[0].firstname}
                      text="Here's Your Daily Breakdown"
                    />
                  </div>
                  <div className="">
                    <Tabs />
                  </div>
                </div>
                <div onClick={() => history("#kk")} className="sm:hidden px-4">
                  <WelcomeBanner
                    name={user[0].firstname}
                    text="Here's Your Daily Breakdown"
                  />
                </div>
                {/* Dashboard actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">
                  {/* Left: Avatars */}
                  {/* <DashboardAvatars /> */}

                  {/* Right: Actions */}
                  <div className="grid grid-flow-col sm:auto-cols-max justify-center sm:justify-end gap-2">
                    {/* <h3 className='text-xl  font-medium '>Hi {user?.[0].firstname}</h3>     */}
                  </div>
                  <div className=" w-full  flex gap-8 flex-col sm:flex sm:flex-row sm:items-start">
                    <div className="mx-auto">
                      <Card
                        firstname={user?.[0].firstname}
                        lastname={user?.[0].lastname}
                      />
                    </div>
                    <div className="px-4 sm:self-center sm:hidden md:hidden mt-4">
                      <Tabs />
                    </div>
                    <div className=" px-4 sm:hidden md:hidden">
                      <Agents />
                    </div>
                  </div>
                </div>
                {/* <div  className="grid grid-cols-12 gap-6 px-4">
          <DashboardCard01 earnings={user[0].earnings} />
          <DashboardCard02 investment={user[0].investment}/>
          <DashboardCard03 plan={user[0].plan}/>
          <DashboardCard14 text='Hive' amount='100' icon={<FaPlusCircle/>}/>
        </div> */}

                <div id="kk" className="grid grid-cols-12 gap-6 px-4 mt-4">
                  <DashboardCard13 />
                </div>
              </div>
              <Navigation/>
            </main>
            {/* {Tab display} */}

            <main>
              <div className=" hidden sm:block lg:hidden sm:px-8 py-8 w-full max-w-9xl mx-auto element-1">
                {/* Welcome banner */}
                <div className="hidden sm:w-full sm:grid gap-x-5 mb-8">
                  <WelcomeBanner
                    name={user[0].firstname}
                    text="Here's Your Daily Breakdown"
                  />
                </div>
                <div className=" flex justify-center mb-4 ">
                  <div>
                  <Card
                    firstname={user?.[0].firstname}
                    lastname={user?.[0].lastname}
                  />
                  </div>
                </div>
                <div className="w-full flex justify-center mb-4 ">
                  <div  className='mx-auto'>
                  <Tabs />
                  </div>
                </div>
                {/* Dashboard actions */}
                {/* <div className="sm:flex sm:justify-between sm:items-center mb-8">
                  
                  <div className="grid grid-flow-col sm:auto-cols-max justify-center sm:justify-end gap-2">
       
                  </div>
                  <div className=" w-full  flex gap-8 flex-col sm:flex sm:flex-row sm:items-start"></div>
                </div> */}
                <div id="kk" className="grid grid-cols-12 gap-6 mt-4">
                  <DashboardCard13 />
                </div>
              </div>
            </main>

             {/* {Laptop display} */}
         

            {/* <Banner /> */}
          </div>
        </div>
      }
      <div className='hidden lg:block'>
      <LaptopDisplay logo={stashlogo} avatar={user[0] &&  urlFor(user[0].avatar)}
       name={user[0]?.firstname }
       lastname= {user[0]?.lastname}/>
      </div>
   
    </>
  );
}

function Navigation  () {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" },
    { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
    { name: "Dashboard", icon: "chatbubble-outline", dis: "translate-x-32" },
    { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
    { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(2);
  return (
    <div className="bg-white max-h-[4.4rem] min-w-[339px] px-6 mt-10 fixed bottom-0 w-full sm:hidden rounded-t-xl">
      <ul className="flex relative">
        <span
          className={`bg-green-300 duration-500  ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col items-center justify-center text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-white"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


// function BottomNav(params) {
//   const Menus = [
//     { name: "Home", icon: "home-outline", dis: "translate-x-0" },
//     { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
//     { name: "Dashboard", icon: "chatbubble-outline", dis: "translate-x-32" },
//     { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
//     { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
//   ];
//   const [active, setActive] = useState(0);

//   return(
//     <>
//     <div className='bg-gray-100 fixed bottom-0 w-full h-[73px] p-2'>
//       <ul className='flex gap-x-2 justify-center'>
//         {Menus.map((menu)=>{
//           return(
//           <li className='flex flex-col items-center'>
//            <ion-icon name={menu.icon}></ion-icon>
//            <span>{menu.name}</span>
//           </li>
//           )
//         })}
//       </ul>
//     </div>
//     </>
//   )
// }

export default Dashboard;





function LaptopDisplay({avatar,  name, lastname, logo}) {
  
  return(
    <>
    <body class="bg-gray-100 dark:bg-gray-900 h-screen ">
 <LaptopSidebar avatar={avatar} stashlogo={logo}/>

  <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <LaptopHeader/>
    <DisplayArea  name={name} lastname={lastname}/>
  </div>
</body>
    </>
  )
  
                                    
}

function LaptopSidebar({avatar , stashlogo}) {
  return(
    <>
    <aside
    class="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-slate-400 px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
  >
    <div>
      <div class="-mx-6 px-6 py-4">
        <a href="#" title="home">
          <img src={stashlogo} class="w-32" alt="tailus logo" />
        </a>
      </div>

      <div class="mt-8 text-center">
        <img
          src={avatar}
          alt=""
          class="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
        />
        <h5 class="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">{name}</h5>
        <span class="hidden text-gray-400 lg:block">Admin</span>
      </div>

      <ul class="mt-8 space-y-2 tracking-wide">
        <li>
          <a
            href="#"
            aria-label="dashboard"
            class="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
          >
            <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                class="dark:fill-slate-600 fill-current text-cyan-400"
              ></path>
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                class="fill-current text-cyan-200 group-hover:text-cyan-300"
              ></path>
              <path
                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                class="fill-current group-hover:text-sky-300"
              ></path>
            </svg>
            <span class="-mr-1 font-medium">Dashboard</span>
          </a>
        </li>
        <li>
          <Link
             to={'/dashboard/portfolio'}
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
              />
            </svg>
            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Portfolio</span>
          </Link>
        </li>
        <li>
          <a
            href="#"
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
              />
            </svg>
            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Withdraw</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
              />
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
              />
            </svg>
            <span class="group-hover:text-gray-700 dark:group-hover:text-gray-50">Agents</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                class="fill-current text-gray-300 group-hover:text-cyan-300"
                d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
              />
              <path
                class="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                fill-rule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="group-hover:text-gray-700 dark:group-hover:text-white">Coach</span>
          </a>
        </li>
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
        <span class="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
      </button>
    </div>
  </aside>
    </>
  )
}

function LaptopHeader(params) {
  return(
    <>
    <div class="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
      <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
        <h5 hidden class="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
        <button class="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div class="flex space-x-4 items-center">
       
          <div hidden class="md:block">
            <div class="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span class="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  class="w-4 fill-current"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                class="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
          </div>
   
          <button
            aria-label="search"
            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <svg
              xmlns="http://ww50w3.org/2000/svg"
              class="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
              viewBox="0 0 35.997 36.004"
            >
              <path
                id="Icon_awesome-search"
                data-name="search"
                d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
              ></path>
            </svg>
          </button>
          <button
            aria-label="chat"
            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </button>
          {/* <button
            aria-label="notification"
            class="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
              />
            </svg>
          </button> */}
          <h3 className='text-xl font-space tracking-wide'>Hi EVIL MORTY</h3>
        </div>
        
      </div>
      
    </div>
    </>
  )
}

function DisplayArea({name, lastname}) {
  return(
    <>
      <div class="px-6 pt-6 2xl:container max-w-5xl">
      <div
        class="flex pb-8 rounded-xl border-2 border-dashed border-gray-300   "
      >
        <div className='flex flex-col w-full  '>
          <div className=' w-full flex justify-center  '>
          <div className=' flex '>
        <div className='px-4 '>
          <Card firstname={name} lastname={lastname}/>
        </div>
        <div className='p-6 2xl:p-4'>
          <Tabs/>
        </div>
        </div>
          </div>
       
        <div id="kk" className="grid grid-cols-12  px-10 mt-2">
                  <DashboardCard13 />
        </div>
        
        </div>
         
      </div>
    </div>
    </>
  )
}

function Card({firstname, lastname}) {

  let amount = 20
  return(
      <>
      <div className='my-4  font-space  rounded-2xl '>
          <div className={` drop-shadow-2xl shadow-2xl w-[340px] h-[200px] xxs:w-[370px] xxs:h-[230px] sm:min-w-[350px] sm:min-h-[200px]  2xl:min-w-[400px]    p-4  rounded-xl  relative flex items-center `}  style={{
  backgroundImage: `url(${pattern})`,
  backgroundSize: "cover",
}}>
               <div className='absolute top-5  left-5'>
                   <h3 className='text-lg text-white'></h3>
               </div>
                <div className='px-4 z-40'>
                  <p className='text-3xl text-white font-medium'>{`${'$ '}${ amount.toLocaleString('en-us', 'currency')}`}</p>
                </div>
                <div className='absolute bottom-5 left-5 z-40 '>
                  <p className='text-white text-xl uppercase font-medium leading-loose '>{`${firstname } ${ lastname}`}</p>
                </div>
                <div className='absolute left-2 top-2 flex items-center z-40'>
                 <div className=' w-[130px] '>
                 <img src={stashlogo} alt="" className='w-full'/>
                 </div>
                </div>
                <div className='absolute top-[45%] right-5 z-50'>
                 <FaChevronRight style={{color: '#ffffff', fontSize: '20px'}}/>
                </div>
                <div  className='absolute right-2 bottom-2 z-40'>
                <span className='text-[6px] text-white'>MEDIK STASH<sup>®</sup> FDIC INSURED</span>
                </div>
              <div className='bg-gradient-to-r from-green-300 to-green-600 absolute inset-0 opacity-75 rounded-xl shadow-inner '></div>
          </div>
      </div>
      </>
  )
}