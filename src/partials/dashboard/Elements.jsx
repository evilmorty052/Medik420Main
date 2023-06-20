import { motion } from "../../hooks/useMotion"
import { FaChild, FaCheck, FaSearch, FaInfoCircle, FaChevronRight, FaChevronLeft, FaChevronDown} from "react-icons/fa"
import { useState, useEffect, useRef, Fragment } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { bitcoin, startupstab, digitalfarmstab, syndicatesicon, stockstab, mixedfarm, cbd, hemplogo} from "../../assets"
import pattern from '../../assets/pattern.png'
import stashlogo from '../../assets/stashlogo.png'
import { Listbox, Transition } from '@headlessui/react'
import {message} from "antd"

export const FeedbackMessage = (feedback) => {
  return message.info(`${feedback}`)
}

export const PaymentOptions = () => {
  return(
    <>

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            Connect wallet
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
        <ul class="my-4 space-y-3">
            <li>
                <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                    <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"/><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"/></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" svg class="h-5"viewBox="0 0 75.591 75.591" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#ff1b2d"/><stop offset=".3" stop-color="#ff1b2d"/><stop offset=".614" stop-color="#ff1b2d"/><stop offset="1" stop-color="#a70014"/></linearGradient><linearGradient id="b" gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#9c0000"/><stop offset=".7" stop-color="#ff4b4b"/><stop offset="1" stop-color="#ff4b4b"/></linearGradient><g transform="matrix(1.3333 0 0 -1.3333 0 107.2)"><path d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z" fill="url(#a)"/><path d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297" fill="url(#b)"/></g></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-5" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient cx="0%" cy="50%" fx="0%" fy="50%" r="100%" id="radialGradient-1"><stop stop-color="#5D9DF6" offset="0%"></stop><stop stop-color="#006FFF" offset="100%"></stop></radialGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo"><rect id="base" fill="url(#radialGradient-1)" x="0" y="0" width="512" height="512" rx="256"></rect><path d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z" id="WalletConnect" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"/><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"/></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
                </a>
            </li>
        </ul>
        <div>
            <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                <svg class="w-3 h-3 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>
                Why do I need to connect with my wallet?</a>
        </div>
    </div>

    </>
  )
}


export const PortfolioCard = ({header, buttontext, func, description}) => {
    return(
        <>
         <motion.div animate={{opacity: 1}} initial={{opacity: 0}} whileTap={{scale:1.2}} whileHover={{scale:1.2}} className="flex items-center space-x-4 bg-gray-200 max-w-[350px] px-2 py-4 rounded-xl">
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
         </motion.div>
        </>
    )
}

export const Pricing = () => {
    const PricingCard = () =>{
        return(
            <>
            <div
        className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative space-y-6 p-8 sm:p-12">
            <h3 className="text-center text-3xl font-semibold text-gray-700 ">Premium</h3>
            <div>
              <div className="relative flex justify-around">
                <div className="flex items-end">
                  <span className="leading-0 text-8xl font-bold text-gray-800 ">35</span>
                  <div className="pb-2">
                    <span className="block text-2xl font-bold text-gray-700 ">%</span>
                    <span className="block text-xl font-bold  text-green-500">Off</span>
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600 ">
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Second advantage weekly</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Third advantage donate to project</span>
              </li>
            </ul>
            <a  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white dark:text-dark">Subscribe</span>
            </a>
          </div>
        </div>
    
        <div className="group relative md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
            <ul role="list" className="space-y-4 py-6 text-gray-600 ">
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Second advantage weekly</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Third advantage donate to project</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-white">
              Team can be any size, and you can add or switch members as needed. Companies using
              our platform include:
            </p>
            <div className="mt-6 flex justify-between gap-6">
              <img
                className="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                className="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img className="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                className="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </div>
        </div>
      </div>
            </>
        )
    }
    const TrialCard = () =>{
    const [expanded, setexpanded] = useState(null)
        return(
            <>
            <div
        className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
      >
        <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <div className="relative space-y-6 p-8 sm:p-12">
            <h3 className="text-center text-3xl font-semibold text-gray-700 ">Free Trial</h3>
            <div>
              <div className="relative flex justify-around">
                <div className="flex items-end">
                  <span className="leading-0 text-8xl font-bold text-gray-800 ">$0</span>
                  <div className="pb-2">
                    {/* <span className="block text-2xl font-bold text-gray-700 ">$</span>
                    <span className="block text-xl font-bold  text-green-500"></span> */}
                  </div>
                </div>
              </div>
            </div>
            <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600 ">
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Shared Portfolio</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Smart Portfolio</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-gray-500 inline-block"><FaCheck/></span>
                <span className=" line-through">Unlimited Protected Investments</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>3 Protected Investments</span>
              </li>
              {/* <li className="flex items-center justify-center w-full space-x-2">
                <p onClick={()=> setexpanded(!expanded)} className="uppercase">View More</p>
                <span onClick={()=> setexpanded(!expanded)} className="font-semibold text-green-500 inline-block"><FaAngleDown/></span>
              </li> */}
            </ul>
            <a  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white dark:text-dark">Subscribe</span>
            </a>
          </div>
        </div>
    
       {/* { expanded && 
       <AnimatePresence>
 <motion.div key={'jkj'} layout={'position'} exit={{x: '-100%'}} transition={{duration: 0.7}} className="group relative md:w-6/12 lg:w-7/12">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
          ></div>
          <motion.div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
            <ul role="list" className="space-y-4 py-6 text-gray-600 ">
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>First premium advantage</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Second advantage weekly</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Third advantage donate to project</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold  text-green-500 inline-block"><FaCheck/></span>
                <span>Fourth, access to all components weekly</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-white">
              Team can be any size, and you can add or switch members as needed. Companies using
              our platform include:
            </p>
            <div className="mt-6 flex justify-between gap-6">
              <img
                className="w-16 lg:w-24"
                src="images/clients/airbnb.svg"
                loading="lazy"
                alt="airbnb"
              />
              <img
                className="w-8 lg:w-16"
                src="images/clients/bissell.svg"
                loading="lazy"
                alt="bissell"
              />
              <img className="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
              <img
                className="w-20 lg:w-28"
                src="images/clients/microsoft.svg"
                loading="lazy"
                alt="microsoft"
              />
            </div>
          </motion.div>
        </motion.div>
       </AnimatePresence>
       
        } */}
      </div>
            </>
        )
    }



    return(
        <>
        
        <div className="xl:container m-auto px-6 pb-[83px] pt-10 md:px-12 lg:px-20">
      <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
      <h2 className="text-3xl font-bold text-gray-800 text-center py-4 md:text-4xl">
          Pricing
        </h2>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          You need a Subscription to  access premium features 
        </h2>
      </div>
     <div className=" space-y-10">
     <PricingCard/>
     <TrialCard/>
    </div> 
      
    </div>
                                        
        </>
      )
}

