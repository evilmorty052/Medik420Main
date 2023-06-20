
import { useState, useRef } from 'react'
import {digitalfarmanimation, auctionanimation, growthanimation, farmanimation  } from '../assets'
import { Footer, NewsLetter, MotionContainer,} from '../partials/dashboard/Elements'
import { Link } from 'react-router-dom'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Digitalfarming = () => {
const [isexpanded, setisexpanded] = useState(false)

  return (
    <div className=" relative bg-white ">
      <div className="space-y-6">
        <div>
          <FarmingHero />
          <DigitalFarmStats />
        </div>
        <RightContentBlock />
         <CTA/>
        <SharedFarms />
        {/* <IconGrid /> */}
        <CardSection/>
        <NewsLetter />
        <Faq title={"Digital farming FAQ's"} />
      </div>
      <Footer />
    </div>
  );
}



function FarmingHero() {
  return(
    // <!-- Hero -->
 <>
<header
  class="relative flex items-center justify-center h-screen overflow-hidden"
>
{/* // <!-- Hero --> */}
<div class="relative z-20">
  <div class=" via-transparent">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      {/* <!-- Announcement Banner --> */}
      <div class="flex justify-center">
        <a class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="../figma.html">
          <p class="mr-2 inline-block text-transparent text-sm  bg-gradient-to-r from-rose-600 to-violet-600  bg-clip-text">
            experience digital farming.
          </p>
          <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
        </a>
      </div>
      {/* <!-- End Announcement Banner --> */}

      {/* <!-- Title --> */}
      <div class="max-w-3xl text-center mx-auto">
        <h1 class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Now easier than ever to own a farm
        </h1>
      </div>
      {/* <!-- End Title --> */}

      <div class="max-w-3xl text-center mx-auto">
        <p class="text-lg text-gray-200">Own and operate a fully functional farm right from your home .</p>
      </div>

      {/* <!-- Buttons --> */}
      <div class="text-center">
        <Link to={'/path'} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" >
          Get started
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
      </div>
      {/* <!-- End Buttons --> */}
    </div>
  </div>
</div>
{/* // <!-- End Hero --> */}
  <video
    poster={'https://cdn.sanity.io/images/noj3nhym/production/1aca1b1c865fbcb4b70c7026ef7d3505b5bb8651-2560x1474.png'}
    autoPlay
    loop
    muted
    playsInline
    class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src={'https://cdn.sanity.io/files/noj3nhym/production/cc3eb78451928d4d9fd6989403b72120f3c13587.mp4'}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>
 </>
// <!-- End Hero -->
  )
}

function CTA () {
  return(
    <MotionContainer>
    <div class="bg-gradient-to-br from-pink-500 to-purple-600 py-8  md:bg-gradient-to-r">
      <div class="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2 class="mb-8 text-4xl font-bold text-white md:text-4xl">
         Start shopping for digital farms now.
        </h2>
        <Link to={'/register'}
          
          class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span class="relative text-base font-semibold text-purple-600">
            Create an Account
          </span>
        </Link>
      </div>
    </div>
    </MotionContainer>
  )
}

