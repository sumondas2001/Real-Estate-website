import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";
import { useContext } from "react";
import { ToggleSideBarContext } from "../ToggleProvider/ToggleProvider";
import { TfiClose, TfiAlignJustify } from "react-icons/tfi";
import { AuthContext } from "../../AuthContext/AuthProvider";

const Header = () => {
     const { handelToggleSidebar, isOpen } = useContext(ToggleSideBarContext);

     // context provider logout 
     const { logout } = useContext(AuthContext);

     const handelLogOut = () => {
          logout()
     };

     return (
          <div className="flex justify-between pr-10 pl-2 py-3  bg-dashboardColor text-white">
               {/* Left Section */}
               <div className="flex items-center gap-4">
                    {/* Toggle Sidebar Button */}
                    <button onClick={handelToggleSidebar}>
                         {isOpen ? <TfiClose className="hidden lg:block" /> : <TfiAlignJustify />}
                    </button>

                    {/* Website Link */}
                    <div className="flex items-center">
                         <Link
                              to={"/"}
                              className="hover:bg-green-700 p-1 hover:text-white rounded-full"
                         >
                              <BiWorld alt="Web site" className="text-2xl" />
                         </Link>
                    </div>
               </div>

               {/* Right Section */}
               <div className="dropdown dropdown-end">
                    <div className="flex items-center gap-2">
                         <h1 className="font-medium lg:text-sm md:text-sm text-xs">ADMIN</h1>
                         <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-ghost btn-circle avatar"
                         >
                              <RxAvatar className="lg:size-10 md:size-9 size-8 w-10 rounded-full" />
                         </div>
                    </div>

                    {/* Dropdown Menu */}
                    <ul
                         tabIndex={0}
                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                         <li>
                              <a className="justify-between text-lg">
                                   Profile
                                   <span className="badge">New</span>
                              </a>
                         </li>
                         <li>
                              <a className="text-lg">Settings</a>
                         </li>

                         <Link
                              onClick={handelLogOut}
                              className="flex items-center gap-4 hover:bg-slate-950 px-2"
                         >
                              <CiLogout className="text-xl" />
                              <li className="text-lg">Logout</li>
                         </Link>
                    </ul>
               </div>
          </div>
     );
};

export default Header;
