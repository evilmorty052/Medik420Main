import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Help from './header/Help';
import UserMenu from './header/UserMenu';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaChevronDown, FaChevronUp,  FaHome, FaUser,FaTimes } from 'react-icons/fa';
import { Avatar, Badge, Empty, } from 'antd';
import { AnimatePresence, motion, } from '../hooks/useMotion';
import { SidebarContext } from '../contexts/SidebarContext';
import {client} from '../../lib/client';
import {day} from '../../lib/dayjs';

// import {close} from '../../assets'



function Header({
  setisExpanded,
  isExpanded,
  unread,
  name,
  sidebarOpen,
  setSidebarOpen,
  avatar,
  fullmenu,
  halfmenu,
  func,
  plan,
  user

}) {

 const [notifications, setnotifications] = useState(null)
  const fetchNotifications = async () => {
    const cookie = user?._id
    const query = `*[_type == "users" && _id == "${cookie}"]`
    const notifications = await client.fetch(query)
    console.log(notifications)
    const unread = notifications[0].notifications.filter(notification => notification.read == false)
    setnotifications(notifications[0].notifications)
    setnewMessages(unread.length > 0 ? unread.length : 0) 
    console.log(unread)
    return notifications
  }

  let dashboardpaths
  let path = useLocation().pathname

  const {expanded, toggleSidebar} = useContext(SidebarContext)

  switch (path) {
    case '/dashboard/settings':
      dashboardpaths = true
      break;
    case '/dashboard/Dashboard':
      dashboardpaths = true
      break;
    case '/dashboard/portfolio':
      dashboardpaths = true
      break;
   
      case '/coach':
      dashboardpaths = true
      break;
     
    
  
    default:
      break;
  }

  
  let pathid
  

  switch (path) {
    case '/dashboard/portfolio':
    pathid = 'Portfolio'
      break;
    case '/dashboard':
    pathid = 'Dashboard'
      break;
    case '/coach':
    pathid = 'HIVE COACH'
      break;
    
    case '/smallbiz':
    pathid = 'One Hive'
      break;
    case '/digital':
    pathid = 'Digital Farming'
      break;
    case '/hiveai':
    pathid = 'Hive Mind'
      break;
    case '/invest':
    pathid = 'Investments'
      break;
    case '/profile':
    pathid = 'Settings'
      break;
  
    default:
      break;
  }
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [notificationopen, setnotificationopen] = useState(false)
  const [viewMessage, setviewMessage] = useState(false)
  const [activeMessage, setactiveMessage] = useState(null)
  const [deletedMessages, setdeletedMessages] = useState([])
  const [readMessages, setReadMessages] = useState([])
  const [newMessages, setnewMessages] = useState([])

const handleNewMessage = () => {
  const unread = localStorage.getItem('unreadmessages')
  if (unread) {
    localStorage.setItem('unreadmessages', JSON.stringify(unread))
  }
  const newmsg = localStorage.getItem('unreadmessages')
  if (newmsg) {
    const m = JSON.parse(newmsg)
    setnewMessages(m)
  } 
}

  useEffect(() => {
  // handleNewMessage()
  const read = localStorage.getItem('readmessages')
  const deleted = localStorage.getItem('deletedmessages')

  if (deleted) {
    setdeletedMessages(JSON.parse(deleted))
  }

  else {
    setdeletedMessages([])
  }
  
  if (read) {
    setReadMessages(JSON.parse(read))
  }
  else {
    setReadMessages([])
  }
  console.log(readMessages)
  fetchNotifications()
  }, [notificationopen])
  
 
  

  function handleDelete(key) {
  deletedMessages.push(key)
  const list = notifications?.pop((notification)=>{
      notification._key == key
    })
    localStorage.setItem('deletedmessages', JSON.stringify(deletedMessages))
    console.log(list)
    console.log(notifications)
  }

  async function handleMessage(msg) {
    if (readMessages?.includes(msg._key)) {
      return
    }
      readMessages.push(msg._key)
      localStorage.setItem('readmessages', JSON.stringify(readMessages))
      console.log(msg)
    const readmsg = msg._key
    const id = localStorage.getItem('cookie')
    const messages = await client.fetch(`*[_type == "users" && _id == "${id}"]{notifications}`).then((data)=>{
      return data[0].notifications
    })

    const updatedmessages = messages?.map((message)=>{
      if(message._key == readmsg){
          return{
             ...message,
             read: true 
          }
      }
  
      return{
          ...message
      }
  })

    client.patch(id)
    .set({
      notifications: updatedmessages
  })
  .commit().then((res)=>{
    res && console.log(res)
  })

  }
  
  const Message = ({title, snippet, time, avatar, func, deletemsg, identifier}) => {
    const [deleted, setdeleted] = useState(null)
    const [expanded, setexpanded] = useState(false)
    const [read, setread] = useState(false)



      const createdAt = time;
      const parsedCreatedAt = day(createdAt);
      const timeAgo = parsedCreatedAt?.fromNow();

    return(
      <>
      <motion.div onClick={()=> 
          {setexpanded(!expanded)
          setread(true)
          func()}
          } initial={{opacity: 1}} animate={deleted && {x: '200%'}} className={`flex items-center gap-x-4 p-4  rounded-xl  relative w-[356px] transition-all duration-500 ease-in shadow-2xl sm:w-[450px]  ${ readMessages?.includes(identifier) ? 'bg-white shadow-md' : 'bg-green-100/70 ' } `}>

            {/* avatar container */}
        <span className='self-start pt-4'><Avatar size={'default'} /></span>

        {/* {message text container} */}
         <div className='flex justify-between items-center w-full'>

          
         <div className='flex-1 flex flex-col items-start  '>
            <span className='text-[16px] sm:text-[20px] text-blk font-semibold'>{title}</span>
            <p className='text-[14px] sm:text-[16px]'>{!expanded ? `${snippet?.slice(0, 30)}...` : snippet} </p>
            <div className='pt-1'>
               <span className='text-xs '>{timeAgo}</span>
            </div>
         </div>
         <div className='pl-2'>
         {!expanded ? <FaChevronDown 
         /> 
         : <FaChevronUp onClick={()=> setexpanded(!expanded)}/>}
         </div>
         </div>
          
          {/* {DeleteMessage Button} */}
          <div className='absolute -top-4 -left-2'>
            <a className=' rounded-full flex justify-center items-center p-2 bg-white'>
            <FaTimes onClick={()=>{
              setdeleted(true)
              deletemsg()}} 
              style={{fontSize:'14px'}}/>
            </a>
          </div>

        </motion.div>
      </>
    )
  }
  
  const Notifications = () => {
    const [count, setcount] = useState(newMessages)

     return(
     <>
      <div>
           <span className={`flex items-center transition-all ease-in-out duration-500 `} onClick={()=> setnotificationopen(!notificationopen)}>    
              {!notificationopen ? 
              <Badge count={count}  size={'small'}  >
                 <FaBell style={{color: 'bluegray', fontSize: '20px'}}/>
              </Badge> :
              <FaTimes style={{color: 'bluegray', fontSize: '20px'}}/>
              }   
           </span>
      </div>
     </>
     )
  };



  return (
        <>
       
    <header className=" top-0 sticky bg-gray-100 shadow-2xl border-b border-slate-200 z-30 flex flex-col gap-y-2 md:hidden">
      <div className="px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-12 -mb-px">

          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-gray-800  lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={()=> toggleSidebar()}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            {/* <hr className="w-px h-6 bg-white mx-3" /> */}
            
            {/* <h3 className='hidden sm:block uppercase text-xl text-white font-poppins tracking-widest font-bold ml-5'>{pathid}</h3> */}
          </div>
       

          {/* Header: Right side */}
         { fullmenu == true &&
           <div className="flex items-center">
        
            <Notifications unread={unread} msg={notifications} />
            
            {/* <Help /> */}
            
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu plan={plan} name={name} avatar={avatar && avatar} />
          </div>
          }
        
          {
            halfmenu == true  && 
            <div className='flex items-start font-poppins '>
              <div className='flex items-end'>
              {/* <span className='text-white text-xl sm:hidden'>
                {pathid}
              </span> */}
              </div>
              <hr className="w-px h-6 bg-white mx-3" />
               
               <div className='flex items-end gap-x-4'>
              
              <span onClick={func}  className=' text-gray-800 mr-2 text-xl' >Back</span>
               </div>
              
            </div>
          }

        </div>
      </div> 
    </header>
    
    {notificationopen &&
    
    <motion.div key={'notificationContainer'} layout   initial={{y: '-52px'}} animate={{y:0}} transition={{ease:'easeInOut'}} className='fixed transition-opacity ease-in duration-500 top-[51px] left-0 right-0 bg-gray-200/90 z-[2000] pt-4 px-4 pb-16 min-h-[100px] shadow-2xl '>
     <h3 className='text-center my-4'>Notifications</h3>

     {/* {Messages Container} */}
     <motion.div layout className='flex flex-col items-center gap-y-6'>

      {/* {Messages} */}

     {notifications?.map((notification, index)=>{
       if (!deletedMessages.includes(notification._key)){ 
         return(
          <Message  key={index} identifier={notification._key} func={()=> handleMessage(notification)} title={notification.title} snippet={notification.message} time={notification.created} deletemsg={()=> handleDelete(notification._key)} /> 
         )
       }
     })}
     </motion.div>
  </motion.div>
  }


      {/* {viewMessage && 
      <div className='fixed inset-0 bg-white z-[900000]'>
        <div className="flex h-full relative">
          <div className="absolute top-2 left-2">
            <span onClick={()=> setviewMessage(null)} className="text-blk text-base font-semibold">
              back
            </span>
          </div>
          <div className='pt-12'>
               <div className='px-2'>  
               <p className="text-2xl text-blk text-center font-semibold mb-4">
                {activeMessage.title}
               </p>
               <p className="text-blk text-lg font-medium">
                {activeMessage.message}
               </p>
               </div>
          </div>
        </div>
      </div>} */}
      
        </>
    
  );
}

export default Header;


function Add(params) {
  return(
    <>
    <div className='flex items-center gap-x-2'>
      <p className='text-white text-[18px] font-space uppercase'>Add Account</p>
       <PlusCircleFilled style={{color: '#86efac'}}/>
    </div>
    </>
  )
}