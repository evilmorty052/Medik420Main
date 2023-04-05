import { motion } from "../../hooks/useMotion"
import { FaChild, FaCheck, FaSearch } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { bitcoin } from "../../assets"



export const PortfolioCard = ({header, buttontext, func, description}) => {
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

export const Pricing = () => {
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
       <Link to={'/dashboard/stocks'}> 
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



export const SearchInvestments = () => {
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
