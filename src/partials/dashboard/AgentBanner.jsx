import React from 'react';
import { useEffect } from 'react';
import { FaTrophy } from 'react-icons/fa';

function AgentBanner() {
  const sanityuser = localStorage.getItem('sanityuser');
  const person = JSON.parse(sanityuser);
  
 
  
  useEffect(() => {
    if(sanityuser != null)
    console.log(person[0].firstname)
  
    return () => {
      
    }
  }, [])
  
  return (
   
    <div className="relative max-w-md bg-white p-4 sm:p-6 rounded-xl overflow-hidden mb-8 shadow-2xl">


      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-blk font-bold mb-1 uppercase">Meet Our Top Agents</h1>
        
        <div className='flex justify-between items-center'>
        <p class='text-black'>Check Back Weekly For new Rankings</p>
        <span className='text-4xl text-yellow-400'><FaTrophy/></span>
        </div>
      </div>

    </div>
  );
}

export default AgentBanner;
