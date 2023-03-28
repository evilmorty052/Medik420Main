import { Progress } from 'antd'
import { FaDollarSign, FaClock, FaChild } from 'react-icons/fa'
import styles from '../../style'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'


export default function PortfolioScreen ({ActivePortfolio}) {
    
    const user = fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily').then((res)=> res.json()).then((res)=>{
        res && console.log(res)
    })
    
    // const getusers = useQuery('[key]', func())
    
 
   
    const PortfolioCard = ({header, buttontext, func, description}) => {
        return(
            <>
             <div className="flex items-center space-x-4 bg-gray-200 max-w-[350px] px-2 py-4 rounded-xl">
                 <div className="p-2 bg-white rounded-xl">
                    <FaChild/>
                 </div>
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


    return(
        <>
        <div className="pt-8 ">
            <div className="flex pb-[80px] flex-col gap-y-4 items-center">
                <p className="text-lg font-bold text-gray-800" >{`${ActivePortfolio.type} Portfolio`}</p>
              <div>
              <Progress
        type="circle"
        strokeWidth={10}
        percent={0}
               />
              </div>
                <div className="flex flex-col items-center">
                {/* <h3 className={styles.sectionHeading}>{`$${ActivePortfolio.balance}`}</h3> */}
                <h3 className={styles.sectionHeading}>{formatter.format(ActivePortfolio.balance)}</h3>
                 <p className="text-center"><strong>$ 1000</strong> until your <strong>first</strong> milestone</p>
                 <div className="py-8 w-full flex flex-col gap-y-4 items-center">
                    <button className="w-full bg-green-300 rounded-3xl p-4 text-xl font-semibold">Add Cash</button>
                    <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">View Investments</button>
                </div>
                </div> 
                <div>
                    <PortfolioCard description={'invest regulary in startups etfs and stocks'} header={'Auto-invest'} buttontext={'Setup'}/>
                </div>
                <div className="flex w-10/12 border-b-2 border-gray-600 py-4">
                     <div className="flex justify-between w-full">
                        <div className="flex items-center space-x-2">
                        <div><FaDollarSign/></div>
                        <p>Portfolio Cash</p>
                        </div>
                        <div className="flex justify-end">
                            <p>{formatter.format(ActivePortfolio.balance)}</p>
                        </div>
                     </div>
                </div>
                <div className="flex w-10/12 border-b-2 border-gray-600 py-4">
                     <div className="flex justify-between w-full">
                        <div className="flex items-center space-x-2">
                        <div><FaClock/></div>
                        <p>Outstanding Settlements</p>
                        </div>
                        <div className="flex justify-end">
                            <p>$ 0.00</p>
                        </div>
                     </div>
                </div>
                <div className=" pt-4"><PortfolioCard header={'Invite Friend'} description={'Boost your portfolio up to $1000'} buttontext={'Invite'}/></div>
                <div className="self-start  space-y-4 px-2">
                    <h3 className={'text-gray-800 text-[28px] font-semibold text-left font-space'}>Recent Activity</h3>
                    <div>no recent activity for this account</div>
                </div>
               
            </div>
        </div>
        </>
    )
}