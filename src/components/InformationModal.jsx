import { motion, AnimatePresence } from "../hooks/useMotion"
import { FaArrowRight, FaMoneyBill, FaClock, FaClipboard, FaEye, FaPlusCircle, FaBookmark, FaBan, FaFlag, FaTimes, FaChevronDown, FaCheck } from "react-icons/fa"
import { useState, useEffect, Fragment } from "react"
import ScaleLoader from "react-spinners/ScaleLoader";
import { client } from "../../lib/client";
import { message } from "antd";
import CurrencyInput from "./CurrencyInput";
import JSConfetti from 'js-confetti'
import { Listbox, Transition } from '@headlessui/react'


const InformationModal = ({modal , setmodal, question, answer}) => {

    return(
      <>
      <AnimatePresence>
     {modal && 
     <div key={'moda'} className='fixed z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2'>
             <div className="relative">
             <motion.div key={'modalo'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5  min-w-[calc(100vw-5vw)] '>
                <div className="py-4">
                     <h3 className='text-[20px] text-gray-700 font-semibold text-center mb-4'>{question}</h3>
                     <p className='text-base text-center'>{answer}</p>
                </div>
                <div className='py-4 flex justify-center'>
                   <button className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
                       <span className='text-lg text-center'>View Documentation</span> <FaArrowRight style={{color: '#f9f8f8'}}/>
                   </button>
                </div>
             </motion.div>
                <div onClick={()=> setmodal(!modal)} className='absolute top-1 right-1'>
                  <FaTimes className='text-sm'/>
                </div>
             </div>
      </div>
            
            }
      </AnimatePresence>
      </>
    )
  }

 export const ClaimModal = ({modal , setmodal, question, answer}) => {
let view 
const jsConfetti = new JSConfetti()

const showconfetti = () => {
    jsConfetti.addConfetti() 
}

const [currentView, setcurrentView] = useState('default')

useEffect(() => {
  if (currentView == 'Claiming') {
    setTimeout(() => {
      setcurrentView('Verify')
    }, 4000);
  }
 
  
}, [currentView])
const email = localStorage.getItem('email')

const createaccount = async () => {
  const docquery = `*[_type == 'users' && email == '${email}']{_id, accounts}`
  const docid = await client.fetch(docquery).then((res) => res[0]._id)
  const accounts = await client.fetch(docquery).then((res) => res[0].accounts)
  const targetaccount = accounts?.find((account) => account.type == 'Personal')
  const updatedaccounts = accounts?.map((account)=>{
      if(account.type == targetaccount.type){
          return{
             ...account,
             balance: account.balance + 10 
          }
      }
  
      return{
          ...account
      }
  })
  client
  .patch(docid) 
  .set({
      accounts: updatedaccounts,
  })
  .commit() 
  .then((res) => {
   console.log(res)
  }).then((res) => {
    res && setcurrentView('Verified')
  })
  .catch((err) => {
    console.error('Oh no, the update failed: ', err.message)
  })
      }

async function setClaimed(params) {
const query = `*[_type == 'users' && email == "${email}"]{_id}`
const docid = await client.fetch(query).then(res => res[0]._id)
client.patch(docid)
.set({claimed: true})
.commit()
}

async function showNotification(params) {
    const cookie = localStorage.getItem('cookie')
    const query = `*[_type == "users" && _id == "${cookie}"]{ notifications, transactions }`
    const transactions = await client.fetch(query).then(res => res[0].transactions)
    const notifications = await client.fetch(query).then(res => res[0].notifications)

    const updatedTransactions = transactions?.map((transaction) => {
      return {
        ...transaction
      }
    })

    updatedTransactions.push({
      type: 'deposit',
      amount: 10,
      status: 'completed',
      sendername: 'Medik 420',
      created: new Date().toISOString(),
    })

    console.log(transactions)

    const updatedNotifications = notifications?.map((notification) => {
      return {
        ...notification
      }
    })
    updatedNotifications.push({
      message: '$10  has been deposited to your personal account',
      title: '$10 Deposit ',
      read: false,
      created: new Date().toISOString(),
    })
    client.patch(cookie)
    .set({
      notifications: updatedNotifications,
      transactions: updatedTransactions
    })
    .commit({
      autoGenerateArrayKeys: true
    }).then((res) => {
      console.log(res)
    })
}

const bonus = async () => {
  createaccount()
  setClaimed()
  showNotification()
}

const handleClaim = () => {
  bonus()
  setcurrentView('Claiming')
}

const DefaultView = () => {
  return(
    <motion.div key={'modalo'}  exit={{y:'500%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative max-w-md '>
                <div>
                   <h3 className='text-[28px] text-gray-700 font-semibold text-center mb-4'>{'Claim 10$ ?'}</h3>
                    <p className='text-lg text-center'>Boost Your Investment Funds With $10 From us when you subscribe to a Plan Including our 7 days Free Trial plan </p>
                   </div>
                <div className='py-4 flex justify-center'>
                   <button onClick={()=> handleClaim()} className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
                       <span className='text-xl text-center'>Claim Boost</span>
                        {/* <FaArrowRight style={{color: '#f9f8f8'}}/> */}
                   </button>
                </div>
                <div onClick={()=> setmodal(!modal)} className='absolute top-0 right-2'>
                  <FaTimes className='text-sm'/>
                </div>
    </motion.div>
  )
}

const ClaimingView = () => {

  // useEffect(() => {
  //   return () => {
  //     bonus()
  //   }
  // }, [])
  

  // useEffect(() => {
  // setClaimed()
  // createaccount()
  // }, [])
  

  return(
    <motion.div key={'modalo'}  exit={{y:'500%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative  min-w-[calc(100vw-5vw)] md:min-w-[50vw] '>
                <div>
                   <h3 className='text-[28px] text-gray-700 font-semibold text-center mb-4'>{'Claiming'}</h3>
                </div>
                   <div className="flex justify-center">
                   <ScaleLoader
                    width={30}
                    color={'#00c4ee'}/>
                   </div>
    </motion.div>
  )
}

const VerifyView = () => {
  useEffect(() => {
    showconfetti()
    setTimeout(() => {
      message.success('$10 has been deposited to your personal account')
      window.location.reload()
    }, 4000);
  
  
  }, [])
  
  return(
    <motion.div key={'modalo'}  exit={{y:'500%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative  min-w-[calc(100vw-5vw)] md:min-w-[50vw] '>
             <div className="text-center pb-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Claimed!</h3>
                       <p className="text-lg tracking-wide">Your Welcome Bonus has Been Claimed Succesfully!</p>
                       </div>
                         <div className="flex justify-center">
                         
                         </div>
    </motion.div>
  )
}

switch (currentView) {
  case 'default':
  view = <DefaultView/>
    break;
  
  case 'Claiming':
  view = <ClaimingView/>
    break;
  
    case 'Verify':
  view = <VerifyView/>
    break;
   
    case 'blank':
  view = ''
    break;

  default:
    break;
}

    return(
      <>
     {modal && <AnimatePresence>
     {
   <>
   
   <div  key={'modalin'} className='fixed z-[500] md:hidden  flex justify-center items-center inset-0 bg-black/40 px-2'>
           <div className="" >
           {view} 
            </div> 
      </div>
      
      {/* medium screen version */}

     <div  key={'moda'} className='fixed z-[50000] hidden  md:flex justify-center items-center inset-0 bg-black/40 px-2 '>
           <div className="" >
           {view} 
            </div> 
      </div>
   </>
            
            }
      </AnimatePresence>}
      </>
    )
  }




export const BreakDownModal = ({modal , setmodal,}) => {

  const Outstandings = () => {
    return(
      <>
      <div className='container space-y-8 py-4 px-2'>
           <div className='flex justify-between pb-4 border-b border-gray-800'>
                    <div className='flex gap-x-2 items-center'>
                       <span className='text-xl'><FaMoneyBill /></span>
                       <p className='sm:text-[24px] text-gray-800 font-semibold'>All Investments</p>
                    </div>
                    <div>
                        <p className='text-base sm:text-xl font-semibold text-gray-800'>$0.00</p>
                    </div>
           </div>
           <div className='flex justify-between pb-4 border-b border-gray-800'>
                    <div className='flex gap-x-2 items-center'>
                        <span className='text-xl'><FaMoneyBill /></span>
                        <p className='sm:text-[24px] text-gray-800 font-semibold'>Unique Investments</p>
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

  return(
    <>
            <AnimatePresence>
     {modal && 
     <div onClick={()=> modal && setmodal(false)} key={'moda'} className='fixed md:z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2 md-py-10'>
             <div className="relative">
             <motion.div key={'modalo'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5  min-w-[calc(100vw-5vw)] '>
                       <h3 className="text-center text-xl text-gray-800 font-semibold">Investment Breakdown</h3>
                 <div className="py-4  md:px-10 space-y-5">
                      <Outstandings/>
                       <div className="px-2">
                           <h3 className="text-start text-lg text-gray-800 font-semibold mb-2">Diversification Score:</h3>
                           <p className="text-[40px] font-bold text-gray-800">0%</p>
                           <div className="py-2">
                               <p className="text-sm text-gray-600">Your diversification score is currently at zero because you have no investments, start investing to get tips here on how to diversify your portfolio.</p>
                           </div>
                       </div>
                 </div>
             </motion.div>
                <div onClick={()=> setmodal(!modal)} className='absolute top-1 right-1'>
                  <FaTimes className='text-sm'/>
                </div>
             </div>
      </div>
            
            }
      </AnimatePresence> 
    </>
  )
}

export const WithdrawalModal = ({user, modal, setmodal, activeCard, cancel }) => {
  const [withdrawing, setwithdrawing] = useState(null)
  const [senderAccount, setSenderAccount] = useState('')
  const [beneficiary, setbeneficiary] = useState('')

  const ListDropdown = ({options, setoption}) => {

    const [selected, setSelected] = useState(options?.[0]);
    
      useEffect(() => {
        setoption?.(selected.type)
    
      }, [])
      
    
    
     
    
      
    
      return (
        <>
          <div className=" w-40">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.type} Portfolio</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <FaChevronDown
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-40 overflow-y-scroll mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span onClick={()=> setoption?.(person.type)}
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.type} Portfolio
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <FaCheck className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </>
      );
    }
 
  const accounts = [
    { name: "Personal Portfolio" },
    { name: "Smart Portfolio" },
  ];

  const people = [
    { name: "Primary Account" },
    { name: "Savings 1090" },
  ]

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selected, setSelected] = useState(people[0]);

  const info = () => {
    message.error("Insufficient Balance");
  };

  const handleWithdraw = () => {
    setwithdrawing(true)
    
  }

  const Withdrawing = () => {
  
    const [processing, setprocessing] = useState(null)


    if (processing) {
      return <h3>processing</h3>
    }

    return (
    
      <div className=" bg-white relative ">
  
         {/* {back button} */}
  
         {/* <div className='absolute top-2 left-2 flex gap-x-2'>
              <FaArrowLeft onClick={()=> setActiveCard(null)}/>
              <p onClick={()=> setActiveCard(null)}>Back</p>
         </div> */}

         <div className="flex px-1 py-2 w-full justify-center">
            <p className="text-2xl font-semibold text-blk text-center">Summary</p>
         </div>
  
        <div className="flex flex-col gap-y-6 pt-6">
  
          {/* {Amount input section} */}
  
          <div className='flex flex-col items-start px-4'>
            <div>
              <p className='text-xl font-semibold text-blk'>Withdrawal Amount</p>
  
              {/* {input section} */}

              <p className="text-3xl text-blk font-semibold">
                ${withdrawAmount}
              </p>
  
              {/* <div className='py-2'>
                 <CurrencyInput value={withdrawAmount}  setValue={setWithdrawAmount}/>
              </div> */}
            </div>
          </div>
          <div className='flex flex-col items-start  px-4'>
  
            {/* {from section} */}
  
            <div className='flex items-center gap-x-4 pb-6'>
              <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
                <p className='font-semibold text-xl text-blk'>From</p>
              </div>
  
              <div className="">
                <p className='text-lg font-semibold text-blk'>{senderAccount}{" "}</p>
              </div>
            </div>
  
            <hr className="w-px h-14 bg-blk mx-3" />
  
  
            {/* {to section} */}
  
            <div className='flex items-center gap-x-4 pt-6'>
              <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
                <p className='font-semibold text-xl text-blk'>To</p>
              </div>
              <div className="">
                <p className='text-lg font-semibold text-blk'>{beneficiary} </p>
              </div>
            </div>
  
            {/* {Transfer Button} */}
  
            <div className='pt-10 w-full flex gap-y-4 flex-col '>
              <button onClick={info} disabled={!withdrawAmount} className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
                Confirm
              </button>
              
  
               <button onClick={()=> setwithdrawing(null)} className="btnHollow">
                Cancel
               </button>
            </div>
  
          </div>
        </div>
      </div>
    );
  }

  // if (withdrawing) {
  //   return <Withdrawing />
  // }

  return (
    <>
      <AnimatePresence>
        {modal && (
          //  <div  key={'moda'} className='fixed md:z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2 md-py-10'>

          //   </div>


          //  {modal container}

          <div className=" fixed inset-0 bg-white z-50 overflow-scroll sm:pt-10 ">
            
            {
              !withdrawing ? 
              <motion.div
              key={"modalo"}
              exit={{ y: "200%" }}
              initial={{ y: "-100%" }}
              animate={{ y: "0" }}
              className="bg-white py-8 px-2 rounded-2xl space-y-5  min-w-[calc(100vw-5vw)] "
            >
              {/* {header} */}
              <h3 className="text-center text-2xl  text-gray-800 font-semibold sm:hidden tracking-wide">
                Withdraw
              </h3>

              <h3 className="text-center text-2xl tracking-wide text-gray-800 font-semibold hidden sm:block">
                Withdrawing from {`${senderAccount}`}
              </h3>

              <div className=" bg-white relative ">
                <div className="flex flex-col gap-y-6 sm:gap-y-10 pt-6">

                  {/* from and to container */}

                  <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-x-8   px-4 sm:px-2">

                    {/* {from section} */}

                    <div className="flex items-center gap-x-4 pb-6 sm:pb-0">
                      {/* {from Box} */}

                      <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
                        <p className="font-semibold text-xl text-blk">From</p>
                      </div>
                         
                         {/* { from dropdown} */}

                      <ListDropdown setoption={setSenderAccount} options={user?.accounts}/>
                    </div>

                    {/* {horizontal rule} */}

                    
                    <hr className="w-px h-14 bg-blk mx-3 sm:rotate-90 sm:mx-8 sm:h-24" />

                    {/* {to section} */}

                    <div className="flex items-center gap-x-4 pt-6 sm:pt-0">
                      {/* {to box} */}

                      <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
                        <p className="font-semibold text-xl text-blk">To</p>
                      </div>

                      {/* {to dropdown} */}
                     
                     <ListDropdown options={people} setoption={setbeneficiary}/>
                      
                    </div>
                  </div>

                  {/* {Amount input section} */}

                  <div className="flex flex-col items-center px-4">
                    <div>
                      {/* <p className='text-xl font-semibold text-blk'>Withdrawal Amount</p> */}

                      {/* {input section} */}

                      <div className="py-2">
                        <CurrencyInput
                          value={withdrawAmount}
                          setValue={setWithdrawAmount}
                        />
                      </div>
                    </div>
                  </div>

                  {/* {Withdraw Button} */}

                  <div className="pt-10 w-full flex gap-y-4 flex-col sm:px-10 sm:pt-14 ">
                    <button
                      onClick={handleWithdraw}
                      disabled={!withdrawAmount}
                      className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70"
                    >
                      Withdraw
                    </button>

                    <button
                      onClick={cancel}
                      className="btnHollow"
                    >
                      Cancel
                    </button>
                  </div>


                </div>
              </div>
            </motion.div> 
            :
            <Withdrawing/>
            }


            {/* <div
              onClick={() => setmodal(!modal)}
              className="absolute top-1 right-1"
            >
              <FaTimes className="text-sm" />
            </div> */}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export const TransferModal = ({ modal, setmodal, activeCard, cancel }) => {
  const [withdrawing, setwithdrawing] = useState(null)
  const [senderAccount, setSenderAccount] = useState('')
  const [beneficiary, setbeneficiary] = useState('')
  const accounts = [
    { name: "Personal Portfolio" },
    { name: "Smart Portfolio" },
  ];

  const people = [
    { name: "Primary Account" },
    { name: "Savings 1090" },
  ]

  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selected, setSelected] = useState(people[0]);

  const info = () => {
    message.error("Insufficient Balance");
  };

  const handleWithdraw = () => {
    setwithdrawing(true)
    
  }

  const Withdrawing = () => {
  
    const [processing, setprocessing] = useState(null)


    if (processing) {
      return <h3>processing</h3>
    }

    return (
    
      <div className=" bg-white relative ">
  
         {/* {back button} */}

         <div className="flex px-1 py-2 w-full justify-center">
            <p className="text-2xl font-semibold text-blk text-center">Summary</p>
         </div>
  
        <div className="flex flex-col gap-y-6 pt-6">
  
          {/* {Amount input section} */}
  
          <div className='flex flex-col items-start px-4'>
            <div>
              <p className='text-xl font-semibold text-blk'>Withdrawal Amount</p>
  
              {/* {input section} */}

              <p className="text-3xl text-blk font-semibold">
                ${withdrawAmount}
              </p>
  
              {/* <div className='py-2'>
                 <CurrencyInput value={withdrawAmount}  setValue={setWithdrawAmount}/>
              </div> */}
            </div>
          </div>
          <div className='flex flex-col items-start  px-4'>
  
            {/* {from section} */}
  
            <div className='flex items-center gap-x-4 pb-6'>
              <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
                <p className='font-semibold text-xl text-blk'>From</p>
              </div>
  
              <div className="">
                <p className='text-lg font-semibold text-blk'>{senderAccount}{" "}</p>
              </div>
            </div>
  
            <hr className="w-px h-14 bg-blk mx-3" />
  
  
            {/* {to section} */}
  
            <div className='flex items-center gap-x-4 pt-6'>
              <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
                <p className='font-semibold text-xl text-blk'>To</p>
              </div>
              <div className="">
                <p className='text-lg font-semibold text-blk'>{beneficiary} </p>
              </div>
            </div>
  
            {/* {Transfer Button} */}
  
            <div className='pt-10 w-full flex gap-y-4 flex-col '>
              <button onClick={info} disabled={!withdrawAmount} className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
                Confirm
              </button>
              
  
               <button onClick={()=> setwithdrawing(null)} className="btnHollow">
                Cancel
               </button>
            </div>
  
          </div>
        </div>
      </div>
    );
  }

  // if (withdrawing) {
  //   return <Withdrawing />
  // }

  return (
    <>
      <AnimatePresence>
        {modal && (
          //  <div  key={'moda'} className='fixed md:z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2 md-py-10'>

          //   </div>


          //  {modal container}

          <div className=" fixed inset-0 bg-white z-50 overflow-scroll sm:pt-10 ">
            
            {
              !withdrawing ? 
              <motion.div
              key={"modalo"}
              exit={{ y: "200%" }}
              initial={{ y: "-100%" }}
              animate={{ y: "0" }}
              className="bg-white py-8 px-2 rounded-2xl space-y-5  min-w-[calc(100vw-5vw)] "
            >
              {/* {header} */}
              <h3 className="text-center text-2xl  text-gray-800 font-semibold sm:hidden tracking-wide">
                Transfer
              </h3>

              <h3 className="text-center text-2xl tracking-wide text-gray-800 font-semibold hidden sm:block">
                Withdrawing from {`${senderAccount}`}
              </h3>

              <div className=" bg-white relative ">
                <div className="flex flex-col gap-y-6 sm:gap-y-10 pt-6">

                  {/* from and to container */}

                  <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-x-8   px-4 sm:px-2">

                    {/* {from section} */}

                    <div className="flex items-center gap-x-4 pb-6 sm:pb-0">
                      {/* {from Box} */}

                      <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
                        <p className="font-semibold text-xl text-blk">From</p>
                      </div>
                         
                         {/* { from dropdown} */}

                      <ListDropdown setoption={setSenderAccount} options={accounts}/>
                    </div>

                    {/* {horizontal rule} */}

                    
                    <hr className="w-px h-14 bg-blk mx-3 sm:rotate-90 sm:mx-8 sm:h-24" />

                    {/* {to section} */}

                    <div className="flex items-center gap-x-4 pt-6 sm:pt-0">
                      {/* {to box} */}

                      <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
                        <p className="font-semibold text-xl text-blk">To</p>
                      </div>

                      {/* {to dropdown} */}
                     
                     <ListDropdown options={people} setoption={setbeneficiary}/>
                      
                    </div>
                  </div>

                  {/* {Amount input section} */}

                  <div className="flex flex-col items-center px-4">
                    <div>
                      {/* <p className='text-xl font-semibold text-blk'>Withdrawal Amount</p> */}

                      {/* {input section} */}

                      <div className="py-2">
                        <CurrencyInput
                          value={withdrawAmount}
                          setValue={setWithdrawAmount}
                        />
                      </div>
                    </div>
                  </div>

                  {/* {Withdraw Button} */}

                  <div className="pt-10 w-full flex gap-y-4 flex-col sm:px-10 sm:pt-14 ">
                    <button
                      onClick={handleWithdraw}
                      disabled={!withdrawAmount}
                      className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70"
                    >
                      Withdraw
                    </button>

                    <button
                      onClick={cancel}
                      className="btnHollow"
                    >
                      Cancel
                    </button>
                  </div>


                </div>
              </div>
            </motion.div> 
            :
            <Withdrawing/>
            }


            {/* <div
              onClick={() => setmodal(!modal)}
              className="absolute top-1 right-1"
            >
              <FaTimes className="text-sm" />
            </div> */}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


export const RefferalModal = ({modal, setmodal}) => {
  return(
    <>
            <AnimatePresence>
     {modal && 
     <div onClick={()=> modal && setmodal(false)} key={'moda'} className='fixed md:z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2'>
             <div className="relative">
             <motion.div key={'modalo'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5  min-w-[calc(100vw-5vw)] '>
                 <div className=" space-y-5">
                       <h3 className="text-center text-[25px] text-gray-800 font-semibold">Invite a Friend</h3>
                           <div className="">
                               <p className="text-base font-medium text-center text-gray-800">Get A $50 Boost To Your Portfolio for every verified friend that signs up using your refferal Code.</p>
                           </div>
                       <div className="px-2 flex justify-center">
                          <div>
                          <h3 className="text-center text-lg text-gray-800 font-semibold mb-2">Refferal Code:</h3>
                           <div className="flex items-center space-x-2">
                           <p className="text-[30px] font-bold text-gray-800 ">Evil0809</p>
                           <p className="text-gray-300"><FaClipboard/></p>
                           </div>
                          </div>
                       </div>

                       <div className="flex py-4 justify-center">
                       <button className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
                       <span className='text-lg text-center'>View Documentation</span> <FaArrowRight style={{color: '#f9f8f8'}}/>
                   </button>
                       </div>
                 </div>
             </motion.div>
                <div onClick={()=> setmodal(!modal)} className='absolute top-1 right-1'>
                  <FaTimes className='text-sm'/>
                </div>
             </div>
      </div>
            
            }
      </AnimatePresence> 
    </>
  )
}

export const MoreActionsModal = ({modal , setmodal, targetProfile}) => {
  return(
    <>
    {
      modal &&
    <div className="fixed z-[90000000] inset-0 bg-black/20 ">
      <div className="flex h-full w-full relative justify-center items-center">
        
        <motion.div
         initial={{y: '100%'}}
         animate={{y: '0'}}
         transition={{ease: 'easeIn'}}
         className="absolute  flex p-4  rounded-t-2xl bottom-0 left-0 right-0 h-96 bg-white">
         <div className="flex flex-col justify-between w-full ">
          <div className="gap-y-6 flex flex-col">
         <div className="flex gap-x-2 items-center">
          <FaEye/>
         <h3 className="text-base text-blk font-bold">View {targetProfile?.username} Profile</h3>
         </div>

         <div className="flex gap-x-2 items-center">
          <FaPlusCircle/>
         <h3 className="text-base text-blk font-bold">Add {targetProfile?.username} to Hive</h3>
         </div>

         <div className="flex gap-x-2 items-center">
        <FaBookmark/>
        <h3 className="text-base text-blk font-bold">Bookmark this Partnership</h3>
         </div>

         <div className="flex gap-x-2 items-center">
          <FaBan/>
          <h3 className="text-base text-blk font-bold">Block  {targetProfile?.username}</h3>
         </div>

         <div className="flex gap-x-2 items-center">
          <FaFlag/>
          <h3 className="text-base text-blk font-bold">Report {targetProfile?.username}</h3>
        {/* <h3 className="text-base text-blk font-bold">Report {targetProfile?.username}</h3> */}
         </div>

          </div>
          <button onClick={()=> setmodal(false)} className="btnHollow">
            Cancel
          </button>
         </div>
        </motion.div>
      </div>
    </div>
    }
    </>
  )
}


  export default InformationModal















