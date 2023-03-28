import { motion, AnimatePresence } from "../../hooks/useMotion"
import { client, urlFor } from "../../../lib/client"
import { useEffect, useState } from "react"
import { FaChevronDown, FaArrowLeft, FaSearch } from "react-icons/fa"
import Header from "../Header"
import { useNavigate } from "react-router-dom"


const SyndicatesInvestmentScreen = () => {
  const [syndicates, setsyndicates] = useState(null)
  const [syndicateFilter, setsyndicatefilter] = useState(syndicates)
  const [activeSyndicate, setActiveSyndicate] = useState(null)
  const [activeQuery, setactiveQuery] = useState(null)


const navigate = useNavigate()
const userid = localStorage.getItem('uid')


  async function fetchSyndicates(params) {
    const query = `*[_type == 'syndicates']{...,investments[]{..., startup ->{image, name}}}`
    const syndicates = await client.fetch(query).then(res => res)
    setsyndicates(syndicates)
    setsyndicatefilter(syndicates)
  }

  const Syndicatecard = ({image, name, follow , view}) => {
    const [hidden, sethidden] = useState(true)
    return(
        <>
        <div className='flex flex-col'>
  
        <motion.a animate={hidden ? ''  : {opacity:0.5} }
  
  class={`  z-[2] relative block min-w-[340px] max-w-sm overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat mt-6`}
  style={{backgroundImage: `url(${image})`}}
  >
  <div class="absolute inset-0 bg-black/60"></div>
  
  <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
    <div class="sm:pt-18 pt-12 text-white lg:pt-24">
      <h3 class="text-xl font-bold sm:text-2xl">{name}</h3>
  
      <p class="text-sm">Verified</p>
    </div>
  
    <span 
      class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
    >
      4.5
      {/* <FaEyeSlash/> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </span>
    <span onClick={()=> sethidden(!hidden)} className="absolute bottom-6 right-4 text-[#f9f8f8]"><FaChevronDown/></span>
  </div>
  
  </motion.a>
  <AnimatePresence exitBeforeEnter={true}>
    
       {!hidden && 
       <motion.div  exit={{x: '-100%'}} initial={{y: '0'}} animate={{y: ['20%', '40%']}} transition={{duration: 0.4,}} className='flex  p-2  justify-center bg-gray-300 shadow-inner rounded-2xl '>
       <div class="flex space-x-3 ">
              {/* <a  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">Follow</a> */}
              <a onClick={follow}  class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 w-[120px]   ">Follow</a>
              <a  onClick={view}  class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 w-[120px]   ">View Page</a>
          </div>
       </motion.div>}
  </AnimatePresence>
        </div>
        </>
    )
  }

  const SyndicateScreen = ({syndicate, avatar}) => {

    async function handleFollow(syndicate) {
      // const query = `*[_type == 'syndicates' && _id == "${syndicate}" ]`
      const emailID = localStorage.getItem('email')
      const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
      const userID = await client.fetch(query).then(res => res[0]._id)
      client
      .patch(`${syndicate}`)
      .setIfMissing({followers: []})
      .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
      .commit({
        
        autoGenerateArrayKeys: true,
      }).then(res => {
        console.log(res)
        
      })
      // console.log(syndicate)
    }
  
    // const totalRevenue = syndicate?.investments?.reduce()
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    
      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
  
  
    const InvestmentActivity = ({name, amount, avatar, status}) => {
      return(
        <>
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
        </>
      )
    }
   
  const FollowStatus = () => {
    let followed 
    const following = syndicate?.followers?.find((follower)=>{
         return follower._ref == userid
       }
       )
          
          if (following) {
            followed = 'Following'
            return(followed)
          }
  
          else return 'Connect'
  }
  
  
  
    
    return(
      <>
      <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
  <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
       <main  class="profile-page pb-[83px]">
    <section class="relative block h-500-px">
      <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ('0px')"}}>
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
      <div onClick={()=> setActiveSyndicate(false)} className="absolute top-4 left-4 text-[#f9f8f8] text-2xl flex items-center gap-x-4"><FaArrowLeft/> <span className="">back</span></div>
    </section>
    <section class="relative sm:py-16 bg-white">
      <div class="sm:container mx-auto ">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex  justify-center">
                <div class="relative ">
                  <img alt="..." src={avatar} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                </div>
                
              </div>
              <div class="w-full lg:w-4/12 sm:px-4 lg:order-3 lg:text-right lg:self-center">
                <div class="py-6  px-4  mt-[50px]  flex justify-between sm:mt-0">
                <div   className=" gap-y-2  py-6 sm:mt-12 md:-mt-4 sm:px-20 md:px-0  w-full flex flex-col sm:flex-row justify-center">
                  <button onClick={()=> handleFollow(syndicate._id)} class="bg-pink-500 w-full sm:max-w-2xl  active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-base tracking-wide pr-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    <FollowStatus/>
                  </button>
                  <button  class="bg-green-300 w-full sm:max-w-2xl  active:bg-green-400 uppercase text-white font-bold hover:shadow-md shadow text-base tracking-wide pr-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    invest
                  </button>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">
                <div class="flex justify-center  lg:pt-4 ">
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{syndicate?.followers?.length}</span><span class="text-sm text-blueGray-400">Followers</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{syndicate?.investments?.length}</span><span class="text-sm text-blueGray-400">Investments</span>
                  </div>
                  <div class="lg:mr-4 p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{'0' }</span><span class="text-sm text-blueGray-400">Partners</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="top" class="text-center mt-4 sm:mt-12">
              <h3 class="text-2xl font-semibold leading-normal  text-blueGray-700 mb-2">
                {syndicate.name}
              </h3>
              {/* <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div> */}
              <div class="mb-2 text-blueGray-600 mt-2 sm:mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                {/* <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a
                    warm, intimate feel with a solid groove structure. An
                    artist of considerable range.
                  </p>
                  <a href="#pablo" class="font-normal text-pink-500">Show more</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
       {/* <div id="bottom" className="py-4 px-4"> <h3 className={styles.sectionSubHeading}>Recent Investments</h3></div> */}
     
       <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
      <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
          <a href="#bb" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5" type="button">
              <span class="sr-only">Open dropdown</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          </button>
          </a>
     </div>
     <div  class="flow-root my-4">
          <ul  role="list" class="divide-y divide-gray-200 ">
               {syndicate?.investments?.map((investment)=>{
        return(
          <InvestmentActivity status={investment.status} avatar={urlFor(investment?.startup?.image)} amount={investment.amount} name={investment?.startup?.name}/>
        )
       })}
          </ul>
     </div>
     <div className="">
         <div>
             <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
             <p className="text-2xl font-bold text-gray-800">$</p>
         </div>
     </div>
  </div>
      </div>
    </section>
  </main>
      </>
    )
  }



  useEffect(() => {
    fetchSyndicates()
  }, [])

  useEffect(() => {
  if (activeQuery) {
    setsyndicatefilter(filter)
  }
 else setsyndicatefilter(syndicates)

  }, [activeQuery])

  if(!syndicates){
    return <h3>.....</h3>
  }

  if(activeSyndicate){
    return <SyndicateScreen avatar={activeSyndicate.avatar && urlFor(activeSyndicate.avatar)} syndicate={activeSyndicate}/>
  }

  const DefaultHeader = () => {
    return(
        <>
           <div className="space-y-4 sm:min-w-[700px]">
        <div className="flex justify-between px-2">
            <h3 className="text-[28px] font-bold">Invest In The best performing syndicates</h3>
            {/* <span>explore investments</span> */}
        </div>
        
        {/* <div className="w-full flex space-x-8 sm:justify-center  p-4 overflow-x-scroll"><Tabs/></div>  */}
     </div>
        </>
    )
}

const filter = syndicateFilter?.filter((syndicate)=>{ 
  if (syndicate.name.toLowerCase().startsWith(activeQuery?.toLowerCase())) {
    return syndicate
  }
})





 
  return (
   <>
    <Header halfmenu={true} func={()=> navigate(-1)}/>
    <div className="py-8">
      <DefaultHeader/>
      <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-white rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input value={activeQuery} onChange={(e) => setactiveQuery(e.target.value)} placeholder="Search all syndicates" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
       <div className="px-2 max-w-sm flex flex-col gap-y-4">
            {syndicateFilter?.map((syndicate)=>{
              return(
                <>
                <Syndicatecard view={()=> setActiveSyndicate(syndicate)} key={syndicate._id} image={urlFor(syndicate.avatar)} name={syndicate.name} subtitle='1200 followers' rating={syndicate.rating}/>
                </>
              )
            })}
       </div>
    </div>
   </>
  )
}

export default SyndicatesInvestmentScreen