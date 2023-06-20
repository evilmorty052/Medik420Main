import {useState, useLayoutEffect, useEffect} from 'react'
import { Link, useNavigate, Route, Routes, useParams, Outlet, useLocation } from 'react-router-dom'
import hemp from '../../assets/hemplogo.png'
import useFetch from '../../hooks/useFetch'
import {client, urlFor } from '../../../lib/client'
import {Tabs} from '../../pages/hive/index'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaCircle, FaArrowLeft, FaLock, FaQuestion, FaSpinner} from 'react-icons/fa'
import styles from '../../style'
import { Line, Bar } from 'react-chartjs-2';
import {CurrencyInput, Loader} from '../../components'
// import  {ErrorMessage}  from ' ./Settings/partials/Message'
import { ErrorMessage } from '../../pages/Settings'
import Header from '../Header'
import {UseBottomNavigationContext, BottomNavigationContext} from "../../contexts/BottomNavigationContext"
import {BizCard, Page, StartupInvestmentPage, Tags, StaticStartupInvestmentPage} from "./startups/index"


const Startups = () => {
  let query = `*[_type == "store"]{...,investments[]{..., payee->{avatar,firstname,lastname,username,_id}}}`
  const hiveData = useFetch(query, 'tester')
  const standard =  {
            name: "Aspen creek digital" ,
            _updatedAt: "2023-02-28T15:13:56Z",
            website: "acdigitalcorp.com",
             _id: "00a34815-0ae3-4221-b054-0650268af6f7",
            description: "Aspen Creek Digital Corporation is revolutionizing high-performance computing facilities to stand up new renewable energy. ",
            seats: 15,
            _rev: "idmWNdQU8X3Wwf7vCqYr6x",
            _type: "store",
            image: {
                _type: "image",
                asset: {
                    _ref: "image-bd8b4e3c9660ae42df9ccfe5e21baea988f869de-100x100-jpg",
                    _type: "reference"
                }
            },
            _createdAt: "2023-02-28T15:09:53Z",
            category: "Other",
            roi: 10
        }
        
  // const [investing, setinvesting] = useState(false)
  const [ActiveCompany, setActiveCompany] = useState(standard)
  const [filterKeyWord, setfilterKeyWord] = useState('All')
  const {setInvisible} = UseBottomNavigationContext()

useLayoutEffect(()=>{
  setInvisible(true)
},[])

const [keyword, setkeyword] = useState('All')
const [SearchTerm, setSearchTerm] = useState("")

const history = useNavigate()

const tags = [
    {
     word: 'All',
     id: 1,
     name: 'asd'
    },
    {
     word: 'Technology',
     id: 2,
     name: 'fgh'
    },
    {
     word: 'Finance',
     id: 3,
     name: 'jkl'
    },
    {
     word: 'Other',
     id: 4,
     name: 'qwe'
    },
]



const FilteredHives = hiveData?.filter((item)=>{
    
  if(keyword == 'All'){
    return(item)
  }
   
 return(
  item.category.toLowerCase() == keyword.toLowerCase()
 )

})

const FilteredHivesTest = hiveData?.filter((item,index)=>{
  if(keyword == "All"){
     if(SearchTerm){
      return(
        item.name.toString().toLowerCase().includes(SearchTerm.toString().toLowerCase())
      )
     }

     return(
      item
     )
  }

  else if (SearchTerm){
    // setkeyword('')
    return(
      item.name.toString().includes(SearchTerm)
    )
  }
  // return(
  //   item.name.toString().includes(SearchTerm)
  // )
  return(
    item.category.toLowerCase() == keyword.toLowerCase()
  )
})

const Filter = hiveData?.filter((item)=>{
  if(SearchTerm == "All" ||!SearchTerm ){
    return item
  }
  return item.name.toLowerCase().includes(SearchTerm.toLowerCase())
})

function StartupsHeader() {
  const [keyword, setkeyword] = useState('All')
  // const [SearchTerm, setSearchTerm] = useState(null)
  return(
    <div className='mb-4 px-2 '>
    <div onClick={()=> history(-1)} className="flex items-center space-x-2 sm:hidden"> 
        <FaArrowLeft/> 
        <span>Back <span className="hidden md:inline">to all investments</span></span>
    </div>
    <h3 className='text-[28px] pt-4 font-semibold text-gray-800 sm:pt-0 sm:hidden '>Invest With Pipe Funding.</h3>
    <div className='w-full sm:flex py-2 md:pr-8'>
        <input onChange={(e) => {
          setSearchTerm(e.target.value)
        }} placeholder='search companies' type={'search'} className='border-gray-300 border rounded-2xl w-full focus:ring-green-200 shadow-inner  py-2 relative'/>
        
     </div>
    <div className='flex sm:justify-center'>
    <div className='py-4 pb-2 flex gap-2  flex-wrap sm:pr-4'>
        <Tags keyword={keyword}  />
     </div>
    </div> 
     <div>
   
   </div>
    </div>
  )
}

function Tags({}) {
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

if(!hiveData){
  return(
    <Loader/>
  )
}



const path = useLocation().pathname

  return(
   <>
   
    <div className={'sm:hidden'}>
      {/* header */}
    {!path.includes("company") &&
     <div className='mb-4 px-2 '>
     <div onClick={()=> history(-1)} className="flex items-center space-x-2 sm:hidden"> 
         <FaArrowLeft/> 
         <span>Back <span className="hidden md:inline">to all investments</span></span>
     </div>
     <h3 className='text-[28px] pt-4 font-semibold text-gray-800 sm:pt-0 sm:hidden '>Invest With Pipe Funding.</h3>
     <div className='w-full sm:flex py-2 md:pr-8'>
         <input onChange={(e) => {
           setSearchTerm(e.target.value)
         }} placeholder='search companies' type={'search'} className='border-gray-300 border rounded-2xl w-full focus:ring-green-200 shadow-inner  py-2 relative'/>
         
      </div>
     <div className='flex sm:justify-center'>
     <div className='py-4 pb-2 flex gap-2  flex-wrap sm:pr-4'>
         <Tags keyword={keyword}  />
      </div>
     </div> 
      <div>
    
    </div>
     </div>
    }
    <Routes>
       <Route path='/' element={<Page  tags={tags}  data={FilteredHivesTest }/>}/>
       <Route path='company/:id' element={<StartupInvestmentPage/>}/>
    </Routes>
    </div>

    {/* {tablet version} */}
    <div className={'hidden sm:block'}>
    <Routes>
       <Route path='/' element={ <TabletPage 
         SearchTerm={SearchTerm} 
         keyword={keyword}
         setkeyword={setkeyword}
         setActiveCompany={setActiveCompany}
         tags={tags}
         Filter={FilteredHivesTest}
         ActiveCompany={ActiveCompany}
         setSearchTerm={setSearchTerm}/>}/>
       <Route path='company/:id' element={<StartupInvestmentPage/>}/>
    </Routes>
    </div>
   </>
  )
}


function StartupsHeader() {
  const [keyword, setkeyword] = useState('All')
  // const [SearchTerm, setSearchTerm] = useState(null)
  return(
    <div className='mb-4 px-2 '>
    <div onClick={()=> history(-1)} className="flex items-center space-x-2 sm:hidden"> 
        <FaArrowLeft/> 
        <span>Back <span className="hidden md:inline">to all investments</span></span>
    </div>
    <h3 className='text-[28px] pt-4 font-semibold text-gray-800 sm:pt-0 sm:hidden '>Invest With Pipe Funding.</h3>
    <div className='w-full sm:flex py-2 md:pr-8'>
        <input onChange={(e) => {
          setSearchTerm(e.target.value)
        }} placeholder='search companies' type={'search'} className='border-gray-300 border rounded-2xl w-full focus:ring-green-200 shadow-inner  py-2 relative'/>
        
     </div>
    <div className='flex sm:justify-center'>
    <div className='py-4 pb-2 flex gap-2  flex-wrap sm:pr-4'>
        <Tags keyword={keyword}  />
     </div>
    </div> 
     <div>
   
   </div>
    </div>
  )
}

function TabletPage ({setSearchTerm, keyword, setkeyword, SearchTerm, setActiveCompany, ActiveCompany,  tags, Filter}){
  return(
    <div className="hidden sm:block container max-w-4xl mx-auto ">
    <div onClick={()=> history(-1)} className="flex items-center space-x-2 p-4"> 
        <FaArrowLeft/> 
        <span>Back <span className="hidden md:inline">to all investments</span></span>
    </div>
    {/* {header and searchbar} */}
    <div className='mb-4 px-2 '>
    <div onClick={()=> history(-1)} className="flex items-center space-x-2 sm:hidden"> 
        <FaArrowLeft/> 
        <span>Back <span className="hidden md:inline">to all investments</span></span>
    </div>
    <h3 className='text-[28px] pt-4 font-semibold text-gray-800 sm:pt-0 sm:text-center'>Invest With Pipe Funding.</h3>
    <div className='w-full sm:flex py-2 md:pr-8 sm:justify-center'>
        <input onChange={(e) => {
          setSearchTerm(e.target.value)
        }} placeholder='search companies' type={'search'} className='border-gray-300 border rounded-2xl w-full focus:ring-green-200  py-2 relative sm:w-8/12 '/>
        
     </div>
    <div className='flex flex-col sm:items-center'>
     <p className="text-xs text-gray-700">Filter companies by industry</p>
    <div className='py-4 pb-2 flex gap-2   flex-wrap sm:pr-4'>
        <Tags keyword={keyword} setkeyword={setkeyword}  />
     </div>
    </div> 
     <div>
   
   </div>
    </div>
    <div className="hidden sm:grid grid-cols-12">

    <div className="col-span-6 pb-12 pt-8  ">
    {!SearchTerm && <div className="mb-8">
      <h3 className="text-2xl font-semibold text-blk text-center">{keyword} Companies</h3>
    </div>}
    <Page searchTerm={SearchTerm} setActiveCompany={setActiveCompany} tags={tags}  data={Filter }/>
    </div>

    <div className=" col-span-6 ">
     <div className="sticky top-0 pt-8 px-2 ">
     <StaticStartupInvestmentPage to={`company/${ActiveCompany?._id}`} ActiveCompany={ActiveCompany}/>
     </div>
    </div>

    </div>
    </div>
  )
}

export default Startups


