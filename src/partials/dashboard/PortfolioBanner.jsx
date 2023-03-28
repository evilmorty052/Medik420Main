import React from 'react';
import { useEffect } from 'react';

function PortfolioBanner() {
  const sanityuser = localStorage.getItem('sanityuser');
  const person = JSON.parse(sanityuser);
  
 
  
  useEffect(() => {
    if(sanityuser != null)
    console.log(person[0].firstname)
  
    return () => {
      
    }
  }, [])
  
  return (
   
    <div className="relative max-w-md bg-blk p-4 sm:p-6 rounded-xl overflow-hidden mb-8 shadow-2xl">


      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-gray-100 font-bold mb-1 uppercase">{person[0].firstname?`${'Hi, '} ${person[0].firstname} 👋 `: 'welcome'}</h1>
        <p class='text-gray-100'>See a Breakdown Of your Earnings</p>
      </div>

    </div>
  );
}

export default PortfolioBanner;
