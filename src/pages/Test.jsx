import React, { Children } from "react";
import { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBookmark,
  FaCog,
  FaComment,
  FaFileUpload,
  FaHeart,
} from "react-icons/fa";
import { Navbar } from "../components";
import Layout from "../components/Layout";
import styles from "../style";
import DebitCard from "../partials/dashboard/DebitCard";
import BottomNavigation from "../partials/dashboard/BottomNavigation";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./index";
import NewsTab from "../partials/dashboard/NewsTab";
import Agents from "../partials/dashboard/AgentCard";
import { AnimatePresence, motion } from "../hooks/useMotion";
import { stashlogo, bitcoin, people01 } from "../assets";
import { day } from "../../lib/dayjs";
import EmojiPicker from 'emoji-picker-react';




const Test = ({ children }) => {
  const [activepage, setactivepage] = useState(null);
  const [modal, setmodal] = useState(null);
  const [modalquestion, setmodalquestion] = useState("");
  const [posts, setposts] = useState([<Post />])

  function flexModal(question) {
    const [modal, setmodal] = useState(null);

    return <ClaimModal question={question} modal={modal} setmodal={setmodal} />;
  }

  const showmodal = flexModal();

  let view = <DebitCard />;

  switch (activepage) {
    case null:
      break;

    default:
      break;
  }

  return (
    <>
      <Layout>
        {/* <Questions question={"Whats's your estimated pre-tax household income ?"}/> */}
        <div className="flex flex-col items-center bg-white">
           <div>
             {posts.map((post)=>{
              return(
                <Post/>
              )
             })}
           </div>
          <ChatInput onSendMessage={()=> setposts([...posts, <Post/>])}/>
        </div>
      </Layout>
      {/* <BottomNavigation /> */}
    </>
  );
};

const PortfolioIntro = () => {
  const [animate, setanimate] = useState(null);
  return (
    <>
      <span onClick={() => (animate ? setanimate(false) : setanimate(true))}>
        animate
      </span>
      <motion.div
        initial={{ display: "block" }}
        animate={animate ? { display: "flex" } : ""}
        transition={{ duration: 1 }}
        layout={true}
      >
        <motion.h3 layout className={styles.sectionHeading}>
          text 1
        </motion.h3>
        <motion.h3 layout className={styles.sectionHeading}>
          {" "}
          text 2
        </motion.h3>
      </motion.div>
    </>
  );
};

