
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-03.svg';
import EditMenu from '../EditMenu';
import { useEffect } from 'react';
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { motion } from 'framer-motion';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard03({plan}) {



  return (
    <motion.div animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}   whileTap={{ scale: 1.1 }}  className="  shadow-2xl flex flex-col col-span-full sm:col-span-6 xl:col-span-4  rounded-3xl  pl h-max relative">
      <div className="px-5 pt-5 bg-slate-700 rounded-3xl">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
         <span className='text-4xl text-white'><FaLock/></span> 
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          {/* Menu button */}
          {/* <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu> */}
        </header>
        <h2 className="text-xl font-semibold text-gray-100 mb-0 text-start font-poppins">Current Plan</h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-end text-end pb-4">
          <div className="text-3xl font-bold text-glass mr-2 text-center uppercase text-red-300 font-poppins">{plan}</div>
          <div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
          </div>
          
        </div>
        <div class=" absolute bottom-5 right-10 border-b-yellow-600">
          
          <div className="wobble-hor-bottom"><span className='  text-2xl text-green-200 '><FaUnlock/></span> </div>
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

export default DashboardCard03;
