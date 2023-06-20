import { Avatar } from "antd"
import { client, urlFor } from "../../../lib/client"
import { Infobutton, VerifiedUser } from "./Elements"
import { FaArrowLeft } from "react-icons/fa"
import { useParams } from "react-router-dom"
import { startupstab } from "../../assets"
import useFetch from "../../hooks/useFetch"
import { Line, Bar } from 'react-chartjs-2';



export const HostPage = ({ avatar}) => {

  const id = useParams()
  const query = `*[_type == 'members' && _id == "${id.id}"]`

  const host = useFetch(query,'[memberquery]')
  console.log(host)


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
  
    const RecentInvestments = ({investments}) => {
  
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
                                  Status:{" "}{status}
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
       
      return(
          <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
          <div class="flex items-center justify-between mb-4">
              <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
             <Infobutton/>
         </div>
         <div  class="flow-root my-4">
              <ul  role="list" class="divide-y divide-gray-200 ">
                   {investments?.map((investment)=>{
            return(
              <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
            )
           })}
              </ul>
         </div>
         <div className="">
             <div>
                 <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
                 <p className="text-2xl font-bold text-gray-800">$0.00</p>
             </div>
         </div>
      </div>
      )
  }
  
  const RecentActivities = ({activities}) => {
  
    const Activity = ({name, amount, avatar, status}) => {
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
                                Status:{" "}{status}
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
     
    return(
        <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">Recent Activity</h5>
           <Infobutton/>
       </div>
       <div  class="flow-root my-4">
            <ul  role="list" class="divide-y divide-gray-200 ">
                 {activities?.map((investment)=>{
          return(
            <Activity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
          )
         })}
            </ul>
       </div>
       <div className="">
           <div>
               <h3 className="text-[18px] text-gray-600 font-semibold">Requests:</h3>
               <p className="text-2xl font-bold text-gray-800">0</p>
           </div>
       </div>
    </div>
    )
  }
  
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
   
  if (!host) {
    
    return <h3>...loading</h3>
  }
  
    return (
      <>
        {/* <main ref={ref}  class="profile-page pb-[83px]">
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
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div class="mb-2 text-blueGray-600 mt-2 sm:mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a
                    warm, intimate feel with a solid groove structure. An
                    artist of considerable range.
                  </p>
                  <a href="#pablo" class="font-normal text-pink-500">Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div id="bottom" className="py-4 px-4"> <h3 className={styles.sectionSubHeading}>Recent Investments</h3></div>
     
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
       </main> */}

        <div className="flex flex-col container max-w-7xl border-b pb-10 border-black/10 relative">
          {/* {backButton} */}

          <div
            onClick={() => sethostpage(false)}
            className="absolute top-0 left-4 text-blk text-2xl flex items-center gap-x-4"
          >
            <FaArrowLeft /> <span className="">back</span>
          </div>

          {/* {profilecoverimage} */}

          <div className="absolute top-10 w-full h-[140px]">
            <img
              src={startupstab}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* {profileimage} */}

          <div className="absolute top-[130px] flex justify-center w-full overflow-hidden  ">
            <Avatar size={100} src={`${avatar}`} />
          </div>
          <div></div>

          <div className="pt-[250px]  flex flex-col items-center gap-4">
            {/* {usernameBlock} */}

            <div className="flex gap-x-2">
              <h3 className="text-xl font-semibold text-blk">
                {host?.[0].firstname} {host?.[0].lastname}
              </h3>
              <VerifiedUser />
              {/* <p>{host?.username}</p> */}
            </div>

            {/* {statistics} */}

            <div class="flex justify-center  ">
              <div class="mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  {host[0].followers?.length}
                </span>
                <span class="text-sm text-blueGray-400">Followers</span>
              </div>
              <div class="mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  {host[0].investments?.length}
                </span>
                <span class="text-sm text-blueGray-400">Investments</span>
              </div>
              <div class="lg:mr-4 p-3 text-center">
                <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                  {!host.partners ? "0" : host?.[0].partners.length}
                </span>
                <span class="text-sm text-blueGray-400">Partners</span>
              </div>
            </div>

            {/* {followButton} */}

            <div className="w-full px-2 lg:px-20">
              <button className="btn">Follow</button>
            </div>

            {/* {Additional Details} */}

            <div className="space-y-2 px-2 self-start sm:flex sm:space-x-4 sm:items-center lg:px-10">
              <div class="text-sm leading-normal mt-0 mb-2 sm:mb-0 sm:mt-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div class="mb-2 text-blueGray-600  sm:mt-0 sm:mb-0">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager
              </div>
            </div>
          </div>

          {/* {RecentInvestments} */}

          <div className="pt-8 px-2 md:px-10 ">
            <div className="sm:flex justify-center  w-full mx-auto">
              <RecentInvestments investments={host?.[0].investments} />
            </div>
          </div>

          {/* {Recentactivities} */}
          <div className="pt-8 pb-[93px] px-2 md:px-10 ">
            <div className="sm:flex justify-center  w-full mx-auto">
              <RecentActivities />
            </div>
          </div>
        </div>
      </>
    );
  }


  const Following = () => {
    const [followed, setfollowed] = useState(null)
    const [syndicates, setsyndicates] = useState(null)
    const [holder, setholder] = useState(true)
    const [followedProfile, setFollowedProfile] = useState(null)
    const [followedProfileModal, setfollowedProfileModal] = useState(null)
    
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
    
    const FollowedActionsModal = ({ modal, setmodal, sethost, addhost }) => {
      return (
        <>
          {modal && (
            <div
              id={"maincontainer"}
              onClick={(e) => {
                console.log(e.currentTarget.id);
                if (e.currentTarget.id.includes("modal")) {
                  console.log(e.currentTarget.id);
                }
                setmodal(false);
              }}
              className="fixed z-[90000000] inset-0 bg-gray-800/10  "
            >
              <div className="flex h-full w-full relative justify-center items-center">
                <motion.div
                  
                  className="absolute sidebar flex p-4  rounded-t-2xl bottom-0 left-0 right-0 h-96 bg-white z-[90000001] "
                >
                  <div className="flex flex-col justify-between w-full ">
                    <div className="gap-y-6 flex flex-col">
                      <div onClick={() => sethostpage(followedProfile)} className="flex gap-x-2 items-center">
                        <FaEye />
                        <h3 className="text-base text-blk font-bold">
                          View {followedProfile?.username} Profile
                        </h3>
                      </div>
    
                      <div onClick={addhost} className="flex gap-x-2 items-center">
                        <FaPlusCircle />
                        <h3 className="text-base text-blk font-bold">
                          Add {followedProfile?.username} to Hive
                        </h3>
                      </div>
    
                      <div className="flex gap-x-2 items-center">
                        <FaBookmark />
                        <h3 className="text-base text-blk font-bold">
                          Bookmark this Partnership
                        </h3>
                      </div>
    
                      <div className="flex gap-x-2 items-center">
                        <FaBan />
                        <h3 className="text-base text-blk font-bold">
                          Block {followedProfile?.username}
                        </h3>
                      </div>
    
                      <div className="flex gap-x-2 items-center">
                        <FaFlag />
                        <h3 className="text-base text-blk font-bold">
                          Report {followedProfile?.username}
                        </h3>
                        {/* <h3 className="text-base text-blk font-bold">Report {targetProfile?.username}</h3> */}
                      </div>
                    </div>
                    <button onClick={() => setmodal(false)} className="btnHollow">
                      Cancel
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </>
      );
    };
    
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
       <div className="pb-[93px] ">
       <div className="px-4 md:hidden">
            <div className="flex  items-center space-x-2 p-2 bg-gray-200 rounded-xl">
                 <FaSearch/>
                 <hr className="w-px  h-6 bg-blk mx-4" />
                 <input placeholder="Search hosts, startups" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
            </div>
            </div>
           <div className="flex flex-col gap-y-4 pt-10">
           {/* <div className="flex gap-y-4 flex-col">
                {syndicates?.map((syndicate)=>{
                  return(
                    <>
                    <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                    </>
                  )
                })}
           </div> */}
           <div className="flex flex-col gap-y-8">
            <>
            {followed?.map((coinvestor)=>{
              return(
                <>
                  {/* {MobileSetion} */}
    
                      <div className=" hiddenfromtabupwards">
                      <MobileSharedInvestmentCard key={coinvestor._id}
                hostname={coinvestor.username} 
                duration={coinvestor.duration} 
                type={coinvestor.type}
                raised={coinvestor.raised} 
                budget={coinvestor.budget}
                roi={coinvestor.roi}
                avatar={urlFor(coinvestor.avatar)}
                join={()=> handleJoin(coinvestor._id)}
                viewhost={() => {
                  sethostpage(followedProfile)
                  setmoreActions(null)
                  }}
                  friend={coinvestor.username}
                  setTargetProfile={()=> {
                    setFollowedProfile(coinvestor)
                    setfollowedProfileModal(true) 
                    // setmoreActions(true)
                  }}
                 />
                      </div>
    
                      {/* {laptopsection} */}
            
                      <div className="hidden md:block">
                      <SharedInvestmentCard key={coinvestor._id}
                hostname={coinvestor.username} 
                duration={coinvestor.duration} 
                type={coinvestor.type}
                raised={coinvestor.raised} 
                budget={coinvestor.budget}
                roi={coinvestor.roi}
                avatar={urlFor(coinvestor.avatar)}
                join={()=> handleJoin(coinvestor._id)}
                viewhost={() => {
                  sethostpage(followedProfile)
                  
                  }}
                  friend={coinvestor.username}
                  setTargetProfile={()=> {
                    setFollowedProfile(coinvestor)  
                    
                  }}
                 />
                      </div>
                </>
              )
            })}
            </>
           </div>
           </div>
        <FollowedActionsModal  modal={followedProfileModal}  setmodal={setfollowedProfileModal}/>
       </div>
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

    const Feed = ({syndicatesonly}) => {
      // const [syndicates, setsyndicates] = useState(null)
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
    
      // async function fetchSyndicates(params) {
      //   const query = `*[_type == 'syndicates']{...,investments[]{..., startup ->{image, name}}}`
      //   const syndicates = await client.fetch(query).then(res => res)
      //   setsyndicates(syndicates)
      // }
    
      
    
      const SyndicatesGrid = () => {
        return(
          <>
            <div className="flex gap-y-4 flex-col w-full max-w-sm">
                <div className={`px-2`}><h3 className="text-blk font-semibold text-lg " onClick={() =>{
                  handleModal('What Is A Syndicate ?', `${explainers.syndicatequestion.answer}`)
                }}>Trending Syndicates</h3></div>
                <div className="flex gap-y-5 flex-col md:items-center ">
                {mocksyndicates?.map((syndicate)=>{
                  return(
                    <>
                    <Syndicatecard follow={()=> handleFollow(syndicate._id)} view={()=>{handleViewSyndicate(syndicate)}} name={syndicate.name} image={urlFor(syndicate.avatar)}/>
                    </>
                  )
                })}
                </div>
           </div>
          </>
        )
      }
      const CoinvestorsGrid = () => {
        return(
          <>
          
    { syndicatesonly &&  <div onClick={() => handleModal('Shared investments ?', `${explainers.sharedPortfolioQuestion.answer}`) } className={'py-4 px-2'}><span className="text-blk text-lg font-semibold" >Recommended Hosts</span></div>
    }        <div>
            <>
            <div  className="flex flex-col items-center gap-y-8 md:px-2 pt-4 w-full  ">   
            {mockMembers?.map((coinvestor)=>{
              return(
              <>
              <div className="w-full pb-4 border-b border-b-black/20 hiddenfromtabupwards ">
                    <MobileSharedInvestmentCard
                hostname={coinvestor.firstname + " " + coinvestor.lastname} 
                username={coinvestor.username}
                duration={coinvestor.duration} 
                type={coinvestor.type}
                raised={coinvestor.raised} 
                budget={coinvestor.budget}
                roi={coinvestor.roi}
                avatar={urlFor(coinvestor.avatar)}
                join={()=> handleJoin(coinvestor._id)}
                viewhost={() => {
                  sethostpage(targetProfile)
                  setmoreActions(null)
                  }}
                setTargetProfile={()=> {
                  settargetProfile(coinvestor)
                  // sethostpage(coinvestor)
                  setmoreActions(true)
                  console.log(coinvestor.username)
                  
                }}
                // sethost={()=> sethostpage(coinvestor) }
                func={()=> handleChannelCreate(coinvestor.firstname.toString().toLowerCase())} />
              </div>
    
    
              {/* {laptopcard} */}
    
    
              <div className="w-full hidden md:block  ">
              <SharedInvestmentCard
          hostname={coinvestor.firstname + " " + coinvestor.lastname} 
          username={coinvestor.username}
          duration={coinvestor.duration} 
          type={coinvestor.type}
          raised={coinvestor.raised} 
          budget={coinvestor.budget}
          roi={coinvestor.roi}
          avatar={urlFor(coinvestor.avatar)}
          join={()=> handleJoin(coinvestor._id)}
          viewhost={() => {
          sethostpage(targetProfile)
          setmoreActions(null)
          }}
          friend={coinvestor.username}
          setTargetProfile={()=> {
            settargetProfile(coinvestor)
            // sethostpage(coinvestor)
            console.log(coinvestor.username)
            
          }}
          // sethost={()=> sethostpage(coinvestor) }
          func={()=> handleChannelCreate(coinvestor.firstname.toString().toLowerCase())} />
        </div>
              </>
              )
            })}
            </div>
            </>
           </div>
          </>
        )
      }
    
      const FollowGrid = () => {
    
        const FollowCard = ({name, avatar, func, username}) => {
          return(
            <div>
                <div className="flex items-center">
                <img src={avatar} className='h-10 w-10 rounded-full object-cover' alt="" />
                 <div className="flex-1 mx-2">
                 <p className="text-blk font-semibold text-sm">{name}</p>
                  <p className="text-xs  text-gray-600">{username}</p>
                 </div>
                <button className="bg-green-300 px-2 py-1 min-w-[32px] rounded-xl text-xs">Follow</button>
                </div>
            </div>
          )
        }
    
        return(
         <>
           <div className="p-2">
              <h3 className="text-lg font-semibold text-blk">Who to follow</h3>
           </div>
          <div className="px-2">
          <div className="flex flex-col gap-y-8 py-4 px-4 bg-[#f7f9f9] rounded-xl">
              {
                mockMembers.map((member)=>(
                  <FollowCard 
                  name={member.firstname}
                  avatar={urlFor(member.avatar)}
                  username={member.username}
    
                  />
                ))
              }
           </div>
          </div>
         </>
        )
      }
    
      const Header = () => {
        return(
          <>
          <div className="px-4 md:flex justify-center ">
            <div className="flex w-full md:max-w-xl items-center space-x-2 p-2 bg-gray-100 rounded-xl">
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
    
      // 
      // if(!syndicates | !coinvestors){
      //   return (
      //     <div className="flex h-screen justify-center items-center pb-20">
      //     <span>
      //      <ScaleLoader
      //       width={30}
      //       color={'#00c4ee'}/>
      //   </span>
      //   </div>
      //   )
      // }
    
      if (syndicatesonly) {
        return(
         <>
          <SyndicatesGrid/>
          <FollowGrid/>
         </>
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
       <div className="pb-[93px] md:pb-0 md:min-w-[500px] max-w-[700px] md:max-w-[600px]">
      {/* <div className="sticky hidden md:block  bg-white left-0 right-0 z-[80000] top-0 w-full"><Tabs setactive={handleTabs} section1={'For you'} section2={'Following'} tab1={foryou} tab2={following} /></div> */}
      <div className="md:hidden">
      <Header/>
      </div>
      <div className="w-full md:hidden pt-4">
        <Filters/>
      </div>
           <div className="flex flex-col gap-y-4 ">
        {syndicatesGrid  && <SyndicatesGrid/>  }  
         {coInvestorsGrid  && <CoinvestorsGrid/>}
           </div>
           <div className="flex flex-col gap-y-4 ">
        { !coInvestorsGrid && !syndicatesGrid && <>
          {/* <SyndicatesGrid/>     */}
          <CoinvestorsGrid/>
          </>
          }
           </div>
       </div>
        </>
      )
    }


export function FundingChart({investmentfigures, revenuefigures}) {
      const data = {
        labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
        datasets: [
          {
            label: 'Investment',
            data: investmentfigures,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Revenue',
            data: revenuefigures,
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
        <div className='w-full text-center max-h-[400px] py-4 flex flex-col items-center'>
          <div className='flex justify-center gap-x-4 mb-4 '>
           <h3 className="text-2xl text-blk ">
            Revenue Chart
           </h3>
          </div>
        <Bar data={data} options={options} />
        </div>
        </>
      )
    }