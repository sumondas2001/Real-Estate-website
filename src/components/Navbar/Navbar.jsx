import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from '../../assets/logo/Gold_Black_Modern_Real_Estate_Logo-removebg-preview.png'

const Navbar = () => {

     // mobile device and tablet  dropDown icon

     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const location = useLocation();

     useEffect(() => {
          setIsDropdownOpen(false)

     }, [location])

     const handelDropdownToggle = () => {
          setIsDropdownOpen(!isDropdownOpen);
     }
     const links = (
          <>

               <li>
                    <NavLink
                         className={({ isActive }) =>
                              isActive
                                   ? "focus:bg-transparent focus:text-primaryColor hover:underline hover:decoration-primaryColor text-primaryColor"
                                   : "hover:underline decoration-primaryColor hover:text-primaryColor "
                         }
                         to={'/'}
                    >
                         HOME
                    </NavLink>

               </li>
               <li>
                    <NavLink className={({ isActive }) =>
                         isActive
                              ? "focus:bg-transparent focus:text-primaryColor hover:underline hover:decoration-primaryColor text-primaryColor"
                              : "hover:underline decoration-primaryColor hover:text-primaryColor "
                    }
                         to={'/about'}
                    >ABOUT
                    </NavLink>
               </li>
               <li>
                    <NavLink className={({ isActive }) =>
                         isActive
                              ? "focus:bg-transparent focus:text-primaryColor hover:underline hover:decoration-primaryColor text-primaryColor"
                              : "hover:underline decoration-primaryColor hover:text-primaryColor "
                    }
                         to={'/property/all-projects'}
                    >PROPERTY
                    </NavLink>
               </li>
               <li>
                    <NavLink className={({ isActive }) =>
                         isActive
                              ? "focus:bg-transparent focus:text-primaryColor hover:underline hover:decoration-primaryColor text-primaryColor"
                              : "hover:underline decoration-primaryColor hover:text-primaryColor "
                    }
                         to={'/blog'}
                    >BLOG
                    </NavLink>
               </li>
               <li>
                    <NavLink className={({ isActive }) =>
                         isActive
                              ? "focus:bg-transparent focus:text-primaryColor  hover:underline hover:decoration-primaryColor text-primaryColor"
                              : "hover:underline decoration-primaryColor hover:text-primaryColor "
                    }
                         to={'/career'}
                    >CAREER
                    </NavLink>
               </li>
               <li>
                    <NavLink className={({ isActive }) =>
                         isActive
                              ? "focus:bg-transparent focus:text-primaryColor hover:underline hover:decoration-primaryColor text-primaryColor"
                              : "hover:underline decoration-primaryColor hover:text-primaryColor "
                    }
                         to={'/contactUs/customerFrom'}
                    >CONTACT US
                    </NavLink>
               </li>


          </>
     );

     return (
          <div className=" fixed text-white left-0  top-0 right-0  mx-auto bg-opacity-50 z-50 border-b-[1px] border-b-white bg-[#000000] ">
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] py-0 navbar px-0 mx-auto">
                    <div className="navbar-start md:hidden w-2/5 md:w-10 lg:w-0">
                         <div className="dropdown">
                              {/* Toggle Dropdown */}
                              <div
                                   onClick={handelDropdownToggle}
                                   tabIndex={0}
                                   role="button"
                                   className="mr-4 lg:hidden "
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                   </svg>
                              </div>
                              {/* // Conditionally render dropdown */}
                              {
                                   isDropdownOpen && (
                                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 lg:w-52  md:w-44 w-36 p-2 shadow text-base font-semibold px-1">
                                             {links}
                                        </ul>
                                   )
                              }

                         </div>
                    </div>

                    <div className="z-50 py-1 navbar-start">
                         <Link to={"/"}>
                              <img className="lg:h-[72px]  lg:w-[128px] md:h-[70px] md:w-[120px] h-16 w-20 brightness-200" src={logo} alt="" />
                         </Link>
                    </div>

                    <div className="navbar-center md:block hidden lg:flex px-2 z-50">

                         <ul className="menu menu-horizontal brightness-200 lg:gap-12    lg:text-sm md:text-xs font-medium lg:px-2 md:px-1">
                              {links}
                         </ul>


                    </div>


               </div>
          </div>
     );
};
export default Navbar;







