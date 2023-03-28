import React from 'react'

const Header = ({back}) => {
  return (
   <>
   
  
    <div className="absolute top-0 left-0 w-full bg-blk px-4 py-2 flex justify-between z-50">
      <h2 className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  ">
        {" "}
        MEDIK<span className="text-green-200">420</span>{" "}
      </h2>
      <div onClick={back} className="flex justify-end items-center">
        <p onClick={back} className="text-white text-xl uppercase">
          back
        </p>
      </div>
    </div>
   </>
  )
}

export default Header