import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import honeycomb from '../assets/honeycomb.png'
import plant  from '../assets/growth.png'
import subscribe  from '../assets/subscribe.png'
import bag  from '../assets/shoppingbag.png'
import home  from '../assets/house.png'
import search  from '../assets/search.png'
import job  from '../assets/job.png'





const AnimatedSidebar = ({links, setSidebarOpen, sidebarOpen, isExpanded, setIsExpanded}) => {
  // const [isExpanded, setIsExpanded] = useState(true);
  const [explore, setexplore] = useState(false)
  const [showinvestments, setshowinvestments] = useState(false)
  const [showexplore, setshowexplore] = useState(false)
  const [hive, sethive] = useState(false)
 const trigger = useRef(null)
 const path = useLocation().pathname
  return (
    <div className='relative '>
    
<motion.div
      key={'1'}
      initial={{ x: '-100%' }}
      animate={{ x: isExpanded ? '0' : '-100%' }}
      whileHover={{ width: '320px' }}
      transition={{ duration: 0.4 , }}
      className="  bg-white  flex flex-col fixed z-[800] left-0 top-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink-0 w-64"
    >

      {/* <button >
        {isExpanded ? 'Close' : 'Open'}
      </button> */}
      <div className="flex justify-between px-5  py-5 ">
          {/* Close button */}
          <button
            // ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"

            onClick={() => { setIsExpanded(false)}}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
       
          <h2 className='text-3xl font-poppins font-extrabold text-blk 2xl:block'>MEDIK <span className='text-green-400'>420</span> </h2>
            {/* <img className="w-8 h-8 rounded-full hidden md:block" src={avatar} width="32" height="32" alt="User" /> */}
  
        </div>
        {isExpanded && (
          <AnimatePresence   >
          <motion.ul
           key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delayChildren: 0.6 }}
            className={'grid grid-cols-1 gap-y-5  grid-flow-row pt-10'}
          >
         { path != '/' &&
               <motion.li
              
                
               initial={{ x: '-100%', opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: '-100%', }}
               transition={{ delay:  0.4 , duration: 0.2}}
             >
              <Link to={'/'}>
              <div className='p-2 '>
               <a className='flex items-center bg-white relative  rounded-lg' >
               <div className='p-3'>
                <div className='w-8 '>
                   <img className='w-full' src={home} alt="nnnn" />
                 </div>
               </div> 
                 <span  className='text-xl font-bold uppercase'>
                 Home
                 </span>
                 <div className='flex w-full items-center justify-end pr-5  '>
                 </div>
             
               </a>
               </div>
              </Link>
               
             </motion.li>}
              <motion.li
              
                
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', }}
                transition={{ delay:  0.4 , duration: 0.2}}
              >
                <div className='p-2 '>
                <a className='flex items-center bg-white relative  rounded-lg' >
                <div className='p-3'>
                 <div className='w-8 '>
                    <img className='w-full' src={plant} alt="nnnn" />
                  </div>
                </div> 
                  <span  className='text-xl font-bold uppercase'>
                  Investing
                  </span>
                  <div className='flex w-full items-center justify-end pr-5  '>
                 <div className=''>
                 <span  onClick={()=> showinvestments ? setshowinvestments(false) : setshowinvestments(true)} className='text-sm '>{ showinvestments ? <FaChevronUp/> :  <FaChevronDown/> }</span>
                </div> 
                  </div>
              
                </a>
                  { showinvestments &&
                  <AnimatePresence exitBeforeEnter   >
                    
                   <motion.div initial={{y:'100%'}} animate={{y:'0'}} exit={{y:'-100%'}}
                    className='pt-2 px-10 flex flex-col gap-y-5'>
                        <ul className='flex flex-col gap-y-3'>
                        <Link to={'/smart'}>
                        <li className='text-lg font-bold'>Smart Portfolio</li>
                        </Link>
                        <Link to={'/digital'}>
                        <li className='text-lg font-bold'>Digital Farming</li>
                        </Link>
                        {/* <Link to={'/smallbiz'}>
                        <li className='text-lg font-bold'>Agency Program</li>
                        </Link> */}
                        </ul>
                    </motion.div>
                  </AnimatePresence>
                   
                  }
                </div>
              </motion.li>
              <motion.li
              
                
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', }}
              transition={{ delay:  0.4 , duration: 0.2}}
            >
              <Link to={'/hive'}>
              <div className='p-2 '>
              <a className='flex items-center bg-white relative  rounded-lg' >
              <div className='p-3'>
               <div className='w-8 '>
                  <img className='w-full' src={honeycomb} alt="nnnn" />
                </div>
              </div> 
                <span  className='text-xl font-bold uppercase'>
                Hive
                </span>
                {/* <div className='flex w-full items-center justify-end pr-5  '>
               <div className=''>
               <span  onClick={()=> hive ? sethive(false) : sethive(true)} className='text-sm '>{ hive ? <FaChevronUp/> :  <FaChevronDown/> }</span>
              </div> 
                </div> */}
            
              </a>
              {/* { hive &&
                  <AnimatePresence exitBeforeEnter   >
                    
                   <motion.div initial={{y:'100%'}} animate={{y:'0'}} exit={{y:'-100%'}}
                    className='pt-2 px-10 flex flex-col gap-y-5'>
                        <ul className='flex flex-col gap-y-3'>
                        <Link to={'/hiveai'}>
                        <li className='text-lg font-bold uppercase'>Hive Mind</li>
                        </Link>
                        <Link to={'/smallbiz'}>
                        <li className='text-lg font-bold uppercase'>One Hive</li>
                        </Link>
                        </ul>
                    </motion.div>
                  </AnimatePresence>
                   
                  } */}
              </div>
              </Link>
              
            </motion.li>
              <motion.li
              
                
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', }}
              transition={{ delay:  0.4 , duration: 0.2}}
            >
              <div className='p-2 '>
              <a className='flex items-center bg-white relative  rounded-lg' >
              <div className='p-3'>
               <div className='w-8 '>
                  <img className='w-full' src={bag} alt="nnnn" />
                </div>
              </div> 
                <span  className='text-xl font-bold uppercase'>
                Shop
                </span>
                {/* <div className='flex w-full items-center justify-end pr-5  '>
               <div className=''>
               <span  onClick={()=> hive ? sethive(false) : sethive(true)} className='text-sm '>{ hive ? <FaChevronUp/> :  <FaChevronDown/> }</span>
              </div> 
                </div> */}
            
              </a>
              
              </div>
            </motion.li>
             
            {
              path != '/jobs' &&
              <motion.li
              
                
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', }}
              transition={{ delay:  0.4 , duration: 0.2}}
            >
              <div className='p-2 '>
                <>
                <Link to={'/jobs'}>
                <a className='flex items-center bg-white relative  rounded-lg' >
              <div className='p-3'>
               <div className='w-8 '>
                  <img className='w-full' src={job} alt="nnnn" />
                </div>
              </div> 
                <span  className='text-xl font-bold uppercase'>
                Job Search
                </span>
                {/* <div className='flex w-full items-center justify-end pr-5  '>
               <div className=''>
               <span  onClick={()=> hive ? sethive(false) : sethive(true)} className='text-sm '>{ hive ? <FaChevronUp/> :  <FaChevronDown/> }</span>
              </div> 
                </div> */}
            
              </a>
                </Link>
                
                </>
              
              
              </div>
            </motion.li>}
              <motion.li
              
                
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', }}
              transition={{ delay:  0.4 , duration: 0.2}}
            >
              <div className='p-2 '>
              <a className='flex items-center bg-white relative  rounded-lg' >
              <div className='p-3'>
               <div className='w-8 '>
                  <img className='w-full' src={search} alt="nnnn" />
                </div>
              </div> 
                <span  className='text-xl font-bold uppercase'>
                Explore
                </span>
                <div className='flex w-full items-center justify-end pr-5  '>
               <div className=''>
               <span  onClick={()=> explore ? setexplore(false) : setexplore(true)} className='text-sm '>{explore ? <FaChevronUp/> :  <FaChevronDown/> }</span>
              </div> 
                </div>
            
              </a>
                { explore &&
                  <AnimatePresence exitBeforeEnter   >
                    
                  <motion.div initial={{y:'100%'}} animate={{y:'0'}} exit={{y:'-100%'}}
                   className='pt-2 px-10 flex flex-col gap-y-5'>
                       <ul className='flex flex-col gap-y-5'>
                       <Link to={'/team'}>
                       <li className='text-[16px] flex gap-x-3 items-center font-bold'>
                        <a className='text-gray-600'><FaBuilding/></a>
                        <a className='leading-[0.5]'>Medik 420</a>
                       </li>
                       </Link>
                       <Link to={'/hiveai'}>
                       <li className='text-[16px] flex gap-x-3 items-center font-bold'>
                        <a className='text-gray-600'><FaBuilding/></a>
                        <a className='leading-[0.5]'>Hive Mind</a>
                       </li>
                       </Link>
                       <Link to={'/smallbiz'}>
                       <li className='text-[16px] flex gap-x-3 items-center font-bold'>
                        <a className='text-gray-600'><FaBuilding/></a>
                        <a className='leading-[0.5]'>Digital Farming</a>
                       </li>
                       </Link>
                       <Link to={'/agents'}>
                       <li className='text-[16px] flex gap-x-3 items-center font-bold'>
                        <a className='text-gray-600'><FaBuilding/></a>
                        <a className='leading-[0.5]'>Agency Program</a>
                       </li>
                       </Link>
                       </ul>
                   </motion.div>
                 </AnimatePresence>
                }
              </div>
            </motion.li>
            <Link to={'/pricing'}>
              <motion.li
              
                
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', }}
                transition={{ delay:  0.4 , duration: 0.2}}
              >
                
                <div className='p-2 '>
                <a className='flex items-center bg-white rounded-lg' >
                <div className='p-3'>
                 <div className='w-8 '>
                    <img className='w-full' src={subscribe} alt="nnnn" />
                  </div>
                </div> 
                  <span className='text-xl font-bold uppercase'>
                  Plans
                  </span>
                </a>
                </div>
              </motion.li>
                </Link>
              {/* <motion.li
              
                
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', }}
                transition={{ delay:  0.4 , duration: 0.2}}
              >
                <div className='p-2 '>
                <a className='flex items-center bg-white rounded-lg' >
                  <span className='text-3xl mr-5'></span>
                  <span className='text-xl font-bold uppercase'>
                  Home
                  </span>
                </a>
                </div>
              </motion.li> */}
      
          </motion.ul>
        </AnimatePresence>
        )}
    </motion.div>
    <div></div>
    </div>
    
  );
}

