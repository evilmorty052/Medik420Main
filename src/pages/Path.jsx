import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../style'
import { motion } from 'framer-motion'


const Path = ({close, handleclose}) => {
    const history = useNavigate()
  return (
    <motion.div initial={{y:'-100%'}} animate={{y: '0'}} transition={{duration: 0.6 , type: 'spring'}}
     className='min-h-screen bg-fixed inset-0 bg-plat flex'>
    <Header close={()=> history(-1)}/>
     <div className='container mx-auto '>
         <div className='flex  py-10 w-full justify-center'>
           <div className='py-10'>
           <h3 className={`${styles.heading2} text-center text-blk`}>Welcome</h3>
           <p className={`${styles.paragraph} text-center`}>Please sign in or create a new account to continue</p>
           <div className='flex flex-col gap-y-2 justify-center mt-10 px-4'>
        <button className='w-full text-white py-2 border border-white shadow-xl  rounded-3xl'  style={{ background:"#1a1a1a", borderColor: "white" }} onClick={()=>history('/login')}   >
         Login
        </button>
        <button className='w-full py-2 border border-white shadow-xl  rounded-3xl'  style={{ background:"#86efac", borderColor: "white" }}  shape='round' size='large'  type='primary'  onClick={()=>history('/pick')}>
          Register
        </button>
             </div>
           </div> 
            
         </div>
     </div>
    </motion.div>
  )
}

export default Path


function Header({close}) {
    return(
        <div className='absolute top-0 left-0 w-full bg-blk px-4 py-2 flex justify-between'>
            <h2   className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2> 
            <div className='flex justify-end items-center'>
              <span onClick={close} className='text-white text-xl uppercase'>back</span>
            </div>
        </div>
    )
}