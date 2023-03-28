import React from 'react'
import { FaCheck } from 'react-icons/fa';
import pie from '../assets/pie.svg'
import pie2 from '../assets/pie2.svg'
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  
  return (
    <>
    <Header/>
{/* <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
        <button class="py-1 px-4 focus:outline-none">Annually</button>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
          <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$38</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$56</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$72</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
    </div>
  </div>
</section> */}
<HivePricing/>
<PersonalPricing/>
    </>
  );
};

function Header({close, back}) {
  const history = useNavigate()
  return(
      <div className='absolute top-0 left-0 w-full bg-blk px-4 py-2 flex justify-between z-50'>
          <h2   className="uppercase md:hidden text-gray-50 text-2xl  font-poppins font-black tracking-wide  "> MEDIK<span className="text-green-200">420</span>  </h2> 
          <div  className='flex justify-end items-center'>
            <p onClick={()=> history(-1)}  className='text-white text-xl uppercase'>back</p>
          </div>
      </div>
  )
}

function HivePricing(params) {
  return(
    <>
    
    <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
  <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
  <h2 class="text-3xl font-bold text-gray-800 text-center py-4 md:text-4xl">
      Pricing
    </h2>
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
      Pick From One Of The Subscriptions Below To  Access Premium Features 
    </h2>
  </div>
  <div
    class="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
  >
    <div class="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-5/12">
      <div
        aria-hidden="true"
        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
      ></div>
      <div class="relative space-y-6 p-8 sm:p-12">
        <h3 class="text-center text-3xl font-semibold text-gray-700 dark:text-white">Organisation</h3>
        <div>
          <div class="relative flex justify-around">
            <div class="flex items-end">
              <span class="leading-0 text-8xl font-bold text-gray-800 dark:text-white">35</span>
              <div class="pb-2">
                <span class="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
                <span class="block text-xl font-bold  text-green-500">Off</span>
              </div>
            </div>
          </div>
        </div>
        <ul role="list" class="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>First premium advantage</span>
          </li>
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>Second advantage weekly</span>
          </li>
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>Third advantage donate to project</span>
          </li>
        </ul>
        {/* <p
          class="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300"
        >
          <span>Call us at</span>
          <a href="tel:+24300" class="flex items-center space-x-2  text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <span class="font-semibold">+1 000 000</span>
          </a>
          <span>or</span>
        </p> */}
        <a href="mailto:" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span class="relative text-base font-semibold text-white dark:text-dark">Subscribe</span>
        </a>
      </div>
    </div>

    <div class="group relative md:w-6/12 lg:w-7/12">
      <div
        aria-hidden="true"
        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
      ></div>
      <div class="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
        <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-gray-300">
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>First premium advantage</span>
          </li>
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>Second advantage weekly</span>
          </li>
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>Third advantage donate to project</span>
          </li>
          <li class="space-x-2">
            <span class="font-semibold  text-green-500 inline-block"><FaCheck/></span>
            <span>Fourth, access to all components weekly</span>
          </li>
        </ul>
        <p class="text-gray-700 dark:text-white">
          Team can be any size, and you can add or switch members as needed. Companies using
          our platform include:
        </p>
        <div class="mt-6 flex justify-between gap-6">
          <img
            class="w-16 lg:w-24"
            src="images/clients/airbnb.svg"
            loading="lazy"
            alt="airbnb"
          />
          <img
            class="w-8 lg:w-16"
            src="images/clients/bissell.svg"
            loading="lazy"
            alt="bissell"
          />
          <img class="w-6 lg:w-12" src="images/clients/ge.svg" loading="lazy" alt="ge" />
          <img
            class="w-20 lg:w-28"
            src="images/clients/microsoft.svg"
            loading="lazy"
            alt="microsoft"
          />
        </div>
      </div>
    </div>
  </div>
</div>
                                    
    </>
  )
}