function Faq({title}) {
  return (
    <>
      {/* <!-- FAQ --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            {title}
          </h2>
          <p className="mt-1 text-gray-600 ">Your questions, answered</p>
        </div>
        {/* <!-- End Title --> */}

        <div className="max-w-2xl mx-auto">
          {/* <!-- Accordion --> */}
          <div className="hs-accordion-group">
            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6  active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <button
                className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none  a hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
              >
                What is digital farming?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <p className="text-gray-800 ">
                  digital farming is a modern way of earning passive income.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <button
                className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
              >
                How much do i need to get started
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <p className="text-gray-800 ">
                  you can start farming with as little as 500$ by purchasing a shared digital farm instead of a whole unit.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <button
                className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
              >
                what is a shared farm?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <p className="text-gray-800 ">
                  shared farming is a way to let users from all over the world share a single farm by dividing it into units. Your allocated return is automatically balanced according to cell size.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <button
                className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
              >
                what if i own the largest cell in a shared farm?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
              >
                <p className="text-gray-800 dark:text-gray-200">
                  revenue is allocated according to cell size so if you have the largest cell in a shared farm you will have the largest revenue.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <button
                className="active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
              >
                what is a cell ?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
              >
                <p className="text-gray-800 ">
                 cells are used to describe the different parts a shared farm is divided into.
                </p>
              </div>
            </div>

            <div
              className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 "
              id="hs-basic-with-title-and-arrow-stretched-heading-six"
            >
              <button
                className=" active:border-0 active:ring-0 focus:border-0 focus:ring-0 focus:outline-none hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 "
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
              >
                Do i need to live in U.S to own a digital farm?
                <svg
                  className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <div
                id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
              >
                <p className="text-gray-800 ">
                  <p class="chakra-text css-11vek7q">
                    You can purchase a digital farm from anywhere in the world.
                  </p>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End Accordion --> */}
        </div>
      </div>
      {/* <!-- End FAQ --> */}
    </>
  );
}

function IconGrid(params) {
  return(
    <>
    <MotionContainer>
      {/* <!-- Icon Blocks --> */}
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
    {/* <!-- Auction Card --> */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " href="#">
      <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 ">Auction anytime</h3>
          <p className="text-gray-600 ">Feel your farm has grown in value? put it up for sale to the highest bidder, with just a few clicks</p>
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

    {/* <!-- Choose Strain Card --> */}
    <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " href="#">
      <svg className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
      </svg>

      <div>
        <div>
          <h3 className="block font-bold text-gray-800 ">Choose your strains</h3>
          <p className="text-gray-600 ">you get to choose the exact strains you want on your digital farm and leave the rest to us.</p>
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
          <h3 className="block font-bold text-gray-800 ">Track your crops</h3>
          <p className="text-gray-600 ">Track the growth of your crops anytime or get details on crop perfomance right from your dashboard with ease!.</p>
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
    </MotionContainer>
    </>
  )
}

function RightContentBlock(params) {
  return (
    <>
        {/* <!-- Features --> */}
      <div class="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto ">
        {/* <!-- Grid --> */}
        <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            {/* <img class="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/> */}
      <MotionContainer>
            <Player
              autoplay
              loop
              src={digitalfarmanimation}
              style={{ width: "100%", height: "100%" }}
            >
              <Controls visible={false} loop />
            </Player>
      </MotionContainer>
          </div>
          {/* <!-- End Col --> */}

          <div class=" sm:mt-10 lg:mt-0">
            <div class="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
            <div class="space-y-2 md:space-y-4">
            <MotionContainer>
                <h2 class="font-bold text-3xl lg:text-4xl  bg-gradient-to-r from-green-300 to-blue-600 text-transparent bg-clip-text ">
                  The future of passive income
                </h2>
            </MotionContainer>
                <p class="text-gray-500">
                  Earning passive income has never been easier than digital
                  farming , get all the financial benefits of owning a farm without
                  the hassle of maintenance.
                </p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- List --> */}
              <ul role="list" class="space-y-2 sm:space-y-4">
                <li class="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <!-- End Solid Check --> */}

                  <span class="text-sm sm:text-base text-gray-500">
                    <span class="font-bold">Easy & fast</span> acquisition
                  </span>
                </li>

                <li class="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <!-- End Solid Check --> */}

                  <span class="text-sm sm:text-base text-gray-500">
                    Expert <span class="font-bold">guidance</span>
                  </span>
                </li>

                <li class="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 "
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* <!-- End Solid Check --> */}

                  <span class="text-sm sm:text-base text-gray-500">
                    Intuitive Controls
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
  );
}

