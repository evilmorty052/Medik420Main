import { useState, useEffect, useContext, useRef,useMemo } from "react"
import { motion, AnimatePresence} from "framer-motion"
import {  FaArrowLeft,   FaChevronDown, FaExpandAlt,  FaInfo,  FaSearch, FaStar, FaUserFriends, FaUsers, FaEye, FaPlusCircle, FaBookmark, FaBan, FaFlag  } from "react-icons/fa"
import { client, urlFor } from "../../../lib/client"
import styles from "../../style"
import ScaleLoader from "react-spinners/ScaleLoader";
import { InformationModal,} from "../../components"
import { explainers } from "../../constants"
import { LargeSidebar } from "../../components/Dashboard/LaptopDisplay"
import './MobilePortfolio.css'
import { Infobutton, VerifiedUser } from "./Elements"
import { startupstab } from "../../assets"
import { Avatar, Result } from "antd"
import {MoreActionsDropdown}from "../../components/Dropdown"
import { Link, } from "react-router-dom"
import { FundingChart } from "./HubElements"
import { createAvatar } from '@dicebear/core';
import { personas, identicon, initials } from '@dicebear/collection';





const MobileHub = ({user}) => {
const [loading, setloading] = useState(false)
const [following, setfollowing] = useState(false)
const [foryou, setforyou] = useState(true)
const [syndicate, setSyndicate] = useState(false)
const [coinvestors, setcoinvestors] = useState(false)
const [activehost, setactivehost] = useState(false)
const [hostpage, sethostpage] = useState(false)
const [userid, setuserid] = useState(false)
const [activeSyndicate, setactiveSyndicate] = useState(null)

const [modal, setmodal] = useState(null)
const [question, setquestion] = useState(null)
const [answer, setanswer] = useState(null)
const [moreActions, setmoreActions] = useState(false)
const [targetProfile, settargetProfile] = useState(null)
const [posting, setposting] = useState(false)

const firstname = localStorage.getItem('firstname')
const lastname = localStorage.getItem('lastname')

const avatar = useMemo(() => {
  return createAvatar(initials, {
    seed: `${firstname} ${lastname}`,
    // ... other options
  }).toDataUriSync();
}, []);



// const [username, setusername] = useState(null)
const uid = localStorage.getItem('email')

const height = window.innerHeight







const username = localStorage.getItem('firstname')

const handleChannelCreate = async (friend) => {

};

async function fetchMembers(params) {
  const query = `*[_type == 'members']{...,investments[]{..., startup ->{image, name}}, posts[]{..., partners[] -> {avatar, firstname, lastname, username }}} `
  const userquery = `*[_type == 'users' && email == "${uid}"]{_id, firstname}`
  const userid = await client.fetch(userquery).then(res => res[0])
  const syndicatequery = `*[_type == 'syndicates']{...,investments[]{..., startup ->{image, name}}}`
  const syndicates = await client.fetch(syndicatequery).then(res => res)
  setSyndicate(syndicates)
  const coinvestors = await client.fetch(query).then(res => res)
  setcoinvestors(coinvestors)

  setuserid(userid._id)
  
 
}

async function fetchFollowing(params) {
  const userquery = `*[_type == "users" && email == "${uid}"]{_id}`
  const user = await client.fetch(userquery).then(res => res[0]._id)
  
  
  
  
  
  setsyndicates(syndicates)
}

async function handleJoin(host) {
  setloading(true)
  const emailID = localStorage.getItem('email')
  const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
  const userID = await client.fetch(query).then(res => res[0]._id)
  setactivehost(host)
  console.log(host)
  

  client
  .patch(`${host}`)
  .setIfMissing({followers: []})
  .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
  .commit({
    
    autoGenerateArrayKeys: true,
  }).then(res => {
    console.log(res)
    setloading(false)
  })

  
}

function handleModal(question, answer) {
  setquestion(question)
  setanswer(answer)
  setmodal(true)
}


// client.delete(targethost._id).then(res => console.log(res))

useEffect(() => {
fetchMembers()  
}, [])



function handleTabs(params) {
  if(following){
    setfollowing(false)
    setforyou(true)
  };

  if(foryou){
    setforyou(false)
    setfollowing(true)
  }

}

const Tabs = ({tab1, tab2 , setactive, section1, section2}) => {
  return (
          <>
            <div className="flex pt-2 px-4 ">
              <div className="flex cursor-pointer  w-full ">
                <div
                  onClick={setactive}
                  className={
                    !tab1
                      ? `pb-2 border-b-4 border-gray-300 w-1/2 flex justify-center`
                      : `pb-2 border-b-8 border-blue-400 w-1/2 flex justify-center`
                  }
                >
                  <a className="text-base font-semibold text-center">{section1}</a>
                </div>
                <div
                  onClick={setactive}
                  className={
                    !tab2
                      ? `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center`
                      : `pb-4 border-b-8 border-blue-400 w-1/2 flex justify-center`
                  }
                >
                  <a className="text-base font-semibold text-center">{section2}</a>
                </div>
              </div>
            </div>
          </>
  )
}

const UserCard = ({budget, roi, type, hostname, duration, raised, avatar, join, viewhost, func}) => {

const [hidden, sethidden] = useState(true)




    return(
        <>
    <div className="">
    <article class="rounded-xl border border-gray-700 bg-gray-800 mt-6 p-4 relative">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={avatar}
      class="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Host : {hostname}</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-green-300"> Verified </a>
          </li>

          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-gray-300"> Partners: 10 </a>
          </li>

          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-gray-300">Raised: {raised}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>

      <a
        
        class="block h-full rounded-lg border border-gray-700 p-2 "
      >
     <div className="flex justify-between">
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Type</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1 text-base font-medium text-gray-300">
          {type}
        </p>
      </div>
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Budget</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1  text-base font-medium text-gray-300">
          $ {budget}
        </p>
      </div>
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Duration</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1 text-base font-medium text-gray-300">
         {duration} Months
        </p>
      </div>
     </div>
      </a>
    </li>

    <li>
      <a
        
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">ROI</strong> 
          {/* <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div> */}
        </div>

        <p class="mt-1 text-3xl font-medium text-gray-300">
          {roi} %
        </p>
      </a>
    </li>
  <AnimatePresence>
    {
      !hidden &&
      <motion.div exit={{x:'-100%'}}  transition={{duration: 0.2}} className="flex flex-col gap-y-4 py-2 sidebar">
        <motion.button  onClick={func}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Add Friend'}
            </motion.button>
        <motion.button onClick={viewhost}  className="bg-blue-300 shadow-xl hover:bg-blue-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'View Host'}
            </motion.button>
      </motion.div>
    }
  </AnimatePresence>
  </ul>
   <div className="absolute top-8 right-4"><FaExpandAlt onClick={()=> sethidden(!hidden)} style={{color: 'white'}}/></div>
</article>
 
    </div>

        </>
    )
}
const MoreActionsModal = ({ modal, setmodal, sethost, addhost }) => {
  return (
    <>
      {modal && (
        <div
          id={"maincontainer"}
          onClick={(e) => {
            console.log(e.currentTarget.id);
            if (e.currentTarget.id.includes("modal")) {
              console.log(e.currentTarget.id);
            }
            setmodal(false);
          }}
          className="fixed z-[90000000] inset-0 bg-gray-800/10  "
        >
          <div className="flex h-full w-full relative justify-center items-center">
            <motion.div
              
              className="absolute sidebar flex p-4  rounded-t-2xl bottom-0 left-0 right-0 h-96 bg-white z-[90000001] "
            >
              <div className="flex flex-col justify-between w-full ">
                <div className="gap-y-6 flex flex-col">
                  <div onClick={() => sethostpage(targetProfile)} className="flex gap-x-2 items-center">
                    <FaEye />
                    <h3 className="text-base text-blk font-bold">
                      View {targetProfile?.username} Profile
                    </h3>
                  </div>

                  <div onClick={addhost} className="flex gap-x-2 items-center">
                    <FaPlusCircle />
                    <h3 className="text-base text-blk font-bold">
                      Add {targetProfile?.username} to Hive
                    </h3>
                  </div>

                  <div className="flex gap-x-2 items-center">
                    <FaBookmark />
                    <h3 className="text-base text-blk font-bold">
                      Bookmark this Partnership
                    </h3>
                  </div>

                  <div className="flex gap-x-2 items-center">
                    <FaBan />
                    <h3 className="text-base text-blk font-bold">
                      Block {targetProfile?.username}
                    </h3>
                  </div>

                  <div className="flex gap-x-2 items-center">
                    <FaFlag />
                    <h3 className="text-base text-blk font-bold">
                      Report {targetProfile?.username}
                    </h3>
                    {/* <h3 className="text-base text-blk font-bold">Report {targetProfile?.username}</h3> */}
                  </div>
                </div>
                <button onClick={() => setmodal(false)} className="btnHollow">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};




const SharedInvestmentCard = ({budget, roi, type, hostname, username, duration, raised, avatar, join, viewhost, func, setTargetProfile, sethost, addhost, memo}) => {
const [hidden, sethidden] = useState(true)



    return(
        <>
    <div className="flex items-start gap-x-1 md:gap-x-4 w-full md:min-w-[566px]   ">
     <div>
     <Avatar
     src={`${avatar}`}
     size={50}/>
     </div>
    <div className="space-y-4 ">
    <div  className="flex justify-between  items-center pt-2">
        <div className="flex flex-1 flex-col w-full">
             <div className="flex items-center gap-x-2">
                <a class="text-[15px] font-bold text-blk">{hostname}</a>
                <span  class="text-xs font-medium text-green-300"> <VerifiedUser/> </span>
                
             </div>
            <div className="flex items-center gap-x-3">
            <a class="text-[12px] font-bold text-gray-600">@{username}</a>
            <span className="text-[10px]">3 days ago</span>
            </div>
        </div>
        {/* <button onClick={setTargetProfile} id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button> */}
        <MoreActionsDropdown  viewhost={viewhost} setTargetProfile={setTargetProfile} targetProfile={targetProfile}/>
    </div>
    <p className="text-[15px] font-medium">
      {memo}
    </p>
    <article class="rounded-xl border border-gray-700 bg-gray-800 p-2 md:p-4 md:min-w-[560px] md:max-w-[560px]  ">
    
  <div class="flex items-center gap-4">

    <div>
      

      {/* <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
          </li>

          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-gray-300"> Partners: 10 </a>
          </li>

          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-gray-300">Raised: {raised}</a>
          </li>
        </ul>
      </div> */}
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>

      <a
        
        class="block h-full rounded-lg border border-gray-700 p-2 "
      >
     <div className="flex justify-between">
     {/* <div className="items hidden md:block">
      <div className=" items-center space-x-2 ">
             <strong class="font-medium text-[#f9f8f8]">Type</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1 text-base font-medium text-gray-300">
          {type}
        </p>
      </div> */}
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Budget</strong> 
              <Infobutton/>
        </div>

        <p class="mt-1  text-base font-medium text-gray-300">
          $ {budget}
        </p>
      </div>
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Duration</strong> 
             <Infobutton/>
        </div>

        <p class="mt-1 text-base font-medium text-gray-300">
         {duration}
        </p>
      </div>
     </div>
      </a>
    </li>

    <li>
      <a
        
        class="block h-full rounded-lg border border-gray-700 p-4 "
      >
        <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">ROI</strong> 
          {/* <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div> */}
        </div>

        <p class="mt-1 text-3xl font-medium text-gray-300">
          {roi} %
        </p>
      </a>
    </li>
  <div>
     {/* <AnimatePresence>
    {
      !hidden &&
      <motion.div exit={{x:'-100%'}}  transition={{duration: 0.2}} className="flex flex-col gap-y-4 py-2 sidebar">
        <motion.button  onClick={func}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Add Friend'}
            </motion.button>
        <motion.button onClick={viewhost}  className="bg-blue-300 shadow-xl hover:bg-blue-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'View Host'}
            </motion.button>
      </motion.div>
    }
  </AnimatePresence> */}
  </div>
  </ul>
   <div className="py-5 flex flex-col gap-y-2">
   {/* <button onClick={viewhost}  className="btn">
      View Host
  </button> */}
   <button onClick={func} className="btnAlt">
      Connect
  </button>
   </div>
   {/* <div className="absolute top-8 right-4"><FaExpandAlt onClick={()=> sethidden(!hidden)} style={{color: 'white'}}/></div> */}
</article>
    </div>
 
    </div>
    {/* <MoreActionsModal targetProfile={targetProfile} sethost={viewhost}  modal={moreActions} setmodal={setmoreActions}/> */}
        </>
    )
}

const MobileSharedInvestmentCard = ({budget, roi, type, hostname, username, duration, raised, avatar, join, viewhost, func, setTargetProfile, sethost, addhost, memo}) => {
  const [hidden, sethidden] = useState(true)
  
  
  
      return(
          <>

    <div className="">
            {/* {postHeader} */}
            <div className="flex items-start gap-x-2 pl-1 md:gap-x-4 w-full pr-2  md:max-w-[600px] border rounded-xl py-2  ">
          <div>
            <Avatar
            src={`${avatar}`}
            size={50}/>
          </div>
          
          <div className="space-y-4 w-full">
          <div className="flex w-full justify-between  items-center ">
              <div className="flex flex-1 flex-col w-full">
                  <div className="flex items-center gap-x-2">
                      <a class="text-[15px] font-bold text-blk">{hostname}</a>
                      <span  class="text-xs font-medium text-green-300"> <VerifiedUser/> </span>
                      
                  </div>
                  <div className="flex items-center gap-x-3">
                  <a class="text-[12px] font-bold text-gray-600">@{username}</a>
                  <span className="text-[10px]">3 days ago</span>
                  </div>
              </div>
              <div onClick={setTargetProfile} className="pt-2">
              <button  id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
                      <span class="sr-only">Open dropdown</span>
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              </button>
              </div>
              {/* <div className="pt-2">
              <MoreActionsDropdown/>
              </div> */}
          </div>   
          </div>
      </div>


        {/* {postText} */}


       <div className="py-4 px-2">
       <p className="text-[15px] font-medium">
        {memo}
      </p>
       </div>

      {/* {postCard} */}
      <div className="px-2">          
          <article class="rounded-xl border border-gray-700 bg-gray-800 p-2 md:p-4  ">
          
          <div class="flex items-center gap-4">
        
            <div>
              
        
              {/* <div class="flow-root">
                <ul class="-m-1 flex flex-wrap">
                  <li class="p-1 leading-none">
                  </li>
        
                  <li class="p-1 leading-none">
                    <a  class="text-xs font-medium text-gray-300"> Partners: 10 </a>
                  </li>
        
                  <li class="p-1 leading-none">
                    <a  class="text-xs font-medium text-gray-300">Raised: {raised}</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        
          <ul class="mt-4 space-y-2">
            <li>
        
              <a
                
                class="block h-full rounded-lg border border-gray-700 p-2 "
              >
            <div className="flex justify-between">
            <div className="items hidden md:block">
              <div className=" items-center space-x-2 ">
                    <strong class="font-medium text-[#f9f8f8]">Type</strong> 
                  <div className="pb-4">
                  <div className="p-[2.5px] rounded-full bg-white">
                      <span className="text-[10px] text-blue-400"><FaInfo/></span>
                  </div>
                  </div>
                </div>
        
                <p class="mt-1 text-base font-medium text-gray-300">
                  {type}
                </p>
              </div>
            <div className="items">
              <div className="flex items-center space-x-2">
                    <strong class="font-medium text-[#f9f8f8]">Budget</strong> 
                    <Infobutton/>
                </div>
        
                <p class="mt-1  text-base font-medium text-gray-300">
                  $ {budget}
                </p>
              </div>
            <div className="items">
              <div className="flex items-center space-x-2">
                    <strong class="font-medium text-[#f9f8f8]">Duration</strong> 
                    <Infobutton/>
                </div>
        
                <p class="mt-1 text-base font-medium text-gray-300">
                {duration}
                </p>
              </div>
            </div>
              </a>
            </li>
        
            <li>
              <a
                
                class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <div className="flex items-center space-x-2">
                    <strong class="font-medium text-[#f9f8f8]">ROI</strong> 
                  {/* <div className="pb-4">
                  <div className="p-[2.5px] rounded-full bg-white">
                      <span className="text-[10px] text-blue-400"><FaInfo/></span>
                  </div>
                  </div> */}
                </div>
        
                <p class="mt-1 text-3xl font-medium text-gray-300">
                  {roi} %
                </p>
              </a>
            </li>
          {/* <AnimatePresence>
            {
              !hidden &&
              <motion.div exit={{x:'-100%'}}  transition={{duration: 0.2}} className="flex flex-col gap-y-4 py-2 sidebar">
                <motion.button  onClick={func}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
                      {'Add Friend'}
                    </motion.button>
                <motion.button onClick={viewhost}  className="bg-blue-300 shadow-xl hover:bg-blue-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
                      {'View Host'}
                    </motion.button>
              </motion.div>
            }
          </AnimatePresence> */}
          </ul>
          <div className="py-5 flex flex-col gap-y-2">
          {/* <button onClick={viewhost}  className="btn">
              View Host
          </button> */}
          <button onClick={func} className="btnAlt">
              Connect
          </button>
          </div>
          {/* <div className="absolute top-8 right-4"><FaExpandAlt onClick={()=> sethidden(!hidden)} style={{color: 'white'}}/></div> */}
          </article>
      </div>
    </div>

      
          </>
      )
  }

const Syndicatecard = ({image, name, follow , view}) => {
  const [hidden, sethidden] = useState(true)
  return(
      <>
      <div className='flex flex-col'>

      <motion.a animate={hidden ? ''  : {opacity:0.5} }

class={`  z-[2] relative block w-[340px]  overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat mt-6 md:w-[280px] `}
style={{backgroundImage: `url(${image})`}}
>
<div class="absolute inset-0 bg-black/60"></div>

<div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
  <div class="sm:pt-18 pt-12 text-white lg:pt-24">
    <h3 class="text-base font-bold ">{name}</h3>

    <p class="text-sm">Verified</p>
  </div>

  <span 
    class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
  >
    4.5
    {/* <FaEyeSlash/> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 text-yellow-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  </span>
  <span onClick={()=> sethidden(!hidden)} className="absolute bottom-6 right-4 text-[#f9f8f8]"><FaChevronDown/></span>
</div>

</motion.a>
<AnimatePresence exitBeforeEnter={true}>
  
     {!hidden && 
     <motion.div  exit={{x: '-100%'}} initial={{y: '0'}} animate={{y: ['20%', '40%']}} transition={{duration: 0.4,}} className='flex  p-2  justify-center bg-gray-300 shadow-inner rounded-2xl '>
     <div class="flex space-x-3 ">
            {/* <a  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">Follow</a> */}
            <a onClick={follow}  class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 w-[120px]   ">Follow</a>
            <a  onClick={view}  class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 w-[120px]   ">View Page</a>
        </div>
     </motion.div>}
</AnimatePresence>
      </div>
      </>
  )
}



const ForYou = ({syndicatesonly}) => {
  const [syndicates, setsyndicates] = useState(null)
  // const [activeSyndicate, setactiveSyndicate] = useState(null)
  const [coInvestorsGrid, setcoInvestorsGrid] = useState(null)
  const [syndicatesGrid, setSyndicatesGrid] = useState(null)
  const [recommendedpage, setrecommendedpage] = useState(null)
  
  

useEffect(() => {
  if(!syndicatesGrid && !coInvestorsGrid){
    setrecommendedpage(true)
  }

}, [syndicatesGrid, coInvestorsGrid])


  const handleview = (host) => {
    sethostpage(host)
    console.log('this is the host :', host)
  }
  
  async function handleFollow(syndicate) {
    // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
    const emailID = localStorage.getItem('email')
    const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
    const userID = await client.fetch(query).then(res => res[0]._id)
    client
    .patch(`${syndicate}`)
    .setIfMissing({followers: []})
    .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
    .commit({
      
      autoGenerateArrayKeys: true,
    }).then(res => {
      console.log(res)
      
    })
    // console.log(syndicate)
  }
  
  function handleViewSyndicate(syndicate) {
    setactiveSyndicate(syndicate)
  }

  async function fetchSyndicates(params) {
    const query = `*[_type == 'syndicates']{...,investments[]{..., startup ->{image, name}}}`
    const syndicates = await client.fetch(query).then(res => res)
    setsyndicates(syndicates)
  }

  const SyndicatesGrid = () => {
    return(
      <>
        <div className="flex gap-y-4 flex-col w-full ">
            <div className={`${styles.sectionSubHeading} md:text-center`}><h3 onClick={() =>{
              handleModal('What Is A Syndicate ?', `${explainers.syndicatequestion.answer}`)
            }}>Trending Syndicates</h3></div>
            <div className="flex gap-y-5 flex-col md:items-center w-full">
            {mocksyndicates?.map((syndicate)=>{
              return(
                <>
                <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                </>
              )
            })}
            </div>
       </div>
      </>
    )
  }
  const CoinvestorsGrid = () => {
    return(
      <>
      
        <div onClick={() => handleModal('Shared investments ?', `${explainers.sharedPortfolioQuestion.answer}`) } className={styles.sectionSubHeading}><span >Recommended Shared Investments</span></div>
        <div>
        <>
        <div  className="flex flex-col ">   
        {mockMembers?.map((coinvestor)=>{
          return(
            <UserCard 
            hostname={coinvestor.username} 
            duration={coinvestor.duration} 
            type={coinvestor.type}
            raised={coinvestor.raised} 
            budget={coinvestor.budget}
            roi={coinvestor.roi}
            avatar={urlFor(coinvestor.avatar)}
            join={()=> handleJoin(coinvestor._id)}
            viewhost={() => handleview(coinvestor)}
            friend={coinvestor.username}
            func={()=> handleChannelCreate(coinvestor.firstname.toString().toLowerCase())} />
          )
        })}
        </div>
        </>
       </div>
      </>
    )
  }

  const Header = () => {
    return(
      <>
      <div className="px-4 md:flex justify-center ">
        <div className="flex w-full md:max-w-xl items-center space-x-2 p-2 bg-gray-100 rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search hosts, startups" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
      </>
    )
  }

  const Filters = () => {
    const [recommended, setRecommended] = useState(true)
    const [coInvestments, setcoInvestments] = useState(false)
    const [syndicates, setsyndicates] = useState(false)
  
    const handleFilter = (filter) =>{
    switch (filter) {
      case 'recommended':
      !recommendedpage ? setrecommendedpage(true) : setrecommendedpage(false)
       setSyndicatesGrid(false)
       setcoInvestorsGrid(false)
        break;
      case 'coInvestments':
        setcoInvestorsGrid(!coInvestorsGrid)
        if(!recommendedpage && !syndicatesGrid ){
           setrecommendedpage(true)
        }
        setrecommendedpage(false)
        break;
      
      case 'syndicates':
        
        setSyndicatesGrid(!syndicatesGrid)
        setrecommendedpage(false)
        
        
        break;
    
      default:
       
        break;
    }
    }
  
    return(
      <>
       <div>
           <ul className="flex overflow-x-scroll  pb-5 gap-x-8 px-2">
              <li className="">
                  <motion.a onClick={()=> handleFilter('recommended')} animate={recommendedpage ?{ backgroundColor: '#86efac' } : ''}     transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={recommendedpage ?{ scale:1.4, } : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaStar style={{color:'gold'}}/> </motion.div><span className="text-base font-semibold text-gray-800 tracking-wide">Recommended</span>
                  </motion.a>
              </li>
              <li className="">
                  <motion.a onClick={()=> handleFilter('coInvestments')} animate={coInvestorsGrid ?{ backgroundColor: '#86efac' } : ''}   transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={coInvestorsGrid ?{ scale:1.4} : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaUserFriends style={ coInvestorsGrid && {color:'gold'}}/> </motion.div><span className="text-base font-semibold text-gray-800 tracking-wide">Coinvestors</span>
                  </motion.a>
              </li>
              <li className="">
                  <motion.a onClick={()=> handleFilter('syndicates')}animate={syndicatesGrid ?{ backgroundColor: '#86efac' } : ''}  transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={syndicatesGrid ?{ scale:1.4} : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaUsers style={syndicatesGrid && {color:'gold'}}/> </motion.div><span className="text-lg font-semibold text-gray-800 tracking-wide">Syndicates</span>
                  </motion.a>
              </li>
           </ul>
       </div>
      </>
    )
  }

const SyndicatePage = ({syndicate}) => {
  return(
    <>
    {syndicate?.name}
    </>
  )
}

  useEffect(() => {
  fetchSyndicates()  
  
  }, [])
  
  // if(!syndicates | !coinvestors){
  //   return (
  //     <div className="flex h-screen justify-center items-center pb-20">
  //     <span>
  //      <ScaleLoader
  //       width={30}
  //       color={'#00c4ee'}/>
  //   </span>
  //   </div>
  //   )
  // }

  if (syndicatesonly) {
    return(
      <SyndicatesGrid/>
    )
  }

  // if(activeSyndicate){
  //   return(
  //     <>
  //     <SyndicatePage syndicate={activeSyndicate}/>
  //     </>
  //   )
  // }

  return(
    <>
   <div className="pb-[93px] md:min-w-[600px]">
  {/* <div className="sticky hidden md:block  bg-white left-0 right-0 z-[80000] top-0 w-full"><Tabs setactive={handleTabs} section1={'For you'} section2={'Following'} tab1={foryou} tab2={following} /></div> */}
  <div className="md:hidden">
  <Header/>
  </div>
  <div className="w-full md:hidden pt-4">
    <Filters/>
  </div>
       <div className="flex flex-col gap-y-4 md:items-center">
    {syndicatesGrid  && <SyndicatesGrid/>  }  
     {coInvestorsGrid  && <CoinvestorsGrid/>}
       </div>
       <div className="flex flex-col gap-y-4 md:items-center">
    { !coInvestorsGrid && !syndicatesGrid && <>
      <SyndicatesGrid/>    
      <CoinvestorsGrid/>
      </>
      }
       </div>
   </div>
    </>
  )
}

const Feed = ({syndicatesonly}) => {
  // const [syndicates, setsyndicates] = useState(null)
  // const [activeSyndicate, setactiveSyndicate] = useState(null)
  const [coInvestorsGrid, setcoInvestorsGrid] = useState(null)
  const [syndicatesGrid, setSyndicatesGrid] = useState(null)
  const [recommendedpage, setrecommendedpage] = useState(null)
  
  

useEffect(() => {
  if(!syndicatesGrid && !coInvestorsGrid){
    setrecommendedpage(true)
  }

}, [syndicatesGrid, coInvestorsGrid])


  const handleview = (host) => {
    sethostpage(host)
    console.log('this is the host :', host)
  }
  
  async function handleFollow(syndicate) {
    // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
    const emailID = localStorage.getItem('email')
    const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
    const userID = await client.fetch(query).then(res => res[0]._id)
    client
    .patch(`${syndicate}`)
    .setIfMissing({followers: []})
    .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
    .commit({
      
      autoGenerateArrayKeys: true,
    }).then(res => {
      console.log(res)
      
    })
    // console.log(syndicate)
  }
  
  function handleViewSyndicate(syndicate) {
    setactiveSyndicate(syndicate)
  }

  // async function fetchSyndicates(params) {
  //   const query = `*[_type == 'syndicates']{...,investments[]{..., startup ->{image, name}}}`
  //   const syndicates = await client.fetch(query).then(res => res)
  //   setsyndicates(syndicates)
  // }

  

  const SyndicatesGrid = () => {
    return(
      <>
        <div className="flex gap-y-4 flex-col w-full max-w-sm">
            <div className={`px-2`}><h3 className="text-blk font-semibold text-lg " onClick={() =>{
              handleModal('What Is A Syndicate ?', `${explainers.syndicatequestion.answer}`)
            }}>Trending Syndicates</h3></div>
            <div className="flex gap-y-5 flex-col md:items-center ">
            {syndicate?.map((syndicate)=>{
              return(
                <>
                <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                </>
              )
            })}
            </div>
       </div>
      </>
    )
  }


  const CoinvestorsGrid = () => {

    const memberposts = coinvestors?.map((coinvestor)=>{
      return{
        member: coinvestor,
        posts: coinvestor.posts,
        
      }
    })

    // console.log(memberposts)

    return(
      <>
      
{ syndicatesonly &&  <div onClick={() => handleModal('Shared investments ?', `${explainers.sharedPortfolioQuestion.answer}`) } className={'py-4 px-2'}><span className="text-blk text-lg font-semibold" >Recommended Hosts</span></div>
}        <div>
        <>
        <div  className="flex flex-col items-center gap-y-8 md:px-2 pt-4 w-full   ">   
        {memberposts?.map((coinvestor)=>{
          return(
          <>
          
<div className="w-full pb-4 border-b border-b-black/20 hiddenfromtabupwards ">
                <MobileSharedInvestmentCard
            hostname={coinvestor.member.firstname + " " + coinvestor.member.lastname} 
            username={coinvestor.member.username}
            duration={coinvestor.posts[0].duration} 
            type={coinvestor.posts[0].type}
            raised={coinvestor.raised} 
            budget={coinvestor.posts[0].budget}
            roi={coinvestor.posts[0].roi}
            avatar={urlFor(coinvestor.member.avatar)}
            memo={coinvestor.posts[0].memo}
            join={()=> handleJoin(coinvestor._id)}
            viewhost={() => {
              sethostpage(targetProfile)
              setmoreActions(null)
              }}
            setTargetProfile={()=> {
              settargetProfile(coinvestor.member)
              console.log(targetProfile)
             
              setmoreActions(true)
              console.log(coinvestor.username)
              
            }}
        
            func={()=> handleChannelCreate(coinvestor.firstname.toString().toLowerCase())} />
          </div>

          {/* {laptopcard} */}
          <div className="w-full hidden md:block  ">
          <SharedInvestmentCard
      hostname={coinvestor.member.firstname + " " + coinvestor.member.lastname} 
      username={coinvestor.member.username}
      duration={coinvestor.posts[0].duration}
      type={coinvestor.posts[0].type}
      raised={coinvestor.raised} 
      budget={coinvestor.posts[0].budget}
      roi={coinvestor.posts[0].roi}
      avatar={urlFor(coinvestor.member.avatar)}
      memo={coinvestor.posts[0].memo}
      join={()=> handleJoin(coinvestor._id)}
      viewhost={() => {
      sethostpage(coinvestor.member)
      setmoreActions(null)
      }}
      friend={coinvestor.username}
      setTargetProfile={()=> {
        settargetProfile(coinvestor.member)
        
        
        console.log(coinvestor.username)
        
      }}
      
      func={()=> handleChannelCreate(coinvestor.firstname.toString().toLowerCase())} />
    </div>
          </>
          )
        })}
        </div>
        </>
       </div>
      </>
    )
  }

  const FollowGrid = () => {

    const FollowCard = ({name, avatar, func, username}) => {
      return(
        <div>
            <div className="flex items-center">
            <img src={avatar} className='h-10 w-10 rounded-full object-cover' alt="" />
             <div className="flex-1 mx-2">
             <p className="text-blk font-semibold text-sm">{name}</p>
              <p className="text-xs  text-gray-600">{username}</p>
             </div>
            <button className="bg-green-300 px-2 py-1 min-w-[32px] rounded-xl text-xs">Follow</button>
            </div>
        </div>
      )
    }

    return(
     <>
       <div className="p-2">
          <h3 className="text-lg font-semibold text-blk">Who to follow</h3>
       </div>
      <div className="px-2">
      <div className="flex flex-col gap-y-8 py-4 px-4 bg-[#f7f9f9] rounded-xl">
          {
            coinvestors?.map((member)=>(
              <FollowCard 
              name={member.firstname}
              avatar={urlFor(member.avatar)}
              username={member.username}

              />
            ))
          }
       </div>
      </div>
     </>
    )
  }

  const Header = () => {
    return(
      <>
      <div className="px-4 md:flex justify-center ">
        <div className="flex w-full md:max-w-xl items-center space-x-2 p-2 bg-gray-100 rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search hosts, startups" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
      </>
    )
  }

  const Filters = () => {
    const [recommended, setRecommended] = useState(true)
    const [coInvestments, setcoInvestments] = useState(false)
    const [syndicates, setsyndicates] = useState(false)
  
    const handleFilter = (filter) =>{
    switch (filter) {
      case 'recommended':
      !recommendedpage ? setrecommendedpage(true) : setrecommendedpage(false)
       setSyndicatesGrid(false)
       setcoInvestorsGrid(false)
        break;
      case 'coInvestments':
        setcoInvestorsGrid(!coInvestorsGrid)
        if(!recommendedpage && !syndicatesGrid ){
           setrecommendedpage(true)
        }
        setrecommendedpage(false)
        break;
      
      case 'syndicates':
        
        setSyndicatesGrid(!syndicatesGrid)
        setrecommendedpage(false)
        
        
        break;
    
      default:
       
        break;
    }
    }
  
    return(
      <>
       <div>
           <ul className="flex overflow-x-scroll  pb-5 gap-x-8 px-2">
              <li className="">
                  <motion.a onClick={()=> handleFilter('recommended')} animate={recommendedpage ?{ backgroundColor: '#86efac' } : ''}     transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={recommendedpage ?{ scale:1.4, } : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaStar style={{color:'gold'}}/> </motion.div><span className="text-base font-semibold text-gray-800 tracking-wide">Recommended</span>
                  </motion.a>
              </li>
              <li className="">
                  <motion.a onClick={()=> handleFilter('coInvestments')} animate={coInvestorsGrid ?{ backgroundColor: '#86efac' } : ''}   transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={coInvestorsGrid ?{ scale:1.4} : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaUserFriends style={ coInvestorsGrid && {color:'gold'}}/> </motion.div><span className="text-base font-semibold text-gray-800 tracking-wide">Coinvestors</span>
                  </motion.a>
              </li>
              <li className="">
                  <motion.a onClick={()=> handleFilter('syndicates')}animate={syndicatesGrid ?{ backgroundColor: '#86efac' } : ''}  transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={syndicatesGrid ?{ scale:1.4} : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaUsers style={syndicatesGrid && {color:'gold'}}/> </motion.div><span className="text-lg font-semibold text-gray-800 tracking-wide">Syndicates</span>
                  </motion.a>
              </li>
           </ul>
       </div>
      </>
    )
  }

const SyndicatePage = ({syndicate}) => {
  return(
    <>
    {syndicate?.name}
    </>
  )
}

  
  if( !coinvestors){
    return (
      <div className="flex h-screen justify-center items-center pb-20">
      <span>
       <ScaleLoader
        width={30}
        color={'#00c4ee'}/>
    </span>
    </div>
    )
  }

  if (syndicatesonly) {
    return(
     <>
      <SyndicatesGrid/>
      <FollowGrid/>
     </>
    )
  }

  // if(activeSyndicate){
  //   return(
  //     <>
  //     <SyndicatePage syndicate={activeSyndicate}/>
  //     </>
  //   )
  // }

  return(
    <>
   <div className="pb-[93px] md:pb-0 md:min-w-[500px] max-w-[900px]">
  {/* <div className="sticky hidden md:block  bg-white left-0 right-0 z-[80000] top-0 w-full"><Tabs setactive={handleTabs} section1={'For you'} section2={'Following'} tab1={foryou} tab2={following} /></div> */}
  <div className="sm:hidden">
  <Header/>
  </div>
  {/* <div className="w-full sm:hidden pt-4">
    <Filters/>
  </div> */}
       <div className="flex flex-col gap-y-4 ">
    {syndicatesGrid  && <SyndicatesGrid/>  }  
     {coInvestorsGrid  && <CoinvestorsGrid/>}
       </div>
       <div className="flex flex-col gap-y-4 ">
    { !coInvestorsGrid && !syndicatesGrid && <>
      {/* <SyndicatesGrid/>     */}
      <CoinvestorsGrid/>
      </>
      }
       </div>
   </div>
    </>
  )
}

const Following = () => {
const [followed, setfollowed] = useState(null)
const [syndicates, setsyndicates] = useState(null)
const [holder, setholder] = useState(true)
const [followedProfile, setFollowedProfile] = useState(null)
const [followedProfileModal, setfollowedProfileModal] = useState(null)

async function fetchFollowing(params) {
  const userquery = `*[_type == "users" && email == "${uid}"]{_id}`
  const user = await client.fetch(userquery).then(res => res[0]._id)
  const docquery = `*[_type == 'members' && references("${user}")]`
  const syndicatequery = `*[_type == 'syndicates' && references("${user}")]`
  const following = await client.fetch(docquery).then(res => res)
  const syndicates = await client.fetch(syndicatequery).then(res => res)
  setfollowed(following)
  setsyndicates(syndicates)
}

const FollowedActionsModal = ({ modal, setmodal, sethost, addhost }) => {
  return (
    <>
      {modal && (
        <div
          id={"maincontainer"}
          onClick={(e) => {
            console.log(e.currentTarget.id);
            if (e.currentTarget.id.includes("modal")) {
              console.log(e.currentTarget.id);
            }
            setmodal(false);
          }}
          className="fixed z-[90000000] inset-0 bg-gray-800/10  "
        >
          <div className="flex h-full w-full relative justify-center items-center">
            <motion.div
              
              className="absolute sidebar flex p-4  rounded-t-2xl bottom-0 left-0 right-0 h-96 bg-white z-[90000001] "
            >
              <div className="flex flex-col justify-between w-full ">
                <div className="gap-y-6 flex flex-col">
                  <div onClick={() => sethostpage(followedProfile)} className="flex gap-x-2 items-center">
                    <FaEye />
                    <h3 className="text-base text-blk font-bold">
                      View {followedProfile?.username} Profile
                    </h3>
                  </div>

                  <div onClick={addhost} className="flex gap-x-2 items-center">
                    <FaPlusCircle />
                    <h3 className="text-base text-blk font-bold">
                      Add {followedProfile?.username} to Hive
                    </h3>
                  </div>

                  <div className="flex gap-x-2 items-center">
                    <FaBookmark />
                    <h3 className="text-base text-blk font-bold">
                      Bookmark this Partnership
                    </h3>
                  </div>

                  <div className="flex gap-x-2 items-center">
                    <FaBan />
                    <h3 className="text-base text-blk font-bold">
                      Block {followedProfile?.username}
                    </h3>
                  </div>

                  <div className="flex gap-x-2 items-center">
                    <FaFlag />
                    <h3 className="text-base text-blk font-bold">
                      Report {followedProfile?.username}
                    </h3>
                    {/* <h3 className="text-base text-blk font-bold">Report {targetProfile?.username}</h3> */}
                  </div>
                </div>
                <button onClick={() => setmodal(false)} className="btnHollow">
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

useEffect(() => {
  fetchFollowing()
}, [])





  if(!followed){
    return(
      <h3>...loading</h3>
    )
  }
  return(
    <>
   <div className="pb-[93px] ">
   <div className="px-4 md:hidden">
        <div className="flex  items-center space-x-2 p-2 bg-gray-200 rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-blk mx-4" />
             <input placeholder="Search hosts, startups" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
       <div className="flex flex-col gap-y-4 pt-10">
       {/* <div className="flex gap-y-4 flex-col">
            {syndicates?.map((syndicate)=>{
              return(
                <>
                <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                </>
              )
            })}
       </div> */}
       <div className="flex flex-col gap-y-8">
        <>
        {followed?.map((coinvestor)=>{
          return(
            <>
              {/* {MobileSetion} */}

                  <div className=" hiddenfromtabupwards">
                  <MobileSharedInvestmentCard key={coinvestor._id}
            hostname={coinvestor.username} 
            duration={coinvestor.duration} 
            type={coinvestor.type}
            raised={coinvestor.raised} 
            budget={coinvestor.budget}
            roi={coinvestor.roi}
            avatar={urlFor(coinvestor.avatar)}
            join={()=> handleJoin(coinvestor._id)}
            viewhost={() => {
              sethostpage(followedProfile)
              setmoreActions(null)
              }}
              friend={coinvestor.username}
              setTargetProfile={()=> {
                setFollowedProfile(coinvestor)
                setfollowedProfileModal(true) 
                // setmoreActions(true)
              }}
             />
                  </div>

                  {/* {laptopsection} */}
        
                  <div className="hidden md:block">
                  <SharedInvestmentCard key={coinvestor._id}
            hostname={coinvestor.username} 
            duration={coinvestor.duration} 
            type={coinvestor.type}
            raised={coinvestor.raised} 
            budget={coinvestor.budget}
            roi={coinvestor.roi}
            avatar={urlFor(coinvestor.avatar)}
            join={()=> handleJoin(coinvestor._id)}
            viewhost={() => {
              sethostpage(followedProfile)
              
              }}
              friend={coinvestor.username}
              setTargetProfile={()=> {
                setFollowedProfile(coinvestor)  
                
              }}
             />
                  </div>
            </>
          )
        })}
        </>
       </div>
       </div>
    <FollowedActionsModal  modal={followedProfileModal}  setmodal={setfollowedProfileModal}/>
   </div>
    </>
  )
}

const HostPage = ({host, avatar}) => {
const [scrolled, setscrolled] = useState(false)
  const scrollToRef = useRef(null);

  async function handleFollow(syndicate) {
    // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
    const emailID = localStorage.getItem('email')
    const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
    const userID = await client.fetch(query).then(res => res[0]._id)
    client
    .patch(`${syndicate}`)
    .setIfMissing({followers: []})
    .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
    .commit({
      
      autoGenerateArrayKeys: true,
    }).then(res => {
      console.log(res)
      
    })
    // console.log(syndicate)
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const RecentInvestments = ({investments}) => {

    const InvestmentActivity = ({name, amount, avatar, status}) => {
        return(
          <>
           <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                            <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate ">
                                {name}
                            </p>
                            <p class="text-sm text-gray-500 truncate ">
                                Status:{" "}{status}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                            {formatter.format(amount)}
                        </div>
                    </div>
                </li>
          </>
        )
      }
     
    return(
        <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
           <Infobutton/>
       </div>
       <div  class="flow-root my-4">
            <ul  role="list" class="divide-y divide-gray-200 ">
                 {investments?.map((investment)=>{
          return(
            <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
          )
         })}
            </ul>
       </div>
       <div className=" flex gap-x-6 items-center">
           <div>
               <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
               <div className="flex gap-x-4 items-center">
                  <p className="text-2xl font-bold text-gray-800">{formatter.format(Math.round(revenue/2.7))}</p>
                  <span className="text-sm text-gray-600 font-semibold">Projected: {formatter.format(Math.round(pending/2.7))} <Infobutton/></span>
               </div>
           </div>
           
       </div>
    </div>
    )
}

const RecentActivities = ({activities}) => {

  const Activity = ({name, amount, avatar, status}) => {
      return(
        <>
         <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                              {name}
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                              Status:{" "}{status}
                          </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          {formatter.format(amount)}
                      </div>
                  </div>
              </li>
        </>
      )
    }
   
  return(
      <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Activity</h5>
         <Infobutton/>
     </div>
     <div  class="flow-root my-4">
          <ul  role="list" class="divide-y divide-gray-200 ">
               {activities?.map((investment)=>{
        return(
          <Activity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
        )
       })}
          </ul>
     </div>
     <div className="">
         <div>
             <h3 className="text-[18px] text-gray-600 font-semibold">Requests:</h3>
             <p className="text-2xl font-bold text-gray-800">0</p>
         </div>
     </div>
  </div>
  )
}

  const InvestmentActivity = ({name, amount, avatar, status}) => {
    return(
      <>
       <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            {name}
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            {status}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {formatter.format(amount)}
                    </div>
                </div>
            </li>
      </>
    )
  }

  

  const revenue = host?.investments?.filter((investment)=>{
    return investment.status.includes('completed')
  }).map((investment)=>{
    return investment.amount
  }).reduce((a, b) => a + b, 0)
  
  const pending = host?.investments?.filter((investment)=>{
    return !investment.status.includes('completed')
  }).map((investment)=>{
    return investment.amount
  }).reduce((a, b) => a + b, 0)
  
  
 
const FollowStatus = () => {
  let followed 
  const following = host?.followers?.filter((follower)=>{
       return follower._ref.includes("1ea0d8f0-d2b1-44c9-9d82-a04e47ceb237")
     }
     )
    //  console.log(following)
        
        if (following.length > 0) {
          followed = 'Following'
          return(followed)
        }

        else return 'Connect'
}

const userdetails = {
  id: 'solo',
  name: 'solo',
  image: 'https://getstream.io/random_png/?id=quiet-night-9&name=quiet-night-9'
}

const filters = { type: 'messaging', members: { $in: [`solo`] } };
 
function scroll() {
  scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  setscrolled(true)
}

useEffect(() => {
 !scrolled && scroll()
 }, [])

  return (
    <>

      <div className="flex flex-col container max-w-7xl border-b pb-10 border-black/10 relative">

        {/* {backButton} */}
        
        <div
          ref={scrollToRef}
          onClick={() => sethostpage(false)}
          className="absolute top-0 left-4 text-blk text-2xl flex items-center gap-x-4"
        >
          <FaArrowLeft /> <span className="">back</span>
        </div>

        {/* {profilecoverimage} */}

        <div className="absolute top-10 w-full h-[140px]">
          <img
            src={startupstab}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* {profileimage} */}

        <div className="absolute top-[130px] flex justify-center w-full overflow-hidden  ">
          <Avatar size={100} src={`${avatar}`} />
        </div>

        <div className="pt-[250px]  flex flex-col items-center gap-4">
          {/* {usernameBlock} */}

          <div className="flex gap-x-2">
            <h3 className="text-xl font-semibold text-blk">
              {host?.firstname} {host?.lastname}
            </h3>
            <VerifiedUser/>
            {/* <p>{host?.username}</p> */}
          </div>

          {/* {statistics} */}

          <div class="flex justify-center  ">
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {host.followers?.length}
              </span>
              <span class="text-sm text-blueGray-400">Followers</span>
            </div>
            <div class="mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {host.investments?.length}
              </span>
              <span class="text-sm text-blueGray-400">Investments</span>
            </div>
            <div class="lg:mr-4 p-3 text-center">
              <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {!host.partners ? "0" : host.partners.length}
              </span>
              <span class="text-sm text-blueGray-400">Partners</span>
            </div>
          </div>

          {/* {followButton} */}

          <div className="w-full px-2 sm:px-14 lg:px-20">
            <button className="btn">
              <FollowStatus/>
            </button>
          </div>

           {/* {Additional Details} */}

          <div className="space-y-2 px-2 self-start sm:flex sm:space-x-4 sm:items-center md:px-10">
            <div class="text-sm leading-normal mt-0 mb-2 sm:mb-0 sm:mt-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div>
            <div class="mb-2 text-blueGray-600  sm:mt-0 sm:mb-0">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager
            </div>
          </div>
        </div>

          {/* {RecentInvestments} */}

        <div className="pt-8 px-2 md:px-10 ">
         <div className="sm:flex justify-center  w-full mx-auto">
        <RecentInvestments investments={host?.investments}/>
         </div>
      </div>

      {/* {funding Chart} */}

      {/* <div className="pt-8  px-2 md:px-10 ">
         <FundingChart/>
      </div> */}

       {/* {Recent Activites} */}
       
      <div className="pt-8 pb-[93px] px-2 md:px-10 ">
         <div className="sm:flex justify-center  w-full mx-auto">
        <RecentActivities />
         </div>
      </div>
      
      
      

      </div>

      
    </>
  );
}

const SyndicatePage = ({syndicate, avatar}) => {

  async function handleFollow(syndicate) {
    // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
    const emailID = localStorage.getItem('email')
    const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
    const userID = await client.fetch(query).then(res => res[0]._id)
    client
    .patch(`${syndicate}`)
    .setIfMissing({followers: []})
    .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
    .commit({
      
      autoGenerateArrayKeys: true,
    }).then(res => {
      console.log(res)
      
    })
    // console.log(syndicate)
  }

  // const totalRevenue = syndicate?.investments?.reduce()
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });


  const InvestmentActivity = ({name, amount, avatar, status}) => {
    return(
      <>
       <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            {name}
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            {status}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {formatter.format(amount)}
                    </div>
                </div>
            </li>
      </>
    )
  }
 
const FollowStatus = () => {
  let followed 
  const following = syndicate?.followers?.find((follower)=>{
       return follower._ref == userid
     }
     )
        
        if (following) {
          followed = 'Following'
          return(followed)
        }

        else return 'Connect'
}



  
  return(
    <>
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
     <main ref={ref}  class="profile-page pb-[83px]">
  <section class="relative block h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ('0px')"}}>
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div onClick={()=> setactiveSyndicate(false)} className="absolute top-4 left-4 text-[#f9f8f8] text-2xl flex items-center gap-x-4"><FaArrowLeft/> <span className="">back</span></div>
  </section>
  <section class="relative sm:py-16 bg-white">
    <div class="sm:container mx-auto ">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex  justify-center">
              <div class="relative ">
                <img alt="..." src={avatar} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
              
            </div>
            <div class="w-full lg:w-4/12 sm:px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6  px-4  mt-[50px]  flex justify-between sm:mt-0">
              <div   className="  py-6 sm:mt-12 md:-mt-4 sm:px-20 md:px-0  w-full flex justify-center">
                <button onClick={()=> handleFollow(syndicate._id)} class="bg-pink-500 w-full sm:max-w-2xl  active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-base tracking-wide pr-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  <FollowStatus/>
                </button>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center  lg:pt-4 ">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{syndicate?.followers?.length}</span><span class="text-sm text-blueGray-400">Followers</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{syndicate?.investments?.length}</span><span class="text-sm text-blueGray-400">Investments</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{'0' }</span><span class="text-sm text-blueGray-400">Partners</span>
                </div>
              </div>
            </div>
          </div>
          <div id="top" class="text-center mt-4 sm:mt-12">
            <h3 class="text-2xl font-semibold leading-normal  text-blueGray-700 mb-2">
              {syndicate.name}
            </h3>
            {/* <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div> */}
            <div class="mb-2 text-blueGray-600 mt-2 sm:mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager
            </div>
            <div class="mb-2 text-blueGray-600">
              <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              {/* <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </p>
                <a href="#pablo" class="font-normal text-pink-500">Show more</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
     {/* <div id="bottom" className="py-4 px-4"> <h3 className={styles.sectionSubHeading}>Recent Investments</h3></div> */}
   
     <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
        <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        </a>
   </div>
   <div  class="flow-root my-4">
        <ul  role="list" class="divide-y divide-gray-200 ">
             {syndicate?.investments?.map((investment)=>{
      return(
        <InvestmentActivity status={investment.status} avatar={urlFor(investment?.startup?.image)} amount={investment.amount} name={investment?.startup?.name}/>
      )
     })}
        </ul>
   </div>
   <div className="">
       <div>
           <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
           <p className="text-2xl font-bold text-gray-800">$</p>
       </div>
   </div>
</div>
    </div>
  </section>
</main>
    </>
  )
}

const PostButton = () => {
  const [hidden, sethidden] = useState(false)
  
  return (
     <>
     <div className="postButton_container hiddenfromtabupwards fixed right-4 bottom-[80px] py-4 flex flex-col gap-y-4">
      <button onClick={()=> setposting(!posting)}  className="postButton h-12 w-12 rounded-full bg-green-300 p-2 ">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="w-full "
        >
          <g>
            <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
          </g>
        </svg>
      </button>
    </div>
     </>
  );
}

if(activeSyndicate){
  return(
    <SyndicatePage avatar={urlFor(activeSyndicate.avatar)} syndicate={activeSyndicate}/>
  )
}

// if(hostpage){
//   return(
//    <HostPage avatar={urlFor(hostpage?.avatar).width(512).height(512)} host={hostpage}/>
//   )
// }

// if(!coinvestors){
//   return(
//     <div className="flex h-screen justify-center items-center pb-20">
//       <span>
//        <ScaleLoader
//         width={30}
//         color={'#00c4ee'}/>
//     </span>
//     </div>
//   )
// }

const PostScreen = () => {
  return(
    <>
    <AnimatePresence exitBeforeEnter>

    <motion.div  key={'index'} exit={{y:'100%'}} initial={{y:'100%'}} animate={{y:'0'}} transition={{ease: 'easeIn'}}
    className="flex h-screen px-2 lg:min-w-[800px]  justify-center">
      {/* {back button} */}
       <div className="flex gap-x-2 fixed top-0 left-0 p-2 items-center">
           <span onClick={()=>setposting(false)}><FaArrowLeft/></span>
            <span onClick={()=>setposting(false)} className="text-sm text-blk font-semibold">Back</span>
       </div>
      
      <div  className="flex  py-4 flex-col gap-y-2 items-center sm:pt-8">
        <Result
         status={'warning'}
         title={'Only Verified Users Can Open Shared Investments'} />
         
         <div className="flex flex-col gap-y-6">
            <Link to={'/dashboard/verification'}>
                  <button className="btnAlt">
                  Get Verified
                </button>
            </Link>
           <button onClick={()=>setposting(false)} className="btnHollow">
            Continue Browsing Hub
           </button>
         </div>
         
      </div>
       
    </motion.div>
    </AnimatePresence>
    <PostButton/>
    </>
  )
}





const gridRef = useRef()

  return (
    <>
    
      {/* [mobile display] */}
   { !posting ?
   <div>
    { !hostpage ? 
     <div className={` hiddenfromtabupwards min-h-[${height}] bg-white `}>
        <div className="container relative min-h-screen  mx-auto max-w-5xl px-1 md:px-2 space-y-4">
          <div className="fixed hiddenfromtabupwards bg-white left-0  right-0 sm:left-[100px] z-[80] top-0 w-full">
            <Tabs
              setactive={handleTabs}
              section1={"For you"}
              section2={"Following"}
              tab1={foryou}
              tab2={following}
            />
          </div>
            <div className="hidden sm:block  ">
            <div className="tabgrid">
            <div className="w-[100px]  bg-white">
             <LargeSidebar/>
           </div>
          <div className="pt-14 sm:flex justify-center sm:px-4">
          {foryou ? <Feed /> : <Following />}
          </div>
            </div>
            </div>

            <div className="pt-14  sm:hidden">
            {foryou ? <Feed /> : <Following />}
          </div>
        </div>
        <InformationModal
          modal={modal}
          setmodal={setmodal}
          question={question}
          answer={answer}
        />
        <MoreActionsModal
          targetProfile={targetProfile}
          modal={moreActions}
          setmodal={setmoreActions}
        />
        <PostButton/>
      </div> :
        <div className="hiddenfromtabupwards">
           <HostPage avatar={urlFor(hostpage?.avatar).width(512).height(512)} host={hostpage}/>
        </div>
      }
    </div> : 
            <div className="hiddenfromtabupwards">
              <PostScreen/>
            </div>
    }

      {/* {laptop display} */}

      <div  className="hidden  md:grid grid-flow-col min-h-screen   container   max-w-screen-xl mx-auto  bg-white">
        
          <div  className="w-[100px] lg:w-[250px]">
            <LargeSidebar posting={posting} setposting={setposting} avatar={avatar} />
          </div>

          {/* {Main feed Section} */}

          <div  className="h-screen  relative  overflow-y-scroll  ">
           {
            !posting ? 
            <>
             <div className={`bg-white/60 backdrop-blur-sm z-[60000] sticky top-0 left-0 lg:left-[25%] right-0 ${hostpage && 'hidden'}`}>
              <Tabs
                setactive={handleTabs}
                section1={"For you"}
                section2={"Following"}
                tab1={foryou}
                tab2={following}
              />
            </div>
            <div className={`flex justify-center min-h-screen   ${hostpage && 'pt-0'}`}>
            {!hostpage ?  (
              foryou ?
              <Feed /> : <Following />  
            ) : 
            <HostPage avatar={urlFor(hostpage?.avatar).width(512).height(512)} host={hostpage}/>
            }
            </div>
            </> : <PostScreen/>
           }
          </div>

          {/* {trending syndicates tab} */}

          <div ref={gridRef} className="h-screen  sticky top-0 flex flex-col gap-y-4 md:w-[300px] lg:w-[380px]   pt-[20px] pb-[20px] overflow-y-scroll ">
           <div className="h-full relative">
           <div className="absolute left-2 right-2 z-[60000] bg-white  px-2  pb-4 ">
              <div className="w-full flex items-center bg-[#f7f9f9] px-2 rounded-2xl">
                <FaSearch />
                <input
                  placeholder="Search Hive"
                  className=" bg-transparent border-none focus:border-none focus:ring-0 w-full"
                  type="text"
                />
              </div>
            </div>
            <div  className="overflow-y-scroll h-[98vh] pt-14">
              <Feed syndicatesonly={true} />
            </div>
           </div>
          </div>
          {/* <PostButton/> */}
      </div>
    </>
  );
 
}

export default MobileHub


