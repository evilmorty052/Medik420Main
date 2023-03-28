import React, {useState} from 'react'
import styles from '../../style'
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa'
import hemp from '../../assets/hemplogo.png'
import Globe from '../../assets/globe.png'
import Gate from '../../assets/gate.png'
import { Link } from 'react-router-dom'

const BizServices = () => {

    const [tab1, settab1] = useState(true)
    const [tab2, settab2] = useState(false)
    const [tab3, settab3] = useState(false)
    const [tab4, settab4] = useState(false)
    
   
    function handleIncreaseSlide(params) {
      // if (tab1) {
      //   settab1(false)
      //   settab2(true)
      // }
      if (tab1) {
        settab1(false)
        settab3(true)
      }
  
      // else if(tab2){
      //    settab2(false)
      //    settab3(true)
      // }
  
      else if (tab3){
        settab3(false)
        settab4(true)
      }
      else if (tab4){
        settab4(false)
        settab1(true)
      }
  
    }
    function handleDecreaseSlide(params) {
      
      if (tab1) {
        settab1(false)
        settab4(true)
      }
  
      // else if(tab2){
      //    settab2(false)
      //    settab1(true)
      // }
  
      else if (tab3){
        settab3(false)
        settab1(true)
      }
      else if (tab4){
        settab4(false)
        settab3(true)
      }
  
    }
  return (   
          <>
            <div class="relative pt-4 pb-8 sm:pb-16 border-b-4 container sm:max-w-[95%] mx-auto border-gray-200">
              <div class="container max-w-4xl xl:max-w-7xl relative m-auto px-[10px] text-gray-500 md:px-12">
                <HowCanWeHelp tab1={tab1} tab2={tab2} tab3={tab3} tab4={tab4}/>
                <div className="flex sm:hidden pt-1 pb-4 mx-auto  justify-center w-1/2">
                  <div className="flex  w-full">
                      <ul className="flex  w-full justify-center items-center  gap-x-8">
                     <li className="text-2xl">
                     <FaAngleLeft onClick={handleDecreaseSlide}  />
                    </li>
                        <l1 className={`text-gray-800 ${tab1 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        {/* <l1 className={`text-gray-800 ${tab2 && 'text-2xl text-green-400'}`}><FaCircle/></l1> */}
                        <l1 className={`text-gray-800 ${tab3 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab4 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                     <li className="text-2xl">
                     <FaAngleRight onClick={handleIncreaseSlide}/>
                    </li>
                      </ul>
                  </div>
                </div>
                <div className="  ">
                  <div class="gap-4 sm:hidden pb-8 flex  ">
                    {tab1 && 
                    <div    class={`group slide-in-right  min-w-[85vw]  space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none `}>
                      <img 
                        class="mx-auto w-24"
                        src={Globe}
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Build
                      </h3>
                      <p>
                        A Platform To Build Your Business By Bringing Your Ideas To Life With Our State Of The Art Tools or Get You Up And Running With Easy Funding
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
                    { tab2 &&
       <div class="group min-w-[100vw] slide-in-right   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
       <img
         class="mx-auto w-24"
         src={Gate}
         alt="illustration"
         loading="lazy"
       />
       <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
Connect   
 </h3>
       <p>
         Connect With A DataBase of Over 400K Users And Counting. Or Get In Touch With Key Execs In The Business Landscape. The Possibilities Are Near Limitless
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
       <div class="group min-w-[100vw] slide-in-right   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
       <img
         class="mx-auto w-24"
         src="https://www.pngrepo.com/png/401106/512/antenna-bars.png"
         alt="illustration"
         loading="lazy"
       />
       <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
         Business Evaluation
       </h3>
       <p>
         Save Time And Cost On An Existing Business or Business Idea By Utilizing Our Business Evaluation Model (BEM) To Forecast Business Revenue And Viability in the Modern Market 
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
                   { tab4 &&
       <div class="group min-w-[100vw] slide-in-right   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
       <img
         class="mx-auto w-24"
         src="https://www.pngrepo.com/png/401106/512/antenna-bars.png"
         alt="illustration"
         loading="lazy"
       />
       <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
         Crowd Funding
       </h3>
       <p>
         Backed By BEM One Hive Exposes Your Business To Over 30K Investors From Around The World. Simply Evaluate Your Business Using BEM To Get Estimated Revenue You Can Access Upfront And A Simple Repayment Plan  
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
                  <div class="gap-x-4 gap-y-8 hidden  sm:grid sm:grid-cols-2 lg:grid-cols-2  grid-flow-row">
                    <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
                      <img
                        class="mx-auto w-24"
                        src={hemp}
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Build
                      </h3>
                      <p>
                      A Platform To Build Your Business By Bringing Your Ideas To Life With Our State Of The Art Tools or Get You Up And Running With Easy Funding
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
                        src="https://www.pngrepo.com/png/46221/512/globe.png"
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Connect
                      </h3>
                      <p>
                      Connect With A DataBase of Over 400K Users And Counting. Or Get In Touch With Key Execs In The Business Landscape. The Possibilities Are Near Limitless
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
                        src="https://www.pngrepo.com/png/46221/512/globe.png"
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Business Evaluation
                      </h3>
                      <p>
                      Save Time And Cost On An Existing Business or Business Idea By Utilizing Our Business Evaluation Model (BEM) To Forecast Business Revenue And Viability in the Modern Market Get to Know How Valuable Your Business Idea could be In A few Steps
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
                        src="https://www.pngrepo.com/png/46221/512/globe.png"
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                        Crowd Funding
                      </h3>
                      <p>
                      Backed By BEM One Hive Exposes Your Business To Over 30K Investors From Around The World. Simply Evaluate Your Business Using BEM To Get Estimated Revenue You Can Access Upfront And A Simple Repayment Plan  
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
                <div className="flex sm:hidden pt-1 pb-4 mx-auto  justify-center w-1/2">
                  <div className="flex  w-full">
                      <ul className="flex  w-full justify-center items-center  gap-x-8">
                     <li className="text-2xl">
                     <FaAngleLeft onClick={handleDecreaseSlide}  />
                    </li>
                        <l1 className={`text-gray-800 ${tab1 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        {/* <l1 className={`text-gray-800 ${tab2 && 'text-2xl text-green-400'}`}><FaCircle/></l1> */}
                        <l1 className={`text-gray-800 ${tab3 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab4 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
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

function HowCanWeHelp({ tab1, tab2, tab3, tab4}) {
 
let snippet

  switch (tab1, tab2 , tab3, tab4) {
    
    case tab1:
    snippet = 'Save Time And Expenses' 
      break;
    
    case tab2:
    snippet = 'Amplify Your Growth Or Get Up And Running ' 
      break;
    
    case tab3:
    snippet = '' 
      break;
    
    case tab4:
    snippet = 'Access Your Future Revenue Today Using One Hive.' 
      break;
  
    default:
      
      break;
  }


  return (
    <>
      <div className="pt-4 pb-8">
        <div>
          <div>
            <h3 className={styles.sectionHeadingCenter}>How Can We Help ?</h3>
            <p className={`${styles.contentCenter} sm:hidden`}>{snippet}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BizServices