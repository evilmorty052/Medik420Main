import styles from "../style";
import { arrowUp } from "../assets";
import {NavLink as Link} from "react-router-dom";

const GetStarted = () => (
 <Link to='/register'>
 <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green-300 p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-blk w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-green-300">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-green-300">Started</span>
      </p>
    </div>
  </div>
 </Link> 
);

export default GetStarted;
