import { motion, AnimatePresence } from "../hooks/useMotion"
import { FaArrowRight, FaMoneyBill, FaClock, FaClipboard } from "react-icons/fa"
import { useState, useEffect } from "react"
import ScaleLoader from "react-spinners/ScaleLoader";
import { client } from "../../lib/client";
import { CloseOutlined } from "@ant-design/icons";
import { Empty } from "antd";

import JSConfetti from 'js-confetti'


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
                  <CloseOutlined className='text-sm'/>
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


const DefaultView = () => {
  return(
    <motion.div key={'modalo'}  exit={{y:'500%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative max-w-md '>
                <div>
                   <h3 className='text-[28px] text-gray-700 font-semibold text-center mb-4'>{'Claim 10$ ?'}</h3>
                    <p className='text-lg text-center'>Boost Your Investment Funds With $10 From us when you subscribe to a Plan Including our 7 days Free Trial plan </p>
                   </div>
                <div className='py-4 flex justify-center'>
                   <button onClick={()=> setcurrentView('Claiming')} className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
                       <span className='text-xl text-center'>Claim Boost</span>
                        {/* <FaArrowRight style={{color: '#f9f8f8'}}/> */}
                   </button>
                </div>
                <div onClick={()=> setmodal(!modal)} className='absolute top-0 right-2'>
                  close
                </div>
    </motion.div>
  )
}

const ClaimingView = () => {
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

  useEffect(() => {

  setClaimed()
  createaccount()
  }, [])
  

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
   
   <div  key={'moda'} className='fixed z-[500] md:hidden  flex justify-center items-center inset-0 bg-black/40 px-2'>
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

//   export const ClaimModal = ({modal , setmodal, question,  freetrial}) => {
//     const [loading, setloading] = useState(null)
//     const [claiming, setclaiming] = useState(null)
//     const [subscribe, setsubscribe] = useState(null)
//     const [verify, setverify] = useState(null)

// useEffect(() => {
//   if (!claiming) {
//     return
//   }

//   if (claiming) {
//     setTimeout(() => {
//       setclaiming(false)
//       setverify(true)
//     }, 5000);
//   }

// }, [claiming])

// const handleclose = (e) => {

// if (e.currentTarget.id == 'lk') {
//   setclaiming(false)
// setsubscribe(false)
// setverify(false)
// setloading(false)
// setmodal(false)
//   return
// }

// console.log(e.currentTarget.id)

// }

//       return(
//         <>
//         <AnimatePresence>
//        {modal && 
//        <div key={'moda'} className='fixed pb-[90%] pt-40 flex justify-center  inset-0 bg-black/40 px-2'>
//               <motion.div key={'modalo'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className={!subscribe ? 'bg-white py-8 px-2 rounded-2xl relative h-[300px] ' : 'bg-white py-8 px-2 rounded-2xl relative hidden'}>
//                   <div>
//                        <h3 className='text-[28px] text-gray-700 font-semibold text-center mb-4'>{'Claim 10$ ?'}</h3>
//                        <p className='text-lg text-center'>Boost Your Investment Funds With $10 From us when you subscribe to a Plan Including our 7 days Free Trial plan </p>
//                   </div>
//                   <div className='py-4 flex justify-center'>
//                      <button onClick={() => {
//                       setloading(true)
//                         setTimeout(() => {
//                           setloading(false)
//                           setsubscribe(true)
//                           setclaiming(true)
//                         }, 3000);}
//                       } className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
//                          <span className='text-lg text-center'>{!loading ? 'Subscribe' : 'loading..'}</span> { !loading && <FaArrowRight style={{color: '#f9f8f8'}}/>}
//                      </button>
//                   </div>
//                   <div onClick={()=> {
//                     setloading(false)
//                     setmodal(!modal)}
//                     } className='absolute top-2 right-2'>
//                     close
//                   </div>
//                </motion.div>
//         </div> }
//        {subscribe && 
//        <div id="lk"  key={'modaul'} onClick={(e)=> {
//         handleclose(e)
//         }} className='fixed pt-40  flex justify-center inset-0 bg-black/40 px-2'>
//               <div onClick={(e) => e.stopPropagation()} className="z-10" id="modal-container">
//               <motion.div  key={'modalin'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className={ 'bg-white py-8 px-2 space-y-5 rounded-2xl min-w-[calc(100vw-5vw)] relative h-[400px]'}>
//                   <div className="flex justify-center items-center">
                      
//                  {claiming &&  <div className="">
//                       <div className="text-2xl text-center tracking-wider text-gray-600 mb-4">
//                           <h3>Claiming...</h3>
//                       </div>
//                    <ScaleLoader
//                     width={30}
//                     color={'#00c4ee'}/>
//                    </div>}
//                   </div>
//                   <div className=" flex flex-col gap-y-4 items-center">
//                   { verify && 
//                       <>
//                         <div className="text-center pb-8">
//                             <h3 className="text-2xl font-semibold text-gray-800 mb-2">Verify your Email</h3>
//                             <p className="text-lg tracking-wide">Please verify Your Email on file to Continue claiming your welcome bonus or update your primary email from settings to verify a different email</p>
//                         </div>
//                           <button onClick={(e) => {
//                       e.stopPropagation()
//                       mojoauth.signIn()
//                         }
//                         } className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
//                           <span className='text-lg text-center'>{'Verify Email'}</span>
//                             {/* { !loading && <FaArrowRight style={{color: '#f9f8f8'}}/>} */}
//                       </button>
//                       </>
//                      }
//                   </div>
//                </motion.div>
//               </div>
//         </div> }
//         </AnimatePresence>
//         </>
//       )
//     }


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
     <div onClick={()=> modal && setmodal(false)} key={'moda'} className='fixed md:z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2'>
             <div className="relative">
             <motion.div key={'modalo'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5  min-w-[calc(100vw-5vw)] '>
                 <div className="py-4 space-y-5">
                       <h3 className="text-center text-xl text-gray-800 font-semibold">Investment Breakdown</h3>
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
                  <CloseOutlined className='text-sm'/>
                </div>
             </div>
      </div>
            
            }
      </AnimatePresence> 
    </>
  )
}


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
                  <CloseOutlined className='text-sm'/>
                </div>
             </div>
      </div>
            
            }
      </AnimatePresence> 
    </>
  )
}


  export default InformationModal