import { useState, useEffect} from 'react'
import Header from '../Header'
import { stashlogo, pattern, brain, calendar, sharedpie, useroutlined, piggybank } from '../../assets'
import { FaArrowLeft, FaChevronRight, FaUser } from 'react-icons/fa'
import { Routes, Route, useNavigate, useParams,Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from '../../hooks/useMotion'
import JSConfetti from 'js-confetti'
import {  Result, message } from 'antd'
import { Questions, Agreements } from '../../pages'
import { client } from '../../../lib/client'
import ScaleLoader from "react-spinners/ScaleLoader";
import {CurrencyInput, Loader} from '../../components'
import { ListDropdown } from './Elements'
import { LargeHeader } from "../../components/Dashboard/LaptopDisplay"






const Withdraw = ({accounts, user}) => {
const [withdraw, setwithdraw] = useState(true)
const [transfer, settransfer] = useState(false)
const [ActiveCard, setActiveCard] = useState(null)
const [setupCard, setsetupCard] = useState(null)
const jsConfetti = new JSConfetti()
const navigate = useNavigate()


const path = useLocation().pathname

const testAccounts = [
    {
    type: 'Personal',
    balance: 0,
    deployed: true,
    },
    {
    type: 'Smart',
    balance: 0,
    deployed: true,
    },
    {
    type: 'Retirement',
    balance: 0,
    deployed: false,
    },
    {
    type: 'Custodial',
    balance: 0,
    deployed: false,
    },
    
]

const availableportfolios = accounts?.filter((portfolio) => portfolio.deployed != true)
const yourportfolios = accounts?.filter((portfolio) => portfolio.deployed == true)

function DebitCard({firstname, lastname, amount, account, func, deployed, to}) {

    let gradient 

    switch (account) {
        case 'Personal':
        gradient = 'bg-gradient-to-r from-green-300 to-green-600'
            break;
        
        case 'Smart':
        gradient = 'bg-gradient-to-r from-blue-200 to-blue-500'
            break;
        
        case 'Retirement':
        gradient = 'bg-gradient-to-r from-rose-100 to-rose-300'
            break;
        
        case 'Kids':
        gradient = 'bg-gradient-to-r from-orange-100 to-orange-300'
            break;
    
        default:
            break;
    }
    
    return(
        <>
        <Link to={to}>
        <div  className='my-4  font-space  rounded-2xl '>
            <div className={` drop-shadow-2xl shadow-2xl w-[340px] h-[200px] xxs:w-[370px] xxs:h-[230px] sm:min-w-[350px] sm:min-h-[200px]  2xl:min-w-[400px]    p-4  rounded-xl  relative flex items-center `}  style={{
    backgroundImage: `url(${pattern})`,
    backgroundSize: "cover",
  }}>
                 <div className='absolute top-5  left-5'>
                     <h3 className='text-lg text-white'></h3>
                 </div>
                  <div className='px-4 z-40'>
                    <p className='text-3xl text-white font-black'>{`${'$ '}${ amount?.toLocaleString('en-us', 'currency')}`}</p>
                  </div>
                  <div className='absolute bottom-5 left-5 z-40 '>
                    <p className='text-white text-xl uppercase font-medium leading-loose '>{`${account }  Portfolio`}</p>
                  </div>
                  <div className='absolute left-2 top-2 flex items-center z-40'>
                   <div className=' w-[130px] '>
                   <img src={stashlogo} alt="" className='w-full'/>
                   </div>
                  </div>
                  <div onClick={func} className='absolute top-[43%] right-5 z-50 '>
                  {deployed ? <FaChevronRight style={{color: '#ffffff', fontSize: '20px'}}/> : 
                   <>
                   <div className='flex items-center space-x-2  rounded-2xl'>
                   <span className='text-xl font-semibold text-white'>Activate</span>
                   <FaChevronRight style={{color: 'white'}}/>
                   </div>
                   </> }
                  </div>
                  <div  className='absolute right-2 bottom-2 z-40'>
                  <span className='text-[6px] text-white'>MEDIK STASH<sup>®</sup> FDIC INSURED</span>
                  </div>
                <div className={`${gradient} absolute inset-0 opacity-75 rounded-xl shadow-inner `}></div>
            </div>
        </div>
        </Link>
        </>
    )
  }

function handleTabs(params) {
    if(withdraw){
      setwithdraw(false)
      settransfer(true)
    };
  
    if(transfer){
      settransfer(false)
      setwithdraw(true)
    }
  
  }

    const Tabs = ({tab1, tab2 , setactive, section1, section2}) => {
        return (
                <>
                  <div className="flex py-2 px-4 ">
                    <div className="flex cursor-pointer  w-full ">
                      <Link to={'/dashboard/withdraw'}
                        
                        className={
                          !path.includes("transfer")
                          ? `pb-4 border-b-8 border-blue-400 w-1/2 flex justify-center`
                            : `pb-4 border-b-4 border-gray-300 w-1/2 flex justify-center`
                        }
                      >
                        <a className="text-xl font-semibold text-center">{section1}</a>
                      </Link>
                      <Link to={'/dashboard/withdraw/transfer'}
                        
                        className={
                          path.includes("transfer")
                          ? `pb-4 border-b-8 border-blue-400 w-1/2 flex justify-center`
                            : `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center`
                        }
                      >
                        <a className="text-xl font-semibold text-center">{section2}</a>
                      </Link>
                    </div>
                  </div>
                </>
        )
      }

const AllAccountsPage = () => {

    return(
        <>
        {
         withdraw &&
           <>
            <div className='sm:container sm:mx-auto max-w-7xl md:pt-6'>
            <div className='p-2'>
                <h3 className='text-[28px] font-semibold text-gray-800 md:text-center'>Your Portfolios</h3>
            </div>
         <div className='flex justify-center'>
         <div className='flex items-center flex-col gap-y-4 mb-8 sm:grid grid-cols-2 grid-flow-row sm:gap-x-4 md:gap-x-20  lg:gap-x-8 '>  
             {
                yourportfolios?.map((portfolio)=> {
                    return(
                        <DebitCard func={()=> setActiveCard(portfolio)} key={portfolio.type} amount={portfolio.balance} account={portfolio.type} deployed={portfolio.deployed} to={`wallet/${portfolio.type?.toLowerCase()}`}/>
                    )
                })
             }
         </div>
         </div>
         <div className='p-2'>
                <h3 className='text-[28px] font-semibold text-gray-800 md:text-center'>Available Portfolios</h3>
        </div>
         <div className='flex justify-center  md:px-2'>
         <div className='flex items-center flex-col gap-y-4 sm:grid grid-cols-2 grid-flow-row sm:gap-x-4 md:gap-x-20 lg:gap-x-8  '>
             {availableportfolios?.map((portfolio)=> {
                return(
                    <>
                    <DebitCard func={()=> {
                     setsetupCard(portfolio)
                     navigate('setup')}}
                     key={portfolio.type} amount={portfolio.balance} account={portfolio.type} deployed={portfolio.deployed} to={`setup/${portfolio.type}`}/>
                    </>
                )
             })}
         </div>
         </div>
            </div>
           </>
         }
        </>
    )
}

const WithdrawPage = () =>{
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [activeCard, setActiveCard] = useState(null)
  const [beneficiary, setbeneficiary] = useState(null)

  const id = useParams().id
  console.log(id)

  const FetchAccount = async () => {
    const query = `*[_type == "users" && _id == "${user?._id}"]{accounts}`
    const accounts = await client.fetch(query).then(res => res)
    const target = accounts?.[0].accounts.filter((account)=> {
      return account.type.toLowerCase() == id.toLowerCase()
    })
    console.log(target)
    setActiveCard(target?.[0])
    
  }

  useEffect(()=>{
  FetchAccount()
  },[])



  const info = () => {
    message.error('Insufficient Balance');
  };

  

  const accounts = [
    { name: "Primary Account" },
    { name: "Savings 1090" },
  ]

  if(!activeCard){
    return(
       <Loader/>
    )
  }

  return (
    // {default version}
   <>
    <div className=" bg-white relative min-h-screen  overflow-scroll pb-[93px]  lg:grid place-content-center ">
<div className="">

<p className='text-xl font-semibold text-blk text-center'>Withdrawing from {activeCard?.type} Portfolio</p>

 <div className=' px-4 grid sm:grid-cols-8 sm:items-center sm:py-8 sm:container sm:mx-auto  lg:px-24 lg:pt-16 '>
<div className='col-span-4'>

   {/* {from section} */}

   <div className='flex items-center gap-x-4 pb-6'>
     <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
       <p className='font-semibold text-xl text-blk'>From</p>
     </div>

     <div className="">
       <p className='text-lg font-semibold text-blk'>{activeCard?.type}{" "} Portfolio</p>
       <p className='text-base font-medium text-blk'>Balance: {activeCard?.balance}</p>
     </div>
   </div>

   <hr className="w-px h-14 bg-blk mx-3" />


   {/* {to section} */}

   <div className='flex items-center gap-x-4 pt-6'>
     <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
       <p className='font-semibold text-xl text-blk'>To</p>
     </div>
     <div className="">
       <p className='text-lg font-semibold text-blk'>Beneficiary</p>
       <ListDropdown setoption={setbeneficiary} options={accounts}/>
     </div>
   </div>
</div>

 <div className='col-span-4'>
      {/* {Amount input section} */}

 <div className='flex flex-col items-start px-4 py-6 sm:py-0'>
   <div>
     {/* {input section} */}

     <div className='py-2'>
        <CurrencyInput placeholder="Enter amount to withdraw" value={withdrawAmount}  setValue={setWithdrawAmount}/>
     </div>
   </div>
 </div>

   {/* {Transfer Button} */}

   <div className='pt-10 w-full flex gap-y-4 flex-col '>
     <button onClick={info} disabled={!withdrawAmount} className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
       Withdraw
     </button>
     

      <button onClick={()=> navigate(-1)} className="btnHollow">
       Cancel
      </button>
   </div>
 </div>

 </div>
</div>
</div>
   </>
  );
}

const SetupScreen = () => {

    const AccountCreated = () => {
       
    const [loading, setloading] = useState(true)
    const [updated, setupdated] = useState(false)
    const showconfetti = () => {
        jsConfetti.addConfetti() 
    }
const createaccount = async () => {
const email = localStorage.getItem('email')
const docquery = `*[_type == 'users' && email == '${email}']{_id, accounts}`
const docid = await client.fetch(docquery).then((res) => res[0]._id)
const accounts = await client.fetch(docquery).then((res) => res[0].accounts)
const targetaccount = accounts?.find((account) => account?.type == setupCard.type)
const updatedaccounts = accounts?.map((account)=>{
    if(account.type == targetaccount.type){
        return{
           ...account,
           deployed: true 
        }
    }

    return{
        ...account
    }
})
client
.patch(docid) 
.set({
    accounts: updatedaccounts
})
.commit() 
.then((res) => {
 res && showconfetti()
 console.log(res)
 setloading(false)
}).then(() => {
    setTimeout(() => {
 window.location.replace('/dashboard/withdraw')
                    }, 4000)
})
.catch((err) => {
  console.error('Oh no, the update failed: ', err.message)
})
    }

    useEffect(() => {
    createaccount()
}, [])



        if (loading) {
            return (
                <>
                <div className="flex w-full">
                    <div className="container mx-auto max-w-5xl bg-dimWhite">
                        <div className="flex  justify-center py-10">
                             <div className="flex flex-col gap-y-8 items-center">

                            <div>
                                <h3 className={'text-[28px] font-semibold text-gray-800 text-center'}>Setting up Your Portfolio</h3>
                            </div>
                        <ScaleLoader
                 width={30}
                  color={'#00c4ee'}/>
                             </div>
                        </div>
                    </div>
                </div>
                </>
            )
        }
        return(
            <>
            <Result  status="success"
    title="Your Portfolio has been set up"
    subTitle="You Will Be Redirected To Your Dashboard Shortly"/>
            </>
        )
    }

    const DefaultScreen = ({func, activePortfolio}) => {
        const ItemBox = ({item, active}) => {
            return(
             <>
             <a  className={`${!active ? 'bg-gray-200' : 'bg-green-200'} py-6 px-4 flex w-[250px]  xxs:w-[300px] justify-center sm:justify-start rounded-md`}>
                <span className={`text-gray-700 font-semibold text-sm`}>{item}</span>
             </a>
             </>
            )
         
           }

        return (
            <>
            <AnimatePresence exitBeforeEnter={true} >
            <motion.div key={'motion'} exit={{y: '100%'}} initial={{y: "-100%"}} animate={{y:'0'}} transition={{duration: 0.6}}  className='flex flex-col sm:pt-8   px-4 space-y-8 bg-white min-h-screen    '>
                <div  className='py-4 mx-auto sm:min-w-[600px] '>
                <div className='text-start space-y-2 pb-4 max-w-[60ch]'>
                  <h3 className={'sm:text-[28px] text-[25px] uppercase leading-tight  font-bold text-gray-800 text-center'}>we need some information to set up your {activePortfolio?.type == 'Kids' ? 'Custodial' : activePortfolio?.type } portfolio</h3>
                 {/* <Why setshowmodal={handlemodal} showmodal={showmodal}/> */}
                </div>
                <div className="py-8">
                    <ul className="flex gap-y-5 flex-col items-center sm:grid grid-cols-2 sm:gap-x-8">
                        <li>
                            <ItemBox item={'Withdrawal Frequency'}/>
                            
                        </li>
                        <li>
                            <ItemBox item={'Estimated Annual Income'}/>
                        </li>
                        <li>
                            <ItemBox item={'Auto Invest Information'}/>
                            
                        </li>
                        <li>
                            <ItemBox item={'Agreements'}/>
                            
                        </li>
                        
                    </ul>
                </div>
                <div className='flex justify-between px-4 items-center '>
                  <div>
                    <a onClick={back} className='text-[20px] text-gray-700'><FaArrowLeft /></a>
                  </div>
                  <div className="py-2">
                    <button onClick={()=>navigate('setup/question1')} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                      {"Continue"}
                    </button>
                  </div>
                </div>
                </div>
               
              </motion.div>
            </AnimatePresence>
             
            </>
          );
    }
    
    const handlepage1 = () => {
        navigate('setup/question2')
    }

    const handlepage2 = () => {
        navigate('setup/question3')
    }
    
    const handlepage3 = () => {
        navigate('setup/question4')
    }

    const back = () => {
        navigate(-1)
    }

    const annualincome = [
        {
          answer: '20-50k'
        },
        {
          answer: '50-100k'
        },
        {
          answer: '100-200k'
        },
        {
          answer: '200k +'
        },
      ]

      const withdawalfrequency = [
        {
          answer: 'Daily'
        },
        {
          answer: 'Monthly'
        },
        {
          answer: 'Quarterly'
        },
        // {
        //   answer: 'Half Yearly'
        // },
        {
          answer: 'Yearly'
        }
      ]

      const autoinvest = [
        {
          answer: 'Yes'
        },
        {
          answer: 'No'
        }
      ]

    return(
        <>

        <div className="flex justify-center ">
            <Routes>
                <Route path="/" element={<DefaultScreen activePortfolio={setupCard}/>}/>
                <Route path="/question1" element={ <Questions back={()=> back()} func={() => handlepage1()} question={'What is your annual income ? '} answers={annualincome}/>}/>
                <Route path="question2" element={ <Questions back={()=> back()} func={() => handlepage2()}  question={'how frequently Do you intend to withdraw ?  '} answers={withdawalfrequency}/>}/>
                <Route path="question3" element={ <Questions back={()=> back()} func={() => handlepage3()}  question={'Set-up Auto invest For this Portfolio ? '} answers={autoinvest}/>}/>
                <Route path="question4" element={ <Agreements account={setupCard?.type == 'Kids' ? 'Custodial' : setupCard?.type } func={()=> navigate('setup/created')}/>}/>
                <Route path="created" element={ <AccountCreated/>}/>
            </Routes>
        </div>
       
        </>
    )
}

const TransferPage = () => {

  const [transferTo, settransferTo] = useState(null)
  const [transferFrom, settransferFrom] = useState(null)

  const info = () => {
    message.error('Insufficient Balance');
  };

  function handleIcon (key) {
    let icon
  
    switch (key) {
      case 'Smart':
        icon = brain  
        break;
      
        case 'Personal':
        icon = useroutlined  
        break;
        
        case 'Kids':
        icon = piggybank  
        break;
  
        case 'Retirement':
        icon = calendar  
        break;
    
      default:
        break;
    }
    return icon
  }

  const AccountItem = ({type, balance,func, icon}) => {
    return(
      <>
        <div onClick={func} className='flex justify-between items-center  border-b border-gray-600 pb-4'>
                      <div className='flex items-center flex-1 gap-x-4 '>
                         {/* <BankOutlined/> */}
                         {/* <FaUser style={{color:'gray', fontSize:'18px'}}/> */}
                         <img src={icon} className="h-[18px] w-[18px]"/>
                         <div className=''>
                         <p className='text-lg text-gray-800 font-semibold'>{type} Portfolio</p> 
                          <p>Available Cash: ${balance}</p>
                         </div>
                      </div>
                      <FaChevronRight style={{color:'gray', fontSize:'18px'}}/>
         </div>
      </>
    )
  }

  const TransferToPage = ({activeAccount}) => {
    
    const [targetAccount, setTargetAccount] = useState(null)
    const availableAccounts = accounts?.filter((account)=>{
       
      return account.type != activeAccount?.type

    })

    const TransferringPage = () => {
      const [transferAmount, setTransferAmount] = useState('')
      return(
        <div className=" bg-white relative min-h-screen pt-4  overflow-scroll pb-[93px]  lg:grid place-content-center md:pt-0 ">
        <div className="">
        
       <div className="py-4 md:py-0">
       <p className='text-xl font-semibold text-blk text-center'>Transferring from {activeAccount?.type} Portfolio</p>
       </div>
        
         <div className=' px-4 grid sm:grid-cols-8 sm:items-center sm:py-8 sm:container sm:mx-auto  lg:px-24 lg:pt-16 '>
        <div className='col-span-4'>
        
           {/* {from section} */}
        
           <div className='flex items-center gap-x-4 pb-6'>
             <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
               <p className='font-semibold text-xl text-blk'>From</p>
             </div>
        
             <div className="">
               <p className='text-lg font-semibold text-blk'>{activeAccount?.type}{" "} Portfolio</p>
               <p className='text-base font-medium text-blk'>Balance: {activeAccount?.balance}</p>
             </div>
           </div>
        
           <hr className="w-px h-14 bg-blk mx-3" />
        
        
           {/* {to section} */}
        
           <div className='flex items-center gap-x-4 pt-6'>
             <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
               <p className='font-semibold text-xl text-blk'>To</p>
             </div>
             <div className="">
               <p className='text-lg font-semibold text-blk'>{targetAccount?.type}{" "}Portfolio</p>
               <p className='text-base font-medium text-blk'>Balance: {targetAccount?.balance}</p>
               {/* <ListDropdown setoption={setbeneficiary} options={accounts}/> */}
             </div>
           </div>
        </div>
        
         <div className='col-span-4'>
              {/* {Amount input section} */}
        
         <div className='flex flex-col items-start px-4 py-6 sm:py-0 sm:px-0'>
           <div>
             {/* {input section} */}
        
             <div className='py-2'>
                <CurrencyInput placeholder="Enter amount to transfer" value={transferAmount}  setValue={setTransferAmount}/>
             </div>
           </div>
         </div>
        
           {/* {Transfer Button} */}
        
           <div className='pt-10 w-full flex gap-y-4 flex-col '>
             <button onClick={info} disabled={!transferAmount} className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
               Transfer
             </button>
             
        
              <button onClick={()=> settransferFrom(null)} className="btnHollow">
               Cancel
              </button>
           </div>
         </div>
        
         </div>
        </div>
        </div>
       )
    };

    if (targetAccount) {
      return(
        <TransferringPage/>
      )
    }

    return(
      <>
      <Header plan={user?.plan} notifications={user?.notifications} fullmenu={true}/>
         <div className='bg-white min-h-screen py-4 sm:container sm:mx-auto max-w-4xl'>
         <div className="sm:px-20">
         <Tabs section1={'Withdraw'} section2={'Transfer'}/>
         </div>
            <div className='p-2 sm:py-8'>
               <p className='text-2xl text-gray-800 font-semibold sm:text-center'>Transfer To</p>
            </div>
            <div className='px-2 py-4 flex flex-col gap-y-6 sm:px-20'>
                {
                  availableAccounts?.map((account)=>(
                    <AccountItem func={()=> setTargetAccount(account) } type={account.type} balance={account.balance} icon={handleIcon(account.type)}/>
                  ))
                } 
              <div onClick={()=> settransferFrom(null)} className='px-2 py-4 flex items-center gap-x-2 cursor-pointer'>
                 <p><FaArrowLeft/></p>
                 <p>Cancel Transfer</p>
             </div>
            </div>

         </div>
      </>
    )
  }

  if (transferFrom) {
    return(
      <>
      <TransferToPage activeAccount={transferFrom}/>
      </>
    )
  }
    return(
        <>
        
          <>
          <LargeHeader user={user}/>
          <Header plan={user?.plan} notifications={user?.notifications} fullmenu={true}/>
          <div className="sm:container max-w-2xl sm:mx-auto md:pt-14">
          <div className='bg-white min-h-screen py-4 '>
           <div className='sm:px-20'>
           <Tabs section1={'Withdraw'} section2={'Transfer'}/>
           </div>
            <div className='py-8 '>
               <p className='text-2xl text-gray-800 font-semibold sm:text-center'>Transfer From</p>
            </div>
            <div className='px-2 py-4 flex flex-col gap-y-6 sm:px-20 sm:gap-y-10 sm:container '>
                {
                  accounts?.map((account)=>(
                    <AccountItem func={()=> settransferFrom(account) } type={account.type} balance={account.balance} icon={handleIcon(account.type)}/>
                  ))
                } 
            </div>
            </div>
          </div>
          </>
         
        </>
    )
}

const HomePage = () => {
    return (
        <>
        <LargeHeader user={user}/>
        <Header plan={user?.plan} notifications={user?.notifications} fullmenu={true}/>
        <div className='pt-4  pb-[93px] md:pt-0 bg-white min-h-screen sm:container sm:max-w-5xl sm:mx-auto md:pt-16'>
             <Tabs setactive={handleTabs} section1={'Withdraw'} section2={'Transfer'} tab1={withdraw} tab2={transfer} />
             <AllAccountsPage/>
             {/* <TransferPage/> */}
        </div>
        </>
      )
}

// if (ActiveCard) {
//     return(
//         <WithdrawPage activeCard={ActiveCard}/>
//     )
//    }



  return(
    <>
    {/* <div className='md:hidden'> <Header fullmenu={true}/></div> */}
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/setup/:id' element={<SetupScreen />} />
    <Route path='transfer' element={<TransferPage activeCard={ActiveCard} />} />
    <Route path='/wallet/:id' element={<WithdrawPage activeCard={ActiveCard} />} />
   </Routes>
    </>
  )
}

export default Withdraw