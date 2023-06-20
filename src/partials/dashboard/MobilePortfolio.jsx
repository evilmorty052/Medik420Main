import 
{ FaChild, 
 FaCheck, 
 FaSearch ,
 FaArrowLeft, 
 FaChevronLeft ,
 FaChevronRight} from "react-icons/fa"
import styles from "../../style"
import { useState, useEffect } from "react"
import { Result } from 'antd'
import {
  PortfolioScreen, 
  CryptoinvestmentScreen, 
  SyndicatesInvestmentScreen,
  BottomNavigation,
  DashboardPricing,
  SearchInvestments
} from "./index"
import { Link, Route, Routes, useNavigate , useLocation} from "react-router-dom"
import {Questions, Agreements, } from "../../pages"
import { motion, AnimatePresence } from "../../hooks/useMotion"
import { client } from "../../../lib/client"
import ScaleLoader from "react-spinners/ScaleLoader";
import JSConfetti from 'js-confetti'
import Header from "../Header"
import Startups from "./Startups"
import './MobilePortfolio.css'
import { brain, calendar, sharedpie, useroutlined, piggybank} from "../../assets"
import { LargeHeader } from "../../components/Dashboard/LaptopDisplay"
import {Loader} from "../../components"




const MobilePortfolio = ({portfolios, user,}) => {
const [activePortfolio, setactivePortfolio] = useState(false)
const [crypto, setcrypto] = useState(false)
const [sharedPortfolio, setSharedPortfolio] = useState(null)
const [expanded, setexpanded] = useState(null)

const jsConfetti = new JSConfetti()
const navigate = useNavigate()


const AllPortfolios = () => {

  const PortfolioCard = ({header, buttontext, func, description, icon, iconsize, active}) => {
    return(
        <>
         <motion.div onClick={func} whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{ease: 'easeIn', duration: 0.2}}  className="flex items-center space-x-4 bg-gray-200/80 shadow-xl ring-1 ring-slate-200 max-w-[350px] px-2 py-4 rounded-xl">
             <div className="">
                <img src={icon} alt="" className={` ${iconsize}`} />
             </div>
             <div className="flex items-center space-x-2">
                 <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{header}</h3>
                     <p className=" text-sm leading-normal" >{description} </p>
                 </div>
                 {
                  !active ?
                  <button  className="w-20  bg-green-300 py-1  rounded-3xl">{buttontext}</button>
                  : <FaChevronRight onClick={func}/>}
             </div>
         </motion.div>
        </>
    )
}

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
   
    
    const availableportfolios = portfolios?.filter((portfolio) =>  {return portfolio.deployed != true})
    const yourportfolios = portfolios?.filter((portfolio) => { return portfolio.deployed == true})

    

    return(
        <>
        <LargeHeader user={user}/>
        <Header plan={user?.plan} notifications={user?.notifications} setisExpanded={setexpanded} fullmenu={true} halfmenu={false}/>
        <div onClick={()=> expanded && setexpanded(false)} className=" mx-auto bg-white pt-4  pb-[90px] sm:pb-10 min-h-screen  md:pt-20  md:pb-10 md:container  md:px-20">
         <div className="w-full">
         <SearchInvestments/>
         </div>
           <div className="px-2 pt-8 space-y-10 md:space-y-16 ">
              
               {/* your portfolios section */}
             { yourportfolios && 
              <div className="space-y-8 py-4 md:space-y-10">
                  <div className="md:px-14 "><h3 className={`text-2xl  text-blk font-semibold   sm:tracking-wide sm:text-center`}>Your Portfolios</h3></div>
                <div className="flex  justify-center">
                <div className="flex flex-col gap-x-10 gap-y-6 items-center sm:grid grid-cols-2 grid-flow-row ">
                 {yourportfolios?.map((portfolio) => (
                              <PortfolioCard
                              func={()=> {
                                 // setactivePortfolio(true)
                                 setactivePortfolio(portfolio)
                                 navigate(`${portfolio._key}`)
                                 console.log(portfolio)
                             }} 
                                 header={`${portfolio.type} Portfolio`} description={portfolio.description} buttontext={'View'} icon={handleIcon(portfolio.type)} iconsize={'h-16 w-16'} active={portfolio.deployed}/>
                 ))}
                </div>
                </div>
               </div>
               }
                {/* available portfolio section */}
               {
                availableportfolios?.length > 0 &&
                <div className="space-y-8 py-4 md:space-y-10">
                  <div className="md:px-14">
                  <h3 className={`text-2xl  text-blk font-semibold   sm:tracking-wide sm:text-center`}>Available Portfolios</h3>
                  </div>
                 <div className="flex justify-center">
                 <div className="flex gap-x-10 flex-col gap-y-12  items-center sm:grid grid-cols-2 grid-flow-row ">
                {availableportfolios?.map((portfolio, index)=>{
                    
                    return(
                        <>
                        
                        <PortfolioCard key={index} func={()=> {
                            setactivePortfolio(portfolio)
                            console.log(activePortfolio)
                            navigate('setup')
                            }} header={`${portfolio.type} portfolio`} description={portfolio.description} buttontext={'Setup'} icon={handleIcon(portfolio?.type)} iconsize={'h-14 w-14'}/>
                  
                        </>
                    )
                })}
                </div>
                 </div>
           
               </div>
               }
                {/* shared portfolio section */}
                {/* <div className="space-y-8 md:space-y-10">
                  <div className="md:px-14">
                    <h3 className={`text-2xl  text-blk font-semibold sm:text-center  sm:tracking-wide`}>Shared Portfolios</h3>
                </div>
                 <div className=" flex justify-center">
                 <PortfolioCard func={() => setSharedPortfolio(true)} header={'Shared Portfolio'} description={'find out how easy it is to share a portfolio with another user.'} buttontext={'Explore'} icon={useroutlined} iconsize={'h-20 w-20'}/>
                 </div>
               </div> */}
           </div>     
         </div>
        
        </>
    )
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
const targetaccount = accounts?.find((account) => account.type == activePortfolio.type)
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
 window.location.replace('/dashboard/portfolio')
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
                {/* <div className="flex w-full min-h-screen">
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
                </div> */}
                <div className="bg-white min-h-screen container mx-auto flex flex-col justify-center items-center">
                <h3 className={'text-[28px] font-semibold text-gray-800 text-center'}>Setting up Your Portfolio</h3>
                <ScaleLoader
                 width={30}
                  color={'#00c4ee'}/>
                </div>
                </>
            )
        }
        return(
            <>
           <div className="h-screen bg-white">
           <Result  status="success"
    title="Your Portfolio has been set up"
    subTitle="You Will Be Redirected To Your Dashboard Shortly"/>
           </div>
            </>
        )
    }

    const DefaultScreen = ({func}) => {
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
            <motion.div key={'motion'} exit={{y: '100%'}} initial={{y: "-100%"}} animate={{y:'0'}} transition={{duration: 0.6}}  className='flex min-h-screen sm:pt-14 md:pt-20 flex-col   px-4 space-y-8    '>
                <div  className='py-4 mx-auto sm:min-w-[600px] '>
                <div className='text-start space-y-2 pb-4 max-w-[60ch]'>
                  <h3 className={'sm:text-[28px] text-[20px] uppercase leading-tight  font-semibold text-gray-800 text-center'}>we need some information to set up your {activePortfolio.type == 'Kids' ? 'Custodial' : activePortfolio.type } portfolio</h3>
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
                <Route path="/" element={<DefaultScreen/>}/>
                <Route path="/question1" element={ <Questions styles={'md:pt-14'} back={()=> back()} func={() => handlepage1()} question={'What is your annual income ? '} answers={annualincome}/>}/>
                <Route path="question2" element={ <Questions styles={'md:pt-14'} back={()=> back()} func={() => handlepage2()}  question={'how frequently Do you intend to withdraw ?  '} answers={withdawalfrequency}/>}/>
                <Route path="question3" element={ <Questions styles={'md:pt-14'} back={()=> back()} func={() => handlepage3()}  question={'Set-up Auto invest For this Portfolio ? '} answers={autoinvest}/>}/>
                <Route path="question4" element={ <Agreements styles={'md:pt-14'}  account={activePortfolio.type == 'Kids' ? 'Custodial' : activePortfolio.type } func={()=> navigate('setup/created')}/>}/>
                <Route path="created" element={ <AccountCreated/>}/>
            </Routes>
        </div>
       
        </>
    )
}


 const StartupsPage = () => {
  return(
    <>
    <div className="">
    <Startups/>
    </div>
    </>
  )
 }

 

if(sharedPortfolio){
    return(
        <>
        <div className="z-[7000]"><Header func={()=>{ 
          setSharedPortfolio(false)}} halfmenu={true} /></div>
        <DashboardPricing/>
        </>
    )
}

if(!portfolios){
return(
  <Loader/>
)
}

  return (
   <> 
   
   <div   className=" md:container mx-auto   ">
         {/* <div className="sm:flex sm:justify-center"><SearchInvestments/></div>  */}
        {/* <div className="w-full flex space-x-8 sm:justify-center  p-4 overflow-x-scroll"><Tabs/></div>  */}
        <Routes>
            <Route path="/" element={<AllPortfolios/>}/>
            <Route path="crypto/*" element={<CryptoinvestmentScreen />}/>
            <Route path="startups/*" element={<StartupsPage/>}/>
            <Route path="/:id" element={<PortfolioScreen />}/>
            <Route path="syndicates/*" element={<SyndicatesInvestmentScreen/>}/>
            {/* <Route path="stocks/*" element={<StocksScreen/>}/> */}
            <Route path="setup/*" element={<SetupScreen/>}/>
        </Routes>
    </div>
        
        </>
  )
}

export default MobilePortfolio