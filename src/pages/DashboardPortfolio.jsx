import { useState , useRef} from 'react';
// import {Mymodal, Modalbutton} from '../components/modal'
import MotionCard from './Aboutus';
import Sidebar from '../partials/Sidebar2';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

// import Tabs from './Aboutus';
import Agents from '../partials/dashboard/AgentCard';
// import { getsanityuser } from './Loginpage';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { client, urlFor } from '../../lib/client';
import Loader from '../components/Loader';
import cbd from '../assets/hemplogo.png'
import { Button, Progress } from 'antd';
import AnimatedSidebar from '../components/AnimatedSidebar';
import  Accountcard from '../components/Accountcard'
import IconBox from '../components/iconBox';
import { DollarOutlined, BankOutlined, PlusCircleOutlined, ExperimentOutlined } from '@ant-design/icons';
import pattern from '../assets/pattern.png'
import stashlogo from '../assets/stashlogo.png'
import { FaPlusCircle } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function DashboardPortfolio(params) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function Open(params) {
  sidebarOpen && setSidebarOpen(false)
  console.log('clicked')
  }
  
  return(
    <>
    {/* {mobile version} */}
    <div className='lg:hidden' onClick={Open}>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <body   class="bg-gray-100 relative dark:bg-gray-900 h-screen overflow-y-scroll">

<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
  <div   class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    

    <div class="px-6 pt-6 2xl:container">
      <div    class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Personal/>
       
        <Bigcard2/>
        <Bigcard1/>
      </div>
    </div>
  </div>
  
</body>
    </div>
    
{/* {desktop version} */}

<div onClick={()=> { 
    sidebarOpen && setSidebarOpen(false)}} className="lg:flex h-screen overflow-hidden hidden bg-plat ">

  {/* Sidebar */}
  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
   
  {/* Content area */}
  <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">

    {/*  Site header */}
    <div >
    <Header 
    
    sidebarOpen={sidebarOpen}
   setSidebarOpen={setSidebarOpen}
    
    />
    </div>

    <main>
     <div className='flex flex-col pb-8'>
     <div className='pl-4 '>
      <Personal/>
     </div>
     <div className=''>
     <div className='grid grid-col grid-cols-2 px-8 py-2 gap-x-4 mx-auto w-full '> 
      <Bigcard2/>
      <Bigcard1/>
     </div>
     </div>
    
     </div>
   
      
    </main>
  
  </div>
</div>
                                    
    </>
  )
}

export default DashboardPortfolio;


