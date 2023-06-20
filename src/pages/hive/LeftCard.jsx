import { Link } from 'react-router-dom';
import {startupslottie} from '../../assets'
import LottiePlayer from "../../utils/LottiePlayer"

const LeftCard = ({image}) => {
    
        return (
          <>
            <div class="">
              <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                <div class="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex sm:gap-x-4 md:gap-6 justify-center md:space-y-0 sm:items-center">
                  {/* bigger screens image image container */}
                  <div class="hidden sm:block md:5/12 lg:w-1/2 rounded-2xl">
                    {/* <img
                      src={image}
                      alt="image"
                      loading="lazy"
                      width="250px"
                      height="200px"
                    /> */}
                    <LottiePlayer src={startupslottie}/>
                  </div>
                  <div class="md:7/12 lg:w-1/2">
                    <div className="pb-4 sm:pb-0">
                    <h2 class="text-3xl font-bold text-gray-900 md:text-4xl ">
                      Browse Startups
                    </h2>
                    </div>
                    {/* image container */}
                  <div class="sm:hidden rounded-2xl">
                    {/* <img
                      src={image}
                      alt="image"
                      loading="lazy"
                      width="250px"
                      height="200px"
                    /> */}
                    <LottiePlayer src={startupslottie}/>
                  </div>
                    <p class="my-8 sm:my-0 md:my-8 text-blk md:text-2xl ">
                      Search Our Extensive List Of Startups Participating In One Hive via Pipe Funding
                      To Start Building Your Investment Portfolio.
                    </p>
                    <Link to={"/hivebiz"} className="w-full justify-center flex my-8">
                      <button className="btn">
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