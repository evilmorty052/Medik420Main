import { FaChild, FaCheck, FaSearch , FaArrowLeft, FaAngleDown} from "react-icons/fa"
import styles from "../../style"
import { useState, useEffect } from "react"
import { Progress, Result } from 'antd'
import {PortfolioScreen, CryptoinvestmentScreen, SyndicatesInvestmentScreen, BottomNavigation} from "./index"
import { Link, Route, Routes, useNavigate , useLocation} from "react-router-dom"
import { HiveBiz, RegisterInputs, Questions, Agreements, } from "../../pages"
import { motion, AnimatePresence } from "../../hooks/useMotion"
import { client } from "../../../lib/client"
import ScaleLoader from "react-spinners/ScaleLoader";
import JSConfetti from 'js-confetti'
import Header from "../Header"
import Startups from "./Startups"
import Sidebar from "../Sidebar2"
import { bitcoin } from "../../assets"


const MobilePortfolio = ({portfolios}) => {
const [activePortfolio, setactivePortfolio] = useState(false)
const [crypto, setcrypto] = useState(false)
const [sharedPortfolio, setSharedPortfolio] = useState(null)
const [expanded, setexpanded] = useState(null)

const jsConfetti = new JSConfetti()
const navigate = useNavigate()

const Tabs = ({image}) => {

    return(
      <>
       <div className="gap-x-10 flex">
       <Link to={'crypto'}> 
       <div>
           <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${bitcoin})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Crypto</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'startups'}> 
       <div>
           <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${bitcoin})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Startups</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'stocks'}> 
       <div>
           <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${bitcoin})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Stocks</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'syndicates'}> 
       <div>
           <div className="  w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${bitcoin})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Syndicates</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       </div>
      </>
    )

    // return(
    //     <>
        
    //        <Link to={'crypto'}> 
    //        <a  className="p-2  ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
    //             Crypto
    //         </a>
    //         </Link>
            
    //         <Link to={'startups'}>
    //         <a className="p-2  ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
    //             Startups
    //         </a>
    //         </Link>
            
    //         <Link to={'stocks'}>
            
    //         <a className="p-2  ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
    //             Stocks
    //         </a>
    //         </Link>
    //         <Link to={'syndicates'}>
            
    //         <a className="p-2  ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
    //             Syndicates
    //         </a>
    //         </Link>
    //     </>
    // )
}

const Pricing = () => {
    const PricingCard = () =>{
        return(
            <>
            <div
        class="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div class="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div class="relative space-y-6 p-8 sm:p-12">
            <h3 class="text-center text-3xl font-semibold text-gray-700 ">Premium</h3>
            <div>
              <div class="relative flex justify-around">
                <div class="flex items-end">
                  <span class="leading-0 text-8xl font-bold text-gray-800 ">35</span>
                  <div class="pb-2">
                    <span class="block text-2xl font-bold text-gray-700 ">%</span>
                    <span class="block text-xl font-bold  text-green-500">Off</span>
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 ">
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>First premium advantage</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Second advantage weekly</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Third advantage donate to project</span>
              </li>
            </ul>
            <a  class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-white dark:text-dark">Subscribe</span>
            </a>
          </div>
        </div>
    
        <div class="group relative md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div class="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
            <ul role="list" class="space-y-4 py-6 text-gray-600 ">
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>First premium advantage</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Second advantage weekly</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Third advantage donate to project</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>
            <p class="text-gray-700 dark:text-white">
              Team can be any size, and you can add or switch members as needed. Companies using
              our platform include:
            </p>
            <div class="mt-6 flex justify-between gap-6">
              <img
                class="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                class="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img class="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                class="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </div>
        </div>
      </div>
            </>
        )
    }
    const TrialCard = () =>{
    const [expanded, setexpanded] = useState(null)
        return(
            <>
            <div
        class="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div class="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div class="relative space-y-6 p-8 sm:p-12">
            <h3 class="text-center text-3xl font-semibold text-gray-700 ">Free Trial</h3>
            <div>
              <div class="relative flex justify-around">
                <div class="flex items-end">
                  <span class="leading-0 text-8xl font-bold text-gray-800 ">$0</span>
                  <div class="pb-2">
                    {/* <span class="block text-2xl font-bold text-gray-700 ">$</span>
                    <span class="block text-xl font-bold  text-green-500"></span> */}
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 ">
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Shared Portfolio</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Smart Portfolio</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-gray-500 inline-block"><FaCheck/></span>
                <span className=" line-through">Unlimited Protected Investments</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>3 Protected Investments</span>
              </li>
              {/* <li class="flex items-center justify-center w-full space-x-2">
                <p onClick={()=> setexpanded(!expanded)} className="uppercase">View More</p>
                <span onClick={()=> setexpanded(!expanded)} class="font-semibold text-green-500 inline-block"><FaAngleDown/></span>
              </li> */}
            </ul>
            <a  class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-white dark:text-dark">Subscribe</span>
            </a>
          </div>
        </div>
    
       {/* { expanded && 
       <AnimatePresence>
 <motion.div key={'jkj'} layout={'position'} exit={{x: '-100%'}} transition={{duration: 0.7}} class="group relative md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            class="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <motion.div class="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
            <ul role="list" class="space-y-4 py-6 text-gray-600 ">
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>First premium advantage</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Second advantage weekly</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Third advantage donate to project</span>
              </li>
              <li class="space-x-2">
                <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>
            <p class="text-gray-700 dark:text-white">
              Team can be any size, and you can add or switch members as needed. Companies using
              our platform include:
            </p>
            <div class="mt-6 flex justify-between gap-6">
              <img
                class="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                class="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img class="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                class="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </motion.div>
        </motion.div>
       </AnimatePresence>
       
        } */}
      </div>
            </>
        )
    }



    return(
        <>
        
        <div class="xl:container m-auto px-6 pb-[83px] pt-10 md:px-12 lg:px-20">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
      <h2 class="text-3xl font-bold text-gray-800 text-center py-4 md:text-4xl">
          Pricing
        </h2>
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          You need a Subscription to  access premium features 
        </h2>
      </div>
     <div className=" space-y-10">
     <PricingCard/>
     <TrialCard/>
    </div> 
      
    </div>
                                        
        </>
      )
}

