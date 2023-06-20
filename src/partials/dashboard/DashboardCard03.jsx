import { motion } from 'framer-motion';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { unlockanimation } from '../../assets';


// Import utilities


function DashboardCard03({plan, func}) {



  return (
    <motion.div animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}   whileTap={{ scale: 1.1 }}  className="  shadow-xl flex flex-col col-span-full sm:col-span-6 xl:col-span-4  rounded-3xl  pl h-max relative ">
      <div className="px-5 sm:pl-6 pt-5 bg-[#f9f8f8] rounded-3xl">
        <h2 className="text-xl font-semibold text-blk mb-0 text-start ">Current Plan</h2>
        <div className="flex items-end text-end pb-4">
          <div className="text-3xl font-bold text-glass mr-2 text-center uppercase text-blk">{plan}</div>
          <div>
          </div>
          
        </div>
         <div className='pb-4  sm:pr-32'>
         <button onClick={func} className="btn ">
          Unlock Premium
        </button>
        <div class=" absolute top-0 right-0 ">
        <Player
  autoplay
  loop
  src={unlockanimation}
  style={{ width: '60px', height: '60px' }}
>
  <Controls visible={false} loop />
</Player>
          {/* <div className="wobble-hor-bottom"><span className='  text-2xl text-green-200 '><FaUnlock/></span> </div> */}
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

export default DashboardCard03;
