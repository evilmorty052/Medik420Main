
import Dynamicnav from '../partials/Dynamicnav'
import { LandingPage, Hero } from './SmallBiz'
import Header from '../partials/Header'
import { newuser, fetch } from '../utils/init-firebase'
import AnimatedSidebar from '../components/AnimatedSidebar'
import { Navbar } from '../components'


const Digitalfarming = () => {
const [isexpanded, setisexpanded] = useState(false)
let notifications = [
  {
    title: 'message 1',
    message: 'Persistence is Key',
    _key:   '1',
    read:  true,
  },
  { _key:   '2',
    title: 'message 2',
    read:  false,
    message: 'You Improved By learning A lot'
  }
]

const links = [
  {
  title: 'Home',
  // icon:  <FaHome/>

},
  {
  title: 'Investing'
},
  {
  title: 'Shop'
},
  {
  title: 'Subscribe'
},
]
function opensidebar(params) {
  isexpanded?  setisexpanded(false) : setisexpanded(true)
  // console.log('clicked')
  }
  return (

    <div className='bg-plat relative flex flex-col'>
    {/* <Dynamicnav/> */}
    <Navbar open={opensidebar} />
     <AnimatedSidebar
     isExpanded={isexpanded}/>
     <div onClick={()=> isexpanded && setisexpanded(false)} className='mt-10'>
     <LandingPage/>
    </div>
    </div>
  )
}

export default Digitalfarming