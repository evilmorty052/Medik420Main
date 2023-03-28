import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../EditMenu';
import { client, urlFor } from '../../../lib/client';
import { useEffect } from 'react';
import { FaDollarSign, FaArrowRight, FaEye , FaEyeSlash  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Toggle from '../../pages/Aboutus';
import { Switch } from '@headlessui/react'






// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';
import { useState } from 'react';

function DashboardCard01({earnings}) {
  

  const [showing , isShowing] = useState(false)
  const [enabled, setEnabled] = useState(true)



  return (
    <motion.div initial={{ opacity: 0, scale: 0 }}  animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}   className=" shadow-2xl flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-green-300  rounded-3xl  pl h-max relative border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <span className='text-4xl text-gray-100'><FaDollarSign /></span> 
        </header>
        <h2 className=" uppercase  text-2xl font-bold text-gray-100 mb-0 text-start font-poppins">Earnings</h2>
   
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-end text-end pb-4">
          {/* <div className="text-3xl font-bold text-green-400 mr-2 text-center">{person.firstname}</div> */}
          <div>
          <div className="text-3xl  font-poppins text-blk font-bold px-1.5  rounded-full">{enabled ? `${'$ '}${earnings}`: ''}</div>
          </div>
          
        </div>
        <div class=" absolute bottom-2 right-2 border-b-yellow-600 flex items-center justify-center">
         {/* <span  className='text-2xl text-gray-100'><FaDollarSign width='32' height='32'/>
          </span>  */}
          <div className='flex items-center justify-center '>
          {/* <span className=' text-lg '>show </span> */}
          {/* <span className='text-base'>show</span> */}
          <motion.span whileTap={{ scale: 1.5 }} className='text-xl mr-4 self-center '>
            {
            <>
         {enabled ? <FaEyeSlash onClick={()=>{setEnabled(false)}} /> : <FaEye onClick={()=>{setEnabled(true)}}/>} 
          </>} 
          </motion.span>
          </div>
          
         <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-red-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
        {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
      <div>
      </div>
    </motion.div>
  );
}

export default DashboardCard01;
