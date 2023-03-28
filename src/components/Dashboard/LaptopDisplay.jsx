import React from 'react'
import { FaBriefcase, FaComments, FaCreditCard, FaGlobe, FaHome } from 'react-icons/fa'
import { Link, Routes, Route } from 'react-router-dom'
import { DebitCard, NewsTab } from '../../partials/dashboard'
import { people01 } from '../../assets'

const LaptopDisplay = ({avatar, logo, name , children}) => {
   
   
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
    
      function LaptopHeader(params) {
        return(
          <>
          <div class="fixed z-60 top-0 md:left-[72px] right-0 h-16 border-b bg-white  md:py-2.5">
            <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
              <h5  class="text-[30px] font-black uppercase text-gray-800 lg:block ml-2 ">Medik <span className='text-green-300'>420</span></h5>
              {/* <button class="-mr-2 h-16 w-12 border-r lg:hidden ">
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
              </button> */}
              <div class="flex space-x-4 items-center">
             
                {/* <div hidden class="md:block">
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
                </div> */}
         
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
                <button
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
                </button>
                <h3 className='text-xl font-space tracking-wide'>EVIL MORTY</h3>
              </div>
              
            </div>
            
          </div>
          </>
        )
      }
    
      function DisplayArea({children}) {
        return(
          <>
            <div class="pt-20 bg-white md:container max-w-5xl">
            <div
              class="flex pb-8   "
            >
              <div className='flex flex-col w-full  '>
               {
                   children
                }
              
              </div>
               
            </div>
          </div>
          </>
        )
      }


   


  return (
   
        <>
        <body class="h-screen bg-white "> 
     <LaptopSidebar avatar={people01} stashlogo={logo}/>
      <LaptopHeader/>
      <div class="ml-auto mb-6 md:w-[calc(100vw-100px)] lg:w-[75%] xl:w-[80%] 2xl:w-[85%] ">
        <DisplayArea  >
           {children}
        </DisplayArea>
      </div>
    </body>
        </>
      )
  
}

export  function LaptopDashboard () {
  return(
    <div className=' w-full flex justify-center  '>
          <div className=' flex gap-x-8 items-center'>
        <div className=' '>
          <DebitCard/>
        </div>
        <div className=''>
          <NewsTab />
        </div>
        </div>
      </div>
  )
}


export default LaptopDisplay