import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { honeycomb, plant, careerslogo, home, subscribe, search, bag , brain, pipesvg, hemplogo} from '../assets';





const AnimatedSidebar = ({
  links,
  setSidebarOpen,
  sidebarOpen,
  isExpanded,
  setIsExpanded,
}) => {
  // const [isExpanded, setIsExpanded] = useState(true);
  const [explore, setexplore] = useState(false);
  const [showinvestments, setshowinvestments] = useState(false);
  const [showexplore, setshowexplore] = useState(false);
  const [hive, sethive] = useState(false);
  const trigger = useRef(null);
  const path = useLocation().pathname;

   

  function handleClose(e) {
    e.stopPropagation()
    console.log(e.currentTarget.id)
    setIsExpanded(false)
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        
      {isExpanded && (
        <div
          key="sidebar"
          id="backdrop"
          onClick={(e) => handleClose(e)}
          className="fixed bg-blk/10 inset-0 z-[700]"
        >
              {/* main background */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              id="sidebar"
              key={"1"}
              initial={{ y: "-100%" }}
              exit={{ y: "-100%" }}
              animate={{ y: isExpanded ? "0" : "-100%" }}
              whileHover={{ width: "320px" }}
              transition={{ duration: 0.4 }}
              className="  bg-white w-full  sm:w-72 flex flex-col fixed z-[800] left-0 top-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar shrink-0 "
            >
              {/* sidebar header */}
              <div className="flex justify-between px-5  py-2 ">
                {/* Close button */}

                <button
                  className="lg:hidden text-slate-500 hover:text-slate-400"
                  onClick={() => {
                    setIsExpanded(false);
                  }}
                  aria-controls="sidebar"
                  aria-expanded={sidebarOpen}
                >
                  <span className="sr-only">Close sidebar</span>
                  <span
                    className="w-8 h-6 fill-current"
                  >
                    <FaChevronUp/>
                  </span>
                </button>

                {/* Logo */}

                <h2 className="text-3xl font-poppins font-extrabold text-blk 2xl:block">
                  MEDIK <span className="text-green-400">420</span>{" "}
                </h2>
              </div>

              {/* sidebar container */}
              {isExpanded && (
                
                  <motion.ul
                    key={2}
                    exit={{x:'-100%'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delayChildren: 0.6 }}
                    className={"grid grid-cols-1 gap-y-2  grid-flow-row pt-2 "}
                  >
                    {/* home link */}                    
                    {path != "/" && (
                      <motion.li
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%" }}
                        transition={{ delay: 0.4, duration: 0.2 }}
                      >
                        <Link
                          onClick={() => {
                            setIsExpanded(false);
                          }}
                          to={"/"}
                        >
                          <div className="px-2 ">
                            <a className="flex items-center bg-white relative  rounded-lg">
                              <div className="p-3">
                                <div className="w-8 ">
                                  <img
                                    className="w-full"
                                    src={home}
                                    alt="nnnn"
                                  />
                                </div>
                              </div>
                              <span className="text-2xl font-bold text-blk">
                                Home
                              </span>
                              <div className="flex w-full items-center justify-end pr-5  "></div>
                            </a>
                          </div>
                        </Link>
                      </motion.li>
                    )}

                    {/* investing link */}

                    <motion.li
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%" }}
                      transition={{ delay: 0.4, duration: 0.2 }}
                    >
                      <div className="p-2 ">
                        <a className="flex items-center bg-white relative  rounded-lg">
                          <div className="p-3">
                            <div className="w-8 ">
                              <img className="w-full" src={plant} alt="nnnn" />
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-blk">
                            Investing
                          </span>
                          <div className="flex w-full items-center justify-end pr-5  ">
                            <div className="">
                              <span
                                onClick={() =>
                                  showinvestments
                                    ? setshowinvestments(false)
                                    : setshowinvestments(true)
                                }
                                className="text-sm "
                              >
                                {showinvestments ? (
                                  <FaChevronUp />
                                ) : (
                                  <FaChevronDown />
                                )}
                              </span>
                            </div>
                          </div>
                        </a>
                        {showinvestments && (
                          <AnimatePresence exitBeforeEnter>
                            <motion.div
                              initial={{ y: "100%" }}
                              animate={{ y: "0" }}
                              exit={{ y: "-100%" }}
                              className="pt-2 px-10 flex flex-col gap-y-5"
                            >
                              <ul className="flex flex-col gap-y-3">
                                <Link
                                  onClick={() => {
                                    setIsExpanded(false);
                                    setshowinvestments(false);
                                  }}
                                  to={"/smart"}
                                >
                                  <li className="text-sm font-semibold flex gap-x-4 items-center">
                                    <div className="w-4 h-4">
                                    <img src={brain} alt="nnnn" />
                                    </div>
                                    Smart Portfolio
                                  </li>
                                </Link>
                                <Link
                                  onClick={() => {
                                    setIsExpanded(false);
                                    setshowinvestments(false);
                                  }}
                                  className=""
                                  to={"/digital"}
                                >
                                  <li className="text-sm font-semibold flex gap-x-4 items-center">
                                    <div className="w-4 h-4">
                                    <img src={hemplogo} alt="nnnn" />
                                    </div>
                                    Digital Farming
                                  </li>
                                </Link>
                                <Link
                                  onClick={() => {
                                    setIsExpanded(false);
                                    setshowinvestments(false);
                                  }}
                                  to={"/bem"}
                                >
                                  <li className="text-sm font-semibold flex gap-x-4 items-center">
                                    <div className="w-4 h-4">
                                    <img src={pipesvg} alt="nnnn" />
                                    </div>
                                    Pipe Funding
                                  </li>
                                </Link>
                                {/* <Link to={'/smallbiz'}>
                          <li className='text-2xl font-bold'>Agency Program</li>
                          </Link> */}
                              </ul>
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    </motion.li>

                    {/* hive link */}

                    <motion.li
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%" }}
                      transition={{ delay: 0.4, duration: 0.2 }}
                    >
                      <Link
                        onClick={() => {
                          setIsExpanded(false);
                        }}
                        to={"/hive"}
                      >
                        <div className="p-2 ">
                          <a className="flex items-center bg-white relative  rounded-lg">
                            <div className="p-3">
                              <div className="w-8 ">
                                <img
                                  className="w-full"
                                  src={honeycomb}
                                  alt="nnnn"
                                />
                              </div>
                            </div>
                            <span className="text-2xl font-bold text-blk">
                              Hive
                            </span>
                          </a>
                        </div>
                      </Link>
                    </motion.li>

                    {/* shop link */}

                    <motion.li
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%" }}
                      transition={{ delay: 0.4, duration: 0.2 }}
                    >
                      <div className="p-2 ">
                        <a className="flex items-center bg-white relative  rounded-lg">
                          <div className="p-3">
                            <div className="w-8 ">
                              <img className="w-full" src={bag} alt="nnnn" />
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-blk">
                            Shop
                          </span>
                        </a>
                      </div>
                    </motion.li>


                    {/* pricing link */}
                    <Link
                      onClick={() => {
                        setIsExpanded(false);
                      }}
                      to={"/pricing"}
                    >
                      <motion.li
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%" }}
                        transition={{ delay: 0.4, duration: 0.2 }}
                      >
                        <div className="p-2 ">
                          <a className="flex items-center bg-white rounded-lg">
                            <div className="p-3">
                              <div className="w-8 ">
                                <img
                                  className="w-full"
                                  src={subscribe}
                                  alt="nnnn"
                                />
                              </div>
                            </div>
                            <span className="text-2xl font-bold text-blk">
                              Pricing
                            </span>
                          </a>
                        </div>
                      </motion.li>
                    </Link>

                    {/* job links */}
                    {path != "/jobs" && (
                      <motion.li
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%" }}
                        transition={{ delay: 0.4, duration: 0.2 }}
                      >
                        <div className="p-2 ">
                          <>
                            <Link
                              onClick={() => {
                                setIsExpanded(false);
                              }}
                              to={"/jobs"}
                            >
                              <a className="flex items-center bg-white relative  rounded-lg">
                                <div className="p-3">
                                  <div className="w-8 ">
                                    <img
                                      className="w-full"
                                      src={careerslogo}
                                      alt="nnnn"
                                    />
                                  </div>
                                </div>
                                <p>
                                  <a
                                    className="inline-flex gap-x-4 text-2xl font-bold text-blk "
                                    
                                  >
                                    Careers
                                  </a>{" "}
                                  <span className="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md">
                                    We're hiring
                                  </span>
                                </p>
                              </a>
                            </Link>
                          </>
                        </div>
                      </motion.li>
                    )}



                    {/* about us links */}
                    <Link to={"/team"}>
                    <motion.li
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%" }}
                      transition={{ delay: 0.4, duration: 0.2 }}
                    >
                      <div className="p-2 ">
                        <a className="flex items-center bg-white relative  rounded-lg">
                          <div className="p-3">
                            <div className="w-8 ">
                              <img className="w-full" src={search} alt="nnnn" />
                            </div>
                          </div>
                          <span className="text-2xl font-bold text-blk">
                            About us
                          </span>
                          {/* <div className="flex w-full items-center justify-end pr-5  ">
                            <div className="">
                              <span
                                onClick={() =>
                                  explore ? setexplore(false) : setexplore(true)
                                }
                                className="text-sm "
                              >
                                {explore ? <FaChevronUp /> : <FaChevronDown />}
                              </span>
                            </div>
                          </div> */}
                        </a>
                        {explore && (
                          <AnimatePresence exitBeforeEnter>
                            <motion.div
                              initial={{ y: "100%" }}
                              animate={{ y: "0" }}
                              exit={{ y: "-100%" }}
                              className="pt-2 px-10 flex flex-col gap-y-5"
                            >
                              <ul className="flex flex-col gap-y-5">
                                <Link
                                  onClick={() => {
                                    setIsExpanded(false);
                                    setexplore(false);
                                  }}
                                  to={"/team"}
                                >
                                  <li className="text-[16px] flex gap-x-3 items-center font-bold">
                                    <a className="text-gray-600">
                                      <FaBuilding />
                                    </a>
                                    <a className="leading-[0.5]">Medik 420</a>
                                  </li>
                                </Link>
                                <Link
                                  onClick={() => {
                                    setIsExpanded(false);
                                    setexplore(false);
                                  }}
                                  to={"/bem"}
                                >
                                  <li className="text-[16px] flex gap-x-3 items-center font-bold">
                                    <a className="text-gray-600">
                                      <FaBuilding />
                                    </a>
                                    <a className="leading-[0.5]">Bem</a>
                                  </li>
                                </Link>
                              </ul>
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    </motion.li>
                    </Link>

                  </motion.ul>
  
              )}

              {/* registration buttons */}
              <div className="pt-4 flex flex-col px-2 gap-y-4">
                <Link to={'/login'} className="btn text-center">Login</Link>
                <Link to={'/register'} className="btnAlt text-center">Register</Link>
              </div>
            </motion.div>
        </div>
      )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedSidebar;
