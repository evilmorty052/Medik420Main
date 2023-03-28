import React,{useEffect, useState} from 'react'
import AnimatedSidebar from '../components/AnimatedSidebar'
import { Navbar } from '../components'
import { FaLink } from 'react-icons/fa'
import { loggedin } from '../Redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'


const Jobs = () => {
const [expanded, setexpanded] = useState(false)
const [jobs, setjobs] = useState([])
const [where, setwhere] = useState()
const [what, setwhat] = useState()


console.log(loggedin)
 
function removeDuplicateObjects(arr) {
  const uniqueArray = [];

  arr.forEach((object) => {
    if (!uniqueArray.some((uniqueObject) => isEqual(uniqueObject, object))) {
      uniqueArray.push(object);
    }
  });

  return uniqueArray;
}

function isEqual(object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}






     





function opensidebar(params) {
  expanded?  setexpanded(false) : setexpanded(true)
  // console.log('clicked')
  }

async function searchJobs() {
  let duplicate = []
  fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bfee341a&app_key=23eb09b8e7790b77ae33fa66b0557778&what=${what}&where=${where}&results_per_page=20&max_days_old=2&sort_by=relevance`,{
        method:'GET'
      }).then((res)=> res.json()).then((res)=> {
       res && setjobs(res.results)
       res && console.log(removeDuplicateObjects(jobs))
      })
}





  // useEffect(() => {
  //   //  fetch("https://api.adzuna.com/v1/api/jobs/us/search/5?app_id=bfee341a&app_key=23eb09b8e7790b77ae33fa66b0557778%09&what=delivery%20driver&where=75001").then((res)=>{
  //   // console.log(res)
  //   //  })
  // fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bfee341a&app_key=23eb09b8e7790b77ae33fa66b0557778&what=nurse&where=75001',{
  //       method:'GET'
  //     }).then((res)=> res.json()).then((res)=> {
  //      res && setjobs(res.results)
  //       res && console.log(jobs)
        
  //     })
  
  // }, [])
  

  return (
    <> 
    <AnimatedSidebar setIsExpanded={setexpanded} isExpanded={expanded}/>
    <Navbar open={opensidebar} />
    <div onClick={()=> expanded && setexpanded(false)} className='flex min-h-screen pb-24 max-w-7xl justify-center  overflow-scroll  bg-plat '>
        <div className=' flex flex-col '>
            <Hero/>
       <div className='flex items-center flex-col gap-y-4 mb-8 sm:flex-row sm:justify-center sm:gap-5 '>
      <JobSearchInput placeholder={'What'} onChange={(e)=> setwhat(e.target.value)} value={what} />
      <JobSearchInput placeholder={'Where'} onChange={(e)=> setwhere(e.target.value)} value={where}/>
      <a onClick={searchJobs}  className='sm:hidden w-72 py-2 px-4 flex justify-center rounded-xl bg-green-300 shadow-2xl'>Search</a>
      </div>
      <div className='w-full sm:flex justify-center px-10 hidden'>
      <a onClick={searchJobs}  className='flex justify-center w-1/2 py-2 px-4 rounded-xl bg-green-300 shadow-2xl'>Search</a>
      </div>
      
            <div className='flex flex-1 pt-10 px-2 flex-col gap-y-8 mb-8 container  sm:grid grid-cols-2 gap-x-4  items-center'>
             {
              jobs.length > 1 && jobs.map((job)=>{
                return(
                  <>
                  <JobCard time={job?.created} salary={job.salary_min.toLocaleString('us')} company={job.company.display_name} title={job.title} contract={job.contract_time ? job.contract_time : 'N/A'  } location={job.location.display_name} url={job.redirect_url}  />
                  </>
                )
              })
             }
            </div>
        </div>
    </div>
    </>
  )
}

export default Jobs


function Hero(params) {
  return(
    <>
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-2 pt-20 mb-8 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <div class="flex flex-col items-center justify-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900 text-center">Search Open Positions  Available In Your Area</h1>
      <p class="mb-4 text-center leading-relaxed">Click the Boxes Below To begin Searching Open Positions  in your area </p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

function JobCard({salary, company, title, description, contract, location, time, url}){
  const date = new Date(time);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 const history = useNavigate()


  return(
    <>
    {/* <a href="#" class="block xxs:w-[350px]  bg-white rounded-lg p-4 shadow-sm shadow-indigo-100">
  <p>
    {description}
  </p>

  <div class="mt-2">
    <dl>
      <div>
        <dt class="sr-only">position</dt>

        
        <dd class="text-[20px] text-gray-800">{`${title}`}</dd>
      </div>

      <div>
        <dt class="sr-only">Address</dt>

        <dd class="font-medium text-[16px]">{company}</dd>
      </div>
    </dl>

    <div class="mt-6 flex items-center justify-between text-xs">
      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500">Salary</p>

          <p class="font-medium">{`${'$'}${salary}`}</p>
        </div>
      </div>


      <div class="sm:inline-flex sm:shrink-0 sm:items-center">
        <svg
          class="h-4 w-4 text-indigo-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <div class="mt-1.5 sm:ml-3 sm:mt-0">
          <p class="text-gray-500 whitespace-normal">location</p>

          <p class="font-medium">{location}</p>
        </div>
      </div>
    </div>
  </div>
  <div className='py-2'>
    <span>{date?.toLocaleDateString('en-us', options)}</span>
  </div>
  <div className='pt-2'>
  <button   className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Apply'}
   </button>
  </div>

</a> */}
<article class="rounded-xl border border-gray-700 bg-gray-800 p-4 relative w-full">
  <div class="flex items-center gap-4">
    <div>
      <h3 class="text-lg font-medium text-white">{title}</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> {company} </a>
          </li>
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> <span className=''>contract:</span> {contract} </a>
          </li>

        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white"> Annual Salary</strong>

        <p class="mt-1 text-base font-medium text-gray-300">
      ${salary} 
        </p>
      </a>
    </li>

    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">location</strong>

        <p class="mt-1 text-xs font-medium text-gray-300">
          {location}
        </p>
      </a>
    </li>
    {/* <li>
      <a
        href="#"
        class="block h-full py-2 px-4 rounded-lg border border-gray-700  hover:border-pink-600"
      >
        <p class="mt-1 text-xs font-medium text-gray-300">
        {date?.toLocaleDateString('en-us', options)}
        </p>
      </a>
    </li> */}
  </ul>
  <div className='pt-6'>
  <button  onClick={()=> loggedin ? history('/path') : history('/path')}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Apply'}
   </button>
  </div>
  <div className='absolute top-4 right-4'>
  {/* <a href={`${url}`} target='_blank'><FaLink style={{fontSize: '20px', color: '#f9f8f8'}}/></a>   */}
  </div>
</article>


    </>
  )
}

function JobSearchInput({placeholder, onChange, value}) {
  return(
    <>
    <div className=''>
      <input value={value} onChange={onChange} className='w-72 py-2 px-2 text-gray-400 rounded-lg' placeholder={placeholder}></input>
    </div>
    </>
  )
}


