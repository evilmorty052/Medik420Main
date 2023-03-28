import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function WelcomeBanner({name, text}) {
  // const sanityuser = localStorage.getItem('sanityuser');
  // const person = JSON.parse(sanityuser);
  
 
  
  // useEffect(() => {
  //   if(sanityuser != null)
  //   console.log(person[0].firstname)
  
  //   return () => {
      
  //   }
  // }, [])
  
  return (
   
    <motion.div  className="relative border border-white  bg-slate-200 p-4 sm:p-6 rounded-xl overflow-hidden mb-8 sm:mb-0 shadow-2xl md:max-w-md md:min-w-[448px]">


      {/* Content */}
      <div className="relative text-center  md:text-center">
        {/* <h1 className="text-2xl md:text-3xl text-gray-100 font-bold mb-1 uppercase">{person[0].firstname?`${'Hi, '} ${person[0].firstname} 👋 `: 'welcome'}</h1> */}
        <h1 className="text-2xl md:text-3xl text-blk font-bold mb-1 uppercase font-poppins">{`HI ${name} 👋` }</h1>
        <p class='text-blk  font-poppins '>{text}</p>
      </div>

    </motion.div>
  );
}

export default WelcomeBanner;
