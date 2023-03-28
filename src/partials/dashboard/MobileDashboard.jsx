import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa'
import { useState, useContext } from 'react'
import {DebitCard, NewsTab, Agents, BottomNavigation} from './index'
import { motion, AnimatePresence } from '../../hooks/useMotion'
import Header from '../Header'
import { ClaimModal } from '../../components'
import Sidebar from '../Sidebar2'
import { wrappedgift } from '../../assets'
import { UserContext } from '../../contexts/UserContext'
import {LaptopDisplay} from '../../components'




export default function MobileDashboard({firstname, lastname, transactions, claimed, accounts, }) {
const [claim , setClaim] = useState()
const [expanded, setexpanded] = useState(false)

const personalAccount = accounts?.filter((account) => {
    return account.type == 'Personal'
})


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
            
<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
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

const Claiming = () => {
    return(
        <>
         <div>
             <div> Claiming </div>
         </div>
        </>
    )
}




    return(
     <>
     <div className='md:hidden'>
     <Sidebar setSidebarOpen={setexpanded} sidebarOpen={expanded}/>
     <Header setisExpanded={setexpanded} fullmenu={true}/>
     <AnimatePresence >
     <motion.div onClick={()=> expanded && setexpanded(false)} key={'jjk'}  className=' h-screen relative overflow-y-scroll pb-[73px] slide-in-left sm:hidden '>
        <div key={'jkkk'} className='flex flex-col gap-y-8 items-center pb-4 mb-4'>
             <div className='px-2'><DebitCard amount={personalAccount?.[0].balance} lastname={lastname} firstname={firstname}/></div> 
             {claimed != true && <div className='px-2.5'><GiftCard/></div> }
        </div>
       <div key={'k'} className='space-y-12 px-4'>
       <div className='ss:flex justify-center'><LatestTransactions/></div> 
       <div className='ss:flex justify-center w-full'>
         <div>
         <NewsTab/>
         </div>
        </div> 
       <div className=' pb-8 ss:flex justify-center'><Agents/></div> 
       </div> 
     </motion.div>
     <motion.div onClick={()=> expanded && setexpanded(false)} key={'jiik'}  className=' h-screen pt-8 relative overflow-y-scroll pb-[73px] slide-in-left hidden sm:block md:hidden  '>
        <div key={'jkkk'} className='flex ss:flex-col  gap-y-8 items-center pb-4 mb-4 sm:grid grid-cols-2'>
             <div className='px-2'><DebitCard amount={personalAccount?.[0].balance} lastname={lastname} firstname={firstname}/></div> 
             {claimed != true && <div className='px-2.5'><GiftCard/></div> }
        </div>
       <div key={'k'} className='space-y-12 px-4'>
       <div className='flex justify-center'>
        <LatestTransactions/>
        </div> 
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
     </AnimatePresence>
     </div>
    <ClaimModal modal={claim} setmodal={setClaim}/>
     </>
    )
 }
 