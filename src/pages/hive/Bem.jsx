import { NewsLetter, Footer, Testimonial  } from "../../partials/dashboard/Elements"
import { bemvideo, bemslide1, bemslide2, bemslide3,   waves, pipevisualizationwide } from "../../assets"
import { useState, useEffect, useRef } from "react"
import { register } from 'swiper/element/bundle';
import { Link } from "react-router-dom";





const Bem = () => {
  const swiperRef = useRef(null);
  register();
  
  
  return (
    <>
     <div className="md:pt-0">
     <BemHero/>
     <HowItWorks/>
     </div>
     <div className="space-y-10 pb-6">
    <VideoGrid/>
    <Testimonial/>
    <VideoSection/>
    <Explainer/>
     </div>
     <Faq title={'Pipe FAQs'}/>
     <NewsLetter/>
     <Footer />
    </>
  )
}


function BemHero(params) {
  return (
    <>
      {/* <!-- Hero --> */}
   <div className="">
   <div class="relative pt-10 md:pt-0  overflow-hidden sm:hidden">
        {/* <!-- Gradients --> */}
        <div
          aria-hidden="true"
          class="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] "></div>
          <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
        </div>
        {/* <!-- End Gradients --> */}

        <div class="relative z-10">
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-0">
            <div class="max-w-2xl text-center mx-auto">
              {/* banner */}
              {/* <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          Preline: A vision for 2023
        </p> */}
              <div class="flex justify-center">
                <Link
                  to={"/path"}
                  className="group inline-block bg-gradient-to-tl from-green-200 to-green-600 bg-white/[.05] hover:bg-white/[.1]  p-1 pl-4 rounded-full shadow-md"
                >
                  <p class="mr-2 inline-block text-white text-sm">
                    48 hours funding is live.
                  </p>
                  <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                    <svg
                      class="w-2.5 h-2.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              {/* end banner
       
        {/* <!-- Title --> */}
              <div class="mt-2 sm:mt-5 max-w-2xl">
                <h1 class="block font-semibold text-[#131920] text-3xl md:text-5xl lg:text-6xl ">
                  Pipe Funding
                
                </h1>
              </div>
              {/* <!-- End Title --> */}

              <div class="mt-2 max-w-3xl pb-4 sm:pb-0">
                <p class="text-lg text-gray-600 ">
                  Powered by BEM, Pipe funding transforms your future revenue
                  streams into up-front capital for growth—without dilution.
                </p>
              </div>

              {/* <!-- Buttons --> */}
              <div class="text-center py-4 hidden">
                <a
                  class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                  href="#"
                >
                  Get started
                  <svg
                    class="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </a>
              </div>
              {/* <!-- End Buttons --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}

      {/* video container */}
      <div class="relative  bg-black ">
        <video
          autoPlay
          playsInline
          muted
          loop
          src={bemvideo}
          class="w-full  "
        ></video>

        {/* larger screens hero */}
        <div className="absolute top-10 mx-auto w-full">
          <div class="relative overflow-hidden hidden sm:block">
            <div class="relative z-10">
              <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-0">
                <div class="max-w-2xl text-center mx-auto">
                  {/* banner */}

                  <div class="flex justify-center ">
                    <Link
                      to={"/path"}
                      className="group inline-block bg-gradient-to-tl from-blue-600 to-violet-600 bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
                    >
                      <p class="mr-2 inline-block text-white text-sm">
                        48 hours funding is live
                      </p>
                      <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                        <svg
                          class="w-2.5 h-2.5"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                  {/* end banner */}

                  {/* <!-- Title --> */}
                  <div class="mt-5 max-w-3xl">
                    <h1 class="block font-semibold text-gray-800 text-2xl md:text-5xl lg:text-6xl ">
                      Introducing Pipe funding
                    </h1>
                  </div>
                  {/* <!-- End Title --> */}

                  <div class="mt-5 max-w-3xl">
                    <p class="text-lg text-gray-600 ">
                      Get your future revenue today
                    </p>
                  </div>

                  {/* <!-- Buttons --> */}
                  <div class="text-center py-4">
                    <Link
                      to={"/path"}
                      class="inline-flex justify-center items-center gap-x-3 text-center transition-all duration-500 ease-in-out hover:bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-blk hover:text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 "
                    >
                      Get started
                      <svg
                        class="w-2.5 h-2.5"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  {/* <!-- End Buttons --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    </>
  );
}

function HowItWorks () {
const swiperElRef = useRef(null);

  const Slider = () => {
  const [percent, setpercent] = useState(0)

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");


  // useEffect(() => {
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });
  
  //   swiperElRef.current.addEventListener("autoplaytimeleft", (e) => {
  //     const [swiper, time, progress] = e.detail;
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   });
    
  //   });
   

    return (
      <>
       
       <div class='pb-6'>
       <swiper-container
          class="relative"
          ref={swiperElRef}
          autoPlay={true}
          autoPlay-delay={"5000"}
          pagination='true'
          pagination-clickable='true'
          disable-autoPlay-on-interaction='false'
          >
          <swiper-slide>
            <Slide1 />
          </swiper-slide>
          <swiper-slide>
            <Slide2/>
          </swiper-slide>
          <swiper-slide>
            <Slide3/>
          </swiper-slide>
        </swiper-container>
       </div>
       
      </>
    );

  }

  return (
    <>
      <div className="container max-w-7xl mx-auto pt-8 ">
        <div className="w-full text-center sm:hidden">
          <div className=" bg-gradient  bg-gradient-to-l from-lime-500 to-green-700 bg-clip-text text-transparent  ">How it works</div>
          <p className="text-xl text-blk">Flexible access to capital</p>
          <p className="text-xl text-blk/70">Pull your future revenue <br/> forward instantly</p>
        </div>
        <div className="mt-4 sm:hidden">
          {/* <!-- Buttons --> */}
          <div class="text-center py-4">
            <Link to={'/path'}
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              
            >
              Start Now
              <svg
                class="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
        <div className="relative">
       <Slider/>
        </div>
      </div>
    </>
  );
}

