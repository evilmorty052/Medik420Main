import { Route, Routes } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import {BottomNavigation, MobileDashboard, MobilePortfolio, MessageScreen, MobileHub, MessageUi, Withdraw, StocksScreen, DigitalFarmPage, DigitalFarmShop} from "./index"
import { urlFor } from "../../../lib/client"
import { LaptopDisplay } from "../../components"
import { LaptopDashboard } from "../../components/Dashboard/LaptopDisplay"


const DashboardScreen = () => {
const emailID = localStorage.getItem('email')
let query = `*[email == "${emailID}"]`
const user = useFetch(query,'[currentuser]')
const userdetails = {...user?.[0]}
// console.log(userdetails)

const {avatar, firstname, lastname, transactions, accounts, claimed} = userdetails

// if(!user){
//     return(
//         <>
//         <Loader/>
//         </>
//     )
// }
 

  return (
    <>
    {/* <Header/> */}
   
   <div className="min-h-screen  bg-white sm:block md:hidden">
   <Routes>
        <Route key={'jg'} path="dashboard/*" element={<MobileDashboard  accounts={accounts}  claimed={claimed} transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route key={'kk'} path="/" element={<MobileDashboard    accounts={accounts} claimed={claimed} transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route key={'ik'} path="/portfolio/*" element={<MobilePortfolio portfolios={accounts}/>} />
        <Route key={'ik'} path="/stocks/*" element={<StocksScreen/>} />
        <Route key={'ll'} path="/messages/*" element={<MessageUi/>} />
        <Route key={'llj'} path="/hub" element={<MobileHub/>} />
        <Route key={'llj'} path="/withdraw/*" element={<Withdraw accounts={accounts}/>} />
        <Route key={'llj'} path="/digitalfarm/*" element={<DigitalFarmPage/>} />
        <Route key={'llj'} path="/digitalfarmshop/*" element={<DigitalFarmShop/>} />
    </Routes>
   </div>
    <BottomNavigation/>

    
    <div className=" hidden md:block bg-white">
   <Routes>
        <Route key={'jg'} path="dashboard/*" element={
        <LaptopDisplay>
           <LaptopDashboard/>
        </LaptopDisplay>} />
        {/* <Route key={'kk'} path="/" element={<MobileDashboard    accounts={accounts} claimed={claimed} transactions={transactions} firstname={firstname} lastname={lastname}/>} /> */}
        <Route key={'kk'} path="/" element={
        <LaptopDisplay>
           <LaptopDashboard/>
        </LaptopDisplay>} />
        <Route  path="/portfolio/*" element={
         
         <MobilePortfolio portfolios={accounts}/>
       
        
        } />
        <Route key={'ll'} path="/messages/*" element={<MessageUi/>} />
        <Route key={'llj'} path="/hub" element={
          <LaptopDisplay>
          <MobileHub/>
        </LaptopDisplay>
        } />
        <Route key={'llj'} path="/withdraw/*" element={
        <LaptopDisplay>
          <Withdraw accounts={accounts}/>
        </LaptopDisplay>
        } />
      <Route  path="/stocks/*" element={
      <LaptopDisplay>
   <StocksScreen/>
    </LaptopDisplay>} />
    </Routes>
   </div>
    </>
  )
}




export default DashboardScreen