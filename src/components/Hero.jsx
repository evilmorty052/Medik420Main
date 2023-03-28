import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Cbd  from "../assets/homecbd.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex mt-5 md:flex-row flex-col ${styles.paddingY} bounce-in-bottom`} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-green-300 rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"> 5% Sign Up Bonus On Investment Accounts</span> {" "}
            <span className="text-white"></span> 
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className=" text-center sm:text-left bounce-in-bottom  flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Smart<br className="sm:block hidden" />{" "}
            <span className="text-green-300">Portfolio</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            
            {/* <GetStarted /> */}
            
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white uppercase font-medium font-poppins text-center sm:text-left`}>
          A Modern Platform To Earn Passive Income, Get Business Assistance Or Explore Job Opportunities it's all up to You.
        </p>
        
        <div className="mt-8 hidden sm:flex">
        <Button/>
        </div>
        
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Cbd} alt="billing" className="w-[100%] h-[100%] relative z-[5] " />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;



export function Hiro(params) {
  return(
    <>
    <section class="bg-white ">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-green-300 rounded-full text-white px-2 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Hive 2.1 is here! See what's new</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Here at Medik 420 we focus on markets where technology, innovation, and capital can unlock long-term value and drive Financial growth of Our Customers..</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="border border-gray-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                Get Started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            {/* <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   ">
                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>   */}
        </div>
      
    </div>
</section>
    </>
  )
}