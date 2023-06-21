import {useParams, Link, useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import {Loader, CurrencyInput} from "../../../components"
import {client, urlFor} from "../../../../lib/client"
import {FaArrowLeft,FaChevronRight} from 'react-icons/fa'
import {Tabs} from '../../../pages/hive/index'
import {StatisticsCard, LockupPeriods, GridCard, LockupCard, InvestmentModal, PictureLine} from "./index"
import {hemplogo} from "../../../assets"
import { ErrorMessage } from '../../../pages/Settings'

function StartupInvestmentPage({back, }) {
    const [statsTab, setstatsTab] = useState(true)
    const [invesTab, setinvesTab] = useState(false)
    const [investors, setinvestors] = useState(false)
    const [ActiveCompany, setActiveCompany] = useState(null)
    // const [investmentSize, setinvestmentSize] = useState(null)
    // const [openModal, setopenModal] = useState(null)
    const navigate = useNavigate()
  
  
    const id = useParams().id
  
    const fetchStartup = async () => {
    const query = `*[_type == "store" && _id == "${id}"]{...,investments[]{..., payee->{avatar,firstname,lastname,username,_id}}}`
    const investorQuery = `*[_type == "members" && references("${id}")]`
    const startup = await client.fetch(query).then(res => res)
    const investors = await client.fetch(investorQuery).then(res => res)
    console.log(startup)
    setinvestors(startup[0].investments)
    setActiveCompany(startup)
    }
  
    useEffect(()=>{
      fetchStartup()
    },[])
  
    const Hero = () => {
      return(
        <>
        {/* <!-- Hero --> */}
  <div class="max-w-[85rem] mx-auto px-4  md:pb-12 sm:pt-4 ">
    {/* <!-- Grid --> */}
    <div class="grid  md:items-center md:justify-center">
      <div>
        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl  lg:leading-tight ">{ActiveCompany?.[0]?.name  }</h1>
        <p class="mt-3 text-lg text-gray-800 ">{ActiveCompany?.[0].description}</p>
  
        {/* <!-- Buttons --> */}
        {/* <div class="mt-7 grid gap-3 w-full sm:hidden">
          <a onClick={() => {
            setinvesTab(true)
            setstatsTab(false)
            }} class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 " >
            Invest
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
          <a class="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7]  dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" href="#">
            Bookmark
          </a>
        </div> */}
        {/* <!-- End Buttons --> */}
  
      </div>
      {/* <!-- End Col --> */}
  
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
  </div>
  {/* <!-- End Hero --> */}
        </>
      )
    }
  
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
  
   

    function Faq(params) {
      return (
        <>
          {/* <!-- FAQ --> */}
          <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-xl mx-auto text-center mb-2">
              <h2 className="text-lg font-bold leading-tight ">
                Questions about Pipe Funding?
              </h2>
              <p className="mt-1 text-gray-600 ">
                Answers to the most frequently asked questions about crypto.
              </p>
            </div>
            {/* <!-- End Title --> */}

            <div className="max-w-2xl mx-auto">
              {/* <!-- Accordion --> */}
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6  active"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <button
                    className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none  a hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  >
                    What is Pipe funding?
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <p className="text-gray-800 ">
                      Pipe funding is a modern form of passive income and funding that enables companies
                      or investors transform future revenue into up-front capital or a tradeable asset.
                      Your available capital is based
                      purely on your revenue and the health of your business.
                    </p>
                  </div>
                </div>

                <div
                  className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
                  id="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <button
                    className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  >
                    How do i make money as an investor?
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <p className="text-gray-800 ">
                     By investing in a company via pipe funding you are simply giving out a secure loan to your company of choice,
                     the profit on your investment is determined by the <a href="#ROI"><strong>R.O.I</strong></a> accepted by the company.  
                    </p>
                  </div>
                </div>

                <div
                  className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
                  id="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <button
                    className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  >
                    Are there any fees for crypto?
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <p className="text-gray-800 ">
                      There are no extra fees for adding any crypto to smart
                      portfolio.
                    </p>
                  </div>
                </div>

                {/* <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-four">
            <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
              How secure is Preline?
              <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
              <p className="text-gray-800 dark:text-gray-200">
                Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
              </p>
            </div>
          </div>
    
          <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-five">
            <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
              How do I get access to a theme I purchased?
              <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
              <p className="text-gray-800 ">
                If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
              </p>
            </div>
          </div>
    
          <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-six">
            <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
              Upgrade License Type
              <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
              <p className="text-gray-800 ">
                There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
              </p>
            </div>
          </div> */}
              </div>
              {/* <!-- End Accordion --> */}
            </div>
          </div>
          {/* <!-- End FAQ --> */}
        </>
      );
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
  
    const StatsPage = () => {
      return(
        <>
        <div className='px-4 pb-20 container mx-auto flex flex-col gap-y-8 justify-center max-w-4xl'>
                 <div className='flex flex-col gap-y-8'>
                 <StatisticsCard/> 
                 
                 {/* <LockupPeriods/> */}
                 <GridCard investors={investors}/>
                 <Faq/>
                  </div>    
             </div>
        </>
      )
    }
    
    const InvestPage = () => {
    const [investmentSize, setinvestmentSize] = useState("")
    const [period, setperiod] = useState(2)
    const [ROI, setROI] = useState(null)
    const [openModal, setopenModal] = useState(false)
  
  
    const OtherInvestors = () => {
      return(
        <>
         <div className='flex items-center gap-x-4 p-4 bg-gray-200/70  rounded-2xl shadow-xl'>
                  {/* <div className='w-10'>
                    <img src={urlFor(ActiveCompany?.[0].image)} alt="" />
                  </div> */}
                  <div className=''>
                     <strong className="sm:hidden">{ActiveCompany?.[0].name}</strong>
                     <p className='text-[14px]'>{investors?.length} users recently invested in this startup</p>
                     <PictureLine pictures={investors} />
                  </div>
               </div>
        </>
      )
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
  
  
      return (
        <>
          <div className="pb-8">
            <div className="px-2 pt-6 mx-auto space-y-4 max-w-[450px]  sm:px-4 sm:pt-0  sm:container ">
              
                 {/* {other investors details and count} */}
                 <OtherInvestors />
                 <CompanyStats/>
              
              {/* <InvestmentInput /> */}
              <div className="py-2">
                <div className="space-y-2.5 flex flex-col">
                  <span>Target Investment Amount</span>
                  <CurrencyInput
                    value={investmentSize}
                    setValue={setinvestmentSize}
                  />
                  <button
                    onClick={handleModal}
                    className="bg-green-300 px-4 py-2 rounded-xl"
                  >
                    Invest
                  </button>
                </div>
              </div>

              {/* {Faq} */}
              {/* <Faq /> */}
            </div>
          </div>
          <InvestmentModal
            ROI={ROI}
            period={period}
            handleModal={handleModal}
            openModal={openModal}
          />
        </>
      );
    }

    const CompanyStats = () => {
      return(
        <>
        <div className='container mx-auto space-y-8 py-4'>
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                         {/* <span className='text-xl  text-green-400'><FaMoneyBill  /></span> */}
                         {/* <img src={hemplogo} alt="" className='h-10 w-10' /> */}
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>ROI: </p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>{ActiveCompany?.[0].roi}</p>
                      </div>
             </div>
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                          {/* <span className='text-xl text-blue-400'><FaMoneyBill /></span> */}
                          {/* <img src={hemplogo} alt="" className='h-10 w-10' /> */}
                          <p className='sm:text-[24px] text-gray-800 font-semibold'>Payback duration: </p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>Monthly</p>
                      </div>
             </div>
            
             <div className='flex justify-between pb-4 border-b border-gray-800'>
                      <div className='flex gap-x-2 items-center'>
                        {/* <a className='text-xl text-black/80'><FaClock/></a>  */}
                        {/* <img src={hemplogo} alt="" className='h-10 w-10' /> */}
                         <p className='sm:text-[24px] text-gray-800 font-semibold'>Seats: </p>
                      </div>
                      <div>
                          <p className='text-base sm:text-xl font-semibold text-gray-800'>{ActiveCompany?.[0].seats}</p>
                      </div>
             </div>
        </div>
        </>
      )
    }
  
    const BackButton =() => {
      return
      (
      <>
    <div onClick={()=> setinvesting(false)} className="flex  items-center space-x-2"> 
          <FaArrowLeft/> 
          <span>Back <span className="hidden md:inline">to all startups</span></span>
    </div>
      </>
      )
    }
  
    if(!ActiveCompany){
      return(
      <Loader/>
      )
    }
   
    return(
        <>
        {/* <Miniheader companyName={ActiveCompany.name} avatar={ urlFor(ActiveCompany.image)} back={back}/> */}
  
        <div className="container mx-auto max-w-5xl z-50 min-h-screen bg-white ">
          {/* back button */}
        <div onClick={()=> navigate(-1)} className="flex   items-center space-x-2 p-4"> 
          <FaArrowLeft/> 
          <span>Back <span className="hidden md:inline">to all startups</span></span>
       </div>
         {/* end back button */}
  
         {/* grid */}
       <div className=" sm:grid sm:grid-cols-12">

        {/* default version */}
         <div className=" sm:hidden ">
             <div className="sticky sm:static top-0 bg-white z-10">
             <Tabs setactive={handleTabs} tab1={statsTab} tab2={invesTab} section1={'Statistics'} section2={'Invest'}/>
             </div>
             {
              statsTab &&
              <div className={'py-8'}>
              <Hero/>
              </div>
             }
              {
                statsTab ? 
                <StatsPage/>
             :
             <>
             <InvestPage />
             </>
            }
         </div>
          
          {/* tablet version */}
         <div className="hidden sm:block sm:col-span-6 space-y-4">
         <Hero/>
         <StatsPage/>
         </div>
         <div className="hidden sm:block sm:col-span-6">
         <div className="sticky top-0 pt-4">
         <InvestPage />
         </div>
         </div>
       </div>
          {/*end grid */}
        </div>
        </>
    )
  }

export  function StaticStartupInvestmentPage({back, ActiveCompany, setActiveCompany, to }) {
    const [statsTab, setstatsTab] = useState(true)
    const [invesTab, setinvesTab] = useState(false)


    const Hero = () => {
      return(
        <>
        {/* <!-- Hero --> */}
  <div class="max-w-[85rem] mx-auto ">
    {/* <!-- Grid --> */}
    <div class="grid  md:items-center md:justify-center">
      <div class="space-y-4">
        <h1 class="block text-3xl font-bold text-gray-800   lg:leading-tight sm:text-2xl ">{ActiveCompany?.name  }</h1>
        <p class=" text-lg text-gray-800 sm:text-sm ">{ActiveCompany?.description}</p>
  
        {/* <!-- Buttons --> */}
        <div class=" w-full flex items-center gap-x-2 text-indigo-600 ">
            <Link to={`${to}`} className="w-fit bg-transparent rounded-3xl text-blk outline outline-blk px-4 py-2 text-sm tracking-wide font-semibold">View Page</Link> 
            {/* <p><FaChevronRight /></p> */}
        </div>
        {/* <!-- End Buttons --> */}
  
      </div>
      {/* <!-- End Col --> */}
  
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
  </div>
  {/* <!-- End Hero --> */}
        </>
      )
    }
  
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
    function RecentInvestorsCard({investors}) {
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
                  <InvestorsRow key={index} name={investor.payee.username} amount={investor.investmentamount} status={investor.status} avatar={`${urlFor(investor.payee.avatar)}`} />
                ))
              }
            </ul>
       </div>
    </div>
    
      )
    }
  
    const StatsPage = () => {
      return(
        <>
        <div className=' container mx-auto flex flex-col gap-y-8 justify-center max-w-4xl'>
                 <div className='flex flex-col gap-y-4'>
                 {
              statsTab &&
              <div className={''}>
              <Hero/>
              </div>
             }
                 <StatisticsCard/> 
                 <RecentInvestorsCard investors={ActiveCompany?.investments} />
                  </div>    
             </div>
        </>
      )
    }
    
    const InvestPage = () => {
    const [investmentSize, setinvestmentSize] = useState("")
    const [period, setperiod] = useState(2)
    const [ROI, setROI] = useState(null)
    const [openModal, setopenModal] = useState(false)
  
  
    const OtherInvestors = () => {
      return(
        <>
         <div className='flex items-center gap-x-4 py-4 bg-gray-200 px-2 rounded-md'>
                  <div className='w-10'>
                    {/* <img src={urlFor(ActiveCompany?.[0].image)} alt="" /> */}
                    <img src={"heheheh"} alt="" />
                  </div>
                  <div className=''>
                     <p>{ActiveCompany?.name}</p>
                     <p className='text-[14px]'>20 users also invested in this startup</p>
                     <PictureLine />
                  </div>
               </div>
        </>
      )
    }
  
  
  
      return (
        <>
          <div className="pb-8">
            <div className="flex gap-y-5 flex-col px-1.5 ">
              <div className="px-4 pt-6 sm:pt-0  container mx-auto max-w-[450px]">
                <p className="text-2xl  text-center  text-blk font-semibold sm:text-left sm:text-lg">
                  Invest in {`${ActiveCompany?.name}`}
                </p>
                {/* <LockupPeriods/> */}
                <div className="py-4">
                  <LockupCard setperiod={setperiod} period={period} />
                </div>
                <a className="space-y-8 bg-gray-700">
                  <OtherInvestors />
                  {/* <InvestmentInput /> */}
                  <div className="py-2">
                    <div className="space-y-2.5 flex flex-col">
                      <span>Target Investment Amount</span>
                      {/* <Input suffix={<span className='text-base font-bold bg-gray-400 px-4 rounded-r-xl'>USD</span>} prefix={<FaDollarSign/>} type={'number'}></Input> */}
                      <CurrencyInput
                        value={investmentSize}
                        setValue={setinvestmentSize}
                      />
                      <button
                        onClick={handleModal}
                        className="bg-green-300 px-4 py-2 rounded-xl"
                      >
                        Invest
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <InvestmentModal ROI={ROI}  period={period} handleModal={handleModal} openModal={openModal}/>
        </>
      );
    }
  
    const BackButton =() => {
      return
      (
      <>
    <div onClick={()=> setinvesting(false)} className="flex  items-center space-x-2"> 
          <FaArrowLeft/> 
          <span>Back <span className="hidden md:inline">to all startups</span></span>
    </div>
      </>
      )
    }
  
    if(!ActiveCompany){
      return(
      <Loader/>
      )
    }
   
    return(
        <>
        {/* <Miniheader companyName={ActiveCompany.name} avatar={ urlFor(ActiveCompany.image)} back={back}/> */}
  
        <div className="container mx-auto max-w-5xl z-50 ">
          {/* back button */}
        <div onClick={()=> setinvesting(false)} className="flex sm:hidden   items-center space-x-2"> 
          <FaArrowLeft/> 
          <span>Back <span className="hidden md:inline">to all startups</span></span>
       </div>
         {/* end back button */}
  
         {/* grid */}
       <div className="">
         <div className=" pb-4">
             {/* <div className="sticky sm:static top-0 bg-white z-10">
             <Tabs setactive={handleTabs} tab1={statsTab} tab2={invesTab} section1={'Statistics'} section2={'Invest'}/>
             </div> */}
            <StatsPage/>
         </div>
         {/* <div className="hidden sm:block sm:col-span-6">
         <Hero/>
         <StatsPage/>
         </div>
         <div className="hidden sm:block sm:col-span-6">
         <div className="sticky top-0 pt-4">
         <InvestPage />
         </div>
         </div> */}
       </div>
          {/*end grid */}
        </div>
        </>
    )
  }

  export default StartupInvestmentPage