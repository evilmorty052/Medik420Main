import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { motion } from '../hooks/useMotion';

const RegisterInputs = () => {
    return (
      <>
        <div className='flex py-10   px-4 space-y-4 slide-in-right   '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 pb-4'>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your full legal name.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-8 py-10'>
            <input placeholder='First name' className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-0 pb-4   focus:border-b-2  ' type="text" />
            <input placeholder='Last name' className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 focus:border-b-2 pb-4  border-0  ' type="text" />
          </div>
          <div className='flex justify-between items-center '>
            <div>
              <a className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
      </>
    );
  };
  
  const AgeInputs = () =>{
    return (
      <>
        <div className='flex py-10   px-4 space-y-4 slide-in-right   '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 pb-4'>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Confirm Your Eligibility To Invest.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-8 py-10'>
            <div>
            <label className='text-sm font-bold '>Birthday</label>
            <input placeholder='MM / DD / YYYY' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg ' type="text" />
            </div>
            <div>
            <label className='text-sm  font-bold'>Citizenship</label>
            <select className='w-full mt-1 text-lg sm:text-xl text-gray-700 font-medium focus:ring-0 bg-gray-200 rounded-lg    focus:border-b-2  '   >
              <option value="">Citizen</option>
              <option value="">Resident Alien</option>
              <option value="">Non-US Resident</option>
            </select>
            </div>
            
          </div>
          <div className='flex justify-between items-center '>
            <div>
              <a className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
      </>
    );
  }
  
  const AddressInputs = () =>{
    return (
      <>
        <div className='flex py-5   px-4 space-y-4 slide-in-right   '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 '>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your residential address.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-4 py-10'>
            <div>
            <label className='text-sm font-bold '>Address Line 1</label>
            <input placeholder='Address Line 1' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg ' type="text" />
            </div>
            <div>
            <label className='text-sm font-bold '>Address Line 2</label>
            <input placeholder='Address Line 2' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg ' type="text" />
            </div>
            <div>
            <label className='text-sm font-bold '>City</label>
            <input placeholder='City' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg ' type="text" />
            </div>
            <div>
            <label className='text-sm font-bold '>Zip Code</label>
            <input placeholder='Zip-Code' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg ' type="text" />
            </div>
            <div>
            <label className='text-sm  font-bold'>State</label>
            <select className='w-full mt-1 text-lg sm:text-xl text-gray-700 font-medium focus:ring-0 bg-gray-200 rounded-lg    focus:border-b-2  '   >
              <option value="">Citizen</option>
              <option value="">Resident Alien</option>
              <option value="">Non-US Resident</option>
            </select>
            </div>
            
          </div>
          <div className='flex justify-between items-center '>
            <div>
              <a className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
      </>
    );
  }
  
  const PhoneInputs = () => {
    return (
      <>
        <div className='flex py-10   px-4 space-y-4 slide-in-right   '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 '>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your phone number.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-8 py-10'>
            <input placeholder='(123-456-7894)' className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-b-2 border-l-0 border-r-0 border-t-0 pb-4  border-b-green-300  focus:border-b-2  ' type="text" />
             <div className='flex flex-col gap-y-4'>
              <label htmlFor="">Opt-in to get financial tips and reminders</label>
               <div className='flex  items-center gap-x-4'>
               <input id='check' type="checkbox" />
                <div className=' max-w-[50ch]  pt-4'>
                <label className='text-sm  ' htmlFor="check">By selecting this checkbox you agree to receive recurring promotional and personalized marketing messages</label>
                </div>
               </div>
            </div>
          </div>
          <div className='flex justify-between items-center '>
            <div>
              <a className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
      </>
    );
  }
  
  const Questions = ({question, answers, func, back}) => {
    const [activeanswer, setactiveanswer] = useState(null)
    const [showmodal, setshowmodal] = useState(false)
    
    
  
    const QuestionBox = ({answer, active, onClick}) => {
     return(
      <>
      <a onClick={onClick} className={`${!active ? 'bg-gray-200' : 'bg-green-200'} py-6 px-4 flex w-[250px]  xxs:w-[300px] justify-center sm:justify-start rounded-md`}>
         <span className={`text-gray-700 font-semibold text-sm`}>{answer}</span>
      </a>
      </>
     )
  
    }
   
    const handlemodal = (e) => {
        !showmodal ? setshowmodal(true) : setshowmodal(false)
    }
  
    return (
      <>
        <motion.div key={'motion'}  initial={{x: "-100%"}} animate={{x:'0'}} transition={{duration: 0.6}} onClick={()=>  showmodal && setshowmodal(false)} className='flex sm:pt-4 px-4 space-y-4 '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 pb-4 max-w-[60ch]'>
            <h3 className={'sm:text-[28px] text-[25px] uppercase leading-tight  font-bold text-gray-800'}>{question}</h3>
           <Why setshowmodal={handlemodal} showmodal={showmodal}/>
          </div>
          <div className='  flex justify-center'>
          <div className='flex flex-col sm:grid grid-cols-2 grid-flow-row sm:gap-x-2 py-8    items-center gap-y-4'>
          {answers.map((i, index)=>{
            return(
             <div id={index} key={index}>
              <QuestionBox onClick={() => setactiveanswer(index)}
               active={index == activeanswer}
               answer={i.answer}/>
               </div> 
            )
          })}
          </div>
          </div>
          
          <div className='flex justify-between items-center '>
            <div>
              <a onClick={back} className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button onClick={func} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </motion.div>
      </>
    );
  }
  
  const Why = ({showmodal, setshowmodal}) => {
    
  
    return(
      <>
      <div className='relative max-w-[500px] transition-all '>
       <div>
        <span 
      onClick={()=> setshowmodal(true)} className='text-[14px] text-blue-500 font-medium cursor-pointer'>Why we need this</span>
       </div>
       {showmodal && 
       <div className='absolute top-0 right-0 shadow-2xl  rounded-md   bg-gray-300  flex justify-center  min-w-[250px]'>
         
         <div className='relative p-2'>
         <div>
             <div className='mb-2'><span className='text-[18px] font-bold'>Conflict of Interest</span></div>
             <div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque nemo facere ab eaque, magni adipisci, libero in totam voluptatum iure veritatis cupiditate. A ipsam culpa officia labore sint ratione!
             </div>
         </div>
         <span onClick={()=> setshowmodal(false)} className='absolute top-0 right-2'>x</span>
         </div>
        
       </div>
                }
      </div>
      </>
    )
  }
  
  const Agreements = ({func, account}) => {
    return (
      <>
        <div className='flex py-8 sm:pt-4   px-4 space-y-4 slide-in-right   '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 '>
            <h3 className={'sm:text-[28px] text-[25px] sm:text-center  font-bold text-gray-800'}>Agreements related to your {account} Account</h3>
            <p className='text-[14px] text-gray-700 sm:text-center  font-medium'>Please carefully read and accept the following agreements for your new account</p>
          </div>
          <div className='py-10'>
          <div className='flex items-center'>
          <label htmlFor="">Agreements</label>
             <select className='border-0 bg-transparent w-0'>
              <option value=""></option>
              <option value=""><input type="file" name="" id="" />apex agreement</option>
              <option value="">Deposit Agreements</option>
             </select>
          </div> 
            {/* <select  className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-b-2 border-l-0 border-r-0 border-t-0 pb-4  border-b-green-300  focus:border-b-2  ' type="text" /> */}
             <div className='flex flex-col gap-y-4'>
              {/* <label htmlFor="">Opt-in to get financial tips and reminders</label> */}
               <div className='flex  items-center gap-x-4'>
               <input id='check' type="checkbox" />
                <div className=' max-w-[50ch]  pt-4'>
                <label className='text-sm  ' htmlFor="check">I agree to the apex account agreement, Apex security lending program , Apex FDIC Sweeps Program Terms and Conditions. </label>
                </div>
               </div>
               <div className='flex  items-center gap-x-4'>
               <input id='check' type="checkbox" />
                <div className=' max-w-[50ch]  pt-4'>
                <label className='text-sm  ' htmlFor="check"> I agree to the Deposit account Agreement and the deposit services provided by metabank member FDIC. </label>
                </div>
               </div>
            </div>
          </div>
          <div className='flex justify-center items-center '>
            {/* <div>
              <a className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div> */}
            <div className="py-2 w-full">
              <button onClick={func} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px] sm:min-w-[70%]  w-full rounded-3xl">
                {"Accept"}
              </button>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          </div>
         
        </div>
      </>
    );
  }

  export{
    Agreements,
    Questions,
    Why,
    RegisterInputs,
    AgeInputs,
    AddressInputs,
    PhoneInputs
  }