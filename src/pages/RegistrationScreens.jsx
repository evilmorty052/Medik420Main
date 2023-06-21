import { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { motion } from '../hooks/useMotion';
import { useNavigate, Link } from 'react-router-dom';
import { Result, Slider} from 'antd';
import { gearanimation, hexagonloading, base, neutral, growthgraph } from '../assets';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { client } from '../../lib/client';
import JSConfetti from 'js-confetti'



const RegisterEmail = ({handleComplete, email, setemail}) => {

  const navigate = useNavigate()

  return (
    <>
      <div className='min-h-screen bg-white'>
        {/* <div className='py-4'>
           <h3 className="text-2xl font-bold text-blk text-center">
            Hi, nice to meet you
           </h3>
        </div> */}
      <div className='flex  px-2 space-y-4 sm:container max-w-5xl sm:mx-auto '>
        <div  className='py-4 mx-auto w-full px-2  sm:min-w-[600px] sm:max-w-[800px] '>
        <div className='text-start space-y-2 pb-4'>
          <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your email address.</h3>
          <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
        </div>
        <div className='space-y-8 py-10'>
          <input placeholder='Email address' value={email} onChange={(e) =>setemail(e.target.value)} className='w-full transparent-input    ' type="email" required />
          {/* <input placeholder='Last name' className='w-full transparent-input ' type="text" /> */}
        </div>
        <div className='flex justify-between items-center '>
          <div>
            <a onClick={() => navigate(-1)} className='text-[20px] text-gray-700'><FaArrowLeft /></a>
          </div>
          <div className="py-2">
            <button onClick={handleComplete} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
              {"Continue"}
            </button>
          </div>
        </div>
        </div>
       
      </div>
      </div>
    </>
  );
};


const RegisterPassword = ({handleComplete,passwordvalue, confirmpasswordvalue, setpasswordvalue, setconfirmpasswordvalue, to}) => {
  const navigate = useNavigate() 

  return (
    <>
      <div className='min-h-screen bg-white'>
        
      <div className='flex  px-2 space-y-4 sm:container max-w-5xl sm:mx-auto '>
        <div  className='py-4 mx-auto w-full px-2  sm:min-w-[600px] sm:max-w-[800px] '>
        <div className='text-start space-y-2 pb-4'>
          <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Choose your Password.</h3>
          <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
        </div>
        <div className='space-y-8 py-10'>
          <input placeholder='Password' value={passwordvalue} onChange={(e)=> setpasswordvalue(e.target.value)} className='w-full transparent-input    ' type="password" />
          <input placeholder='Confirm password' value={confirmpasswordvalue} onChange={(e) => setconfirmpasswordvalue(e.target.value)} className='w-full transparent-input    ' type="password" />
          {/* <input placeholder='Last name' className='w-full transparent-input ' type="text" /> */}
        </div>
        <div className='flex justify-between items-center '>
          <div>
            <Link to={`${to}`} className='text-[20px] text-gray-700'><FaArrowLeft /></Link>
          </div>
          <div className="py-2">
            <button onClick={handleComplete} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
              {"Continue"}
            </button>
          </div>
        </div>
        </div>
       
      </div>
      </div>
    </>
  );
};


const RegisterInputs = ({handleComplete, firstname, lastname, setfirstname, setlastname, to}) => {
    return (
      <>
        <div className='min-h-screen bg-white'>
          {/* <div className='py-4'>
             <h3 className="text-2xl font-bold text-blk text-center">
              Hi, nice to meet you
             </h3>
          </div> */}
        <div className='flex  px-4 space-y-4 sm:container max-w-7xl sm:mx-auto '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 pb-4'>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your full legal name.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-8 py-10'>
            <input placeholder='First name' value={firstname} onChange={(e) => setfirstname(e.target.value)} className='w-full transparent-input   ' type="text" />
            <input placeholder='Last name' value={lastname} onChange={(e) => setlastname(e.target.value)} className='w-full transparent-input ' type="text" />
          </div>
          <div className='flex justify-between items-center '>
            <div>
            <Link to={`${to}`} className='text-[20px] text-gray-700'><FaArrowLeft /></Link>
            </div>
            <div className="py-2">
              <button onClick={handleComplete} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
        </div>
      </>
    );
  };
  
  const AgeInputs = ({handleComplete, check, setcheck, to }) =>{
    const [year, setyear] = useState('')
    // const [check, setcheck] = useState(false)
    const navigate = useNavigate()
    return (
      <>
        <div className="min-h-screen bg-white">
          <div className="flex py-4 sm:py-10   px-4 space-y-4 sm:container sm:mx-auto  max-w-7xl ">
            <div className="py-4 mx-auto sm:min-w-[600px] ">
              <div className="text-start space-y-2 pb-4">
                <h3
                  className={
                    "sm:text-[28px] text-[25px]  font-bold text-gray-800"
                  }
                >
                  Confirm Your Eligibility To Invest.
                </h3>
                <p className="text-[14px] text-blue-500 font-medium">
                  Why we need this
                </p>
              </div>
              <div className="space-y-8 py-4">
                {/* <div>
                  <label className="text-sm font-bold ">Birthday</label>
                  <div className="bg-gray-200 rounded-lg py-2">
                    <input
                     
                      value={year}
                      onChange={(e) => setyear(e.target.value)}
                      className="w-full bg-transparent  text-lg sm:text-xl focus:ring-0 focus:outline-none focus:border-0 text-gray-700 font-bold border-0   "
                      type="date"
                    />
                  </div>
                </div> */}
                <div className='flex  items-center gap-x-4'>
               <input onChange={(e) => setcheck(!check)} value={check} id='check' type="checkbox" />
                <div className=' max-w-[50ch]  pt-4'>
                <label className='text-sm  ' htmlFor="check">By clicking this box you certify you are over 18 years old and eligible to invest. </label>
                </div>
               </div>

                <div className="">
                  <label className="text-sm -mt-8 font-bold">Citizenship</label>
                  <div className="bg-gray-200 px-2 py-2 rounded-lg">
                    <select className="w-full bg-transparent border-0 focus:outline-none focus:border-0 active:border-0 active:ring-0 active:outline-none    mt-1 text-lg sm:text-xl text-gray-700 font-medium focus:ring-0  rounded-lg    focus:border-b-2  ">
                      <option value="">Citizen</option>
                      <option value="">Resident Alien</option>
                      <option value="">Non-US Resident</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div>
                <Link to={`${to}`} className='text-[20px] text-gray-700'><FaArrowLeft /></Link>
                </div>
                <div className="py-2">
                  <button
                    onClick={handleComplete}
                    className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl"
                  >
                    {"Continue"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  const AddressInputs = ({handleComplete, back}) =>{
    return (
      <>
        <div className="bg-white min-h-screen">
        <div className='flex py-5   px-4 space-y-4 sm:container sm:mx-auto max-w-7xl  '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 '>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your residential address.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-4 py-10'>
            <div>
            <label className='text-sm font-bold '>Address Line 1</label>
            <input placeholder='Address Line 1' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg p-2 ' type="text" />
            </div>
            <div>
            <label className='text-sm font-bold '>Address Line 2</label>
            <input placeholder='Address Line 2' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg p-2' type="text" />
            </div>
            <div>
            <label className='text-sm font-bold '>City</label>
            <input placeholder='City' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg p-2' type="text" />
            </div>
            <div>
            <label className='text-sm font-bold '>Zip Code</label>
            <input placeholder='Zip-Code' className='w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg p-2' type="text" />
            </div>
            <div>
            <label className='text-sm  font-bold'>State</label>
            <select className='w-full mt-1 text-lg sm:text-xl text-gray-700 font-medium focus:ring-0 bg-gray-200 rounded-lg    focus:border-b-2 p-2 '   >
              <option value="">Citizen</option>
              <option value="">Resident Alien</option>
              <option value="">Non-US Resident</option>
            </select>
            </div>
            
          </div>
          <div className='flex justify-between items-center '>
            <div>
              <a onClick={back} className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button onClick={handleComplete} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
        </div>
      </>
    );
  }
  
  const PhoneInputs = ({handleComplete, back}, phonenumber, setphonenumber) => {
    return (
      <>
        <div className="min-h-screen bg-white">
        <div className='flex py-10   px-4 space-y-4  sm:container sm:mx-auto max-w-7xl  '>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 '>
            <h3 className={'sm:text-[28px] text-[25px]  font-bold text-gray-800'}>Enter your phone number.</h3>
            <p className='text-[14px] text-blue-500 font-medium'>Why we need this</p>
          </div>
          <div className='space-y-8 py-10'>
            <input placeholder='(123-456-7894)' className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-b-2 border-l-0 border-r-0 border-t-0 pb-4  focus:outline-none border-b-green-300  focus:border-b-2  ' type="text" />
             <div className='flex flex-col gap-y-2'>
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
              <a onClick={back} className='text-[20px] text-gray-700'><FaArrowLeft /></a>
            </div>
            <div className="py-2">
              <button onClick={handleComplete} className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
          </div>
         
        </div>
        </div>
      </>
    );
  }
  
  const Questions = ({question, answers, func, back, styles, subtext}) => {
    const [activeanswer, setactiveanswer] = useState(null)
    const [showmodal, setshowmodal] = useState(false)
    
    
  
    const QuestionBox = ({answer, active, onClick}) => {
     return(
      <>
      <motion.a initial={{scale:1}} animate={active && {scale:0.9}} onClick={onClick} className={`${!active ? 'bg-gray-200' : 'bg-green-200'} py-6 px-4 flex w-[250px]  xxs:w-[300px] justify-center sm:justify-start rounded-md shadow-md`}>
         <span className={`text-gray-700 font-semibold text-sm`}>{answer}</span>
      </motion.a>
      </>
     )
  
    }
   
    const handlemodal = (e) => {
        !showmodal ? setshowmodal(true) : setshowmodal(false)
    }
  
    return (
      <>
        <motion.div key={'motion'}  initial={{x: "-100%"}} animate={{x:'0'}} transition={{duration: 0.6}} onClick={()=>  showmodal && setshowmodal(false)} 
        className={`flex min-h-screen  sm:pt-4 px-4 space-y-4 pt-6 md:pt-12 ${styles} `}>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 pb-4 max-w-[60ch]'>
            <h3 className={'sm:text-[28px] text-[20px] uppercase leading-tight  font-semibold text-gray-800'}>{question}</h3>
            <p className='text-[13px] text-gray-800 font-semibold'>{subtext && subtext}</p>
           <Why setshowmodal={handlemodal} showmodal={showmodal}/>
          </div>
          <div className='  flex justify-center'>
          <div className='flex flex-col sm:grid grid-cols-2 grid-flow-row sm:gap-x-2 py-8    items-center gap-y-4'>
          {answers?.map((i, index)=>{
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
  
  const Agreements = ({func, account, styles}) => {
    return (
      <>
        <div className={`flex min-h-screen py-8 sm:pt-4   px-4 space-y-4    ${styles}`}>
          <div  className='py-4 mx-auto sm:min-w-[600px] '>
          <div className='text-start space-y-2 '>
            <h3 className={'sm:text-[28px] text-[25px] sm:text-center  font-bold text-gray-800'}>Agreements related to your {account} Account</h3>
            <p className='text-[14px] text-gray-700 sm:text-center  font-medium'>Please carefully read and accept the following agreements for your new account</p>
          </div>
          <div className='py-10'>
          <div className='flex items-center'>
          <p htmlFor="">Agreements</p>
          </div> 
            {/* <select  className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-b-2 border-l-0 border-r-0 border-t-0 pb-4  border-b-green-300  focus:border-b-2  ' type="text" /> */}
             <div className='flex flex-col gap-y-4'>
              {/* <label htmlFor="">Opt-in to get financial tips and reminders</label> */}
               <div className='flex  items-center gap-x-4'>
               <input id='check' type="checkbox" />
                <div className=' max-w-[50ch]  pt-4'>
                <label className='text-sm  ' htmlFor="check">I agree to the <span className='text-blue-600'>Apex account agreement</span>, Apex security lending program , Apex FDIC Sweeps Program Terms and Conditions. </label>
                </div>
               </div>
               <div className='flex  items-center gap-x-4'>
               <input id='check' type="checkbox" />
                <div className=' max-w-[50ch]  pt-4'>
                <label className='text-sm  ' htmlFor="check"> I agree to the <span className='text-blue-600'>Deposit account Agreement</span> and the deposit services provided by metabank member FDIC. </label>
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

  const RiskCalculator = ({handleComplete, to}) => {

    const [riskvalue, setriskvalue] = useState(50)


    function Grid(params) {
     
    if (riskvalue < 50) {
      return (
        <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <div className="w-full  max-h-32">
            <img src={base} className='w-full' alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-blk">
              I prefer stability over growth
            </h3>
            <p className="text-sm">
              I prefer stability over growth. I may prefer to play it safe and
              am willing to have smaller investment returns to avold potential
              losses
            </p>
          </div>
        </motion.div>       
        </>
      );
    }

    else if (riskvalue == 50) {
      return(
        <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>

        <div className="w-full  max-h-32">
        <img src={neutral} className='w-full' alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-blk">
            I prefer equal stability and growth.
            </h3>
            <p className="text-sm">
            I value stability and investment growth. However, I may be willing to take on more risk (i.e investment loss), for potential growth (investment gains)
            </p>
          </div>
        </motion.div>
        </>
      )
    }

    else if (riskvalue > 50) {
      return(
        <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>

        <div className="w-full  max-h-32">
        <img src={growthgraph} className='w-full' alt="" />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-blk">
            I prefer growth over stability.
            </h3>
            <p className="text-sm">
            I prefer growth over stability. I'm prepared to risk bigger investment losses for the potential of bigger Investment gains.
            </p>
          </div>
        </motion.div>
        </>
      )
    }

      
    }

    const marks = {
      0: {
        label: <strong className='mt-2 px-2 text-blue-400 hover:text-blue-600 transition-all duration-500 ease-in-out text-sm sm:text-xl'>Stable</strong>,
      },
      50: {
        label: <strong>Neutral</strong>,
      },
      100: {
        style: {
          color: '#f50',
        },
        label: <strong className='text-green-400 hover:text-green-600 transition-all duration-500 ease-in-out text-sm sm:text-xl'>Growth</strong>,
      },
    };


    return (
      <>
        <div className="h-screen bg-white">
          <div className="flex  px-4 space-y-4 sm:container max-w-7xl sm:mx-auto ">
            <div className="py-4 mx-auto sm:min-w-[600px] ">
              {/* question container */}

              <div className="text-start space-y-2 pb-4">
                <h3
                  className={
                    "sm:text-[28px] text-[25px]  font-bold text-gray-800"
                  }
                >
                  How do you see yourself investing
                </h3>
                <p className="text-[14px] text-blue-500 font-medium">
                  Why we need this
                </p>
              </div>

              <div className="py-4 flex gap-x-4">
                <div className="flex items-center gap-x-2">
                  <span className='text-sm  font-semibold text-blk'>Investment</span>
                  <div className="inline-block rounded-xl p-[6px] bg-blue-400"></div>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className='text-sm  font-semibold text-blk'>Returns</span>
                  <div className="inline-block rounded-lg p-[6px] bg-purple-600"></div>
                </div>
              </div>

              {/* risk input section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 pt-4 sm:w-[700px]"
              >
                <Grid />
              </motion.div>

             

              {/* slider container */}

              <div className="py-10  w-full">
                <div className=" max-w-[95%] mx-auto">
                  <Slider
                    onChange={(value) => {
                      setriskvalue(value);
                    }}
                    marks={marks}
                  />
                </div>
              </div>

              {/* go back/ continue section */}

              <div className="flex justify-between items-center ">
                <div>
                <Link to={`${to}`} className='text-[20px] text-gray-700'><FaArrowLeft /></Link>
                </div>

                <div className="py-2">
                  <button
                    onClick={handleComplete}
                    className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl"
                  >
                    {"Continue"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const CreatingAccount = ({loading, setloading}) => {

    const [settingup, setsettingup] = useState(true)
    const [success, setsuccess] = useState(false)

    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const firstname = localStorage.getItem('firstname')
    const lastname = localStorage.getItem('lastname')

   

    const doc = {
      _type: 'users',
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      plan: 'Free Trial',
      accounts: [
        {
          
          type: 'Smart',
          balance: 0,
          deployed: true,
          description: 'Get an automatically balanced portfolio in a few clicks',
        },
        {
          type: 'Personal',
          balance: 0,
          deployed: true,
          description: 'Invest in Stocks, Crypto, Startups and Digital farming ',
          
        },
        {
          type: 'Kids',
          balance: 0,
          deployed: false,
          description: 'Create a Portfolio for the little ones. ',
        },
        {
          type: 'Retirement',
          balance: 0,
          deployed: false,
          description: 'Create a Portfolio to Put aside for the future. ',
        }
      ]

    }

    

    useEffect(() => {
      client.transaction()
      .create(doc)
      .commit({autoGenerateArrayKeys: true,})
      .then((res) => {
        console.log(res)
        setTimeout(() => {
          setsettingup(false)
          setTimeout(() => {
            setsuccess(true)
          }, 8000);
        }, 3000)
      })
    }, [])
    
    

    const SettingUp = () => {

      return(
        <>
         <Player
              autoplay
              loop
              src={gearanimation}
              style={{ width: "300px", height: "300px" }}
            >
              <Controls visible={false} loop />
            </Player>
            <div className="">
              <h3 className="text-xl text-center text-blk font-semibold">
                Setting up your account
              </h3>
            </div>
        </>
      )
    }


    const Personalizing = () => {
      return(
        <>
         <Player
              autoplay
              loop
              src={hexagonloading}
              style={{ width: "300px", height: "300px" }}
            >
              <Controls visible={false} loop />
            </Player>
            <div className="">
              <h3 className="text-xl text-blk font-semibold text-center">
                Pesonalizing your account
              </h3>
            </div>
        </>
      )
    }

    const AccountCreated = () => {
      const jsConfetti = new JSConfetti()

      const showconfetti = () => {
        jsConfetti.addConfetti() 
    }
  
    useEffect(() => {
        showconfetti()
        setTimeout(() => {
          window.location.replace('/dashboard')
        }, 3000)
    }, [])


      return(
        <>
        <Result status={'success'}
         title={'Account Created'} />
        </>
      )
    }
    
    if (success) {
      return(
        <AccountCreated/>
      )
    }

    return (
      <>
        <div className="h-screen bg-white flex justify-center items-center">
          <div className="pb-40 md:pb-52">
           {settingup ? <SettingUp/> : <Personalizing/>}
          </div>
        </div>
      </>
    );
  }

  export const AccountCreated = () => {
    return(
      <>
      </>
    )
  }

  export{
    Agreements,
    Questions,
    Why,
    RegisterInputs,
    AgeInputs,
    AddressInputs,
    PhoneInputs,
    RiskCalculator,
    RegisterEmail,
    RegisterPassword,
    CreatingAccount,
    // AccountCreated
  }