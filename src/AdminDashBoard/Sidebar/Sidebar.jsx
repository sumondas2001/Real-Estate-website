import { NavLink } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import logo from '../../assets/logo/Gold_Black_Modern_Real_Estate_Logo-removebg-preview.png';
import { useContext, useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { ToggleSideBarContext } from "../ToggleProvider/ToggleProvider";
import { TfiClose, TfiAlignJustify } from "react-icons/tfi";

const Sidebar = () => {
     const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
     const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
     const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
     const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
     const [isContactUsDropdownOpen, setIsContactUsDropdownOpen] = useState(false);
     const [isHeroDropdownOpen, setIsHeroDropdownOpen] = useState(false);


     const { handelToggleSidebar, isOpen } = useContext(ToggleSideBarContext);


     const links = (
          <>
               {/* Dashboard */}
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
               {/* Home pages all section */}
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
                              {/* home pages slider section */}
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
                              {/* home pages about section */}
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
                              {/* home pages banner section */}
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
                              {/* home pages video section */}
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
                              {/* home pages portfolio-1 section */}
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
                              {/* home pages portfolio-2 section */}
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
               {/* about pages all section */}
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
                              {/* About pages  About Us section */}
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
                              {/* About pages  Achievements Counts section */}
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
                              {/* About pages Our Mission section */}
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
                              {/* About pages Our Vision section */}
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
                              {/* About pages img gallery section */}
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
               {/* property pages all section */}
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
                              {/* property pages property section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/property-section"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Property Section
                                   </NavLink>
                              </li>
                              {/* <li>
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
                              </li> */}

                         </ul>
                    )}
               </li>
               {/* blog pages all section */}
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
                              {/* blog pages blogs section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/blog-section"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Blogs Section
                                   </NavLink>
                              </li>
                              {/* <li>
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
                              </li> */}

                         </ul>
                    )}
               </li>
               {/* Career pages all section */}
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
                              {/* Career pages career about section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/career-about"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        About
                                   </NavLink>
                              </li>
                              {/* Career pages career form section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/career-form"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Form
                                   </NavLink>
                              </li>
                              {/* Career pages departments section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/career-departments"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Departments
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>
               {/* Contacts us pages all section */}
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
                              {/* contacts Us pagers Customer section*/}

                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/contactsUs-customer-from"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Customer Message
                                   </NavLink>
                              </li>
                              {/* contacts Us pagers Land Owner section*/}

                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/contactsUs-landOwner-from"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Land Owner Message
                                   </NavLink>
                              </li>
                              {/* contacts Us pagers address section*/}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/contactsUs-address"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Add Address
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>

               {/*All Hero section */}
               <li>
                    <button
                         onClick={() => setIsHeroDropdownOpen(!isHeroDropdownOpen)}
                         className="w-full font-medium flex items-center justify-between px-4 py-2 hover:bg-slate-900"
                    >
                         <span>Hero Section</span>
                         {isHeroDropdownOpen ? (
                              <AiOutlineUp className="text-lg" />
                         ) : (
                              <AiOutlineDown className="text-lg" />
                         )}
                    </button>

                    {/* Dropdown Links */}
                    {isHeroDropdownOpen && (
                         <ul className="ml-4 space-y-1 mt-1">
                              {/* About Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/about-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        About Hero
                                   </NavLink>
                              </li>
                              {/* About Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/property-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Property Hero
                                   </NavLink>
                              </li>
                              {/* Blogs Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/blog-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Blogs Hero
                                   </NavLink>
                              </li>
                              {/* Career Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/career-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Career Hero
                                   </NavLink>
                              </li>
                              {/* Contact Us Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/contactsUs-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Contact Us Hero
                                   </NavLink>
                              </li>
                              {/* Blog Details Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/blog-details-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Blog Details Hero
                                   </NavLink>
                              </li>
                              {/* Property Details Hero Section */}
                              <li>
                                   <NavLink
                                        to="/admin-dashBoard/property-details-hero"
                                        end
                                        className={({ isActive, isPending }) =>
                                             `block hover:bg-slate-900 px-4 py-2 ${isPending ? "pending" : isActive ? "bg-slate-900 " : ""
                                             }`
                                        }
                                   >
                                        Property Details Hero
                                   </NavLink>
                              </li>
                         </ul>
                    )}
               </li>

          </>
     );

     return (
          isOpen && (
               <div
                    className={`${isOpen ? "absolute lg:static" : "lg:static relative"
                         } bg-dashboardColor w-64 h-screen px-4 pt-2 pb-3 flex flex-col`}
               >
                    {/* Header Section */}
                    <div className="flex-1">
                         <div className="flex items-center justify-between">
                              <div className="flex ">
                                   <img
                                        className="lg:h-[45px]  lg:w-[85px] md:h-[60px] md:w-[100px] h-12 w-16 brightness-200"
                                        src={logo}
                                        alt="Logo"
                                   />
                              </div>

                              {/* Toggle Sidebar Button */}
                              <button onClick={handelToggleSidebar}>
                                   {isOpen ? (
                                        <TfiClose className="lg:hidden" />
                                   ) : (
                                        <TfiAlignJustify />
                                   )}
                              </button>
                         </div>

                         {/* Search Input */}
                         <div className="mt-2 relative">
                              <input
                                   type="text"
                                   className="my-3 bg-slate-900 px-3 w-full text-sm py-2 rounded-lg"
                                   placeholder="Search in menu"
                                   name="search"
                              />
                              <VscSearch className="absolute bottom-5 right-2 opacity-50" />
                         </div>
                    </div>

                    {/* Links Section */}
                    <div className="overflow-y-auto h-svh mt-0">
                         <ul className="flex-1 text-sm font-normal space-y-[3px]">{links}</ul>
                    </div>
               </div>
          )
     );

};

export default Sidebar;