export const Tabs = ({image, firstref, lastref}) => {

  const [invisible, setinvisible] = useState(false)
  const [scrolled, setscrolled] = useState(false)
  

  const first = useRef()
  const last =  useRef()



    return(
      <>
      <div className=" relative">

        {/* tab container */}

       <div className="gap-x-4 flex sm:justify-center  overflow-x-scroll">
       <Link to={'crypto'}> 
       <div ref={first} >
           <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${bitcoin})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Crypto</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'startups'}> 
       <div>
           <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${startupstab})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Pipe Funding</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'/dashboard/stocks'}> 
       <div>
           <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${stockstab})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Stocks</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>
       <Link to={'/dashboard/digitalfarmshop'}> 
       <div ref={last} >
           <div className=" w-32 h-32   p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${digitalfarmstab})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Digital Farms</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link>

       {/* <Link to={'syndicates'}> 
       <div ref={last} >
           <div className="  w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{backgroundImage: `url(${syndicatesicon})`}}>
              <div className="z-50">
                 <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Syndicates</h3>
              </div>
             <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
           </div>
       </div>
       </Link> */}
       
      
       </div>

       {/* {tab controls} */}


       <div onClick={() => {
            first.current.scrollIntoView({ behavior: 'smooth' })
             setscrolled(false)
             setinvisible(false)
             
            }}  className={`sm:hidden absolute  top-[60px] left-0 flex items-center justify-center h-10 w-10 pr-1 z-[40]  rounded-full ${scrolled ? 'bg-white' : 'bg-white/10' }`}>
              <FaChevronLeft/>
       </div>
            <div  onClick={() => {
              last.current.scrollIntoView({ behavior: 'smooth' })
               setinvisible(true)
               setscrolled(true)
              }} className={`sm:hidden absolute top-[60px]  right-0 flex items-center justify-center h-10 w-10 pl-1 z-[40]  rounded-full ${!invisible ? 'bg-white' : 'bg-white/10'}`}>
              <FaChevronRight/>
            </div>
      </div>
                
      </>
    )

}

export const FarmTabs = ({image}) => {

  return(
    <>
     <div className="gap-x-10 flex px-2">
     
     <div>
         <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${cbd})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">CBD </h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div>
  
     <div>
         <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${hemplogo})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Cannabis </h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div>
        
     <div>
         <div className=" w-32 h-32  p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${mixedfarm})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Mixed</h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div>
   
     {/* <div>
         <div className="  w-32 h-32 sm:w-44 sm:h-44 p-4 relative bg-gray-200 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{backgroundImage: `url(${bitcoin})`}}>
            <div className="z-50">
               <h3 className="text-white z-50 font-extrabold text-base absolute bottom-2 left-2">Syndicates</h3>
            </div>
           <div className="absolute inset-0 bg-gray-700/40 rounded-xl"></div>   
         </div>
     </div> */}
    
     </div>
    </>
  )

}

export const Infobutton = ({func}) => {
  return (
    <>
      <button onClick={func} className=''>
          <a className='text-gray-500 '>
          <FaInfoCircle style={{fontSize: '14px'}}/>
          </a>
      </button>
    </>
  );
}