const RegisterInputs = () => {
  return (
    <>
      <div className="flex py-10   px-4 space-y-4 slide-in-right   ">
        <div className="py-4 mx-auto sm:min-w-[600px] ">
          <div className="text-start space-y-2 pb-4">
            <h3
              className={"sm:text-[28px] text-[25px]  font-bold text-gray-800"}
            >
              Enter your full legal name.
            </h3>
            <p className="text-[14px] text-blue-500 font-medium">
              Why we need this
            </p>
          </div>
          <div className="space-y-8 py-10">
            <input
              placeholder="First name"
              className="w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-0 pb-4   focus:border-b-2  "
              type="text"
            />
            <input
              placeholder="Last name"
              className="w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 focus:border-b-2 pb-4  border-0  "
              type="text"
            />
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <a className="text-[20px] text-gray-700">
                <FaArrowLeft />
              </a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AgeInputs = () => {
  return (
    <>
      <div className="flex py-10   px-4 space-y-4 slide-in-right   ">
        <div className="py-4 mx-auto sm:min-w-[600px] ">
          <div className="text-start space-y-2 pb-4">
            <h3
              className={"sm:text-[28px] text-[25px]  font-bold text-gray-800"}
            >
              Confirm Your Eligibility To Invest.
            </h3>
            <p className="text-[14px] text-blue-500 font-medium">
              Why we need this
            </p>
          </div>
          <div className="space-y-8 py-10">
            <div>
              <label className="text-sm font-bold ">Birthday</label>
              <input
                placeholder="MM / DD / YYYY"
                className="w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg "
                type="text"
              />
            </div>
            <div>
              <label className="text-sm  font-bold">Citizenship</label>
              <select className="w-full mt-1 text-lg sm:text-xl text-gray-700 font-medium focus:ring-0 bg-gray-200 rounded-lg    focus:border-b-2  ">
                <option value="">Citizen</option>
                <option value="">Resident Alien</option>
                <option value="">Non-US Resident</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <a className="text-[20px] text-gray-700">
                <FaArrowLeft />
              </a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddressInputs = () => {
  return (
    <>
      <div className="flex py-5   px-4 space-y-4 slide-in-right   ">
        <div className="py-4 mx-auto sm:min-w-[600px] ">
          <div className="text-start space-y-2 ">
            <h3
              className={"sm:text-[28px] text-[25px]  font-bold text-gray-800"}
            >
              Enter your residential address.
            </h3>
            <p className="text-[14px] text-blue-500 font-medium">
              Why we need this
            </p>
          </div>
          <div className="space-y-4 py-10">
            <div>
              <label className="text-sm font-bold ">Address Line 1</label>
              <input
                placeholder="Address Line 1"
                className="w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg "
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-bold ">Address Line 2</label>
              <input
                placeholder="Address Line 2"
                className="w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg "
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-bold ">City</label>
              <input
                placeholder="City"
                className="w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg "
                type="text"
              />
            </div>
            <div>
              <label className="text-sm font-bold ">Zip Code</label>
              <input
                placeholder="Zip-Code"
                className="w-full mt-1 text-lg sm:text-xl focus:ring-0 focus:border-0 text-gray-700 font-bold border-0  bg-gray-200 rounded-lg "
                type="text"
              />
            </div>
            <div>
              <label className="text-sm  font-bold">State</label>
              <select className="w-full mt-1 text-lg sm:text-xl text-gray-700 font-medium focus:ring-0 bg-gray-200 rounded-lg    focus:border-b-2  ">
                <option value="">Citizen</option>
                <option value="">Resident Alien</option>
                <option value="">Non-US Resident</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <a className="text-[20px] text-gray-700">
                <FaArrowLeft />
              </a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PhoneInputs = () => {
  return (
    <>
      <div className="flex py-10   px-4 space-y-4 slide-in-right   ">
        <div className="py-4 mx-auto sm:min-w-[600px] ">
          <div className="text-start space-y-2 ">
            <h3
              className={"sm:text-[28px] text-[25px]  font-bold text-gray-800"}
            >
              Enter your phone number.
            </h3>
            <p className="text-[14px] text-blue-500 font-medium">
              Why we need this
            </p>
          </div>
          <div className="space-y-8 py-10">
            <input
              placeholder="(123-456-7894)"
              className="w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-b-2 border-l-0 border-r-0 border-t-0 pb-4  border-b-green-300  focus:border-b-2  "
              type="text"
            />
            <div className="flex flex-col gap-y-4">
              <label htmlFor="">
                Opt-in to get financial tips and reminders
              </label>
              <div className="flex  items-center gap-x-4">
                <input id="check" type="checkbox" />
                <div className=" max-w-[50ch]  pt-4">
                  <label className="text-sm  " htmlFor="check">
                    By selecting this checkbox you agree to receive recurring
                    promotional and personalized marketing messages
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <a className="text-[20px] text-gray-700">
                <FaArrowLeft />
              </a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Questions = ({ question }) => {
  const [activeanswer, setactiveanswer] = useState(null);
  const [showmodal, setshowmodal] = useState(false);

  const answers = [
    {
      answer: "20-50k",
    },
    {
      answer: "50-100k",
    },
    {
      answer: "100-200k",
    },
    {
      answer: "200k +",
    },
    {
      answer: "200k +",
    },
  ];

  const QuestionBox = ({ answer, active, onClick }) => {
    return (
      <>
        <a
          onClick={onClick}
          className={`${
            !active ? "bg-gray-200" : "bg-green-200"
          } py-6 px-4 flex w-[250px]  xxs:w-[300px] justify-center sm:justify-start rounded-md`}
        >
          <span className={`text-gray-700 font-semibold text-sm`}>
            {answer}
          </span>
        </a>
      </>
    );
  };

  const handlemodal = (e) => {
    !showmodal ? setshowmodal(true) : setshowmodal(false);
  };

  return (
    <>
      <div
        onClick={() => showmodal && setshowmodal(false)}
        className="flex py-10   px-4 space-y-4 slide-in-right   "
      >
        <div className="py-4 mx-auto sm:min-w-[600px] ">
          <div className="text-start space-y-2 pb-4 max-w-[60ch]">
            <h3
              className={
                "sm:text-[28px] text-[25px] leading-tight  font-bold text-gray-800"
              }
            >
              {question}
            </h3>
            <Why setshowmodal={handlemodal} showmodal={showmodal} />
          </div>
          <div className="  flex justify-center">
            <div className="flex flex-col sm:grid grid-cols-2 grid-flow-row sm:gap-x-2 py-8    items-center gap-y-4">
              {answers.map((i, index) => {
                return (
                  <div id={index} key={index}>
                    <QuestionBox
                      onClick={() => setactiveanswer(index)}
                      active={index == activeanswer}
                      answer={i.answer}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div>
              <a className="text-[20px] text-gray-700">
                <FaArrowLeft />
              </a>
            </div>
            <div className="py-2">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px]  w-full rounded-3xl">
                {"Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Why = ({ showmodal, setshowmodal }) => {
  return (
    <>
      <div className="relative max-w-[500px] transition-all ">
        <div>
          <span
            onClick={() => setshowmodal(true)}
            className="text-[14px] text-blue-500 font-medium cursor-pointer"
          >
            Why we need this
          </span>
        </div>
        {showmodal && (
          <div className="absolute top-0 right-0 shadow-2xl  rounded-md   bg-gray-300  flex justify-center  min-w-[250px]">
            <div className="relative p-2">
              <div>
                <div className="mb-2">
                  <span className="text-[18px] font-bold">
                    Conflict of Interest
                  </span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit doloremque nemo facere ab eaque, magni adipisci,
                  libero in totam voluptatum iure veritatis cupiditate. A ipsam
                  culpa officia labore sint ratione!
                </div>
              </div>
              <span
                onClick={() => setshowmodal(false)}
                className="absolute top-0 right-2"
              >
                x
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const Agreements = () => {
  return (
    <>
      <div className="flex py-10   px-4 space-y-4 slide-in-right   ">
        <div className="py-4 mx-auto sm:min-w-[600px] ">
          <div className="text-start space-y-2 ">
            <h3
              className={"sm:text-[28px] text-[25px]  font-bold text-gray-800"}
            >
              Agreements related to your Account
            </h3>
            <p className="text-[14px] text-gray-700 font-medium">
              Please carefully read and accept the following agreements for your
              new account
            </p>
          </div>
          <div className="py-10">
            <div className="flex items-center">
              <label htmlFor="">Agreements</label>
              <select className="border-0 bg-transparent w-0">
                <option value=""></option>
                <option value="">
                  <input type="file" name="" id="" />
                  apex agreement
                </option>
                <option value="">Deposit Agreements</option>
              </select>
            </div>
            {/* <select  className='w-full text-lg sm:text-xl text-gray-700 font-bold focus:ring-0 bg-transparent focus:border-b-green-300 border-b-2 border-l-0 border-r-0 border-t-0 pb-4  border-b-green-300  focus:border-b-2  ' type="text" /> */}
            <div className="flex flex-col gap-y-4">
              {/* <label htmlFor="">Opt-in to get financial tips and reminders</label> */}
              <div className="flex  items-center gap-x-4">
                <input id="check" type="checkbox" />
                <div className=" max-w-[50ch]  pt-4">
                  <label className="text-sm  " htmlFor="check">
                    I agree to the apex account agreement, Apex security lending
                    program , Apex FDIC Sweeps Program Terms and Conditions.{" "}
                  </label>
                </div>
              </div>
              <div className="flex  items-center gap-x-4">
                <input id="check" type="checkbox" />
                <div className=" max-w-[50ch]  pt-4">
                  <label className="text-sm  " htmlFor="check">
                    {" "}
                    I agree to the Deposit account Agreement and the deposit
                    services provided by metabank member FDIC.{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            {/* <div>
            <a className='text-[20px] text-gray-700'><FaArrowLeft /></a>
          </div> */}
            <div className="py-2 w-full">
              <button className="bg-green-300 shadow-xl hover:bg-green-400 text-black font-bold py-4 px-6 min-w-[180px] sm:min-w-[70%]  w-full rounded-3xl">
                {"Accept"}
              </button>
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function MobileDashboard(params) {
  return (
    <>
      <div className="px-2 pb-[73px]">
        <div className="flex flex-col gap-y-6 items-center">
          <div>
            <DebitCard />
          </div>
          <div>
            <NewsTab />
          </div>
          <div className="px-1.5 pb-8">
            <Agents />
          </div>
        </div>
      </div>
    </>
  );
}

const Syndicatecard = () => {
  const [hidden, sethidden] = useState(true);
  return (
    <>
      <div className="flex flex-col">
        <motion.a
          animate={hidden ? "" : { opacity: 0.5 }}
          href="#"
          class=" z-50 relative block min-w-[340px] max-w-sm overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat"
        >
          <div class="absolute inset-0 bg-black"></div>

          <div class="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
            <div class="sm:pt-18 pt-12 text-white lg:pt-24">
              <h3 class="text-xl font-bold sm:text-2xl">Rome</h3>

              <p class="text-sm">Italy</p>
            </div>

            <span
              onClick={() => sethidden(!hidden)}
              class="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
            >
              4.5
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
        </motion.a>
        <AnimatePresence exitBeforeEnter={true}>
          {!hidden && (
            <motion.div
              exit={{ x: "-100%" }}
              initial={{ y: "0" }}
              animate={{ y: ["20%", "40%"] }}
              transition={{ duration: 0.4 }}
              className="flex  p-4  justify-center bg-red-300 "
            >
              <div class="flex space-x-3 ">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
                >
                  Follow
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200   "
                >
                  Coinvest
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const ClaimModal = ({ modal, setmodal, question, freetrial }) => {
  const [loading, setloading] = useState(null);
  const [subscribe, setsubscribe] = useState(null);
  return (
    <>
      <AnimatePresence>
        {modal && (
          <div
            key={"moda"}
            className="fixed  flex justify-center items-center inset-0 bg-black/40 px-2"
          >
            <motion.div
              key={"modalo"}
              exit={{ y: "200%" }}
              initial={{ y: "-100%" }}
              animate={{ y: "0" }}
              className={
                !subscribe
                  ? "bg-white py-8 px-2 rounded-2xl relative "
                  : "bg-white py-8 px-2 rounded-2xl relative hidden"
              }
            >
              <div>
                <h3 className="text-[28px] text-gray-700 font-semibold text-center mb-4">
                  {"Claim 10$ ?"}
                </h3>
                <p className="text-lg text-center">
                  Boost Your Investment Funds With $10 From us when you
                  subscribe to a Plan Including our 7 days Free Trial plan{" "}
                </p>
              </div>
              <div className="py-4 flex justify-center">
                <button
                  onClick={() => {
                    setloading(true);
                    setTimeout(() => {
                      setloading(false);
                      setsubscribe(true);
                    }, 3000);
                  }}
                  className="bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl"
                >
                  <span className="text-lg text-center">
                    {!loading ? "Subscribe" : "loading.."}
                  </span>{" "}
                  {!loading && <FaArrowRight style={{ color: "#f9f8f8" }} />}
                </button>
              </div>
              <div
                onClick={() => {
                  setloading(false);
                  setmodal(!modal);
                }}
                className="absolute top-2 right-2"
              >
                close
              </div>
            </motion.div>
          </div>
        )}
        {subscribe && (
          <div
            key={"modaul"}
            className="fixed  flex justify-center items-center inset-0 bg-black/40 px-2"
          >
            <motion.div
              key={"modalin"}
              exit={{ y: "200%" }}
              initial={{ y: "-100%" }}
              animate={{ y: "0" }}
              className={"bg-white py-8 px-2 rounded-2xl relative"}
            >
              <div>
                <h3 className="text-[28px] text-gray-700 font-semibold text-center mb-4">
                  {"Choose Portfolio"}
                </h3>
                <p className="text-lg text-center">
                  Boost Your Investment Funds With $10 From us when you
                  subscribe to a Plan Including our 7 days Free Trial plan{" "}
                </p>
              </div>
              <div className="py-4 flex justify-center">
                <button
                  onClick={() => setloading(true)}
                  className="bg-green-200 flex gap-x-4 items-center justify-center w-11/12 p-4 rounded-2xl"
                >
                  <span className="text-lg text-center">
                    {!loading ? "Subscribe" : "loading.."}
                  </span>{" "}
                  {!loading && <FaArrowRight style={{ color: "#f9f8f8" }} />}
                </button>
              </div>
              <div
                onClick={() => {
                  setloading(false);
                  setmodal(!modal);
                  setsubscribe(false);
                }}
                className="absolute top-2 right-2"
              >
                close
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const Post = () => {
  const createdAt = '2023-03-26T18:59:00.000Z';
  const parsedCreatedAt = day(createdAt);
  const timeAgo = parsedCreatedAt.fromNow();

  return (
    <>
      <div className="flex gap-x-1 py-2 border-t border-t-gray-800 border-b border-b-gray-800 px-2">
        <div className="w-[60px] h-[60px] border flex justify-center items-center rounded-full">
          <div>
            <img className="w-full" src={people01} alt="user-image" />
          </div>
        </div>
        <div className="flex-1">
          <div className="pb-4">
            <div className="justify-between flex">
              <p className="text-lg font-semibold">Peter okoye</p>
              <p className="text-sm text-gray-400"> {timeAgo}</p>
            </div>
            <p className="text-base">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              saepe corporis sunt sint, quia repellat inventore vitae laborum
              voluptatem velit sit nostrum tempora earum! Quibusdam beatae esse
              repudiandae nihil debitis!
            </p>
          </div>
          <div className="bg-black rounded-lg">
            <div className="w-[300px] h-[300px]">
              <img className="w-full" src={bitcoin} alt="post-image" />
            </div>
          </div>
          <div className="flex  justify-between py-4">
            <FaComment /> <FaHeart /> <FaCog />
          </div>
        </div>
      </div>
    </>
  );
};




function ChatInput({ onSendMessage }) {
  const [messageText, setMessageText] = useState('');
  const [attachedFile, setAttachedFile] = useState(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  


  function handleMessageTextChange(event) {
    setMessageText(event.target.value);
  }

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    setAttachedFile(file);
    setFilePreviewUrl(URL.createObjectURL(file));
  }

  function handleRemoveFile() {
    setAttachedFile(null);
  }

  function handleSendMessage() {
    const message = {
      text: messageText,
      file: attachedFile
    };
    onSendMessage(message);
    setMessageText('');
    setAttachedFile(null);
  }

  function handleEmojiClick(emoji) {
    setMessageText(messageText + emoji);
    setIsEmojiPickerOpen(false);
  }

  return (
    <div className="py-4 relative bg-emerald-600">
      <div className="flex px-2 items-center border border-gray-800">
       <label htmlFor="mediabutton"><FaFileUpload/></label>
      <input className="border-0 focus:border-0 focus:ring-0 " type="text" value={messageText} onChange={handleMessageTextChange} />
      <button onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}>😀</button>
      {isEmojiPickerOpen && (
    <div className="absolute -top-[500px] -left-10" >
      <EmojiPicker  onEmojiClick={(emoji)=> handleEmojiClick(emoji.emoji)} />
    </div>
  )}
      <input  className="hidden" id="mediabutton" prefix="" type="file" accept="image/*, video/*" onChange={handleFileInputChange} />
      <button onClick={handleSendMessage}>Send</button>
      </div>
      {attachedFile && (
        <div>
          {filePreviewUrl && (
            <div>
              <img src={filePreviewUrl} alt={attachedFile.name} style={{ maxWidth: '100%' }} />
            </div>
          )}
          <div>
            Attached File: {attachedFile.name}
            <button onClick={handleRemoveFile}>Remove</button>
          </div>
        </div>
      )}  
    </div>
  );
}

export default Test;
