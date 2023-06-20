import { useState, useEffect, useReducer, useMemo } from "react"
import {  FaArrowLeft,   FaChevronDown, FaInfo,  FaSearch, FaStar, FaEye, FaPlusCircle, FaBookmark, FaBan, FaFlag, FaChevronUp,FaTimes } from "react-icons/fa"
import { client, urlFor } from "../../../../lib/client"
import styles from "../../../style"
import { InformationModal, Loader} from "../../../components"
import { explainers } from "../../../constants"
import { LargeSidebar } from "../../../components/Dashboard/LaptopDisplay"
import '../MobilePortfolio.css'
import { Infobutton, VerifiedUser, FeedbackMessage} from "../Elements"
import { hemplogo, stockstab, bitcoin, startupstab, honeycomb } from "../../../assets"
import { Avatar, Result } from "antd"
import {MoreActionsDropdown}from "../../../components/Dropdown"
import { Link, Routes, Route, useParams, useNavigate, Outlet, useLocation} from "react-router-dom"
import { motion, AnimatePresence} from "framer-motion"
import { personas, identicon, initials } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';


const Hub = ({user}) => {
const [foryou, setforyou] = useState(true)
const [following, setfollowing] = useState(false)
const path = useLocation().pathname;
const [defaultUsers, setDefaultUsers] = useState(null)
const [Users, setUsers] = useState(null)
const [pipeFundingMembers, setPipeFundingMembers] = useState(null)
const [digitalFarmingMembers, setDigitalFarmingMembers] = useState(null)
const [stockTradingMembers, setStockTradingMembers] = useState(null)
const [cryptoMembers, setCryptoMembers] = useState(null)
const [startups, setStartups] = useState()



const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const navigate = useNavigate()

async function fetchUsers (){
    const query = `*[_type == "members"]`
    const startupsquery = `*[_type == "store"]`
    const startups = await client.fetch(startupsquery)
    const trending = startups?.filter((startup)=>{
      return startup.recommended == true
    })

    // const followingQuery = `*[_type == "members" && references("${user?._id}")]`
    const members = await client.fetch(query)
    const pipe = members?.filter((member)=>{
      return member.focus.includes("Pipe Funding")
    })
    const farming = members?.filter((member)=>{
      return member.focus.includes("Digital Farming")
    })
    
    const crypto = members?.filter((member)=>{
      return member.focus.includes("Cryptocurrency")
    })
    
    const stocks = members?.filter((member)=>{
      return member.focus.includes("Stocks")
    })
   
    
    
    setUsers(members)
    setDefaultUsers(members)
    setPipeFundingMembers(pipe)
    setDigitalFarmingMembers(farming)
    setCryptoMembers(crypto)
    setStockTradingMembers(stocks)
    setStartups(trending)

    // console.log(following)  
}



useEffect(() => {
    fetchUsers()
}, [])





async function handleFollow(targetUser) {
  // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
  const emailID = user?._id
  // const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
  // const userID = await client.fetch(query).then(res => res[0]._id)
  client
  .patch(`${targetUser._id}`)
  .setIfMissing({followers: []})
  .insert('after', 'followers[-1]', [{_ref: `${emailID}`, _type: 'reference'}])
  .commit({
    
    autoGenerateArrayKeys: true,
  }).then(res => {
    FeedbackMessage(`followed!${" "}@${targetUser.username}`)
    console.log(res)
    
  })
  // console.log(syndicate)
}

const UserPage = () => {
    const id = useParams().id
    const [host, sethost] = useState([])
    const [avatar, setAvatar] = useState(null)
    
    const fetchUserProfile = async () => {
        const query = `*[_type == 'members' && _id == "${id}"]{...,investments[]{..., startup ->{image, name}}, posts[]{..., partners[] -> {avatar, firstname, lastname, username }}} `
        const user = await client.fetch(query)
        console.log(user)
        sethost(user[0])
        setAvatar(user[0].avatar)
    }
    
    useEffect(() => {
        fetchUserProfile()
    }, [])
    
    
    
    async function handleFollow(syndicate) {
      // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
      // const emailID = localStorage.getItem('email')
      // const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
      // const userID = await client.fetch(query).then(res => res[0]._id)
      const userID = user?._id
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
              <InvestmentActivity status={investment.status} avatar={urlFor(investment?.startup?.image)} amount={investment.amount} name={investment?.startup?.name}/>
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
       {/* <div className="">
           <div>
               <h3 className="text-[18px] text-gray-600 font-semibold">Requests:</h3>
               <p className="text-2xl font-bold text-gray-800">0</p>
           </div>
       </div> */}
    </div>
    )
    }
    
    const SharedInvestments = ({activities}) => {
    
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
                <h5 class="text-xl font-bold leading-none text-gray-900 ">Shared Investments</h5>
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
         return follower._ref.includes(user?._id)
       }
       )
      
          
          if (following.length > 0) {
            followed = 'Following'
            return(followed)
          }
    
          else return 'Connect'
    }
 
    
    if (!avatar) {
    return(
        <Loader/>
    )
    }
   
    return (
      <>
    
        <div className="flex flex-col container max-w-7xl border-b pb-10 border-black/10 relative">
    
          {/* {backButton} */}
          
          <div
            onClick={() => navigate(-1)}
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
            <Avatar size={100} src={`${urlFor(avatar)}`}/>
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
              <button onClick={() => handleFollow(host._id)} className="btn">
                <FollowStatus/>
              </button>
            </div>
    
             {/* {Additional Details} */}
    
            {/* <div className="space-y-2 px-2  sm:flex sm:space-x-4 sm:items-center md:px-10">
              <div class="text-sm leading-normal mt-0 mb-2 sm:mb-0 sm:mt-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div class="mb-2 text-blueGray-600  sm:mt-0 sm:mb-0">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager
              </div>
            </div> */}
          </div>
    
            {/* {RecentInvestments} */}
    
          <div className="pt-8 px-2 md:px-10 ">
           <div className="sm:flex justify-center  w-full mx-auto">
          <RecentInvestments investments={host?.investments}/>
           </div>
        </div>
    
          <div className="pt-8 px-2 md:px-10 ">
           <div className="sm:flex justify-center  w-full mx-auto">
          <SharedInvestments investments={host?.investments}/>
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

    const Filter = ({name, avatar, func, bg}) => {
      return(
        <>
          {/* <!-- Card --> */}
<a onClick={func} class={`group flex flex-col  border shadow-sm rounded-xl hover:shadow-md transition  border-gray-800 sidebar ${bg}`} >
  <div class="p-4 md:p-5">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img class="h-[2.375rem] w-[2.375rem] rounded-full" src={avatar} alt="Image Description"/>
        <div class="ml-3">
          <h3 class="font-semibold group-hover:text-gray-400 text-gray-200">
           {name}
          </h3>
        </div>
      </div>
      <div class="pl-3">
        <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  </div>
</a>
{/* <!-- End Card --> */}
        </>
      )
    }

    const Post = () => {
      return(
          <>
          <AnimatePresence exitBeforeEnter>
      
          <motion.div  key={'index'} exit={{y:'100%'}} initial={{y:'100%'}} animate={{y:'0'}} transition={{ease: 'easeIn'}}
          className="flex h-screen px-2 lg:min-w-[800px]  justify-center">
            {/* {back button} */}
             <div onClick={()=> navigate(-1)} className="flex gap-x-2 fixed top-0 left-0 p-2 items-center">
                 <span ><FaArrowLeft/></span>
                  <span  className="text-sm text-blk font-semibold">Back</span>
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
                 <button onClick={()=> navigate(-1)} className="btnHollow">
                  Continue Browsing Hub
                 </button>
               </div>
               
            </div>
             
          </motion.div>
          </AnimatePresence>
          {/* <PostButton/> */}
          </>
        )
  }

const PostButton = ({}) => {
        const [hidden, sethidden] = useState(false)
        const [modalOpen, setModalOpen] = useState(false)

        const PostButtonActions = () => {
            return (
                <>
                 <div className="space-y-4">
                 {/* <Link to={`post`} className="flex items-center gap-x-4 pb-[4px]">
                    <h3 className="text-lg sm:text-xl font-semibold text-blk">Shared Investments</h3>
                <button onClick={()=> setModalOpen(!modalOpen)}  className="postButton z-50 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-300 p-[12px] sidebar ">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="w-full"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
            </button>
                </Link> */}
                <Link to={`post`} className="flex items-center gap-x-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-blk">Create Post</h3>
                <button onClick={()=> setModalOpen(!modalOpen)}  className="postButton z-50 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-300 p-2 sidebar ">
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
                </Link>
                 </div>
                </>
            )
        }

        const PostButtonModal = () => {
          const height = window.innerHeight

            return (
                <>
               { modalOpen &&
               <div className="modal-bg min-h-screen bg-white px-4 pt-[4px] space-y-2 ">
                <div className={`py-4`}>
                <p className={`text-2xl tracking-wide text-center text-blk font-semibold ${height < 668 && "hidden"}`}>{!path.includes("following") ? "Filter hive by interest" : "Filter following"}</p>
                </div>
                    <Filter bg="bg-slate-900" avatar={honeycomb} name="All Investments" func={() => setUsers(defaultUsers) }/>
                    <Filter bg="bg-slate-900" avatar={"https://cdn.sanity.io/images/noj3nhym/production/439378cc9fd56ee86c68d862d3a5f216b9e1e4bf-13x19.svg"} name="Pipe Funding" func={() => setUsers(pipeFundingMembers)}/>
                    <Filter bg="bg-slate-900" avatar={hemplogo}  name="Digital Farming" func={() => setUsers(digitalFarmingMembers)}/>
                    <Filter bg="bg-slate-900" avatar={stockstab} name="Stocks" func={() => setUsers(stockTradingMembers)}/>
                    <Filter bg="bg-slate-900" avatar={bitcoin} name="Cryptocurrency" func={() => setUsers(cryptoMembers)}/>
                </div>
                }
                </>
            )
        }

        
        
        return (
           <>
           <div className="postButton_container  z-60  hiddenfromtabupwards fixed right-4 bottom-[60px] py-4 flex flex-col  gap-y-4">
           <div className="flex flex-col items-end gap-y-4">
           {modalOpen && 
          <PostButtonActions/>
          }
          <div className="flex items-center gap-x-4">
          {modalOpen && <h3 className="text-lg sm:text-xl font-semibold text-blk">Cancel</h3>}
            <motion.button animate={modalOpen ? {rotate: 180} :{rotate: 0}} onClick={()=> setModalOpen(!modalOpen)}  className="postButton self-end  transition-all duration-500 ease-in  h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-300  grid place-content-center ">
              {/* <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="w-full "
              >
                <g>
                  <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                </g>
              </svg> */}
              {!modalOpen ? <FaChevronUp/> : <FaTimes/>}
            </motion.button>
          </div>
           </div>
          </div>
          <PostButtonModal/>
           </>
        );
      }

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
              <div className={`flex pt-2 px-4  hiddenfromtabupwards ${path.includes('post') || path.includes('bookmarks') && 'hidden'}`}>
                <div className="flex cursor-pointer  w-full ">
                  <Link
                  to={'/dashboard/hub'}
                    className={`pb-2   w-1/2 flex justify-center ${path.includes('following')  ? "border-gray-400 border-b-4" : "border-blue-400 border-b-8"}`
                    }
                  >
                    <a className="text-base font-semibold text-center">{section1}</a>
                  </Link>
                  <Link
                    to={'following'}
                    className={`pb-2  w-1/2 flex justify-center ${path.includes('following')  ? "border-blue-400 border-b-8" : "border-gray-400 border-b-4"}`}
                  >
                    <a className="text-base font-semibold text-center">{section2}</a>
                  </Link>
                </div>
              </div>
            </>
    )
  }

  const LargeTabs = ({tab1, tab2 , setactive, section1, section2}) => {
    return (
            <>
              <div className="pt-2 px-4 hidden md:flex ">
                <div className="flex cursor-pointer  w-full ">
                  <Link
                    to={'/dashboard/hub'}
                    className={`pb-2   w-1/2 flex justify-center ${path.includes('following')  ? "border-gray-400 border-b-4" : "border-blue-400 border-b-8"}`}             
                  >
                    <a className="text-base font-semibold text-center sm:text-lg">{section1}</a>
                  </Link>
                  <Link
                    to={'following'}
                    className={`pb-2  w-1/2 flex justify-center ${path.includes('following')  ? "border-blue-400 border-b-8" : "border-gray-400 border-b-4"}`}
                  >
                    <a className="text-base font-semibold text-center sm:text-lg">{section2}</a>
                  </Link>
                </div>
              </div>
            </>
    )
  }

  const InvestmentCard = ({firstname, lastname, username,avatar, roi, budget, to, follow,focus}) => {
    return(
      <>
        <div className="flex flex-col min-w-full max-w-md  bg-gradient-to-tr from-blk to-black/80 p-6 shadow-2xl rounded-2xl space-y-4">
  
          {/* header */}
          <div className="flex  items-center justify-between ">
            <div className="flex gap-x-2 items-center ">
              {/* avatar */}
              {/* <div className="bg-white rounded-full h-10 w-10 sm:h-14 sm:w-14 p-2"></div> */}
              <Avatar src={`${avatar}`}
              size={50}/>
              {/* username */}
              <div className="flex flex-col">
              <a className="text-gray-200 flex gap-x-[2px] text-sm sm:text-xl"><span>{firstname}{" "}{lastname}</span><span><VerifiedUser/></span></a>
              <a className="text-gray-200 -mt-2 text-xs sm:text-base">@{username}</a>
              </div>
  
              {/* actions button */}
            </div>
            <MoreActionsDropdown follow={follow} to={to}/>
          </div>
          
          {/* body */}
          <div className="pt-2">
            {/* <hr className="bg-white"/> */}
            <div className="flex justify-between py-2">
            <p className="text-gray-200 font-semibold sm:text-xl sm:tracking-wide">Duration</p>
            <p className="text-gray-200 font-semibold sm:text-xl">1Month</p>
            </div>
            <hr className="bg-gray-2"/>
            <div className="flex justify-between py-2">
            <p className="text-gray-200 font-semibold sm:text-xl sm:tracking-wide">Focus</p>
            <p className="text-gray-200 font-semibold sm:text-xl">{focus}</p>
            </div>
            <hr className="bg-gray-200"/>
            <div className="flex justify-between py-2">
            <p className="text-gray-200 font-semibold sm:text-xl sm:tracking-wide">Budget</p>
            <p className="text-gray-200 font-semibold sm:text-xl">{formatter.format(budget)}</p>
            </div>
            <hr className="bg-gray-200 "/>
            <div className="flex justify-between py-4">
            <p className="text-gray-200 text-2xl font-bold sm:text-3xl">R.O.I</p>
            <p className="text-gray-200 text-2xl font-bold sm:text-3xl">{roi}%</p>
            </div>
          </div>
  
          {/* button */}
         <div className="flex">
         <span className="w-full bg-white rounded-3xl px-4 py-2 text-lg md:text-xl tracking-wide font-semibold disabled:bg-black/70 text-center ">
             Share Investment
          </span>
         </div>
        </div>

        <hr className="bg-black"/>
      </>
    )
  }

  const ForYou = () => {
    return(
      <>
       <div className="flex flex-col  gap-8  sm:px-8 lg:px-16 py-8">
          {
               Users?.map((user, index) => (
                
                  <InvestmentCard key={index}
                  firstname={user?.firstname}
                   lastname={user?.lastname}
                   avatar={urlFor(user?.avatar)}
                   username={user?.username}
                   budget={user?.budget} 
                   focus={user?.focus}
                   roi={user?.roi}
                   to={`user/${user._id}`}
                   follow={() => handleFollow(user)}
                    />
              ))
          }
          
          <PostButton/>
          </div>
      </>
    )
  }

  const Following = () => {
    const [followedMembers, setFollowedMembers] = useState(null)

    async function fetchFollowing (){
      const followingQuery = `*[_type == "members" && references("${user?._id}")]`
      const following = await client.fetch(followingQuery)
      setFollowedMembers(following)
      console.log(following)  
  }
  
  useEffect(() => {
      fetchFollowing()
  }, [])


  if(!followedMembers){
    return(
      <Loader/>
    )
    }
    

    return(
      <>
       <div className="flex flex-col  gap-8  sm:px-8 lg:px-16 py-8">
          {
               followedMembers?.map((user, index) => (
                
                  <InvestmentCard key={index}
                  firstname={user?.firstname}
                   lastname={user?.lastname}
                   avatar={urlFor(user?.avatar)}
                   username={user?.username}
                   focus={user?.focus}
                   budget={user?.budget} 
                   roi={user?.roi}
                   to={`/dashboard/hub/user/${user._id}`}
                   follow={() => handleFollow(user)}
                    />
              ))
          }
          
          <PostButton/>
          </div>
      </>
    )
  }

  const UserFeed = () => {
    
      return(
        <>
         <ForYou/>
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
     <div className="bg-[#f7f9f9] rounded-xl">

       <div className="p-2 ">
          <h3 className="text-lg font-semibold text-blk">Who to follow</h3>
       </div>
      <div className="px-2">
      <div className="flex flex-col gap-y-8 py-4 px-4 ">
          {
            Users?.map((member, index)=>{
              
                if(!member.recommended ){
                    return
                }

              return(
                <>
                <FollowCard 
              name={member.firstname}
              avatar={urlFor(member.avatar)}
              username={member.username}

              />
                </>
              )
              })
          }
       </div>
      </div>
     </div>
     </>
    )
  }

  const TrendingStartups = () => {

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
     <div className="bg-[#f7f9f9] rounded-xl">

       <div className="p-2 ">
          <h3 className="text-lg font-semibold text-blk">Trending Startups</h3>
       </div>
      <div className="px-2">
      <div className="flex flex-col gap-y-8 py-4 px-4 ">
          {
            startups?.map((startup)=>(
              <FollowCard 
              name={startup.name}
              avatar={urlFor(startup.image)}
              username={startup.category}

              />
            ))
          }
       </div>
      </div>
     </div>
     </>
    )
  }

 
  if (!Users) {
    return (
        <Loader />
    )
  }

    return (
        <>
          <div className=" px-2 sm:px-0 sm:grid grid-cols-12 bg-white min-h-screen">

            {/* larger screen sidebar */}
            <div className="hidden sm:block col-span-2 mr-[250px] fixed ">
            <LargeSidebar firstname={user.firstname.charAt(0)} lastname={user.lastname.charAt(0)}/>
            </div>

           {/* mainfeed */}
          <div className="sm:col-span-12 md:col-span-8 lg:col-span-9  sm:ml-[100px] lg:ml-[250px] pb-20 ">

            {/* tabs */}
           <div className={`z-10 sticky top-0 filter backdrop:blur-2xl bg-white/70 left-0 sm:left-[100px] lg:left-[250px] right-0 ${path.includes('user') || path.includes('post') ? 'hidden' : 'block'}`}>
           <Tabs
              setactive={handleTabs}
              section1={"For you"}
              section2={"Following"}
              tab1={foryou}
              tab2={following}
            />
           <LargeTabs
              setactive={handleTabs}
              section1={"For you"}
              section2={"Following"}
              tab1={foryou}
              tab2={following}
            />

           </div>
          {/* <UserFeed/> */}
          <Routes>
          <Route path="/" element={<UserFeed />} />
          <Route path="following" element={<Following />} />
          <Route path="post" element={<Post />} />
          <Route path="bookmarks" element={<Post />} />
          <Route path="user/:id" element={<UserPage />} />
          </Routes>
          <Outlet/>
          </div>
           
           {/* extra info grid */}
          <div className="md:col-span-4 lg:col-span-3 hidden md:block relative border border-l">
            <div className="sticky inset-0  py-4 px-2 space-y-10 overflow-y-scroll">
               <div >
                <div className="p-2 border rounded-2xl flex items-center gap-x-4">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                     <input className="focus:ring-0 focus:outline-none focus:border-b-blue-400 border-t-0  border-r-0 border-l-0 text-lg sm:text-xl text-gray-700 font-bold" placeholder="Search Hive" />
                </div>
               </div>
               <FollowGrid/>
               <TrendingStartups/>
            </div>
          </div>
          </div>
         
        </>
    )
}











export default Hub