export const SearchInvestments = () => {
    const path = useLocation().pathname
    const pathhash = useLocation().hash
    

    
    let view

    const DefaultHeader = () => {
      const [invisible, setinvisible] = useState(false)
      const [scrolled, setscrolled] = useState(false)
    
        return(
            <>
               <div className="space-y-4 sm:min-w-[700px] md:flex flex-col items-center">
            <div className="flex justify-between px-2">
                <h3 className="text-[28px] font-bold">Build Your Investment Portfolio</h3>
                {/* <span>explore investments</span> */}
            </div>
            <div className="px-4 w-full flex sm:justify-center">
            {/* <div className="flex items-center space-x-2 p-2 bg-gray-100 max-w-xl w-full sm:min-w-[700px] md:min-w-[768px] rounded-xl">
                 <FaSearch/>
                 <hr className="w-px  h-6 bg-slate-200 mx-4" />
                 <input placeholder="Search all investments" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
            </div> */}
            </div>
            <div className="relative ">
            <div className="overflow-x-scroll"><Tabs /></div>
           
            </div>
         </div>
            </>
        )
    }
    
    const CryptoHeader = ({invisible}) =>{
        return(
            <>
              { !invisible && <div className="space-y-8 sm:min-w-[700px]">
            <div className="flex sm:justify-center   px-2 mb-4">
                <h3 className="text-[28px] font-bold sm:text-center ">Build Your Crypto Portfolio Safely</h3>
            </div>
         </div>}
            </>
        )  
    }
    
    const SyndicatesHeader = ()=>{
        return(
            <>
              <div className="space-y-8 sm:min-w-[700px]">
            <div className="flex sm:justify-center  px-2 mb-4 ">
                <h3 className="text-[28px] font-bold sm:text-center ">Invest in syndicates to boost your earnings </h3>
                {/* <div className=" bg-red-300 p-2 rounded-full">
                    <span>?</span>
                </div> */}
            </div>
            <div className="px-4">
            <div className="flex items-center space-x-2 p-2 bg-white rounded-xl">
                 <FaSearch/>
                 <hr className="w-px  h-6 bg-slate-200 mx-4" />
                 <input placeholder="Search syndicates" className="flex-1 bg-transparent border-0 focus:border-0 focus:ring-0" type="text" />
            </div>
            </div>
         </div>
         
            </>
        )
    }
    
    switch (path) {
        case '/dashboard/portfolio':
          view =  <DefaultHeader/> 
            break;
        case '/dashboard/Portfolio/crypto':
          view =  <CryptoHeader /> 
        //   setinvisible(true)
            break;
        case '/dashboard/Portfolio/syndicates':
          view =  <SyndicatesHeader />
        //   setinvisible(true)
            break;
        default:
            break;
    }
    
        return(
         <>{view}</>
        )
    }

    const items = [
      { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
      { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
      { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
    ]

    export function Pagination({inc,dec, total, activePage, setPage, targetPage}) {

      const Numbers = () => {
      let index = 0;
      let box = []
      while ( index < total ) {
        index++
        box.push(index)
        
        
      }

        return(
          <>
          {
               box.map((item, indx)=>(
                <a onClick={() => setPage(indx + 1)}
             
                aria-current="page"
                className={`"relative z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-500 ease-in" ${indx +1 == activePage ? "bg-indigo-600 text-white" : "text-blk"}`}
              >
                {
                  indx == 0 ? 1 : indx + 1
                }
              </a>
              ))

          }
          </>
        )
      }
      
      return (
        <div className=" flex items-center justify-between   bg-white px-4 py-3 sm:px-6">
          {/* <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div> */}
          <div className="flex flex-1 items-center justify-center">
            {/* <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div> */}
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <span onClick={dec}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                </span>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                 {
                 <Numbers/>

                 }
                <span onClick={inc}
                  
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </nav>
            </div>
          </div>
        </div>
      )
    }

  export  function Page ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4,mapElement, mapitem }) {
      const [currentPage, setCurrentPage] = useState(1);
     
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
     
    
      const itemsPerPage = 4;
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const  currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.round(data?.length / itemsPerPage)
    
      
    
      
    //  function Circle(params) {
    //   const [circles, setcircles] = useState([])
    
    //   data?.forEach((element, index) => {  
    //   if(index >= totalPages)return
    //   circles.push(element)
    //   });
    
      
    //   console.log(totalPages)
    //  return(
    //   <>
    //   <div className='flex gap-x-[4px] items-center'>
    //   {circles.map((item, index)=>{
    
       
    //     return(
    //       <>
    //        <l1 onClick={()=> setCurrentPage(index+1)}  className={`text-gray-400  ${currentPage == index+1 && 'text-2xl text-green-400'}`}>{<FaCircle/>}</l1>
           
    //       </>
    //     )
    //   })}
    //   </div>
    //   </>
    //  ) 
    //  }
      function handleDecreaseSlide(params) {
        if(currentPage == 1) return
        setCurrentPage(currentPage - 1)
        console.log(currentPage)
      }
      function handleIncreaseSlide(params) {
        if(currentPage == totalPages) return
        setCurrentPage(currentPage + 1)
      }
    
      return (
        <>
        {
          currentItems.map((stock,index)=>{
      
            return(
              <Stocks key={index} func={()=> {
                handleStockScreen()
             }}  image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
            )
          })
        }
       
        </>
      );
    };

  export  function BlankPage ({ data, func, tags, handleFilter, tab1 , tab2, tab3, tab4,mapElement, mapitem }) {
      const [currentPage, setCurrentPage] = useState(1);
     
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
     
    
      const itemsPerPage = 4;
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const  currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.round(data?.length / itemsPerPage)
    
      
    
      
    //  function Circle(params) {
    //   const [circles, setcircles] = useState([])
    
    //   data?.forEach((element, index) => {  
    //   if(index >= totalPages)return
    //   circles.push(element)
    //   });
    
      
    //   console.log(totalPages)
    //  return(
    //   <>
    //   <div className='flex gap-x-[4px] items-center'>
    //   {circles.map((item, index)=>{
    
       
    //     return(
    //       <>
    //        <l1 onClick={()=> setCurrentPage(index+1)}  className={`text-gray-400  ${currentPage == index+1 && 'text-2xl text-green-400'}`}>{<FaCircle/>}</l1>
           
    //       </>
    //     )
    //   })}
    //   </div>
    //   </>
    //  ) 
    //  }
      function handleDecreaseSlide(params) {
        if(currentPage == 1) return
        setCurrentPage(currentPage - 1)
        console.log(currentPage)
      }
      function handleIncreaseSlide(params) {
        if(currentPage == totalPages) return
        setCurrentPage(currentPage + 1)
      }
    
      return (
        <>
        {
          currentItems.map((stock,index)=>{
      
            return(
              <Stocks key={index} func={()=> {
                handleStockScreen()
             }}  image={bitcoin} name={stock.symbol} change={stock.change} companyName={stock.companyName} price={stock.price}/>
            )
          })
        }
       
        </>
      );
    };

   export function SmartPortfolio({firstname, lastname, amount, func}) {

    
      return(
          <>
          <div onClick={func} className='my-4  font-space  rounded-2xl '>
              <div className={` drop-shadow-2xl shadow-2xl w-[340px] h-[200px] xxs:w-[calc(100vw-80px)] ss:max-w-[370px] xxs:h-[230px] sm:min-w-[350px] sm:min-h-[200px]  2xl:min-w-[400px]    p-4  rounded-xl  relative flex items-center `}  style={{
      backgroundImage: `url(${pattern})`,
      backgroundSize: "cover",
    }}>
                   <div className='absolute top-5  left-5'>
                       <h3 className='text-lg text-white'></h3>
                   </div>
                    <div className='px-4 z-40'>
                      <p className='text-3xl text-white font-medium'>{amount ? `${'$ '}${ amount?.toLocaleString('en-us', 'currency')}` : `$ 0`}</p>
                    </div>
                    <div className='absolute bottom-5 left-5 z-40 '>
                      <p className='text-white text-xl uppercase font-medium leading-loose '>Smart Portfolio</p>
                    </div>
                    <div className='absolute left-2 top-2 flex items-center z-40'>
                     <div className=' w-[130px] '>
                     <img src={stashlogo} alt="" className='w-full'/>
                     </div>
                    </div>
                    <div className='absolute top-[45%] right-5 z-50'>
                     <FaChevronRight style={{color: '#ffffff', fontSize: '20px'}}/>
                    </div>
                    <div  className='absolute right-2 bottom-2 z-40'>
                    <span className='text-[6px] text-white'>MEDIK STASH<sup>®</sup> FDIC INSURED</span>
                    </div>
                  <div className='bg-gradient-to-r from-blue-300 to-blue-500 absolute inset-0 opacity-75 rounded-xl shadow-inner '></div>
              </div>
          </div>
          </>
      )
    }
  

  export const VerifiedUser = () => {
    return (
      <>
        <svg
          viewBox="0 0 22 22"
          aria-label="Verified account"
          role="img"
          className="h-4 w-4  fill-green-300"
          
        >
          <g>
            <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
          </g>
        </svg>
      </>
    );
  }

  export const GetVerified = () => {
    return(
      <h3>
        getting Verified
      </h3>
    )
  }

export const Actions = ({ func, image, name}) => {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Connect wallet
        </h5>
        <p className="text-sm font-normal text-gray-500 ">
          Connect with one of our available wallet providers or create a new
          one.
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-4"
                viewBox="0 0 40 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                  fill="#E17726"
                />
                <path
                  d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
                  fill="#E27625"
                />
                <path
                  d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z"
                  fill="#E27625"
                />
                <path
                  d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z"
                  fill="#E27625"
                />
                <path
                  d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z"
                  fill="#E27625"
                />
                <path
                  d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z"
                  fill="#E27625"
                />
                <path
                  d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z"
                  fill="#E27625"
                />
                <path
                  d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z"
                  fill="#E27625"
                />
                <path
                  d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z"
                  fill="#D5BFB2"
                />
                <path
                  d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z"
                  fill="#D5BFB2"
                />
                <path
                  d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z"
                  fill="#233447"
                />
                <path
                  d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z"
                  fill="#233447"
                />
                <path
                  d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z"
                  fill="#CC6228"
                />
                <path
                  d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z"
                  fill="#CC6228"
                />
                <path
                  d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z"
                  fill="#CC6228"
                />
                <path
                  d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z"
                  fill="#CC6228"
                />
                <path
                  d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z"
                  fill="#E27525"
                />
                <path
                  d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z"
                  fill="#E27525"
                />
                <path
                  d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z"
                  fill="#E27525"
                />
                <path
                  d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z"
                  fill="#E27525"
                />
                <path
                  d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z"
                  fill="#F5841F"
                />
                <path
                  d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z"
                  fill="#F5841F"
                />
                <path
                  d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z"
                  fill="#C0AC9D"
                />
                <path
                  d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z"
                  fill="#161616"
                />
                <path
                  d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z"
                  fill="#763E1A"
                />
                <path
                  d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z"
                  fill="#763E1A"
                />
                <path
                  d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z"
                  fill="#F5841F"
                />
                <path
                  d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z"
                  fill="#F5841F"
                />
                <path
                  d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z"
                  fill="#F5841F"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 ">
                Popular
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-5"
                viewBox="0 0 292 292"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                  fill="#3259A5"
                />
                <path
                  d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
                  fill="white"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                svg
                className="h-5"
                viewBox="0 0 75.591 75.591"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <linearGradient
                  id="a"
                  gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                  gradientUnits="userSpaceOnUse"
                  x2="1"
                >
                  <stop offset="0" stop-color="#ff1b2d" />
                  <stop offset=".3" stop-color="#ff1b2d" />
                  <stop offset=".614" stop-color="#ff1b2d" />
                  <stop offset="1" stop-color="#a70014" />
                </linearGradient>
                <linearGradient
                  id="b"
                  gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                  gradientUnits="userSpaceOnUse"
                  x2="1"
                >
                  <stop offset="0" stop-color="#9c0000" />
                  <stop offset=".7" stop-color="#ff4b4b" />
                  <stop offset="1" stop-color="#ff4b4b" />
                </linearGradient>
                <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                  <path
                    d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                    fill="url(#a)"
                  />
                  <path
                    d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                    fill="url(#b)"
                  />
                </g>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-5"
                viewBox="0 0 512 512"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <radialGradient
                    cx="0%"
                    cy="50%"
                    fx="0%"
                    fy="50%"
                    r="100%"
                    id="radialGradient-1"
                  >
                    <stop stop-color="#5D9DF6" offset="0%"></stop>
                    <stop stop-color="#006FFF" offset="100%"></stop>
                  </radialGradient>
                </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="logo">
                    <rect
                      id="base"
                      fill="url(#radialGradient-1)"
                      x="0"
                      y="0"
                      width="512"
                      height="512"
                      rx="256"
                    ></rect>
                    <path
                      d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
                      id="WalletConnect"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </g>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-4"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z"
                  fill="#617BFF"
                />
                <path
                  d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z"
                  fill="#617BFF"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline "
          >
            <svg
              className="w-3 h-3 mr-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="question-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
              ></path>
            </svg>
            Why do I need to connect with my wallet?
          </a>
        </div>
      </div>
    </>
  );
};

