import { Avatar } from 'antd';
import { useState,useMemo, useEffect  } from 'react';
import { client, urlFor } from '../../lib/client';
import Header from '../partials/Header';
import {Switch }from '@headlessui/react';
import { FaArrowLeft, FaAt } from 'react-icons/fa';
import { LargeHeader } from '../components/Dashboard/LaptopDisplay';
import { startupstab } from '../assets';
import { VerifiedUser, Infobutton } from '../partials/dashboard/Elements';
import { FundingChart } from '../partials/dashboard/HubElements';
import { useNavigate, Link } from 'react-router-dom';
import { createAvatar } from '@dicebear/core';
import { personas, identicon, initials } from '@dicebear/collection';


export default function ProfileSettingsPage({user}) {
  const [following, setFollowing] = useState()

  const navigate = useNavigate()

  // const handlePinChange = (event) => {
  //   setPin(event.target.value);
  // };

  // const handleAddressChange = (event) => {
  //   setAddress(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleProfileImageChange = (event) => {
  //   setProfileImage(event.target.value);
  // };

  // const emailID = localStorage.getItem('email')
  // let query = `*[email == "${emailID}"]`
  // const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  // ;
 
  // let notifications = user && user[0].notifications 




  // if(!user){
  //   return(
  //     <Loader/>
  //   )
  // }

  const avatar = useMemo(() => {
    return createAvatar(initials, {
      size: 128,
      seed: `${user?.firstname} ${user?.lastname}`,
      // ... other options
    }).toDataUriSync();
  }, []);

  const coverPhoto = useMemo(() => {
    return createAvatar(identicon, {
      size: 128,
      seed: `${user?.firstname} ${user?.lastname}`,
      // ... other options
    }).toDataUriSync();
  }, []);

  const FetchProfile = async () => {
    const query = `*[_type == "users" && _id == "${user?._id}"]`
    const following = `*[_type == "members" && references("${user?._id}")]`
    const userdetails = await client.fetch(query).then((res) => res)
    const followingdetails = await client.fetch(following).then((res) => res)
    setFollowing(followingdetails)
    console.log(followingdetails)
  }

  useEffect(()=>{
 FetchProfile()
  }, [])




  const HostPage = ({host}) => {
    const [scrolled, setscrolled] = useState(false)
      
    
    
      
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    
      const Followers = ({investments}) => {
    
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
                <h5 class="text-xl font-bold leading-none text-gray-900 ">Followers</h5>
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
                   <h3 className="text-[18px] text-gray-600 font-semibold">Followers:</h3>
                   <div className="flex gap-x-4 items-center">
                      <p className="text-2xl font-bold text-gray-800">0</p>
                      {/* <span className="text-sm text-gray-600 font-semibold">Projected: {formatter.format(Math.round(pending/2.7))} <Infobutton/></span> */}
                   </div>
               </div>
               
           </div>
        </div>
        )
    }

    const Following = ({investments}) => {
    
      const FollowerRow = ({name, amount, avatar, status, to}) => {
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
                                  @{status}
                              </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                              <Link to={`${to}`} className="text-sm font-semibold text-blk cursor-pointer">
                                   View Profile
                              </Link>
                          </div>
                      </div>
                  </li>
            </>
          )
        }
       
      return(
          <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
          <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 ">Following</h5>
             <Infobutton/>
         </div>
         <div  class="flow-root my-4">
              <ul  role="list" class="divide-y divide-gray-200 ">
                   {investments?.map((investment)=>{
            return(
              <FollowerRow status={investment.username} avatar={urlFor(investment.avatar)} amount={investment.amount} name={investment.firstname} to={`/dashboard/hub/user/${investment._id}`}/>
            )
           })}
              </ul>
         </div>
         {/* <div className=" flex gap-x-6 items-center">
             <div>
                 <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
                 <div className="flex gap-x-4 items-center">
                    <p className="text-2xl font-bold text-gray-800">{formatter.format(Math.round(revenue/2.7))}</p>
                    <span className="text-sm text-gray-600 font-semibold">Projected: {formatter.format(Math.round(pending/2.7))} <Infobutton/></span>
                 </div>
             </div>
             
         </div> */}
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
      
    
     
    // const FollowStatus = () => {
    //   let followed 
    //   const following = host?.followers?.filter((follower)=>{
    //        return follower._ref.includes("1ea0d8f0-d2b1-44c9-9d82-a04e47ceb237")
    //      }
    //      )
    //     //  console.log(following)
            
    //         if (following.length > 0) {
    //           followed = 'Following'
    //           return(followed)
    //         }
    
    //         else return 'Connect'
    // }

      return (
        <>
        
    
          <div className="flex flex-col container md:mx-auto max-w-7xl border-b pb-10 border-black/10 relative">
    
            {/* {backButton} */}
            
            <div
  
              className="absolute top-0 left-4 text-blk text-2xl md:flex items-center gap-x-4 hidden "
            >
              <FaArrowLeft /> <span className="">back</span>
            </div>
    
            {/* {profilecoverimage} */}
    
            <div className="absolute top-0 w-full h-[140px]">
              <img
                src={coverPhoto}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* {profileimage} */}
    
            <div className="absolute top-[100px] flex justify-center w-full overflow-hidden  ">
              <Avatar size={100} src={avatar} />
            </div>
            <div></div>
    
    
            <div className="pt-[250px]  flex flex-col items-center gap-4">
              {/* {usernameBlock} */}
    
              <div className="flex gap-x-2">
                <h3 className="text-xl font-semibold text-blk first-letter:uppercase">
                  {host?.firstname}
                </h3>
                <span className="first-letter:uppercase text-xl font-semibold text-blk">{host?.lastname}</span>
                {/* <VerifiedUser/> */}
                <p>{host?.username}</p>
              </div>
    
              {/* {statistics} */}
    
              <div class="flex justify-center  ">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {!host.partners ? "0" : host.followers?.length}
                  </span>
                  <span class="text-sm text-blueGray-400">Agents</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    {/* {host.investments?.length} */}{!host.investments ? "0" : host.investments?.length}
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
    
              {/* <div className="w-full px-2 sm:px-14 lg:px-20">
                <button className="btn">
                  <FollowStatus/>
                </button>
              </div> */}
    
               {/* {Additional Details} */}
    
              <div className="space-y-2 px-2  sm:flex sm:space-x-4 sm:items-center md:px-10 ">
                <div class="text-sm leading-normal mt-0 mb-2 sm:mb-0 sm:mt-2 text-blueGray-400 font-bold uppercase flex items-center gap-x-2">
                  <FaAt/>
                  {host?.email}
                </div>
                <div class="mb-2 text-blueGray-600  sm:mt-0 sm:mb-0">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                 Subscription: {host?.plan}
                </div>
              </div>
            </div>
    
              {/* {RecentInvestments} */}
    
            {/* <div className="pt-8 px-2 md:px-10 ">
             <div className="sm:flex justify-center  w-full mx-auto">
            <RecentInvestments investments={host?.investments}/>
             </div>
          </div> */}

           {/* {Recent Activites} */}
           
           <div className="pt-8  px-2 md:px-10 ">
             <div className="sm:flex justify-center  w-full mx-auto">
            <RecentActivities />
             </div>
          </div>

          <div className="pt-8  px-2 md:px-10 ">
             <div className="sm:flex justify-center  w-full mx-auto">
            <Followers />
             </div>
          </div>

          <div className="pt-8  px-2 md:px-10 ">
             <div className="sm:flex justify-center  w-full mx-auto">
            <Following investments={following} />
             </div>
          </div>
    
          {/* {funding Chart} */}
    
          {/* <div className="py-8  px-2 md:px-10 ">
             <FundingChart/>
          </div> */}
    
          
          
          
          
    
          </div>
    
          
        </>
      );
    }
  

