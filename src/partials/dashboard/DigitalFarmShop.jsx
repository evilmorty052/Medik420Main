import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect, useRef } from "react";
import {
  FaMoneyBill,
  FaClock,
  FaSearch

} from "react-icons/fa";
import Header from '../Header';
import { MockDigitalFarms } from '../../stocksupload';
import { Page, Pagination, FarmTabs } from './Elements';


const DigitalFarmShop = ({ children }) => {
    const [map, setMap] = useState(null)
    const [ActiveFarm, setActiveFarm] = useState(false)
    const [loading, setloading] = useState(null)
    const [searchTerm, setsearchTerm] = useState('')
  
    const inputref = useRef()
    
const FarmCard = ({func, Address}) => {
    return(
        <>
        <a  class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
     
     <div className='relative'>
     <img
    alt="Home"
    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full rounded-md object-cover "
    
  />

     </div>
  <div class="mt-2">
    <dl>
      <div>
        <dt class="sr-only">Price</dt>

        <dd class="text-base text-gray-500">Starting Price: $240,000</dd>
      </div>

      <div>
        <dt class="sr-only">Address</dt>

        <dd class="font-medium">{Address}</dd>
      </div>
    </dl>

    <div class="mt-6 flex items-center gap-8 text-xs">
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
          <p class="text-gray-500">Total Bids</p>

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
          <p class="text-gray-500">Available Cells</p>

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
          <p class="text-gray-500">Other Owners</p>

          <p class="font-medium">4</p>
        </div>
      </div>
    </div>
  </div>
 <div className='pt-8'>
 <button onClick={func} className="w-full bg-green-300 rounded-3xl p-4 text-2xl tracking-wide font-semibold">
   View Farm
 </button>
 
 </div>
</a>

        </>
    )
}
    
  
  
    const FarmBreakDown = () => {
      return(
        <>
        <div className='container space-y-8 py-4'>
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                         <span className='text-xl'><FaMoneyBill /></span>
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>Farm Earnings</p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>$0.00</p>
                      </div>
             </div>
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                          <span className='text-xl'><FaMoneyBill /></span>
                          <p className='sm:text-[24px] text-gray-800 font-semibold'>Total Plots</p>
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
        </div>
        </>
      )
    }
  
    const BuyButton = () => {
      return(
        <>
          <div className="py-4 z-[3000000] w-full flex flex-col gap-y-4 items-center fixed bottom-0 bg-white  px-2 md:hidden">
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
              <h5 class="text-xl font-bold leading-none text-gray-900 ">Ownership history</h5>
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
      <div className='flex flex-col gap-y-10 pt-4'>
      {
        currentItems.map((farm,index)=>{
    
          return(
            <FarmCard key={index} 
            func={()=> setActiveFarm(farm)}
             Address={farm.address}/>
          )
        })
      }
      </div>
     
      </>
    );
  };
  
  const FarmPage = ({ActiveFarm}) => {


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZXZpbG1vcnR5IiwiYSI6ImNsZ2F3ZHhzajFsNnczbG41cGtteTdoNXYifQ.6x-34M0_ngRCm3VjA1-HBQ';
      const map = new mapboxgl.Map({
      attributionControl: false,
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ActiveFarm?.longitude , ActiveFarm?.latitude], // starting position [lng, lat]
      zoom: 0, // starting zoom
      
      });
      const marker = new mapboxgl.Marker()
          .setLngLat([ActiveFarm?.longitude , ActiveFarm?.latitude])
          .addTo(map);

        return () => {
          map.remove();
        };
      }, [loading]);


    return (
      
        <>
         
        
        <Header func={() => setActiveFarm(null)} halfmenu={true} />
         <div className="min-h-screen bg-white overflow-y-scroll  pb-[120px] ">
           <div id="map" className="w-[calc(100vw)]  h-[40vh]"  >  
         
           </div>
          <div className="py-4">
             <h3 className="text-2xl text-blk font-semibold text-center">{ActiveFarm.FarmName}</h3>
          </div>
           <div className="py-8 flex gap-y-10 flex-col items-center"> 
              <FarmBreakDown/>
              <div className="px-4 w-full">
              <OwnershipActivity/>
              </div>
              <div className="px-4 w-full">
              <RecentBids/>
              </div>
           </div>
           <BuyButton/>
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
    <>
    <Header fullmenu={true}/>
    <div className="space-y-4 sm:min-w-[700px] pt-8">
          <div className="flex justify-between px-4 md:justify-center">
              <h3 className="text-[28px] font-bold md:text-center">Purchase High Perfoming Digital Farms </h3>
          </div>
          <div  className="px-4 md:flex justify-center ">
          <div onClick={() => inputref.current.focus()} className="flex  items-center space-x-2 p-2 bg-gray-200 rounded-xl max-w-2xl md:min-w-[672px] focus:border-blue-300 ">
               <FaSearch/>
               <hr className="w-px  h-6 bg-slate-200 mx-4" />
               <div className="relative">
               <input value={searchTerm} onChange={e => handleSearch(e.target.value)} ref={inputref} id="searcInput" placeholder="Search Farms" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
          </div>
          </div>
          </div>
         <div>
            <div className='overflow-x-scroll py-2'>
                <FarmTabs/>
            </div>
         </div>
       </div>
     <div className='pt-8 px-4'>
        <BlankPage data={MockDigitalFarms}/>
     </div>
    </>
  )
    
  };

export default DigitalFarmShop