export const ListDropdown = ({options, setoption}) => {

const [selected, setSelected] = useState(options?.[0]);

  useEffect(() => {
    setoption?.(selected.name)

  }, [])
  


 

  

  return (
    <>
      <div className=" w-40">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FaChevronDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-40 overflow-y-scroll mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span onClick={()=> setoption?.(person.name)}
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}

export const RecentInvestments = ({investments}) => {

  const InvestmentActivity = ({name, amount, avatar, status}) => {
      return(
        <>
         <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                          <img className="w-8 h-8 rounded-full" src={avatar} alt="Neil image"/>
                      </div>
                      <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate ">
                              {name}
                          </p>
                          <p className="text-sm text-gray-500 truncate ">
                              {status}
                          </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                          {formatter.format(amount)}
                      </div>
                  </div>
              </li>
        </>
      )
    }
   
  return(
      <div className="w-full max-w-2xl p-4 bg-[#f9f8f8] border border-gray-200 rounded-lg shadow-xl sm:p-8 ">
      <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">Recent Investments</h5>
          <Infobutton/>
     </div>
     <div  className="flow-root my-4">
          <ul  role="list" className="divide-y divide-gray-200 ">
               {investments?.map((investment)=>{
        return(
          <InvestmentActivity status={investment.status} avatar={urlFor(investment.startup.image)} amount={investment.amount} name={investment?.startup?.name}/>
        )
       })}
          </ul>
     </div>
     <div className="">
         <div>
             <h3 className="text-[18px] text-gray-600 font-semibold">Revenue:</h3>
             <p className="text-2xl font-bold text-gray-800">$0.00</p>
         </div>
     </div>
  </div>
  )
}

export function VerticalTabs({title,tiles }) {

  return(
    <>
    {/* <!-- Features --> */}
<div className="max-w-[85rem]   sm:px-6 lg:px-8 lg:py-14 sm:mx-auto">
  <div className="relative p-2 sm:p-6 md:p-16">
    {/* <!-- Grid --> */}
    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
          Break Boundaries
        </h2>

        {/* <!-- Tab Navs --> */}
        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">One Hive</span>
                <span className="block mt-1 text-gray-800  "> Join a community of Startups, Investors, and Innovators connected in real time. </span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl " id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">Digital Farming</span>
                <span className="block mt-1 text-gray-800  ">Remotely manage your very own hemp farm from anywhere in the world.</span>
              </span>
            </span>
          </button>

          <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl " id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span className="flex">
              <svg className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
              </svg>
              <span className="grow ml-6">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 ">Bem</span>
                <span className="block mt-1 text-gray-800  ">Learn About Our Business Evaluation Model Fondly Known As B.E.M .</span>
              </span>
            </span>
          </button>
        </nav>
        {/* <!-- End Tab Navs --> */}
      </div>
      {/* <!-- End Col --> */}

      <div className="lg:col-span-6">
        <div className="relative">
          {/* <!-- Tab Content --> */}
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description"/>
            </div>

            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description"/>
            </div>

            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description"/>
            </div>
          </div>
          {/* <!-- End Tab Content --> */}

          {/* <!-- SVG Element --> */}
          <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
          {/* <!-- End SVG Element --> */}
        </div>
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}

    {/* <!-- Background Color --> */}
    <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
      <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
    </div>
    {/* <!-- End Background Color --> */}
  </div>
</div>
{/* <!-- End Features --> */}
    </>
  )
  
}