const SearchInvestments = () => {
const path = useLocation().pathname
const [invisible, setinvisible] = useState(false)

let view
const DefaultHeader = () => {
    return(
        <>
           <div className="space-y-4 sm:min-w-[700px] md:flex flex-col items-center">
        <div className="flex justify-between px-2">
            <h3 className="text-[28px] font-bold">Build Your Investment Portfolio</h3>
            {/* <span>explore investments</span> */}
        </div>
        <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-gray-100 max-w-xl md:min-w-[768px] rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search all investments" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
        <div className="w-full flex space-x-8 sm:justify-center  p-4 overflow-x-scroll"><Tabs image={bitcoin}/></div> 
     </div>
        </>
    )
}

const CryptoHeader = ({invisible}) =>{
    return(
        <>
          { !invisible && <div className="space-y-8 sm:min-w-[700px]">
        <div className="flex sm:justify-center   px-2 mb-4">
            <h3 className="text-[28px] font-bold sm:text-center ">Build Your Crypto Portfolio Safely</h3>
        </div>
     </div>}
        </>
    )  
}

const SyndicatesHeader = ()=>{
    return(
        <>
          <div className="space-y-8 sm:min-w-[700px]">
        <div className="flex sm:justify-center  px-2 mb-4 ">
            <h3 className="text-[28px] font-bold sm:text-center ">Invest in syndicates to boost your earnings </h3>
            {/* <div className=" bg-red-300 p-2 rounded-full">
                <span>?</span>
            </div> */}
        </div>
        <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-white rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search syndicates" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
     </div>
     
        </>
    )
}

switch (path) {
    case '/dashboard/portfolio':
      view =  <DefaultHeader/> 
        break;
    case '/dashboard/Portfolio/crypto':
      view =  <CryptoHeader /> 
    //   setinvisible(true)
        break;
    case '/dashboard/Portfolio/syndicates':
      view =  <SyndicatesHeader />
    //   setinvisible(true)
        break;
    default:
        break;
}

    return(
     <>{view}</>
    )
}

const PortfolioCard = ({header, buttontext, func, description}) => {
    return(
        <>
         <motion.div animate={{opacity: 1}} initial={{opacity: 0}} whileTap={{scale:1.2}} whileHover={{scale:1.2}} className="flex items-center space-x-4 bg-gray-200 max-w-[350px] px-2 py-4 rounded-xl">
             <div className="p-2 bg-white rounded-xl">
                <FaChild/>
             </div>
             <div className="flex items-center space-x-2">
                 <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{header}</h3>
                     <p className=" text-sm leading-normal" >{description} </p>
                 </div>
                 <button onClick={func} className="w-20  bg-green-300 py-1  rounded-3xl">{buttontext}</button>
             </div>
         </motion.div>
        </>
    )
}



