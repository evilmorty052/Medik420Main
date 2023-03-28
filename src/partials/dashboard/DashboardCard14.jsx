
import { Link } from 'react-router-dom';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';
import { motion, animate, } from 'framer-motion';
import { FaMoneyBillWave, FaArrowUp , FaChevronUp, FaPlus, FaPlusCircle } from 'react-icons/fa';
// import {Mymodal, Modalbutton} from '../../components/modal'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard014({text, icon, amount}) {



  return (
    <motion.div   whileTap={{ scale: 1.1 }}  className="rounded-3xl shadow-2xl flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-50    pl h-max relative border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          <span className='text-4xl text-green-400'>{icon}</span> 
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
        <motion.h2 initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }}
  viewport={{ once: true }} className="text-3xl font-black text-green-300 mb-0 text-start font-poppins uppercase">{text}</motion.h2>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-end text-end pb-4">
          <div className="text-2xl font-bold text-green-300 mr-2 text-center font-poppins"> <span>$</span><span >{amount}</span></div>
          <div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
          
          </div>
          
        </div>
        <div class=" absolute bottom-5 right-10 border-b-yellow-600">
        {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
        
        <div className='flex  gap-0'>
        
        <span className='text-xl text-green-300'>{icon}</span> 
        <span className='text-xl text-green-300'>{icon}</span> 
        </div>
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

export default DashboardCard014;