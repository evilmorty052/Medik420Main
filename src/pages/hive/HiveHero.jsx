import React from 'react'
import { Link } from 'react-router-dom';
import pie from '../../assets/pie2.svg'

const HiveHero = ({func}) => {

        return (
          <>
            <div class="pt-20 lg:pt-32 md:py-12 lg:container mx-auto px-2 md:px-12 max-w-6xl">
              <div class="relative lg:flex lg:items-center lg:gap-12">
                <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                  <a
                    href="#"
                    class="sm:inline-flex justify-between items-center py-1 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-100 rounded-full hidden  hover:bg-gray-200  shadow-md"
                    role="alert"
                  >
                    <span class="text-xs bg-green-300 rounded-full text-white px-4 py-1.5 mr-3">
                      New
                    </span>{" "}
                    <span class="text-sm font-medium">
                      One Free Seat For New Users
                    </span>
                    <svg
                      class="ml-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  {/* <h1 class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
                    Welcome <br className="hidden md:block" /> <br className="md:hidden" /> To One{" "}
                    
                    <span class="text-primary ">Hive.</span>
                  </h1> */}
                  <h1 class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl uppercase ">
                     One{" "}<span class="text-primary ">Hive.</span>
                  </h1>
                  <p class="mt-4 text-gray-600 ">
                    The Fastest Growing Community Of Startups and Investors on the
                    Internet
                  </p>
                  <div>
                    <div className="my-4">
                    
                    <button
                        onClick={func}
                        className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl"
                      >
                        {"Get Started"}
                      </button>
                    
                    </div>
      
                  </div>
                  <div class="mt-12 flex gap-6 lg:gap-12 justify-between grayscale ">
                    <img
                      src="./images/clients/airbnb.svg"
                      class="h-8 sm:h-10 w-auto lg:h-12"
                      alt=""
                    />
                    <img
                      src="./images/clients/ge.svg"
                      class="h-8 sm:h-10 w-auto lg:h-12"
                      alt=""
                    />
                    <img
                      src="./images/clients/coty.svg"
                      class="h-8 sm:h-10 w-auto lg:h-12"
                      alt=""
                    />
                    <img
                      src="./images/clients/microsoft.svg"
                      class="h-8 sm:h-10 w-auto lg:h-12"
                      alt=""
                    />
                  </div>
                </div>
                <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16 ">
                  <img src={pie} alt="project illustration" height="" width="" />
                </div>
              </div>
            </div>
          </>
        );

}

export default HiveHero