import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Miniheader from '../components/Miniheader'
import hemp from '../assets/hemplogo.png'
import people from '../assets/people01.png'
import people2 from '../assets/people02.png'
import people3 from '../assets/people03.png'
import useFetch from '../hooks/useFetch'
import { urlFor } from '../../lib/client'
import Loader from '../components/Loader'
import {Tabs} from './hive/index'
import { useSelector, useDispatch } from 'react-redux'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaCircle, FaDollarSign, FaInfo , FaLock, FaQuestion, FaSpinner} from 'react-icons/fa'
import styles from '../style'
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import CurrencyInput from '../components/CurrencyInput'
// import  {ErrorMessage}  from ' ./Settings/partials/Message'
import { ErrorMessage } from './Settings'



const HiveBiz = () => {
const [investing, setinvesting] = useState(false)
const [ActiveCompany, setActiveCompany] = useState(null)
const [filterKeyWord, setfilterKeyWord] = useState('All')


// const keyword = useSelector((state)=> state.hivebizSlice.filteredKeyWord)
const [keyword, setkeyword] = useState('All')
const [SearchTerm, setSearchTerm] = useState(null)

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

const data = [
    {
    id: 1,
     name: 'asd',
    image: 'https://photos.angel.co/startups/i/787839-a0060176723678d2d230d746359aae4b-thumb_jpg.jpg?buster=1589578315',
    category: 'Other'
    },
    {
    id: 2,
    name: 'qwe',
    image: hemp,
    category: 'finance'
    },
    {
    id: 3,
    name: 'rty',
    image: hemp,
    category: 'A.i'
    },
    {id: 4,
      name: 'uio',
    image: hemp,
    category: 'finance'
    },
    {id: 5,
      name: 'uio',
    image: hemp,
    category: 'technology'
    },
    {
    id: 6,
    name: 6,
    image: hemp,
    category: 'technology'
    },
    {
    id: 7,
    name: 7,
    image: hemp,
    category: 'technology'
    },
    {
    id: 8,
    name: 8,
    image: hemp,
    category: 'technology'
    },
    {id: 9,
      name: 9,
    image: hemp,
    category: 'technology'
    },
    {id: 10,
      name: 10,
    image: hemp,
    category: 'A.i'
    },
    {
    id: 11,
    name: 11,
    image: hemp,
    category: 'A.i'
    },
    {
    id: 12,
    name: 12,
    image: hemp,
    category: 'A.i'
    },
    {
    id: 13,
    name: 13,
    image: hemp,
    category: 'A.i'
    },
    {id: 14,
      name: 14,
    image: hemp,
    category: 'A.i'
    },
    {id: 15,
      name: 15,
    image: hemp,
    category: 'A.i'
    },
    {
    id: 16,
    name: 16,
    image: hemp,
    category: 'A.i'
    },
    {
    id: 17,
    name: 17,
    image: hemp,
    category: 'A.i'
    },
    {
    id: 18,
    name: 18,
    image: hemp,
    category: 'A.i'
    },
    {id: 19,
      name: 19,
    image: hemp,
    category: 'A.i'
    },
    {id: 20,
      name: 20,
    image: hemp,
    category: 'other'
    },
   

]



function HiveInvest({back, ActiveCompany}) {
  const [statsTab, setstatsTab] = useState(true)
  const [invesTab, setinvesTab] = useState(false)
  const [adoption, setadoption] = useState(true)
  const [funding, setfunding] = useState(false)

  const [investmentSize, setinvestmentSize] = useState()
  const [period, setperiod] = useState(2)
  const [ROI, setROI] = useState(null)

  const [openModal, setopenModal] = useState(false)

  

  function handleTabs(params) {
    if(statsTab){
      setstatsTab(false)
      setinvesTab(true)

    }

    else if (invesTab){
      setinvesTab(false)
      setstatsTab(true)
    }
    console.log('clcked')
  }

  function handleModal(e) {
    if(!investmentSize){
      ErrorMessage('Investment Size must be greater than 0')
      console.log('clcked')
      return
    } 
    
    openModal ? setopenModal(false) : setopenModal(true)

    if (e.target.id == 'modalcontainer'|| e.target.id == 'closemodalbutton') {
      openModal ? setopenModal(false) : setopenModal(true)
      
    }
    console.log('clcked')
  }

  function handleCharts(params) {
    if(adoption){
      setadoption(false)
      setfunding(true)
    }

    else if (funding){
      setfunding(false)
      setadoption(true)
    }
    
  }
  return(
      <>
      <Miniheader companyName={ActiveCompany.name} avatar={ urlFor(ActiveCompany.image)} back={back}/>

      <div className="pt-[90px] pb-20 container mx-auto max-w-5xl z-50">
       <div>
           <div className='px-2'>
              <div className='flex flex-col items-center gap-x-4 pb-4'>
             {/* <div className=''>
                     <img src={urlFor(ActiveCompany.image)} alt="" />
              </div> */}
               
              <h3 className={styles.sectionHeading}>{ActiveCompany.name}</h3>
              </div>
              <p className={styles.contentCenter}>{ActiveCompany.description}</p>
           </div>
           <Tabs setactive={handleTabs} tab1={statsTab} tab2={invesTab} section1={'Statistics'} section2={'Invest'}/>
            {
              statsTab ? 
              <div className='px-4 pb-20 pt-8 slide-in-left  container mx-auto flex flex-col gap-y-8 justify-center max-w-4xl'>
                <div className='hidden sm:flex  justify-center items-center gap-x-5'>
                {/* <LockupCard/> */}
                <StatisticsCard/> 
                </div>
               <div className='sm:hidden flex flex-col gap-y-8'>
               <StatisticsCard/> 
               {/* <LockupCard/> */}
               <LockupPeriods/>
                </div> 
                <div className='hidden sm:grid grid-cols-2 items-center gap-x-8'>  
                 <GridCard/>
                 <LockupPeriods/>
                {/* <ChartBox/> */}
                </div>
              
                <div className=''> 
              <div className='sm:hidden'><GridCard/></div> 
                <Tabs setactive={handleCharts} tab1={adoption} tab2={funding} section1={'Funding'} section2={'Adoption'}/>
             <div>
              {!funding ? <FundingChart/> : <UserChart/>}
              </div>  
              
                </div>
           </div>
           :
           <>
           
           <div className=' hidden slide-in-right px-2  sm:grid grid-cols-2 items-center gap-x-4 justify-center'>
             <div className='px-4  slide-in-right container mx-auto max-w-[450px]'>
           <a className='space-y-8 bg-gray-700'>
             <div className='flex items-center gap-x-4 py-4 bg-gray-200 px-2 rounded-md'>
                <div className='w-10'>
                  <img src={urlFor(ActiveCompany.image)} alt="" />
                </div>
                <div className=''>
                   <p>{ActiveCompany.name}</p>
                   <p className='text-[14px]'>20 users also invested in this startup</p>
                <PictureLine/>
                </div>
              </div>
              <div className='py-2'>
                 <div className='space-y-2.5 flex flex-col'>
                    <span>Target Investment Amount</span>
                    <CurrencyInput value={investmentSize} setValue={setinvestmentSize}/>  
                    <button onClick={handleModal} className='bg-green-300 px-4 py-2 rounded-xl'>Invest</button>
                 </div>
              </div>   
           </a>
             </div>  
             <LockupCard setperiod={setperiod} period={period}/> 
           </div>
           <div className='flex gap-y-5 flex-col sm:hidden slide-in-right px-1.5 '>
             <div className='px-4  slide-in-right container mx-auto max-w-[450px]'>
             <div className='py-8'><LockupCard setperiod={setperiod} period={period}/> </div>
           <a className='space-y-8 bg-gray-700'>
             <div className='flex items-center gap-x-4 py-4 bg-gray-200 px-2 rounded-md'>
                <div className='w-10'>
                  <img src={urlFor(ActiveCompany.image)} alt="" />
                </div>
                <div className=''>
                   <p>{ActiveCompany.name}</p>
                   <p className='text-[14px]'>20 users also invested in this startup</p>
                   <PictureLine />
                </div>
              </div>
              <div className='py-2'>
                 <div className='space-y-2.5 flex flex-col'>
                    <span>Target Investment Amount</span>
                    {/* <Input suffix={<span className='text-base font-bold bg-gray-400 px-4 rounded-r-xl'>USD</span>} prefix={<FaDollarSign/>} type={'number'}></Input> */}
                    <CurrencyInput value={investmentSize} setValue={setinvestmentSize}/> 
                   <button onClick={handleModal} className='bg-green-300 px-4 py-2 rounded-xl'>Invest</button>
                 </div>
              </div>   
           </a>
             </div>  
            
            
           </div>
           </>
          }
       </div>
       <Modal ROI={ROI} investmentSize={investmentSize} period={period} handleModal={handleModal} openModal={openModal}/>
      </div>
      </>
  )
}


let query = `*[_type == "store"]`
const hiveData = useFetch(query, 'tester')

const FilteredHives = hiveData?.filter((item)=>{
    
    // if(keyword == 'All') return
    
  //   if(searchTerm){
  //       return(
  //           item.name.toLowerCase() == searchTerm.toLowerCase()
  //          )
  //   } 

  //  return(
  //   item.category.toLowerCase() == keyword.toLowerCase()
  //  )
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



function Page ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4 }) {
  const [currentPage, setCurrentPage] = useState(1);
 
  
 

  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.round(data?.length / itemsPerPage)

  function handleShowInvestPage(company) {
    setActiveCompany(company)
    investing ?  setinvesting(false) : setinvesting(true)
  }

  
 function Circle(params) {
  const [circles, setcircles] = useState([])

  data?.forEach((element, index) => {  
  if(index >= totalPages)return
  // if(index >= 5){
  //   return
  // }
  circles.push(element)
  });

  
  console.log(totalPages)
 return(
  <>
  <div className='flex gap-x-[4px] items-center'>
  {circles.map((item, index)=>{

   
    return(
      <>
       <l1 onClick={()=> setCurrentPage(index+1)}  className={`text-gray-400  ${currentPage == index+1 && 'text-2xl text-green-400'}`}>{<FaCircle/>}</l1>
       
      </>
    )
  })}
  </div>
  </>
 ) 
 }
  function handleDecreaseSlide(params) {
    if(currentPage == 1) return
    setCurrentPage(currentPage - 1)
    console.log(currentPage)
  }
  function handleIncreaseSlide(params) {
    if(currentPage == totalPages) return
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
    { !hiveData ? <div className='flex justify-center items-center py-20 '><FaSpinner rotate={'true'} style={{fontSize: '40px'}} /></div> 
       :
      <div className='py-10'>
   { !SearchTerm && <div className="flex topnav w-full justify-center items-center">
                      <ul className="flex  min-w-[280px] justify-center items-center ">
                     <li className="text-2xl mr-2">
                    {  <a className={`${currentPage == 1 && 'text-gray-200'}`}><FaAngleLeft onClick={handleDecreaseSlide}  /></a>}
                    </li>
                       <div className='  overscroll-x-contain  flex justify-center'>
                       <Circle/>
                      </div> 
                      
                     <li className="text-2xl">
                     {<a className={`${indexOfLastItem >= data?.length && 'text-gray-200' }`} ><FaAngleRight  onClick={handleIncreaseSlide}/></a>}
                    </li>
                      </ul>
         </div>}
    <div className="flex-col py-10  flex gap-y-[50px] sm:grid  grid-cols-2 sm:gap-x-8 md:gap-x-12 md:px-4 lg:px-12 sm:container mx-auto max-w-5xl">
      {currentItems?.map((item) => (
        <div key={item.id} >
          {/* Render your item here */}
          <BizCard 
          image={urlFor(item.image)} 
          // image={(item.image)} 
          startup={item.name}
          website={item.website}
          description={item.description}
          roi={item.roi}
          seats={item.seats}
          category={item.category}
          func={()=> handleShowInvestPage(item)} />
        </div>
      ))}

    </div>
    {/* <div className="flex pb-20 bottomnav w-full">
                      <ul className="flex  w-full justify-center items-center  gap-x-8">
                     <li className="text-2xl">
                     <FaAngleLeft onClick={handleDecreaseSlide}  />
                    </li>
                        <l1 className={`text-gray-800 ${tab1 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab2 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab3 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                        <l1 className={`text-gray-800 ${tab4 && 'text-2xl text-green-400'}`}><FaCircle/></l1>
                     <li className="text-2xl">
                     <FaAngleRight onClick={handleIncreaseSlide}/>
                    </li>
                      </ul>
         </div> */}
           { !SearchTerm && <div className="flex topnav w-full justify-center items-center">
                      <ul className="flex  min-w-[280px] justify-center items-center ">
                     <li className="text-2xl mr-2">
                    {  <a className={`${currentPage == 1 && 'text-gray-200'}`}><FaAngleLeft onClick={handleDecreaseSlide}  /></a>}
                    </li>
                       <div className='  overscroll-x-contain  flex justify-center'>
                       <Circle/>
                      </div> 
                      
                     <li className="text-2xl">
                     {<a className={`${indexOfLastItem >= data?.length && 'text-gray-200' }`} ><FaAngleRight  onClick={handleIncreaseSlide}/></a>}
                    </li>
                      </ul>
         </div>}
    </div>}
   
    </>
  );
};
function Tags({word,}) {
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

if(investing){
    return(
        <HiveInvest ActiveCompany={ActiveCompany} back={()=> setinvesting(false)}/>
    )
}

  return (
    <>
    <Miniheader back={()=> history('/hive')}/>
    <div className='mb-8 pt-20 px-2 '>
    <h3 className='text-[28px] font-semibold text-gray-800 sm:text-center'>Build your investment portfolio.</h3>
    <div className='flex sm:justify-center'>
    <div className='pt-4 pb-2 flex gap-x-4  overflow-scroll'>
        <Tags  />
     </div>
    </div> 
     <div>
   
   </div>
    </div>
    <div  className=' px-1'>
    <div className='w-full sm:flex px-2  sm:justify-center'>
        <input onChange={(e) => {
          setSearchTerm(e.target.value)
        }} placeholder='search companies' type={'search'} className='border-gray-300 border rounded-2xl w-full focus:ring-green-200 shadow-inner  sm:w-6/12 py-2 relative'/>
        
     </div>
    {/* <Page  tags={tags} func={handleShowInvestPage} data={keyword == 'All' ? hiveData : FilteredHives}/> */}
    <Page  tags={tags}  data={FilteredHivesTest }/>
    </div>
    </>
  )
}


function BizCard({image, startup, description, seats, roi, website ,func, category}) {
  return(
    <>
    <div to={'/'}>
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
          {/* <li class="p-1 leading-none">
            <a href='' class="text-sm font-medium text-gray-300">View More </a>
          </li> */}
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li className=' h-[120px]'>
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
    <li className=''>
        <div>
        <button onClick={func}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Invest'}
            </button>
        </div>
    </li>
  </ul>
</article>

    </div>
    </>
  )
}





function StatisticsCard(params) {
  return(
    <>
    <a
  href="#"
  class="relative min-w-[356px] block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8"
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

    <h3 class="text-3xl font-bold sm:text-4xl">100+</h3>
  </div>

  <p class="mt-4 font-medium text-gray-500">
    This is The Total Score From Our Business Evaluation Model (BEM) 
    find Out More About BEM A.I And Evaluation Criteria <Link className='text-blue-400' to={'/'}>here</Link>
  </p>
  <a className='absolute top-2 right-2 text-blue-500'><FaQuestion/></a>
</a>

    </>
  )
}

function GridCard(params) {
  return(

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 ">Top Investors</h5>
        {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a> */}
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 ">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={people} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        $320
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={people2} alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        $3467
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={people3} alt="Michael image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        $67
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={people3} alt="Lana image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        $367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={people} alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 d">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

  )
}



function LockupCard({period, setperiod}) {
 

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
    <p class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{period} Months</p>
    <div>
      <ul>
        <li onClick={()=> handleIncrease()}><FaAngleUp/></li>
        <li onClick={()=> handleDecrease()}><FaAngleDown/></li>
      </ul>
    </div>
    </div>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

    </>
  )
}

