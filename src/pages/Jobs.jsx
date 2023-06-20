import {useEffect, useState, useRef} from 'react'
import AnimatedSidebar from '../components/AnimatedSidebar'
import { FaArrowLeft, FaCheckCircle, FaChevronLeft, FaUpload } from 'react-icons/fa'
import { Footer } from '../partials/dashboard/Elements'
import { careersexplainers } from '../constants'
import { NewNav } from '../components/Dashboard/LaptopDisplay'
import { message, Result } from 'antd'
import { Routes, Route, useNavigate, useParams,Link } from 'react-router-dom'
import {RoundedNavBar, Loader} from "../components"
import {RegisterInputs, RegisterEmail, PhoneInputs} from "./"
import {client} from "../../lib/client"
import BarLoader from "react-spinners/BarLoader";

const Jobs = () => {
const [expanded, setIsExpanded] = useState(false)
const [jobs, setjobs] = useState()
const [applying, setapplying] = useState(false)

const fetchJobs = async () => {
  const query = `*[_type == "jobs"]`
  const jobs = await client.fetch(query).then((res) => res)  
  console.log(jobs)
  setjobs(jobs)
}

useEffect(()=>{
fetchJobs()
},[])

const navigate = useNavigate()

function Hero(params) {
  
  return(
    <>
    {/* <!-- Hero --> */}
<div class="bg-slate-900">
<div class="bg-gradient-to-b py-8 sm:pt-16 from-violet-600/[.15] via-transparent">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8  space-y-8">
    {/* <!-- Announcement Banner --> */}
    <div class="flex justify-center">
      <a class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" >
        <p class="mr-2 inline-block text-white text-sm">
          Help us train our A.i.
        </p>
        <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </a>
    </div>
    {/* <!-- End Announcement Banner --> */}

    {/* <!-- Title --> */}
    <div class="max-w-3xl text-center mx-auto">
      <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Join the revolution
      </h1>
    </div>
    {/* <!-- End Title --> */}

    <div class="max-w-3xl text-center mx-auto">
      <p class="text-lg text-gray-400">push the limits <br/> of what we can do together.</p>
    </div>

    {/* <!-- Buttons --> */}
    {/* <div class="text-center">
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 " >
        Get started
        <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </a>
    </div> */}
    {/* <!-- End Buttons --> */}
  </div>
</div>
</div>
{/* <!-- End Hero --> */}
    </>
  )
}

function BePart(params) {
  return(
    <>
    {/* <!-- Features --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
  {/* <!-- Grid --> */}
  <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
      <img 
      src='https://cdn.sanity.io/images/noj3nhym/production/f5dc218e1da613cb1b62e939ed541825ef0a3548-2880x1920.jpg'
      loading="lazy"
      class="rounded-xl"  alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}

    <div class="mt-5 sm:mt-10 lg:mt-0">
      <div class="space-y-6 sm:space-y-8">
        {/* <!-- Title --> */}
        <div class="space-y-2 md:space-y-4">
          <h2 class="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-200">
           Be part of a remote-first team of innovators
          </h2>
          <p class="text-gray-200">
          Our global team works from the places they love—from San Francisco to Atlanta, London to Bishkek.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- List --> */}
       
        {/* <!-- End List --> */}
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
    </>
  )
}

function Benefits(params) {
  return(
      <>
      {/* <!-- Icon Blocks --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-transparent">
  <div class="pb-4">
    <h2 class="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-200 sm:text-center">
    We are changing the way companies scale. <br class="hidden sm:block" />Join the movement
    </h2>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
    {/* <!-- Card --> */}
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3"> 
          <FaCheckCircle/>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 ">Remote first, flexibility key</h3>
        </div>
      </div>
      <p class="text-gray-600 ">Work from where you want and meet up with your colleagues somewhere new each quarter.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3">
      <FaCheckCircle/>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 ">Competitive compensation</h3>
        </div>
      </div>
      <p class="text-gray-600 ">Join a team that values your contribution and helps you grow.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3">
        <FaCheckCircle/>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 ">Health benefits</h3>
        </div>
      </div>
      <p class="text-gray-600 ">For you and your dependents, so you can all feel your best without worry..</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3">
        <FaCheckCircle/>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 ">Paid parental leave</h3>
        </div>
      </div>
      <p class="text-gray-600 ">Welcome your little one into the family with plenty of quality time..</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3">
      <FaCheckCircle/>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 ">Unlimited PTO</h3>
        </div>
      </div>
      <p class="text-gray-600 ">We really mean it when we say we want you to take time off when you need it—and we love a good company holiday..</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 ">
      <div class="flex items-center gap-x-4 mb-3">
      <FaCheckCircle/>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 ">Customized workstations</h3>
        </div>
      </div>
      <p class="text-gray-600 ">Choose a comfortable work-from-home set up that makes sense for you.</p>
    </div>
    {/* <!-- End Card --> */}
  </div>
</div>
{/* <!-- End Icon Blocks --> */}
      </> 
  )
}



