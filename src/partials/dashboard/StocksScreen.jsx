import { useState , useEffect, useRef} from "react"
import { FaAngleDown, FaAngleUp, FaChartLine, FaChevronCircleUp, FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp, FaSearch } from "react-icons/fa"
import { Link, Route, Routes, useLocation, useNavigate,  } from "react-router-dom"
import { client, urlFor } from "../../../lib/client"
import { bitcoin, healthcaretab, financetab, technologytab, communicationtab } from "../../assets"
import Header from "../Header"
import {StockChart, SevenDayChart, AnnualChart} from "../charts/Linechart"
import { day } from "../../../lib/dayjs"
import dayjs from 'dayjs';
import { mockTimeSeries, mockNews } from "../../stocksupload"
import { Pagination, } from "./Elements"




const StocksScreen = () => {
    const [stocks, setstocks] = useState()
    const [priceData, setPriceData] = useState([])
    const [activeStock, setactiveStock] = useState(null)
    const [moreStocks, setMoreStocks] = useState(null)
    const [timeseries, settimeseries] = useState(null)
    const [activeListTitle, setactiveListTitle] = useState('Technology')
    
 const last = useRef()   
const inputref = useRef()

const [searchTerm, setsearchTerm] = useState('')


const handleSearch = (e) =>{
   setactiveList(null)
  setsearchTerm(e)
}


function convertNumberToWords(amount) {
  const words = ["", "thousand", "million", "billion", "trillion"];
  let num = Math.abs(amount);
  let wordIndex = 0;

  while (num >= 1000) {
    num /= 1000;
    wordIndex++;
  }

  const convertedNumber = Math.round(num * 10) / 10;

  return amount < 0 ? "-" + convertNumberToWords(convertedNumber) : convertedNumber + " " + words[wordIndex];
}

const today = dayjs();
const labels = Array.from({ length: 12 }, (_, i) => {
  const month = today.subtract(i, 'month').format('MMM');
  const year = today.subtract(i, 'month').format('YYYY');
  return `${month}${year}`;
}).reverse();

console.log(labels)

const lastYearSameMonth = today.subtract(1, 'year')
const thisYearSameMonth = today


const annuallabels = [lastYearSameMonth, thisYearSameMonth];


    const navigate = useNavigate()
    
    const testStocks = [
      {
        symbol: 'AMD',
        companyName: 'Amadeues mozart docs',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'AAPL',
        companyName: 'Apple company',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'MSFT',
        companyName: 'Microsoft Company',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'TSLA',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Communication'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
      {
        symbol: 'TSLAXXXX',
        companyName: 'Tesla Motors',
        price: 100,
        image: bitcoin,
        sector: 'Technology'
      },
    ]

    const testtimeseries = [
      
          {
            date: "2023-04-06",
            open: 91.47,
            high: 92.9148,
            low: 90.62,
            close: 92.47,
            adjClose: 92.470001,
            volume: 47607383,
            unadjustedVolume: 47317818,
            change: 1,
            changePercent: 1.09,
            vwap: 92.16,
            label: "April 06, 23",
            changeOverTime: 0.0109,
          },
          {
            date: "2023-04-05",
            open: 94.35,
            high: 94.5,
            low: 91.36,
            close: 92.56,
            adjClose: 92.559998,
            volume: 52979281,
            unadjustedVolume: 52979300,
            change: -1.79,
            changePercent: -1.9,
            vwap: 92.57,
            label: "April 05, 23",
            changeOverTime: -0.019,
          },
          {
            date: "2023-04-04",
            open: 97.038,
            high: 97.27,
            low: 95.21,
            close: 95.87,
            adjClose: 95.870003,
            volume: 43195876,
            unadjustedVolume: 43195900,
            change: -1.168,
            changePercent: -1.2,
            vwap: 96.23,
            label: "April 04, 23",
            changeOverTime: -0.012,
          },
          {
            date: "2023-04-03",
            open: 96.695,
            high: 96.79,
            low: 94.81,
            close: 96.56,
            adjClose: 96.559998,
            volume: 50655332,
            unadjustedVolume: 50655300,
            change: -0.135,
            changePercent: -0.13961,
            vwap: 95.84,
            label: "April 03, 23",
            changeOverTime: -0.0013961,
          },
          {
            date: "2023-03-31",
            open: 96.34,
            high: 98.36,
            low: 95.27,
            close: 98.01,
            adjClose: 98.010002,
            volume: 55857466,
            unadjustedVolume: 55827600,
            change: 1.67,
            changePercent: 1.73,
            vwap: 97.09,
            label: "March 31, 23",
            changeOverTime: 0.0173,
          },
          {
            date: "2023-03-30",
            open: 98,
            high: 99.53,
            low: 97.25,
            close: 97.88,
            adjClose: 97.879997,
            volume: 59678531,
            unadjustedVolume: 59678500,
            change: -0.12,
            changePercent: -0.12245,
            vwap: 98.26,
            label: "March 30, 23",
            changeOverTime: -0.0012245,
          },
          {
            date: "2023-03-29",
            open: 96.07,
            high: 96.91,
            low: 94.87,
            close: 96.09,
            adjClose: 96.089996,
            volume: 55325974,
            unadjustedVolume: 55326000,
            change: 0.02,
            changePercent: 0.02081815,
            vwap: 95.92,
            label: "March 29, 23",
            changeOverTime: 0.0002081815,
          },
        
    ];
   
  


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
          const prices = await fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=44d8e75e99a167b6282fb8d91b280f9a`)
          const pricedata = await prices.json()
          setPriceData(pricedata)
          


        }
            fetchStocksPrices()   
            }
        fetchStocks()

      }, [])
    
     function handleStockScreen(activestock) {
      const moreStocks = techStocks?.filter((stock)=>{
        return stock.symbol != activestock?.symbol
      })
      
      
      setMoreStocks(techStocks.filter((stock)=>{
        return stock.symbol != activestock?.symbol
      }))
      setactiveStock(activestock)
      // console.log(x)
     }
  
    
 
   const stockList = stocks?.map((stock) => {
     const match = priceData?.find((price) => price.symbol === stock.symbol)
     if(match){
       return{
         ...stock,
         price: match?.price,
         change: match?.change,
         changePercent: match?.changesPercentage,
         marketcap: match?.marketCap,
         yearHigh: match.yearHigh
       }
     }
   })

   const techStocks = stockList?.filter((stock) => {
     if (searchTerm) {
      return stock?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
     }
     return stock?.sector.includes('Technology')
   })
   const communicationStocks = stockList?.filter((stock) => {
    if (searchTerm) {
      return stock?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
     }
     return stock?.sector.includes('Communication')
   })
   const healthcareStocks = stockList?.filter((stock) => {
    if (searchTerm) {
      return stock?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
     }
     return stock?.sector.includes('Healthcare')
   })
   
   const financeStocks = stockList?.filter((stock) => {
    if (searchTerm) {
      return stock?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
     }
     return stock?.sector.includes('Financial')
   })

   
const [activeList, setactiveList] = useState(null)
  
const pathhash = useLocation().hash
  
    const StockTabs = () => {
      
      
      



      return(
        <>
         <div className="gap-x-5 sm:gap-x-6 lg:gap-x-20 flex sm:overflow-x-scroll ">
         
         <div id="first" onClick={()=> {
          setactiveListTitle('Technology')
          setactiveList(techStocks)}}>
             <div className=" w-32 h-32 sm:w-36 sm:h-32 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${technologytab})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Technology</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
         
        
         <div onClick={()=> {
          setactiveListTitle('Communication')
          setactiveList(communicationStocks)}}>
             <div className=" w-32 h-32 sm:w-36 sm:h-32 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${communicationtab})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Communication</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
         
         
         <div onClick={()=> {
          setactiveListTitle('Finance')
          setactiveList(financeStocks)}
          }>
             <div className=" w-32 h-32 sm:w-36 sm:h-32 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${financetab})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Financial</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
       
         
         <div  id="last"  onClick={()=> {
          setactiveListTitle('Healthcare')
          setactiveList(healthcareStocks)}}>
             <div className="  w-32 h-32 sm:w-36 sm:h-32 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{backgroundImage: `url(${healthcaretab})`}}>
                <div className="z-50">
                   <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-1">Healthcare</h3>
                </div>
               <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
             </div>
         </div>
           {/* { path == '#last' && 
           <a href="#first" className="fixed sm:hidden top-[40%] left-0 flex items-center justify-center h-10 w-10 pr-1 z-[4000000] bg-white rounded-full">
              <FaChevronLeft/>
            </a>}
           {!path | path == '#first' &&
            <a  href="#last" className="fixed sm:hidden  top-[40%] right-0 flex items-center justify-center h-10 w-10 pl-1 z-[4000000] bg-white rounded-full">
              <FaChevronRight/>
            </a>} */}
          
         </div>
        </>
      )
  }
    const StocksHeader = () => {
    const [searchInput, setsearchInput] = useState('')
   
    const handleSearch = (e) =>{
      setsearchTerm(e)
    }
      return(
          <>
             <div className="space-y-4 sm:min-w-[700px]">
          <div className="flex justify-between px-4 md:justify-center">
              <h3 className="text-[28px] font-bold md:text-center">Invest in curated stocks Algorhitmically </h3>
          </div>
          <div  className="px-4 md:flex justify-center ">
          <div onClick={() => inputref.current.focus()} className="flex  items-center space-x-2 p-2 bg-gray-200 rounded-xl max-w-2xl md:min-w-[672px] focus:border-blue-300 ">
               <FaSearch/>
               <hr className="w-px  h-6 bg-slate-200 mx-4" />
               <div className="relative">
               <input value={searchInput} onChange={e => handleSearch(e.target.value)} ref={inputref} id="searcInput" placeholder="Search stocks" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
          </div>
          </div>
          </div>
         
       </div>

          </>
      )
  }
  
  const StockPage = ({activeStock}) => {
  const [stockdata, setstockdata] = useState()
  const [stockNews, setstockNews] = useState(null)
  const [loading, setloading] = useState(null)
  const [timeSeries, setTimeSeries] = useState(null)
  const [duration, setduration] = useState('7')

 

  const testStock = {
    symbol: "WBD",
    price: 15.15,
    beta: 1.503332,
    volAvg: 19863914,
    mktCap: 36899338061,
    lastDiv: 0,
    range: "8.82-27.5",
    changes: 0.34,
    companyName: "Warner Bros. Discovery, Inc.",
    currency: "USD",
    cik: "0001437107",
    isin: "US9344231041",
    cusip: "934423104",
    exchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
    industry: "Entertainment",
    website: "https://corporate.discovery.com",
    description:
      "Warner Bros. Discovery, Inc., a media company, provides content across various distribution platforms in approximately 50 languages worldwide. It also produces, develops, and distributes feature films, television, gaming, and other content in various physical and digital formats through basic networks, direct-to-consumer or theatrical, TV content, and games licensing. The company owns and operates various television networks under the Discovery Channel, HGTV, Food Network, TLC, Animal Planet, Investigation Discovery, Travel Channel, Science, MotorTrend, Discovery en Español, Discovery Familia, Eurosport, TVN, Discovery Kids, Discovery Family, American Heroes Channel, Destination America, Discovery Life, Magnolia Network, Cooking Channel, ID, the Oprah Winfrey Network, Eurosport, DMAX, and Discovery Home & Health brands, as well as other regional television networks. Its content spans genres, including survival, natural history, exploration, sports, general entertainment, home, food, travel, heroes, adventure, crime and investigation, health, and kids. The company also operates production studios that develop and produce content; and digital products and Websites. It provides content through various distribution platforms comprising pay-television, free-to-air and broadcast television, authenticated GO applications, digital distribution arrangements, content licensing agreements, and direct-to-consumer subscriptions, as well as various platforms that include brand-aligned Websites, online streaming, mobile devices, video on demand, and broadband channels. Warner Bros. Discovery, Inc.is headquartered in New York, New York.",
    ceo: "Mr. David M. Zaslav",
    sector: "Communication Services",
    country: "US",
    fullTimeEmployees: "11000",
    phone: "212 548 5555",
    address: "230 Park Avenue South",
    city: "New York",
    state: "NY",
    zip: "10003",
    dcfDiff: null,
    dcf: 0,
    image: "https://financialmodelingprep.com/image-stock/WBD.png",
    ipoDate: "2005-07-06",
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false,
  };

  const fetchNews = async () => {

    const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${activeStock.symbol}?apikey=d3112acd4e081291c5239fb8af8763e7`)
    const data = await res.json()
    const news = await fetch(`https://api.marketaux.com/v1/news/all?symbols=${activeStock.symbol}&filter_entities=true&language=en&api_token=1W6ETCE4CTKXVXa1mZrkQ5ZEoAt86cjOgNeZLSYV`)
    // const news = await fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${activeStock.symbol}&page=0&apikey=b2ae89f8d8566cc5d2f8da526e92a73f`)
    const newsdata = await news.json()
    setstockNews(newsdata)
    setstockdata(data)
    // newsdata && setloading(false)
}