function Explainer(params) {
  return (
    <>
      {/* <!-- Icon Blocks --> */}
      <div class="max-w-[85rem] px-4 py-2 sm:py-12 sm:px-6 lg:px-8  mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 gap-4 md:gap-12">
          <div class="lg:w-3/4">
            <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl ">
             What is Bem?
            </h2>
            <p class="mt-3 text-gray-800 ">
              BEM, an AI-powered solution, was developed to estimate the value
              and growth potential of a business by analyzing historical and
              current revenue streams, among other factors. But it does much more!.
            </p>
             <div className="w-full ">
              <img src={pipevisualizationwide} alt="" className="w-full" />
             </div>
            
          </div>
          {/* <!-- End Col --> */}

          <div class="space-y-6 lg:space-y-10">
            {/* <!-- Icon Block --> */}
            <div class="flex">
              {/* <!-- Icon --> */}
              <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto   ">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </span>
              <div class="ml-5 sm:ml-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 ">
                  Project success analysis
                </h3>
                <p class="mt-1 text-gray-600 ">
                  Eliminate the need for consulting multiple professionals to
                  determine the viability of a business idea. With BEM, you can
                  swiftly assess the true value of a new project.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div class="flex">
              {/* <!-- Icon --> */}
              <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </span>
              <div class="ml-5 sm:ml-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 ">
                  Consumer base analysis
                </h3>
                <p class="mt-1 text-gray-600 ">
                  BEM analyzes your consumer base, offering precise suggestions
                  for pricing, product size, and more. Backed by detailed
                  reasoning and custom data from your business, these insights
                  help you optimize your business decisions based on customer
                  needs and preferences.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div class="flex">
              {/* <!-- Icon --> */}
              <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
              </span>
              <div class="ml-5 sm:ml-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 ">
                  Greater future revenue
                </h3>
                <p class="mt-1 text-gray-600 ">
                  Although it's not mandatory when applying to trade your future
                  revenue. Opting to use BEM grants you access to greater
                  upfront revenue from us.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Icon Blocks --> */}
    </>
  );
}

