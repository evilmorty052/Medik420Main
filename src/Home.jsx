import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials,  } from "./components";
import Section from "./components/section2";
import Example from "./components/disclosure/disclosure";
import Medicplants from "./components/medicplants";
import Banner from "./partials/Banner";
import { Feature } from "./pages/SmallBiz";
import Header from "./partials/Header";
import React,{useState, useEffect} from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Path from "./pages/Path";
import AnimatedSidebar from "./components/AnimatedSidebar";
import { Video } from "./pages/SmallBiz";
import cbd from '../src/assets/vid.mp4'
import learn from '../src/assets/learn.png'
import hive from '../src/assets/hivelogo.png'
import Typewriter from 'typewriter-effect';
import '../src/stax.css'
import { client } from "../lib/client";
import { useQuery } from "@tanstack/react-query";
import { NewsLetter } from "./pages/SmallBiz";
import { Link} from "react-router-dom";









const Home = () => {
const [expanded, setexpanded] = useState(false)
const [path, setpath] = useState(false)
const [modalopen, setmodalopen] = useState(false)
const history = useNavigate()





// let query = `*[_type == "video"]{title, url}`
// const {data:videos} = useQuery(['videos'],()=> client.fetch(query))

// videos && console.log(videos)

// const videolist = videos?.map((video)=>{
//   return{
//     title: video.title,
//     link:  video.url
//   }
// })

// videolist && console.log(videolist)

const links = [
  {
  title: 'Home',
  // icon:  <FaHome/>

},
  {
  title: 'Investing'
},
  {
  title: 'Shop'
},
  {
  title: 'Subscribe'
},
]

function setpathopen(params) {
  history('/path')
}
function closepath(params) {
  setpath(false)
}

function showModal(params) {
  setmodalopen(true)
  
}

function opensidebar(params) {
expanded?  setexpanded(false) : setexpanded(true)
// console.log('clicked')
}
const handleOk = () => {
  setmodalopen(false);
};

function handleCancel (){
  setmodalopen(false);
  localStorage.setItem('cookie','true')
  
};


useEffect(() => {
  let cookie = localStorage.getItem('cookie')
  !cookie && setmodalopen(true)

}, [])






if(path){
  return(
    <Path  handleclose ={closepath} />
  )
}
  return(
    <>
  
    
 
    <div  className="bg-plat w-full overflow-hidden pb-10 relative">
    <div>{modalopen && <Cookie func={handleCancel}/>}</div>
    <Navbar open={opensidebar} setpathopen={setpathopen} />
    <AnimatedSidebar setIsExpanded={setexpanded} isExpanded={expanded} />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
        </div>
    </div>

    <div onClick={()=> expanded && setexpanded(false)} className={`bg-plat  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}  px-4 `}>
      <Hero
        buttonText="GET STARTED"
        image="https://via.placeholder.com/800x600"
      />
        
      </div>
    </div>
    {/* <Vidhero
        /> */}
     <div className="px-4">
     <Highlight/>
    </div>
    <div className="bg-slate-800 md:hidden">
    <Banking/>
    </div>
    {/* <div className="bg-white p-4 lg:hidden">
    <Learn/>
    </div> */}
    <div onClick={()=> expanded && setexpanded(false)} className={`bg-plat ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
       <div className="sm:hidden"><Technology/></div> 
        <CTA />
 
        <div className="sm:hidden"> <Hiring/></div>
        <Billing />
        
        
        
        
      </div>
    </div>
    <NewsLetter/>
  </div>
    </>
  )
}
  
  


export default Home;


 function Hero({ title, subtext, buttonText, image, bg ,span, color, textcolor}) {
 const history = useNavigate()
      
  return (
    <section className={`${bg} relative px-4 mt-20 font-space rounded-3xl mb-5`}>
      <div className="relative max-w-7xl mx-auto">
      <a  onClick={()=> history('/hive')}  class="sm:inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full hidden  hover:bg-gray-200  shadow-md z-50" role="alert">
            <span class="text-xs bg-green-300 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Hive 2.1 is here! See what's new</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:justify-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0  sm:px-10">
            <h1 className={` font-space text-3xl font-bold  text-left sm:text-left uppercase sm:text-[60px]  ${textcolor}`}>{`Build Wealth`}</h1>
            <p className="text-xl leading-normal mb-8 text-left  sm:text-left ">{
              <>
              <Typewriter
               
              
              options={{
                cursorClassName: 'cursor',
                wrapperClassName: 'text',
                strings: ['EFFORTLESSLY', 'SAFELY', 'YOUR WAY', 'WITH  US'] ,
                autoStart: true,
                loop: true,
              }}/>
              </>
            }</p>
            <div>
            <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
              {buttonText}
            </button>
            </div>
          </div>  
        <video
            className="rounded-2xl transform-gpu object-cover min-h-[372px]  min-w-[340px] sm:w-full lg:h-auto lg:w-1/2 mb-8 shadow-2xl"
            src="https://cdn.sanity.io/files/noj3nhym/production/e6d370d50c94bb32d8f28262791f62555bb7e9cc.mp4" poster="https://cdn.sanity.io/images/noj3nhym/production/d5f8fb875f672f0200bc64411bbfda8893fb74f7-2051x1596.png"
            autoPlay
            playsInline
            muted
            loop
          />
          <a onClick={()=> history('/hive')} class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full sm:hidden  hover:bg-gray-200  shadow-md" role="alert">
            <span onClick={()=> history('/hive')} class="text-xs bg-green-300 rounded-full text-white px-1 uppercase py-1.5 mr-3">New</span> <span class="text-sm font-medium ">One Hive is Here Learn More</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        {/* <div className="absolute inset-0 bg-gray-400 bg-opacity-75"></div> */}
        </div>
      </div>
    </section>
  );
}


export function Highlight(params) {
  return(
    <>
     <h3 className={`text-xl font-space${styles.heading2} text-blk lg:mt-20 sm:text-center underline underline-offset-[16px] underlined-text underline-green`}>EXPLORE </h3>
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Video
          title="PASSIVE INCOME"
          description="Put your money To Work With different tiers of investment opportunities with medik 420"
          image="https://cdn.sanity.io/files/noj3nhym/production/077d387c6a193b4d71e09b742eb47f555cc7b6f1.webm"
          poster="https://cdn.sanity.io/images/noj3nhym/production/dfef583b83fc77ed6d24b32424b2010835e1fc75-500x500.webp"
        />
          <Video
            title="CONTROLLED INVESTMENTS"
            description="Switch Between Easy, Moderate and High Risk Trades anytime from your Dashboard"
            image="https://cdn.sanity.io/files/noj3nhym/production/bdea7d541d3d1b2922b8653f2baf768c57fbe8f5.webm"
            poster="https://cdn.sanity.io/images/noj3nhym/production/970a44b7c43c2ab5d581d1c7bf9324dfa837ad87-500x500.webp"
          />
        <Video
          title="BUSINESS ASSISTANCE"
          description="Get The Support you Need to start your very own business"
          image="https://cdn.sanity.io/files/noj3nhym/production/b9cca47e69fadc4483232a68299a0890bc5119bd.webm"
          poster="https://cdn.sanity.io/images/noj3nhym/production/8c5fcccec7e624942cb6d9abaed04470ae9f511c-500x500.webp"
        />
        <Video
          title="SMART LOCK"
          description="Smart Lock Keeps Your Account Funds Safe With State Of the Art Encryption and Yubico Hardware MFA."
          image="https://cdn.sanity.io/files/noj3nhym/production/f1ef8490c6cc72593bb39b3fa12cd51774d90bc8.webm"
          poster="https://cdn.sanity.io/images/noj3nhym/production/f6bf2dbbee081289e11cc8fbcf1e46eaf172a22f-500x500.webp"
        />
      </div>
    </>
  )
}




function Technology(params) {
  return(
    <>
     <h3 className={`text-xl font-poppins${styles.heading2} text-blk`}>Break Boundaries</h3>
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="One Hive"
          description=" Join A Community Of Startups, Investors, Innovators And Retailers connected in real time to start earning by growing supporting or selling.  "
          image={hive}
        />
        <Feature
          title="BEM"
          description="Learn About Our Business Evaluation Model Fondly Known As B.E.M "
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="DIGITAL FARMING"
          description="Remotely manage your very own Hemp farm From Anywhere in the World. Expansion Growth And Sales Controlled From your Fingertips."
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Growers"
          description="Have Extra Space In Your Home? Find Out How you Can earn Up to $20000 By growing for us."
          image="https://via.placeholder.com/200x200"
        />
      </div>
    </>
  )
}
function Hiring(params) {
  return(
    <>
     <h3 className={`text-lg sm:text-xl font-poppins${styles.heading2} text-blk`}>Job Markets</h3>
     <p></p>
     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        <Feature
          title="A.I TRAINING"
          description="Join Our Artificial Intelligence Program To Get Paid For Recording Your Daily Social Media Activities and shopping habits. its that Simple!"
          image="https://via.placeholder.com/200x200"
        />
        <Feature
          title="Job Board"
          description="From Delivery Men to Customer Care Representatives Browse through a Large catalogue of Available Positions Offered By Startups And Small Businesses Sponsored By Medik 420."
          image="https://via.placeholder.com/200x200"
        />
      
      </div>
    </>
  )
}

// function Modal({modalopen}) {
 
//   return(
//     <>
//    { modalopen &&
//    <div className="fixed z-[500] h-screen  inset-0 bg-black ">
//         <div className="container">
//             <div>
//               <h3 className="text-2xl text-white">this is the modal</h3>
//             </div>
//         </div>
//     </div>}
//     </>
//   )
  
// }

function Cookie({modalopen, setModalOpen,func}) {
  return(
    <>
    <div >
    {/* <h3 className="my-2 text-xl font-bold text-center">We Use Cookies</h3> */}
<div className="fixed inset-0 z-[500] bg-fixed bg-gray-100/80">
<div className="flex justify-center pt-[200px] ">
<div class="w-72  bg-white rounded-lg shadow-md p-6" style={{cursor: 'auto'}}>
  <div class="w-16 mx-auto relative -mt-10 mb-3">
    <img class="-mt-1" src="https://www.svgrepo.com/show/30963/cookie.svg" alt="Cookie Icon SVG"/>
  </div>
  <span class="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">We use cookies to provide a better user experience.</span>
  <div class="flex items-center justify-between">
    <a class="text-xs text-gray-400 mr-1 hover:text-gray-800" href="#">Privacy Policy</a>
    <div class="w-1/2">
      <button onClick={func} type="button" class="py-2 px-4  bg-green-300 hover:bg-green-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Accept</button>
    </div>
  </div>
</div>
</div>
</div>
</div>
    </>
  )
}










function Vidhero (){
  return (
    <section>
      <div className="wrap mx-auto px-6 py-8 lg:px-24 lg:py-16">
        <h2 className="text-3xl md:text-5xl mb-4 lg:mb-16 md:text-center">GET THE APP</h2>
        <div className="lg:flex items-stretch gap-8">
          
         
          <video
            className="rounded-2xl transform-gpu object-cover h-48 lg:h-auto lg:w-1/2 mb-8"
            src={ccc}
            autoPlay
            playsInline
            muted
            loop
          />
        
          <div className="flex flex-col items-center lg:w-1/2">
            <div className="flex gap-8 mb-8">
            <svg viewBox="0 0 153.37 168.81" class="w-1/4 md:w-20 flex-none">
  <path d="M141 126.81c0-12.15-22.61-22-50.5-22-26.71 0-48.55 9-50.36 20.47C17.22 127.36 0 136.21 0 146.81c0 12.15 22.61 22 50.5 22 26.71 0 48.55-9 50.36-20.47 22.92-2.08 40.14-10.93 40.14-21.53Z" fill="#fcd4df"></path>
  <path fill="#fff" d="m55.14 53.87 5.62 65.59C62.13 129.07 74.81 131 92.15 131s30-1.94 31.38-11.55l5.63-65.59V42.63h-74Z"></path>
  <path fill="#382f2d" d="M92.15 133.51c-16.58 0-32.15-1.66-33.86-13.7a.68.68 0 0 1 0-.14l-5.64-65.59a1.48 1.48 0 0 1 0-.21V42.63a2.5 2.5 0 0 1 2.5-2.5h74a2.5 2.5 0 0 1 2.5 2.5v11.45L126 119.67v.15c-1.75 12.03-17.31 13.69-33.85 13.69Zm-28.91-14.34c1 6.63 9.39 9.34 28.91 9.34s27.87-2.71 28.9-9.35l5.61-65.4v-8.63h-69v8.63Z"></path>
  <path fill="#382f2d" d="M92.15 65.74c-19 0-39.51-4-39.51-12.81h5c0 2.34 11.74 7.81 34.51 7.81s34.51-5.47 34.51-7.81h5c0 8.8-20.48 12.81-39.51 12.81Z"></path>
  <ellipse fill="#fff" cx="92.15" cy="42.63" rx="37.01" ry="10.31"></ellipse>
  <path fill="#382f2d" d="M92.15 55.43c-19 0-39.51-4-39.51-12.8s20.48-12.81 39.51-12.81 39.51 4 39.51 12.81-20.48 12.8-39.51 12.8Zm0-20.61c-22.77 0-34.51 5.47-34.51 7.81s11.74 7.8 34.51 7.8 34.51-5.47 34.51-7.8-11.74-7.81-34.51-7.81Z"></path>
  <path fill="#382f2d" d="m59.13 49.3-2.75-4.17c6.29-4.14 19.88-6.71 35.48-6.71 15.22 0 28.67 2.48 35.1 6.47l-2.64 4.25c-5.51-3.42-18.56-5.72-32.46-5.72-16.44 0-28.28 2.96-32.73 5.88Z"></path>
  <path fill="#382f2d" d="M92.15 52.93a113.56 113.56 0 0 0 21.12-1.84 9 9 0 0 0-15.64-3.17 9 9 0 0 0-14.44.58A9 9 0 0 0 70 50.88a111.44 111.44 0 0 0 22.15 2.05Z"></path>
  <path fill="#fff" d="m14.14 72.87 5.62 65.59C21.13 148.07 33.81 150 51.15 150s30-1.94 31.38-11.55l5.63-65.59V61.63h-74Z"></path>
  <path fill="#382f2d" d="M51.15 152.51c-16.58 0-32.15-1.66-33.86-13.7a.68.68 0 0 1 0-.14l-5.64-65.59a1.48 1.48 0 0 1 0-.21V61.63a2.5 2.5 0 0 1 2.5-2.5h74a2.5 2.5 0 0 1 2.5 2.5v11.45L85 138.67v.15c-1.75 12.03-17.31 13.69-33.85 13.69Zm-28.91-14.34c1 6.63 9.39 9.34 28.91 9.34s27.87-2.71 28.9-9.35l5.61-65.4v-8.63h-69v8.63Z"></path>
  <path fill="#ff5c39" d="M67 63.06a126.86 126.86 0 0 0-30.83 0H14.53v9.37c0 5.69 16.57 10.3 37 10.3s37-4.61 37-10.3v-9.37Z"></path>
  <path fill="#382f2d" d="M51.54 85.23c-19 0-39.51-4-39.51-12.8v-9.37a2.5 2.5 0 0 1 2.5-2.5H36a125.14 125.14 0 0 1 15.57-.94 125.14 125.14 0 0 1 15.57.94h21.41a2.5 2.5 0 0 1 2.5 2.5v9.37c0 8.8-20.48 12.8-39.51 12.8ZM17 65.56v6.87c0 2.33 11.74 7.8 34.51 7.8s34.51-5.47 34.51-7.8v-6.87H66.68a119.39 119.39 0 0 0-15.1-.92 119.39 119.39 0 0 0-15.1.92h-.31Z"></path>
  <ellipse fill="#ff5c39" cx="51.15" cy="61.63" rx="37.01" ry="10.31"></ellipse>
  <path fill="#382f2d" d="M51.15 74.43c-19 0-39.51-4-39.51-12.8s20.48-12.81 39.51-12.81 39.51 4 39.51 12.81-20.48 12.8-39.51 12.8Zm0-20.61c-22.77 0-34.51 5.47-34.51 7.81s11.74 7.8 34.51 7.8 34.51-5.43 34.51-7.8-11.74-7.81-34.51-7.81Z"></path>
  <path fill="#ff5c39" d="M132.4 36.25a123.9 123.9 0 0 0-11.75-10 124.19 124.19 0 0 0-12.88-8.53l-17.25-13-5.64 7.48c-3.42 4.55 7 18.2 23.37 30.49s32.34 18.58 35.76 14l5.64-7.48Z"></path>
  <path fill="#382f2d" d="M140 60.69c-8.2 0-21.76-7.33-33.27-16-8.07-6.08-15-12.69-19.57-18.63-5.3-6.93-6.75-12.1-4.28-15.36l5.63-7.49A2.5 2.5 0 0 1 92 2.72l17.13 12.89a127 127 0 0 1 13 8.62A124.66 124.66 0 0 1 134 34.35l17.12 12.89a2.51 2.51 0 0 1 .5 3.5L146 58.23c-1.28 1.7-3.36 2.46-6 2.46ZM91 8.22l-4.12 5.48c-.37.49-.38 3.26 4.26 9.32 4.28 5.59 10.86 11.86 18.61 17.68 18.19 13.69 30.86 16.38 32.25 14.52l4.13-5.49-15.24-11.48-.24-.21a118.69 118.69 0 0 0-11.51-9.82 118.66 118.66 0 0 0-12.61-8.34l-.26-.18Z"></path>
  <ellipse fill="#ff5c39" cx="120.65" cy="26.23" rx="10.31" ry="37.01" transform="rotate(-53.02 120.647 26.23)"></ellipse>
  <path fill="#382f2d" d="M146.25 52.48a28.7 28.7 0 0 1-10-2.36c-7-2.73-15.24-7.58-23.32-13.66-15.2-11.45-29.15-27-23.85-34S113.15 4.55 128.35 16c8.07 6.08 15 12.69 19.57 18.63 5.31 6.92 6.75 12.09 4.29 15.36q-1.87 2.49-5.96 2.49ZM94.92 4.94c-1 0-1.59.19-1.84.53-1.4 1.86 4.68 13.3 22.87 27 7.72 5.82 15.58 10.43 22.13 13 7.11 2.79 9.76 2 10.13 1.53.37-.5.39-3.26-4.26-9.32-4.28-5.59-10.89-11.86-18.61-17.68C110.45 8.78 99.26 4.94 94.92 4.94Z"></path>
  <ellipse fill="#fff" cx="38.07" cy="102.55" rx="1" ry="2.18"></ellipse>
  <path fill="#382f2d" d="M38.07 107.23c-2.06 0-3.5-1.92-3.5-4.68s1.44-4.68 3.5-4.68 3.5 1.92 3.5 4.68-1.44 4.68-3.5 4.68Zm11.87 15.1a8 8 0 0 1-7.86-6.78 2.5 2.5 0 0 1 4.94-.77 3 3 0 0 0 5.88-.24 2.5 2.5 0 1 1 5 .39 8 8 0 0 1-7.62 7.39Z"></path>
  <ellipse fill="#fff" cx="62.07" cy="102.55" rx="1" ry="2.18"></ellipse>
  <path fill="#382f2d" d="M62.07 107.23c-2.06 0-3.5-1.92-3.5-4.68s1.44-4.68 3.5-4.68 3.5 1.92 3.5 4.68-1.44 4.68-3.5 4.68Z"></path>
</svg>
              <div className="md:w-80">
                <h3 className="text-xl md:text-3.5xl mb-1">Smart Portfolio</h3>
                <p>Quickly Generate a Well Rounded Portfolio Of High Performing Stocks, By Automatically Buying Low and selling High using Smart Portfolio.  </p>
              </div>
            </div>
            <div className="flex gap-8 mb-8">
            <svg viewBox="0 0 153.37 168.81" class="w-1/4 md:w-20 flex-none">
  <path d="M141 126.81c0-12.15-22.61-22-50.5-22-26.71 0-48.55 9-50.36 20.47C17.22 127.36 0 136.21 0 146.81c0 12.15 22.61 22 50.5 22 26.71 0 48.55-9 50.36-20.47 22.92-2.08 40.14-10.93 40.14-21.53Z" fill="#fcd4df"></path>
  <path fill="#fff" d="m55.14 53.87 5.62 65.59C62.13 129.07 74.81 131 92.15 131s30-1.94 31.38-11.55l5.63-65.59V42.63h-74Z"></path>
  <path fill="#382f2d" d="M92.15 133.51c-16.58 0-32.15-1.66-33.86-13.7a.68.68 0 0 1 0-.14l-5.64-65.59a1.48 1.48 0 0 1 0-.21V42.63a2.5 2.5 0 0 1 2.5-2.5h74a2.5 2.5 0 0 1 2.5 2.5v11.45L126 119.67v.15c-1.75 12.03-17.31 13.69-33.85 13.69Zm-28.91-14.34c1 6.63 9.39 9.34 28.91 9.34s27.87-2.71 28.9-9.35l5.61-65.4v-8.63h-69v8.63Z"></path>
  <path fill="#382f2d" d="M92.15 65.74c-19 0-39.51-4-39.51-12.81h5c0 2.34 11.74 7.81 34.51 7.81s34.51-5.47 34.51-7.81h5c0 8.8-20.48 12.81-39.51 12.81Z"></path>
  <ellipse fill="#fff" cx="92.15" cy="42.63" rx="37.01" ry="10.31"></ellipse>
  <path fill="#382f2d" d="M92.15 55.43c-19 0-39.51-4-39.51-12.8s20.48-12.81 39.51-12.81 39.51 4 39.51 12.81-20.48 12.8-39.51 12.8Zm0-20.61c-22.77 0-34.51 5.47-34.51 7.81s11.74 7.8 34.51 7.8 34.51-5.47 34.51-7.8-11.74-7.81-34.51-7.81Z"></path>
  <path fill="#382f2d" d="m59.13 49.3-2.75-4.17c6.29-4.14 19.88-6.71 35.48-6.71 15.22 0 28.67 2.48 35.1 6.47l-2.64 4.25c-5.51-3.42-18.56-5.72-32.46-5.72-16.44 0-28.28 2.96-32.73 5.88Z"></path>
  <path fill="#382f2d" d="M92.15 52.93a113.56 113.56 0 0 0 21.12-1.84 9 9 0 0 0-15.64-3.17 9 9 0 0 0-14.44.58A9 9 0 0 0 70 50.88a111.44 111.44 0 0 0 22.15 2.05Z"></path>
  <path fill="#fff" d="m14.14 72.87 5.62 65.59C21.13 148.07 33.81 150 51.15 150s30-1.94 31.38-11.55l5.63-65.59V61.63h-74Z"></path>
  <path fill="#382f2d" d="M51.15 152.51c-16.58 0-32.15-1.66-33.86-13.7a.68.68 0 0 1 0-.14l-5.64-65.59a1.48 1.48 0 0 1 0-.21V61.63a2.5 2.5 0 0 1 2.5-2.5h74a2.5 2.5 0 0 1 2.5 2.5v11.45L85 138.67v.15c-1.75 12.03-17.31 13.69-33.85 13.69Zm-28.91-14.34c1 6.63 9.39 9.34 28.91 9.34s27.87-2.71 28.9-9.35l5.61-65.4v-8.63h-69v8.63Z"></path>
  <path fill="#ff5c39" d="M67 63.06a126.86 126.86 0 0 0-30.83 0H14.53v9.37c0 5.69 16.57 10.3 37 10.3s37-4.61 37-10.3v-9.37Z"></path>
  <path fill="#382f2d" d="M51.54 85.23c-19 0-39.51-4-39.51-12.8v-9.37a2.5 2.5 0 0 1 2.5-2.5H36a125.14 125.14 0 0 1 15.57-.94 125.14 125.14 0 0 1 15.57.94h21.41a2.5 2.5 0 0 1 2.5 2.5v9.37c0 8.8-20.48 12.8-39.51 12.8ZM17 65.56v6.87c0 2.33 11.74 7.8 34.51 7.8s34.51-5.47 34.51-7.8v-6.87H66.68a119.39 119.39 0 0 0-15.1-.92 119.39 119.39 0 0 0-15.1.92h-.31Z"></path>
  <ellipse fill="#ff5c39" cx="51.15" cy="61.63" rx="37.01" ry="10.31"></ellipse>
  <path fill="#382f2d" d="M51.15 74.43c-19 0-39.51-4-39.51-12.8s20.48-12.81 39.51-12.81 39.51 4 39.51 12.81-20.48 12.8-39.51 12.8Zm0-20.61c-22.77 0-34.51 5.47-34.51 7.81s11.74 7.8 34.51 7.8 34.51-5.43 34.51-7.8-11.74-7.81-34.51-7.81Z"></path>
  <path fill="#ff5c39" d="M132.4 36.25a123.9 123.9 0 0 0-11.75-10 124.19 124.19 0 0 0-12.88-8.53l-17.25-13-5.64 7.48c-3.42 4.55 7 18.2 23.37 30.49s32.34 18.58 35.76 14l5.64-7.48Z"></path>
  <path fill="#382f2d" d="M140 60.69c-8.2 0-21.76-7.33-33.27-16-8.07-6.08-15-12.69-19.57-18.63-5.3-6.93-6.75-12.1-4.28-15.36l5.63-7.49A2.5 2.5 0 0 1 92 2.72l17.13 12.89a127 127 0 0 1 13 8.62A124.66 124.66 0 0 1 134 34.35l17.12 12.89a2.51 2.51 0 0 1 .5 3.5L146 58.23c-1.28 1.7-3.36 2.46-6 2.46ZM91 8.22l-4.12 5.48c-.37.49-.38 3.26 4.26 9.32 4.28 5.59 10.86 11.86 18.61 17.68 18.19 13.69 30.86 16.38 32.25 14.52l4.13-5.49-15.24-11.48-.24-.21a118.69 118.69 0 0 0-11.51-9.82 118.66 118.66 0 0 0-12.61-8.34l-.26-.18Z"></path>
  <ellipse fill="#ff5c39" cx="120.65" cy="26.23" rx="10.31" ry="37.01" transform="rotate(-53.02 120.647 26.23)"></ellipse>
  <path fill="#382f2d" d="M146.25 52.48a28.7 28.7 0 0 1-10-2.36c-7-2.73-15.24-7.58-23.32-13.66-15.2-11.45-29.15-27-23.85-34S113.15 4.55 128.35 16c8.07 6.08 15 12.69 19.57 18.63 5.31 6.92 6.75 12.09 4.29 15.36q-1.87 2.49-5.96 2.49ZM94.92 4.94c-1 0-1.59.19-1.84.53-1.4 1.86 4.68 13.3 22.87 27 7.72 5.82 15.58 10.43 22.13 13 7.11 2.79 9.76 2 10.13 1.53.37-.5.39-3.26-4.26-9.32-4.28-5.59-10.89-11.86-18.61-17.68C110.45 8.78 99.26 4.94 94.92 4.94Z"></path>
  <ellipse fill="#fff" cx="38.07" cy="102.55" rx="1" ry="2.18"></ellipse>
  <path fill="#382f2d" d="M38.07 107.23c-2.06 0-3.5-1.92-3.5-4.68s1.44-4.68 3.5-4.68 3.5 1.92 3.5 4.68-1.44 4.68-3.5 4.68Zm11.87 15.1a8 8 0 0 1-7.86-6.78 2.5 2.5 0 0 1 4.94-.77 3 3 0 0 0 5.88-.24 2.5 2.5 0 1 1 5 .39 8 8 0 0 1-7.62 7.39Z"></path>
  <ellipse fill="#fff" cx="62.07" cy="102.55" rx="1" ry="2.18"></ellipse>
  <path fill="#382f2d" d="M62.07 107.23c-2.06 0-3.5-1.92-3.5-4.68s1.44-4.68 3.5-4.68 3.5 1.92 3.5 4.68-1.44 4.68-3.5 4.68Z"></path>
</svg>
              <div className="md:w-80">
                
                <h3 className="text-xl md:text-3.5xl mb-1">Growth Center</h3>
                <p>Get Real Time Data On Your Digital Farm With The Growth App </p>
              </div>
            </div>
            <div className="flex gap-8 mb-8">
            <svg viewBox="0 0 153.37 168.81" class="w-1/4 md:w-20 flex-none">
  <path d="M141 126.81c0-12.15-22.61-22-50.5-22-26.71 0-48.55 9-50.36 20.47C17.22 127.36 0 136.21 0 146.81c0 12.15 22.61 22 50.5 22 26.71 0 48.55-9 50.36-20.47 22.92-2.08 40.14-10.93 40.14-21.53Z" fill="#fcd4df"></path>
  <path fill="#fff" d="m55.14 53.87 5.62 65.59C62.13 129.07 74.81 131 92.15 131s30-1.94 31.38-11.55l5.63-65.59V42.63h-74Z"></path>
  <path fill="#382f2d" d="M92.15 133.51c-16.58 0-32.15-1.66-33.86-13.7a.68.68 0 0 1 0-.14l-5.64-65.59a1.48 1.48 0 0 1 0-.21V42.63a2.5 2.5 0 0 1 2.5-2.5h74a2.5 2.5 0 0 1 2.5 2.5v11.45L126 119.67v.15c-1.75 12.03-17.31 13.69-33.85 13.69Zm-28.91-14.34c1 6.63 9.39 9.34 28.91 9.34s27.87-2.71 28.9-9.35l5.61-65.4v-8.63h-69v8.63Z"></path>
  <path fill="#382f2d" d="M92.15 65.74c-19 0-39.51-4-39.51-12.81h5c0 2.34 11.74 7.81 34.51 7.81s34.51-5.47 34.51-7.81h5c0 8.8-20.48 12.81-39.51 12.81Z"></path>
  <ellipse fill="#fff" cx="92.15" cy="42.63" rx="37.01" ry="10.31"></ellipse>
  <path fill="#382f2d" d="M92.15 55.43c-19 0-39.51-4-39.51-12.8s20.48-12.81 39.51-12.81 39.51 4 39.51 12.81-20.48 12.8-39.51 12.8Zm0-20.61c-22.77 0-34.51 5.47-34.51 7.81s11.74 7.8 34.51 7.8 34.51-5.47 34.51-7.8-11.74-7.81-34.51-7.81Z"></path>
  <path fill="#382f2d" d="m59.13 49.3-2.75-4.17c6.29-4.14 19.88-6.71 35.48-6.71 15.22 0 28.67 2.48 35.1 6.47l-2.64 4.25c-5.51-3.42-18.56-5.72-32.46-5.72-16.44 0-28.28 2.96-32.73 5.88Z"></path>
  <path fill="#382f2d" d="M92.15 52.93a113.56 113.56 0 0 0 21.12-1.84 9 9 0 0 0-15.64-3.17 9 9 0 0 0-14.44.58A9 9 0 0 0 70 50.88a111.44 111.44 0 0 0 22.15 2.05Z"></path>
  <path fill="#fff" d="m14.14 72.87 5.62 65.59C21.13 148.07 33.81 150 51.15 150s30-1.94 31.38-11.55l5.63-65.59V61.63h-74Z"></path>
  <path fill="#382f2d" d="M51.15 152.51c-16.58 0-32.15-1.66-33.86-13.7a.68.68 0 0 1 0-.14l-5.64-65.59a1.48 1.48 0 0 1 0-.21V61.63a2.5 2.5 0 0 1 2.5-2.5h74a2.5 2.5 0 0 1 2.5 2.5v11.45L85 138.67v.15c-1.75 12.03-17.31 13.69-33.85 13.69Zm-28.91-14.34c1 6.63 9.39 9.34 28.91 9.34s27.87-2.71 28.9-9.35l5.61-65.4v-8.63h-69v8.63Z"></path>
  <path fill="#ff5c39" d="M67 63.06a126.86 126.86 0 0 0-30.83 0H14.53v9.37c0 5.69 16.57 10.3 37 10.3s37-4.61 37-10.3v-9.37Z"></path>
  <path fill="#382f2d" d="M51.54 85.23c-19 0-39.51-4-39.51-12.8v-9.37a2.5 2.5 0 0 1 2.5-2.5H36a125.14 125.14 0 0 1 15.57-.94 125.14 125.14 0 0 1 15.57.94h21.41a2.5 2.5 0 0 1 2.5 2.5v9.37c0 8.8-20.48 12.8-39.51 12.8ZM17 65.56v6.87c0 2.33 11.74 7.8 34.51 7.8s34.51-5.47 34.51-7.8v-6.87H66.68a119.39 119.39 0 0 0-15.1-.92 119.39 119.39 0 0 0-15.1.92h-.31Z"></path>
  <ellipse fill="#ff5c39" cx="51.15" cy="61.63" rx="37.01" ry="10.31"></ellipse>
  <path fill="#382f2d" d="M51.15 74.43c-19 0-39.51-4-39.51-12.8s20.48-12.81 39.51-12.81 39.51 4 39.51 12.81-20.48 12.8-39.51 12.8Zm0-20.61c-22.77 0-34.51 5.47-34.51 7.81s11.74 7.8 34.51 7.8 34.51-5.43 34.51-7.8-11.74-7.81-34.51-7.81Z"></path>
  <path fill="#ff5c39" d="M132.4 36.25a123.9 123.9 0 0 0-11.75-10 124.19 124.19 0 0 0-12.88-8.53l-17.25-13-5.64 7.48c-3.42 4.55 7 18.2 23.37 30.49s32.34 18.58 35.76 14l5.64-7.48Z"></path>
  <path fill="#382f2d" d="M140 60.69c-8.2 0-21.76-7.33-33.27-16-8.07-6.08-15-12.69-19.57-18.63-5.3-6.93-6.75-12.1-4.28-15.36l5.63-7.49A2.5 2.5 0 0 1 92 2.72l17.13 12.89a127 127 0 0 1 13 8.62A124.66 124.66 0 0 1 134 34.35l17.12 12.89a2.51 2.51 0 0 1 .5 3.5L146 58.23c-1.28 1.7-3.36 2.46-6 2.46ZM91 8.22l-4.12 5.48c-.37.49-.38 3.26 4.26 9.32 4.28 5.59 10.86 11.86 18.61 17.68 18.19 13.69 30.86 16.38 32.25 14.52l4.13-5.49-15.24-11.48-.24-.21a118.69 118.69 0 0 0-11.51-9.82 118.66 118.66 0 0 0-12.61-8.34l-.26-.18Z"></path>
  <ellipse fill="#ff5c39" cx="120.65" cy="26.23" rx="10.31" ry="37.01" transform="rotate(-53.02 120.647 26.23)"></ellipse>
  <path fill="#382f2d" d="M146.25 52.48a28.7 28.7 0 0 1-10-2.36c-7-2.73-15.24-7.58-23.32-13.66-15.2-11.45-29.15-27-23.85-34S113.15 4.55 128.35 16c8.07 6.08 15 12.69 19.57 18.63 5.31 6.92 6.75 12.09 4.29 15.36q-1.87 2.49-5.96 2.49ZM94.92 4.94c-1 0-1.59.19-1.84.53-1.4 1.86 4.68 13.3 22.87 27 7.72 5.82 15.58 10.43 22.13 13 7.11 2.79 9.76 2 10.13 1.53.37-.5.39-3.26-4.26-9.32-4.28-5.59-10.89-11.86-18.61-17.68C110.45 8.78 99.26 4.94 94.92 4.94Z"></path>
  <ellipse fill="#fff" cx="38.07" cy="102.55" rx="1" ry="2.18"></ellipse>
  <path fill="#382f2d" d="M38.07 107.23c-2.06 0-3.5-1.92-3.5-4.68s1.44-4.68 3.5-4.68 3.5 1.92 3.5 4.68-1.44 4.68-3.5 4.68Zm11.87 15.1a8 8 0 0 1-7.86-6.78 2.5 2.5 0 0 1 4.94-.77 3 3 0 0 0 5.88-.24 2.5 2.5 0 1 1 5 .39 8 8 0 0 1-7.62 7.39Z"></path>
  <ellipse fill="#fff" cx="62.07" cy="102.55" rx="1" ry="2.18"></ellipse>
  <path fill="#382f2d" d="M62.07 107.23c-2.06 0-3.5-1.92-3.5-4.68s1.44-4.68 3.5-4.68 3.5 1.92 3.5 4.68-1.44 4.68-3.5 4.68Z"></path>
</svg>
              <div className="md:w-80">
                <h3 className="text-xl md:text-3.5xl mb-1">Hive Command</h3>
                <p>Monitor all hive activities right from the app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};






function Learn(params) {
  return (
    <>
      <div class="wrap flex flex-col lg:flex-row pb-4 ">
        <div className="w-full mb-8">
          <h4 className="text-center text-3xl text-blk font-bold uppercase ">Medik Coach</h4>
        </div>
        <img
          class="w-1/2 lg:w-auto min-h-[170px] md:max-w-[360px] lg:h-[278px] pb-4 lg:pl-24"
          src={learn}
          alt="Illustration of a test tube pouring liquid into a beaker."
          height="278"
          width="209"
          loading="lazy"
        />
        <div class="flex flex-col lg:flex-row lg:items-center lg:w-full lg:justify-around mb-8 ">
          <h2 class={`mb-4 text-slate-800 font-medium tracking-tight md:display60 md:font-medium md:leading-none lg:text-center lg:pr-32 ${styles.heading2}`}>
            Learn how <br class="desktop" /> 
            to invest.
          </h2>
          <p class={" text-lg label16 font-regular leading-tight lg:max-w-[380px]" + styles.paragraph}>
            With Medik Coach, you get unlimited advice that’s personalized to your
            goals and risk level—all in the app. Get guidance on how to start
            investing, plus access market insights, educational articles, and
            tips from financial advisors so you can invest with confidence.
          </p>
        </div>
        <a
              class="label16 text-xl font-medium leading-5 mt-4 text-slate-800"
              href="/mobile-banking"
            >
              Learn more about Medik Coach&nbsp;→
         </a>
      </div>
    </>
  );
}


function Banking(params) {
  return (
    <>
      <section class="bg-bgSecondary" id="bank_like_an_investor">
       <div className="px-2">
       <h2 class={"text-white wrap title24 font-medium tracking-tight md:display60 md:font-medium md:leading-none pt-[40px]  md:pb-[56px] md:pt-[90px]" +styles.heading2}>
          We do Shopping Differently
        </h2>
      </div> 
        <div class="wrap flex flex-col-reverse md:flex-row md:justify-around">
          <div class="md:flex-1 lg:flex-initial px-8 md:pr-32 lg:pr-0">
            <img
              class="flex md:hidden md:max-h-[384px]"
              src="https://cdn.sanity.io/images/noj3nhym/production/c75541f258dfbfa36c7d92b7ad1d57ef9d529742-870x964.png"
              alt="A man filling up his car at a gas station while looking at his phone. Illustration of notifications of earning stock on purchases from Shell, Starbucks and Hilton."
              height="693"
              width="600"
              loading="lazy"
            />
            <img
              class="hidden md:flex md:max-h-[384px]"
              src="/assets/images/home-page/banking-stock-back-list.png"
              alt="A man filling up his car at a gas station while looking at his phone. Illustration of notifications of earning stock on purchases from Shell, Starbucks and Hilton."
              width="527"
              height="384"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col md:flex-1 lg:max-w-[432px] md:justify-center px-[12px]">
            <h3 class="text-white md:text-[26px] text-[20px] font-medium tracking-tight leading-6 py-[12px]">
              Earn up to 1% in stock <br />
              every time you spend with <br />
              your Stock-Back<sup>®</sup> Card.
              <sup
                class="text-[14px] font-medium anchor"
                label="fn-1"
                aria-label="fn-1"
              >
                1
              </sup>
            </h3>
            <p class="label16 font-regular leading-tight text-white">
              Go from shopper to shareholder with the debit card that
              automatically rewards you with stock.
              <sup label="fn-1" class="anchor" aria-label="fn-1">
                1
              </sup>
            </p>
            <a
              class="label16 font-medium leading-5 text-bgAlternate py-8 text-white"
              href="/stock-back-debit-card"
            >
              Learn more about the Stock-Back<sup>®</sup> Card&nbsp;→
            </a>
          </div>
        </div>
        <div class="wrap flex flex-col md:flex-row-reverse md:justify-around pt-8 md:pt-0 lg:pt-24 bg-plat">
          <div class="md:flex-1 lg:flex-initial bg-plat">
            <img
              class="hidden md:flex md:max-h-[594px]"
              src="https://cdn.sanity.io/files/noj3nhym/production/60717a0876c40d94c1e0454bb82a009454a412a9.png"
              alt="Illustration of two Stash stock back debit cards."
              height="610"
              width="500"
              loading="lazy"
            />
          </div>
          <div class="flex flex-col md:flex-1 lg:max-w-[432px] md:justify-center px-[12px] bg-plat">
            <h3 class="text-[20px] md:text-[26px] font-medium tracking-tight leading-6 py-[12px] text-slate-800">
              Say goodbye to hidden fees.
              <sup
                class="text-[14px] font-medium anchor"
                label="fn-2"
                aria-label="fn-2"
              >
                2
              </sup>
            </h3>
            <p class="body16 leading-tight text-slate-800">
             Medik Stash
              <sup label="fn-1" class="anchor" aria-label="fn-1">
                1
              </sup>{" "}
              helps you stay on top of your finances with saving and budgeting
              tools.
              <b />
              <br />
              We also make it easy to automatically invest your spare change by
              turning on Stock Round-Ups.
              <sup label="fn-13" class="anchor" aria-label="fn-13">
                13
              </sup>{" "}
              Plus, you can get paid up to two days early with direct deposit.
              <sup label="fn-3" class="anchor" aria-label="fn-3">
                3
              </sup>{" "}
              The best part? No hidden fees.
              <sup label="fn-dag" class="anchor" aria-label="fn-dag">
                †
              </sup>
            </p>
            
          </div>
        </div>
        <div class="md:hidden pb-10 w-full overflow-hidden bg-plat">
          <img
            class="w-[105%] max-w-none"
            src="https://cdn.sanity.io/files/noj3nhym/production/60717a0876c40d94c1e0454bb82a009454a412a9.png"
            alt="Illustration of two Stash stock back debit cards."
            height="900"
            width="745"
            loading="lazy"
          />
        </div>
       <div className="bg-plat p-4">
       <a
              class="label16 font-medium leading-5  pt-10 pb-20 text-slate-800"
              href="/mobile-banking"
            >
              Learn more about banking&nbsp;→
         </a>
      </div> 
      </section>
    </>
  );
}