function NewsLetter(params) {
  return(
    <>
    {/* <!-- Subscribe --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div class="grid md:grid-cols-2 gap-8">
    <div class="max-w-md">
      <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-200 ">Get job alerts</h2>
      <p class="mt-3 text-gray-200 ">
        Subscribe to get alerts anytime we have a new open position.
      </p>
    </div>

    <form>
      <div class="w-full sm:max-w-lg md:ml-auto">
        <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div class="w-full">
            <label for="hero-input" class="sr-only">Search</label>
            <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500   " placeholder="Enter your email"/>
          </div>
          <a class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 " >
            Subscribe
          </a>
        </div>
        <p class="mt-3 text-sm text-gray-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>
{/* <!-- End Subscribe --> */}
    </>
  )
}


function OpenPositions(params) {

  const positions =[
    {
      _id:"h656564774774736",
      jobTitle: "Infrastructure Engineer",
      department: "Engineering",
      status: "US/Canada",
      roles: careersexplainers.InfrastructureEngineer.roles,
      roleHeader: careersexplainers.InfrastructureEngineer.roleHeader,
      skills: careersexplainers.InfrastructureEngineer.skills,
      education: careersexplainers.InfrastructureEngineer.education,
      educationHeader: careersexplainers.InfrastructureEngineer.educationHeader,
      experience: careersexplainers.InfrastructureEngineer.experience,
      experienceHeader: careersexplainers.InfrastructureEngineer.experienceHeader,
      skillsHeader: careersexplainers.InfrastructureEngineer.skillsHeader
    },
    {
      _id:"h65656477yyfy74736",
      jobTitle: "Software Engineer, Security",
      department: "Engineering",
      status: "US/Canada",
      // roles: careersexplainers.SoftwareEngineer.roles,
      roleHeader: careersexplainers.SoftwareEngineer.roleHeader,
      skills: careersexplainers.SoftwareEngineer.skills,
      skillsHeader: careersexplainers.SoftwareEngineer.skillsHeader,
      experience: careersexplainers.SoftwareEngineer.experience,
      experienceHeader: careersexplainers.SoftwareEngineer.experienceHeader
    },
    {
      _id:"h656564778874736",
      jobTitle: "Senior Backend Engineer",
      department: "Engineering",
      status: "Remote",
      roleHeader: careersexplainers.SeniorBackendEngineer.roleHeader,
      skills: careersexplainers.SeniorBackendEngineer.skills,
      skillsHeader: careersexplainers.SeniorBackendEngineer.skillsHeader,
      experience: careersexplainers.SeniorBackendEngineer.experience,
      experienceHeader: careersexplainers.SeniorBackendEngineer.experienceHeader
    },
    {
      _id:"h656564774774737",
      jobTitle: "Compliance Director",
      department: "Finance",
      status: "Remote",
      roleHeader: careersexplainers.ComplianceDirector.roleHeader,
      skills: careersexplainers.ComplianceDirector.skills,
      skillsHeader: careersexplainers.ComplianceDirector.skillsHeader,
      experience: careersexplainers.ComplianceDirector.experience,
      experienceHeader: careersexplainers.ComplianceDirector.experienceHeader

    },
    {
      _id:"h656564774774735",
      jobTitle: "Delivery Driver",
      department: "Transportation",
      status: "Remote",
      roleHeader: careersexplainers.ComplianceDirector.roleHeader,
      skills: careersexplainers.ComplianceDirector.skills,
      skillsHeader: careersexplainers.ComplianceDirector.skillsHeader,
      experience: careersexplainers.ComplianceDirector.experience,
      experienceHeader: careersexplainers.ComplianceDirector.experienceHeader

    },
    {
      _id:"h656564774774731",
      jobTitle: "A.I Trainer",
      department: "Engineering",
      status: "Remote",
      roleHeader: careersexplainers.ComplianceDirector.roleHeader,
      skills: careersexplainers.ComplianceDirector.skills,
      skillsHeader: careersexplainers.ComplianceDirector.skillsHeader,
      experience: careersexplainers.ComplianceDirector.experience,
      experienceHeader: careersexplainers.ComplianceDirector.experienceHeader

    },
    // {
    //   jobTitle: "Director of Credit Strategy",
    //   department: "Finance",
    //   status: "Remote",
    // },
    // {
    //   jobTitle: "Data Scientist",
    //   department: "Engineering",
    //   status: "Remote",
    // }
  ]

  const JobCard=({department, jobTitle, to})=>{
    return(
      <Link to={`${to}`} class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition " >
        <div className='w-full py-2'>
            <p class="text-blk text-center">{department}</p>
        </div>
      <div class="px-4 pb-4 md:p-5">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 ">
              {jobTitle}
            </h3>
            <p class="text-sm text-gray-500">
              Remote
            </p>
          </div>
          <div class="pl-3">
            <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
    )
  }

  return(
    <>
    {/* <!-- Card Section --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="pb-4">
      <h3 class="text-2xl font-semibold text-gray-200 text-center">Open Positions</h3>
  </div>
  {/* <!-- Grid --> */}
  <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {/* <!-- Card --> */}
     {
      jobs?.map((position, i)=>{
        return(
          <JobCard 
           to={`path/${position._id}`}
           jobTitle={position.jobtitle}
           department={position.department}
           key={i}/>
        )
      })
     }
    {/* <!-- End Card --> */} 
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Section --> */}
    </>
  )
}
function JobPage({}) {
const [activeJob, setActiveJob] = useState()
const [applied, setApplied] = useState(true)


const id = useParams().id
const fetchJob = async () => {
    const query = `*[_type == "jobs" && _id == "${id}"]`
    const job = await client.fetch(query).then((res) => res)  
    setActiveJob(job)
  }


  useEffect(()=>{
    fetchJob()
    },[])



  const positions =[
    {
      _id:"h656564774774736",
      jobTitle: "Infrastructure Engineer",
      department: "Engineering",
      status: "US/Canada",
      roles: careersexplainers.InfrastructureEngineer.roles,
      roleHeader: careersexplainers.InfrastructureEngineer.roleHeader,
      skills: careersexplainers.InfrastructureEngineer.skills,
      education: careersexplainers.InfrastructureEngineer.education,
      educationHeader: careersexplainers.InfrastructureEngineer.educationHeader,
      experience: careersexplainers.InfrastructureEngineer.experience,
      experienceHeader: careersexplainers.InfrastructureEngineer.experienceHeader,
      skillsHeader: careersexplainers.InfrastructureEngineer.skillsHeader
    },
    {
      _id:"h65656477yyfy74736",
      jobTitle: "Software Engineer, Security",
      department: "Engineering",
      status: "US/Canada",
      // roles: careersexplainers.SoftwareEngineer.roles,
      roleHeader: careersexplainers.SoftwareEngineer.roleHeader,
      skills: careersexplainers.SoftwareEngineer.skills,
      skillsHeader: careersexplainers.SoftwareEngineer.skillsHeader,
      experience: careersexplainers.SoftwareEngineer.experience,
      experienceHeader: careersexplainers.SoftwareEngineer.experienceHeader
    },
    {
      _id:"h656564778874736",
      jobTitle: "Senior Backend Engineer",
      department: "Engineering",
      status: "Remote",
      roleHeader: careersexplainers.SeniorBackendEngineer.roleHeader,
      skills: careersexplainers.SeniorBackendEngineer.skills,
      skillsHeader: careersexplainers.SeniorBackendEngineer.skillsHeader,
      experience: careersexplainers.SeniorBackendEngineer.experience,
      experienceHeader: careersexplainers.SeniorBackendEngineer.experienceHeader
    },
    {
      _id:"h656564774774737",
      jobTitle: "Compliance Director",
      department: "Finance",
      status: "Remote",
      roleHeader: careersexplainers.ComplianceDirector.roleHeader,
      skills: careersexplainers.ComplianceDirector.skills,
      skillsHeader: careersexplainers.ComplianceDirector.skillsHeader,
      experience: careersexplainers.ComplianceDirector.experience,
      experienceHeader: careersexplainers.ComplianceDirector.experienceHeader

    },
    {
      _id:"h656564774774735",
      jobTitle: "Delivery Driver",
      department: "Transportation",
      status: "Remote",
      roleHeader: careersexplainers.ComplianceDirector.roleHeader,
      skills: careersexplainers.ComplianceDirector.skills,
      skillsHeader: careersexplainers.ComplianceDirector.skillsHeader,
      experience: careersexplainers.ComplianceDirector.experience,
      experienceHeader: careersexplainers.ComplianceDirector.experienceHeader

    },
    {
      _id:"h656564774774731",
      jobTitle: "A.I Trainer",
      department: "Engineering",
      status: "Remote",
      roleHeader: careersexplainers.ComplianceDirector.roleHeader,
      skills: careersexplainers.ComplianceDirector.skills,
      skillsHeader: careersexplainers.ComplianceDirector.skillsHeader,
      experience: careersexplainers.ComplianceDirector.experience,
      experienceHeader: careersexplainers.ComplianceDirector.experienceHeader

    },
    // {
    //   jobTitle: "Director of Credit Strategy",
    //   department: "Finance",
    //   status: "Remote",
    // },
    // {
    //   jobTitle: "Data Scientist",
    //   department: "Engineering",
    //   status: "Remote",
    // }
  ]

  // const activeJob = positions?.filter((position) => {
  //   return position._id == id
  // })

  const ApplyButton = () => {
    return(
      <div className="sticky bottom-0 w-full  bg-gray-200/80 py-4 sm:static ">
          <p onClick={() => navigate(`/jobs/application/${activeJob?.[0]._id}`)}  className="btnAlt text-center">Apply</p>
      </div>
    )
   }

  
   const JobPageForm =({})=>{
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    
    const [resumeFile, setResumeFile] = useState()
   
    const ref = localStorage.getItem('resumefile')

    const applicant = {
      _type: 'applicants',
      firstname: firstname,
      lastname:lastname,
      email:email,
      phone:phone,
      resume:{
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref:  `${ref}`,
        },
      },
      job:`${activeJob[0].jobtitle}`
    }

    // const doctodelete = applicants.filter((applicant)=> applicant._id)
    
    const del = async() => {
    const query = `*[_type == "applicants" && _id == "a4fvm98ktc7SJjyyQxEj3S"]`
    const doc = await client.fetch(query).then(res => res)
    client.delete(doc[0]._id).then((res) => console.log(res))

    }
  
   
   const handleSubmit = async (e) => {
  // del()

     e.preventDefault();
    

     if (!firstname || !lastname || !email ) {
       message.error('Please fill in all required information');
     }

     else{
      localStorage.setItem('applicantemail', email)
      localStorage.setItem('applicantjob', activeJob[0].jobtitle)
      client.create(applicant).then((res)=> {
        console.log(res)
        res && setApplied(true)
      })
      
     }
   }
   
   const PdfFileInput = ({ onChange, id }) => {
     const [fileName, setFileName] = useState('');
   
     const handleFileChange = async (e) => {
       const file = await e.target.files[0];
   
       if (file && file.type.includes("pdf")) {
         setLoading(true)
         setDisabled(true)
         setFileName(file.name);
         const {asset} = await client.assets.upload(`file`, file).then((res) => {
          localStorage.setItem('resumefile', res._id)
          setLoading(false)
          setDisabled(false)
          message.success('Uploaded Resume successfully');
         })
        
        //  onChange(file);
       } else {
         setFileName('');
         message.error('Please select a supported file');
       }
     };
   
     return (
       <div>
         <input id={id} className='hidden' type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
         {fileName && <p>Selected file: {fileName}</p>}
       </div>
     );
   };
   
   const AlphabetInput = ({ value, onChange }) => {
     const handleChange = (e) => {
       const inputValue = e.target.value;
       const regex = /^[A-Za-z]+$/; // Regex to match only alphabets
   
       if (regex.test(inputValue) || inputValue === '') {
         onChange(inputValue);
       }
     };
   
     return (
       <input
         type="text"
         value={value}
         onChange={handleChange}
       />
     );
   };
   
   
   
     return(
       <>
       {/* <!-- Form --> */}
   <div class="max-w-[85rem] px-2 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
     <div class="mx-auto max-w-2xl">
       <div class="text-center">
         <h2 class="text-xl text-gray-800 font-bold sm:text-3xl ">
           Apply for this job
         </h2>
       </div>
   
       {/* <!-- Card --> */}
       <div class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10  ">
        <div className="py-4 text-sm">
        <p>Fields Marked with <span className=" self-start text-red-500 gap-x-2">*</span> are required </p>
        </div>
         <form>
           <div class="mb-4 sm:mb-8">
             <label for="hs-feedback-post-comment-name-1" class=" mb-2 text-sm font-medium flex ">First name <span className=" self-start text-red-500 gap-x-2">*</span></label>
             <input  onChange={(e)=>setfirstname(e.target.value)}  type="text" id="hs-feedback-post-comment-name-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   " placeholder="First name"/>
           </div>
           
           <div class="mb-4 sm:mb-8">
             <label for="hs-feedback-post-comment-name-1" class="flex mb-2 text-sm font-medium ">last name <span className=" self-start text-red-500 gap-x-2">*</span></label>
             <input value={lastname} onChange={(e)=>setlastname(e.target.value)} type="text" id="hs-feedback-post-comment-name-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   " placeholder="Last name"/>
           </div>
   
           <div class="mb-4 sm:mb-8">
             <label for="hs-feedback-post-comment-email-1" class="block mb-2 text-sm font-medium ">Email address <span className=" self-start text-red-500 gap-x-2">*</span> </label>
             <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" id="hs-feedback-post-comment-email-1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   " placeholder="Email address"/>
           </div>
           
           <div class="mb-4 sm:mb-8">
             <label for="phone" class="block mb-2 text-sm font-medium ">Phone</label>
             <input value={phone} onChange={(e)=>setphone(e.target.value)} type="email" id="phone" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   " placeholder="Phone number"/>
           </div>
   
           <div class="mb-4 sm:mb-8">
             <label for="website" class="block mb-2 text-sm font-medium ">link to website or portfolio</label>
             <input type="email" id="website" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   " placeholder="Phone number"/>
           </div>

           <div class="mb-4 sm:mb-8">
             <label for="website" class="block mb-2 text-sm font-medium ">LinkedIn Profile</label>
             <input type="email" id="website" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4   " placeholder="Phone number"/>
           </div>
           
           <div class="mb-4 sm:mb-8 ">
             <label for="upload" class="cursor-pointer mb-2 text-base font-medium flex items-center gap-x-4 ">
             Upload Resume/CV
             <FaUpload style={{color:'blue'}}/>
             </label>
             <p className='text-sm'>(File types: pdf, doc, docx, txt, rtf)</p>
             <PdfFileInput id={'upload'}/>
           </div>
           
           {/* <div class="mb-4 sm:mb-8">
           <label for="uploadcoverletter" class=" mb-2 text-sm font-medium flex items-center gap-x-2 w-24 bg-blue-600 ">
             Cover Letter
             <FaUpload style={{color:'blue'}}/>
             </label>
             <p>(File types: pdf, doc, docx, txt, rtf)</p>
             <PdfFileInput id={'uploadcoverletter'}/>
           </div> */}
   
        
           <div class="mt-6 grid grid-flow-row">
             <button disabled={disabled} type="submit" onClick={(e) => handleSubmit(e)} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:bg-black/50  disabled:cursor-not-allowed ">
              {!loading ? 'Submit' : 
             <div className="flex flex-col items-center ">
              <p className="text-sm">Uploading...</p>
              <BarLoader color="#36d7b7" />
             </div>
             }</button>
             <button onClick={(e) => handleCancel(e)} class="mt-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-rose-500 text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition-all ">Cancel Application</button>
           </div>
         </form>
       </div>
       {/* <!-- End Card --> */}
     </div>
   </div>
   {/* <!-- End Form --> */} 
       </>
     )
    }

