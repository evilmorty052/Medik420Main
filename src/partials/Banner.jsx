import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BankOutlined, DeploymentUnitOutlined, MessageOutlined, RiseOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



function Banner() {
  const list = ()=>  {
    return(
      <>
      <Link to={'/'}>
      <div className='flex items-center  bg-white  p-2 rounded-xl'>
       <div>
       <motion.span className='text-sm ml-4 font-medium uppercase text-blue-500'>Shop cbd</motion.span>
       </div>
      <div className='flex items-end mx-4 '>
      <ShopOutlined style={{fontSize: 25, color:'green'}}/>
      </div>
      </div>
      </Link>
      

      </>

    )
  }
  const list2 = ()=>  {
    return(
      <>
      <Link to={'/digital'}>
      
        <div className='flex items-center  bg-white  p-2 rounded-xl'>
       <div>
       <motion.span className='text-sm ml-4 font-bold uppercase text-blue-500'>Digital Farming</motion.span>
       </div>
      <div className='flex items-end mx-4 '>
      <DeploymentUnitOutlined style={{fontSize: 25, color:'green'}}/>
      </div>
      </div>
      </Link>
      </>
    )
   }
  const list3 = ()=> { 
    return(
      <>
      <Link to={'/smallbiz'}>
      
         <div className='flex items-center  bg-white  p-2 rounded-xl'>
       <div>
       <motion.span className='text-sm ml-4 font-bold uppercase text-blue-500'>Business Assistance</motion.span>
       </div>
      <div className='flex items-end mx-4 '>
      <BankOutlined style={{fontSize: 25, color:'green'}}/>
      </div>
      </div>
      </Link>
      </>
    )
  } 
  const list4 = ()=>  {
  return(
    <>
    <Link to={'/pricing'}>
    
        <div className='flex items-center  bg-white  p-2 rounded-xl'>
       <div>
       <motion.span className='text-sm ml-4 font-bold uppercase text-blue-500'>Earn Weekly With Just 750$ </motion.span>
       </div>
      <div className='flex items-end mx-4 '>
      <RiseOutlined style={{fontSize: 25, color:'green'}}/>
      </div>
      </div>
    </Link>
    </>
  )
  } 
  const list5 = ()=>  {
    return(
      <>
      <Link to={'/coach'}>
      
      <div className='flex items-center  bg-white  p-2 rounded-xl'>
       <div>
       <motion.span className='text-sm ml-4 font-bold uppercase text-blue-500'>Get Investment Advice</motion.span>
       </div>
      <div className='flex items-end mx-4  '>
      <MessageOutlined style={{fontSize: 25, color:'green'}}/>
      </div>
      </div>
      </Link>
      </>
    )
  }


  const [state, setstate] = useState(list)
  const [bannerOpen, setBannerOpen] = useState(true);
  const [finished, setfinished] = useState(false)
  
  const change = (item)=> setstate(item)

  function switchlist() {
   setTimeout(() => {
    change(list2)
    setTimeout(() => {
      change(list3)
      setTimeout(() => {
        change(list4)
        setTimeout(() => {
          change(list5)
          setTimeout(() => {
            change(list)
           !finished? setfinished(true) : setfinished(false)
          }, 4000);
        }, 4000);
      }, 4000);
    }, 4000);
   }, 4000);
  }

  useEffect(() => {
  
  switchlist()
    
  }, [finished])
  
   function Grid(params) {
    return(
      <motion.span initial={{ x: '+100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 2 , type:'spring' }}>{state}</motion.span>
    )
   }

  return (
    <>
    { bannerOpen && (
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12  md:max-w-sm z-60">
        <div className="bg-black-gradient text-slate-50 text-sm pl-2 py-2 md:rounded shadow-lg flex justify-between">
          <div className='flex justify-start sm:justify-center w-full'
          //  onClick={()=>change(list2)}
           >
         <Grid/>
          </div>
          <button className="text-slate-500 hover:text-slate-400 mx-3" onClick={() => setBannerOpen(false) }>
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    )}
    </>
  );
}

export default Banner;