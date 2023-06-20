import { useState } from 'react'
import { urlFor } from '../../lib/client'
import AnimatedSidebar from '../components/AnimatedSidebar'
import {LogoCloud} from '../components/index'
import styles from '../style'
import pie from '../assets/pie2.svg'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import {Footer} from '../partials/dashboard/Elements'
import { register } from 'swiper/element/bundle';
import useFetch from "../hooks/useFetch"


const Team = () => {
const query = `*[_type == 'executives']`
const data = useFetch(query, 'execs')
const [tab1, settab1] = useState(false)
const [tab2, settab2] = useState(true)
const [expanded, setexpanded] = useState(false)

register()


function handleTabs(params) {
  if(tab1){
    settab2(true)
    settab1(false)
  }
  else if (tab2){
    settab1(true)
    settab2(false)
  }
}

  return (
    <>
    <div onClick={()=> expanded && setexpanded(false)}>
    <MainHero/>
    <div>
   <Tabs tab1={tab1} tab2={tab2} setactive={handleTabs}/>
    </div>
    </div>

{!tab1 ? <TeamGrid data={data} /> : <AboutUs/>}
  <Footer/>
    </>
  )
}


function TeamGrid({data}) {
  return(
    <>
    
    <div class="py-10">
  <div class="xl:container mx-auto px-6 md:px-12">
    <div class="mb-16 ">
      <h2 class="mb-4 text-2xl font-bold text-gray-800  md:text-4xl sm:text-center uppercase">
       Meet Our Executive Team
      </h2>
      {/* <p class="text-gray-600 dark:text-gray-300">
        Tailus prides itself not only on award-winning technology, but also on the talent of its
        people of some of the brightest minds and most experienced executives in business.
      </p> */}
    </div>
    <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     
     {data?.map((item)=>(
      <>
      <ExecCard name={item.name} title={item.position} image={urlFor(item.image)} />
      </>
     ))}
    </div>
    <div class="mb-8 w-full mt-16 border-b-2 border-gray-300 pb-4">
      <h2 class="mb-4 text-[36px] font-bold text-gray-800 md:text-4xl text-center">
      Meet our investors.
      </h2>
    </div>
      <LogoCloud/>
  </div>
</div>
                                    
    </>
  )
}

function ExecCard({image, name, title}) {
  return(
    <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
    <img
      class="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
      src={image}
      alt="woman"
      loading="lazy"
      width="640"
      height="805"
    />
    <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
      <div>
        <h4 class="text-xl font-semibold dark:text-gray-700 text-white">{name}</h4>
        <span class="block text-sm text-gray-500">{title}</span>
      </div>
      <p class="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
    </div>
    
  </div>
  )
}

