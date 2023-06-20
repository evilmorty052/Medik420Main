import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {Header ,  Tabs, } from './hive/index'
import {Footer} from "../partials/dashboard/Elements"


const HiveLanding = () => {




  const HiveHero = () => {
    return (
      <>
    <div className="bg-[#0A0B12] pt-24  text-center h-screen sm:h-auto ">
         <div className=" max-w-5xl grid sm:mx-auto sm:container   sm:grid-cols-12 items-center px-4 sm:px-8 lg:gap-x-12 ">
              <div className="sm:col-span-6 lg:pb-12">
                <h3 className=" bg-gradient-to-r from-purple-500  to-orange-400 bg-clip-text text-transparent   text-5xl sm:text-4xl  font-semibold tracking-wide sm:text-left ">One Hive</h3>
                <h3 className=" text-gray-200 text-xl sm:text-2xl sm:text-left " >Join over 50,000 users building wealth with one hive everyday, one investment at a time.</h3>
              </div>
              <div className="sm:col-span-6 sm:order-first">
                <video
                 muted
                 playsInline
                 loop
                 autoPlay
                 src="https://cdn.sanity.io/files/noj3nhym/production/2b2b20813d59ce02ce0252ea2fc049af38337fa8.mp4"/>
              </div>
              {/* <!-- Buttons --> */}
      <Link to={"/register"} class="text-center sm:hidden">
        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </a>
      </Link>
      {/* <!-- End Buttons --> */}
         </div>
    </div>
      </>
    );
  }

  function CTA ({title}) {
    return(
   <div class="bg-gradient-to-br from-pink-500 to-purple-600 py-8  md:bg-gradient-to-r">
        <div class="container m-auto px-6 text-center md:px-12 lg:px-20">
          <h2 class="mb-8 text-4xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <Link to={'/register'}
            
            class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span class="relative text-base font-semibold text-purple-600">
              Create an Account
            </span>
          </Link>
        </div>
      </div>    
    )
  }

  const Services = () => {
    return (
      <div className="max-w-7xl grid grid-cols-1 space-y-4 sm:container sm:mx-auto sm:py-12 sm:grid-cols-12 sm:gap-x-8 sm:items-center sm:px-2 lg:gap-x-12">
        <div className="text-center px-2 space-y-2 sm:text-left sm:col-span-7">
          <h3 className="text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl tracking-wide  leading-tight">
            Made for growth.
          </h3>
          <p className="text-lg text-gray-200 sm:text-xl md:text-2xl t">
            One Hive is all about helping individuals and startups grow through
            stable funding and investments.
          </p>
        </div>

        <div className="sm:col-span-5 px-2 sm:px-0" >
          <img
          className="w-full"
            src={
              "https://cdn.sanity.io/images/noj3nhym/production/82c8ed8639a57630e7dfb4b8766f288788844161-259x331.svg"
            }
            alt="image"
          />
        </div>
      </div>
    );
  }

  const FollowTheMoney = () => {
    return (
      <div className=" py-16">
        <div className="max-w-7xl grid grid-cols-1 space-y-4 sm:container sm:mx-auto sm:flex sm:flex-row-reverse sm:gap-x-8 sm:items-center sm:px-2 lg:px-8  lg:gap-x-12">
        <div className="text-center space-y-2 sm:text-left px-2">
          <h3 className="text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl tracking-wide  leading-tight">
            Follow the money.
          </h3>
          <p className="text-xl font-medium text-gray-200 sm:text-xl md:text-2xl">
            See popular investments in real time from users in your circle, right from their profile.
          </p>
        </div>

        <div>
          <img
            src={
              "https://cdn.sanity.io/images/noj3nhym/production/4e660f4ba768f614d77ab4bbc913228bef62560b-772x763.svg"
            }
            alt="image"
          />
        </div>
      </div>
      </div>
    );
  }

  const GrowTogether = () => {
    return (
      <div className="bg-white py-8">
        <div className="max-w-5xl grid grid-cols-1 space-y-4 sm:container sm:mx-auto sm:py-12 sm:grid sm:grid-cols-12 sm:gap-x-8 sm:items-center sm:px-2 lg:px-8  lg:gap-x-12">
        <div className="text-center space-y-2 sm:text-left px-2 sm:col-span-8">
          <h3 className="text-4xl font-bold text-blk sm:text-4xl md:text-5xl">
            Earn together.
          </h3>
          <p className="text-lg font-medium text-blk sm:text-xl md:text-2xl">
            Share your resources with other users to make larger investments and One hive will automatically allocate returns according to investment size.
          </p>
        </div>

        <div className="sm:col-span-4 p-2 sm:p-0">
          <img
          className="h-full w-full"
            src={
              "https://cdn.sanity.io/images/noj3nhym/production/61639f46638479af661f79248f21324040a8a96b-251x310.svg"
            }
            height="400px"
            width="400px"
            alt="image"
          />
        </div>
      </div>
      </div>
    );
  }

  function Faq(params) {
    return(
      <>
      {/* <!-- FAQ --> */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Title --> */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Popular Answers.</h2>
      <p className="mt-1 text-gray-600 ">Answers to the most frequently asked questions about one hive.</p>
    </div>
    {/* <!-- End Title --> */}
  
    <div className="max-w-2xl mx-auto">
      {/* <!-- Accordion --> */}
      <div className="hs-accordion-group">
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6  active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
          <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none  a hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
            Can i use one hive for free?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
            <p className="text-gray-800 ">
              Yes, you can use one hive for absolutely free. you only have to be verified and on the basic plan to create a shared investment .
            </p>
          </div>
        </div>
  
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-two">
          <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
            How do i share investments?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
            <p className="text-gray-800 ">
              You can easily join other investment ideas from users in your feed on one hive or create your own investment idea other users can share with you in a few clicks.
            </p>
          </div>
        </div>
  
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-three">
          <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
            Will my investments be public?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
            <p className="text-gray-800 ">
              Its totally up to you. easily pick between sharing your recent investments publicly or privately with users in your circle.
            </p>
          </div>
        </div>
  
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-four">
          <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
            How does one hive help my business ?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
            <p className="text-gray-800 dark:text-gray-200">
              One hive is fully integrated with our pipe funding program to give you even greater access to upfront revenue by allowing users invest in your business through shared investments or directly. 
            </p>
          </div>
        </div>
  
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-five">
          <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
            How do I get verified?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
            <p className="text-gray-800 ">
              Getting verified is as easy as opting in for verification from your menu in one hive and following the procedures, or just click <Link className="text-indigo-600" to="/register">here</Link> to get started.
            </p>
          </div>
        </div>
  
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-six">
          <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
            Do i get the same returns with users i share investments with?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
            <p className="text-gray-800 ">
              Returns are automatically allocated by One hive so you dont have to do any calculations with other users, we simply allocate returns to you according to the size of your investment.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End Accordion --> */}
    </div>
  </div>
  {/* <!-- End FAQ --> */}
      </>
    )
  }

  return (
    <>
      <div
        className="overflow-hidden bg-[#0A0B12] "
        
      >
        <HiveHero  />
        <div className="space-y-8 ">
          <Services />
          <FollowTheMoney/>
          <GrowTogether/>
        </div>
       <div className="space-y-8 bg-white">
       <CTA title="Start building wealth today with One Hive." /> 
       <Faq/>
       </div>
       
      </div>
      <Footer />
    </>
  );
};

