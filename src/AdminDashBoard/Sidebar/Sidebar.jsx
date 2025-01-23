import { NavLink } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import logo from '../../assets/logo/Gold_Black_Modern_Real_Estate_Logo-removebg-preview.png';
import { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Sidebar = () => {
     const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
     const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
     const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
     const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
     const [isContactUsDropdownOpen, setIsContactUsDropdownOpen] = useState(false);

     const links = (
          <>
               <li className="w-full">
                    <NavLink
                         to="/admin-dashBoard"
                         end
                         className={({ isActive, isPending }) =>
                              `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                              }`
                         }
                    >
                         Dashboard
                    </NavLink>
               </li>
               <li>
                    <button
                         onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                         className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>Home</span>
                         {isHomeDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isHomeDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 2
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-3"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 3
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                         className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>About</span>
                         {isAboutDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isAboutDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 2
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-3"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 3
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
                         className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>Property</span>
                         {isPropertyDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isPropertyDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 2
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-3"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 3
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                         className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>Blog</span>
                         {isBlogDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isBlogDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 2
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-3"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 3
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsCareerDropdownOpen(!isCareerDropdownOpen)}
                         className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>Career</span>
                         {isCareerDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isCareerDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 2
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-3"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 3
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsContactUsDropdownOpen(!isContactUsDropdownOpen)}
                         className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>Contact Us</span>
                         {isContactUsDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isContactUsDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 2
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/admin-slider-3"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider 3
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>



          </>
     );






     return (
          <div
               className="bg-dashboardColor w-64 h-screen px-4 pt-2 pb-3 flex flex-col">

               <div className=" flex-1 ">
                    <div className="flex  text-center">
                         <img className="lg:h-[45px]  lg:w-[85px] md:h-[70px] md:w-[120px] h-16 w-20 brightness-200" src={logo} alt="" />
                    </div>


                    <div className=" mt-2 relative">
                         <input type="text" className="my-3 bg-slate-900 px-3 w-full text-sm py-2 rounded-lg" placeholder="Search in menu" name="search" id="" />

                         <VscSearch className="absolute bottom-5 right-2 opacity-50" />

                    </div>
               </div>
               <div className="overflow-y-auto   h-svh mt-0">


                    <ul className="flex-1 text-sm font-medium  space-y-[3px]  ">

                         {links}


                    </ul>

               </div>

          </div>
     );
};

export default Sidebar;