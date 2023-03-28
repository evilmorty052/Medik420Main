import pattern from '../../assets/pattern.png'
import { FaChevronRight } from 'react-icons/fa';
import stashlogo from '../../assets/stashlogo.png'


function DebitCard({firstname, lastname, amount}) {

    
    return(
        <>
        <div className='my-4  font-space  rounded-2xl '>
            <div className={` drop-shadow-2xl shadow-2xl w-[340px] h-[200px] xxs:w-[370px] xxs:h-[230px] sm:min-w-[350px] sm:min-h-[200px]  2xl:min-w-[400px]    p-4  rounded-xl  relative flex items-center `}  style={{
    backgroundImage: `url(${pattern})`,
    backgroundSize: "cover",
  }}>
                 <div className='absolute top-5  left-5'>
                     <h3 className='text-lg text-white'></h3>
                 </div>
                  <div className='px-4 z-40'>
                    <p className='text-3xl text-white font-medium'>{`${'$ '}${ amount?.toLocaleString('en-us', 'currency')}`}</p>
                  </div>
                  <div className='absolute bottom-5 left-5 z-40 '>
                    <p className='text-white text-xl uppercase font-medium leading-loose '>{`${firstname } ${ lastname}`}</p>
                  </div>
                  <div className='absolute left-2 top-2 flex items-center z-40'>
                   <div className=' w-[130px] '>
                   <img src={stashlogo} alt="" className='w-full'/>
                   </div>
                  </div>
                  <div className='absolute top-[45%] right-5 z-50'>
                   <FaChevronRight style={{color: '#ffffff', fontSize: '20px'}}/>
                  </div>
                  <div  className='absolute right-2 bottom-2 z-40'>
                  <span className='text-[6px] text-white'>MEDIK STASH<sup>®</sup> FDIC INSURED</span>
                  </div>
                <div className='bg-gradient-to-r from-green-300 to-green-600 absolute inset-0 opacity-75 rounded-xl shadow-inner '></div>
            </div>
        </div>
        </>
    )
  }

  
  export default DebitCard