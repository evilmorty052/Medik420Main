import { motion, animate } from 'framer-motion'
import ScaleLoader from "react-spinners/ScaleLoader";


const Loader = () => {
 
const loadervariant = {
   animationone:{
     x:[-20, 20],
     y:[0, -100],
     transition:{
        x:{
            yoyo:Infinity,
            duration: 0.5
            
        },
        y:{
            yoyo: Infinity,
            duration: 0.25,
            ease: 'easeOut'
        }
     }
   } 
}





  return (
    <div className='min-h-screen w-full bg-white  flex justify-center items-center'>
      <ScaleLoader
        width={30}
        color={'#00c4ee'}/>
    </div>
  )
}

export default Loader