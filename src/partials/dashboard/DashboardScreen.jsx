import { Route, Routes } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import {MobileDashboard, MobilePortfolio, MobileHub, Withdraw, StocksScreen, DigitalFarmPage, DigitalFarmShop, BottomNavigation2, Hub} from "./index"
import { urlFor } from "../../../lib/client"
import { LaptopDisplay } from "../../components"
import { LaptopDashboard } from "../../components/Dashboard/LaptopDisplay"
import './MobilePortfolio.css'
import { MobileSettings, Settings } from "../../pages/Settings"
import { GetVerified } from "./Elements"
import Sidebar from "../Sidebar2"
import { useState, useContext } from "react"
import {SidebarContext} from "../../contexts/SidebarContext"
import BottomNavigationProvider from "../../contexts/BottomNavigationContext"
import { ProfileSettingsPage } from "../../pages"


const DashboardScreen = () => {
const emailID = localStorage.getItem('email')
let query = `*[email == "${emailID}"]`
const user = useFetch(query,'[currentuser]')
const userdetails = {...user?.[0]}


const mockuser = [
  {
    claimed: true,
    liked: [
      {
        _key: "09mZ8JKNTkhbsHJwBRfrHe",
        _ref: "fc435215-82d6-4e74-8c47-f06c18e6261a",
        _type: "reference",
      },
      {
        _ref: "fc435215-82d6-4e74-8c47-f06c18e6261a",
        _type: "reference",
        _key: "G2b3kkMQFyacuATmmBEj74",
      },
      {
        _key: "MIZgopCiuLhj5FNZpRRiO8",
        _ref: "fecc2fe5-c5bb-412c-928a-b79d320bbd07",
        _type: "reference",
      },
      {
        _ref: "1a64797f-d82d-4fee-b89f-cd9e94fe27b2",
        _type: "reference",
        _key: "G2b3kkMQFyacuATmmBEjq4",
      },
      {
        _ref: "d1545aa9-3ded-46ae-99a5-30f2e9419d74",
        _type: "reference",
        _key: "MIZgopCiuLhj5FNZpRRlhA",
      },
      {
        _ref: "dbeb9e2b-5bf3-4de4-9047-23c95b4b1c36",
        _type: "reference",
        _key: "09mZ8JKNTkhbsHJwBRg3gK",
      },
      {
        _key: "09mZ8JKNTkhbsHJwBRgTnY",
        _ref: "f13032e2-84ae-4748-93b9-79e3aeedc366",
        _type: "reference",
      },
      {
        _key: "MIZgopCiuLhj5FNZpRS4si",
        _ref: "b9227f2d-06c6-4b0c-8342-3351530e60e9",
        _type: "reference",
      },
      {
        _ref: "6d654f38-8328-4f25-a011-9ebce20856d6",
        _type: "reference",
        _key: "G2b3kkMQFyacuATmmBLYQ4",
      },
      {
        _key: "09mZ8JKNTkhbsHJwBRkCuU",
        _ref: "6d654f38-8328-4f25-a011-9ebce20856d6",
        _type: "reference",
      },
      {
        _ref: "bfe68bbb-7e75-4714-8c47-2c634fe0f718",
        _type: "reference",
        _key: "09mZ8JKNTkhbsHJwBRkG8c",
      },
      {
        _ref: "4c67e8ba-99c0-4411-a491-2731a7f1c52b",
        _type: "reference",
        _key: "huJcb1rQqhucChiuXiMMWW",
      },
      {
        _ref: "d94c997b-5711-42e7-85ac-1246f3360139",
        _type: "reference",
        _key: "huJcb1rQqhucChiuXp5RtQ",
      },
      {
        _ref: "d94c997b-5711-42e7-85ac-1246f3360139",
        _type: "reference",
        _key: "huJcb1rQqhucChiuXp5c24",
      },
    ],
    lastname: "morty",
    _id: "1ea0d8f0-d2b1-44c9-9d82-a04e47ceb237",
    avatar: {
      _type: "image",
      asset: {
        _ref: "image-55227cd7113eef83ed0734a2dda31f679874b614-1080x1080-png",
        _type: "reference",
      },
    },
    plan: "Free Trial",
    _rev: "Q2CHf59mXl0r9bslSoeois",
    earnings: [4500],
    service: "investment",
    investment: 12000,
    firstname: "evil",
    notifications: [
      {
        message:
          "Welcome to Medik 420 upgrade your profile to get exclusive features.",
        title: "Welcome",
        read: true,
        created: "2023-05-30T06:24:10.507Z",
        _key: "6d814404ab48",
      },
      {
        _key: "gZw63UNvt8qZYxoXO2ePpx",
        message: "$10  has been deposited to your personal account",
        title: "$10 Deposit ",
        read: true,
        created: "2023-05-30T10:56:24.659Z",
      },
    ],
    password: "evilmorty2A.",
    region: "Europe",
    transactions: [
      {
        sendername: "Medik 420",
        amount: 10,
        created: "2023-05-30T10:32:14.199Z",
        _key: "be57aa82518c",
        type: "deposit",
        status: "completed",
      },
      {
        amount: 4300,
        created: "2023-05-30T10:32:06.289Z",
        _key: "13b34edd53f7",
        type: "withdrawal",
        status: "completed",
        sendername: "stability.ai",
      },
      {
        status: "completed",
        sendername: "Railway.ai",
        amount: 14000,
        created: "2023-05-30T10:25:06.036Z",
        _key: "dbd72e8028f4",
        type: "deposit",
      },
      {
        status: "completed",
        sendername: "Medik 420",
        amount: 10,
        created: "2023-05-30T10:56:24.658Z",
        _key: "gZw63UNvt8qZYxoXO2ePvn",
        type: "deposit",
      },
    ],
    _type: "users",
    accounts: [
      {
        type: "Kids",
        number: "176877877",
        balance: 12000,
        deployed: true,
        description:
          "Explore stocks startups crypto and invest as you see fit ",
        _key: "a4f9db268d6f",
      },
      {
        balance: 8000,
        deployed: true,
        description: "Get an automatically balanced portfolio in a few clicks",
        _key: "e626b4750e56",
        type: "Smart",
      },
      {
        deployed: true,
        description: "Get an automatically balanced portfolio in a few clicks",
        _key: "fbfeacaa64e42ab49477b518bc995579",
        type: "Retirement",
        balance: 8000,
      },
      {
        balance: 30,
        deployed: true,
        description:
          "Explore stocks startups and crypto and invest as you see fit ",
        _key: "059a720979db",
        type: "Personal",
      },
    ],
    _createdAt: "2022-10-09T15:06:33Z",
    _updatedAt: "2023-06-03T15:32:10Z",
    email: "evilmorty052@proton.me",
  },
  {
    service: "investment",
    friends: [],
    earnings: [4500],
    region: "Europe",
    claimed: true,
    _type: "users",
    transactions: [
      {
        status: "completed",
        sendername: "Medik 420",
        amount: 10,
        created: "2023-05-30T10:32:14.199Z",
        _key: "be57aa82518c",
        type: "deposit",
      },
      {
        status: "completed",
        sendername: "stability.ai",
        amount: 4300,
        created: "2023-05-30T10:32:06.289Z",
        _key: "13b34edd53f7",
        type: "withdrawal",
      },
      {
        _key: "dbd72e8028f4",
        type: "deposit",
        status: "completed",
        sendername: "Railway.ai",
        amount: 14000,
        created: "2023-05-30T10:25:06.036Z",
      },
      {
        status: "completed",
        sendername: "Medik 420",
        amount: 10,
        created: "2023-05-30T10:56:24.658Z",
        _key: "gZw63UNvt8qZYxoXO2ePvn",
        type: "deposit",
      },
    ],
    _updatedAt: "2023-06-09T19:53:25Z",
    email: "evilmorty052@proton.me",
    plan: "Free Trial",
    _id: "drafts.1ea0d8f0-d2b1-44c9-9d82-a04e47ceb237",
    firstname: "evil",
    _createdAt: "2022-10-09T15:06:33Z",
    avatar: {
      _type: "image",
      asset: {
        _ref: "image-55227cd7113eef83ed0734a2dda31f679874b614-1080x1080-png",
        _type: "reference",
      },
    },
    liked: [
      {
        _key: "09mZ8JKNTkhbsHJwBRfrHe",
        _ref: "fc435215-82d6-4e74-8c47-f06c18e6261a",
        _type: "reference",
      },
      {
        _ref: "fc435215-82d6-4e74-8c47-f06c18e6261a",
        _type: "reference",
        _key: "G2b3kkMQFyacuATmmBEj74",
      },
      {
        _key: "MIZgopCiuLhj5FNZpRRiO8",
        _ref: "fecc2fe5-c5bb-412c-928a-b79d320bbd07",
        _type: "reference",
      },
      {
        _ref: "1a64797f-d82d-4fee-b89f-cd9e94fe27b2",
        _type: "reference",
        _key: "G2b3kkMQFyacuATmmBEjq4",
      },
      {
        _key: "MIZgopCiuLhj5FNZpRRlhA",
        _ref: "d1545aa9-3ded-46ae-99a5-30f2e9419d74",
        _type: "reference",
      },
      {
        _ref: "dbeb9e2b-5bf3-4de4-9047-23c95b4b1c36",
        _type: "reference",
        _key: "09mZ8JKNTkhbsHJwBRg3gK",
      },
      {
        _ref: "f13032e2-84ae-4748-93b9-79e3aeedc366",
        _type: "reference",
        _key: "09mZ8JKNTkhbsHJwBRgTnY",
      },
      {
        _type: "reference",
        _key: "MIZgopCiuLhj5FNZpRS4si",
        _ref: "b9227f2d-06c6-4b0c-8342-3351530e60e9",
      },
      {
        _ref: "6d654f38-8328-4f25-a011-9ebce20856d6",
        _type: "reference",
        _key: "G2b3kkMQFyacuATmmBLYQ4",
      },
      {
        _ref: "6d654f38-8328-4f25-a011-9ebce20856d6",
        _type: "reference",
        _key: "09mZ8JKNTkhbsHJwBRkCuU",
      },
      {
        _ref: "bfe68bbb-7e75-4714-8c47-2c634fe0f718",
        _type: "reference",
        _key: "09mZ8JKNTkhbsHJwBRkG8c",
      },
      {
        _ref: "4c67e8ba-99c0-4411-a491-2731a7f1c52b",
        _type: "reference",
        _key: "huJcb1rQqhucChiuXiMMWW",
      },
      {
        _ref: "d94c997b-5711-42e7-85ac-1246f3360139",
        _type: "reference",
        _key: "huJcb1rQqhucChiuXp5RtQ",
      },
      {
        _ref: "d94c997b-5711-42e7-85ac-1246f3360139",
        _type: "reference",
        _key: "huJcb1rQqhucChiuXp5c24",
      },
    ],
    notifications: [
      {
        _key: "6d814404ab48",
        message:
          "Welcome to Medik 420 upgrade your profile to get exclusive features.",
        title: "Welcome",
        read: true,
        created: "2023-05-30T06:24:10.507Z",
      },
      {
        read: true,
        created: "2023-05-30T10:56:24.659Z",
        _key: "gZw63UNvt8qZYxoXO2ePpx",
        message: "$10  has been deposited to your personal account",
        title: "$10 Deposit ",
      },
    ],
    _rev: "fvqf23-g7b-bv5-kvq-jvldybz6y",
    lastname: "morty",
    accounts: [
      {
        description:
          "Explore stocks startups crypto and invest as you see fit ",
        _key: "a4f9db268d6f",
        type: "Kids",
        number: "176877877",
        balance: 12000,
        deployed: true,
      },
      {
        balance: 8000,
        deployed: true,
        description: "Get an automatically balanced portfolio in a few clicks",
        _key: "e626b4750e56",
        type: "Smart",
      },
      {
        _key: "fbfeacaa64e42ab49477b518bc995579",
        type: "Retirement",
        balance: 8000,
        deployed: true,
        description: "Get an automatically balanced portfolio in a few clicks",
      },
      {
        description:
          "Explore stocks startups and crypto and invest as you see fit ",
        _key: "059a720979db",
        type: "Personal",
        balance: 30,
        deployed: true,
      },
    ],
    password: "evilmorty2A.",
    investment: 12000,
  },
];

 const {expanded, toggleSidebar, setexpanded} = useContext(SidebarContext)
// console.log(user)

const {avatar, firstname, lastname, transactions, accounts, claimed, notifications, plan, _id} = userdetails

// const {avatar, firstname, lastname, transactions, accounts, claimed, notifications, plan} = mockUser[0]

// if(!user){
//     return(
//         <>
//         <Loader/>
//         </>
//     )
// }
 

  return (
    <>
    <BottomNavigationProvider>
   <Sidebar setSidebarOpen={setexpanded}  sidebarOpen={expanded}/>
   <div className="min-h-screen bg-white   ">
   <Routes>
        {/* <Route  path="dashboard/*" element={<MobileDashboard notifications={notifications}  accounts={accounts}  claimed={claimed} transactions={transactions} firstname={firstname} lastname={lastname} plan={plan}/>} /> */}
        <Route exact path="/" element={<MobileDashboard user={userdetails} notifications={notifications} plan={plan}   accounts={accounts} claimed={claimed} transactions={transactions} firstname={firstname} lastname={lastname}/>} />
        <Route  path="/portfolio/*" element={<MobilePortfolio user={userdetails} portfolios={accounts}/>} />
        <Route  path="/stocks/*" element={<StocksScreen/>} />
        <Route  path="/hub/*" element={<Hub user={userdetails}/>} />
        <Route  path="/withdraw/*" element={<Withdraw user={userdetails} accounts={accounts}/>} />
        <Route  path="/digitalfarm/*" element={<DigitalFarmPage/>} />
        <Route  path="/digitalfarmshop/*" element={<DigitalFarmShop/>} />
        <Route  path="/verification/*" element={<GetVerified/>} />
        <Route  path="/settings/*" element={<Settings user={userdetails}/>} />
        <Route  path="/profile/*" element={<ProfileSettingsPage user={userdetails}/>} />
    </Routes>
    {/* <BottomNavigation2/> */}
   </div>
   </BottomNavigationProvider>
 
    {/* <div className=" hidden md:block bg-white">
   <Routes>
        <Route  path="dashboard/*" element={
        <LaptopDisplay>
           <LaptopDashboard user={userdetails}/>
        </LaptopDisplay>} />
        <Route  path="/" element={
        <LaptopDisplay>
           <LaptopDashboard user={userdetails}/>
        </LaptopDisplay>} />
    <Route  path="/portfolio/*" element={<MobilePortfolio portfolios={accounts} user={userdetails}/> } />
    <Route  path="/hub/*" element={<Hub user={userdetails}/>} />
    <Route  path="/withdraw/*" element={<Withdraw user={userdetails} accounts={accounts}/> } />
    <Route  path="/stocks/*" element={<StocksScreen/>} />
    <Route  path="/digitalfarm/*" element={<DigitalFarmPage/>} />
    <Route  path="/digitalfarmshop/*" element={<DigitalFarmShop/>} />
    <Route  path="/verification/*" element={<GetVerified/>} />
    <Route  path="/settings/*" element={<Settings user={userdetails}/>} />
    <Route  path="/profile/*" element={<ProfileSettingsPage user={userdetails}/>} />
    </Routes>
   </div> */}
   
    </>
  )

  
}




export default DashboardScreen