import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight, FaHandHoldingUsd, FaBriefcase, FaGraduationCap, FaChartLine, FaPowerOff, FaUserTie, FaCog, FaLeaf, FaComment } from 'react-icons/fa';


function Sidebar({
  avatar,
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');





  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  },[]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div className=" hiddenfromtabupwards">
      {/* Sidebar backdrop (mobile only) */}
      <div onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 bg-slate-900/70 bg-opacity-30 z-[8000] lg:hidden lg:z-[9000000] transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div className="">
        <div onClick={()=> setSidebarOpen(!sidebarOpen)}
          id="sidebar"
          ref={sidebar}
          className={`flex flex-col fixed z-[9000] left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform min-h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-500 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-64"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex justify-between mb-10 pr-3 sm:px-2">
            {/* Close button */}
            <button
              ref={trigger}
              className="lg:hidden text-slate-500 hover:text-slate-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            {/* Logo */}
            <NavLink end to="/" className="block">
              <h2 className="text-3xl font-poppins font-extrabold text-blk 2xl:block">
                MEDIK <span className="text-green-400">420</span>{" "}
              </h2>
              {/* <h2 className='text-3xl font-poppins font-extrabold text-blk hidden lg:block 2xl:hidden'>M <span className='text-green-400'></span> </h2> */}
              {/* <img className="w-8 h-8 rounded-full hidden md:block" src={avatar} width="32" height="32" alt="User" /> */}
            </NavLink>
          </div>

          {/* Links */}

          <div className="">
            {/* Pages group */}
            
            <div>
              {/* <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3> */}
              <ul className="mt-3 space-y-8 md:space-y-10">
                {/* Dashboard */}
                {/* <div className="hover:bg-green-400 rounded-3xl">
                  <li
                    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname.includes("inbox") && "bg-slate-900"
                    }`}
                  >
                    <NavLink
                      end
                      to="/agents"
                      className={`block text-glass hover:text-white truncate transition duration-150 ${
                        pathname.includes("inbox") && "hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center ">
                        <span className="text-2xl">
                          <FaUserTie />
                        </span>
                        <span className=" font-poppins flex gap-4 justify-center items-center  text-lg font-bold ml-3 lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Agents{" "}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </div> */}
                {/* <div className="hover:bg-green-400 rounded-3xl">
                  <li
                    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname === "/" && "bg-slate-900"
                    }`}
                  >
                    <NavLink
                      end
                      to="/coach"
                      className={`block text-glass hover:text-white truncate transition duration-150 ${
                        pathname === "/profile" && "hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl">
                          <FaGraduationCap />
                        </span>
                        <span className=" font-bold font-poppins flex gap-4 justify-center items-center  text-lg  ml-3 lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Coach{" "}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </div> */}
                <div className="hover:bg-green-400 rounded-3xl">
                  <li
                    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname === "/" && "bg-slate-900"
                    }`}
                  >
                    <NavLink
                      end
                      to="settings"
                      className={`block text-glass hover:text-white truncate transition duration-150 ${
                        pathname === "/" && "hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl">
                          <FaCog />
                        </span>
                        <span className="font-bold font-poppins flex gap-4 justify-center items-center  text-lg ml-3 lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Settings{" "}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </div>
                <div className="hover:bg-green-400 rounded-3xl">
                  <li
                    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname === "/" && "bg-slate-900"
                    }`}
                  >
                    <NavLink
                      end
                      to="profile"
                      className={`block text-glass hover:text-white truncate transition duration-150 ${
                        pathname === "/" && "hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl">
                          <FaBriefcase />
                        </span>
                        <span className="font-bold font-poppins flex gap-4 justify-center items-center  text-lg ml-3 lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Profile{" "}
                        </span>
                      </div>
                    </NavLink>
                   
                  </li>
                </div>
                <div className="hover:bg-green-400 rounded-3xl">
                  <li
                    className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                      pathname === "/" && "bg-slate-900"
                    }`}
                  >
                     <NavLink
                      end
                      to="/dashboard/messages"
                      className={`block text-glass hover:text-white truncate transition duration-150 ${
                        pathname === "/" && "hover:text-slate-200"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl">
                          <FaComment/>
                        </span>
                        <span className="font-bold font-poppins flex gap-4 justify-center items-center  text-lg ml-3 lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Chat{" "}
                        </span>
                      </div>
                    </NavLink>
                   
                  </li>
                </div>

                {/* {logout button} */}
               
                {/* <div className="  absolute bottom-20 hidden lg:block   w-14 2xl:hidden">
                  <li className={` py-2 rounded-sm mb-0.5 last:mb-0  `}>
                    <NavLink
                      end
                      to="/dashboard/agents"
                      className={`block text-glass hover:text-white truncate transition duration-150 `}
                    >
                      <div className="flex  ">
                        <div className="bg-blk p-2 rounded-full">
                          <span className="text-4xl text-red-500">
                            <FaPowerOff />
                          </span>
                        </div>

                        <span className=" font-poppins flex gap-4 justify-center items-center  text-lg font-bold ml-3 lg:opacity-100 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          AGENTS{" "}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </div> */}

              </ul>
            </div>
             <NavLink  to={'/'} className="absolute bottom-40 w-full flex gap-x-4 items-center px-4">
              
              <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
              
               <p className='text-blk font-bold'>Exit Dashboard</p>
             </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;