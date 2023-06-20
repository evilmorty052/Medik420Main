import React, {useState, useEffect} from 'react'
import styles from '../../style'
import Vid from '../../assets/smartportfoliovideo.mp4'
import mail from '../../assets/mail.png'
import options from '../../assets/investmentoptions.png'
import investmenthero from '../../assets/automatedhero.png'
import budget from '../../assets/budget.jpg'
import handsoff from '../../assets/handsoff.jpg'
import newinvestor from '../../assets/newinvestor.jpg'
import ListBox from '../../components/listbox2'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Switch from '../../assets/switch.json'
import { Disclosure } from '@headlessui/react'
import { applewatch } from '../../assets'
import { FaBrain, FaCoins, FaRecycle, FaChevronUp, FaChevronDown} from 'react-icons/fa'
import { Footer, NewsLetter } from '../../partials/dashboard/Elements'


const Smart = () => {
  const [expanded, setexpanded] = useState(false)
  function opensidebar(params) {
    expanded?  setexpanded(false) : setexpanded(true)
    // console.log('clicked')
    }
  return (
    <>

    <div onClick={()=> expanded && setexpanded(false)} className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/* <div className={`${styles.boxWidth} hiddenfromtabupwards`}>
          <Navbar open={opensidebar} />
        </div> */}
    </div>
    
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <MainHero/>
        {/* <Stats /> */}
      </div>
    </div>
    <div className='flex flex-col sm:gap-y-8'>
    <Section/>
    <AboutYou/>
    <SmarterWay/>
    <LeftCard image={applewatch}/>
    <Diversified/>
    </div>
    <NewsLetter/>
    <Faq/>
   <Footer/>
  </div>
    </>
  )
}

export default Smart






// function NewsLetter(params) {
//   return(
//     <>
//     <section class="text-gray-600 body-font bg-gray-200 font-space">
//   <div class=" py-8 mx-auto">
//     <div class="flex flex-col text-center w-full mb-8 px-10">
//       <div className='w-[65px] lg:w-20 mx-auto relative'>
//             <img src={mail} alt="" className='w-full' />
            
//       </div>
//       <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase">Get Our Newsletter</h1>
//       <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Opt In To Get Full Details Of Every Future Opportunity <br className='hidden lg:block'/> Delivered Right Into Your Inbox. </p>
//     </div>
//     <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
//       <div class="relative flex-grow w-full">
//         <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
//         <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//       <div class="relative flex-grow w-full">
//         <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
//         <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//       <button class="text-white bg-green-300 border-0 py-2 px-8 focus:outline-none  rounded text-lg">Yes!</button>
//     </div>
//   </div>
// </section>
//     </>
//   )
// }


function Services (){
  return(
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
    </>
  )
}

function MainHero(params) {
 return(
  <>
  
  <body class="bg-gray-900 md:pt-20 pb-10 ">
    
    <div class="border-b  ">
        <div class="container  m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
            <div class="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
                <div class="col-span-1">
                    <div class="relative w-full">
                        <img src={investmenthero} alt="shoes" loading="lazy" width="100%" height="640"/>
                     
                    </div>
                </div>

                <div class="relative col-span-1">
                    <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white text-center">Automated<br
                            ></br><span className='text-cyan-800'>Investing.</span></h1>
                    <div class="mt-8 lg:mt-16 space-y-8">
                        <p class="text-gray-300 text-center ">Smart Portfolio is a robo-advisor that gives you a diversified portfolio based on your risk profile. It’s the easy way to invest.</p>
                        {/* <div class="flex space-x-4 mt-6">
                            <button type="button" title="Start buying"
                                class="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max">
                                <span class="block text-white text-sm">
                                    Shop now
                                </span>
                            </button>
                            <button type="button" title="Start buying"
                                class="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:border-gray-700 sm:w-max">
                                <span class="block text-gray-800 text-sm dark:text-white">
                                    View store
                                </span>
                            </button>
                        </div> */}
                    </div>'
                </div>
            </div>
        </div>
    </div>
</body>
                                    
  </>
 )
}

