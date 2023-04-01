import { useState, useEffect, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {  FaArrowLeft,  FaChevronDown, FaExpandAlt,  FaInfo, FaLink, FaQuestion, FaSearch, FaStar, FaUserFriends, FaUsers } from "react-icons/fa"
import { client, urlFor } from "../../../lib/client"
import styles from "../../style"
import ScaleLoader from "react-spinners/ScaleLoader";
import useMeasure from 'react-use-measure'
import { InformationModal } from "../../components"
import { explainers } from "../../constants"
import StreamContext from "../../contexts/StreamContext"





const MobileHub = () => {
const [loading, setloading] = useState(false)
const [following, setfollowing] = useState(false)
const [foryou, setforyou] = useState(true)
const [syndicate, setSyndicate] = useState(false)
const [coinvestors, setcoinvestors] = useState(false)
const [activehost, setactivehost] = useState(false)
const [hostpage, sethostpage] = useState(false)
const [userid, setuserid] = useState(false)
const [activeSyndicate, setactiveSyndicate] = useState(null)
const [ref, bounds ] = useMeasure()
const [modal, setmodal] = useState(null)
const [question, setquestion] = useState(null)
const [answer, setanswer] = useState(null)
// const [username, setusername] = useState(null)
const uid = localStorage.getItem('email')





const { chatClient } = useContext(StreamContext);
const username = localStorage.getItem('firstname')

const handleChannelCreate = async (friend) => {
  const channel = chatClient.channel('messaging', {
    members: [`${username}`,`${friend}`],
  });
  await channel.create();
  // console.log(`Channel created: ${channelName}`);
};

async function fetchMembers(params) {
  const query = `*[_type == 'members']{...,investments[]{..., startup ->{image, name}}} `
  const userquery = `*[_type == 'users' && email == "${uid}"]{_id, firstname}`
  const userid = await client.fetch(userquery).then(res => res[0])
  const coinvestors = await client.fetch(query).then(res => res)
  setcoinvestors(coinvestors)
  setuserid(userid._id)
  // setusername(userid.firstname)
 
}

async function handleJoin(host) {
  setloading(true)
  const emailID = localStorage.getItem('email')
  const query = `*[_type == 'users' && email == "${emailID}"]{_id}`
  const userID = await client.fetch(query).then(res => res[0]._id)
  setactivehost(host)
  console.log(host)
  

  client
  .patch(`${host}`)
  .setIfMissing({followers: []})
  .insert('after', 'followers[-1]', [{_ref: `${userID}`, _type: 'reference'}])
  .commit({
    
    autoGenerateArrayKeys: true,
  }).then(res => {
    console.log(res)
    setloading(false)
  })

  
}

function handleModal(question, answer) {
  setquestion(question)
  setanswer(answer)
  setmodal(true)
}


// client.delete(targethost._id).then(res => console.log(res))

useEffect(() => {
fetchMembers()  
}, [])



function handleTabs(params) {
  if(following){
    setfollowing(false)
    setforyou(true)
  };

  if(foryou){
    setforyou(false)
    setfollowing(true)
  }

}

const Tabs = ({tab1, tab2 , setactive, section1, section2}) => {
  return (
          <>
            <div className="flex py-2 px-4 ">
              <div className="flex cursor-pointer  w-full ">
                <div
                  onClick={setactive}
                  className={
                    !tab1
                      ? `pb-4 border-b-4 border-gray-300 w-1/2 flex justify-center`
                      : `pb-4 border-b-8 border-blue-400 w-1/2 flex justify-center`
                  }
                >
                  <a className="text-xl font-semibold text-center">{section1}</a>
                </div>
                <div
                  onClick={setactive}
                  className={
                    !tab2
                      ? `pb-4 border-b-4 border-gray-300  w-1/2 flex justify-center`
                      : `pb-4 border-b-8 border-blue-400 w-1/2 flex justify-center`
                  }
                >
                  <a className="text-xl font-semibold text-center">{section2}</a>
                </div>
              </div>
            </div>
          </>
  )
}

const UserCard = ({budget, roi, type, hostname, duration, raised, avatar, join, viewhost, func}) => {

const [hidden, sethidden] = useState(true)



    return(
        <>
    <div className="">
    <article class="rounded-xl border border-gray-700 bg-gray-800 mt-6 p-4 relative">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={avatar}
      class="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Host : {hostname}</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-green-300"> Verified </a>
          </li>

          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-gray-300"> Partners: 10 </a>
          </li>

          <li class="p-1 leading-none">
            <a  class="text-xs font-medium text-gray-300">Raised: {raised}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>

      <a
        
        class="block h-full rounded-lg border border-gray-700 p-2 "
      >
     <div className="flex justify-between">
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Type</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1 text-base font-medium text-gray-300">
          {type}
        </p>
      </div>
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Budget</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1  text-base font-medium text-gray-300">
          $ {budget}
        </p>
      </div>
     <div className="items">
      <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">Duration</strong> 
          <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div>
        </div>

        <p class="mt-1 text-base font-medium text-gray-300">
         {duration} Months
        </p>
      </div>
     </div>
      </a>
    </li>

    <li>
      <a
        
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <div className="flex items-center space-x-2">
             <strong class="font-medium text-[#f9f8f8]">ROI</strong> 
          {/* <div className="pb-4">
          <div className="p-[2.5px] rounded-full bg-white">
              <span className="text-[10px] text-blue-400"><FaInfo/></span>
          </div>
          </div> */}
        </div>

        <p class="mt-1 text-3xl font-medium text-gray-300">
          {roi} %
        </p>
      </a>
    </li>
  <AnimatePresence>
    {
      !hidden &&
      <motion.div exit={{x:'-100%'}}  transition={{duration: 0.2}} className="flex flex-col gap-y-4 py-2 sidebar">
        <motion.button  onClick={func}  className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'Add Friend'}
            </motion.button>
        <motion.button onClick={viewhost}  className="bg-blue-300 shadow-xl hover:bg-blue-400 text-black font-bold py-2 px-6  w-full rounded-3xl text-[20px]">
              {'View Host'}
            </motion.button>
      </motion.div>
    }
  </AnimatePresence>
  </ul>
   <div className="absolute top-8 right-4"><FaExpandAlt onClick={()=> sethidden(!hidden)} style={{color: 'white'}}/></div>
</article>
 
    </div>

        </>
    )
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



const ForYou = () => {
  const [syndicates, setsyndicates] = useState(null)
  // const [activeSyndicate, setactiveSyndicate] = useState(null)
  const [coInvestorsGrid, setcoInvestorsGrid] = useState(null)
  const [syndicatesGrid, setSyndicatesGrid] = useState(null)
  const [recommendedpage, setrecommendedpage] = useState(null)
  

useEffect(() => {
  if(!syndicatesGrid && !coInvestorsGrid){
    setrecommendedpage(true)
  }

}, [syndicatesGrid, coInvestorsGrid])


  const handleview = (host) => {
    sethostpage(host)
    console.log('this is the host :', host)
  }
  
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
  
  function handleViewSyndicate(syndicate) {
    setactiveSyndicate(syndicate)
  }

  async function fetchSyndicates(params) {
    const query = `*[_type == 'syndicates']{...,investments[]{..., startup ->{image, name}}}`
    const syndicates = await client.fetch(query).then(res => res)
    setsyndicates(syndicates)
  }

  const SyndicatesGrid = () => {
    return(
      <>
        <div className="flex gap-y-4 flex-col">
            <div className={styles.sectionSubHeading}><h3 onClick={() =>{
              handleModal('What Is A Syndicate ?', `${explainers.syndicatequestion.answer}`)
            }}>Trending Syndicates</h3></div>
            {syndicates?.map((syndicate)=>{
              return(
                <>
                <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                </>
              )
            })}
       </div>
      </>
    )
  }
  const CoinvestorsGrid = () => {
    return(
      <>
      
        <div onClick={() => handleModal('Shared investments ?', `${explainers.sharedPortfolioQuestion.answer}`) } className={styles.sectionSubHeading}><span >Recommended Shared Investments</span></div>
        <div>
        <>
        <div  className="flex flex-col ">   
        {coinvestors?.map((coinvestor)=>{
          return(
            <UserCard 
            hostname={coinvestor.username} 
            duration={coinvestor.duration} 
            type={coinvestor.type}
            raised={coinvestor.raised} 
            budget={coinvestor.budget}
            roi={coinvestor.roi}
            avatar={urlFor(coinvestor.avatar)}
            join={()=> handleJoin(coinvestor._id)}
            viewhost={() => handleview(coinvestor)}
            friend={coinvestor.username}
            func={()=> handleChannelCreate(coinvestor.firstname.toString().toLowerCase())} />
          )
        })}
        </div>
        </>
       </div>
      </>
    )
  }

  const Header = () => {
    return(
      <>
      <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search hosts, startups" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
      </>
    )
  }

  const Filters = () => {
    const [recommended, setRecommended] = useState(true)
    const [coInvestments, setcoInvestments] = useState(false)
    const [syndicates, setsyndicates] = useState(false)
  
    const handleFilter = (filter) =>{
    switch (filter) {
      case 'recommended':
      !recommendedpage ? setrecommendedpage(true) : setrecommendedpage(false)
       setSyndicatesGrid(false)
       setcoInvestorsGrid(false)
        break;
      case 'coInvestments':
        setcoInvestorsGrid(!coInvestorsGrid)
        if(!recommendedpage && !syndicatesGrid ){
           setrecommendedpage(true)
        }
        setrecommendedpage(false)
        break;
      
      case 'syndicates':
        
        setSyndicatesGrid(!syndicatesGrid)
        setrecommendedpage(false)
        
        
        break;
    
      default:
       
        break;
    }
    }
  
    return(
      <>
       <div>
           <ul className="flex overflow-x-scroll  pb-5 gap-x-8 px-2">
              <li className="">
                  <motion.a onClick={()=> handleFilter('recommended')} animate={recommendedpage ?{ backgroundColor: '#86efac' } : ''}     transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={recommendedpage ?{ scale:1.4, } : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaStar style={{color:'gold'}}/> </motion.div><span className="text-base font-semibold text-gray-800 tracking-wide">Recommended</span>
                  </motion.a>
              </li>
              <li className="">
                  <motion.a onClick={()=> handleFilter('coInvestments')} animate={coInvestorsGrid ?{ backgroundColor: '#86efac' } : ''}   transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={coInvestorsGrid ?{ scale:1.4} : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaUserFriends style={ coInvestorsGrid && {color:'gold'}}/> </motion.div><span className="text-base font-semibold text-gray-800 tracking-wide">Coinvestors</span>
                  </motion.a>
              </li>
              <li className="">
                  <motion.a onClick={()=> handleFilter('syndicates')}animate={syndicatesGrid ?{ backgroundColor: '#86efac' } : ''}  transition={{duration: 0.5, type: 'just'}} className="p-2 flex items-center gap-x-2  w-[200px] bg-green-100 rounded-3xl shadow-inner" >
                   <motion.div animate={syndicatesGrid ?{ scale:1.4} : ''} className="p-2 bg-white shadow-2xl rounded-full"><FaUsers style={syndicatesGrid && {color:'gold'}}/> </motion.div><span className="text-lg font-semibold text-gray-800 tracking-wide">Syndicates</span>
                  </motion.a>
              </li>
           </ul>
       </div>
      </>
    )
  }

const SyndicatePage = ({syndicate}) => {
  return(
    <>
    {syndicate?.name}
    </>
  )
}

  useEffect(() => {
  fetchSyndicates()  
  
  }, [])
  
  if(!syndicates){
    return (
      <div className="flex h-screen justify-center items-center pb-20">
      <span>
       <ScaleLoader
        width={30}
        color={'#00c4ee'}/>
    </span>
    </div>
    )
  }

  // if(activeSyndicate){
  //   return(
  //     <>
  //     <SyndicatePage syndicate={activeSyndicate}/>
  //     </>
  //   )
  // }

  return(
    <>
   <div className="pb-[93px]">
  <Header/>
  <div className="w-full pt-4">
    <Filters/>
  </div>
       <div className="flex flex-col gap-y-4">
    {syndicatesGrid  && <SyndicatesGrid/>  }  
     {coInvestorsGrid  && <CoinvestorsGrid/>}
       </div>
       <div className="flex flex-col gap-y-4">
    { !coInvestorsGrid && !syndicatesGrid && <>
      <SyndicatesGrid/>    
      <CoinvestorsGrid/>
      </>
      }
       </div>
   </div>
    </>
  )
}

const Following = () => {
const [followed, setfollowed] = useState(null)
const [syndicates, setsyndicates] = useState(null)

async function fetchFollowing(params) {
  const userquery = `*[_type == "users" && email == "${uid}"]{_id}`
 const user = await client.fetch(userquery).then(res => res[0]._id)
  const docquery = `*[_type == 'members' && references("${user}")]`
  const syndicatequery = `*[_type == 'syndicates' && references("${user}")]`
  const following = await client.fetch(docquery).then(res => res)
  const syndicates = await client.fetch(syndicatequery).then(res => res)
  setfollowed(following)
  setsyndicates(syndicates)
}


useEffect(() => {
  fetchFollowing()
}, [])


  if(!followed){
    return(
      <h3>...loading</h3>
    )
  }
  return(
    <>
   <div className="pb-[93px]">
   <div className="px-4">
        <div className="flex items-center space-x-2 p-2 bg-white rounded-xl">
             <FaSearch/>
             <hr className="w-px  h-6 bg-slate-200 mx-4" />
             <input placeholder="Search hosts, startups" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
        </div>
        </div>
       <div className="flex flex-col gap-y-4">
       <div className="flex gap-y-4 flex-col">
            {syndicates?.map((syndicate)=>{
              return(
                <>
                <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                </>
              )
            })}
       </div>
       <div>
        <>
        {followed?.map((coinvestor)=>{
          return(
            <UserCard key={coinvestor._id}
            hostname={coinvestor.username} 
            duration={coinvestor.duration} 
            type={coinvestor.type}
            raised={coinvestor.raised} 
            budget={coinvestor.budget}
            roi={coinvestor.roi}
            avatar={urlFor(coinvestor.avatar)}
            join={()=> handleJoin(coinvestor._id)}
             />
          )
        })}
        </>
       </div>
       </div>
   </div>
    </>
  )
}

const HostPage = ({host, avatar}) => {

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
  const following = host?.followers?.find((follower)=>{
       return follower._ref == userid
     }
     )
        
        if (following) {
          followed = 'Following'
          return(followed)
        }

        else return 'Connect'
}

const userdetails = {
  id: 'solo',
  name: 'solo',
  image: 'https://getstream.io/random_png/?id=quiet-night-9&name=quiet-night-9'
}

const filters = { type: 'messaging', members: { $in: [`solo`] } };
 
  return(
    <>

     <main ref={ref}  class="profile-page pb-[83px]">
  <section class="relative block h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ('0px')"}}>
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div onClick={()=> sethostpage(false)} className="absolute top-4 left-4 text-[#f9f8f8] text-2xl flex items-center gap-x-4"><FaArrowLeft/> <span className="">back</span></div>
  </section>
  <section class="relative sm:py-16 bg-white">
    <div class="sm:container mx-auto ">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div class="">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex  justify-center">
              <div class="relative ">
                <img  width={'512px'} height={'512px'} alt="..." src={avatar} class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
              
            </div>
            <div class="w-full lg:w-4/12 sm:px-4 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6  px-4  mt-[50px]  flex justify-between sm:mt-0">
              <div   className="  py-6 sm:mt-12 md:-mt-4 sm:px-20 md:px-0  w-full flex justify-center">
                <button onClick={()=> handleFollow(host._id)} class="bg-pink-500 w-full sm:max-w-2xl  active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-base tracking-wide pr-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  <FollowStatus/>
                </button>
               {/* <NewChannelButton user={userdetails}/> */}
                </div>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center  lg:pt-4 ">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{host.followers?.length}</span><span class="text-sm text-blueGray-400">Followers</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{host.investments?.length}</span><span class="text-sm text-blueGray-400">Investments</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{!host.partners ? '0' : host.partners.length}</span><span class="text-sm text-blueGray-400">Partners</span>
                </div>
              </div>
            </div>
          </div>
          <div id="top" class="text-center mt-4 sm:mt-12">
            <h3 class="text-2xl font-semibold leading-normal  text-blueGray-700 mb-2">
              {host?.firstname} {host.lastname}
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
             {host.investments?.map((investment)=>{
      return(
        <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
      )
     })}
        </ul>
   </div>
   <div className="">
       <div>
           <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
           <p className="text-2xl font-bold text-gray-800">$17800</p>
       </div>
   </div>
</div>
    </div>
  </section>
</main>
{/* <div className="py-20">
<NewChannelButton user={userdetails}/>
</div> */}

    </>
  )
}

const SyndicatePage = ({syndicate, avatar}) => {

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
     <main ref={ref}  class="profile-page pb-[83px]">
  <section class="relative block h-500-px">
    <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"}}>
      <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ('0px')"}}>
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div onClick={()=> setactiveSyndicate(false)} className="absolute top-4 left-4 text-[#f9f8f8] text-2xl flex items-center gap-x-4"><FaArrowLeft/> <span className="">back</span></div>
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
              <div   className="  py-6 sm:mt-12 md:-mt-4 sm:px-20 md:px-0  w-full flex justify-center">
                <button onClick={()=> handleFollow(syndicate._id)} class="bg-pink-500 w-full sm:max-w-2xl  active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-base tracking-wide pr-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  <FollowStatus/>
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

if(activeSyndicate){
  return(
    <SyndicatePage avatar={urlFor(activeSyndicate.avatar)} syndicate={activeSyndicate}/>
  )
}

if(hostpage){
  return(
   <HostPage avatar={urlFor(hostpage?.avatar).width(512).height(512)} host={hostpage}/>
  )
}

if(!coinvestors){
  return(
    <div className="flex h-screen justify-center items-center pb-20">
      <span>
       <ScaleLoader
        width={30}
        color={'#00c4ee'}/>
    </span>
    </div>
  )
}



  return (
    <>
    <div className="py-16 md:py-0  bg-scroll">
     <div className="container relative h-screen overflow-y-scroll mx-auto max-w-5xl p-2 space-y-4">
 <div className="fixed bg-white left-0 right-0 z-[80] top-0 w-full"><Tabs setactive={handleTabs} section1={'For you'} section2={'Following'} tab1={foryou} tab2={following} /></div>
      <div>
        {
          foryou ? <ForYou/> : <Following/>
        }
      </div>

     </div>
     <InformationModal modal={modal} setmodal={setmodal} question={question} answer={answer}/>
    </div>
    </>
  )
}

export default MobileHub


