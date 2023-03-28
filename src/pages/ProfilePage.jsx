import { Avatar } from 'antd';
import React, { useState } from 'react';
import { client } from '../../lib/client';
import { useQuery } from '@tanstack/react-query';
import Header from '../partials/Header';
import Loader from '../components/Loader';
import cbd from '../assets/airbnb.png'
import Sidebar from '../partials/Sidebar2'
import {Switch }from '@headlessui/react';
import { PlusCircleFilled, PlusCircleOutlined } from '@ant-design/icons';
import Dropdown from '../components/Dropdown';

export default function ProfileSettingsPage() {
  const [pin, setPin] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const emailID = localStorage.getItem('email')
  let query = `*[email == "${emailID}"]`
  const { data: user } = useQuery(['userlist'], () => client.fetch(query))
  ;
 
  let notifications = user && user[0].notifications 




  if(!user){
    return(
      <Loader/>
    )
  }

  


  return (
    <>
    { 
      <div onClick={()=> {
        sidebarOpen && setSidebarOpen(false)&console.log('clicked')}} className="flex h-screen overflow-hidden ">
    
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} avatar={'https://www.svgrepo.com/show/260760/growth-investment.svg'}/>
       
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
    
        {/*  Site header */}
        <div >
        <Header 
        
        sidebarOpen={sidebarOpen}
       setSidebarOpen={setSidebarOpen}
        // name={user[0].firstname}
        // notifications={user[0].notifications && notifications}
        // unread={unread}
        avatar={cbd} />
        </div>
    
        <main>
          <div className="">
          <Profile user={user}/>
          </div>
          
        </main>
        
        {/* <Banner /> */}
      
      </div>
    </div>
    }
    </>
        
      );
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