function VideoGrid(params) {
  return(
    <>
    {/* <!-- Card Blog --> */}
<div class="max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-xl font-bold  md:leading-tight bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent ">CASE STUDIES</h2>
    <p class="mt-1 text-blk text-2xl ">Loved by industry leaders<br/>
     <span class='text-blk/70 text-2xl'>See what founders are saying</span></p>
  </div>
  {/* <!-- End Title --> */}

  {/* <!-- Grid --> */}
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Card --> */}
    <a class="group rounded-xl overflow-hidden" >
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <video  controls lazy src={"https://cdn.sanity.io/files/noj3nhym/production/eae48df6c02a6c7d3c48e4d0e8346856dbb6a14d.mp4"} class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"  alt="Image Description"/>
        <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 ">
          Sponsored
        </span>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
          Pave
        </h3>
        <p class="mt-3 text-gray-800 ">
          Pave used pipe side-by-side with equity to preserve ownership while they grew
        </p>
        {/* <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p> */}
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a class="group rounded-xl overflow-hidden" >
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <video controls loading="lazy" class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={"https://cdn.sanity.io/files/noj3nhym/production/0449c66bd0d3ca705c38ec974312dce2ac168140.mp4"} alt="Image Description"/>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
         Verma farms
        </h3>
        <p class="mt-3 text-gray-800 ">
          Verma Farms got the funding they needed to complete an acquisition in less than 72 hours.
        </p>
        {/* <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          learn more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p> */}
      </div>
    </a>
    {/* <!-- End Card --> */}
    {/* <!-- Card --> */}
    <a class="group rounded-xl overflow-hidden" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <video controls lazy class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={"https://cdn.sanity.io/files/noj3nhym/production/4c8c48b1de86d9d7e9cc3b0f149fd89b30635dd5.mp4"} alt="Image Description"/>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">
         Love Circular
        </h3>
        <p class="mt-3 text-gray-800 ">
          Love Circular doubled their revenue and grew their team after each pipe trade
        </p>
        {/* <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          learn more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p> */}
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a style={{backgroundImage: `url(${waves})`}} class={`group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url("${waves}")] sm:hidden`} >
      <div class="flex-auto p-4 md:p-6">
        <h3 class="text-3xl font-bold uppercase text-white/[.9] group-hover:text-white">Pipe <br />By medik 420  .</h3>
      </div>
      <div class="pt-0 p-4 md:p-6">
        <div class="inline-flex items-center gap-2 text-xl font-medium text-white group-hover:text-white/[.7]">
          <Link to={'/path'}>get started</Link>
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}
    
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
    </>
  )
}