function LockupPeriods(params) {
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

function UserChart(params) {
 const signups = [
    10257,
    11245,
    11902,
    10834,
    12342,
    10419,
    12738,
    10089,
    11586,
    12651,
    10977,
    12093,
  ];
const activeUsers = signups.map((value) => Math.round(value * 0.92));

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Signups',
        data: signups,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Active Users',
        data: activeUsers,
        fill: true,
        borderColor: '#00c4ee',
        tension: 0.1
      }
    ]
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  
  return(
<>
 {/* <h3 className='text-center'>2022 Performance</h3> */}
<div className='w-full'>
<Line data={data} options={options} />
</div>
</>
  )
}

function FundingChart(params) {
  const data = {
    labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
    datasets: [
      {
        label: 'Funding',
        data: ['400', 159, 280, 181,],
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Funding From Medik 420',
        data: ['190', 59, 180, 185,],
        backgroundColor: 'limegreen',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  return(
    <>
    <div className='w-full'>
      <div className='flex gap-x-4 mb-4'>
      <span className='text-[10px]'>Total Funding: 400M USD</span>
      <span className='text-[10px]'>Funding From Other Users: 159M USD</span>
      </div>
    <Bar data={data} options={options} />
    </div>
    </>
  )
}

const PictureLine = ({ pictures }) => {
  return (
    <div className="flex relative py-2">
      
      <div className='rounded-full border border-white flex justify-center items-center'>

        <img
          
          src={hemp}
          alt={`Picture `}
          className={`w-7 h-7 object-cover   `}
        />
      </div>
      <div className='rounded-full border border-white flex justify-center items-center -ml-2'>

        <img
          
          src={people}
          alt={`Picture `}
          className={`w-7 h-7 object-cover  `}
        />
      </div>
      <div className='rounded-full border border-white flex justify-center items-center -ml-2'>

        <img
          
          src={people2}
          alt={`Picture `}
          className={`w-7 h-7 object-cover  `}
        />
      </div  >
      <div className='rounded-full border border-white flex justify-center items-center -ml-2'>

        <img
          
          src={people3}
          alt={`Picture `}
          className={`w-7 h-7 object-cover `}
        />
      </div>
      <div className='rounded-full border border-white flex justify-center items-center -ml-2'>

        <img
          
          src={people}
          alt={`Picture `}
          className={`w-7 h-7 object-cover  `}
        />
      </div>
      
    
    </div>
  );
};

function Modal({openModal, handleModal , period, investmentSize,}){
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
              <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Investment Terms</h5>
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
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  Lockup Period
                              </p>
                              <p class="text-[12px] sm:text-sm text-gray-500 truncate dark:text-gray-400">
                                  Number of months to lock up
                              </p>
                          </div>
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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

export default HiveBiz