function PersonalPricing(params) {
  return(
    <>
    
   
    <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
  <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
    <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
      A Custom subscription gives you access to  flexible pricing and features
    </h2>
  </div>
  <div
    class="m-auto mt-12 items-center justify-center space-y-6 lg:flex lg:space-y-0 lg:space-x-6 xl:w-10/12"
  >
    <div class="group relative z-10 mx-auto sm:w-7/12 lg:w-4/12">
      <div
        aria-hidden="true"
        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
      ></div>
      <div class="relative space-y-8 p-8">
        <div class="flex items-center justify-between">
          <h5 class="text-xl font-semibold text-gray-700 dark:text-white">Monthly</h5>
          <div class="relative flex justify-around">
            <div class="flex">
              <span class="-ml-6 text-xl font-bold text-sky-500">$</span>
              <span class="leading-0 text-4xl font-bold text-gray-800 dark:text-white">19</span>
            </div>
          </div>
        </div>
        <img
          src={pie2}
          width="512"
          height="512"
          class="m-auto w-16"
          alt="tanzanite illustration"
        />
        <p class="text-center text-gray-600 dark:text-gray-300">
          If you only require access for one developer, this may be the plan for you.
        </p>
        <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span class="relative text-base font-semibold text-sky-600 dark:text-white">Get Started</span>
        </button>
      </div>
    </div>

    <div class="group relative m-auto md:w-10/12 lg:w-8/12">
      <div
        aria-hidden="true"
        class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
      ></div>
      <div class="relative sm:flex">
        <div class="space-y-8 p-8 pb-20 sm:w-7/12 sm:pb-8">
          <div class="flex items-center justify-between">
            <h5 class="text-xl font-semibold text-gray-700 dark:text-white">Complete pack</h5>
            <div class="relative flex justify-around">
              <div class="flex">
                <span class="-ml-6 text-xl font-bold text-sky-500">$</span>
                <span class="leading-0 text-4xl font-bold text-gray-800 dark:text-white">1900</span>
              </div>
            </div>
          </div>
          <img
            src={pie}
            width="512"
            height="512"
            class="m-auto w-16"
            alt="premium illustration"
          />
          <p class="text-center text-gray-600 dark:text-gray-300">
            Wire your account to support 5 developers with a year's worth of unlimited access
            to tailus blocks!
          </p>
          <div class="absolute inset-x-0 bottom-6 w-full px-6 sm:static sm:px-0">
            <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-base font-semibold text-white dark:text-dark">Start plan</span>
            </button>
          </div>
        </div>

        <div class="-mt-16 pb-20 sm:mt-0 sm:w-5/12 sm:pb-0">
          <div
            class="relative h-full before:absolute before:left-0 before:top-1 before:my-auto before:h-0.5 before:w-full before:rounded-full before:bg-gray-200 dark:before:bg-gray-700 sm:pt-0 sm:before:inset-y-0 sm:before:h-[85%] sm:before:w-0.5"
          >
            <div class="relative -mt-1 h-full overflow-x-auto pt-7 pb-6 sm:-ml-1 sm:pl-1">
              <ul
                class="flex h-full w-max justify-center space-x-2 px-6 sm:w-full sm:flex-col sm:space-x-0 sm:space-y-6 sm:px-8"
              >
                <li>
                  <div class="relative">
                    <input checked hidden class="peer" type="radio" name="devs" id="devs20" />
                    <label
                      for="devs20"
                      class="block w-full cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked: text-green-500 peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span class="mx-auto text-sm font-semibold">20 developers</span>
                    </label>
                    <div
                      aria-hidden="true"
                      class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
                <li>
                  <div class="relative">
                    <input hidden class="peer" type="radio" name="devs" id="devs15" />
                    <label
                      for="devs15"
                      class="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked: text-green-500 peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span class="mx-auto block w-max text-sm font-semibold"
                        >15 developers</span
                      >
                    </label>
                    <div
                      aria-hidden="true"
                      class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
                <li>
                  <div class="relative">
                    <input hidden class="peer" type="radio" name="devs" id="devs10" />
                    <label
                      for="devs10"
                      class="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked: text-green-500 peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span class="mx-auto block w-max text-sm font-semibold"
                        >10 developers</span
                      >
                    </label>
                    <div
                      aria-hidden="true"
                      class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
                <li>
                  <div class="relative">
                    <input hidden class="peer" type="radio" name="devs" id="devs5" />
                    <label
                      for="devs5"
                      class="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked: text-green-500 peer-checked:ring-1 peer-checked:ring-primary"
                    >
                      <span class="mx-auto block w-max text-sm font-semibold"
                        >5 developers</span
                      >
                    </label>
                    <div
                      aria-hidden="true"
                      class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                                    
                                    
    </>
  )
}

export default Pricing