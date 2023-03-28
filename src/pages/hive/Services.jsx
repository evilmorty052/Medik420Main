import React, {useState} from 'react'
import styles from '../../style'
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa'
import hemp from '../../assets/hemplogo.png'
import Globe from '../../assets/globe.png'
import Gate from '../../assets/gate.png'
import { Link } from 'react-router-dom'

const Services = () => {

    const [tab1, settab1] = useState(true)
    const [tab2, settab2] = useState(false)
    const [tab3, settab3] = useState(false)
    
   
    function handleIncreaseSlide(params) {
      if (tab1) {
        settab1(false)
        settab2(true)
      }
  
      else if(tab2){
         settab2(false)
         settab3(true)
      }
  
      else if (tab3){
        settab3(false)
        settab1(true)
      }
  
    }
    function handleDecreaseSlide(params) {
      if (tab1) {
        settab1(false)
        settab3(true)
      }
  
      else if(tab2){
         settab2(false)
         settab1(true)
      }
  
      else if (tab3){
        settab3(false)
        settab2(true)
      }
  
    }
  return (   
          <>
            <div class="relative pt-4 border-b-4 container sm:max-w-[95%] mx-auto border-gray-200">
              <div class="container max-w-7xl relative m-auto px-[10px] text-gray-500 md:px-12">
                <WhatIsOneHive tab1={tab1} tab2={tab2} tab3={tab3}/>
                <div className="flex sm:hidden pt-1 pb-4 mx-auto  justify-center w-1/2">
                  <div className="flex  w-full">
                      <ul className="flex  w-full justify-center items-center  gap-x-8">
                     <li className="text-2xl">
                     <FaAngleLeft onClick={handleDecreaseSlide}  />
                    </li>
                        <l1 className={`text-gray-800 ${tab1 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab2 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab3 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                     <li className="text-2xl">
                     <FaAngleRight onClick={handleIncreaseSlide}/>
                    </li>
                      </ul>
                  </div>
                </div>
                <div className="  ">
                  <div class="gap-4 sm:hidden pb-8 flex  ">
                    {tab1 && <div   id="1" class={`group slide-in-right  min-w-[85vw]  space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none `}>
                      <img 
                        class="mx-auto w-24"
                        src={Globe}
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Community
                      </h3>
                      <p>
                      One Hive Is A community of Startups Innovators And Investors. By simply Joining One Hive You Gain Immediate Access to Hundreds Of People Speaking the Language Of Wealth
                      </p>
      
                      <div>
               <Link to={'/path'}>
      
      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
        {"Get Started"}
      </button>
     </Link>
               </div>
                    </div>}
                    { tab2 &&
       <div class="group min-w-[100vw] slide-in-right  space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
       <img
         class="mx-auto w-24"
         src={Gate}
         alt="illustration"
         loading="lazy"
       />
       <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
Gateway      
 </h3>
       <p>
       A Financial Platform SuperCharged With Artficial Intelligence And Real Time Data One Hive Is A GateWay To Previously Out Of Reach Opportunities
       </p>
      
       <div>
               <Link to={'/path'}>
      
      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
        {"Get Started"}
      </button>
     </Link>
               </div>
      </div>
                    }
                   { tab3 &&
       <div class="group min-w-[100vw] slide-in-right  space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
       <img
         class="mx-auto w-24"
         src="https://www.pngrepo.com/png/401106/512/antenna-bars.png"
         alt="illustration"
         loading="lazy"
       />
       <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
         Passive Income
       </h3>
       <p>
       A Modern Platform For Generating Passive Income Powered By <Link to={'/bem'} className='text-blue-400'>Bem</Link> To provide Fixed Return Investments. With One Hive You Always know Exactly What You Are getting.
       </p>
       <div>
               <Link to={'/path'}>
      
      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
        {"Get Started"}
      </button>
     </Link>
               </div>
      </div>
                   }
                   
                  </div>
                  <div class="gap-x-4 gap-y-8 hidden  sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                      <img
                        class="mx-auto w-24"
                        src={hemp}
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Community
                      </h3>
                      <p>
                        One Hive Is A community of Startups Innovators And Investors. By simply Joining One Hive You Gain Immediate Access to Hundreds Of People Speaking the Language Of Wealth
                      </p>
      
                      <div>
               <Link to={'/path'}>
      
      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
        {"Get Started"}
      </button>
     </Link>
               </div>
                    </div>
                    <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                      <img
                        class="mx-auto w-24"
                        src={Gate}
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Gateway
                      </h3>
                      <p>
                         A Financial Platform SuperCharged With Artficial Intelligence And Real Time Data One Hive Is A GateWay To Previously Out Of Reach Opportunities
                      </p>
      
                      <div>
               <Link to={'/path'}>
      
      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
        {"Get Started"}
      </button>
     </Link>
               </div>
                    </div>
                    <div className="sm:col-span-2 flex justify-center lg:col-span-1">
                      <div class="group max-w-sm space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                        <img
                          class="mx-auto w-24"
                          src="https://www.pngrepo.com/png/401106/512/antenna-bars.png"
                          alt="illustration"
                          loading="lazy"
                        />
                        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                          Passive Income
                        </h3>
                        <p>
                         A Modern Platform For Generating Passive Income Powered By <Link to={'/bem'} className='text-blue-400'>Bem</Link> To provide Fixed Return Investments. With One Hive You Always know Exactly What You Are getting.
                        </p>
                        <div>
               <Link to={'/path'}>
      
      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
        {"Get Started"}
      </button>
     </Link>
               </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:hidden pt-1 pb-4 mx-auto  justify-center w-1/2">
                  <div className="flex  w-full">
                      <ul className="flex  w-full justify-center items-center  gap-x-8">
                     <li className="text-2xl">
                     <FaAngleLeft onClick={handleDecreaseSlide}  />
                    </li>
                        <l1 className={`text-gray-800 ${tab1 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab2 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab3 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                     <li className="text-2xl">
                     <FaAngleRight onClick={handleIncreaseSlide}/>
                    </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}

function WhatIsOneHive({ tab1, tab2, tab3}) {
 
let snippet

  switch (tab1, tab2 , tab3) {
    case tab1:
    snippet = ' A Gateway To Connect With Modern Opportunities Before They Get Out Of Reach' 
      break;
    
    case tab2:
    snippet = 'A Community For Money Makers' 
      break;
    
    case tab3:
    snippet = 'A Modern Source Of Passive Income' 
      break;
  
    default:
      break;
  }


  return (
    <>
      <div className="pt-4 pb-8">
        <div>
          <div>
            <h3 className={`${styles.sectionHeadingCenter} sm:hidden`}>What Is One Hive?</h3>
            <p className={`${styles.contentCenter} sm:hidden slide-in-right`}>{snippet}</p>
            <h3 className={`${styles.sectionHeadingCenter} hidden sm:block`}>What Is One Hive?</h3>
            {/* <p className={`${styles.contentCenter} sm:block hidden`}>{snippet}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services