// function FeatureCard(params) {
//   return (
//     <>
//       <div class="py-16">
//         <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
//           <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
//             <div class="md:5/12 lg:w-1/2">
//               {/* <img src={Iphone} alt="image" loading="lazy" width="" height="" /> */}
//             </div>
//             <div class="md:7/12 lg:w-1/2">
//               <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
//                 Get Funding In Two Easy Steps
//               </h2>
//               <p class="my-8 text-gray-600 dark:text-gray-300">
//                 Getting Funding Has Never Been Easier For New And existing
//                 Businesses, One Hive Simplifies And Aids Your Growth By Tapping
//                 Into Your Future Profit Now.
//               </p>
//               <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
//                 <div class="mt-8 flex gap-4 md:items-center">
//                   <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div class="w-5/6">
//                     <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">
//                      1. Register
//                     </h4>
//                     <p class="text-gray-500 dark:text-gray-400">
//                   Complete A Quick Sign Up Process Including Verification
//                     </p>
//                   </div>
//                 </div>
//                 <div class="pt-4 flex gap-4 md:items-center">
//                   <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <div class="w-5/6">
//                     <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">
//                     2. Business Evaluation
//                     </h4>
//                     <p class="text-gray-500 dark:text-gray-400">
//                     You Dont Need to Get you Hands Dirty To Get An Evaluation. Simply Request Access To <span className="text-blue-400">BEM</span> And watch The Magic Happen
//                     </p>
//                   </div>
//                 </div>
               
//               </div>
//               <div className="w-full justify-center flex my-8">
//                 <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
//                   {"Apply"}
//                 </button>
//               </div>
//               <p className="text-gray-600 text-[10px] text-center">
//                 Disclosure: Funding Only Accessible After Business Model
//                 Evaluation And Verification by Medik 420.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// function SearchHive({ back }) {
//  const [investors, setinvestors] = useState(true)
//  const [startups, setstartups] = useState(false)
 
//  function handleTabs(params) {
//    if (investors) {
//     setinvestors(false)
//     setstartups(true)
//    }
//   else if (startups) {
//     setstartups(false)
//     setinvestors(true)
//    }
//  }

//   return (
//     <>
//       <div className=" relative bg-plat flex flex-1">
//         <Header back={back} />
//         <div className="py-10 max-w-6xl container mx-auto">
//         <Tabs setactive={handleTabs} tab1={investors} tab2={startups} section1={'Investors'} section2={'Startups'}/>
//         <ServicesCard investors={investors} startups={startups}/>
//         </div>
//       </div>
//     </>
//   );
// }




export default HiveLanding;