return(
    <> 
    <LargeHeader/>
      <Header halfmenu={true} func={() => window.location.assign('/dashboard')}/>
      <div className="min-h-screen bg-white pb-8">
      <HostPage host={user}/>
      </div>
    </>
)
}






export  function Profile({user}) {
const [closed, setclosed] = useState(false)
const [enabled, setenabled] = useState(false)
const [opt, setopt] = useState(false)
const [visibility, setvisibility] = useState(false)


const people = [
  { name: 'North America' },
  { name: 'South America' },
  { name: 'Europe' },
  { name: 'Africa' },
  { name: 'Asia' },
  
]

const options = [
  { name: 'Yes' },
  { name: 'No' },
  { name: 'Region Only' },
 
  
]

  return (
    <>
     <div className='lg:hidden font-space py-8'>
         <div className='container mx-auto'>
              <div className='flex flex-col w-full  main-container'>
                  <div className='py-5 flex flex-col w-full items-center  secondary-container'>
                      <label htmlFor="upload">
                            <div className='w-[150px] rounded-full bg-white p-3 relative'>
                                      <img className='w-full' src='https://www.svgrepo.com/show/260760/growth-investment.svg' alt="" />
                                      <div className='absolute inset-0 bg-slate-600/40 rounded-full flex items-center justify-center'>
                                          {/* <PlusCircleFilled style={{color: '#f9f8f8' , fontSize: '20px'}}/> */}
                                          <div htmlFor='upload' className='w-10 h-10 bg-white rounded-full'>
                                          <img  className='w-full' src="https://www.svgrepo.com/show/384413/add-create-new-plus.svg" alt="" />
                                            <input name='upload' id='upload' className='hidden' type="file" />
                                          </div>
                                      </div>
                                </div>    
                        </label>
                   
                      <div className='bio-container border border-red-300 '>
                          <div className='p-3  '>
                              <p className=' text-center text-3xl uppercase tracking-wide  font-semibold font-space'>{`${user?.[0].firstname } ${user?.[0].lastname }`  }</p>
                          </div>
                      </div>
                  </div>
                  <div className='flex-flex-col bg-plat'>
                      <div className='flex items-center gap-x-1'>
                       <div className='pt-4 w-full' >
                       <p  className='text-xl text-center  font-space font-semibold text-blk uppercase'>Contact Details</p>
                      </div>
                      {/* <div className='flex bg-green-300 rounded-full items-center'>
                      <PlusCircleOutlined style={{color: '#ffffff'}} onClick={()=> closed? setclosed(false) : setclosed(true)}/>
                      </div> */}
                      </div>
                      <div className=' px-4 bg-plat  sm:mx-auto'>
{ !closed &&
                      <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2 py-4">
        {/* <div>
            <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
            <input type="text" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
        </div>   */}
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </div>
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user?.[0].email} required/>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Pin</label>
        <input type="password" id="password" class=" relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
   
    {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
                      </form>
}
                      </div>
                       <div className='w-full my-4 '>
                       <h3 className='text-xl text-center  font-space font-semibold text-blk uppercase'>account settings</h3>
                        </div>
                      <div className='bg-white max-w-2xl sm:mx-auto py-5 sm:my-4'>
                      <div className='px-2'><h3 className='text-lg text-blk uppercase font-bold'>MEDIK COACH</h3></div>
                      <div className='flex flex-col '>
                        {/* <p className='text-xs uppercase '>Authorize Medik coach <br/> to monitor  account activity</p>
                        <label className='text-sm' htmlFor="">MEDIK COACH</label>
                        <div className='mt-3'>
                        <Switch  size='default'/>
                       </div> */}
                         <div className='flex flex-col'>
                            <div className='grid grid-cols-1 px-4 justify-center items-center border border-t-slate-700 py-2'>
                             <div className='my-2 px-4'>
                             {/* <p className='text-lg text-left' htmlFor="">MEDIK COACH</p> */}
                             <p className='text-sm'>Authorize Medik coach to monitor account activity</p>
                             </div>
                              <div className={`grid grid-cols-2 px-4 py-2 rounded-3xl ${ enabled ? 'bg-green-100' : 'bg-red-100'}`}>
                               <div className='flex items-center'>
                               <p className='text-base font-bold text-center' htmlFor="">{enabled ?"Active" : "Inactive"}</p>
                               </div>
                              <div className='flex items-center justify-center'>
                              <hr className="w-px h-8 bg-slate-800 mx-3" />
       <Switch
        checked={enabled}
        onChange={setenabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-red-300'}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
                              </div>
                              </div>
                            </div>
                            <div className='grid grid-cols-1 px-4 justify-center items-center py-2'>
                             <div className='my-2 px-4'>
                             {/* <p className='text-lg text-left' htmlFor="">MEDIK COACH</p> */}
                             <p className='text-sm'>Enable E-mail Notifications <br/> From Medik Coach</p>
                             </div>
                              <div className={`grid grid-cols-2 px-4 py-2 rounded-3xl ${ opt? 'bg-green-100' : 'bg-red-100'}`}>
                               <div className='flex items-center'>
                               <p className='text-base font-bold text-center' htmlFor="">{opt ?"Opt-Out" : "Opt-In"}</p>
                               </div>
                              <div className='flex items-center justify-center'>
                              <hr className="w-px h-8 bg-slate-800 mx-3" />
       <Switch
        checked={opt}
        onChange={setopt}
        className={`${opt ? 'bg-teal-900' : 'bg-red-300'}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${opt ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
                              </div>
                              </div>
                            </div>
                           
                         </div>
                         <div>

                         </div>
                      </div>
              
                      </div>
                      <div className='bg-white  max-w-xl sm:mx-auto py-5 sm:my-4'>
                      <div className='px-2'><h3 className='text-lg text-blk uppercase font-bold'>HIVE</h3></div>
                      <div className='flex flex-col border-slate-500 border py-4'>
                         <div className='flex flex-col'>
                         <div className='my-4 relative px-4'>
                              <div className='px-4'>
                              <p>Region</p>
                              </div>
                              <Dropdown people={people}/>
                          </div>       
                            <div className='grid grid-cols-1 px-4 justify-center items-center border border-t-slate-700 py-2'>
                             <div className='my-2 px-4'>
                             {/* <p className='text-lg text-left' htmlFor="">MEDIK COACH</p> */}
                             <p className='text-sm'>Profile Visibilty</p>
                             </div>
                              <div className={`grid grid-cols-2 px-4 py-2 rounded-3xl ${ visibility ? 'bg-green-100' : 'bg-red-100'}`}>
                               <div className='flex items-center'>
                               <p className='text-base font-bold text-center' htmlFor="">{visibility ? "Visible" : "Hidden"}</p>
                               </div>
                              <div className='flex items-center justify-center'>
                              <hr className="w-px h-8 bg-slate-800 mx-3" />
       <Switch
        checked={visibility}
        onChange={setvisibility}
        className={`${visibility? 'bg-teal-900' : 'bg-red-300'}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
                              </div>
                              </div>
                            </div>
                            <div className='grid grid-cols-1 px-4 justify-center items-center py-2'>
                             <div className='my-2 px-4'>
                             <p className='text-sm'>Allow Hive Owners <br/> Send Requests to you</p>
                             </div>
                              {/* <div className={`grid grid-cols-2 px-4 py-2 rounded-3xl ${ opt? 'bg-green-100' : 'bg-red-100'}`}>
                               <div className='flex items-center'>
                               <p className='text-base font-bold text-center' htmlFor="">{opt ?"Opt-Out" : "Opt-In"}</p>
                               </div>
                              <div className='flex items-center justify-center'>
                              <hr className="w-px h-8 bg-slate-800 mx-3" />
       <Switch
        checked={opt}
        onChange={setopt}
        className={`${opt ? 'bg-teal-900' : 'bg-red-300'}
          relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${opt ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
                              </div>
                              </div> */}
                              <div>
                                <Dropdown people={options}/>
                              </div>
                             
                            </div>
                         </div>
                         <div>

                         </div>
                      </div>
              
                      </div>
                  </div>
                <div className=' px-8 sm:px-20 py-4 w-full'>
                <button onClick={()=> action('test')} type="submit" class="text-white block w-full bg-green-300 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm sm:w-full px-5 py-2.5 text-center   ">UPDATE</button>
                </div> 
              </div>
         </div>
     </div>
    </>
  );
}




function action(action) {
  let operation

  function test(params) {
    console.log('working')
  }

  switch (action) {
    case 'test':
    operation = test()

      
      
      break;
  
    default:
      break;
  }


}