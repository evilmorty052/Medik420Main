import { FaArrowCircleDown, FaArrowCircleUp, FaArrowLeft, FaArrowRight, FaChevronRight, FaClock, FaInfo, FaInfoCircle, FaMoneyBill, FaUserPlus } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import {DebitCard, NewsTab, Agents,} from './index'
import { motion, AnimatePresence } from '../../hooks/useMotion'
import Header from '../Header'
import { BreakDownModal, ClaimModal, RefferalModal } from '../../components'
import Sidebar from '../Sidebar2'
import { wrappedgift } from '../../assets'
import { Empty, Progress } from 'antd'
import {InformationModal} from '../../components'
import { explainers } from '../../constants'





export default function MobileDashboard({firstname, lastname, transactions, claimed, accounts, }) {
const [claim , setClaim] = useState()
const [expanded, setexpanded] = useState(false)
const [showInfo, setshowInfo] = useState(null)
const [question, setquestion] = useState(null)
const [answer, setanswer] = useState(null)
const [breakDown, setbreakDown] = useState()
const [referral, setReferral] = useState()




const personalAccount = accounts?.filter((account) => {
    return account.type == 'Personal'
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
            
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  relative ">
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

    const LatestTransactions = () => {
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
            
<div class="w-full  max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
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
            <div className='flex flex-col gap-y-4 bg-gray-200  p-4 sm:p-6 rounded-md'>
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
      <div className='container space-y-8 py-4'>
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
     <button onClick={()=> setbreakDown(true)} className='py-2 px-4 rounded-3xl bg-green-300 shadow-md focus:bg-green-500 transition-all duration-500 ease-in'>
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
        <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">Digital Farms <span><Infobutton/></span></h5> 
            <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
            </a>
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

const Refferal = () => {
    return(
        <>
          <div className='bg-gray-200 p-4 rounded-lg'>
              <div className='flex items-center gap-x-4'>
                   <a className='text-xl' ><FaUserPlus/></a>
                     <div onClick={()=> setReferral(true)} className='flex flex-1 justify-between items-center '>
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
     <div className=''>
     <Sidebar setSidebarOpen={setexpanded} sidebarOpen={expanded}/>
     <Header setisExpanded={setexpanded} fullmenu={true}/>
     <AnimatePresence >
     <motion.div onClick={()=> {expanded && setexpanded(false)}} key={'jjk'}  className=' h-screen relative overflow-y-scroll pb-[73px] slide-in-left sm:hidden '>
        <div key={'jkkk'} className='flex flex-col gap-y-8 items-center pb-4 mb-4'>
             <div className='px-2'><DebitCard amount={personalAccount?.[0].balance} lastname={lastname} firstname={firstname}/></div> 
             {claimed != true && <div className='px-2.5'><GiftCard/></div> }
        </div>
       <div key={'k'} className='space-y-12 px-4'>
       <div className='ss:flex justify-center'><LatestTransactions/></div>
       <RecentInvestments/>
       <DigitalFarms/>
       <Outstandings/>
       <TotalReturns/> 
       <Performance/>
       <Refferal/>
       <div className='ss:flex justify-center w-full'>
         <div>
         {/* <Infobutton/> */}
         <NewsTab/>
         </div>
        </div> 
       <div className=' pb-8 ss:flex justify-center'><Agents/></div> 
       
       </div> 
     </motion.div>
     <InformationModal answer={answer} question={question} modal={showInfo} setmodal={setshowInfo}/>
     </AnimatePresence>

     {/* {tablet section} */}

     <motion.div onClick={()=> expanded && setexpanded(false)} key={'jiik'}  className=' h-screen pt-8 relative overflow-y-scroll pb-[73px] slide-in-left hidden sm:block md:hidden  '>
        <div key={'jkkk'} className='flex ss:flex-col  gap-y-8 items-center pb-4 mb-4 sm:grid grid-cols-2'>
             <div className='px-2'><DebitCard amount={personalAccount?.[0].balance} lastname={lastname} firstname={firstname}/></div> 
             {claimed != true && <div className='px-2.5'><GiftCard/></div> }
        </div>
       <div key={'k'} className='space-y-12 px-4'>
       <LatestTransactions/>
        <Outstandings/>
        <TotalReturns/>
         
        <Performance/>
         <Refferal/>
       <div className='flex justify-center'><RecentInvestments/></div> 
       <div className=' w-full flex justify-center '>
         <div className=''>
         <NewsTab/>
         
         </div>
        </div> 
       <div className=' flex justify-between gap-x-2 pb-8'>
        <Agents/>
        <Agents/>
        </div> 
       </div> 
     </motion.div>
     </div>
    <ClaimModal modal={claim} setmodal={setClaim}/>
    <BreakDownModal modal={breakDown} setmodal={setbreakDown}/>
    <RefferalModal modal={referral} setmodal={setReferral}/>
     </>
    )
 }
 