export default AnimatedSidebar;

// import React, {useState, useRef} from 'react'
// import { motion, useAnimation } from 'framer-motion'

// export default function AnimatedSidebar({}) {
//   const [isOpen, setIsOpen] = useState(false)
//   const controls = useAnimation()
 
 

//   return (
//     <>
//       <button  onClick={() => setIsOpen(true)}>
//         {isOpen ? (
//           <svg viewBox="0 0 24 24">
//             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//           </svg>
//         ) : (
//           <svg viewBox="0 0 24 24">
//             <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
//           </svg>
//         )}
//       </button>
//       <motion.aside
//         initial={{ x: '-100%' }}
//         animate={controls}
//         transition={{ ease: 'easeOut' }}
//         className="sidebar fixed left-0 top-0"
//       >
//         <button onClick={() => setIsOpen(false)}>Close Sidebar</button>
//         <nav
//           animate={{
//             y: 0,
//             transition: { staggerChildren: 0.1 }
//           }}
//         >
//           <a href="#">Dashboard</a>
//           <a href="#">Portfolio</a>
//           <a href="#">Coach</a>
//           <a href="#">Withdraw</a>
//           <a href="#">Agents</a>
//         </nav>
//         {isOpen &&
//           controls.start({
//             x: 0,
//             transition: { duration: 0.5 }
//           })}
//       </motion.aside>
//     </>
//   )
// }