function Section(params) {
  return (
    <>
      <div className="w-full bg-white mt-20 font-space smcontainer sm:mx-auto lg:max-w-[1054px] pb-20 lg:pb-32">
        <div className="text-center mb-8 px-4 lg::px-32">
          <h3 className="text-[38px] font-semibold mb-4 text-gray-700 ">
            Why automate your investing?
          </h3>
          <p className={styles.content}>
            Smart Portfolio gives you access to a professionally managed account
            that’s affordable and easy to use. Just switch it on and let us
            invest for you regularly.
          </p>
        </div>
        <div className="flex w-full flex-col sm:flex-row-reverse sm:justify-between ">
          <div className=" space-y-8 px-4 sm:pl-4 sm:pr-1  mb-8">
            <div className="">
              <h3 className=" leading-[32px] text-gray-800  font-semibold text-[24px] mb-2">
                Designed by experts.
              </h3>
              <p className={styles.content }>
                The Medik 420 Investment Team designs and builds each portfolio
                in order to optimize returns based on a user's overall risk
                level.
              </p>
            </div>
            <div>
              <h3 className=" leading-[32px] text-gray-800  font-semibold text-[24px] mb-2">
                Fits your budget.
              </h3>
              <p className={styles.content}>
                Smart Portfolio is automatically included in a Stash
                subscription—that means no management or add-on commission fees.
              </p>
            </div>
            <div>
              <h3 className=" leading-[32px] text-gray-800  font-semibold text-[24px] mb-2">
                Track your goals.
              </h3>
              <p className={styles.content}>
                Smart Portfolio automatically monitors and manages your
                investments—our easy-to-use app gives you 24/7 access to your
                investment portfolio.
              </p>
            </div>

            <div className="mb-8">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                Get Started
              </button>
            </div>
          </div>
          <div className=" ">
            <video
              class="max-h-[525px] sm:min-w-[300px] md:min-w-[500px] w-full md:px-0 "
              autoPlay
              playsInline
              muted
              loop
              src={Vid}
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutYou(params) {

  const plans = [
    {
      name: 'Brand New Investor',
      img: newinvestor,
      msg: 'Don’t know where to start investing? With Smart Portfolio, you’ll automatically get exposure to US and foreign stocks, bonds, and even crypto.'
    },
    {
      name: 'The Hands-Off Investor',
      img: handsoff,
      msg: 'Smart Portfolio is the ultimate set-it-and-forget-it tool. In just a few clicks, we’ll deliver a diversified portfolio that’s built and managed for your financial needs.'
    },
    {
      name: 'The Investor On A Budget',
      img: budget,
      msg: 'Unlike other robo-advisors, Smart Portfolio works with whatever you can afford. Just drop in $5, and you’ll get a diversified portfolio that’s built and managed for you.'
    }
  ]
  const [selected, setSelected] = useState(plans && plans[0])
  let message
  
  return(
    <>
    <div className='pb-8 md:px-10 md:container md:mx-auto max-w-7xl'>
       <h3 className='text-center text-4xl font-bold mb-8'>Built For You.</h3>
       <div className='px-2 md:px-10 sm:flex sm:items-center sm:justify-around sm:mb-8 '>
          <div className='  mb-8'>
              <div className='sm:flex sm:items-center sm:space-x-4 mb-2'>
              <p className='text-3xl sm:text-2xl text-green-400 font-bold '>1</p>
              <p className='text-2xl font-semibold text-gray-800'>Tell Us About Yourself</p>
              </div>
              <p className='text-lg font-medium text-gray-600'>What’s your investor style? </p>
              <div className='lg:my-4 mb-4'>
               <div className='mt-8 mb space-y-4'>
                <div className=' md:pr-8 mb-6'>
                <ListBox  selected={selected} setSelected={setSelected} list={plans} />
                </div>
               </div>
               
            </div>
          </div>  
          {/* <div className='md:min-w-[45%]'>
                  <img className='w-full' src={Img}></img>
          </div> */}
       </div>
       <div className='px-2 md:px-10 sm:flex sm:flex-row-reverse sm:mt-20 sm:mb-20 sm:gap-x-10 '>
          <div className='mb-4'>
             <div className='sm:flex sm:space-x-4'>
             <p className='text-3xl sm:text-2xl text-green-400 font-bold mb-[12px] '>2</p>
              <p className='text-2xl font-semibold text-gray-800'>Just Add Cash</p>
            </div> 
             <div className='md:px-10'>
             <p className={styles.content}>Turn on auto-invest to build wealth over the long term—without even thinking about it.</p>
            </div> 
          </div>
          <div className=' translate-x-[-30%] sm:translate-x-0 flex justify-start sm:justify-center items-center sm:bg-gray-300 rounded-2xl sm:w-[300px]  md:w-[450px] h-40'>
            {/* <img src={Img}></img> */}
            <Player
  autoplay
  loop
  src={Switch}
  style={{ width: '100%' }}
>
  <Controls visible={false} loop />
</Player>
          </div>
          
       </div>
       <div className='sm:mt-[100px] py-8 '>
          <div className='px-2 md:px-10 sm:mt-10 sm:flex sm:gap-x-10'>
            <div>
           <div className='sm:flex sm:space-x-4'>
            <p className='text-3xl md:text-2xl text-green-400 font-bold mb-[12px]'>3</p>
            <p className='text-2xl font-semibold text-gray-800'>Let us handle the rest</p>
            </div>
            <p className={`${styles.content} ${'mb-4 sm:mb-10'}`}>Smart Portfolio will build, monitor and automatically rebalance your investments, taking the time and stress out of investing.</p>
             <div className='md:px-32 md:pr-32 md:pl-0 flex justify-start mt-8 '>
             <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                Get Started
              </button>
            </div> 
            </div>
            <div className='hidden sm:block'>
            <img src={options}></img>
          </div>
          </div>
          
       </div>
    </div>
    </>
  )
}

function LeftCard({setSearchMode, image}) {
  return (
    <>
      <div class=" py-8 md:py-16 font-space max-w-5xl md:container mx-auto">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div class="lg:bg-gray-600  lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div class="md:5/12 lg:w-1/2 flex justify-center">
              <img
                src={image}
                alt="image"
                loading="lazy"
                className='  max-w-[435px] max-h-[430px] '
              />
            </div>
            <div class="md:7/12 lg:w-1/2 sm:pl-12">
              <h2 class="text-[28px] font-bold  md:text-4xl text-blk lg:text-white">Set up smart alerts</h2>
              {/* <h2 class="text-[44px] font-bold text-green-400 md:text-4xl dark:text-white"></h2> */}
              <p class="my-4 lg:text-gray-300 text-gray-700 text-xl">
              Always stay in the loop with handy, curated information always at your fingertips. provided by our smart alerts A.I
              </p>

              {/* <div
                
                className="px-8"
              >
                <button onClick={setSearchMode} className="btn">
                  Set Up Alerts
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function SmarterWay(params) {
  return(
  <>
    <div className='w-full   text-gray-800 py-10 px-4 md:py-24 font-space md:container md:mx-auto max-w-7xl'>
       <div>
             <h2 className='text-center text-[38px] font-bold font-space'>The smarter way to invest.</h2>  

             <ul className='flex flex-col md:grid grid-cols-3 gap-y-4 md:gap-0  md:items-center'>

               <li className=''>
                 <div className='flex flex-col md:items-center'>
                  <div  className='my-4'>
                  <FaBrain style={{ fontSize: '80px', color:'steelblue'}}/>
                  </div>
                  <h3 className='text-[28px] font-semibold mb-4 md:text-center '>Smart transactions.</h3>
                  <p className={`text-gray-700  text-left text-xl md:text-center`}>
                  we’ll automatically move you closer to your ideal investment mix.
                  </p>
                 </div>
               </li>
               <li>
                 <div className='flex flex-col md:items-center'>
                  <div className='my-4'>
                  <FaRecycle style={{ fontSize: '80px', color:'steelblue'}}/>
                  </div>
                  <h3 className='text-[28px] font-semibold mb-4 md:text-center '>Auto-recurring investments.</h3>
                  <p className={`text-gray-700  text-left text-xl md:text-center`}>
                  Automatically add funds to your Smart Portfolio on a schedule that works for you.
                  </p>
                 </div>
               </li>
               <li>
                 <div className='flex flex-col md:items-center'>
                  <div className='my-4'>
                  <FaCoins style={{ fontSize: '80px', color:'steelblue'}}/>
                  </div>
                  <h3 className='text-[28px] font-semibold mb-4 md:text-center '>Dividend reinvestment.</h3>
                  <p className={`text-gray-700  text-left text-xl md:text-center`}>
                  We will automatically reinvest dividends you earn on your investments.                  </p>
                 </div>
               </li>
               
             </ul>
       </div>
    </div>
  </>
  )
}


function Diversified(params) {
  return (
    <>
      <div className='w-full font-space'>
        <div className='container mx-auto py-8'>
          <div className='px-2'>
            <h3 className='text-[38px] text-center font-semibold text-gray-800'>Powered by diversification.</h3>
            <p className={`${styles.content} text-center mb-2`}>
              Smart Portfolio builds you a diversified portfolio designed to
              reduce risk and maximize returns. Unlock broad exposure—according
              to your risk profile—to US equities, foreign markets, bonds, and
              crypto.*
            </p>
            <p className='text-[10px] text-center'>
              *Crypto is relatively new and can be volatile. Investments are
              Delaware Statutory Trusts and offer indirect exposure to Crypto.
            </p>
          </div>
           <div className='px-2 my-8'>
          <div className='flex justify-center '>
           <video
           className='rounded-xl max-h-[400px]'
              autoPlay
              muted
              loop
              preload="auto"
              src={"https://cdn.sanity.io/files/noj3nhym/production/6c9790fa24052239d83d73ea46e1aee120a3b90c.mp4"}
              type="video/mp4"
            >
              
            </video>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Faq(params) {
  return(
    <>
    <div className='py-8'>

   
     <h3 className='text-3xl text-center font-semibold text-gray-800 my-8'>Frequently Asked Questions</h3>
     <div className="w-full px-4 py-4">
      <div className="mx-auto w-full  max-w-3xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex shadow-xl w-full justify-between rounded-lg bg-green-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-green-300 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                <span className='text-[20px] font-medium'>What is Automated Investing?</span>
                <FaChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 sm:text-[20px] ">
              Automated investing is a tool that automatically builds an investment portfolio for you. This kind of investing passively manages and makes investments on your behalf.

              Smart Portfolio gives you a set of diversified investments that align with your risk profile. It then actively monitors and manages the account for you, automatically rebalancing to keep your investments up to date.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2 ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex shadow-xl w-full justify-between rounded-lg bg-green-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-green-300 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                <span className='text-[20px] font-medium '>What is a Robo-Advisor?</span>
                <FaChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 sm:text-[20px] ">
              A robo-advisor is a digital financial advisor that automatically builds and manages your portfolio based on your investment preferences. These algorithm-driven platforms often rely on passive index investing strategies to reduce buying and selling while investing on your behalf. Robo-advisors are built to consider your risk tolerance and financial goals in order to invest with minimal guidance from a human financial advisor for portfolio management.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex shadow-xl w-full justify-between rounded-lg bg-green-200 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-green-300 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                <span className='text-[20px] font-medium '>Why Do We Provide Exposure To Crypto?</span>
                <FaChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 sm:text-[20px] ">
              Our mission is to help everyday People build long-term wealth. As part of that mission, Smart Portfolio offers indirect exposure to Bitcoin and Ethereum through trusts. It’s an easy way to develop a diversified portfolio.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    </div>
    </>
  )
}
