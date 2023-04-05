import { useState , useEffect} from "react"
import { FaSearch } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { client } from "../../../lib/client"
import { bitcoin } from "../../assets"
import Header from "../Header"


const StocksScreen = () => {
    const [stocks, setstocks] = useState([])
    const [priceData, setPriceData] = useState([])
    const [activeStock, setactiveStock] = useState(null)

    const navigate = useNavigate()
    
    const testStocks = [
      {
        symbol: 'AMD',
        companyName: 'Amadeues mozart docs',
        price: 100,
        image: bitcoin
      },
      {
        symbol: 'AAPL',
        companyName: 'Apple company',
        price: 100,
        image: bitcoin
      },
      {
        symbol: 'MSFT',
        companyName: 'Microsoft Company',
        price: 100,
        image: bitcoin
      },
      {
        symbol: 'TSLA',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin
      },
    ]

    useEffect(() => {
     
      const fetchStocks = async () => {
            const allStocks = await client.fetch(
              `*[_type == "stocks"]`
            ).then((res) => res)
            setstocks(allStocks)
            const stocklist = await allStocks.map((stock) => {
              return(
                stock.symbol.replace(/"/g, '')
              )
      })
        const symbols = stocklist.join(',')
        const fetchStocksPrices = async () => {
          const prices = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=d3112acd4e081291c5239fb8af8763e7`)
          const pricedata = await prices.json()
          setPriceData(pricedata)

        }
            fetchStocksPrices()   
            }
        fetchStocks()

      }, [])
    
 
   const stockList = stocks?.map((stock) => {
     const match = priceData?.find((price) => price.symbol === stock.symbol)
     if(match){
       return{
         ...stock,
         price: match?.price,
         change: match?.change,
         changePercent: match?.changesPercentage
       }
     }
   })

   const techStocks = stockList?.filter((stock) => {
     return stock?.sector.includes('Technology')
   })
   const communicationStocks = stockList?.filter((stock) => {
     return stock?.sector.includes('Communication')
   })
   const healthcareStocks = stockList?.filter((stock) => {
     return stock?.sector.includes('Healthcare')
   })
   
   const financeStocks = stockList?.filter((stock) => {
     return stock?.sector.includes('Financial')
   })

   console.log(stockList)

  

  
    const StockTabs = () => {
      return(
        <>
         <div className="gap-x-10 flex">
         <Link to={'crypto'}> 
         <div>
             <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${bitcoin})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Technology</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
         </Link>
         <Link to={'startups'}> 
         <div>
             <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${bitcoin})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Communication</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
         </Link>
         <Link to={'/dashboard/stocks'}> 
         <div>
             <div className=" w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${bitcoin})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Financial</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
         </Link>
         <Link to={'syndicates'}> 
         <div>
             <div className="  w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${bitcoin})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Healthcare</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
         </Link>
         </div>
        </>
      )
  }
    const StocksHeader = () => {
      return(
          <>
             <div className="space-y-4 sm:min-w-[700px]">
          <div className="flex justify-between px-4">
              <h3 className="text-[28px]  font-bold">Invest in curated stocks Algorhitmically </h3>
          </div>
          <div className="px-4">
          <div className="flex  items-center space-x-2 p-2 bg-gray-100 rounded-xl">
               <FaSearch/>
               <hr className="w-px  h-6 bg-slate-200 mx-4" />
               <div className="relative">
               <input placeholder="Search stocks" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
          </div>
          </div>
          </div>
          <div className="w-full flex space-x-8 sm:justify-center  p-4 overflow-x-scroll"><StockTabs/></div> 
       </div>
          </>
      )
  }
  
  const StockPage = ({activeStock}) => {
  const [stockdata, setstockdata] = useState(null)
  const [stockNews, setstockNews] = useState(null)
  
    // const fetchStock = async () => {
    //     const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${activeStock.symbol}?apikey=d3112acd4e081291c5239fb8af8763e7      `)
    //     const data = await res.json()
    //     const news = await fetch(`https://api.marketaux.com/v1/news/all?symbols=${activeStock.symbol}&filter_entities=true&language=en&api_token=W5IMT2Z6llbnruOxnmr8YkLcq2qFbZPN9a51KsoN`)
    //     const newsdata = await news.json()
    //     setstockNews(newsdata)
    //     setstockdata(data)
    //     console.log(newsdata)
    // }
  
    // useEffect(() => {
    //   fetchStock()
    // }, [])
  
    if (!stockdata) {
      return(
        <div className="flex justify-center">
           .... loading
        </div>
      )
      
    }
  
    return(
      <> 
         {activeStock && <Stocks name={activeStock.name} companyName={activeStock.companyName} price={activeStock.price} func={()=> setactiveStock(null)}/>}
      </>
    )
  }
  
  const Stocks = ({name, companyName, price, func, image, change}) => {
    return(
      <> 
        <div className="w-full">
          <div onClick={func} className="flex items-center justify-between">
               <div>
               <div className="flex items-center gap-x-2">
                    <div>
                        <img className=" rounded-full w-10 h-10" src={image} alt="" />
                    </div>
                    <div className="">
                        <div className="flex gap-x-4">
                        <h3 className="text-base">{name}</h3>
                        <p className="text-sm">{change}%</p>
                        </div>
                        <p className="text-gray-700 text-sm">{companyName}</p>
                    </div>
               </div>
               </div>
               <p>${price}</p>
          </div>
        </div>
      </>
    )
  }
  
  if (activeStock) {
    return(
      <>
      <StockPage activeStock={activeStock} />
      </>
    )
  }
  
  if (!stockList) {
    return(
      <div className="flex justify-center">
         <h1>Loading...</h1>
      </div>
    )
  }

    return(
      <>
      <div className="md:hidden"><Header func={()=> navigate(-1)} halfmenu={true}/></div>
      <div className="py-4">
       <StocksHeader/>
       <div className="flex w-full">
           <div className="flex flex-1 gap-y-8 py-8 px-2 flex-col">
               {
                   communicationStocks?.map((stock, index) => {
                       return(
                           <Stocks func={()=> setactiveStock(stock)} key={index} image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
                           )
                   })
               }
           </div>
       </div>
      </div>
      </>
    )
   }

   export default StocksScreen