function Bigcard1(params) {
  return(
    <>
    <div class="md:col-span-2 lg:col-span-1">
          <div class="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div>
              <div className='w-[100px] mx-auto'>
                <img src={cbd} alt="" className='w-full' />
              </div>
            </div>
            <div>
              <h5 class="text-center text-xl text-gray-600 dark:text-gray-300">Digital Farm</h5>
              <div class="mt-2 flex justify-center gap-4">
                <h3 class="text-3xl font-bold text-gray-700 dark:text-white">$0</h3>
                {/* <div class="flex items-end gap-1 text-green-500">
                  <svg
                    class="w-3"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor" />
                  </svg>
                  <span>2%</span>
                </div> */}
              </div>
             
            </div>
            <table class="w-full text-gray-600 dark:text-gray-200">
              <tbody>
                <tr>
                  <td class="py-2 sm:text-xl">Plots</td>
                  <td class="text-gray-500 sm:text-xl">0</td>
                  <td>
                    {/* <svg
                      class="ml-auto w-16"
                      viewBox="0 0 68 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <path
                        d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                        stroke="url(#paint0_linear_622:13631)"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_622:13631"
                          x1="68"
                          y1="7.74997"
                          x2="1.69701"
                          y2="8.10029"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#E323FF" />
                          <stop offset="1" stop-color="#7517F8" />
                        </linearGradient>
                      </defs>
                    </svg> */}
                  </td>
                </tr>
                <tr>
                  <td class="py-2 sm:text-xl">Strains</td>
                  <td class="text-gray-500 sm:text-xl">0</td>
                  <td>
                    
                    {/* <svg
                      class="ml-auto w-16"
                      viewBox="0 0 68 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <path
                        d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                        stroke="url(#paint0_linear_622:13640)"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_622:13640"
                          x1="34"
                          y1="5"
                          x2="34"
                          y2="15.9524"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8AFF6C" />
                          <stop offset="1" stop-color="#02C751" />
                        </linearGradient>
                      </defs>
                    </svg> */}
                  </td>
                </tr>
                <tr>
                  <td class="py-2 sm:text-xl">Sales</td>
                  <td class="text-gray-500 sm:text-xl">0 </td>
                  <td>
                    {/* <svg
                      class="ml-auto w-16"
                      viewBox="0 0 68 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <path
                        d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6"
                        stroke="url(#paint0_linear_622:13649)"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_622:13649"
                          x1="67"
                          y1="7.96873"
                          x2="1.67368"
                          y2="8.44377"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFD422" />
                          <stop offset="1" stop-color="#FF7D05" />
                        </linearGradient>
                      </defs>
                    </svg> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}


function Bigcard2(params) {
  return(
    <>
     <div>
          <div class="h-full group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <h5 class="text-2xl text-gray-700 dark:text-gray-300">ROI</h5>
            <div class="my-8">
              <h1 class="text-5xl font-bold text-gray-800 dark:text-white">0%</h1>
              <span class="text-gray-500 dark:text-gray-400"></span>
            </div>
             {/* <svg
              class="w-full"
              viewBox="0 0 218 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 67.5C27.7000 7.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158"
                stroke="url(#paint0_linear_622:13664)"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665"
                stroke="url(#paint1_linear_622:13664)"
                stroke-width="3"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_622:13664"
                  x1="217.027"
                  y1="15"
                  x2="7.91244"
                  y2="15"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4DFFDF" />
                  <stop offset="1" stop-color="#4DA1FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_622:13664"
                  x1="218"
                  y1="18.3748"
                  x2="5.4362"
                  y2="18.9795"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E323FF" />
                  <stop offset="1" stop-color="#7517F8" />
                </linearGradient>
              </defs>
            </svg> */}
            <table class="mt-6 -mb-2 w-full text-gray-600">
              <tbody>
                <tr class="">
                  <td class="py-2 sm:text-xl">Investment</td>
                  <td class="text-gray-500 sm:text-xl">896</td>
                  <td>
                    {/* <svg
                      class="ml-auto w-16"
                      viewBox="0 0 68 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <path
                        d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                        stroke="url(#paint0_linear_622:13631)"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_622:13631"
                          x1="68"
                          y1="7.74997"
                          x2="1.69701"
                          y2="8.10029"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#E323FF" />
                          <stop offset="1" stop-color="#7517F8" />
                        </linearGradient>
                      </defs>
                    </svg> */}
                  </td>
                </tr>
                <tr class="">
                  <td class="py-2 sm:text-xl">Profit</td>
                  <td class="text-gray-500 sm:text-xl">1200</td>
                  <td class="text-gray-500">
                    {/* <svg
                      class="ml-auto w-16"
                      viewBox="0 0 68 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2" />
                      <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2" />
                      <path
                        d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                        stroke="url(#paint0_linear_622:13640)"
                        stroke-width="2"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_622:13640"
                          x1="34"
                          y1="5"
                          x2="34"
                          y2="15.9524"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#8AFF6C" />
                          <stop offset="1" stop-color="#02C751" />
                        </linearGradient>
                      </defs>
                    </svg> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

function Personal(params) {

  const Accountcard = ({earnings, show, low, text, type, to}) => {
    // const history = useNavigate()
    let [isOpen, setIsOpen] = useState(false)
    let [isclicked, setisclicked] =useState(false)
    return (
      <div className=' lg:hidden'>
  
                <div className={!low ? ' shadow-lg w-[340px] h-[200px] xxs:w-[370px] xxs:h-[230px]     bg-green flex flex-col py-4  px-2 rounded-xl font-poppins':'sm:min-w-[500px] xxs:w-[350px]   bg-red-300 flex flex-col py-4  px-2 rounded-xl font-poppins'}>
                      <div className=' justify-center w-full font-poppins space-y-3'>
                              <div>
                                  <p className='text-white font-poppins text-base sm:text-xl  whitespace-nowrap text-center u font-bold uppercase'> {text}</p>
                                  {
                                   !low ? <p className='text-white font-poppins text-2xl sm:text-4xl text-center font-bold'>{`${'$ '}${earnings.toLocaleString({ style: 'currency', currency: 'USD' })}`}</p>
                                    :
                                    <p className='text-white font-poppins text-xl text-center font-bold'>INSUFFICIENT BALANCE</p> }
                              </div>
                            {show && <div className='flex gap-5   justify-center text-center uppercase '>
                              <div onClick={()=>{
                                localStorage.setItem('account',(type))
                                history('/withdraw')}}>
                              <IconBox icon={<DollarOutlined/>} text={'Withdraw'}   />
                              </div>
                              {/* <div onClick={()=>{setisclicked(true)}}>
                              <IconBox icon={<BankOutlined/>} text={'Save'}  />
                              </div> */}
                              <div onClick={()=>{setisclicked(true)}}>
                              <IconBox icon={<PlusCircleOutlined/>} text={'Borrow'}  />
                              </div>
                              {/* <div onClick={()=>{setisclicked(true)}}>
                              <IconBox icon={<ExperimentOutlined/>} text={'Recipe'}  />
                              </div> */}
                                
                                
                                
                            
                            </div>}
                      </div>
              </div>
      </div>
    )
  }

  return(
    <>
    <>
    <div className='container flex flex-col space-y-2 font-poppins'>
      <div className='p-2 my-2 space-y-3 text-sm text-gray-600'>
      <h3 className='text-xl text-left font-bold'>Personal Portfolio</h3>
      <p className='text-left'>This Tab Displays Earnings From Your Personal Account <br className='hidden sm:block' /> Switch Tabs to View Other Data </p>
      </div>
      <div className='flex flex-col justify-center gap-y-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex justify-center lg:justify-start' >
     {/* <Accountcard earnings={1000} show text={'PERSONAL ACCOUNT'}/> */}
     <Card firstname={'John'} lastname={'Doe'}/>
      </div>
      </div>
      <div className='flex sm:px-20 lg:hidden  '>
            
      <div className='flex flex-col gap-y-3 lg:hidden w-full   '>
      <Button style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
        WITHDRAW
        </Button>
      <Button style={{ background:"#1a1a1a", borderColor: "white" }}  shape='round' size='large'  type='primary' block onClick={()=>{func(selected)}}>
          Automate Investments
        </Button>
      </div>
      </div>
      {/* <div className='my-4'><DashboardCard01 earnings={user?.[0].earnings} /></div>
      <div className='my-4'><DashboardCard02 investment={user?.[0].investment} />
      </div> */}
      <div>
      {/* <h3 onClick={()=>setOpen(true)} className='text-xl text-blk font-bold'>Recent Transactions</h3> */}
     </div>
      </div>
    </div>
    </>
    </>
  )
  
}

function Card({firstname, lastname}) {

  let amount = 20
  return(
      <>
      <div className='my-4  font-space  rounded-2xl '>
          <div className={` drop-shadow-2xl shadow-2xl w-[340px] h-[200px] xxs:w-[370px] xxs:h-[230px]    p-4  rounded-xl  relative flex items-center `}  style={{
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