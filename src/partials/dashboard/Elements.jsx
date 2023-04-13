import { motion } from "../../hooks/useMotion"
import { FaChild, FaCheck, FaSearch, FaInfoCircle, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { bitcoin, startupstab, digitalfarmstab, syndicatesicon, stockstab } from "../../assets"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



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

export const Tabs = ({image}) => {



    return(
      <>
       <div className="gap-x-4 flex sm:justify-center relative">
       <Link to={'crypto'}> 
       <div id="first">
           <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
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
           <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${startupstab})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Startups</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'/dashboard/stocks'}> 
       <div>
           <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${stockstab})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Stocks</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'/dashboard/digitalfarmshop'}> 
       <div>
           <div className=" w-32 h-32   p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${digitalfarmstab})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Digital Farms</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'syndicates'}> 
       <div id="last">
           <div className="  w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${syndicatesicon})`}}>
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

}

export const FarmTabs = ({image}) => {

  return(
    <>
     <div className="gap-x-10 flex">
     <Link to={'crypto'}> 
     <div>
         <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${bitcoin})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Cannabis farms</h3>
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
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">multicrop</h3>
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
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Organics</h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div>
     </Link>
     <Link to={'/dashboard/digitalfarmshop'}> 
     <div>
         <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${bitcoin})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">herbals</h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div>
     </Link>
     <Link to={'syndicates'}> 
     {/* <div>
         <div className="  w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${bitcoin})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Syndicates</h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div> */}
     </Link>
     </div>
    </>
  )

}

