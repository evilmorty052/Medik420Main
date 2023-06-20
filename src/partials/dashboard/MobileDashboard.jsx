import { FaArrowDown, FaArrowUp, FaChevronRight, FaUserPlus,  } from 'react-icons/fa'
import { useState, useEffect, useContext } from 'react'
import {DebitCard, NewsTab, Agents,} from './index'
import { motion, AnimatePresence } from '../../hooks/useMotion'
import Header from '../Header'
import { BreakDownModal, ClaimModal, RefferalModal, WithdrawalModal } from '../../components'
import Sidebar from '../Sidebar2'
import { wrappedgift, useroutlined, brain, calendar } from '../../assets'
import { Empty, Progress } from 'antd'
import {InformationModal} from '../../components'
import { explainers } from '../../constants'
import { Infobutton } from './index'
import DashboardCard03 from './DashboardCard03'
import { day } from '../../../lib/dayjs'
import { SmartPortfolio, AnnouncementBanner } from './Elements'
import {UsePaymentModalContext,} from "../../contexts/PaymentModalContext"




export default function MobileDashboard({firstname, lastname, transactions, claimed, accounts, notifications, plan, user }) {
const [claim , setClaim] = useState()
const [expanded, setexpanded] = useState(false)
const [showInfo, setshowInfo] = useState(null)
const [question, setquestion] = useState(null)
const [answer, setanswer] = useState(null)
const [breakDown, setbreakDown] = useState()
const [referral, setReferral] = useState()
const [withdrawal, setwithdrawal] = useState(null)
const [hidden, setHidden] = useState()


const {invisible, setInvisible, setPaymentHeader, setPaymentText, setActionsModal, setSubscriptionModal, setuser} = UsePaymentModalContext();

useEffect(()=>{
setuser(user)
},[])
// const handlePaymentModal = () => {
//     setPaymentHeader("Choose your payment method")
//     setPaymentText("Choose your payment method")
//     setSubscriptionModal(true)
// }

const personalAccount = accounts?.filter((account) => {
    return account.type == 'Personal'
})
const smartPortfolio = accounts?.filter((account) => {
    return account.type == 'Smart'
})



// const  = user?.accounts?.filter((account) => {
//     return account.type == 'Personal'
// })




    const GiftCard = () => {
        return(
            <>
            
<motion.div initial={{opacity: 0}}  whileInView={{opacity: 1}} class="max-w-sm sm:max-w-2xl p-6 bg-[#f9f8f8] border border-gray-200 rounded-lg shadow-xl  relative ">
    {/* <svg class="w-10 h-10 mb-2 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
    <div className='w-14 h-14 mb-2'>
        <img src={wrappedgift} className={'w-full heartbeat'} />
    </div>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-blk ">Claim  $10 </h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 sm:text-xl "> Get $10 To kickstart Your investment journey</p>
    {/* <a onClick={()=> setClaim(true)} class="inline-flex items-center text-blue-600 hover:underline">
        Claim Now
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a> */}
    <div className="py-2">
        <button onClick={()=> setClaim(true)} className="btn">
            Claim
        </button>
    </div>
</motion.div>

            </>
        )
    }

    const LatestTransactions = () => {
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
    // const createdAt = time;
    // const parsedCreatedAt = day(createdAt);
    // const timeAgo = parsedCreatedAt?.fromNow();
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
            {transactions?.map((transaction, index)=>{
                return(
                    <>
                    <li key={index} class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        {Handlestatus(transaction.type)}
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            {transaction.sendername}
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            {handleTime(transaction.created)}
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
            <div className='flex flex-col gap-y-4 bg-gray-200/80 shadow-xl ring-1 ring-slate-100  p-4 sm:p-6 rounded-md'>
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
                            <span className='text-base sm:text-xl text-gray-700 font-semibold'>Invested</span>
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
      <div className='container mx-auto space-y-8 py-4'>
           <div className='flex justify-between pb-4 border-b border-gray-800'>
                    <div className='flex gap-x-2 items-center'>
                       {/* <span className='text-xl  text-green-400'><FaMoneyBill  /></span> */}
                       <img src={useroutlined} alt="" className='h-10 w-10' />
                       <p className='sm:text-[24px] text-gray-800 font-semibold'>Personal Portfolio</p>
                    </div>
                    <div>
                        <p className='text-base sm:text-xl font-semibold text-gray-800'>${personalAccount?.[0].balance}</p>
                    </div>
           </div>
           <div className='flex justify-between pb-4 border-b border-gray-800'>
                    <div className='flex gap-x-2 items-center'>
                        {/* <span className='text-xl text-blue-400'><FaMoneyBill /></span> */}
                        <img src={brain} alt="" className='h-10 w-10' />
                        <p className='sm:text-[24px] text-gray-800 font-semibold'>Smart Portfolio</p>
                    </div>
                    <div>
                        <p className='text-base sm:text-xl font-semibold text-gray-800'>${`${smartPortfolio?.[0].balance}`}</p>
                    </div>
           </div>
          
           <div className='flex justify-between pb-4 border-b border-gray-800'>
                    <div className='flex gap-x-2 items-center'>
                      {/* <a className='text-xl text-black/80'><FaClock/></a>  */}
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
     <div className='bg-gray-200/80 shadow-xl ring-1 ring-slate-100 rounded-lg p-4'>
         <div className='mb-4'>
             <h3 className='text-base font-semibold text-gray-800'>How Balanced Is Your Portfolio ? <span><Infobutton func={performanceInfo}/></span></h3>
             <p className='text-sm text-gray-700'>No investment activity</p>
        </div>
     <div>
      <div className='flex justify-between'>
         <span className='text-xs text-gray-700 font-semibold'>Less balanced</span>
         <span className='text-xs text-gray-700 font-semibold'>More balanced</span>
      </div>
     <Progress status='normal' trailColor='#f9f8f8'strokeWidth={20} showInfo={false}  type='line'/>
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

const Refferal = () => {
    return(
        <>
          <div className='bg-gray-200/80 shadow-xl ring-1 ring-slate-100 p-4 rounded-lg'>
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

const UserPlan = () => {
    return (
      <>
        <div className="relative py-4 px-2 bg-gray-200 rounded-xl shadow-sm">
             <div className='py-2'>
                <h3 className='text-xl text-blk font-semibold'>Plan:</h3>
                <p className='text-2xl font-bold text-blk'>Free Trial</p>
                <div className="pt-4">
                <button className="btn">
                    Upgrade Plan
                </button>
                </div>
             </div>
          </div>
        
      </>
    );
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
     <div className=''>
    
     <Sidebar setSidebarOpen={setexpanded} sidebarOpen={expanded}/>
     <Header user={user} setisExpanded={setexpanded} fullmenu={true} notifications={user?.notifications} plan={user?.plan}/>  
     <motion.div onClick={()=> {expanded && setexpanded(false)}}  className=' min-h-screen relative  pb-[73px]  sm:hidden '>
        <div className='flex flex-col gap-y-8 items-center pb-4 mb-4'>
             <div className='px-2'><DebitCard func={()=> setActionsModal(true)} amount={personalAccount?.[0].balance} lastname={lastname} firstname={firstname}/></div> 
             {user?.claimed != true && <div className='px-2.5'><GiftCard/></div> }
        </div>
       <div  className='space-y-12 px-4'>
       <div className='flex justify-center'>
        <LatestTransactions/>
        </div>
       <RecentInvestments/>
       <DashboardCard03 plan={user?.plan} func={()=> setSubscriptionModal(true)}/>
       <DigitalFarms/>
       <Outstandings/>
       <TotalReturns/> 
       <Performance/>
       <Refferal/>
       <RecentNews/>
       {/* <div className=' pb-8 ss:flex justify-center'><Agents/></div>  */}
       
       </div> 
     </motion.div>
     <InformationModal answer={answer} question={question} modal={showInfo} setmodal={setshowInfo}/>
     

     {/* {tablet section} */}
     <AnnouncementBanner hidden={hidden} setHidden={setHidden}/>
     <motion.div onClick={()=> expanded && setexpanded(false)}   className=' h-screen  relative overflow-y-scroll pb-[73px] slide-in-left hidden sm:block md:hidden  '>
        <div  className={`${!hidden ? "pt-[62px]" : ""} flex sm:justify-center ${claimed != true && 'ss:flex-col  gap-y-8 items-center pb-4 mb-4 sm:grid grid-cols-2'}`} >
             <div className='px-2'>
                <DebitCard func={()=> setActionsModal(true)} amount={personalAccount?.[0].balance} lastname={lastname} firstname={firstname}/>
            </div> 
             <div className='px-2'>
                <SmartPortfolio func={()=> setActionsModal(true)} amount={smartPortfolio?.[0].balance}/>
            </div> 
        </div>
       <div  className='space-y-12 px-4'>
       {claimed != true && 
             <div className='px-2.5'><GiftCard/></div>
              }
      <div className='flex justify-center'><LatestTransactions/></div>
       
       <div className='flex justify-center'><RecentInvestments/></div> 
        <Outstandings/>
        <TotalReturns/>
        <Performance/>
         <Refferal/>
         <RecentNews/>
       {/* <div className=' flex justify-between gap-x-2 pb-8'>
        <Agents/>
        <Agents/>
        </div>  */}
       </div> 
     </motion.div>
     </div>
     
    <ClaimModal modal={claim} setmodal={setClaim}/>
    <BreakDownModal modal={breakDown} setmodal={setbreakDown}/>
    <RefferalModal modal={referral} setmodal={setReferral}/>
    <WithdrawalModal modal={withdrawal} setmodal={setwithdrawal}/>
     </>
    )
 }
 