function VideoSection(params) {
  return (
    <>
      {/* <!-- Features --> */}
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <video
              lazy
              loop
              playsInline
              muted
              autoPlay
              class="rounded-xl"
              src={"https://cdn.sanity.io/files/noj3nhym/production/baab1e7ad0e7f5bfa2f0dd6b16e2067a9f3d43fa.mp4"}
              alt="Image Description"
            />
          </div>
          {/* <!-- End Col --> */}

          <div class="mt-5 sm:mt-10 lg:mt-0">
            <div class="space-y-6 sm:space-y-8">
              {/* <!-- Title --> */}
              <div class="space-y-2 md:space-y-4">
                <h2 class="font-bold text-3xl lg:text-4xl text-blk ">
                Unlock your biggest assets.
                <br/>
                <span className="text-blk/70">
                Learn how our trading platform works.
                </span>
                </h2>
                <p class="text-gray-500">
                  Pipe uses secure live data connections to your banking,
                  billing, and accounting software to turn your future revenue
                  into a tradable asset.
                </p>
              </div>
              {/* <!-- End Title --> */}

              {/* <!-- List --> */}
              <ul role="list" class="space-y-2 sm:space-y-4">
                <li class="flex space-x-3">
                  {/* <!-- Solid Check --> */}
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
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
                    <span class="font-bold">Access real time financing</span> with live data connections
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
                  Sync billing, banking, and accounting<span class="font-bold"> in just a few clicks</span>
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
                    Get funding under 48 hours
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

function Slide1 () { 
   const [percent, setpercent] = useState(0)


  return (
    <>
      <div className="relaive sm:flex flex-row-reverse sm:px-4 py-2 items-center">
        <div className=" w-full flex  ">
          <div className="sm:min-w-[400px]">
            <img className=" w-full  object-contain" src={bemslide1} alt="" />
          </div>
        </div>
        <div>
          <div>
            
            <div className="px-4 py-2">
              <p className="text-blk font-semibold text-2xl">01.</p>
              <p className="text-xl font-semibold">Sign up and connect</p>
            </div>
            <div className="p-4 ">
              <p className="text-sm sm:text-lg">
                Sign up in minutes and securely connect your billing, banking,
                and accounting data. Medik group's proprietary algorithm reviews your
                data to determine how much up-front capital you can pull
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Slide2 () { 
   const [percent, setpercent] = useState(10)

   

   return (
    <>
      <div className="relaive sm:flex flex-row-reverse sm:px-4 py-6 items-center">
        <div className=" w-full flex  ">
          <div className="sm:min-w-[400px]">
            <img className=" w-full  object-contain" src={bemslide2} alt="" />
          </div>
        </div>
        <div>
          <div>
            
            <div className="px-4 py-2">
              <p className="text-2xl font-semibold text-blk">02.</p>
              <p className="text-xl font-semibold">Trade Instantly</p>
            </div>
            <div className="p-4 ">
              <p className="text-sm sm:text-lg">
              No roadshow or pitch deck—once approved, you can trade your revenue with the click of a button for up-front capital the same day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Slide3 () { 
   const [percent, setpercent] = useState(10)

   
   return (
    <>
      <div className="relaive sm:flex flex-row-reverse sm:px-4 py-6 items-center">
        <div className=" w-full flex  ">
          <div className="sm:min-w-[400px]">
            <img className=" w-full  object-contain" src={bemslide3} alt="" />
          </div>
        </div>
        <div>
          <div>
            
            <div className="px-4 py-2">
              <p className="text-2xl font-semibold text-blk">03.</p>
              <p className="text-xl font-semibold">Repay Automatically</p>
            </div>
            <div className="p-4 ">
              <p className="text-sm sm:text-lg">
              Our platform identifies the payment frequency of your selected customers, so your repayment schedule aligns with customer payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Faq({title}) {
  return (
    <>
      {/* <!-- FAQ --> */}
      <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
                What is pipe?
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
                  Pipe is a modern capital platform that enables companies to
                  transform future revenue into up-front capital. For
                  businesses, that means growth on your terms with more cash
                  flow for scaling a company without dilution. For investors,
                  Pipe gives you access to revenue streams with stable yields
                  and built-in diversification.
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
                How much capital can i access
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
                  The amount of capital you can access is called a trading
                  limit. Your trading limit is based on your predictable revenue
                  and an algorithmic assessment of your business’s health. As
                  you make repayments, you can also pull forward additional
                  capital, ensuring you have consistent access to capital for
                  your business. We automatically evaluate your account each
                  week, so your trading limit grows as your business scales. We
                  recommend going through our onboarding process to find out
                  exactly how much capital you can access.
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
                How much does Pipe cost?
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
                  Our subscriptions are tiered. Understanding the task at hand
                  and ironing out the wrinkles is key.
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
                Is Pipe available to companies based outside the US?
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
                  As long as you have a US subsidiary, we can work with you. If
                  you’re not eligible today, we’ll be glad to notify you as soon
                  as we launch in your country.
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
                Do I need to tell my customers that we’re using Pipe??
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
                  Nope. With Pipe, there’s no disruption to your customer
                  relationships. You continue to bill them, they continue to pay
                  you, and you repay your trade through Pipe. Your customers
                  never need to know we’re here—we’re like an invisible growth
                  partner.
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
                How fast can I access capital?
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
                    Once you’re approved, log in to your dashboard, view your
                    available revenue streams, and select the amount you want to
                    trade for up-front capital. Pipe automatically deposits the
                    cash into your account, and often on the same business day.
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

export default Bem