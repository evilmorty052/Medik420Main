import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import {FaQuestion, FaLock, FaAngleUp, FaAngleDown} from "react-icons/fa"
import  {hemplogo} from "../../../assets"
import {urlFor} from "../../../../lib/client"

export function BizCard({image, startup, description, seats, roi, website ,func, category, to}) {
    return(
      <>
      {/* <Link to={`${to}`}> */}
      <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
    <div class="flex items-center gap-4">
      <img
        alt="Developer"
        src={image}
        class="h-16 w-16 rounded-full object-cover"
      />
  
      <div>
        <h3 class="text-lg font-medium text-white">{startup}</h3>
  
        <div class="flow-root">
          <ul class="-m-1 flex flex-wrap">
            <li class="p-1 leading-none">
              <a target="_blank" href={`${website}`} class="text-sm font-medium text-gray-300">Visit Website </a>
            </li>
            <li class="p-1 leading-none">
              <a  class="text-sm font-medium text-gray-300">{category} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <ul class="mt-4 space-y-2">
      <li className=' h-[120px] sm:hidden'>
        <a
          href="#"
          class="block h-full rounded-lg border border-gray-700 p-2 hover:border-pink-600"
        >
          <strong class="font-medium text-white">Description:</strong>
  
          <p class="mt-1 leading-tight text-[14px] font-medium text-gray-300">
          {description}
          </p>
        </a>
      </li>
  
      <li className=' h-[80px]'>
        <a
          href="#"
          class="block h-full rounded-lg border border-gray-700 p-2 hover:border-pink-600"
        >
          <strong class="font-medium text-white">ROI:</strong>
  
          <p class="text-[24px] font-medium text-gray-300">
           <span class="text-[24px] mr-1 font-medium text-gray-300">{roi}</span>%
          </p>
        </a>
      </li>
      <li className=' h-[80px]'>
        <a
          href="#"
          class="block h-full rounded-lg border border-gray-700 p-2 hover:border-pink-600"
        >
          <strong class="font-medium text-white">Seats:</strong>
  
          <p class="text-[24px] font-medium text-gray-300">
           {seats}
          </p>
        </a>
      </li>
      {/* {default button} */}
      <li className=' sm:hidden'>
          <div>
          <Link to={`${to}`}>
          <button   className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
                {'Invest'}
          </button>
          </Link>
          </div>
      </li>
      {/* {tablet button} */}
      <li className=' hidden sm:block'>
          <div>
          <button onClick={func}  className="btn">
                {'Read More'}
          </button>
          </div>
      </li>
    </ul>
      </article>
      {/* </Link> */}
      </>
    )
  }
  
  
  export function StatisticsCard(params) {
    return(
      <>
      <a
    class="relative min-w-[356px] max-w-md block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-4 "
  > <div>
    <h3>BEM SCORE: </h3>
  </div>
    <div class="flex items-center gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>  
      <h3 class="text-3xl font-bold sm:text-xl ">100+</h3>
    </div>
  
    <p class="mt-4 font-medium text-gray-500 sm:text-sm">
      This is The Total Score From Our Business Evaluation Model (BEM) 
      find Out More About BEM A.I And Evaluation Criteria <Link className='text-blue-400' to={'/'}>here</Link>
    </p>
    <a className='absolute top-2 right-2 text-blue-500'><FaQuestion/></a>
  </a>
  
      </>
    )
  }
  
  export function GridCard({investors}) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const InvestorsRow = ({name, amount,status, avatar}) => {
      return(
        <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                          <img class="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                      </div>
                      <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate ">
                              {name}
                          </p>
                          <p class="text-sm text-gray-500 truncate ">
                              {status}
                          </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          {formatter.format(amount)}
                      </div>
                  </div>
              </li>
      )
    }

    return(
  
  <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investors</h5>
          {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
          </a> */}
     </div>
     <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 ">
            {
              investors?.map((investor, index)=>(
                <InvestorsRow key={index} name={investor.payee.username} amount={investor.investmentamount} status={investor.status} avatar={`${urlFor(investor.payee.avatar)}`}/>
              ))
            }
          </ul>
     </div>
  </div>
  
    )
  }

  export function LockupCard({period, setperiod}) {
 

    const handleIncrease = () => {
      if (period + 2 > 12) {
        setperiod(2)
        return
      }
      setperiod(period + 2)
    }
  
    const handleDecrease = () => {
      if(period - 2 == 0) {
        setperiod(12)
        return
      }
      setperiod(period - 2)
    }
  
  
    return(
      <>
      
  <div class="max-w-sm py-2  bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center ">
      <a class="w-10 h-10  text-gray-500  text-2xl" aria-hidden="true" ><FaLock style={{ marginBottom: '10px'}}/></a>
      <a href="#">
          <h5 class="mb-2 text-xl font-medium tracking-tight text-gray-900">Lockup Period</h5>
      </a>
      <div className=' flex gap-x-4'>
      <p class="text-2xl font-semibold tracking-tight text-gray-900  mb-2">{period} Months</p>
      <div>
        <ul>
          <li onClick={()=> handleIncrease()}><FaAngleUp/></li>
          <li onClick={()=> handleDecrease()}><FaAngleDown/></li>
        </ul>
      </div>
      </div>
      <a  class="inline-flex items-center text-gray-600 hover:underline">
          Choose your investment duration.
          {/* <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg> */}
      </a>
  </div>
  
      </>
    )
  }

  export function LockupPeriods(params) {
    return(
  
      <div class="w-full sm:h-[499px] max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
          <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 ">Lockup</h5>
              <a href="#" class="text-xl font-bold leading-none text-gray-900 ">
              ROI  
              </a>
         </div>
         <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200 ">
                  <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                          <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate ">
                                 2 months
                              </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                              2.8 ROI
                          </div>
                      </div>
                  </li>
                  <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        
                          <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate ">
                                  4 months
                              </p>
                              
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                             3.8 ROI
                          </div>
                      </div>
                  </li>
                  <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        
                          <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate ">
                                 6 months
                              </p>
                              
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                          4.8 ROI
                          </div>
                      </div>
                  </li>
                  <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                         
                          <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate ">
                                 8 months
                              </p>
                             
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                             5.8 ROI
                          </div>
                      </div>
                  </li>
                  <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">
                         
                          <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate ">
                                  12 Months
                              </p>
                              
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                              7.8 ROI
                          </div>
                      </div>
                  </li>
              </ul>
         </div>
      </div>
      
        )
  }

  export  function Tags({word, keyword, setkeyword}) {
    const tags = [
      {
       word: 'All',
       id: 1
      },
      {
       word: 'Technology',
       id: 2
      },
      {
       word: 'Finance',
       id: 3
      },
      {
       word: 'Other',
       id: 4
      },
  ]
    const [activetag, setactivetag] = useState(1)
    const [active, setactive] = useState(keyword)
    
    function handleFilter(item) {
      setkeyword(item)
      // if(item == 'All'){
      //      return
      // }
   
   }
    
   
        
    return(
            <>
             {tags.map((item)=>(
                <>
                 <a className='cursor-pointer' >
                    <div className={ keyword != item.word ? `bg-gray-300 w-[110px]  py-1 px-2 text-center rounded-xl ` : `bg-green-300 shadow-md shadow-green-100 w-[110px]  py-1 px-2 text-center rounded-xl`}>
                    <span  onClick={()=>handleFilter(item.word)} className='text-base font-medium'>{item.word}</span> 
                    </div>                
                </a>
                </>
             ))}
            </>
        )
    }

   export  const PictureLine = ({ pictures }) => {
       const Picture = ({avatar, margin, to}) => {
        return(
          <Link to={`${to}`} className={`flex justify-center items-center ${margin}`}>
      
              <img
                
                src={avatar}
                alt={`Picture `}
                className={`w-12 h-12 object-cover rounded-full   `}
              />
            </Link>
        )
       }
        return (
          <div className="flex relative py-2">         
            {
              pictures?.map((picture, index)=>{
                
                return(
                  <Picture margin={index == 0 ? '' : '-ml-4'} key={index} avatar={`${urlFor(picture?.payee?.avatar)}`} to={`/dashboard/hub/user/${picture?.payee?._id}`}/>
                )
              })
            }
            {/* <div className='rounded-full border border-white flex justify-center items-center -ml-2'>
      
              <img
                
                src={hemplogo}
                alt={`Picture `}
                className={`w-7 h-7 object-cover  `}
              />
            </div>
            <div className='rounded-full border border-white flex justify-center items-center -ml-2'>
      
              <img
                
                src={hemplogo}
                alt={`Picture `}
                className={`w-7 h-7 object-cover  `}
              />
            </div  >
            <div className='rounded-full border border-white flex justify-center items-center -ml-2'>
      
              <img
                
                src={hemplogo}
                alt={`Picture `}
                className={`w-7 h-7 object-cover `}
              />
            </div>
            <div className='rounded-full border border-white flex justify-center items-center -ml-2'>
      
              <img
                
                src={hemplogo}
                alt={`Picture `}
                className={`w-7 h-7 object-cover  `}
              />
            </div> */}
                 
          </div>
        );
      };

    export  function InvestmentModal({openModal, handleModal , period, investmentSize,}){
        const history = useNavigate()
        function InvestCard(params) {
          // switch (period) {
          //   case 2:
          //     ROI = 4.8
          //     break;
          //   case 4:
          //     ROI
          //     break;
          //   case 6:
          //     setROI(4.5)
          //     break;
          //   case 8:
          //     setROI(5.5)
          //     break;
          //   case 10:
          //     setROI(6.5)
          //     break;
          //   case 12:
          //     setROI(7.5)
          
          //   default:
          //     break;
          // }
          return(
        
            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  relative">
                <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 ">Investment Terms</h5>
               </div>
               <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 ">
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate ">
                                        Investment Size
                                    </p>
                                    <p class="text-[12px] sm:text-sm text-gray-500 truncate ">
                                        total amount investing
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                {investmentSize}
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate ">
                                       ROI 
                                    </p>
                                    <p class="text-[12px] sm:text-sm text-gray-500 truncate dark:text-gray-400">
                                        Expected Return On investment
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                2.9%
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate ">
                                        Lockup Period
                                    </p>
                                    <p class="text-[12px] sm:text-sm text-gray-500 truncate dark:text-gray-400">
                                        Number of months to lock up
                                    </p>
                                </div>
                                <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                                    {period} months
                                </div>
                            </div>
                        </li>
                        <li class="py-3 sm:py-4">
                            <div class="flex items-center space-x-4">
                                <button onClick={()=> history('/path')}  class="flex-1 min-w-0 bg-green-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Invest</button>
                            </div>
                        </li>
                    </ul>
               </div>
                <div id='closemodalbutton' onClick={handleModal} className='absolute top-2 right-2 font-black cursor-pointer'>X</div>
            </div>
            
              )
        }
      
        return(
         
          <>
          { openModal &&  <div onClick={handleModal} id='modalcontainer' className='fixed z-50 backdrop:blur-xl inset-0 bg-gray-400/50 overflow-y-auto flex justify-center items-center'>
               <a className='w-[350px] h-[350px] sm:w-[450px] p-2 bg-wyt' >
                 <InvestCard/>
               </a>
          </div>}
          </>
        )
      }