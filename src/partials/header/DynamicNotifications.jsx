import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';
import { Badge, message } from 'antd';
import { client } from '../../../lib/client';
import { useQuery } from '@tanstack/react-query';
import mail from '../../assets/email.png'
import readmail from '../../assets/readmail.png'
import hemp from '../../assets/hemplogo.png'

function DynamicNotifications({msg, unread, test}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [read, setread] = useState(false)
  let email = localStorage.getItem('email')
  const query = `*[email == "${email}"]`



  const {isloading, isfetched , refetch , data : user} = useQuery(['messages'],()=> client.fetch(query))
//   const {isloading, isfetched , refetch , data : user} = useQuery(['messages'],()=> getmsg())
  let token = user && user[0]._id
  let notifications = user && user[0].notifications

  const [messages, setmessages] = useState(msg && msg)
  const [unreadmsg, setunreadmsg] = useState(messages && messages)
//   const [closed, setclosed] = useState(true)

  
  

  const trigger = useRef(null);
  const dropdown = useRef(null);

  function handleunread() {
  let msg = localStorage.getItem('msg')
    // setunreadmsg(unread.lenght -1)
    let list = messages?.map((m)=>{
      if(m._key == msg){
        return{
          ...m,
          read: true
        } 
      }
      else{
        return{
          ...m
        }
      }

    })
let unread = list.filter((i)=>{
  return(
    i.read !== true
  )
})





    setmessages(list)
    setunreadmsg(unread)
    console.log(user)
   
    client.patch(token)
    .set({notifications: list})
    .commit().then((res)=> {
      console.log(res)
       setTimeout(() => {
        refetch()
        setTimeout(() => {
          refetch()
        }, 1000 * 5);
       }, 1000 * 5);})
    
  }

//   useEffect(() => {
//     client.listen(`*[email == "${email}"]`).subscribe(event => {
//      setmessages(msg) ;
//      console.log(event)
//     });
  
    
//   }, [unreadmsg])

 


  
  // close on click outside


//   useEffect(() => {
//     const clickHandler = ({ target }) => {
//       if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
//       setDropdownOpen(false);
//     };
//     document.addEventListener('click', clickHandler);
//     return () => document.removeEventListener('click', clickHandler);
//   });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

 
  

  return (
   


    <div className="relative inline-flex ml-3">
    <Badge count={unreadmsg?.length} size='small' >
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-white  transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => {
        // handleunread()
        setDropdownOpen(!dropdownOpen)}}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-slate-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
          <path className="fill-current text-slate-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
        </svg>
        {/* <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></div> */}
      </button>
      </Badge>
      <Transition
        className="origin-top-right z-10 absolute top-full right-10 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-50 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-[14px] font-bold text-slate-400  pt-1.5 pb-2 px-4 bg-white border-b border-b-slate-200 font-space">Notifications</div>
          <ul className=''>

        {!isloading && messages?.map((message)=>{
         
          return(
              <>
              
                <Message message={message} />
              </>
          )

        }) }
          </ul>
        </div>
      </Transition>
    </div>
   
  
  )
}

export default DynamicNotifications;


function Message({message}) {
const time = new Date(message.created);
const hours = time.getHours();
const minutes = time.getMinutes();
const formattedTime = `${hours}:${minutes}`;
    const [closed, setclosed] = useState(true)
    const [read, setread] = useState(false)

function handleRead(params) {
  setread(true)
  readmsg = localStorage.getItem('msg')  
    
}
    return(
        <>
       
       <li onClick={()=> {
                  localStorage.setItem('msg', message._key)
                  setread(true)}
                   }  className="border-b border-slate-200 last:border-0 flex" key={message?._key}>
                   <div className='pl-2 pt-2' >
                   <Badge >
                    <div className='w-8 h-8 rounded-full'>
                        <img src={hemp} alt=""  className='w-full'/>
                    </div>
                    </Badge>
                   </div>
                  <Link
                    className="block py-2 px-4 "
                    to="#0"
                    // onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                   {/* <h3 className="block text-sm mb-2 uppercase">{message?.title}</h3> */}
                 
                    <p className={`leading-tight  font-space  text-[16px] ${read ? 'font-normal' : 'font-medium'}`}>{message?.message}</p>
                    <span className="block text-xs font-medium text-slate-400 my-2">{formattedTime}</span>
                  </Link>
        </li>
       
          
           
        </>
     
    )
}