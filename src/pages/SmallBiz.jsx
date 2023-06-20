import { useState } from 'react';
import AnimatedSidebar from '../components/AnimatedSidebar';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import mail from '../assets/mail.png'




export function Hero({ title, subtext, buttonText, image, bg ,span, color, textcolor}) {
  return (
    <section className={`${bg} relative px-4 py-20 font-poppins rounded-3xl shadow-2xl`}>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 sm:px-4">
            <h1 className={`text-4xl font-bold leading-tight mb-4 text-center sm:text-left uppercase ${textcolor}`}>{`${title} `}<span className={`ml-1 ${color}`}>{span}</span></h1>
            <p className="text-xl leading-normal mb-8 text-left sm:text-left ">{subtext}</p>
            <button className="bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              {buttonText}
            </button>
          </div>
          <img
            className="w-full md:w-1/2 rounded-lg shadow-2xl"
            src={image}
            alt={title}
          />
        {/* <div className="absolute inset-0 bg-gray-400 bg-opacity-75"></div> */}
        </div>
      </div>
    </section>
  );
}


export function LandingPage(Children) {
  return (
    <main className="mx-auto  px-4 py-8 max-w-7xl">
       <Hero
       bg={'bg-slate-200'}
        title="Digital Farming"
        subtext="The Future of Passive Income. experience all the benefits and utilities of owning a sophisticated hemp farm right from the comfort of your home"
        buttonText="Learn More"
        image="https://via.placeholder.com/800x600"
      />
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        {/* <Feature
          title="Digital Expansion"
          description="Boost Your Earnings By Acquiring More Land."
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Automatic Auction"
          description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Self Sustaining"
          description="Deduct All Maintainance And Service Fees From Your Total Earnings"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Total Control"
          description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
          image="https://via.placeholder.com/200x200"
        /> */}
      </div>
      
    </main>
  );
}
function SmallLandingPage(Children) {
  return (
    <>
    <DynamicHero/>
    <main className="mx-auto  px-4 py-1 max-w-7xl">
       {/* <Hero
        bg={'bg-green-200/40'}
        title="INTRODUCING ONE HIVE "
        subtext="Ever Wanted To Own A Small Business ? Make Your Dreams Come True With Medik 420 In Just A Few Clicks "
        buttonText="Learn More"
        image="https://via.placeholder.com/800x600"
      /> */}
      {/* <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="Delivery Made Easy"
          description="Every Tier Of the One Sales programme includes at least One Delivery Vehicle to get you up and running "
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Time to Grow"
          description="We believe Every Venture Needs Ample time to truly Acheive their full Potential!, Get up to 9 months Of Growth Time Before Making your First Payment to Medik 420"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Full Control"
          description="Pick And Choose Between A Wide Range Of Medik 420 Products To stock Up Your Inventory You only Sell What You Want To With Medik 420"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="ONE HIVE"
          description="Get exclusive Access to the One Hive AI to get game changing Insights And Compare Sales Data With Other One Sales Programme Participants"
          image="https://via.placeholder.com/200x200"
        />
      </div> */}
      
    </main>
    {/* <GridHero/> */}
    </>
  );
}









export function Feature({ title, description, image, to }) {
  return (
    <div className="flex items-center md:flex-row flex-col mb-10 font-space">
      <img
        className="w-full md:w-1/3 rounded-lg shadow-lg"
        src={image}
        alt={title}
      />
      <div className="md:ml-4 mt-4 md:mt-0">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg leading-relaxed mb-4">{description}</p>
      </div>

      <div className='my-4 flex justify-start w-full sm:hidden'>
      <Link to={`${to}`} className="text-lg text-left font-space font-medium">
      <a class="font-medium leading-5 text-bgAlternate py-2 rounded-md shadow-md bg-green-300 px-4 text-black" href="">Learn more </a>
      </Link>
      </div>
    </div>
  );
}

export function Video({ title, description, image, poster }) {
  return (
    <div class="py-16">
      <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div class="lg:bg-gray-200  lg:p-16 rounded-[4rem] space-y-6 sm:flex sm:gap-6 justify-center sm:space-y-0 lg:items-center">
          <div class="sm:w-5/12 lg:w-1/2">
            <video
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              className="w-full sm:max-h-[300px] object-cover  "
              src={image}
              alt={title}
            />
          </div>
          <div class="sm:w-7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl ">
              {title}
            </h2>
            <p class="my-8 text-gray-600 ">{description}</p>

            <Link
              to={"/bem"}
              class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95  sm:w-max"
            >
              <span class="relative text-base font-semibold text-sky-600 dark:text-white">
                Explore
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );


}


const SmallBiz = () => {
const [isexpanded, setisexpanded] = useState(false)

  return (
  <>
  
  <div className='bg-plat min-h-screen relative flex flex-col'>
   <div className='lg:hidden'>
  <AnimatedSidebar
   setIsExpanded={setisexpanded}
   isExpanded={isexpanded}/>
  </div>
   <div onClick={()=> isexpanded && setisexpanded(false)} className=''>
   <SmallLandingPage/>
  </div>
  
  </div>
  </>


  )
}

export default SmallBiz



function DynamicHero(params) {
  return(
    <>
    <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-2 pt-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://via.placeholder.com/720x600"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-blk uppercase">Introducing<br/> <p className='text-green-400 leading-relaxed'>One Hive</p></h1>
      <p class="mb-8 leading-relaxed text-blk sm:text-2xl">An Ecosystem Designed For Individuals StartUps and Small Businesses to Earn or Grow from a single Platform Join One Hive To see How We Can Help You</p>
      {/* <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-white">Email</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Apply</button>
      </div>
      <p class="text-sm mt-2 text-white mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
    </div>
  </div>
</section>
    </>
  )
  
}




export function NewsLetter(params) {
  return(
    <>
    <section class="text-gray-600 body-font bg-gray-200 font-space">
  <div class="container px-5 py-8 mx-auto">
    <div class="flex flex-col text-center w-full mb-8 px-10">
      <div className='w-[65px] lg:w-20 mx-auto relative'>
            <img src={mail} alt="" className='w-full' />
            
      </div>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">Get Job Alerts</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Opt In To Get Full Details Of Every Future  Job Opportunity <br className='hidden lg:block'/> Delivered Right Into Your Inbox. </p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div class="relative flex-grow w-full">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative flex-grow w-full">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-green-300 border-0 py-2 px-8 focus:outline-none  rounded text-lg">Yes!</button>
    </div>
  </div>
</section>
    </>
  )
}