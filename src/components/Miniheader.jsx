

const Miniheader = ({back, avatar, companyName}) => {

    
        return(
            <div className='absolute top-0 left-0 w-full  bg-blk px-4 py-2   z-50'>
             <div className="flex justify-between container mx-auto max-w-5xl">
             { !avatar ? <h2   className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2> : <div className="flex items-center gap-x-4"><div className="w-10 h-10 "><img className="w-full rounded-3xl" src={avatar} alt="" /> </div><span className="text-[18px] text-dimWhite">{companyName}</span></div>  }
            
            <div onClick={back} className='flex justify-end items-center'>
              <p onClick={back} className='text-white text-xl uppercase'>back</p>
            </div>
              </div> 
             
            </div>
        )
    
  
}

export default Miniheader