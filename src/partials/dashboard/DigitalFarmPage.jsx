import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { Progress, Empty } from "antd";
import { Infobutton } from "./Elements";
import styles from "../../style";
import Tabs  from "../../pages/hive/Tabs";
import { LargeHeader } from "../../components/Dashboard/LaptopDisplay";
import DigitalFarmShop from "./DigitalFarmShop";

const DigitalFarmPage = () => {
  const navigate = useNavigate();
  const [personalFarms, setPersonalFarms] = useState(true);
  const [sharedFarms, setsharedFarms] = useState(null);
  const [shoppingPage, setshoppingPage] = useState(null)

  function handleTabs(params) {
    if (personalFarms) {
      setPersonalFarms(false);
      setsharedFarms(true);
    }

    else if (sharedFarms) {
      setsharedFarms(false)
      setPersonalFarms(true)
    }
  }


  const FarmEvents = () => {
    return (
      <>
        <a
          class="relative w-full max-w-2xl block rounded-sm border-t-4 border-green-600 p-4 shadow-xl sm:p-6 lg:p-8"
        >
          <div class="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>

            <h3 class="text-2xl text-blk font-semibold sm:text-4xl">Events: 0</h3>
          </div>

          <p class="mt-4 font-medium text-gray-500">
            acquire farms to see updates about them here
          </p>
        </a>
      </>
    );
  };

  const ChemistryCard = () => {
    return (
      <>
        <a
          class="relative w-full max-w-2xl flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
          href="#"
        >
          <div class="pt-4 text-gray-500">
            <svg
              class="h-8 w-8 sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Crop Chemistry
            </h3>

            <p class="mt-2 hidden text-sm sm:block">
              You can manage phone, email and chat conversations all from a
              single mailbox.
            </p>
          </div>

          <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
            0%
          </span>
        </a>
      </>
    );
  };

  const DigitalFarms = ({ investments }) => {
    const NoData = () => {
      return (
        <>
          <h3>No Farms</h3>
        </>
      );
    };

    const InvestmentActivity = ({ name, amount, avatar, status }) => {
      return (
        <>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src={avatar}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  {name}
                </p>
                <p class="text-sm text-gray-500 truncate ">{status}</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                {formatter.format(amount)}
              </div>
            </div>
          </li>
        </>
      );
    };

    return (
      <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">
            Digital Farms{" "}
            {/* <span>
              <Infobutton />
            </span> */}
          </h5>
          {/* <a
            href="#bb"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
          </a> */}
          <Infobutton />
        </div>
        <div class="flow-root my-4">
          <ul role="list" class="divide-y divide-gray-200 ">
            <>
              {investments ? (
                <>
                  {investments?.map((investment) => {
                    return (
                      <InvestmentActivity
                        status={investment.status}
                        avatar={urlFor(investment.startup.image)}
                        amount={investment.amount}
                        name={investment?.startup?.name}
                      />
                    );
                  })}
                </>
              ) : (
                <Empty description={<NoData />} />
              )}
            </>
          </ul>
        </div>
        <div className="">
          <div>
            <h3 className="text-[18px] text-gray-600 font-semibold">
              Revenue:
            </h3>
            <p className="text-2xl font-bold text-gray-800">$0.00</p>
          </div>
        </div>
      </div>
    );
  };

  const SharedFarms = ({ investments }) => {
    const NoData = () => {
      return (
        <>
          <h3>No Farms</h3>
        </>
      );
    };

    const InvestmentActivity = ({ name, amount, avatar, status }) => {
      return (
        <>
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src={avatar}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  {name}
                </p>
                <p class="text-sm text-gray-500 truncate ">{status}</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                {formatter.format(amount)}
              </div>
            </div>
          </li>
        </>
      );
    };

    return (
      <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 ">
            Shared Farms{" "}
            {/* <span>
              <Infobutton />
            </span> */}
          </h5>
          {/* <a
            href="#bb"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              class="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5"
              type="button"
            >
              <span class="sr-only">Open dropdown</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>
          </a> */}
          <Infobutton />
        </div>
        <div class="flow-root my-4">
          <ul role="list" class="divide-y divide-gray-200 ">
            <>
              {investments ? (
                <>
                  {investments?.map((investment) => {
                    return (
                      <InvestmentActivity
                        status={investment.status}
                        avatar={urlFor(investment.startup.image)}
                        amount={investment.amount}
                        name={investment?.startup?.name}
                      />
                    );
                  })}
                </>
              ) : (
                <Empty description={<NoData />} />
              )}
            </>
          </ul>
        </div>
        <div className="">
          <div>
            <h3 className="text-[18px] text-gray-600 font-semibold">
              Revenue:
            </h3>
            <p className="text-2xl font-bold text-gray-800">$0.00</p>
          </div>
        </div>
      </div>
    );
  };

  const BuyButton = () => {
    return(
      <>
        <div className="py-4 w-full flex flex-col gap-y-4 items-center fixed bottom-0 bg-white md:bg-gray-200 px-2 md:fixed md:right-4 md:bottom-4 md:w-64 md:rounded-2xl">
            <Link className="w-full" to={'/dashboard/digitalfarmshop'}>      
            <button  className="w-full bg-green-300 rounded-3xl p-4 text-xl font-semibold">
              Shop Farms
            </button>
            </Link>
            {/* <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
              Auction Farm
            </button> */}
          </div>
      </>
    )
  }

  const ActionButtons = () => {
    return(
      <>
        <div className="py-4 w-full max-w-2xl flex flex-col gap-y-4 items-center ">     
            <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
              Organize Crops
            </button>
            <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
              Auction Farm
            </button>
          </div>
      </>
    )
  }
  
  const SharedFarmButtons = () => {
    return(
      <>
        <div className="py-4 w-full max-w-2xl flex flex-col gap-y-4 items-center ">     
            <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
              Organize Plots
            </button>
            <button className="w-full bg-gray-600 rounded-3xl p-4 text-xl font-semibold text-white">
              Auction Share
            </button>
          </div>
      </>
    )
  }

 

  return (
    <>
      <div className="md:hidden">
      <Header
        func={() => window.location.replace('/dashboard')}
        halfmenu={true}
      />
      </div>

     <LargeHeader/>
      <div className="container max-w-4xl mx-auto md:pt-10 md:px-10">
      <div className="pt-4">
      <Tabs section1={'Personal'} section2={'Shared'} setactive={handleTabs} tab1={personalFarms} tab2={sharedFarms} />
      </div>
      <div className="flex flex-col items-center gap-y-10 py-8 px-2 pb-[110px]">
       { 
        
       !sharedFarms ? 
      <div className="flex flex-col gap-y-8 items-center w-full">
       <DigitalFarms />
       <FarmEvents/>
       <ChemistryCard />
       <ActionButtons/>
     </div> :
        <div className="flex flex-col gap-y-8 items-center w-full">
          <SharedFarms />
          <FarmEvents/>
          <ChemistryCard />
          <SharedFarmButtons/>
        </div>
     
       }
        <BuyButton/>
      </div>
      </div>
    </>
  );
};

export default DigitalFarmPage;