const JobOverview = () => {

const jobTitleRef = useRef()
const roleRef = useRef()
const responsibilitiesRef = useRef()
const qualificationsRef = useRef()
const formRef = useRef()


  return (
    <>
    <div className=''>
      {/* job title */}
      <div className="container mx-auto max-w-7xl sm:grid grid-cols-12">
      <div className=" col-start-5 col-span-8 px-2 sm:px-4" ref={jobTitleRef}>
            <h3 className="text-2xl sm:text-4xl md:text-5xl text-blk font-semibold">
              {activeJob?.[0].jobtitle}
            </h3>
            <p className="text-[16px] text-gray-700 font-semibold">
              {activeJob?.[0].payrange}
            </p>
            <p className="text-[16px] text-gray-700 font-semibold">
              {activeJob?.[0].joblocation}
            </p>
      </div>
      </div>
    <div className="sm:container sm:grid grid-cols-12 sm:mx-auto max-w-7xl pt-[60px] sm:pt-[0] relative">
        {/* sidebar */}
         <div className="hidden sm:block sm:col-span-4  pt-2  left-0 top-0">
          <div className=" sticky left-0 top-0 py-16 space-y-6 px-2">
          <div onClick={(e) => navigate(-1)} className="flex items-center gap-x-2 py-4">
        <FaChevronLeft/>
        <p  className="back font-semibold xl sm:2xl">Back</p>
       </div>
          <p onClick={() => jobTitleRef.current.scrollIntoView()}>About Medik420</p>
           <p onClick={() => roleRef.current.scrollIntoView()}>Role</p>
           <p onClick={() => responsibilitiesRef.current.scrollIntoView()}>Responsibilities</p>
           <p onClick={() => qualificationsRef.current.scrollIntoView()}>Qualifications</p>
           <div>
             <p onClick={() => formRef.current.scrollIntoView()}>Apply for this position</p>
           </div>
          </div>
         </div>
        <div className="bg-[#f9f8f8]  p-2 col-span-8 sm:space-y-8 sm:pr-4 sm:pl-0 ">
          

          {/* about medik420 */}
          <div className="py-4">
             <div className="py-2">
             <h3 className='text-blk text-xl font-semibold sm:text-3xl'>About Medik420</h3>
             </div>
            <div className="space-y-2">
              <p className="text-base font-medium text-blk ">
                Medik420 is the modern capital platform built to connect
                entrepreneurs and business owners to fast, frictionless,
                dilution-free financing. Medik420 works across industries by
                turning all forms of revenue into up-front capital to help
                companies improve cash flow, scale operations, and grow on their
                terms.
              </p>
              <p className="text-base text-blk ">
                We’re a fully distributed, remote-first, fast-growing startup.
                Our engineering, data science and risk teams are spread from
                UTC-8 to UTC+6 and we rely heavily on our written communication
                skills in order to make it work. We believe in giving our team
                agency and control over their schedules: we avoid standing
                meetings, and default to asynchronous communication. There are
                no core working hours, we just ask our team to communicate
                clearly about their schedules and be considerate to their
                coworkers if plans change. You will occasionally need to be
                flexible in order to meet synchronously with colleagues in
                different time zones.
              </p>
              
            </div>
          </div>

          <div className="space-y-6 ">
            {/* about the role */}
            <div>
            <h3 ref={roleRef} className="text-xl text-blk font-semibold sm:text-3xl">About The Role</h3>
            <p>{activeJob?.[0].description}</p>
             {/* <ol className='list-disc pt-2 space-y-4'>
              {activeJob?.[0].roles?.map((item)=>{
                return <li>{item}</li>
              })}
             </ol> */}
            </div>

            {/* responsibilities */}
            <div className="px-2 space-y-4">
            <h3 ref={responsibilitiesRef} className="text-xl text-blk font-semibold sm:text-3xl">Responsibilities</h3>
            <ol className=' decoration-slate-900 list-disc space-y-2'>
              {activeJob?.[0].roles?.map((item)=>{
                return <li>{item}</li>
              })}
            </ol>
            </div>
            
            {/* qualifications */}
            <div className="px-2 space-y-4">
            <h3 ref={qualificationsRef} className="text-xl text-blk font-semibold sm:text-3xl">Qualifications</h3>
            <ol className='list-disc space-y-2'>
              {activeJob?.[0].qualifications?.map((item)=>{
                return <li>{item}</li>
              })}
            </ol>
            </div>

            {/* education */}
           {activeJob?.[0].education ?  <div className="px-2 space-y-4">
            <h3 className="text-[28px] text-blk font-semibold sm:text-3xl">Education</h3>
            <ol className='list-disc space-y-2'>
              {activeJob?.[0].education}
            </ol>
            </div> : 
            
            ""
            }
             
            <div ref={formRef}>
            <JobPageForm/>
            </div>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

 const BackButton = () => {
  return(
    <div onClick={(e) => navigate(-1)} className="absolute top-2 left-2 flex items-center gap-x-2 sm:hidden">
        <FaArrowLeft/>
        <p  className="back font-semibold xl sm:2xl">Back to Careers</p>
       </div>
  )
 }

 const AppliedScreen = () => {
  const applicantMail = localStorage.getItem("applicantemail")
  const applicantJob = localStorage.getItem("applicantjob")
  return(
    <div className="bg-[#f9f8f8] min-h-screen">
      <div className="sm:container sm:mx-auto max-w-3xl py-8 flex flex-col items-center gap-y-4 sm:px-20 ">
      <span role="img" aria-label="check-circle" class="anticon anticon-check-circle"><svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="5em" height="5em" fill="#52c41a" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg></span>
       <div className="text-center">
       <span className="text-2xl text-blk font-semibold ">Applied for the {applicantJob} opening.</span>
       </div>
       <div className="space-y-4 px-4">
       {/* <p className="text-center text-2xl">What Next ?</p> */}
       <p className="text-center leading-relaxed text-lg">keep an eye on the email you provided <strong>"{applicantMail}"</strong> for an email from <strong>careers@medik420.com</strong> with instructions on how to set up an interview if we wish to move forward. please do not submit another application if there were no errors in your initial application.</p>
       </div>
         <div className="py-4">
          <button onClick={() => window.location.replace("/jobs")} className="flex gap-x-2 items-center">
              <FaChevronLeft/>
              Back to Careers
          </button>
         </div>
       </div>
    </div>
  )
 }

 if(!activeJob){
  return <Loader/>
 }

 if(applied){
  return <AppliedScreen/>
 }

  return(
    <>
    <NewNav/>
    <div className='bg-[#f9f8f8] min-h-screen  relative sm:pt-6'>
      <BackButton/>
      <JobOverview/>
    </div>
    </>
  )
}

const JobsLandingPage = () => {
  return(
    <>
    <NewNav/>
    <RoundedNavBar expanded={expanded} setIsExpanded={setIsExpanded} />
    <AnimatedSidebar isExpanded={expanded} setIsExpanded={setIsExpanded}/>
    <div className='bg-black pt-16 sm:pt-0 '>
    <Hero/>
    <div  className='min-h-screen  max-w-7xl sm:container sm:mx-auto overflow-scroll  bg-black'>
        <div className=' flex flex-col '>
            <BePart/>
            <Benefits/>
        </div>
            <OpenPositions/>
            <NewsLetter/>
            
    </div>
    <Footer/>
    </div>
    </>
  )
}

const ApplicationScreens = () => {
  const id = useParams().id

  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")

  const Welcome = () => {
    return(
      <div>
        <div className="grid  container mx-auto max-w-5xl sm:grid-cols-12 bg-red-300">
           <div className="py-8">
             <h3 onClick={() => navigate(`application/${id}/registername`)} className="text-3xl text-white">Welcome</h3>
           </div>
        </div>
      </div>
    )
  }

  const NameForm = () => {

    function handleName (){
      navigate(`application/${id}/registeremail`)
    }

    return(
      <RegisterInputs 
      firstname={firstName}
      setfirstname={setFirstname}
      lastname={lastName}
      setlastname={setLastname}
      handleComplete={handleName} />
    )
  }

  const EmailForm = () => {

    function handleEmail(){
      navigate(`application/${id}/registerphone`)
    }

    return(
      <RegisterEmail handleComplete={handleEmail} />
    )
  }

  const PhoneForm = () => {

    function handlePhone (){
      navigate(`application/${id}/registerphone`)
    }

    return(
      <PhoneInputs handleComplete={handlePhone}/>
    )
  }


  return(
    <div className="bg-black min-h-screen">
    
    <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="registername" element={<NameForm/>}/>
        <Route path="registeremail" element={<EmailForm/>}/>
        <Route path="registerphone" element={<PhoneForm/>}/>
    </Routes>
    </div>
  )
}



  return (
   <Routes>
    <Route path="/" element={<JobsLandingPage/>}/>
    <Route path="path/:id" element={<JobPage/>}/>
    <Route path="application/:id/*" element={<ApplicationScreens/>}/>
   </Routes>
  )
}





export default Jobs