const AllPortfolios = () => {


   
    
    const availableportfolios = portfolios?.filter((portfolio) => portfolio.deployed != true)
    const yourportfolios = portfolios?.filter((portfolio) => portfolio.deployed == true)

    

    return(
        <>
        
        <div className="md:hidden"><Header setisExpanded={setexpanded} fullmenu={true} halfmenu={false}/></div>
        <div onClick={()=> expanded && setexpanded(false)} className="pb-[90px] h-screen overflow-y-scroll md:pb-10 md:container mx-auto bg-white  md:px-20">
         <SearchInvestments/>
           <div className="px-2 pt-8 space-y-10 ">
               <div className="space-y-8 md:space-y-10">
                  <div className="md:px-14">
                    <h3 className={styles.UiHeading}>New features</h3>
                  </div>
                <div className="md:flex gap-x-10 hidden justify-center ">
                <PortfolioCard func={() => setSharedPortfolio(true)} header={'Shared Portfolio'} description={'find out how easy it is to share a portfolio with another user.'} buttontext={'Explore'}/>
                <div>
                <PortfolioCard func={() => setSharedPortfolio(true)} header={'Shared Portfolio'} description={'find out how easy it is to share a portfolio with another user.'} buttontext={'Explore'}/>
                </div>
                </div>
                 <div className="sm:hidden flex justify-center">
                 <PortfolioCard func={() => setSharedPortfolio(true)} header={'Shared Portfolio'} description={'find out how easy it is to share a portfolio with another user.'} buttontext={'Explore'}/>
                 </div>
               </div>

             { yourportfolios && 
              <div className="space-y-8 py-4 md:space-y-10">
                  <div className="md:px-14"><h3 className={styles.UiHeading}>Your Portfolios</h3></div>
                <div className="flex  justify-center">
                <div className="flex flex-col gap-x-10 gap-y-6 items-center sm:grid grid-cols-2 grid-flow-row ">
                 {yourportfolios?.map((portfolio) => (
                              <PortfolioCard
                              func={()=> {
                                 // setactivePortfolio(true)
                                 setactivePortfolio(portfolio)
                                 navigate('portfolio')
                             }} 
                                 header={`${portfolio.type} Portfolio`} description={'Explore stocks startups and crypto and invest as you see fit '} buttontext={'View'}/>
                 ))}
                </div>
                </div>
               </div>
               }

               {
                availableportfolios &&
                <div className="space-y-8 py-4 md:space-y-10">
                  <div className="md:px-14">
                  <h3 className={styles.UiHeading}>Available Portfolios</h3>
                  </div>
                 <div className="flex justify-center">
                 <div className="flex gap-x-10 flex-col gap-y-8  items-center sm:grid grid-cols-2 grid-flow-row ">
                {availableportfolios?.map((portfolio)=>{
                    
                    return(
                        <>
                        
                        <PortfolioCard func={()=> {
                            setactivePortfolio(portfolio)
                            navigate('setup')
                            }} header={`${portfolio.type} portfolio`} description={portfolio.description} buttontext={'Setup'}/>
                  
                        </>
                    )
                })}
                </div>
                 </div>
           
               </div>
               }
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
            <motion.div key={'motion'} exit={{y: '100%'}} initial={{y: "-100%"}} animate={{y:'0'}} transition={{duration: 0.6}}  className='flex flex-col   px-4 space-y-8    '>
                <div  className='py-4 mx-auto sm:min-w-[600px] '>
                <div className='text-start space-y-2 pb-4 max-w-[60ch]'>
                  <h3 className={'sm:text-[28px] text-[25px] uppercase leading-tight  font-bold text-gray-800 text-center'}>we need some information to set up your {activePortfolio.type == 'Kids' ? 'Custodial' : activePortfolio.type } portfolio</h3>
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
                <Route path="/question1" element={ <Questions back={()=> back()} func={() => handlepage1()} question={'What is your annual income ? '} answers={annualincome}/>}/>
                <Route path="question2" element={ <Questions back={()=> back()} func={() => handlepage2()}  question={'how frequently Do you intend to withdraw ?  '} answers={withdawalfrequency}/>}/>
                <Route path="question3" element={ <Questions back={()=> back()} func={() => handlepage3()}  question={'Set-up Auto invest For this Portfolio ? '} answers={autoinvest}/>}/>
                <Route path="question4" element={ <Agreements account={activePortfolio.type == 'Kids' ? 'Custodial' : activePortfolio.type } func={()=> navigate('setup/created')}/>}/>
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

 const StocksScreen = () => {
  const [stocks, setstocks] = useState([])
  const [activeStock, setactiveStock] = useState(null)

  const fetchStocks = async () => {
      const res = await fetch("https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Energy&exchange=NASDAQ&dividendMoreThan=0&limit=20&apikey=d3112acd4e081291c5239fb8af8763e7")
      const data = await res.json()
      setstocks(data)
      console.log(data)
  }
  
  useEffect(() => {
    fetchStocks()
  
  }, [])


  const StockTabs = () => {
    return(
        <>
        
           <Link to={'crypto'}> 
           <a  className="p-2 shadow-2xl ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
                Technology
            </a>
            </Link>
            {/* <a className="p-2 shadow-2xl ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[100px] min-w-[100px] rounded-3xl">
                Stocks
            </a> */}
            <Link to={'startups'}>
            <a className="p-2 shadow-2xl ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
                Consumer
            </a>
            </Link>
            
            <Link to={'stocks'}>
            
            <a className="p-2 shadow-2xl ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
                Finance
            </a>
            </Link>
            <Link to={'syndicates'}>
            
            <a className="p-2 shadow-2xl ring-1 ring-white text-gray-700 font-space font-semibold bg-green-200 flex justify-center  max-w-[120px] min-w-[120px] rounded-3xl">
                Communication
            </a>
            </Link>
        </>
    )
}
  const StocksHeader = () => {
    return(
        <>
           <div className="space-y-4 sm:min-w-[700px]">
        <div className="flex justify-between px-2">
            <h3 className="text-[28px] font-bold">Invest In Stocks With Auto-Balancing</h3>
            {/* <span>explore investments</span> */}
        </div>
        <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search stocks" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
        <div className="w-full flex space-x-8 sm:justify-center  p-4 overflow-x-scroll"><StockTabs/></div> 
     </div>
        </>
    )
}

const StockPage = ({activeStock}) => {
const [stockdata, setstockdata] = useState(null)
const [stockNews, setstockNews] = useState(null)

  const fetchStock = async () => {
      const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${activeStock.symbol}?apikey=d3112acd4e081291c5239fb8af8763e7      `)
      const data = await res.json()
      const news = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${activeStock.symbol}&page=0&apikey=d3112acd4e081291c5239fb8af8763e7&limit=5`)
      const newsdata = await news.json()
      setstockNews(newsdata)
      setstockdata(data)
      console.log(newsdata)
  }

  useEffect(() => {
    fetchStock()
  }, [])

  if (!stockdata) {
    return(
      <div className="flex justify-center">
         .... loading
      </div>
    )
    
  }

  return(
    <> 
       {activeStock && <Stocks name={activeStock.name} companyName={activeStock.companyName} price={activeStock.price} func={()=> setactiveStock(null)}/>}
    </>
  )
}

const Stocks = ({name, companyName, price, func}) => {
  return(
    <> 
      <div>
        <div onClick={func} className="flex justify-between">
             <div>
             <h3>{name}</h3>
             <p>{companyName}</p>
             </div>
             <p>{price}</p>
        </div>
      </div>
    </>
  )
}

if (activeStock) {
  return(
    <>
    <StockPage activeStock={activeStock} />
    </>
  )
}


  return(
    <>
    <div className="py-4">
     <StocksHeader/>
     <div className="flex">
         <div className="flex flex-col">
             {
                 stocks?.map((stock, index) => {
                     return(
                         <Stocks func={()=> setactiveStock(stock)} key={index} name={stock.symbol} companyName={stock.companyName} price={stock.price}/>
                         )
                 })
             }
         </div>
     </div>
    </div>
    </>
  )
 }

if(sharedPortfolio){
    return(
        <>
        <div className="z-[7000]"><Header func={()=>{ 
          console.log('clicked')
          setSharedPortfolio(false)}} halfmenu={true} /></div>
        <Pricing/>
        </>
    )
}

  return (
   <> 
   <div className="md:hidden"><Sidebar sidebarOpen={expanded}  setSidebarOpen={setexpanded} /></div>
   <motion.div  initial={{x:'-100%'}} animate={{x:'0', }} transition={{duration:0.5, delayChildren:0.7}} className=" md:container  ">
         {/* <div className="sm:flex sm:justify-center"><SearchInvestments/></div>  */}
        {/* <div className="w-full flex space-x-8 sm:justify-center  p-4 overflow-x-scroll"><Tabs/></div>  */}
        <Routes>
            <Route path="/" element={<AllPortfolios/>}/>
            <Route path="crypto" element={<CryptoinvestmentScreen />}/>
            <Route path="startups" element={<StartupsPage/>}/>
            <Route path="portfolio" element={<PortfolioScreen ActivePortfolio={activePortfolio}/>}/>
            <Route path="syndicates/*" element={<SyndicatesInvestmentScreen/>}/>
            <Route path="stocks/*" element={<StocksScreen/>}/>
            <Route path="setup/*" element={<SetupScreen/>}/>
        </Routes>
    </motion.div>
        
    
        {/* <BottomNavigation/> */}
        </>
  )
}

export default MobilePortfolio