const fetchTimeSeries = async () => {
  const req = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${activeStock?.symbol}?timeseries=365&apikey=b2ae89f8d8566cc5d2f8da526e92a73f`)
  const data = await req.json()
  setTimeSeries(data.historical)
  console.log(data)
}



const historicalPrices = timeSeries?.map((item)=>{
  return activeStock.price, item.close
})

// const chartprices =  [activeStock.price, ...historicalPrices]



  useEffect(() => {
    fetchTimeSeries()
    fetchNews()
  }, [])




    const StockHeader = () => {
      return(
        <div className="p-2">
             <div className="py-2">
                <img src={stockdata?.[0].image} className='rounded-full h-16 w-16'  />
             </div>
             <div className="px-2">
                <p className="text-[20px] font-semibold">Ticker: {activeStock?.symbol}</p>
               <h3 className="text-[24px] font-bold">{activeStock?.companyName}</h3>
                <div>
                <p className="text-[24px] font-bold">${activeStock?.price}</p>
                <p>{activeStock?.change}</p>
                </div>
             </div>
        </div>
      )
    }

    const StockChartGrid = () => {
  
      const mockvalues = mockTimeSeries.map((day)=>{
        return day.close
      })
      
      let view

      

      return(
        <>
         <div>
         <SevenDayChart entries={historicalPrices?.slice(0,7)}/>
         </div>
         {/* <div className='p-4 flex justify-between'>
          <span onClick={()=> setduration('7')}>1 week</span>  <span onClick={()=> setduration('30')}>1 month</span>  <span onClick={()=> setduration('365')}>1 year</span>
         </div> */}
        </>
      )
    }

    const StockBreakDown = () => {
      
        return(
          <>
          <div className='container max-w-3xl space-y-8 py-4 px-2 md:px-0'>
               <div>
                <h3 className="text-[20px] font-semibold text-gray-800">{activeStock?.symbol} Company Breakdown:</h3>
                </div>
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                      
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Share Price</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>$0.00</p>
                        </div>
               </div>
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                            
                            <p className='sm:text-[16px] text-gray-800 font-semibold'>Market Cap</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>{convertNumberToWords(stockdata?.[0].mktCap)}</p>
                        </div>
               </div>
              
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Year to Date Change</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>$0.00</p>
                        </div>
               </div>
               {/* <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Dividend Yield</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>$0.00</p>
                        </div>
               </div> */}
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>IPO Date</p>
                        </div>
                        <div>
                            <p className='text-base font-semibold text-gray-800'>{stockdata?.[0].ipoDate}</p>
                        </div>
               </div>
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Industry</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>{stockdata?.[0].industry}</p>
                        </div>
               </div>
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Company Website</p>
                        </div>
                        <div>
                            <p className='text-base font-semibold text-gray-800'>{`${stockdata?.[0].website}`}</p>
                        </div>
               </div>
               {/* <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Country</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>{`${stockdata?.[0].country}`}</p>
                        </div>
               </div> */}
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>Full Time Employees</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>{`${stockdata?.[0].fullTimeEmployees}`}</p>
                        </div>
               </div>
               <div className='flex justify-between pb-4 border-b border-gray-800'>
                        <div className='flex gap-x-2 items-center'>
                          
                           <p className='sm:text-[16px] text-gray-800 font-semibold'>CEO</p>
                        </div>
                        <div>
                            <p className='text-base  font-semibold text-gray-800'>{`${stockdata?.[0].ceo}`}</p>
                        </div>
               </div>
          </div>
          </>
        )

    }

    const StockDescription = () => {
      const [readmore, setreadmore] = useState(false)
        return(
          <>
             <div>
                    <div className="py-4">
                    <h3 className="text-[24px] font-semibold">About {activeStock.symbol}:</h3>
                    </div>
                   <div>
                        {
                          !readmore ? `${stockdata?.[0].description.slice(0,300)} ... `: stockdata?.[0].description
                        }
                        <div onClick={()=> setreadmore(!readmore)} className="flex items-center gap-1">
                          {!readmore ? 
                          <>
                          <p>Read More </p>
                          <span><FaChevronDown/></span>
                          </>
                           :
                           <>
                           <p>Read Less </p>
                          <span><FaChevronUp/></span>
                           </>
                           }
                        </div>
                   </div>
             </div>
          </>
        )
    }

    const News = ({source, title, url, image, snippet, published}) => {
      const createdAt = published;
      const parsedCreatedAt = day(createdAt);
      const timeAgo = parsedCreatedAt?.fromNow();
      return(
       <div className="py-2 gap-y-2">
            <div className="">
                       <div className="py-2 sm:py-4">
                       <p className="text-base font-semibold text-gray-600">{source}</p>
                       </div>               
            </div>
            <div className="">
                <div>
                   <img className="w-[300px] max-h-[300px] rounded-xl" src={image} alt="" />
                </div>
            </div>
            <div className="py-4">
            <div className="space-y-2">
                     <strong>{title}</strong>          
             </div> 
            <p>{snippet}</p>
            </div>
            <div className="py-4">
                     <p className="text-sm font-semibold text-gray-600">{timeAgo}</p>
            </div>
       </div>
      )
    }

    const WhyInvest = () => {
      return(
        <div className="container flex justify-center">
             <div className="">
                 <div className="flex flex-col gap-y-10 md:grid grid-cols-2 lg:gap-x-8">
                     <div className="flex items-center gap-x-4">
                          <div className="w-8 h-8">
                          <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none"><path d="M8.49 25.9H3v10.08h5.49V25.9zM18.66 19.6h-5.49v16.38h5.49V19.6zM28.83 13.3h-5.49v22.68h5.49V13.3zM39 7h-5.49v28.98H39V7z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>                          </div>
                          <div className="flex-1">
                             <strong className="text-[24px] text-blk">Algorhitmic Trading</strong>
                             <p className="text-[18px]">Thousands of stocks and ETFs. No investing minimums.</p>
                          </div>
                     </div>
                     <div className="flex items-center gap-x-4">
                      <div className="w-8 h-8">
                      <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none"><path clipRule="evenodd" d="M39 21c0-9.941-8.06-18-18-18S3 11.059 3 21c0 9.94 8.06 18 18 18s18-8.06 18-18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path clipRule="evenodd" d="M21 21.16l-3.726 3.265-.003.003a4.478 4.478 0 01-3.093 1.235 4.5 4.5 0 112.967-7.882l.06.054 3.796 3.324z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21.16l3.729 3.268a4.5 4.5 0 10.126-6.647l-.057.052-.933.817" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </div>
                          <div className="flex-1">
                             <strong className="text-[24px] text-blk">Unlimited Trades</strong>
                             <p className="text-[18px]">Plus no add-on trading commission fees.</p>
                          </div>
                     </div>
                     <div className="flex items-center gap-x-4">
                          <div className="w-8 h-8">
                          <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none"><path d="M21 39c9.941 0 18-8.059 18-18S30.941 3 21 3 3 11.059 3 21s8.059 18 18 18zM21 3v18m0 0l17.5 3.5M21 21l8.5 15.5" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                          </div>
                          <div className="flex-1">
                             <strong className="text-[24px] text-blk">Diversification analysis</strong>
                             <p className="text-[18px]">Custom investment tips to help you diversify.</p>
                          </div>
                     </div>
                     <div className="flex items-center gap-x-4">
                     <div className="w-8 h-8">
                     <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none"><path d="M38 10H2v20.34h36V10z" stroke="currentColor" stroke-width="2.085" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 15h36v0H2v0z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>                     </div>
                          <div className="flex-1">
                             <strong className="text-[24px]">The Stock-Back® Card</strong>
                             <p className="text-[18px] text-blk">We’ll give you matching stock in companies you shop at.</p>
                          </div>
                     </div>
                 </div>
             </div>
        </div>
      )
    }
    const HowToInvest = () => {
      return(
      <>
       <div>
       <div className="pt-10 pb-4 px-4">
          <strong className="text-[36px] text-blk">
              How to Buy {activeStock?.companyName} stock on Medik 420.
          </strong>
       </div>
        <div className="flex flex-col gap-y-8 py-8 px-2">
          
          <div className="p-4 bg-gray-200/60 rounded-lg ">
               <div className="">
                   <div className="flex gap-x-2 items-center">
                        <strong className="text-[20px] text-blk">1.</strong>
                        <strong className="flex-1 text-[20px] text-blk">Enter the amount you'd like to invest in {activeStock?.companyName} stock, then proceed to checkout.</strong>
                        <FaChevronDown/>
                   </div>
                   <div className="p-4">
                     <p className="text-[18px]"> allows you to purchase smaller, more affordable pieces of investments (called fractional shares) rather than the whole share, which can be significantly more expensive.</p>
                   </div>
               </div>
          </div>
          <div className="p-4 bg-gray-200/60 rounded-lg ">
               <div className="">
                   <div className="flex gap-x-2 items-center">
                        <strong className="text-[20px] text-blk">2.</strong>
                        <strong className="flex-1 text-[20px] text-blk">Choose a plan and set up your investment account in just a few minutes.</strong>
                        <FaChevronDown/>
                   </div>
                   <div className="p-4">
                     <p className="text-[18px]">Medik 420 offers two subscription plans: Growth and Growth+..</p>
                   </div>
               </div>
          </div>
          <div className="p-4 bg-gray-200/60 rounded-lg ">
               <div className="">
                   <div className="flex gap-x-2 items-center">
                        <strong className="text-[20px] text-blk">3.</strong>
                        <strong className="flex-1 text-[20px] text-blk">Once you’ve finished your account, your {activeStock?.company} shares will be added to your new portfolio.</strong>
                        <FaChevronDown/>
                   </div>
                   <div className="p-4">
                     <p className="text-[18px]">Once you’ve finished your account, your {activeStock?.company} shares will be added to your new portfolio.</p>
                   </div>
               </div>
          </div>
      </div>
       </div>
      </>
      )
    }

    const BuyButton = () => {
      return(
        <>
          <div className="py-4 z-[3000000] w-full flex flex-col gap-y-4 items-center fixed bottom-0 bg-white  px-2 md:hidden">
              <button className="w-full bg-green-300 rounded-3xl p-4 text-2xl tracking-wide font-semibold">
                Buy Stock
              </button>
              {/* <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
                Auction Farm
              </button> */}
            </div>
        </>
      )
    }

    // const MoreStocks = () => {
    //   const totalstocks = [moreStocks[0],moreStocks[1],moreStocks[2]]
    //    const MoreStocksCard = ({name, price, func}) => {
    //      return(
    //       <>
    //       <div onClick={func} className="p-4 bg-gray-200/60 rounded-lg">
    //           <div className="flex flex-col gap-y-10">
    //               <img src={bitcoin} className='w-10 h-10 rounded-full' alt="" />
    //               <p>{name}</p>
    //               <p>{price}</p>
    //           </div>
    //       </div>
    //       </>
    //      )
    //    }
    //   return(
    //      <div className="px-4 space-y-10">
    //         <strong className="text-[26px] text-[#0b1620]">
    //            More {activeStock.sector} Stocks
    //         </strong>
    //         <div className="gap-8 flex flex-col">
    //            {
    //             totalstocks?.map((stock)=> (
    //               <a href="#top">
    //                 <MoreStocksCard func={() => handleStockScreen(stock)} name={stock.symbol}/>
    //               </a>
    //             ))
    //            }
    //         </div>
    //      </div>
    //   )
    // }


  
    if (loading) {
      return(
        <div className="flex justify-center">
           .... loading
        </div>
      )
      
    }
  
    return(
      <> 
      <div className="md:hidden">
      <Header func={()=> setactiveStock(null)} halfmenu={true}/>
      </div>
      <div id="top" className="pt-8 flex flex-col pb-[103px] h-screen overflow-scroll md:pb-0 bg-[#f6f8fa] md:hidden ">
          <div ><StockHeader/></div>
         <StockChartGrid/>
         <div className="flex justify-center">
         <StockBreakDown/>
         </div>
          <div className="px-4">
          <StockDescription/>
          </div>
          <div className="px-4 py-4 ">
             <div className="py-4 space-y-2">
             <h3 className="text-2xl text-blk font-semibold">{activeStock.companyName} News</h3>
               <p className="text-sm">This site provides links to other third-party internet sites, which are identified, indexed and compiled through an automated process with no advance review by Medik 420. By directing users to the below third-party websites, Medik 420 is not suggesting any endorsement, relationship, affiliation with any such websites.</p>
             </div>
              <div className="flex flex-col items-center">
                  {stockNews?.data.map((news)=>(
                    <News image={news.image_url} source={news.source} title={news.title} published={news.published_at} snippet={news.snippet}/>
                  ))}
              </div>
          </div>
           <div className="flex flex-col items-center">
           <div className="py-8 px-2 self-start">
                 <h3 className="text-2xl md:text-[36px] text-blk font-semibold text-start">Why Invest With Medik 420 ?</h3>
           </div>
           <WhyInvest/>
           </div>
           <div className="flex justify-center">
           <HowToInvest/>
           </div>
           {/* <MoreStocks/> */}
          <BuyButton/>
      </div>

      {/* {latopdisplay} */}

      <div className="">
          <div id="top" className="pt-8 hidden md:flex flex-col pb-[103px]  md:pb-0 bg-[#f6f8fa]  md:container md:mx-auto md:max-w-3xl  gap-y-10  ">
              <div ><StockHeader/></div>
             <div className="flex justify-center pb-12">
             <div className="w-[768px] h-[300px]">
             <StockChartGrid/>
             </div>
             </div>
            <div className="px-10">
            <StockBreakDown/>
            </div>
              <div className="px-10 max-w-3xl">
              <StockDescription/>
              </div>
              <div className="px-10 py-4 space-y-10 ">
                 <div className="space-y-4">
                 <h3 className="text-2xl font-semibold text-blk">{activeStock.companyName} News</h3>
                  <p className="text-xs text-gray-700">This site provides links to other third-party internet sites, which are identified, indexed and compiled through an automated process with no advance review by Medik 420. By directing users to the below third-party websites, Medik 420 is not suggesting any endorsement, relationship, affiliation with any such websites.</p>
                 </div>
                  <div className="flex flex-col items-center gap-y-6">
                      {mockNews?.data.map((news)=>(
                        <News image={news.image_url} source={news.source} title={news.title} published={news.published_at} snippet={news.snippet}/>
                      ))}
                  </div>
              </div>
              <div className="flex flex-col items-center px-10 py-8">
              <div className="py-8 self-start">
                 <h3 className="text-2xl md:text-[36px] text-blk font-semibold text-start">Why Invest With Medik 420 ?</h3>
               </div>
              <WhyInvest/>
              </div>
              <div className="flex px-10 justify-center">
              <HowToInvest/>
              </div>
              {/* <MoreStocks/> */}
              <a  className="fixed bottom-[104px] right-0" href="#top">
                <FaChevronCircleUp size={20} />
              </a>
              <BuyButton/>
          </div>
          {/* <div className="py-4 bg-red-300 col-span-1 min-h-screen ">
              h
          </div> */}
      </div>
      </>
    )
  }
  
  const Stocks = ({ticker, companyName, price, func, image, change, marketcap, yearHigh}) => {

    const ChangePercentIndicator = () => {
     let color;
     let indicator

     if (change?.toString().includes('-')) {
       color = 'text-red-400'
       indicator = <FaAngleDown/>
     }

     else {
      color = 'text-green-400'
      indicator = <FaAngleUp/>
     }
      
      
      return(
            <>
             <div className="flex gap-x-2 items-center">
                <p className={`${color} text-base`}>{indicator}</p>
                <p className={`text-base ${color}`}>{change}%</p>
             </div>
            </>
          )
    }

    return(
      <> 
        <div className="w-full lg:hidden">
          <div onClick={func} className="flex items-center justify-between">
               <div>
               <div className="flex items-center gap-x-2">
                        <img className=" h-12 w-12 object-cover" src={image} alt="" />
                    <div className="">
                        <div className="flex gap-x-4">
                        <h3 className="text-base">{ticker}</h3>
                        <p className="text-sm">{change}%</p>
                        </div>
                        <p className="text-gray-700 text-sm">{companyName}</p>
                    </div>
               </div>
               </div>
               <p>${price}</p>
          </div>
        </div>

        {/* {laptopversion} */}

        <div className="hidden md:block">
        <div onClick={func} className="grid grid-cols-6 items-center gap-x-4 lg:gap-x-6">
                    
                    <div className="col-span-2 flex items-center gap-x-5">
                        <img className=" rounded-full w-10 h-10" src={image} alt="" />
                        <p className="text-gray-700 text-base flex-1">{companyName}</p>
                    </div>
                    <div className="flex justify-center">
                       <h3 className="text-base">{ticker}</h3>
                    </div>
                     <div className="flex justify-center">
                        <ChangePercentIndicator/>  
                      </div>  
                   <div className="flex justify-center">
                   <p>${price}</p>
                   </div>   
                   <div className="flex justify-center">
                   <p>{convertNumberToWords(marketcap)}</p>
                   </div>
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
  function Page ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4,mapElement, mapitem }) {
    const [currentPage, setCurrentPage] = useState(1);
   
    
    const itemsPerPage = 5;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const  currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.round(data?.length / itemsPerPage)

    console.log(healthcareStocks)

    function handleDecreaseSlide(params) {
      if(currentPage == 1) return
      setCurrentPage(currentPage - 1)
      console.log('clicked')
    }
    function handleIncreaseSlide(params) {
      if(currentPage == totalPages) return
      setCurrentPage(currentPage + 1)
      console.log('clicked')
    }
  
    return (
      <>
      {!searchTerm && <Pagination activePage={currentPage} total={totalPages} inc={handleIncreaseSlide} dec={handleDecreaseSlide} setPage={setCurrentPage} />}
      <div className="flex w-full md:py-8">
           <div className="flex flex-1  md:gap-y-10 py-8 px-2 flex-col">
            <div className="hidden md:grid grid-cols-6 pb-6 border-b-2 border-gray-200">
                 <div className="col-span-2">
                 <span className="text-lg font-semibold text-blk" >Name</span>
                 </div>
                 <div className="flex justify-center">
                 <h3 className="text-lg font-semibold text-blk">Ticker</h3>
                 </div>
                 <div className="flex justify-center">
                 <span className="text-lg font-semibold text-blk">Change</span>
                 </div>
                 <div className="flex justify-center">
                 <span className="text-lg font-semibold text-blk">Last Price</span>
                 </div>            
                 <div className="flex justify-center">
                 <span className="text-lg font-semibold text-blk">Market Cap</span>
                 </div>
                          
            </div>
           <div className="flex flex-col gap-y-10">
           {
        currentItems.map((stock,index)=>{
    
          return(
            <Stocks key={index} func={()=> {
              handleStockScreen(stock)
           }}  image={
               urlFor(stock?.logo) && urlFor(stock?.logo)
              //  bitcoin
           } ticker={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price} marketcap={stock.marketcap} yearHigh={stock.yearHigh}/>
          )
        })
      }
           </div>
           </div>
       </div>
       {!searchTerm && <Pagination activePage={currentPage} total={totalPages} inc={handleIncreaseSlide} dec={handleDecreaseSlide} setPage={setCurrentPage} />}
      </>
    );
  };

  const HomeScreen = () => {
    
    return(
      <div className="flex justify-center sm:px-6 ">
        <div className="pt-4 pb-[120px] lg:container w-full  max-w-4xl">
       
       {!searchTerm && <div className="p-4">
          <h3 className="text-2xl text-blk font-semibold">{activeListTitle} Stocks</h3>
       </div>}
       {/* <div className="flex w-full">
           <div className="flex flex-1 gap-y-8 py-8 px-2 flex-col">
               {
                 !activeList ? testStocks?.map((stock, index) => {
                       return(
                           <Stocks func={()=> {
                             handleStockScreen(stock)
                          }} key={index} image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
                           )
                   })
                   :
                   activeList?.map((stock, index) => {
                    return(
                        <Stocks func={()=> {
                          handleStockScreen(stock)
                       }} key={index} image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
                        )
                })
               }
           </div>
       </div> */}
       <Page data={activeList ? activeList : techStocks
       }/>

       {/* <Page data={()=>{
        if (searchTerm) {
          stockList?.filter((stock)=>{
            return stock?.companyName.toLowerCase().includes(searchTerm.toLowerCase())
          })
        }
       return activeList ? activeList : techStocks
       } }/> */}
       
      </div>
      </div>
    )
  }

  // const HandleTitle = () => {
  //   let Title

  // switch (activeListTitle) {
  //   case 'Technology':
  //     Title = 'Technology Stocks'  
  //     break;
  //   case 'Finance':
  //     Title = 'Finance Stocks'  
  //     break;
  //   case 'Communication':
  //     Title = 'Communication Stocks'  
  //     break;
  //   case 'Healthcare':
  //     Title = 'Healthcare Stocks'  
  //     break;
  
  //   default:
  //     Title = 'Technology Stocks'
  //     break;
  // }

  // return Title

  // }

    return(
      <>
      <div className=" lg:hidden"><Header func={()=> window.location.replace('/dashboard/portfolio')} halfmenu={true}/></div>
      <div className="space-y-4 sm:min-w-[700px] pt-8">
          <div className="flex  px-4 sm:px-6 sm:justify-center">
              <h3 className="text-[28px] font-bold ">Invest in curated stocks Algorhitmically </h3>
          </div>
          <div  className="px-4 sm:flex justify-center  ">
          <div onClick={() => inputref.current.focus()} className="flex sm:w-full items-center space-x-2 p-2 bg-gray-200 rounded-xl max-w-2xl md:min-w-[672px] focus:border-blue-300 ">
               <FaSearch/>
               <hr className="w-px  h-6 bg-slate-200 mx-4" />
               <div className="relative">
               <input value={searchTerm} onChange={e => handleSearch(e.target.value)} ref={inputref} id="searcInput" placeholder="Search stocks" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
          </div>
          </div>
          </div>
          <div className="relative ">
            {!searchTerm && <div className="overflow-x-scroll"><StockTabs/></div>}
            {/* <div className={` z-[-30] absolute top-[40%] flex w-full justify-between bg-red-100  `}>
            </div> */}
       { !searchTerm &&
           <a href="#first" className={`sm:hidden absolute top-[60px] left-0 flex items-center justify-center h-10 w-10 pr-1 z-[4000000]  rounded-full ${pathhash == '#last' ? 'bg-white' : 'bg-white/10' }`}>
              <FaChevronLeft/>
            </a>}
           { !searchTerm &&
            <a  href="#last" className={`sm:hidden absolute top-[60px]  right-0 flex items-center justify-center h-10 w-10 pl-1 z-[4000000]  rounded-full ${!pathhash | pathhash == '#first' ? 'bg-white' : 'bg-white/10'}`}>
              <FaChevronRight/>
            </a>}
            </div>
       </div>
      <HomeScreen/>
      </>
    )
   }

   export default StocksScreen