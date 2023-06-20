import { useState, useEffect, useLayoutEffect} from "react";
import { FaBriefcase, FaComments, FaCreditCard, FaGlobe, FaHeart, FaHome, FaLeaf,  } from "react-icons/fa";
import { Link , NavLink, useLocation} from "react-router-dom";


function BottomNavigation  ({func}) {
   const path = useLocation().pathname
   const [invisible, setinvisible] = useState(false)
   
 const handleActive = () => {
  switch (path) {
    case '/dashboard/Dashboard':
      setActive(2)
      setinvisible(false)
      break;
    case '/dashboard/Portfolio/coin':
      setinvisible(true)
      break;
    
      case '/dashboard/portfolio/setup':
      setinvisible(true)
      break;

    case '/dashboard/portfolio':
      setActive(1)
      setinvisible(false)
      break;
    
      case '/dashboard/stocks':
      setActive(1)
      setinvisible(false)
      break;
      
      case '/dashboard/stocks/stock':
      setinvisible(true)
      break;
      
      case '/dashboard/digitalfarm':
      setinvisible(true)
      break;
      
      case '/dashboard/digitalfarmshop':
      setinvisible(true)
      break;
    
      case '/dashboard/Portfolio/portfolio':
      setinvisible(true)
      break;
      
      case '/dashboard/Portfolio/startups':
      setinvisible(true)
      break;
      
      case '/dashboard/Portfolio/syndicates':
      setinvisible(true)
      break;
      
      case '/dashboard/profile':
      setinvisible(true)
      break;
     
      case '/dashboard/Portfolio/crypto':
      setinvisible(true)
      setActive(1)
      break;
    
      case '/dashboard/hub':
      setActive(0)
      setinvisible(false)
      break;
      
      case '/dashboard/Withdraw':
      setActive(3)
      setinvisible(false)
      break;
      
      case '/dashboard/Messages':
      setActive(4)
      setinvisible(true)
      break;
      
      case '/dashboard/Messages/chat':
      setinvisible(true)
      break;
  
    default:
      
      break;
  }
 }
   
   
   useEffect(() => {
    handleActive()
   }, [path])
   

    // const Menus = [
    //   { name: "Hub", icon: "globe-outline", dis: "translate-x-0" },
    //   { name: "Portfolio", icon: "person-outline", dis: "translate-x-16" },
    //   { name: "Dashboard", icon: "home-outline", dis: "translate-x-32" },
    //   { name: "Withdraw", icon: "cash-outline", dis: "translate-x-48" },
    //   { name: "Messages", icon: "chatbubbles-outline", dis: "translate-x-64" },
    // ];
    const Menus = [
      { name: "Hub", icon: <FaGlobe/>, dis: "translate-x-0" },
      { name: "Portfolio", icon: <FaBriefcase/>, dis: "translate-x-16 sm:translate-x-32" },
      { name: "Dashboard", icon: <FaHome/>, dis: "translate-x-32" },
      { name: "Withdraw", icon: <FaCreditCard/>  , dis: "translate-x-48" },
      { name: "Digitalfarm", icon: <FaLeaf/>, dis: "translate-x-64" },
    ];
    const [active, setActive] = useState(2);

    const [ActivePage, setActivePage] = useState()


    return (
      <>
      
      {!invisible && <div className="bg-[#f9f8f8] max-h-[4.4rem] z-10 px-2   fixed bottom-0 w-full ss:hidden  border-t border-slate-200 shadow-xl">
        <ul className="flex relative min-w-[339px] justify-between">
          {/* <span
            className={`bg-transparent duration-500  ${Menus[active].dis} border-2 border-gray-400 h-16 w-16 absolute
           -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
            rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
            rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span> */}
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col items-center justify-center text-center py-4"
                onClick={() => {
                  setActive(i)
                  
                  func}}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && " text-green-400 "
                  }`}
                >
                
                <Link to={menu.name == "Dashboard" ? '/dashboard' : `/dashboard/${menu.name.toLowerCase()}`}> {menu.icon} </Link> 
                </span>
                {/* <span
                  className={` ${
                    active === i
                      ? "translate-y-4 text-gray-800 font-extrabold duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span> */}
              </a>
            </li>
          ))}
        </ul>
      </div>}

      {/* <div className="fixed bottom-0 w-full bg-gray-50 h-[49px]">
         <div className="flex justify-between  h-full px-4 py-1">
         {Menus.map((link, i)=>(
          <>
          <div className="flex flex-col">
          <NavLink onClick={()=> setActive(i)} className={` flex flex-col items-center text-center justify-end py-1 text-xl ${active == i && 'text-green-400  -translate-y-[12px] '}`} to={`${link.name.toLowerCase()}`}>
            {link.icon}
          </NavLink>
            {i == active && <span className={`${i == active ? '-translate-y-4 text-xs' : '-translate-y-0 text-xs'}`}>{link.name}</span>}
          </div>
          </>
         ))}
         </div>
      </div> */}

      {/* tablet Version */}

      {!invisible && <div className="bg-gray-100 max-h-[4.4rem] z-10 px-6 mt-10 fixed bottom-0 w-full hidden ss:block md:hidden rounded-t-xl">
        <ul className="flex w-full justify-between relative md:hidden ">
          {/* <span
            className={`bg-transparent duration-500  ${Menus[active].dis} border-2 border-gray-400 h-16 w-16 absolute
           -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
            rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
            rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span> */}
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col items-center justify-center text-center pt-6"
                onClick={() => {
                  setActive(i)
                  
                  func}}
              >
                <span
                  className={`text-2xl sm:text-3xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-green-400 sm:text-[36px] "
                  }`}
                >
                {/* <Link to={`/dashboard/${menu.name}`}> <ion-icon name={menu.icon}></ion-icon></Link>  */}
                <Link to={`/dashboard/${menu.name.toLowerCase()}`}> {menu.icon} </Link> 
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 text-gray-800 font-extrabold duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>}
      </>
    );
  };

  export const BottomNavigation2 = ({invisible, setinvisible}) => {
    // const [invisible, setinvisible] = useState(false)
    const [active, setActive] = useState(2);
    const path = useLocation().pathname

    const handleActive = () => {
      switch (path) {
        case '/dashboard/Dashboard':
          setActive(2)
          setinvisible(false)
          break;
        case '/dashboard/Portfolio/coin':
          setinvisible(true)
          break;
        
          case '/dashboard/portfolio/setup':
          setinvisible(true)
          break;
    
        case '/dashboard/portfolio':
          setActive(1)
          setinvisible(false)
          break;
        
          case '/dashboard/stocks':
          setActive(1)
          setinvisible(false)
          break;
          
          case '/dashboard/stocks/stock':
          setinvisible(true)
          break;
          
          case '/dashboard/digitalfarm':
          setinvisible(true)
          break;
          
          case '/dashboard/digitalfarmshop':
          setinvisible(true)
          break;
        
          case '/dashboard/Portfolio/portfolio':
          setinvisible(true)
          break;
          
          case '/dashboard/Portfolio/startups':
          setinvisible(true)
          break;
          
          
          case '/dashboard/profile':
          setinvisible(true)
          break;
         
          case '/dashboard/portfolio/crypto':
          setinvisible(true)
          setActive(1)
          break;
        
          case '/dashboard/hub':
          setActive(0)
          setinvisible(false)
          break;
          
          case '/dashboard/Withdraw':
          setActive(3)
          setinvisible(false)
          break;

          // case '/dashboard/withdraw/transfer':
          // setinvisible(true)
          // break;
          
      
        default:
          setinvisible(false)
          
          break;
      }
     }
       
  
       
      //  useEffect(() => {
      //   handleActive()
      //  }, [path])


    return(
      <>
      {!invisible &&
      <div className={`fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ${path.includes('hub') && 'sm:hidden' } hiddenfromtabupwards`}>
      <div class="grid h-full max-w-2xl grid-cols-5 mx-auto font-medium">
  
          {/* hub button */}
          <NavLink to={'/dashboard/hub'}  type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
          <FaGlobe style={{ height: '20px' , width:'20px', color:'gray', marginBottom: '4px'}}/>
              <span class={`text-sm text-gray-500 ${path.includes('hub') && 'text-green-400'}`}>Hive</span>
          </NavLink>
          
          {/* Portfolio button */}
          <NavLink to={'/dashboard/portfolio'}  type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
              <FaBriefcase style={{ height: '20px' , width:'20px', color:'gray', marginBottom: '4px'}}/>
              <span class={`text-sm text-gray-500 ${path.includes('portfolio') ? 'text-green-400' : ''}`}>Portfolio</span>
          </NavLink>
          
          {/* home button */}
          <NavLink to={'/dashboard'} type="button"  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
              {/* <svg class="w-6 h-6 mb-1 text-gray-500   " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg> */}
              <FaHome style={{ height: '20px' , width:'20px', color:'gray', marginBottom: '4px'}}/>
              <span class={`text-sm text-gray-500 ${path == '/dashboard' && 'text-green-400'}`}>Home</span>
          </NavLink>
           
           {/* farm button */}
          <NavLink to={'/dashboard/withdraw'} type="button"  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
               <FaCreditCard style={{ height: '20px' , width:'20px', color:'gray', marginBottom: '4px'}}/>
              <span class={`text-sm text-gray-500 ${path == '/dashboard/withdraw' && 'text-green-400'}`}>Withdraw</span>
          </NavLink>
         
          <NavLink to={'/dashboard/digitalfarm'} type="button" end className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group">
               <FaLeaf style={{ height: '20px' , width:'20px', color:'gray', marginBottom: '4px'}}/>
              <span class={`text-sm text-gray-500 ${path == '/dashboard/digitalfarm' && 'text-green-400'}`}>Farms</span>
          </NavLink>
      </div>
  </div>}
      </>
    )
  }

  export default BottomNavigation