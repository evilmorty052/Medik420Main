
import { useLocation } from 'react-router-dom';
import RadioGroups from '../components/radiogroup';
import { useNavigate } from 'react-router-dom';
import pattern from '../assets/pattern.png'
import stashlogo from '../assets/stashlogo.png'
import { FaChevronRight, FaEnvelope } from 'react-icons/fa';





const Advisor = () => {
const history = useNavigate()
 let views   
 let path = useLocation().pathname
    switch (path) {
        case '/advisor':
        views = <Default/>
            break;
        case '/advisor/page1':
        views = <Page1/>
            break;
        case '/advisor/page2':
        views = <InvestmentInfo/>
            break;
    
        default:
            break;
    }
  return (
    <>
      <div className="h-screen flex pb-4 bg-white relative">
        <Header close={() => history(-1)} />
        <div className="py-4 w-full mt-10">{views}</div>
        {/* <Cascade/> */}
      </div>
    </>
  );
}

export default Advisor


function  Default(params) {
    const history = useNavigate()
    const plans = [
        {
            name: "CONTINUE"
          },
          {
            name: 'SKIP QUESTIONS',
          },
      ]

     
     function func(selected) {
     console.log(selected)
     switch (selected.name) {
        case 'CONTINUE':
            history('/advisor/page1')
            break;
        case 'SKIP QUESTIONS':
        console.log('case 2') 
            break;
        default:
            break;
     }
        
      }

    return (
      <>
        <div className=" h-full font-space w-full mx-auto   px-2 ">
          <div className='border-slate-400 border-dashed border  h-full '>
          <div className="container w-full  py-4 flex flex-col items-center">
          <div>
                <h3 className=' text-center text-xl font-space'>Quick Survey</h3>
          </div>
            <div className="my-5 px-4">
               
              <p className="text-left lg:text-center font-semibold  text-xl lg:text-2xl mb-4">
                Please Answer A few Questions <br className='hidden lg:block'></br> To Help Us Choose The Right Account For You.
              </p>
              <p className="text-left text-xs">
                Theres No Right Or Wrong Answers We Use This Info To Ensure You Are Getting The most out of your Account
              </p>
            </div>
            <RadioGroups options={plans} func={func} show></RadioGroups>
            {/* <Card/> */}
          </div>
          </div>
          
          
        </div>
        
      </>
    );
}


function Page1(params) {
    const history = useNavigate()
    const plans = [
        {
          name: "INVESTMENT"
        },
        {
          name: 'DIGITAL FARMING',
        },
        {
          name: 'BUSINESS ASSISTANCE',
        },
        
        
        // {
        //   name: 'SMALL BUSINESS ASSISTANCE'
        // },
      ]

     
     function func(selected) {
     console.log(selected)
     switch (selected.name) {
        case 'INVESTMENT':
        history('/advisor/page2')
            break;
        case 'DIGITAL FARMING':
        console.log('case 2') 
            break;
        case 'BUSINESS ASSISTANCE':
        console.log('case 2') 
            break;
        default:
            break;
     }
        
      }

    return (
      <>
          <div className="flex  h-full font-space  px-2 ">
          <div className="container mx-auto py-4 flex flex-col items-center border border-slate-400 border-dashed ">
          <div>
                <h3 className=' text-center text-xl font-space'>How Can We Help You ?</h3>
                </div>
            <div className="my-5 px-4">
               
              <p className="text-left font-semibold  text-xl lg:text-4xl mb-4">
                Please Pick The Service You Are Interested in From The Options Below.
              </p>
              <p className="text-left text-xs">
                We Use This Answer To StreamLine Your Experience , Less Clutter More Value.
              </p>
            </div>
            <RadioGroups options={plans} func={func} show></RadioGroups>
          </div>
        </div>
      </>
    );
}

function InvestmentInfo(params) {
    const history = useNavigate()
    const plans = [
        {
          name: "SUBSCRIPTION"
        },
        {
          name: 'LOCK UP',
        },
        // {
        //   name: '',
        // },
        
        // {
        //   name: 'SMALL BUSINESS ASSISTANCE'
        // },
      ]

     
     function func(selected) {
     console.log(selected)
     switch (selected.name) {
        case 'INVESTMENT':
        history('/advisor/page2')
            break;
        case 'INVESTMENT AGENT':
        console.log('case 2') 
            break;
        default:
            break;
     }
        
      }

    return (
      <>
          <div className="flex  h-full font-space mx-auto  px-2 ">
          <div className="container mx-auto py-4 flex flex-col items-center border border-slate-400 border-dashed w-full ">
          <div>
                <h3 className=' text-center text-xl font-space'>What Type Of Investment ?</h3>
                </div>
            <div className="my-5 px-4">
               
              <p className="text-left font-semibold  text-xl lg:text-4xl mb-4">
                We Offer Different Types Of Investment Opportunities Please Pick One From The Options Below.
              </p>
              <p className="text-left text-xs">
                Theres No Right Or Wrong Answers We Use This Info To Ensure You Are Getting The most out of your Account
              </p>
            </div>
            <RadioGroups options={plans} func={func} show></RadioGroups>
          </div>
        </div>
      </>
    );
}

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


 function Card(params) {

    let amount = 0
    return(
        <>
        <div className='my-4   rounded-2xl '>
            <div className=' shadow-2xl w-[340px] h-[200px]  p-4  rounded-xl  relative flex items-center' style={{
    backgroundImage: `url(${pattern})`,
    backgroundSize: "cover",
  }}>
                 <div className='absolute top-5  left-5'>
                     <h3 className='text-lg text-white'></h3>
                 </div>
                  <div className='px-4 z-40'>
                    <p className='text-3xl text-white'>{`${'$ '}${ amount.toLocaleString('en-us', 'currency')}`}</p>
                  </div>
                  <div className='absolute bottom-5 left-5 z-40 '>
                    <p className='text-white'>Card Holder Name</p>
                  </div>
                  <div className='absolute left-2 top-2 flex items-center z-40'>
                   <div className=' w-[100px] '>
                   <img src={stashlogo} alt="" className='w-full'/>
                   </div>
                  </div>
                  <div className='absolute top-[45%] right-5 z-50'>
                   <FaChevronRight style={{color: '#ffffff'}}/>
                  </div>
                <div className='bg-gradient-to-r from-green-300 to-green-600 absolute inset-0 opacity-75 rounded-xl shadow-inner '></div>
            </div>
        </div>
        </>
    )
}

function messages(params) {
    return(
        <>
        <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full bg-green-200'>
                <FaEnvelope style={{color: '#ffffff'}}/>
            </div>
            <div className='my-4'>
                <h3 className='text-lg text-gray-400'>No Messages</h3>
            </div>
        </div>
        </>
    )
}