export function ThreeImagesFeature(params) {
  return(
    <>
    {/* <!-- Features --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    <div className="lg:col-span-7">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
        <div className="col-span-4">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description"/>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-3">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description"/>
        </div>
        {/* <!-- End Col --> */}

        <div className="col-span-5">
          <img className="rounded-xl" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description"/>
        </div>
        {/* <!-- End Col --> */}
      </div>

      {/* <!-- End Grid --> */}
    </div>
    {/* <!-- End Col --> */}

    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
      <div className="space-y-6 sm:space-y-8">
        {/* <!-- Title --> */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
            Collaborative tools to design user experience
          </h2>
          <p className="text-gray-500">
            Use our tools to explore your ideas and make your vision come true. Then share your work easily.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- List --> */}
        <ul role="list" className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-500">
              <span className="font-bold">Less routine</span> – more creativity
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-500">
              Hundreds of thousands saved
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-500">
              Scale budgets <span className="font-bold">efficiently</span>
            </span>
          </li>
        </ul>
        {/* <!-- End List --> */}
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
    </>
  )
}

export function Faq(params) {
  return(
    <>
    {/* <!-- FAQ --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Your questions, answered</h2>
    <p className="mt-1 text-gray-600 ">Answers to the most frequently asked questions.</p>
  </div>
  {/* <!-- End Title --> */}

  <div className="max-w-2xl mx-auto">
    {/* <!-- Accordion --> */}
    <div className="hs-accordion-group">
      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6  active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
        <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none  a hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
          Can I cancel at anytime?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
          <p className="text-gray-800 ">
            Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-two">
        <button className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
          My team has credits. How do we use them?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
          <p className="text-gray-800 ">
            Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-three">
        <button className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
          How does Preline's pricing work?
          <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
          <p className="text-gray-800 ">
            Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
          </p>
        </div>
      </div>

      <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-four">
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
      </div>
    </div>
    {/* <!-- End Accordion --> */}
  </div>
</div>
{/* <!-- End FAQ --> */}
    </>
  )
}

