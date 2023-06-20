import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaChevronDown, FaChevronUp, FaEye, FaPlusCircle, FaBookmark, FaBan, FaFlag, FaBell, FaChevronRight , FaTimes} from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import { Avatar, Badge } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import { day } from '../../lib/dayjs'
import { client } from '../../lib/client'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 text-sm font-semibold text-gray-900  ">
          <FaChevronDown className="-mr-1 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* <Menu.Item>
              {({ active }) => (
                <NavLink
                  
                  to="/dashboard/messages"
                  className={classNames(
                    active ? 'bg-gray-100 text-blue-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Chat
                </NavLink>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={'/agents'}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Agents
                </NavLink>
              )}
            </Menu.Item> */}
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={'/dashboard/settings'}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Settings
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to={'/dashboard/profile'}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Profile
                </NavLink>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export function MoreActionsDropdown({follow, viewhost, to}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button  className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-black bg-opacity-30 px text-sm font-semibold text-gray-900  ">
          <button
            
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            class="inline-block text-blk  hover:bg-opacity-80     rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a onClick={viewhost}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex gap-x-2 items-center">
                    <FaEye />
                    <Link to={to} className="text-base text-blk font-bold">
                      View  Profile
                    </Link>
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={follow}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex gap-x-2 items-center">
                    <FaPlusCircle />
                    <h3 className="text-base text-blk font-bold">
                      Add  to Hive
                    </h3>
                  </div>
                </a>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex gap-x-2 items-center">
                    <FaBookmark />
                    <h3 className="text-base text-blk font-bold">
                      Bookmark Partnership
                    </h3>
                  </div>
                </a>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex gap-x-2 items-center">
                    <FaBan />
                    <h3 className="text-base text-blk font-bold">
                      Block User
                    </h3>
                  </div>
                </a>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <div className="flex gap-x-2 items-center">
                    <FaFlag />
                    <h3 className="text-base text-blk font-bold">
                      Report user
                    </h3>
                  </div>
                </a>
              )}
            </Menu.Item> */}
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function NotificationsDropdown({}) {
  const [notificationopen, setnotificationopen] = useState(false)
  const [deletedMessages, setdeletedMessages] = useState([])
  const [readMessages, setReadMessages] = useState([])
  const [newMessages, setnewMessages] = useState([])
  const [count, setcount] = useState(newMessages)

  const [notifications, setnotifications] = useState(null)
  const fetchNotifications = async () => {
    const cookie = localStorage.getItem('cookie')
    const query = `*[_type == "users" && _id == "${cookie}"]{ notifications}`
    const notifications = await client.fetch(query)
    console.log(notifications)
    const unread = notifications[0].notifications.filter(notification => notification.read == false)
    setnotifications(notifications[0].notifications)
    setnewMessages(unread.length > 0 ? unread.length : 0) 
    console.log(unread)
    return notifications
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
            } initial={{opacity: 1}} animate={deleted && {x: '200%'}} className={`flex items-center gap-x-4 p-4  rounded-xl  relative w-[356px] transition-all duration-500 ease-in shadow-2xl sm:w-[550px]  ${ readMessages?.includes(identifier) ? 'bg-white shadow-md' : 'bg-green-100/70 ' } `}>
  
              {/* avatar container */}
          <span className='self-start pt-4'><Avatar size={'default'} /></span>
  
          {/* {message text container} */}
           <div className='flex justify-between items-center w-full'>
  
            
           <div className='flex-1 flex flex-col items-start  '>
              <span className='text-[16px] sm:text-[20px] md:text-[24px] text-blk font-semibold'>{title}</span>
              <p className='text-[14px] sm:text-[16px] md:text-[20px]'>{!expanded ? `${snippet?.slice(0, 30)}...` : snippet} </p>
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

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setnotificationopen(!notificationopen)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 text-sm font-semibold text-gray-900  "
        >
          <button
            aria-label="notification"
            class="h-8 w-8 rounded-xl border bg-gray-100 active:bg-gray-200 hover:bg-green-200 transition-all duration-500 ease-in-out flex justify-center items-center"
          >
            {!notificationopen ? (
              <Badge count={newMessages} size={"small"}>
                <FaBell  />
              </Badge>
            ) : (
              <FaTimes />
            )}
          </button>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 min-w-[600px] origin-top-right rounded-md bg-gray-200/90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  p-8">
          <div className="py-1 space-y-10">
            {notifications?.map((notification, index) => {
              if (!deletedMessages.includes(notification._key)) {
                return (
                  <Message
                    key={index}
                    identifier={notification._key}
                    func={() => handleMessage(notification)}
                    title={notification.title}
                    snippet={notification.message}
                    time={notification.created}
                    deletemsg={() => handleDelete(notification._key)}
                  />
                );
              }
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
