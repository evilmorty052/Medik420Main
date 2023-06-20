import  {useState} from 'react'
import { Hero } from './SmallBiz'
import styles from '../style'
import Dynamicnav from '../partials/Dynamicnav'
import { Feature } from './SmallBiz'
import { Highlight } from '../Home'
import Header from '../partials/Header'
import AnimatedSidebar from '../components/AnimatedSidebar'



const Hive = () => {
  const [isexpanded, setisexpanded] = useState(false)
  const links = [
    {
    title: 'Home',
    // icon:  <FaHome/>
  
  },
    {
    title: 'Investing'
  },
    {
    title: 'Shop'
  },
    {
    title: 'Subscribe'
  },
  ]
  return (
    <div className='flex flex-col relative bg-plat'>
        <div className={`mt-20 container max-w-5xl mx-auto`}>
            <div className={`${styles.boxWidth} px-4`}>
            <Hero
        bg={'bg-slate-400'}
        textcolor={'text-white'}
        title="B.E.M"
        subtext="Business Evaluation Model. A Game Changer In Business Analysis And Automation."
        
        buttonText="Request Demo"
        image="https://via.placeholder.com/800x600"/>
            </div>
      
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter} mt-10`}>
            <div className={`${styles.boxWidth}`}>
                <AiHighlight/>
                <How/>
                <Help/>
            </div>
        </div>
       
    </div>
  )
}

export default Hive

function AiHighlight(params) {
    return(
      <>
       <h3 className={`text-xl font-poppins${styles.heading2} text-blk`}>What Can It Do ?</h3>
       {/* <p>Complexity Simplified </p> */}
       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
          <Feature
            title="Real Time Data Collection"
            description="Track potential Customers From First Contact To Conversion. "
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Analayze Sales potentional"
            description="Get Real Time Data On The potential of a product selling in a particular area or to a particular person"
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Find Clients"
            description="Hive A.I Can Return Likely Customers By Analysing Your Social Media Following Or Feeds From A Dataset"
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Track Sales And Inventory"
            description="Hive A.i Can keep Track And Organize Every Sale, Calculate Profit and losses, Organize Inventory And Sales Data , Give Daily Reports and forecasts on sales and inventory "
            image="https://via.placeholder.com/200x200"
          />
        </div>
      </>
    )
  }
function Help(params) {
    return(
      <>
       <h3 className={`text-xl font-poppins${styles.heading2} text-blk`}>How Can it Help Me?</h3>
       {/* <p>Complexity Simplified </p> */}
       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
          <Feature
            title="Your Wingman"
            description="Hive A.I Has The Potential to be the Only Employee you need, With The Capability To Automate Almost 70% Of your Daily Tasks and business Operations, you get to Focus on What Really Matters to you. "
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Find Leads"
            description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Make Key Decisions"
            description="Deduct All Maintainance And Service Fees From Your Total Earnings"
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Shape Your Business Model"
            description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
            image="https://via.placeholder.com/200x200"
          />
        </div>
      </>
    )
  }
function How(params) {
    return(
      <>
       <h3 className={`text-xl font-poppins${styles.heading2} text-blk`}>How We Use It?</h3>
       {/* <p>Complexity Simplified </p> */}
       <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
          <Feature
            title="Hive Initiative"
            description="Hive A.I Has The Potential to be the Only Employee you need, With The Capability To Automate Almost 70% Of your Daily Tasks and business Operations, you get to Focus on What Really Matters to you. "
            image="https://via.placeholder.com/200x200"
          />
          <Feature
            title="Digital Farming Programme"
            description="Put Up Any Digital Land You Already Own For Sale To the Highest Bidder"
            image="https://via.placeholder.com/200x200"
          />
            <Feature
              title="Collaborate With Traders"
              description="Choose From a Variety Of Strains To Be Planted and Harvested By Proffesionals"
              image="https://via.placeholder.com/200x200"
            />
          <Feature
            title="Risk Management"
            description="Deduct All Maintainance And Service Fees From Your Total Earnings"
            image="https://via.placeholder.com/200x200"
          />
        </div>
      </>
    )
  }