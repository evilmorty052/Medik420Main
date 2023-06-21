import { useEffect, useState } from 'react'
import { Progress } from 'antd'
import { FaDollarSign, FaClock, FaChild, FaArrowLeft } from 'react-icons/fa'
import styles from '../../style'
import { RecentInvestments } from './Elements'
import { autoinvestsvg, calendar, moneybag } from '../../assets'
import { client } from '../../../lib/client'
import { useParams } from 'react-router-dom'
import {Loader} from "../../components"


export default function PortfolioScreen ({}) {

    const [ActivePortfolio, setActivePortfolio] = useState(null)
    
    // const user = fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily').then((res)=> res.json()).then((res)=>{
    //     res && console.log(res)
    // })
    
    // const getusers = useQuery('[key]', func())

    const key = useParams()

    async function getPortfolio(params) {
      const query = `*[_type == "users" && accounts[_key == "${key.id}"] ]{accounts}`
      const account = await client.fetch(query).then((res) => res)

      const targetAccount = account[0].accounts.filter((account) => {
        return account._key == key.id
      })

       console.log(targetAccount)
    setActivePortfolio(targetAccount[0])
    }

    useEffect(() => {
      getPortfolio()
    }, [])
    
    
   const WelcomePage = () => {
    return(
        <div>
            <div className=" container mx-auto max-w-4xl grid place-content-center ">
               <p className="text-4xl">Welcome to Medik 420</p>
            </div>
        </div>
    )
   }
   
    const PortfolioCard = ({header, buttontext, func, description}) => {
        return(
            <>
             <div className="flex items-center space-x-4 bg-gray-200 max-w-[350px] px-2 py-4 rounded-xl">
                 
                 <img src={autoinvestsvg} className={'h-10 w-10'} alt="" />
                 
                 <div className="flex items-center space-x-2">
                     <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{header}</h3>
                         <p className=" text-sm leading-normal" >{description} </p>
                     </div>
                     <button onClick={func} className="w-20  bg-green-300 py-1  rounded-3xl">{buttontext}</button>
                 </div>
             </div>
            </>
        )
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      if (!ActivePortfolio) {
        return(
            <>  
            <Loader/>
            
            </>
        )
      }

    return(
        <>
        <div className="pt-8 relative ">
            <div className='absolute top-0 w-full flex gap-x-2 items-center'>
                <p><FaArrowLeft/></p>
                 <p onClick={()=> window.history.back()}>Back</p>
            </div>

            <div className="flex pb-[80px] flex-col gap-y-4 items-center">
                <p className="text-lg font-bold text-gray-800" >{`${ActivePortfolio?.type} Portfolio`}</p>
              <div>
              <Progress
        type="circle"
        strokeWidth={10}
        percent={0}
               />
              </div>
                <div className="flex flex-col items-center">
                {/* <h3 className={styles.sectionHeading}>{`$${ActivePortfolio.balance}`}</h3> */}
                <h3 className={styles.sectionHeading}>{formatter.format(ActivePortfolio?.balance)}</h3>
                 <p className="text-center"><strong>$ 1000</strong> until your <strong>first</strong> milestone</p>
                 
                </div> 
                <div className="py-8 w-full flex flex-col gap-y-4 px-5">
                    <button className="btn">Add Cash</button>
                    {/* <button className="btnAlt">View Investments</button> */}
                </div>
                <div>
                    <PortfolioCard description={'invest regulary in startups etfs and stocks'} header={'Auto-invest'} buttontext={'Setup'}/>
                </div>


                <div className="flex w-10/12 border-b-2 border-gray-600 py-4 ">
                     <div className="flex justify-between items-center w-full">
                        <div className="flex items-center space-x-2">
                        <div>
                            <img src={moneybag} className={'h-10 w-10'} alt="" />
                        </div>
                        <p>Portfolio Cash</p>
                        </div>
                        <div className="flex justify-end">
                            <p>{formatter.format(ActivePortfolio?.balance)}</p>
                        </div>
                     </div>
                </div>
                <div className="flex w-10/12 border-b-2 border-gray-600 py-4">
                     <div className="flex justify-between w-full items-center">
                        <div className="flex items-center space-x-2">
                        <div>
                        <img src={calendar} className={'h-10 w-10'} alt="" />
                        </div>
                        <p>Outstanding Settlements</p>
                        </div>
                        <div className="flex justify-end">
                            <p>$ 0.00</p>
                        </div>
                     </div>
                </div>
                 
                 <div className="py-8 px-2 w-full">
                <RecentInvestments/>
                 </div>

                {/* <div className=" pt-4"><PortfolioCard header={'Invite Friend'} description={'Boost your portfolio up to $1000'} buttontext={'Invite'}/></div> */}

                <div className="self-start  space-y-4 px-4">
                    <h3 className={'text-gray-800 text-[28px] font-semibold text-left font-space'}>Recent Activity</h3>
                    <div>No recent activity for this account</div>
                </div>
               
            </div>
        </div>
        </>
    )
}