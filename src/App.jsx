import { useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom';

import './index.css'
import {Loader} from "./components"

// Import pages
// import Home  from './Home'
// import Smart from './pages/invest/Smartpofolio'
// import Hive from './pages/Hive';
// import Path from './pages/Path';
// import Jobs from './pages/Jobs';
// import Team from './pages/Team';
// import Log from './pages/log';
// import Digitalfarming from './pages/Digitalfarming';
// import HiveLanding from './pages/HiveLanding';
// import HiveBiz from './pages/HiveBiz';
import {Bem} from './pages/index'
// import DashboardScreen from './partials/dashboard/DashboardScreen';
// import DashboardPricing from './partials/dashboard/DashboardPricing';
import {PublicRoutes, RegistrationRoutes} from './routes'

const Home = lazy(()=> import('./Home'))
const Jobs = lazy(()=> import('./pages/Jobs'))
const Team = lazy(()=> import('./pages/Team'))
const Smart = lazy(()=> import('./pages/invest/Smartpofolio'))
const Path = lazy(()=> import('./pages/Path'))
const Log = lazy(()=> import('./pages/log'))
const Digitalfarming = lazy(()=> import('./pages/Digitalfarming'))
const HiveLanding = lazy(()=> import('./pages/HiveLanding'))
const HiveBiz = lazy(()=> import('./pages/HiveBiz'))
const DashboardScreen = lazy(()=> import('./partials/dashboard/DashboardScreen'))
const DashboardPricing = lazy(()=> import('./partials/dashboard/DashboardPricing'))


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
   
    {/* <Routes>
      <Route exact path="/bem" element={<Bem/>} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/hive" element={<HiveLanding />} />
        <Route exact path="/hivebiz" element={<HiveBiz />} />
        <Route exact path="/test/*" element={<Test />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/profile" element={<ProfileSettingsPage/>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/path" element={<Path />} />
        <Route exact path="/advisor/*" element={<Advisor />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/enlist/*" element={<AgentEnlist />} />
        <Route exact path="/login" element={<Log/>} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/login3" element={<Confirmsignin />} />
        <Route exact path="/setpin" element={<SetPin/>} />
        <Route exact path="/newuser" element={<Newuser/>} />
        <Route exact path="/register/*" element={<Registerpage1/>} />
        <Route exact path="/digital" element={<Digitalfarming/>} />
        <Route exact path="/smallbiz" element={<SmallBiz/>} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/hiveai" element={<Hive />} />
        <Route exact path="/invest" element={<Investing />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/retirement" element={<Retirement/>} />
        <Route exact path="/smart" element={<Smart />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/pick" element={<ServicePicker />} />
        <Route exact path="/withdraw" element={<Withdrawal />} />
        <Route exact path="/coach" element={<Coach />} />
        <Route path="/agents" element={<Agents />} ></Route>
        <Route path="/agentprofile/*"  element={<Outlet/>} >
        <Route path=":agentid" element={<Agentprofile />} ></Route>
        </Route>
            <Route path ="/dashboard/*" element={<DashboardScreen />} />
            <Route path ="/pricing" element={<Pricing />} />
   </Routes>  */}
   <Routes>
              {/* PublicRoutes */}
        <Route path="/" element={<PublicRoutes/>}>
        <Route index element={<Suspense><Home fallback={<Loader/>}/></Suspense>} />
        <Route path="smart" element={<Suspense><Smart/></Suspense>} />   
        <Route path="digital" element={<Suspense><Digitalfarming/></Suspense>} />
        <Route path="bem" element={<Bem/>} />
        <Route path="pricing" element={<Suspense><DashboardPricing/></Suspense>} />
        <Route path="team" element={<Suspense><Team/></Suspense>} />
        
        <Route path="hive" element={<Suspense><HiveLanding/></Suspense>} />
        <Route path="hivebiz" element={<Suspense><HiveBiz/></Suspense>} />
        </Route>
        
        <Route path="jobs/*" element={<Suspense><Jobs/></Suspense>} />

        <Route  path="/path" element={<Suspense><Path /></Suspense>} />
                {/* registration routes */}             
        <Route>
          <Route path='register/*' element={<RegistrationRoutes/>} />
        </Route>

        <Route path='/login' element={<Suspense><Log/></Suspense>} />

                  {/* dasboard routes */}
        <Route path='dashboard/*' element={<Suspense><DashboardScreen/></Suspense>}/>
    </Routes>
    </>
  
  );
}

export default App;


