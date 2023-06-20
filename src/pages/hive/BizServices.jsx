import {useState} from 'react'
import styles from '../../style'
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa'
import hemp from '../../assets/hemplogo.png'
import Globe from '../../assets/globe.png'
import Gate from '../../assets/gate.png'
import { Link } from 'react-router-dom'
import { register } from 'swiper/element/bundle';

const BizServices = () => {

  const BuildCard = () => {
    return(
      <>
      <div className="flex justify-center sm:py-8">
      <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center max-w-2xl ">
                      <img
                        class="mx-auto w-24 sm:w-32"
                        src={hemp}
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl sm:text-3xl font-semibold text-blk ">
                        Build
                      </h3>
                      <p className="text-blk sm:text-2xl ">
                      A Platform To Build Your Business By Bringing Your Ideas To Life With Our State Of The Art Tools.
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
      </>
    )
  }

  const ConnectCard = () => {
    return(
      <>
      <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center ">
                      <img
                        class="mx-auto w-24"
                        src="https://www.pngrepo.com/png/46221/512/globe.png"
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl font-semibold text-gray-800 ">
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
      </>
    )
  }

  const BemCard = () => {
    return(
      <div className="flex justify-center sm:py-8">
<div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center  max-w-2xl  ">
                      <img
                        class="mx-auto w-24 sm:w-32"
                        src="https://www.pngrepo.com/png/46221/512/globe.png"
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 ">
                        Business Evaluation
                      </h3>
                      <p className="text-blk sm:text-2xl ">
                      Easily predict business revenue and viability in the modern market using our Business Evaluation Model.
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
      
    )
  }

  const CrowdFundCard = () => {
    return(
      <div className="flex justify-center sm:py-8">
<div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center  max-w-2xl">
                      <img
                        class="mx-auto w-24 sm:w-32"
                        src="https://www.pngrepo.com/png/46221/512/globe.png"
                        alt="illustration"
                        loading="lazy"
                      />
                      <h3 class="text-2xl sm:text-3xl font-semibold text-gray-800 ">
                        Pipe Funding
                      </h3>
                      <p className="text-blk sm:text-2xl ">
                      Expose Your Business To Over 300K Investors From Around The World by trading revenue for instant upfront capital.
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
      
    )
  }
    

  return (   
          <>
            <div class="relative pt-4 pb-8 sm:pb-16  container sm:max-w-[95%] mx-auto ">
              <div class="sm:container max-w-4xl xl:max-w-7xl relative m-auto  text-gray-500 md:px-12">
                <HowCanWeHelp />
                <div className="  ">
                  <div class="gap-4  flex  ">
                    {/* {tab1 &&  */}
                   <swiper-container
          class="relative pb-10"
          autoPlay={true}
          autoPlay-delay={"5000"}
          pagination='true'
          pagination-clickable='true'
          disable-autoPlay-on-interaction='false'
          >
          <swiper-slide>
          <BuildCard />
          </swiper-slide>
          {/* <swiper-slide>
          <ConnectCard />
          </swiper-slide> */}
          <swiper-slide>
          <BemCard />
          </swiper-slide>
          <swiper-slide>
          <CrowdFundCard />
          </swiper-slide>        
        </swiper-container>
                  </div> 
                </div>
              </div>
            </div>
          </>
        );
}


const Temp = () => {
  return(
    <div class="gap-x-4 gap-y-8 hidden  sm:grid sm:grid-cols-2 lg:grid-cols-2  grid-flow-row">
    {/* build card */}
    <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
      <img
        class="mx-auto w-24"
        src={hemp}
        alt="illustration"
        loading="lazy"
      />
      <h3 class="text-2xl font-semibold text-gray-800 ">
        Build
      </h3>
      <p>
      A Platform To Build Your Business By Bringing Your Ideas To Life With Our State Of The Art Tools.
      </p>

      <div>
<Link to={'/path'}>

<button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
{"Get Started"}
</button>
</Link>
</div>
    </div>
    {/* connect card */}
    {/* <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
      <img
        class="mx-auto w-24"
        src="https://www.pngrepo.com/png/46221/512/globe.png"
        alt="illustration"
        loading="lazy"
      />
      <h3 class="text-2xl font-semibold text-gray-800 ">
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
    </div> */}
    {/* business evaluation card */}
    <div class="group   space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
      <img
        class="mx-auto w-24"
        src="https://www.pngrepo.com/png/46221/512/globe.png"
        alt="illustration"
        loading="lazy"
      />
      <h3 class="text-2xl font-semibold text-gray-800 ">
        Business Evaluation
      </h3>
      <p>
      Easily predict business revenue and viability in the modern market using our Business Evaluation Model.
      </p>

      <div>
<Link to={'/path'}>

<button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
{"Get Started"}
</button>
</Link>
</div>
    </div>
    {/* Pipe funding card */}
    <div class="group col-span-2  space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
      <img
        class="mx-auto w-24"
        src="https://www.pngrepo.com/png/46221/512/globe.png"
        alt="illustration"
        loading="lazy"
      />
      <h3 class="text-2xl font-semibold text-gray-800 ">
        Pipe Funding
      </h3>
      <p>
      Expose Your Business To Over 300K Investors From Around The World by trading revenue for instant upfront capital.
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
  )
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
            <h3 className={'text-2xl sm:text-3xl lg:text-4xl font-semibold text-blk text-center'}>How Can We Help ?</h3>
            {/* <p className={`${styles.contentCenter} sm:hidden`}>{snippet}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BizServices