function DigitalFarmStats () {
  return(
    <>
   <MotionContainer>
     {/* <!-- Features --> */}
<div class="max-w-[85rem] px-2  py-4 sm:px-6 lg:px-8  mx-auto bg-gray-700">
  {/* <!-- Grid --> */}
  <div class="sm:mt-10 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
    {/* <!-- Stats --> */}
    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-200 ">Raised</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">$18M</p>
      <p class="mt-1 text-gray-500">Since launch</p>
    </div>
    {/* <!-- End Stats --> */}

    {/* <!-- Stats --> */}
    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-200 ">Over</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">2,000+</p>
      <p class="mt-1 text-gray-500">Unique owners</p>
    </div>
    {/* <!-- End Stats --> */}

    {/* <!-- Stats --> */}
    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-200 ">Provided</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">400 Jobs</p>
      <p class="mt-1 text-gray-500">this year alone</p>
    </div>
    {/* <!-- End Stats --> */}
    {/* <!-- Stats --> */}
    <div>
      <h4 class="text-lg sm:text-xl font-semibold text-gray-200 ">Harvested</h4>
      <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">400 Jobs</p>
      <p class="mt-1 text-gray-500">this year alone</p>
    </div>
    {/* <!-- End Stats --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
   </MotionContainer>
    </>
  )
}

function SharedFarms(params) {
  return(
    <>
    <MotionContainer>
       {/* <!-- Features --> */}
<div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
    <h2 class="text-2xl lg:text-4xl text-gray-800 font-bold uppercase">
      Earn Together
    </h2>
    <p class="mt-3 text-gray-800 ">
      Easily connect and split the cost of a digital farm with other users wherever they are.
    </p>
  </div>
  {/* <!-- End Title --> */}

  {/* <!-- Grid --> */}
  
  {/* <!-- End Grid --> */}

  {/* <!-- Grid --> */}
  <div class="sm:mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
    <div class="hidden md:block col-span-4 md:col-span-3">
      <img class="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}

    <div class="col-span-4 md:col-span-3">
      <img class="rounded-xl" src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80" alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}

    <div class="col-span-4 md:col-span-3">
      <img class="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}

    <div class="col-span-4 md:col-span-3">
      <img class="rounded-xl" src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Features --> */}
    </MotionContainer>
    </>
  )
}

function CardSection(){
  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8  mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <MotionContainer>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center  rounded-t-xl">
              <Player
                autoplay
                loop
                src={auctionanimation}
                style={{ width: "100%", height: "300px" }}
              >
                <Controls visible={false} loop />
              </Player>
            </div>
            <div className="p-4 md:p-6">
              {/* <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          Atlassian API
        </span> */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Auction anytime
              </h3>
              <p className="mt-3 text-gray-500">
                Put your farm up for sale at your price in a few clicks.
              </p>
            </div>
            {/* <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                View Docs
              </a>
            </div> */}
          </div>
          </MotionContainer>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <MotionContainer>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center bg-green-200 rounded-t-xl">
              <Player
                autoplay
                loop
                src={growthanimation}
                style={{ width: "100%", height: "220px" }}
              >
                <Controls visible={false} loop />
              </Player>
            </div>
            <div className="p-4 md:p-6">
              {/* <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
          Asana API
        </span> */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Choose your crops
              </h3>
              <p className="mt-3 text-gray-500">
                Choose the exact crops you want from your provider.
              </p>
            </div>
            {/* <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                View Docs
              </a>
            </div> */}
          </div>
          </MotionContainer>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <MotionContainer>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center  rounded-t-xl">
              <Player
                autoplay
                loop
                src={farmanimation}
                style={{ width: "100%", height: "300px" }}
              >
                <Controls visible={false} loop />
              </Player>
            </div>
            <div className="p-4 md:p-6">
              {/* <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
          Slack API
        </span> */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Track your crops
              </h3>
              <p className="mt-3 text-gray-500">
                Track the growth of your crops easily from your dashboard.
              </p>
            </div>
            {/* <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </a>
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700  dark:hover:text-white dark:focus:ring-offset-gray-800"
                href="#"
              >
                View Docs
              </a>
            </div> */}
          </div>
          </MotionContainer>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
}

export default Digitalfarming

