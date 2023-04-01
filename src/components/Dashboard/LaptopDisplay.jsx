import { useState } from 'react'
import { FaBriefcase, FaComments, FaCreditCard, FaGlobe, FaHome , FaClock, FaMoneyBill, FaChevronRight, FaUserPlus, FaInfoCircle } from 'react-icons/fa'
import { Link, Routes, Route } from 'react-router-dom'
import { DebitCard, NewsTab } from '../../partials/dashboard'
import { people01, wrappedgift } from '../../assets'
import { ClaimModal } from '../InformationModal'
import { Progress } from 'antd'

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
            name: 'Chat',
            icon: <FaComments style={{fontSize: '16px', color: 'gray'}}/>,
            to: 'dashboard/messages'
          },
        ]

        const HeaderLink = ({to, name, icon}) =>{
          return(
          <Link to={`/${to}`}>
          <li className='flex items-center gap-x-2'>
            <span>{icon}</span>
            <span className='text-sm'>{name}</span>
         </li>
          </Link>
          )
        }

        return(
          <>
          <div class="fixed z-60 top-0 md:left-0 right-0 h-14 border-b shadow-md bg-white  py-2">
            <div class="flex items-center justify-between space-x-4 px-6 2xl:container">
              <h5  class="text-[20px] font-black uppercase text-gray-800 lg:block ml-2 ">Medik <span className='text-green-300'>420</span></h5>
               <ul className='flex flex-1 gap-x-8 pl-4'>
                 {links.map((link, index)=>{
                  return(
                    <HeaderLink key={index} to={link.to} name={link.name} icon={link.icon}/>
                  )
                 })}
               </ul>
              <div class="flex space-x-4 items-center">   
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
                {/* <button
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
                </button> */}
                <button
                  aria-label="notification"
                  class="h-8 w-8 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
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
                <div className='max-w-[14ch] '>
                <h3 className='text-[14px] font-space font-semibold  truncate '>Evil Morty</h3>
                </div>
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
        <body class="h-screen bg-white overflow-y-scroll "> 
     {/* <LaptopSidebar avatar={people01} stashlogo={logo}/> */}
      <LaptopHeader/>
        <DisplayArea  >
           {children}
        </DisplayArea>
    </body>
        </>
      )
  
}

export  function LaptopDashboard () {
  const [claim , setClaim] = useState()

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
    <img src={wrappedgift} className={'w-full'} />
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
  const [showtransactions, setshowtransactions] = useState(false)

  const Handlestatus = (type) => {
  let icon

  if (type == 'deposit'){
      icon = <FaArrowCircleDown/>
  }

  else if (type == 'withdrawal'){
      icon = <FaArrowCircleUp/>
  }

      return(
          <>
          {icon}
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
                          email@windster.com
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                      ${transaction.amount}
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
                     <span className='text-xl'><FaMoneyBill /></span>
                     <p className='sm:text-[24px] text-gray-800 font-semibold'>Personal Portfolio</p>
                  </div>
                  <div>
                      <p className='text-base sm:text-xl font-semibold text-gray-800'>$0.00</p>
                  </div>
         </div>
         <div className='flex justify-between pb-4 border-b border-gray-800'>
                  <div className='flex gap-x-2 items-center'>
                      <span className='text-xl'><FaMoneyBill /></span>
                      <p className='sm:text-[24px] text-gray-800 font-semibold'>Smart Portfolio</p>
                  </div>
                  <div>
                      <p className='text-base sm:text-xl font-semibold text-gray-800'>$0.00</p>
                  </div>
         </div>
        
         <div className='flex justify-between pb-4 border-b border-gray-800'>
                  <div className='flex gap-x-2 items-center'>
                    <a className='text-xl'><FaClock/></a> 
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
   <button className='py-2 px-4 rounded-3xl bg-green-300 shadow-md focus:bg-green-500 transition-all duration-500 ease-in'>
       See my breakdown
   </button>
   </div>
   </div>
       </div>
      </>
  )
}

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
      <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
          <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
              <span class="sr-only">Open dropdown</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
          </a>
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
            <div className='flex items-center gap-x-4'>
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

  return(
   <>
     <div>
     <div className='  container flex flex-col items-center gap-y-14 mx-auto h-screen overflow-y-scroll max-w-[1080px]  '>
          <div className=' flex gap-x-8 items-center'>
          <DebitCard/>
          <DebitCard/>
        </div>
          <LatestTransactions />
          <RecentInvestments/> 
        <GiftCard/>
        <Outstandings/>
        <Performance/>
        <TotalReturns/>
        <Refferal/>
      </div>
     </div>
      <ClaimModal modal={claim} setmodal={setClaim}/>
   </>
  )
}


export default LaptopDisplay