export const Infobutton = ({func}) => {
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

export const SearchInvestments = () => {
    const path = useLocation().pathname
    const pathhash = useLocation().hash
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
            <div className="px-4 w-full flex sm:justify-center">
            <div className="flex items-center space-x-2 p-2 bg-gray-100 max-w-xl w-full sm:min-w-[700px] md:min-w-[768px] rounded-xl">
                 <FaSearch/>
                 <hr className="w-px  h-6 bg-slate-200 mx-4" />
                 <input placeholder="Search all investments" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
            </div>
            </div>
            <div className="relative ">
            <div className="overflow-x-scroll"><Tabs/></div>
            {/* <div className={` z-[-30] absolute top-[40%] flex w-full justify-between bg-red-100  `}>
            </div> */}
       { 
           <a href="#first" className={`sm:hidden absolute top-[60px] left-0 flex items-center justify-center h-10 w-10 pr-1 z-[4000000]  rounded-full ${pathhash == '#last' ? 'bg-white' : 'bg-white/10' }`}>
              <FaChevronLeft/>
            </a>}
           {
            <a  href="#last" className={`sm:hidden absolute top-[60px]  right-0 flex items-center justify-center h-10 w-10 pl-1 z-[4000000]  rounded-full ${!pathhash | pathhash == '#first' ? 'bg-white' : 'bg-white/10'}`}>
              <FaChevronRight/>
            </a>}
            </div>
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

    const items = [
      { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
      { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
      { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
    ]

    export function Pagination({inc,dec, total, activePage, setPage, targetPage}) {

      const Numbers = () => {
      let index = 0;
      let box = []
      while ( index < total ) {
        index++
        box.push(index)
        
        
      }

        return(
          <>
          {
               box.map((item, indx)=>(
                <a onClick={() => setPage(indx + 1)}
             
                aria-current="page"
                className={`"relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-500 ease-in" ${indx +1 == activePage ? "bg-indigo-600 text-white" : "text-blk"}`}
              >
                {
                  indx == 0 ? 1 : indx + 1
                }
              </a>
              ))

          }
          </>
        )
      }
      
      return (
        <div className=" flex items-center justify-between   bg-white px-4 py-3 sm:px-6">
          {/* <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div> */}
          <div className="flex flex-1 items-center justify-center">
            {/* <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div> */}
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <span onClick={dec}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                 {
                 <Numbers/>

                 }
                <span onClick={inc}
                  
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </nav>
            </div>
          </div>
        </div>
      )
    }

  export  function Page ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4,mapElement, mapitem }) {
      const [currentPage, setCurrentPage] = useState(1);
     
      const Stocks = ({name, companyName, price, func, image, change}) => {
        return(
          <> 
            <div className="w-full">
              <div onClick={func} className="flex items-center justify-between">
                   <div>
                   <div className="flex items-center gap-x-2">
                        <div>
                            <img className=" rounded-full w-10 h-10" src={image} alt="" />
                        </div>
                        <div className="">
                            <div className="flex gap-x-4">
                            <h3 className="text-base">{name}</h3>
                            <p className="text-sm">{change}%</p>
                            </div>
                            <p className="text-gray-700 text-sm">{companyName}</p>
                        </div>
                   </div>
                   </div>
                   <p>${price}</p>
              </div>
            </div>
          </>
        )
      }
     
    
      const itemsPerPage = 4;
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const  currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.round(data?.length / itemsPerPage)
    
      
    
      
    //  function Circle(params) {
    //   const [circles, setcircles] = useState([])
    
    //   data?.forEach((element, index) => {  
    //   if(index >= totalPages)return
    //   circles.push(element)
    //   });
    
      
    //   console.log(totalPages)
    //  return(
    //   <>
    //   <div className='flex gap-x-[4px] items-center'>
    //   {circles.map((item, index)=>{
    
       
    //     return(
    //       <>
    //        <l1 onClick={()=> setCurrentPage(index+1)}  className={`text-gray-400  ${currentPage == index+1 && 'text-2xl text-green-400'}`}>{<FaCircle/>}</l1>
           
    //       </>
    //     )
    //   })}
    //   </div>
    //   </>
    //  ) 
    //  }
      function handleDecreaseSlide(params) {
        if(currentPage == 1) return
        setCurrentPage(currentPage - 1)
        console.log(currentPage)
      }
      function handleIncreaseSlide(params) {
        if(currentPage == totalPages) return
        setCurrentPage(currentPage + 1)
      }
    
      return (
        <>
        {
          currentItems.map((stock,index)=>{
      
            return(
              <Stocks key={index} func={()=> {
                handleStockScreen()
             }}  image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
            )
          })
        }
       
        </>
      );
    };

  export  function BlankPage ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4,mapElement, mapitem }) {
      const [currentPage, setCurrentPage] = useState(1);
     
      const Stocks = ({name, companyName, price, func, image, change}) => {
        return(
          <> 
            <div className="w-full">
              <div onClick={func} className="flex items-center justify-between">
                   <div>
                   <div className="flex items-center gap-x-2">
                        <div>
                            <img className=" rounded-full w-10 h-10" src={image} alt="" />
                        </div>
                        <div className="">
                            <div className="flex gap-x-4">
                            <h3 className="text-base">{name}</h3>
                            <p className="text-sm">{change}%</p>
                            </div>
                            <p className="text-gray-700 text-sm">{companyName}</p>
                        </div>
                   </div>
                   </div>
                   <p>${price}</p>
              </div>
            </div>
          </>
        )
      }
     
    
      const itemsPerPage = 4;
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const  currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.round(data?.length / itemsPerPage)
    
      
    
      
    //  function Circle(params) {
    //   const [circles, setcircles] = useState([])
    
    //   data?.forEach((element, index) => {  
    //   if(index >= totalPages)return
    //   circles.push(element)
    //   });
    
      
    //   console.log(totalPages)
    //  return(
    //   <>
    //   <div className='flex gap-x-[4px] items-center'>
    //   {circles.map((item, index)=>{
    
       
    //     return(
    //       <>
    //        <l1 onClick={()=> setCurrentPage(index+1)}  className={`text-gray-400  ${currentPage == index+1 && 'text-2xl text-green-400'}`}>{<FaCircle/>}</l1>
           
    //       </>
    //     )
    //   })}
    //   </div>
    //   </>
    //  ) 
    //  }
      function handleDecreaseSlide(params) {
        if(currentPage == 1) return
        setCurrentPage(currentPage - 1)
        console.log(currentPage)
      }
      function handleIncreaseSlide(params) {
        if(currentPage == totalPages) return
        setCurrentPage(currentPage + 1)
      }
    
      return (
        <>
        {
          currentItems.map((stock,index)=>{
      
            return(
              <Stocks key={index} func={()=> {
                handleStockScreen()
             }}  image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
            )
          })
        }
       
        </>
      );
    };