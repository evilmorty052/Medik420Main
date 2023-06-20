import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect, useRef, useReducer } from "react";
import {
  FaMoneyBill,
  FaClock,
  FaSearch,
  FaArrowLeft

} from "react-icons/fa";
import Header from '../Header';
import { Page, Pagination } from './Elements';
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import {client, urlFor} from '../../../lib/client';
import {cbd, hemplogo, mixedfarm} from '../../assets';



const DigitalFarmShop = ({ children }) => {
    const [map, setMap] = useState(null)
    const [farms, setFarms] = useState([])
    const [cbdfarms, setcbdfarms] = useState([])
    const [cannabisfarms, setcannabisfarms] = useState([])
    const [mixedfarms, setmixedfarms] = useState([])


    const [ActiveFarm, setActiveFarm] = useState(false)
    const [loading, setloading] = useState(null)
    const [searchTerm, setsearchTerm] = useState('')
  
    const inputref = useRef()
    const navigate = useNavigate()
    
  
    const fetchFarms = async () => {
    const query = `*[_type == "digitalfarms"]`
    const farms = await client.fetch(query).then((res) => res)
    const cbdfarms = farms?.filter((farm)=> {
      return farm.tags.includes('CBD')
    })
    const cannabisfarms = farms?.filter((farm)=> {
      return farm.tags.includes('Cannabis')
    })
  
    const mixedfarms = farms?.filter((farm)=> {
      return farm.tags.includes('Mixed')
    })

    setcbdfarms(cbdfarms)
    setcannabisfarms(cannabisfarms)
    setmixedfarms(mixedfarms)
    setFarms(farms)
    console.log(mixedfarms)
    }

    useEffect(() => {
      fetchFarms()
    }, [])

    const farmState = {
      farms:farms
    }

    const reducer = (state, action) => {
      
      switch (action.type) {
        case "CBD":
         setFarms(cbdfarms)
         break

         case "Cannabis":
          setFarms(cannabisfarms)
          break
         
          case "Mixed":
          setFarms(mixedfarms)
          break

          case "All":
          setFarms(farms)
          break

        default:
          return state;
      }
    }

    const [state, dispatch] = useReducer(reducer, farmState)

    const FarmTabs = ({image}) => {

      return(
        <>
         <div className="gap-x-10 md:gap-x-28 flex px-2 py-4">
         
         <div onClick={()=> dispatch({type:'CBD'})}>
             <div className=" w-32 h-32   p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${cbd})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">CBD </h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
      
         <div onClick={()=> dispatch({type:'Cannabis'})}>
             <div className=" w-32 h-32    p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${hemplogo})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Cannabis </h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
            
         <div onClick={()=> dispatch({type:'Mixed'})}>
             <div className=" w-32 h-32     p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${mixedfarm})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Mixed</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
       
         {/* <div>
             <div className="  w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${bitcoin})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Syndicates</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div> */}
        
         </div>
        
        </>
      )
    
    }
    
const FarmCard = ({ func, Address, FarmName }) => {
  return (
    <>
      <a class="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-gray-800">
        <div className="relative">
          {/* <img
    alt="Home"
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full rounded-md object-cover "
    
  /> */}
        </div>
        <div class="mt-2">
          <dl>
            <div>
              <dt class="sr-only">Price</dt>

              <dd class="text-2xl text-gray-50">{FarmName}</dd>
              {/* <dd class="text-base text-gray-500">Starting Price: $240,000</dd> */}
            </div>

            <div>
              <dt class="sr-only">Address</dt>

              <dd class="font-medium text-gray-50">{Address}</dd>
            </div>
          </dl>

          {/* <div class="mt-6 flex items-center gap-8 text-xs">
            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-50">Total Bids</p>

                <p class="font-medium">2</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-50">Available Cells</p>

                <p class="font-medium">2</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-50">Other Owners</p>

                <p class="font-medium">4</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="pt-8">
          <Link to={`farmpage/${FarmName}`}>
            <button className="w-full bg-green-300 rounded-3xl p-4 text-2xl tracking-wide font-semibold">
              View Farm
            </button>
          </Link>
        </div>
      </a>
    </>
  );
};

const FarmCard2 = ({ func, Address, FarmName, tags,imageUrl }) => {

const Tag = ({title}) => {
  return(
    <>
    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">{title}</div>
    </>
  )
}

  return(
    <>
<div class="border bg-cyan-900 bg-opacity-25 rounded-3xl p-6 text-gray-100 relative z-10 cursor-auto " >
                
  <div class="flex flex-wrap items-center">

                    
    <div class="flex w-full h-48 md:h-64 lg:h-72 relative">
                                                
      <div class="w-full mx-auto relative">
                            
                            
        <img src={imageUrl} class="w-full h-full object-cover rounded-lg bg-white"/>
                        
      </div>
                        
      {/* <div class="w-4/12 h-full">
                            
        <div class="flex flex-col w-full h-full">
                                
          <div class="flex-1 pb-2">
                                    
            <div class="w-full h-full relative">
                                        
              <img src="https://stackdiary.com/140x100.png" class="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white"/>
                                    
            </div>
                                
          </div>
                                
          <div class="flex-1 pt-2">
                                    
            <div class="w-full h-full relative">
                                        
              <img src="https://stackdiary.com/140x100.png" class="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white"/>
                                    
            </div>
                                
          </div>
                            
        </div>
                        
      </div> */}
                    
    </div>

                    
    <div class="w-full pt-4 flex flex-col justify-between">
                        
      <div>
                            
        <h2 class="font-bold text-xl">{FarmName}</h2>
                            
        <div class="flex flex-wrap text-center pt-4 mb-2">
      {tags?.map((tag) => (
        <Tag title={tag} />
      ))}                                                  
        </div>
                            
        <div className='sm:min-h-[62px] max-h-[62px]'>
        <p class="text-lg leading-relaxed text-gray-50">{Address}</p>
        </div>
                                                            
        {/* <ul class="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                                                                            
          <li>Responsive</li>
                                                                            
          <li> Mobile-friendly</li>
                                                                            
          <li> Media queries</li>
                                                                            
          <li> 20MB of JavaScript</li>
                                                                    
        </ul> */}
                                                    
      </div>
                        
      <div class="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
                            
        <Link class="flex items-center justify-center text-center relative  font-bold text-sm bg-gray-200 text-gray-800 px-2 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75" to={`farmpage/${FarmName}`} >
          View Farm
        </Link>

                                                                                                                                        
        <button x-on:click="pay('Essential')" class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Place Bid</button>
                                                                                                                        
      </div>
                    
    </div>

                
  </div>
            
</div>

    </>
  )
}

    
  
  
    const FarmBreakDown = ({cellprice, provider}) => {
      return(
        <>
        <div className='w-full sm:container sm:mx-auto max-w-3xl  py-4 sm:px-4 '>
             <div className="p-4 sm:p-12 space-y-8 sm:bg-gray-200 sm:rounded-2xl sm:shadow-md">
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                         <span className='text-xl'><FaMoneyBill /></span>
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>Provider</p>
                      </div>
                      <div>
                          <p className='text-xs sm:text-xl font-semibold text-gray-800'>{provider}</p>
                      </div>
             </div>
             {/* <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                         <span className='text-xl'><FaMoneyBill /></span>
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>Farm Earnings</p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>$0.00</p>
                      </div>
             </div> */}
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                          <span className='text-xl'><FaMoneyBill /></span>
                          <p className='sm:text-[24px] text-gray-800 font-semibold'>Total Cells</p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>4</p>
                      </div>
             </div>    
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                        <a className='text-xl'><FaClock/></a> 
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>Type</p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>Green-House</p>
                      </div>
             </div>
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                        <a className='text-xl'><FaClock/></a> 
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>Cell price</p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>{cellprice}</p>
                      </div>
             </div>
             </div>
        </div>
        </>
      )
    }
  
    const BuyButton = () => {
      return(
        <>
          <div className="py-4 z-[300] w-full flex flex-col gap-y-4 items-center fixed bottom-0 bg-white md:bg-gray-200  px-2 md:fixed md:right-4 md:bottom-4 md:w-64 md:rounded-2xl">
              <button className="w-full bg-green-300 rounded-3xl p-4 text-2xl tracking-wide font-semibold">
                Place Bid
              </button>
              {/* <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
                Auction Farm
              </button> */}
            </div>
        </>
      )
    }
  
    const OwnershipActivity = ({investments}) => {
  
      const OwnerActivity = ({name, amount, avatar, status}) => {
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
          <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
          <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 ">Ownership History</h5>
              <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                  <span class="sr-only">Open dropdown</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              </button>
              </a>
         </div>
         <div  class="flow-root my-4">
              <ul  role="list" class="divide-y divide-gray-200 ">
                   {investments?.map((investment)=>{
            return(
              <OwnerActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
            )
           })}
              </ul>
         </div>
         <div className="">
             <div>
                 <h3 className="text-[18px] text-gray-600 font-semibold">Previous Owners:</h3>
                 <p className="text-2xl font-bold text-gray-800">1</p>
             </div>
         </div>
      </div>
      )
  }

  const OtherOwners = ({investments}) => {
  
    const OwnerActivity = ({name, amount, avatar, status}) => {
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
        <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">Other Owners</h5>
            <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
            </a>
       </div>
       <div  class="flow-root my-4">
            <ul  role="list" class="divide-y divide-gray-200 ">
                 {investments?.map((investment)=>{
          return(
            <OwnerActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
          )
         })}
            </ul>
       </div>
       <div className="">
           <div>
               <h3 className="text-[18px] text-gray-600 font-semibold">Cell Owners:</h3>
               <p className="text-2xl font-bold text-gray-800">1</p>
           </div>
       </div>
    </div>
    )
}
const EarningsHistory = ({investments}) => {
  
  const OwnerActivity = ({name, amount, avatar, status}) => {
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
      <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Earnings history</h5>
          <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
              <span class="sr-only">Open dropdown</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
          </a>
     </div>
     <div  class="flow-root my-4">
          <ul  role="list" class="divide-y divide-gray-200 ">
               {investments?.map((investment)=>{
        return(
          <OwnerActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
        )
       })}
          </ul>
     </div>
     <div className="">
         <div>
             <h3 className="text-[18px] text-gray-600 font-semibold">Total Earnings:</h3>
             <p className="text-2xl font-bold text-gray-800">1</p>
         </div>
     </div>
  </div>
  )
}
  
  const RecentBids = ({investments}) => {
  
    const Bid = ({name, amount, avatar, status}) => {
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
        <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Bids</h5>
            <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
            </a>
       </div>
       <div  class="flow-root my-4">
            <ul  role="list" class="divide-y divide-gray-200 ">
                 {investments?.map((investment)=>{
          return(
            <Bid status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
          )
         })}
            </ul>
       </div>
       <div className="">
           <div>
               <h3 className="text-[18px] text-gray-600 font-semibold">Highest Bid:</h3>
               <p className="text-2xl font-bold text-gray-800">$0.00</p>
           </div>
       </div>
    </div>
    )
  }

   function BlankPage ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4,mapElement, mapitem }) {
    const [currentPage, setCurrentPage] = useState(1);
   
    
   
  
    const itemsPerPage = 4;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const  currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.round(data?.length / itemsPerPage)
  
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
    <Pagination activePage={currentPage} total={totalPages} inc={handleIncreaseSlide} dec={handleDecreaseSlide} setPage={setCurrentPage} />
      <div className='flex flex-col gap-y-4 pt-4 sm:py-8 sm:grid grid-cols-2 grid-flow-row sm:gap-4 md:gap-10 lg:gap-16'>
      {
        currentItems.map((farm,index)=>{
    
          return(
            <FarmCard2 key={index} 
            FarmName={farm.FarmName}
            func={()=> setActiveFarm(farm)}
             Address={farm.address}
             tags={farm.tags}
             imageUrl={urlFor(farm.avatar)}/>
             
          )
        })
      }
      </div>
      <Pagination activePage={currentPage} total={totalPages} inc={handleIncreaseSlide} dec={handleDecreaseSlide} setPage={setCurrentPage} />
      </>
    );
  };
  
  const FarmPage = ({}) => {
  const [longitude, setLongitude] = useState('-123.1487716');
  const [latitude, setLatitude] = useState('45.2244802');
   const id = useParams()

   const ActiveFarm = farms?.filter((farm)=>{
    return farm.FarmName == id.id
   })

  

  
    // {fetch map location and marker}

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZXZpbG1vcnR5IiwiYSI6ImNsZ2F3ZHhzajFsNnczbG41cGtteTdoNXYifQ.6x-34M0_ngRCm3VjA1-HBQ';
      const map = new mapboxgl.Map({
      attributionControl: false,
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      // center: [ActiveFarm?.[0].longitude , ActiveFarm?.[0].latitude], 
      center: [`${ActiveFarm?.[0].longitude}` , `${ActiveFarm?.[0].latitude}`], 
      zoom: 0, // starting zoom
      
      });
      const marker = new mapboxgl.Marker()
          // .setLngLat([ActiveFarm?.[0].longitude , ActiveFarm?.[0].latitude])
          .setLngLat([`${ActiveFarm?.[0].longitude}` , `${ActiveFarm?.[0].latitude}`])
          .addTo(map);

        return () => {
          map.remove();
        };
      }, [loading]);


    return (
      
        <>
         
        
        <Header func={() => navigate(-1)} halfmenu={true} />
         <div className="min-h-screen bg-white overflow-y-scroll  pb-[120px] ">
          <div onClick={() => navigate(-1)} className={'hidddenfromtabupwards flex items-center gap-x-4 p-4 '}>
            <FaArrowLeft/>
           <p>Back to all farms</p>
          </div>
          <h3 className="text-2xl md:text-3xl text-blk font-semibold text-center hidden md:block">{ActiveFarm?.[0].FarmName}</h3>
           <div id="map" className="w-[calc(100vw)]  h-[40vh] max-w-[1000px] hiddenfromtabupwards"  > </div>
            <div className="p-12 hidden md:block container mx-auto max-w-5xl">
              <img src={urlFor(ActiveFarm?.[0].avatar)} className="w-full rounded-2xl"/>
            </div>
          <div className="py-4">
             {/* <h3 className="text-2xl md:text-3xl text-blk font-semibold text-center hiddenfromtabupwards">{ActiveFarm?.[0].FarmName}</h3> */}
             <h3 className="text-2xl md:text-3xl text-blk font-semibold text-center ">Farm breakdown</h3>
          </div>
           <div className="py-8 flex gap-y-10 flex-col sm:container sm:mx-auto max-w-5xl"> 
              <FarmBreakDown provider={ActiveFarm?.[0].FarmName}/>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-4'>
              <div className="px-4 w-full">
              <OtherOwners/>
              </div>
              <div className="px-4 w-full">
              <OwnershipActivity/>
              </div>
              <div className="px-4 w-full">
              <EarningsHistory/>
              </div>
              <div className="px-4 w-full">
              <RecentBids/>
              </div>
              </div>
           </div>
           <BuyButton/>
         </div>
         
        </>
      );
  }

  const HomeScreen = () => {

   if(!farmState.farms){
    return(
      <h3>Loading...</h3>
    )
   }

    return (
      <>
        <Header func={() => navigate(-1)} halfmenu={true} />
        <div className="min-h-screen bg-white overflow-y-scroll pb-[30px] md:pb-12 sm:container sm:mx-auto max-w-5xl">
          <div
            onClick={() => navigate(-1)}
            className={" hidden items-center gap-x-4 p-4  md:flex "}
          >
            <FaArrowLeft />
            <p>Back to all investments</p>
          </div>
          <div className="space-y-4 sm:min-w-[700px] pt-8">
            <div className="flex justify-between px-4 sm:justify-center">
              <h3 className="text-[28px] font-bold sm:text-center">
                Purchase High Perfoming Digital Farms{" "}
              </h3>
            </div>
            <div className="px-4 md:flex justify-center ">
              <div
                onClick={() => inputref.current.focus()}
                className="flex  items-center space-x-2 p-2 bg-gray-200 rounded-xl max-w-2xl sm:min-w-[672px] focus:border-blue-300 "
              >
                <FaSearch />
                <hr className="w-px  h-6 bg-slate-200 mx-4" />
                <div className="relative">
                  <input
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    ref={inputref}
                    id="searcInput"
                    placeholder="Search Farms"
                    className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="overflow-x-scroll py-2 md:flex justify-center">
                <FarmTabs />
              </div>
              <div className={"pt-4"}>
                <h3 className="text-2xl text-center">All Farms</h3>
              </div>
            </div>
          </div>
          <div className="pt-8 px-4 pb-[70px]">
            <BlankPage data={farmState.farms} />
          </div>
        </div>
      </>
    );
  }


  if (ActiveFarm) {
    return (
        <FarmPage ActiveFarm={ActiveFarm}/>
    )
  }

  return(
   <Routes>
        <Route index  element={<HomeScreen/>}/>
        <Route path='farmpage'>
             <Route path=':id' element={<FarmPage/>}/>
        </Route>     
   </Routes>
  )
    
  };

export default DigitalFarmShop