function MainHero(params) {
  return(
   <>
   
   <body class="bg-gray-900 pt-10 md:pt-20 pb-4 ">
     
     <div class="border-b  ">
         <div class="sm:container sm:m-auto px-2 sm:px-6 pt-12 md:px-12  md:pt-[1.8rem] lg:px-7">
             <div class="grid  items-center gap-12 px-2 md:px-0">
                 <div class="relative col-span-1">
                     <h1 class="font-bold text-3xl sm:text-6xl md:text-7xl xl:text-8xl text-white text-center">Our mission <br className=''/> requires great people</h1>
                     <div class="sm:mt-8 lg:mt-16 space-y-8">
                         <p class="text-gray-300 text-center text-xl sm:text-3xl ">Meet the team shaping the future of personal finance.</p>
                     </div>'
                 </div>
             </div>
         </div>
     </div>
 </body>
                                     
   </>
  )
 }

 function Tabs({tab1 ,tab2, setactive}) {
  return (
    <>
      <div className="flex py-8 px-4 ">
        <div className='flex  w-full '>
          <div onClick={setactive} className={!tab1 ? `pb-4 border-b-4 border-gray-300 w-1/2 flex justify-center` : `pb-4 border-b-4 border-gray-500 w-1/2 flex justify-center` }>
            <a className="text-xl font-semibold text-center">About Us</a>
          </div>
          <div onClick={setactive} className={!tab2 ? `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center` : `pb-4 border-b-4 border-gray-500 w-1/2 flex justify-center` }>
            <a className="text-xl font-semibold text-center">Team</a>
          </div>
        </div>
      </div>
    </>
  );
 }

 function AboutUs(params) {
  return(
    <>
    <div>
      <div className='sm:flex items-center sm:px-4 lg:px-16 sm:gap-4 md:container md:mx-auto '>
        <div className='px-2 mb-8'>
          <h3 className={styles.sectionHeading}>We create financial opportunity.</h3>
          <p className={styles.content}>We’re here to help everyday Americans invest and build wealth, $5 at a time.</p>
        </div>
        <div className='mx-auto container max-w-[450px]  w-[90%] my-4'>
          <div className='py-8 px-8 bg-gray-100 rounded-2xl'>
            <ul className='grid grid-cols-2 md:items-center gap-4'>
              <li>
                <p className='text-[32px] font-medium'>2022</p>
                <p className='text-[16px] '>Medik Launched</p>
              </li>
              <li>
              <p className='text-[32px] font-medium'>16k+</p>
                <p className='text-[16px]'>Unique Investors</p>
              </li>
              <li>
              <p className='text-[32px] font-medium'>$480 +</p>
                <p className='text-[16px]'>in VC funding</p>
              </li>
              <li>
              <p className='text-[32px] font-medium'>200 +</p>
                <p className='text-[16px]'>Jobs Provided</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Section/>
    <Mission/>
    <Values/>
    </>
  )
 }

 function Section(params) {
  return(
    <>
    
    <div class="py-16">
  <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2">
        <img
          src={pie}
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          We Make Sure You Always Get A Piece
        </h2>
        <p class="my-8 text-gray-600 dark:text-gray-300">
        Our founders came from Wall Street. During their time there, Brandon Krieg and Ed Robinson both realized that wealth creation systems—particularly investing—were stacked against everyday Americans.

They left their jobs with a simple mission: make investing easy and affordable for everyone. Today, Medik is helping over 6 million people create a more secure financial future for themselves.
        </p>
       
      </div>
    </div>
  </div>
</div>
                                    
    </>
  )
 }

 function Mission(params) {
    return(
      <>
      <div className='container mx-auto max-w-5xl py-8'>
        <div className='flex flex-col items-center gap-y-8'>
          <div>
            <img src={pie} alt="" />
          </div>
          <div>
               <div className='space-y-4 sm:space-y-8 px-4 sm:px-8'>
                <h3 className={`${styles.sectionHeading} text-center`}>We’re changing the status quo.</h3>
                <p  className={`${styles.content} text-center`}>Our founders came from Wall Street. During their time there, Brandon Krieg and Ed Robinson both realized that wealth creation systems—particularly investing—were stacked against everyday Americans.They left their jobs with a simple mission: make investing easy and affordable for everyone. Today, Stash is helping over 6 million people create a more secure financial future for themselves.</p>
                <p className='text-gray-600 text-[10px] text-center'>Disclosure: This is not an endorsement or a statement of satisfaction by any Medik client and is defined by the number of clients who have e-signed.</p>
               </div>
          </div>
        </div>
      </div>
      </>
    )
 }

 function Values() {

const Snippet = ({snippet, title}) => {
  return(
    <div className='w-full bg-gray-300 py-10'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center'>
           <div className='mb-8'>
               <div className=''>
               <h3 className={`${styles.sectionHeading} text-center text-gray-800`}>Our Core Values</h3>
               </div>
                <div
                 className='px-4 w-72 sm:w-[400px] md:w-[600px] sm:h-[200px] md:h-[] h-40 '>
                <h3
                 className={`${styles.sectionSubHeadingCenter} text-center text-gray-800 transition-all ease-in-out duration-300`}>{title}</h3>
                <div className='py-4 '>
                <p className={`${styles.contentCenter} text-gray-800 transition-all ease-in`}>{snippet}</p>
                </div>
                </div>
           </div>
          </div>
        </div>
    </div>
  )
}

  // return(
  //   <>
  //   <div className='w-full bg-gray-300 py-10'>
  //       <div className='container mx-auto'>
  //         <div className='flex flex-col items-center'>
  //          <div className='mb-8'>
  //              <div className='mb-2'>
  //              <h3 className={`${styles.sectionHeading} text-center text-gray-800`}>Our Core Values</h3>
  //              </div>
  //               <div
  //                className='px-4 w-72 sm:w-[400px] md:w-[600px] sm:h-[200px] md:h-[] h-40 '>
  //               <h3
  //                className={`${styles.sectionSubHeadingCenter} text-center text-gray-800 transition-all ease-in-out duration-300`}>{title}</h3>
  //               <div className='py-4 '>
  //               <p className={`${styles.contentCenter} text-gray-800 transition-all ease-in`}>{snippet}</p>
  //               </div>
  //               </div>
  //          </div>
  //          <div className='flex  w-1/2 sm:w-[20%]'>
  //             <div className='flex justify-between w-full '>
  //               <FaAngleLeft style={{fontSize: '30px' , color: 'steelblue'}} onClick={handleDecrease} />
  //               <FaAngleRight style={{fontSize: '30px' , color: 'steelblue'}} onClick={handleIncrease}/>
  //             </div>
  //          </div>
  //         </div>
  //       </div>
  //   </div>
  //   </>
  // )

  return(
    <>
    <div class='pb-6'>
       <swiper-container
          class="relative"
          autoPlay={true}
          autoPlay-delay={"5000"}
          pagination='true'
          pagination-clickable='true'
          disable-autoPlay-on-interaction='false'
          >
          <swiper-slide>
           <Snippet title={"Prioritize people."} 
           snippet={"We believe a diverse, authentic, and inclusive culture empowers us to grow together."}
           />
          </swiper-slide>
          <swiper-slide>
          <Snippet title={'Obsess over the customer.'}
           snippet = {'We have a mission mindset and always strive to build the best experience for everyday people.'}
           />
          </swiper-slide>
          <swiper-slide>
          <Snippet title = {'Take Ownership'}
           snippet = {'As the risk-takers, drivers, and doers behind each initiative, we take responsibility for our contributions individually and as a team.'}
           />
          </swiper-slide>
          <swiper-slide>
          <Snippet  title = {'Create Solutions'}
          snippet = {'We challenge the status quo and apply our creative energy to solve complex problems in fresh, new ways.'}
           />
          </swiper-slide>
        </swiper-container>
       </div>
    </>
  )
 }

export default Team