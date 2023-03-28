import React, { useState, useRef } from "react";
import Iphone from "../assets/phone.png";
import phone from "../assets/retirementphone.png";
import hemp from "../assets/hemplogo.png";
import { CTA, Navbar } from "../components";
import AnimatedSidebar from "../components/AnimatedSidebar";
import { Link } from "react-router-dom";
import pie from "../assets/pie2.svg";
import Map from '../assets/globe illustration.svg'
import TeamScreen from '../assets/teamup.svg'
import Coperate from '../assets/coperate.svg'
import registerbusiness from '../assets/registerbusiness.svg'
import assistance from '../assets/assistance.svg'
import BEM from '../assets/BEM.svg'
import styles from "../style";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";
import {Header , HiveHero, Services, Tabs, LeftCard, BizServices} from './hive/index'

const HiveLanding = () => {
  const [searchmode, setsearchmode] = useState(false);
  const [expanded, setexpanded] = useState(false);

  const [tab1, settab1] = useState(false);
  const [tab2, settab2] = useState(true);

  function open(params) {
    expanded ? setexpanded(false) : setexpanded(true);
  }

  function setSearchMode(params) {
    !searchmode ? setsearchmode(true) : setsearchmode(false);
  }

  function func(params) {
    setsearchmode(true);
  }

  function handleTabs(params) {
    if (tab1) {
      settab2(true);
      settab1(false);
    } else if (tab2) {
      settab1(true);
      settab2(false);
    }
  }

  if (searchmode) {
    return <SearchHive back={() => setsearchmode(false)} />;
  }

  return (
    <>
      <Navbar open={open} />
      <AnimatedSidebar isExpanded={expanded} setIsExpanded={setexpanded} />
      <div
        className="overflow-hidden"
        onClick={() => expanded && setexpanded(false)}
      >
        <div>
          <HiveHero func={func} />
        </div>
        <div className="container mx-auto px-4 sm:px-16">
          <Tabs section1={'Startups'} section2={'Investors'} tab1={tab1} tab2={tab2} setactive={handleTabs} />
        </div>
        <div>
          {tab2 && (
            <>
              <Services/>
              <LeftCard image={phone} setSearchMode={setSearchMode} />
            </>
          )}
          {tab1 && (
            <>
              <BizServices/>
              <FeatureCard />
            </>
          )}
        </div>
      </div>
    </>
  );
};

function FeatureCard(params) {
  return (
    <>
      <div class="py-16">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div class="md:5/12 lg:w-1/2">
              <img src={Iphone} alt="image" loading="lazy" width="" height="" />
            </div>
            <div class="md:7/12 lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Get Funding In Two Easy Steps
              </h2>
              <p class="my-8 text-gray-600 dark:text-gray-300">
                Getting Funding Has Never Been Easier For New And existing
                Businesses, One Hive Simplifies And Aids Your Growth By Tapping
                Into Your Future Profit Now.
              </p>
              <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                <div class="mt-8 flex gap-4 md:items-center">
                  <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="w-5/6">
                    <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                     1. Register
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                  Complete A Quick Sign Up Process Including Verification
                    </p>
                  </div>
                </div>
                <div class="pt-4 flex gap-4 md:items-center">
                  <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="w-5/6">
                    <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">
                    2. Business Evaluation
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                    You Dont Need to Get you Hands Dirty To Get An Evaluation. Simply Request Access To <span className="text-blue-400">BEM</span> And watch The Magic Happen
                    </p>
                  </div>
                </div>
               
              </div>
              <div className="w-full justify-center flex my-8">
                <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Apply"}
                </button>
              </div>
              <p className="text-gray-600 text-[10px] text-center">
                Disclosure: Funding Only Accessible After Business Model
                Evaluation And Verification by Medik 420.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServicesCard({investors, startups}) {

  return(
    <>
    
    {investors && 
    <div class="relative w-full  py-16">
  <div class="container relative mx-auto px-6 text-gray-500 md:px-12">
    <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
      <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <img
          class="mx-auto w-24 lg:h-[68px]"
          src={Map}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 ">Browse Startups</h3>
        <p>
         Browse All Startups Participating In the One Hive Funding Programme
        </p>
       
        <div className="lg:pb-[22px] ">
        <Link to='/hivebiz'>
    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Browse"}
        </button> 
      </Link> 
        </div> 
        
      </div>
      <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
        <img
          class="mx-auto w-24 lg:h-[68px]"
          src={Coperate}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 ">Syndicates</h3>
        <p>
         Browse or Apply To All Open Investment Syndicates.
        </p>

        <div className="lg:pb-[22px] ">
        <Link to='/path'>
    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Browse"}
        </button> 
      </Link> 
        </div> 
      </div>
      <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
        <img
          class="mx-auto w-24 lg:h-[68px]"
          src={TeamScreen}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 ">Co-Invest</h3>
        <p>
          Find users interested in creating Investment Syndicates
        </p>
        <div className="lg:pb-[22px] ">
        <Link to='/path'>
    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Browse"}
        </button> 
      </Link> 
        </div> 
      </div>
    </div>
  </div>
</div>}
{startups && <div class="relative py-16">
  <div class="container relative m-auto px-6 text-gray-500 md:px-12">
    <div class="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
      <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
        <img
          class="mx-auto w-24 lg:h-[68px]"
          src={registerbusiness}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 ">Register Startup</h3>
        <p>
          Register Your Already Existing Business To Qualify for All Benefits Of One Hive 
        </p>
        <div className="lg:pb-[22px] ">
        <Link to='/path'>
    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Register"}
        </button> 
      </Link> 
        </div> 
      </div>
      <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
        <img
          class="mx-auto w-24 lg:h-[68px]"
          src={BEM}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 ">B.E.M</h3>
        <p>
          Request access to our Business evaluation Model Or Download Your Results.
        </p>
        <div className="lg:pb-[22px] ">
        <Link to='/path'>
    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Setup"}
        </button> 
      </Link> 
        </div> 
      </div>
      <div class="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10 ">
        <img
          class="mx-auto w-24 lg:h-[68px]"
          src={assistance}
          alt="illustration"
          loading="lazy"
        />
        <h3 class="text-2xl font-semibold text-gray-800 ">Business Assistance</h3>
        <p>
          find out the different ways we can help you get your business up and running
        </p>
        <div className="lg:pb-[22px] ">
        <Link to='/path'>
    <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                  {"Apply"}
        </button> 
      </Link> 
        </div> 
      </div>
    </div>
  </div>
</div>}                                
    </>
  )
}


function SearchHive({ back }) {
 const [investors, setinvestors] = useState(true)
 const [startups, setstartups] = useState(false)
 
 function handleTabs(params) {
   if (investors) {
    setinvestors(false)
    setstartups(true)
   }
  else if (startups) {
    setstartups(false)
    setinvestors(true)
   }
 }

  return (
    <>
      <div className=" relative bg-plat flex flex-1">
        <Header back={back} />
        <div className="py-10 max-w-6xl container mx-auto">
        <Tabs setactive={handleTabs} tab1={investors} tab2={startups} section1={'Investors'} section2={'Startups'}/>
        <ServicesCard investors={investors} startups={startups}/>
        </div>
      </div>
    </>
  );
}




export default HiveLanding;
