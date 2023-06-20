import React, {useState} from 'react'
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa'
import {Globe,Gate, startupstab} from '../../assets'
import { Link } from 'react-router-dom'
import { register } from 'swiper/element/bundle';

const Services = () => {
  register()

   const CommunityCard = () => {
     return (
       <>
         {/* <div className="flex justify-center sm:py-8 sm:justify-start sm:px-2">
           <div
             class={`group slide-in-right  space-y-6 border border-gray-600 rounded-3xl bg-white  px-8 sm:px-0 text-center   sm:flex flex-row-reverse sm:items-center sm:border-0 sm:gap-x-10 `}
           >
             
             <div className="sm:w-3/5">
               <img
                 class=" w-24 sm:w-full"
                 src={Globe}
                 alt="illustration"
                 loading="lazy"
               />
             </div>

             
             <div className="space-y-6">
               <h3 class="text-2xl sm:text-3xl font-semibold text-blk sm:text-left ">
                 Community
               </h3>
               <p className="text-blk sm:text-lg sm:text-left ">
                 One Hive Is A community of Startups Innovators And Investors.
                 By simply Joining One Hive You Gain Immediate Access to
                 Hundreds Of People Speaking the Language Of Wealth
               </p>

              
               <div>
                 <Link to={"/path"}>
                   <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6   w-full rounded-xl">
                     {"Get Started"}
                   </button>
                 </Link>
               </div>
             </div>

             
             <div className="sm:hidden">
               <Link to={"/path"}>
                 <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                   {"Get Started"}
                 </button>
               </Link>
             </div>
           </div>
         </div> */}

       </>
     );
   };

   const GateWayCard = () => {
    return(
      <>
               {/* <div className="flex justify-center sm:py-8">
               <div class="group space-y-6 border border-gray-600 rounded-3xl bg-white  px-8 py-12 text-center max-w-2xl sm:shadow-2xl ">
                  <img
                    class="mx-auto w-24 sm:w-32"
                    src={Gate}
                    alt="illustration"
                    loading="lazy"
                  />
                  <h3 class="text-2xl sm:text-3xl font-semibold text-blk ">
                    Gateway
                  </h3>
                  <p className="text-blk sm:text-2xl ">
                    A Financial Platform SuperCharged With Artficial
                    Intelligence And Real Time Data One Hive Is A GateWay To
                    Previously Out Of Reach Opportunities
                  </p>

                  <div>
                    <Link to={"/path"}>
                      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                        {"Get Started"}
                      </button>
                    </Link>
                  </div>
                </div>
               </div>      */}
         <div class="py-8">
           <div class="xl:container px-2 sm:m-auto  text-gray-600 ">
             <div class="lg:bg-gray-50  lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse sm:gap-16 justify-center md:space-y-0 lg:items-center">
               <div class="md:5/12 lg:w-1/2">
                 <img
                   src={Globe}
                   alt="image"
                   loading="lazy"
                   className='w-full '
                 />
               </div>
               <div class="md:7/12 lg:w-1/2">
                 <h2 class="text-3xl font-bold text-gray-900 md:text-4xl ">
                   Community
                 </h2>
                 <p class="my-4  text-gray-600 ">
                 One Hive Is A community of Startups Innovators And Investors.
                 By simply Joining One Hive You Gain Immediate Access to
                 Hundreds Of People Speaking the Language Of Wealth.
                 </p>
               </div>
             </div>
           </div>
         </div>
      </>
    )
   }

   const PassiveIncomeCard = () => {
    return (
      <>
        {/* <div className="flex justify-center sm:py-8">
      <div class="group  space-y-6 border border-gray-600 rounded-3xl bg-white  px-8 py-12 text-center max-w-2xl sm:shadow-2xl">
                  <img
                    class="mx-auto w-24 sm:w-32"
                    src={Gate}
                    alt="illustration"
                    loading="lazy"
                  />
                  <h3 class="text-2xl sm:text-3xl font-semibold text-blk ">
                    Passive Income
                  </h3>
                  <p className="text-blk sm:text-2xl ">
                    A Platform to Generate Passive Income via{" "}
                    <Link to={"/bem"} className="text-blue-600">
                      Pipe funding
                    </Link>{" "}
                    by connecting investors and startups to stable investments and funding.
                  </p>
                  <div>
                    <Link to={"/path"}>
                      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                        {"Get Started"}
                      </button>
                    </Link>
                  </div>
                </div>
      </div>        */}

        <div class="py-8">
          <div class="xl:container px-2 sm:m-auto  text-gray-600 ">
            <div class="lg:bg-gray-50  lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse sm:gap-16 justify-center md:space-y-0 lg:items-center">
              <div class="md:5/12 lg:w-1/2">
                <img
                  src={Globe}
                  alt="image"
                  loading="lazy"
                  className="w-full "
                />
              </div>
              <div class="md:7/12 lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-900 md:text-4xl ">
                  Community
                </h2>
                <p class="my-4  text-gray-600 ">
                  One Hive Is A community of Startups Innovators And Investors.
                  By simply Joining One Hive You Gain Immediate Access to
                  Hundreds Of People Speaking the Language Of Wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
   }

  return (
    <>
      <div class="relative pt-4  sm:container  sm:mx-auto ">
        <div class="container max-w-7xl relative m-auto text-gray-500 md:px-12">
          {/* <h3 class="text-3xl font-bold text-gray-900 md:text-4xl text-center tracking-wide">What is One Hive</h3> */}
          <div className="bg-white ">
            <div class="">    
              <swiper-container
          class="relative"
          autoPlay={true}
          autoPlay-delay={"5000"}
          pagination='true'
          pagination-clickable='true'
          disable-autoPlay-on-interaction='false'
          >

          <swiper-slide>
          <CommunityCard/>
          </swiper-slide>
          <swiper-slide>
          <PassiveIncomeCard/>
          </swiper-slide>
          <swiper-slide>
          <GateWayCard/>
          </swiper-slide>
          
        </swiper-container>          
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
      <div className="pt-4  text-blk">
        <div>
          <div>
            <h3 className={`text-3xl sm:text-3xl lg:text-4xl font-semibold text-center  sm:hidden`}>What Is One Hive?</h3>
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-center  hidden sm:block`}>What Is One Hive?</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services