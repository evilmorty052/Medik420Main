import React from 'react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const AgentCard = () => {
  const [liked, setLiked] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, scale: 0.1 }}  animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
       <div className='shadow-3xl font-poppins relative'>
        <article class="rounded-xl border border-gray-700 bg-gray-800 max-w-[450px] p-4">
  <div class="flex items-center">
    <img
      alt="Developer"
      src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div class="ml-3">
      <h5 class="text-lg font-medium text-white">Agent Spotlight</h5>

      <div class="flow-root">
        {/* <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> Crypto </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> Stocks </a>
          </li>

          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300">CBD</a>
          </li>
        </ul> */}
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <h5 class="font-medium text-white">Weekly Recommendation</h5>

        <p class="mt-1 text-xs font-medium text-gray-300">
          Meet Our Spotlight Agent Of the week Claire! currently ranked 3rd on our Agents Ranking . Clair quickly climbed up from 8th with over 11m in profits for her followers!
        </p>
      </a>
    </li>

    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <h5 class="font-medium text-white">Claire Mac</h5>

        <p class="mt-1 text-xs font-medium text-gray-300">
         Claire Mac specializes in Crypto trade and CBD Stocks with over 10 years of experience Follow Claire to get a two way portfolio.
        </p>
      </a>
    </li>
  </ul>
  <div className='w-full flex justify-center mt-2'>
  <div className='flex  w-[80%] justify-between items-center '>
  <span className='text-white font-poppins font-medium'>FOLLOW</span>
  <motion.span whileTap={{ scale: 4.0 }} onClick={()=>{liked == true? setLiked(false) : setLiked(true)}} className={liked? 'text-2xl text-red-600 ': 'text-red-300 text-xl'}><FaHeart/></motion.span>
</div>
  </div>
  
</article>

    </div>
    </motion.div>
  )
}

export default AgentCard