export function IconGrid(params) {
  return(
    <>
    {/* <!-- Icon Blocks --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
    {/* <!-- Card --> */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " >
      <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 ">Build your portfolio</h3>
          <p className="text-gray-600 ">The simplest way to keep your portfolio always up-to-date.</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
          Learn more
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " >
      <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 ">Get freelance work</h3>
          <p className="text-gray-600 ">New design projects delivered to your inbox each morning.</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
          Learn more
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " href="#">
      <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 ">Sell your goods</h3>
          <p className="text-gray-600 ">Get your goods in front of millions of potential customers with ease.</p>
        </div>

        <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 ">
          Learn more
          <svg className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    {/* <!-- End Card --> */}
  </div>
</div>
{/* <!-- End Icon Blocks --> */}
    </>
  )
}

export function VideoHero () {
  return(
    <>
    {/* <!-- Hero --> */}
<div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="max-w-2xl text-center mx-auto">
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl "> Business evaluation made <span className="text-blue-600">simple</span></h1>
      <p className="mt-3 text-lg text-gray-800 ">Build your business here. Take it anywhere.</p>
    </div>

    <div className="mt-10 relative max-w-5xl mx-auto">
      <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
      {/* play button */}

      <div className="absolute inset-0 w-full h-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <a className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-black dark:text-gray-200 dark:hover:text-gray-400 dark:focus:ring-offset-black" href="#">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>
            Play the overview
          </a>
        </div>
      </div>
  {/* end play button */}

    </div>
  </div>
</div>
{/* <!-- End Hero --> */}
    </>
  )
}

export function StackedCards () {
  return(
    <>
    {/* <!-- Icon Blocks --> */}
<div className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
    {/* <!-- Card --> */}
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Build your portfolio</h3>
        </div>
      </div>
      <p className="text-gray-600 ">The simplest way to keep your portfolio always up-to-date.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Get freelance work</h3>
        </div>
      </div>
      <p className="text-gray-600 ">New design projects delivered to your inbox each morning.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Sell your goods</h3>
        </div>
      </div>
      <p className="text-gray-600 ">Get your goods in front of millions of potential customers with ease.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Get freelance work</h3>
        </div>
      </div>
      <p className="text-gray-600 ">New design projects delivered to your inbox each morning.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Sell your goods</h3>
        </div>
      </div>
      <p className="text-gray-600 ">Get your goods in front of millions of potential customers with ease.</p>
    </div>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
          </svg>
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">Build your portfolio</h3>
        </div>
      </div>
      <p className="text-gray-600 ">The simplest way to keep your portfolio always up-to-date.</p>
    </div>
    {/* <!-- End Card --> */}
  </div>
</div>
{/* <!-- End Icon Blocks --> */}
    </>
  )
}

export function StatsGrid(){
  return(
    <>
    {/* <!-- Features --> */}
<div className="max-w-[85rem] px-4  mx-auto">
  {/* <!-- Grid --> */}
  <div className=" grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
    {/* <!-- Stats --> */}
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Accuracy rate</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
      <p className="mt-1 text-gray-500">in fulfilling orders</p>
    </div>
    {/* <!-- End Stats --> */}

    {/* <!-- Stats --> */}
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Startup businesses</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
      <p className="mt-1 text-gray-500">partner with Preline</p>
    </div>
    {/* <!-- End Stats --> */}

    {/* <!-- Stats --> */}
    <div>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Happy customer</h4>
      <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
      <p className="mt-1 text-gray-500">this year alone</p>
    </div>
    {/* <!-- End Stats --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
    </>
  )
}

export function ExplainerVideo () {
  return(
    <>
    <main id="content" role="main">
    {/* <!-- Features --> */}
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="min-h-[35vh] bg-[url('https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[75vh]">
        <div className="absolute bottom-0 left-0 right-0 max-w-xs text-center mx-auto p-6 md:left-auto md:text-left md:mx-0">
          {/* <!-- Card --> */}
          <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800">
            <div className="hidden md:block">
              <h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200">How does Preline work?</h3>
              <p className="mt-2 text-gray-800 dark:text-gray-200">Learn more about Preline.</p>
            </div>

            <div className="md:mt-16">
              <a className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-400" href="#">
                <svg className="w-4 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                </svg>
                Watch our story
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
      </div>
    </div>
    {/* <!-- End Features --> */}
  </main>
    </>
  )
}

export function Footer () {
return(
  <>
  <footer className="bg-gray-900">
  <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 sm:mx-auto">
    {/* <!-- Grid --> */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="col-span-full lg:col-span-1">
      <h2 class="flex-none uppercase  text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span class="text-green-200">420</span>  </h2>
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Product</h4>

        <div className="mt-3 grid space-y-3">
          <Link to={'/pricing'}><p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Pricing</a></p></Link>
          {/* <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Changelog</a></p> */}
          <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Docs</a></p>
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-1">
        <h4 className="font-semibold text-gray-100">Company</h4>

        <div className="mt-3 grid space-y-3">
          <Link to="/team"><p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >About us</a></p></Link>
          <Link to="/blog"><p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" >Blog</a></p></Link>
          <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Careers</a> <span className="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">We're hiring</span></p>
          <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200" href="#">Shopping</a></p>
        </div>
      </div>
      {/* <!-- End Col --> */}

      <div className="col-span-2">
        <h4 className="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div className="w-full">
              <label for="hero-input" className="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email"/>
            </div>
            <a className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="#">
              Subscribe
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            latest news and events from Medik 420 never spam.
          </p>
        </form>
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}

    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">© 2021 Medik420. All rights reserved.</p>
      </div>
      {/* <!-- End Col --> */}

      {/* <!-- Social Brands --> */}
      {/* <div>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
          </svg>
        </a>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </a>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" href="#">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
          </svg>
        </a>
      </div> */}
      {/* <!-- End Social Brands --> */}
    </div>
  </div>
</footer>
  </>
)
}

export function ClientsCloud () {
  return(
    <>
    {/* <!-- Clients --> */}
<div className="sm:max-w-[85rem]   sm:mx-auto">
  {/* <!-- Title --> */}
  <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
    <h2 className="text-gray-600 ">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
  </div>
  {/* <!-- End Title --> */}

  <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
    <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" enable-background="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg"><path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z" fill="currentColor"/></svg>

    <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor"/></svg>

    <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2428 1002"><path fill-rule="evenodd" clip-rule="evenodd" d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z" fill="currentColor"/></svg>

    <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg" width="2500" height="610"><path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836" fill="currentColor"/></svg>
  </div>
</div>
{/* <!-- End Clients --> */}
    </>
  )
}

export function NewsLetter(params) {
  return(
    <>
    {/* <!-- Subscribe --> */}
<div className="max-w-6xl px-4 sm:px-6 lg:px-8  mx-auto py-12">
  <div className="max-w-xl text-center mx-auto">
    <div className="mb-5">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight ">Sign up to our newsletter</h2>
    </div>

    <form>
      <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div className="w-full">
          <label for="hero-input" className="sr-only">Search</label>
          <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 " placeholder="Enter your email"/>
        </div>
        <a className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 " >
          Subscribe
        </a>
      </div>
    </form>
  </div>
</div>
{/* <!-- End Subscribe --> */}
    </>
  )
}

export function SimpleFeature(params) {
  return(
    <>
    {/* <!-- Features --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
      <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}

    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        {/* <!-- Title --> */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
            We are hiring!
          </h2>
          <p className="text-gray-500">
            Built as a remote first company we provide jobs all over the world. find out how you can join one of the fastest growing companies in north america today.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- List --> */}
        <ul role="list" className="space-y-5 sm:space-y-4 max-w-[70%]">

          <li className="flex space-x-3 items-center  justify-between">
            {/* <!-- Solid Check --> */}
            {/* <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg> */}
            {/* <!-- End Solid Check --> */}

            {/* <span className="text-xl sm:text-2xl text-gray-800">
              <span className="font-bold">Explore A.I Training</span> 
            </span>
            <FaChevronRight/> */}
          </li>

          <li className="flex space-x-3 items-center justify-between">
            {/* <!-- Solid Check --> */}
            {/* <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg> */}
            {/* <!-- End Solid Check --> */}

            <Link to={'/jobs'} className="text-xl sm:text-2xl text-gray-800">
              Visit Our job board <span className="font-bold"></span>
            </Link>
            <FaChevronRight/>
          </li>

          
        </ul>
        {/* <!-- End List --> */}
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
    </>
  )
}

 

export function Testimonial (){
  return(
    <>
    {/* <!-- Testimonials --> */}
<div className="overflow-hidden bg-slate-800">
  <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Title --> */}
    <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
        We got the numbers to back it up too.
      </h2>
    </div>
    {/* <!-- End Title --> */}

    {/* <!-- Grid --> */}
    <div className="mt-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
      {/* <!-- Stats --> */}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-white">Funded</h4>
        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">$675M</p>
        <p className="mt-1 text-gray-400">so far this year</p>
      </div>
      {/* <!-- End Stats --> */}

      {/* <!-- Stats --> */}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-white">Analysed</h4>
        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">400+ </p>
        <p className="mt-1 text-gray-400"> With positive feedback</p>
      </div>
      {/* <!-- End Stats --> */}

      {/* <!-- Stats --> */}
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-white">Raised</h4>
        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">$1.2bn</p>
        <p className="mt-1 text-gray-400">for investors since launch..</p>
      </div>
      {/* <!-- End Stats --> */}
    </div>
    {/* <!-- End Grid --> */}

    {/* <!-- SVG Element --> */}
    <div className="absolute bottom-0 right-0 transform lg:translate-x-32" aria-hidden="true">
      <svg className="w-40 h-auto sm:w-72" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" className="fill-orange-500"/>
        <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" className="fill-cyan-500"/>
        <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" className="fill-white"/>
      </svg>
    </div>
    {/* <!-- End SVG Element --> */}
  </div>
</div>
{/* <!-- End Testimonials --> */}
    </>
  )
}

export function MotionContainer({children}){
  return(
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {children}
    </motion.div>
  )
}

export const AnnouncementBanner = ({hidden, setHidden}) => {
  // const [hidden, setHidden] = useState()
  
  return(
    <>
    
{!hidden &&

  <div id="sticky-banner" tabindex="-1" class="hidden  fixed top-[50px] md:top-[59.5px] left-0 z-50 sm:flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 ">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-gray-500 ">
            <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full ">
                <svg class="w-4 h-4 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                </svg>
                <span class="sr-only">Light bulb</span>
            </span>
            <span>Upgrade your plan to get exclusive benefits </span>
        </p>
    </div>
    <div class="flex items-center">
        <button onClick={()=> setHidden(true)} data-dismiss-target="#sticky-banner" type="button" class="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ">
            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>
}
    </>
  )
}