import React from 'react'
import { Link } from 'react-router-dom';

const LeftCard = ({image}) => {
    
        return (
          <>
            <div class="py-16">
              <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                  <div class="md:5/12 lg:w-1/2">
                    <img
                      src={image}
                      alt="image"
                      loading="lazy"
                      width="250px"
                      height="200px"
                    />
                  </div>
                  <div class="md:7/12 lg:w-1/2">
                    <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                      Browse Businesses
                    </h2>
                    <p class="my-8 text-gray-600 dark:text-gray-300">
                      Search Our Extensive List Of Startups Participating In One Hive
                      To Start Building Your Investment Portfolio. new users get one
                      free Seat!
                    </p>
      
                    <Link to={"/hivebiz"} className="w-full justify-center flex my-8">
                      <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6  w-full rounded-3xl">
                        {"Browse"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      
}

export default LeftCard