import { motion, AnimatePresence } from "../hooks/useMotion"
import { FaArrowRight } from "react-icons/fa"
import { useState, useEffect } from "react"
import ScaleLoader from "react-spinners/ScaleLoader";
import { client } from "../../lib/client";

import JSConfetti from 'js-confetti'


const InformationModal = ({modal , setmodal, question, answer}) => {

    return(
      <>
      <AnimatePresence>
     {modal && 
     <div key={'moda'} className='fixed z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2'>
            <motion.div key={'modalo'}  exit={{y:'200%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative max-w-md '>
                <div>
                     <h3 className='text-[20px] text-gray-700 font-semibold text-center mb-4'>{question}</h3>
                     <p className='text-base text-center'>{answer}</p>
                </div>
                <div className='py-4 flex justify-center'>
                   <button className='bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl'>
                       <span className='text-lg text-center'>View Documentation</span> <FaArrowRight style={{color: '#f9f8f8'}}/>
                   </button>
                </div>
                <div onClick={()=> setmodal(!modal)} className='absolute top-0 right-2'>
                  close
                </div>
             </motion.div>
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
    <motion.div key={'modalo'}  exit={{y:'500%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative  min-w-[calc(100vw-5vw)] '>
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
    <motion.div key={'modalo'}  exit={{y:'500%'}} initial={{y:'-100%'}} animate={{y:'0'}} className='bg-white py-8 px-2 rounded-2xl space-y-5 relative  min-w-[calc(100vw-5vw)] '>
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
     <div  key={'moda'} className='fixed z-[500]  flex justify-center items-center inset-0 bg-black/40 px-2'>
            {view} <div id={ "mojoauth-passwordless-form" }></div>
      </div>
            
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

  export default InformationModal