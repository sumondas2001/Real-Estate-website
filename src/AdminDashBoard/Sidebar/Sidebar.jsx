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
               <li className="w-full font-medium">
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
                         className="w-full flex items-center font-medium justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span className="">Home</span>
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
                                        to="/admin-dashBoard/home-slider"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Slider
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/home-about"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        About
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/home-banner"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Banner
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/home-video"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Video
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/home-portfolio-1"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Portfolio-1
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/home-portfolio-2"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Portfolio-2
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                         className="w-full flex items-center font-medium justify-between px-4 py-2 hover:bg-slate-900"
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
                         <ul className="ml-4 space-y-1 mt-1 ">
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Hero Section
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-aboutUs"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        About Us
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-achievementsCounts"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Achievements Counts
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-ourMission"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Our Mission
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-ourVision"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Our Vision
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-imgGallery"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Gallery Img
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               <li>
                    <button
                         onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
                         className="w-full flex items-center font-medium justify-between px-4 py-2 hover:bg-slate-900"
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
                         className="w-full font-medium flex items-center justify-between px-4 py-2 hover:bg-slate-900"
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
                         className="w-full flex font-medium items-center justify-between px-4 py-2 hover:bg-slate-900"
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
                         className="w-full font-medium flex items-center justify-between px-4 py-2 hover:bg-slate-900"
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


                    <ul className="flex-1 text-sm font-normal  space-y-[3px]  ">

                         {links}


                    </ul>

               </div>

          </div>
     );
};

export default Sidebar;