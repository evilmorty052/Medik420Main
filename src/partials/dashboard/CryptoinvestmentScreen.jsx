import LineChart from "../charts/Linechart"
import { useState, useEffect, useRef, useLayoutEffect,useContext } from "react"
import { FaArrowLeft, FaChevronDown, FaChevronRight, FaChevronUp, FaSearch } from "react-icons/fa"
import { Route, Routes, useNavigate, useParams, Link } from "react-router-dom"
import 
{ bnb, bitcoin, ethereum, avalanche, solana,polygon, link, cardano,
  uniswap,
  xrp,
  polkadot,
  algorand, } from "../../assets"
import styles from "../../style"
import ScaleLoader from "react-spinners/ScaleLoader";
import {Loader}  from "../../components"
import {UseBottomNavigationContext, BottomNavigationContext} from "../../contexts/BottomNavigationContext"
const CryptoinvestmentScreen = ({activecoin}) => {
const navigate = useNavigate()

const {setInvisible} = UseBottomNavigationContext()
    
    const [coinprice, setcoinprice] = useState(null)
    const [dailyprices, setdailyprice] = useState([])
    const [fetching, setfetching] = useState(false)
    const [investing, setinvesting] = useState(false)
    
    // const coinprice = coin?.prices?.prices[31]


 

// const priceincrease = dailyprice?.[31] - dailyprice?.[0]
// const increasesize  = ((dailyprice?.[31] - dailyprice?.[0]) / dailyprice?.[0]) * 100


const InvestmentButton = () => {
  return(
      <>
         <div className="fixed  flex py-4 justify-center items-end left-0 right-0  bg-gray-200/90  bottom-0">
          <button className="bg-green-300 text-gray-800 p-4 text-2xl tracking-wide font-bold rounded-3xl w-11/12">
            Invest
          </button>
        </div>
      </>
  )
}



const CoinScreen = () => {
  const [coin, setcoin] = useState(null)
  const [dailyprice, setDailyprice] = useState()
  
  const id = useParams().id

  useLayoutEffect(() => {
    setInvisible(true)
         
       }, [])

  const coinlist = [
    {
      coin: 'Bitcoin',
      id: 'bitcoin',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua",
      about: 'Bitcoin is a cryptocurrency launched in January 2009 with the first genesis block mined on 9th January 2009. It is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.',
      symbol:'BTC',
      image: bitcoin
    },
    {
      coin: 'Solana',
      id: 'solana',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      symbol:'SOL',
       about: "Solana is a Layer 1 blockchain that offers users fast speeds and affordable costs. It supports smart contracts and facilitates the creation of decentralized applications (dApps). Projects built on Solana include a variety of DeFi platforms as well as NFT marketplaces, where users can buy Solana-based NFT projects. Its high performance means Solana doesn’t require a traditional scaling Layer 2 solution; instead, Layer 2s on Solana focus on interoperability and connecting Solana to other chains. To solve the blockchain trilemma, where developers have to balance decentralization, security and scalability when building blockchains, Solana combines the Proof-of-History (PoH) consensus mechanism alongside the more common Proof-of-Stake. This lets Solana achieve consensus more quickly by reducing the workload.Proof-of-History is a time-based consensus mechanism that develops a historical record of an activity based on its position in the blockchain, which is represented by a hash tree. This lets any node quickly verify the order of all transactions by checking the hashes on the hash tree, allowing for fast and efficient validation without requiring the nodes to store the full history of every transaction.",
      image: solana

    },
    {
      coin: 'Ethereum',
      id: 'ethereum',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      about: "Ethereum is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity. As the first blockchain to feature smart contracts, it has the largest ecosystem of decentralized applications, ranging from decentralized exchanges to crypto lending and borrowing platforms and more.   Ethereum is also home to numerous Layer 2 solutions that offer users a cheaper and faster way to process transactions on the blockchain. Some of these solutions include Arbitrum, which rolls up multiple transactions into a single transaction on Ethereum, and Polygon’s Proof-of-Stake chain, which is a sidechain that runs parallel to the Ethereum blockchain. ",
      symbol:'ETH',
      image: ethereum

    },
    {
      coin: 'Avalanche',
      id: 'avalanche-2',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'AVAX',
      about: "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly. Mainnet was launched in September 21, 2020. Since then, the platform has grown to secure over 100+ individual projects, $1.4M+ of AVAX burned (reducing supply), 950+ individual block-producing validators, and over 500k+ community members around the globe. Decentralized finance (DeFi) applications can be found on Avalanche such as Pangolin, TraderJoe and Benqi. While popular games on Avalanche includes Crabada.",
      image: avalanche

    },
    {
      coin: 'Binance Coin',
      id: 'binancecoin',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      about: "Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain. Binance Coin has seen massive growth in interest throughout the years. Several rounds of token burn events have appreciated BNB price and pushed it up as one of the top-10 cryptocurrencies by market capitalization. BNB can be traded in over 300 trading pairs across 120 exchanges tracked.",
      symbol:'BNB',
      image: bnb

    },
    {
      coin: 'Polygon',
      id: 'matic-network',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Matic',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: polygon
    },
    {
      coin: 'Uniswap',
      id: 'uniswap',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Uni',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: uniswap
    },
    {
      coin: 'Chain-Link',
      id: 'chainlink',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Link',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: link
    },
    {
      coin: 'Algorand',
      id: 'algorand',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'algo',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: algorand
    },
    {
      coin: 'Cardano',
      id: 'cardano',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'ada',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: cardano
    },
    {
      coin: 'Ripple',
      id: 'ripple',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'XRP',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: xrp
    },
    {
      coin: 'Polkadot',
      id: 'polkadot',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'dot',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: polkadot
    }
]

const [token, settoken] = useState(coinlist.filter((coin)=>{
  return coin.id == id
}))


  const fetchCoin = async () => {
  const coin = await  fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=31&interval=daily`).then((res)=> res.json())
  const dailyprice = coin?.prices?.map((price)=>{
    return price[1]
})
  setcoin(coin)
  setDailyprice(dailyprice)
  console.log(coin)
  }


  useEffect(() => {
//     if(!token) return
//  fetch(`https://api.coingecko.com/api/v3/coins/${token.id}/market_chart?vs_currency=usd&days=31&interval=daily`).then((res)=> res.json()).then((res)=>{
//    res &&  setfetching(true)
//    res && setcoin(res)
// //    res && setcoinprice(coin?.prices[31])
// //    res && console.log(coinprice)
//     })
fetchCoin()
     
   }, [])


const [coinprice, setcoinprice] = useState(dailyprice?.[31])
 const coinvolume = coin?.total_volumes?.[31]
 const volume = coinvolume?.[1]
 const coincaps = coin?.market_caps?.[31]
 const marketcap = coincaps?.[1]



 const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

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

 const CoinscreenHeader = () => {
    return(
        <>
        <div className="px-4  flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="w-10">
                <img src={token[0].image} alt="" />
              </div>
              <div className="mb-4">
                <h3 className={"text-2xl font-bold text-gray-800"}>
                  {token[0].coin}
                </h3>
                <p className="text-xl mt-1 font-extrabold">
                  {formatter.format(dailyprice?.[31])}
                </p>
              </div>

              {/* <div>high volatility</div> */}
            </div>
            {/* <div className="pb-10">
              <a className="btn ">
                Invest in {token.coin}
              </a>
            </div> */}
          </div>
        </>
    )
 }

 const CoinScreenChart = () =>{
    return(
        <>
         <div className="">
            <LineChart
              entries={dailyprice}
              label={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ]}
            />
          </div>
        </>
    )
 }

 const CoinOverview = () => {
  const [readmore, setreadmore] = useState(null)
    return(
        <>
        
        <div className=" sm:px-0  space-y-10 sm:hidden ">
            {/* <h3 className="text-2xl font-bold text-gray-800">Overview</h3> */}
            <div>
              <h3 className={styles.UiSubHeading}>About {token.coin}</h3>
              <div className="py-2">
               <div className="">
               <p className={`text-base font-medium transition-all duration-500 ease-in`}>
                  {!readmore ? `${token[0].about.slice(0, 100)}...`  : token[0].about} 
                  <div onClick={()=> setreadmore(!readmore)} className="py-2 flex items-center space-x-2 cursor-pointer">
                      <span>{!readmore ? 'Read More' : 'Read less'}</span>
                      <span>{!readmore ? <FaChevronDown/> : <FaChevronUp/>}</span>
                   </div>
                </p>
               </div>
                <div className="py-8 border-b border-b-gray-400 sm:hidden ">
                  {/* {token stats} */}
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Symbol</span>
                      <span className="font-semibold text-gray-700">{token.symbol}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Coin price</span>
                      <span className="font-semibold text-gray-700">{formatter.format(dailyprice?.[31])}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">24h Volume</span>
                      <span className="font-semibold text-gray-700">{convertNumberToWords(volume)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Market cap</span>
                      <span className="font-semibold text-gray-700">{convertNumberToWords(marketcap)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
    )
 }

 const TabletCoinOverview = () => {
  const [readmore, setreadmore] = useState(true)
    return(
        <>
        
        <div className=" sm:px-0  space-y-10  ">
            {/* <h3 className="text-2xl font-bold text-gray-800">Overview</h3> */}
            <div>
              <h3 className={"text-2xl  text-blk font-semibold tracking-wide"}>About {token.coin}</h3>
              <div className="py-2">
               <div className="">
               <p className={`text-xl text-blk font-medium leading-relaxed transition-all duration-500 ease-in`}>
               {!readmore ? `${token[0].about.slice(0, 100)}...`  : token[0].about}  
                  <div onClick={()=> setreadmore(!readmore)} className="py-2 flex items-center space-x-2 cursor-pointer">
                      <span>{!readmore ? 'Read More' : 'Read less'}</span>
                      <span>{!readmore ? <FaChevronDown/> : <FaChevronUp/>}</span>
                   </div>
                </p>
               </div>
                <div className="py-8 border-b border-b-gray-400 sm:hidden ">
                  {/* {token stats} */}
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Symbol</span>
                      <span className="font-semibold text-gray-700">{token.symbol}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Coin price</span>
                      <span className="font-semibold text-gray-700">{formatter.format(coinprice)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">24h Volume</span>
                      <span className="font-semibold text-gray-700">{formatter.format(volume)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-gray-800  ">Market cap</span>
                      <span className="font-semibold text-gray-700">{formatter.format(marketcap)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
    )
 }

 const TabletStats = () => {
  return(
    <>
     <div className="hidden sm:block space-y-8 bg-gray-200/70 px-2 lg:px-4 py-8 rounded-xl">
          <span className="text-xl text-blk font-semibold">{token[0].symbol} Overview</span>

                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="font-semibold  text-xs md:text-base text-gray-800  ">Symbol</span>
                      <span className="font-semibold text-gray-700  text-xs md:text-base">{token[0].symbol}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-xs md:text-base text-gray-800  ">Coin price</span>
                      <span className="font-semibold text-gray-700  text-xs md:text-base">{formatter.format(dailyprice?.[31])}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-xs md:text-base text-gray-800  ">24h Volume</span>
                      <span className="font-semibold text-gray-700  text-xs md:text-base">{convertNumberToWords(volume)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-semibold text-xs md:text-base text-gray-800  ">Market cap</span>
                      <span className="font-semibold text-gray-700 text-xs md:text-base ">{convertNumberToWords(marketcap)}</span>
                    </li>
                  </ul>
                    <div>
                      {/* <input/> */}
                    </div>
                     {/* big screens invest button */}
          <p className="btn text-center hidden sm:block">
            Invest in {token[0].symbol}
          </p>
     </div>
    </>
  )
 }

 const InvestmentButton = () => {
    return(
        <>
           <div className=" fixed bottom-0 w-full py-4 flex justify-center items-end  bg-white/50   ">
            <button className="bg-green-300 text-gray-800 p-4 text-2xl tracking-wide font-bold rounded-3xl w-11/12">
              Invest
            </button>
          </div>
        </>
    )
 }

 const BackButton = () => {
  return(
    <>
       {/* back button */}
       <div className="w-full p-4  bg-white">
           <div onClick={()=> navigate(-1)} className="flex items-center space-x-2">  <FaArrowLeft/> 
           <span>Back</span> <span className="hidden sm:block">to cryptocurrencies</span>
           </div>
       </div>

    </>
  )
 }

 function Faq(params) {
  return(
    <>
    {/* <!-- FAQ --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Questions about crypto?</h2>
    <p className="mt-1 text-gray-600 ">Answers to the most frequently asked questions about crypto.</p>
  </div>
  {/* <!-- End Title --> */}

  <div className="max-w-2xl mx-auto">
    {/* <!-- Accordion --> */}
    <div className="hs-accordion-group">
      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6  active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
        <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none  a hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
        What is cryptocurrency?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
          <p className="text-gray-800 ">
          Cryptocurrency is a virtual currency that, like cash, is a source of purchasing power. It’s also an avenue for investment and, like other investment assets, can be bought with the objective of financial return. Unlike most forms of currency, cryptocurrencies are decentralized, meaning they are not issued, backed, or regulated by a central authority like the U.S. government.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-two">
        <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
        Is buying cryptocurrency a good investment?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
          <p className="text-gray-800 ">
          Whether crypto will be a good investment for you depends on many factors. As with all investing, the answer comes down to things like your tolerance for risk, both in financial terms and in psychological terms, and your time horizon, as well as how diversified your portfolio is. The volatility of crypto means that the value of your coins can go up or down quickly, and sometimes dramatically.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-three">
        <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
        Are there any fees for crypto?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
          <p className="text-gray-800 ">
           There are no extra fees for adding any crypto to smart portfolio.
          </p>
        </div>
      </div>

      {/* <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-four">
        <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
          How secure is Preline?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
          <p className="text-gray-800 dark:text-gray-200">
            Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-five">
        <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
          How do I get access to a theme I purchased?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
          <p className="text-gray-800 ">
            If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-six">
        <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
          Upgrade License Type
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
          <p className="text-gray-800 ">
            There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
          </p>
        </div>
      </div> */}
    </div>
    {/* <!-- End Accordion --> */}
  </div>
</div>
{/* <!-- End FAQ --> */}
    </>
  )
}


const height = window.innerHeight

    if(!coin){
      return (
       <Loader/>
      )
    }

    return (
      <>
       
        <div className={`bg-white pb-[70px]   md:min-h-screen md:container md:mx-auto   md:pb-10`}>
       <BackButton/>
        <div className="pt-4  sm:hidden px-2  ">
         <CoinscreenHeader/>
         <CoinScreenChart/>
         <CoinOverview/>
         <div className="hiddenfromtabupwards">
          <InvestmentButton/>  
         </div>
        </div>

        {/* large display */}
        <div className="pt-4 hidden  sm:block space-y-12 max-w-4xl md:container md:mx-auto xl:max-w-5xl   ">      
        <CoinscreenHeader/>
        <div className="  grid grid-cols-12 gap-x-2 px-2 items-start md:px-4 md:gap-x-8 ">
        <div className="col-span-8 self-stretch">
        <CoinScreenChart/>
        </div>
        <div className="col-span-4 self-center">
        <TabletStats/>
        </div>
        </div>   
       <div className="px-4">
       <TabletCoinOverview/>
       </div>
        </div>
        <Faq/>
        </div>
      </>
    );
}

const AllCrypto = () =>{

  useLayoutEffect(() => {
    setInvisible(true)
         
       }, [])

  const coinlist = [
    {
      coin: 'Bitcoin',
      id: 'bitcoin',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qua",
      about: 'Bitcoin is a cryptocurrency launched in January 2009 with the first genesis block mined on 9th January 2009. It is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.',
      symbol:'BTC',
      image: bitcoin
    },
    {
      coin: 'Solana',
      id: 'solana',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
      symbol:'SOL',
       about: "Solana is a Layer 1 blockchain that offers users fast speeds and affordable costs. It supports smart contracts and facilitates the creation of decentralized applications (dApps). Projects built on Solana include a variety of DeFi platforms as well as NFT marketplaces, where users can buy Solana-based NFT projects. Its high performance means Solana doesn’t require a traditional scaling Layer 2 solution; instead, Layer 2s on Solana focus on interoperability and connecting Solana to other chains. To solve the blockchain trilemma, where developers have to balance decentralization, security and scalability when building blockchains, Solana combines the Proof-of-History (PoH) consensus mechanism alongside the more common Proof-of-Stake. This lets Solana achieve consensus more quickly by reducing the workload.Proof-of-History is a time-based consensus mechanism that develops a historical record of an activity based on its position in the blockchain, which is represented by a hash tree. This lets any node quickly verify the order of all transactions by checking the hashes on the hash tree, allowing for fast and efficient validation without requiring the nodes to store the full history of every transaction.",
      image: solana

    },
    {
      coin: 'Ethereum',
      id: 'ethereum',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      about: "Ethereum is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity. As the first blockchain to feature smart contracts, it has the largest ecosystem of decentralized applications, ranging from decentralized exchanges to crypto lending and borrowing platforms and more.   Ethereum is also home to numerous Layer 2 solutions that offer users a cheaper and faster way to process transactions on the blockchain. Some of these solutions include Arbitrum, which rolls up multiple transactions into a single transaction on Ethereum, and Polygon’s Proof-of-Stake chain, which is a sidechain that runs parallel to the Ethereum blockchain. ",
      symbol:'ETH',
      image: ethereum

    },
    {
      coin: 'Avalanche',
      id: 'avalanche-2',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'AVAX',
      about: "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly. Mainnet was launched in September 21, 2020. Since then, the platform has grown to secure over 100+ individual projects, $1.4M+ of AVAX burned (reducing supply), 950+ individual block-producing validators, and over 500k+ community members around the globe. Decentralized finance (DeFi) applications can be found on Avalanche such as Pangolin, TraderJoe and Benqi. While popular games on Avalanche includes Crabada.",
      image: avalanche

    },
    {
      coin: 'Binance Coin',
      id: 'binancecoin',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      about: "Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance. Initially created on the Ethereum blockchain as an ERC-20 token in July 2017, BNB was migrated over to Binance Chain in February 2019 and became the native coin of the Binance Chain. Binance Coin has seen massive growth in interest throughout the years. Several rounds of token burn events have appreciated BNB price and pushed it up as one of the top-10 cryptocurrencies by market capitalization. BNB can be traded in over 300 trading pairs across 120 exchanges tracked.",
      symbol:'BNB',
      image: bnb

    },
    {
      coin: 'Polygon',
      id: 'matic-network',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Matic',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: polygon
    },
    {
      coin: 'Uniswap',
      id: 'uniswap',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Uni',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: uniswap
    },
    {
      coin: 'Chain-Link',
      id: 'chainlink',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'Link',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: link
    },
    {
      coin: 'Algorand',
      id: 'algorand',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'algo',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: algorand
    },
    {
      coin: 'Cardano',
      id: 'cardano',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'ada',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: cardano
    },
    {
      coin: 'Ripple',
      id: 'ripple',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'XRP',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: xrp
    },
    {
      coin: 'Polkadot',
      id: 'polkadot',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ",
      symbol:'dot',
      about: " Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.Nothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem.  The $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
      image: polkadot
    }
]
  const [coinQuery, setcoinQuery] = useState('')
  const [coins, setcoins] = useState(coinlist)

  const filter = coinlist.filter((coin)=>{ 
      if (coin.coin.toLowerCase().startsWith(coinQuery?.toLowerCase())) {
        return coin
      }
  })

  useEffect(() => {
    if (coinQuery) {
      setcoins(filter)
    }
   else(setcoins(coinlist))
  }, [coinQuery])
  
  const handleSearch = (e) => {
  setcoinQuery(e)
  
  }

const CoinCard = ({header, buttontext, func, description, image, coinName, to}) => {
  return(
      <>
       <Link to={`${to}`} className="flex items-center space-x-4 min-w-[300px] max-w-[350px] px-2 p-2 bg-gray-100 rounded-xl">
           <div className="p-2  rounded-xl w-20 ">
              <img src={image} alt="" className="w-full" />
           </div>
           <div className="flex items-center space-x-2">
               <div className="flex-1">
                  <h3 className="text-xl font-semibold">{header}</h3>
                  <p className=" text-sm leading-normal" >Invest in {coinName} with Price Protection </p>
               </div>
               <button onClick={func} className=" self-center flex items-center  pl-1"><FaChevronRight/></button>
           </div>
       </Link>
      </>
  )
}

 
    return(
        <>
        {/* back button */}
        <div className="w-full p-2 mb-2 bg-white ">
       <div onClick={()=> navigate(-1)} className="flex items-center space-x-2"> 
        <FaArrowLeft/> 
        <span>Back <span className="hidden md:inline">to all investments</span></span></div>
       </div>

         <div className="bg-white min-h-screen px-2 ">

          {/* {coin header} */}
         <div className="space-y-8 sm:min-w-[700px]">
        <div className="flex flex-col sm:justify-center   px-4 mb-2">
            <h3 className="text-lg leading-tight font-bold sm:text-center sm:text-2xl ">Build Your Crypto Portfolio With Protection</h3>
             <p className="text-xs sm:text-center">Smart Portfolio will automatically calculate entry and exit points according to your risks setting</p>
        </div>
        </div>
        <div className="px-4 py-4 md:flex justify-center">
          <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-xl max-w-[768px] md:min-w-[768px]">
               <FaSearch/>
               <hr className="w-px  h-6 bg-slate-200 mx-4" />
               <input value={coinQuery} onChange={(e) => handleSearch(e.target.value)} placeholder="Search all Crypto" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
          </div>
         </div>

        <div  className="pb-[80px] sm:flex justify-center md:pt-10">
        <ul className="flex gap-y-8 flex-col sm:grid grid-cols-2 grid-flow-row md:grid-cols-3 sm:gap-x-4 items-center  ">
                {coins.map((coin)=>{
                    return(
                        <>
                        <CoinCard func={()=> {
                            // navigate('coin')
                        }
                            
                            } to={`coin/${coin.id}`} description={coin.description} coinName={coin.coin} header={coin.coin} image={coin.image} buttontext='Explore'/>
                        </>
                    )
                })}
        </ul>
        </div>
         </div>
         
        </>
    )
}




    
  return(
    <>
 {/* <div className="w-full p-2 mb-2 bg-white ">
       <div onClick={()=> navigate(-1)} className="flex items-center space-x-2"> 
        <FaArrowLeft/> 
        <span>Back <span className="hidden md:inline">to all investments</span></span></div>
   </div> */}
   <Routes>
    <Route path='/' element={<AllCrypto/>}/>
    <Route path='coin/:id' element={<CoinScreen/>}/>
   </Routes>
      
    </>
  )
}

export default CryptoinvestmentScreen




