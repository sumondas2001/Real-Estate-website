import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { BiWorld } from "react-icons/bi";

const Header = () => {

     const handelLogOut = () => {
          console.log('log Out');
     }
     return (
          <div className="flex justify-between px-10  py-3  bg-dashboardColor">


               <div className="flex items-center">
                    <Link to={'/'} className=" hover:bg-green-700 p-1 hover:text-white rounded-full"><BiWorld alt="Web site" className="text-2xl" /></Link>
               </div>

               <div className="dropdown dropdown-end">

                    <div className="flex items-center gap-2">
                         <h1 className="font-medium text-sm">ADMIN</h1>
                         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                              <RxAvatar className="size-10 w-10 rounded-full" />
                         </div>
                    </div>
                    <ul
                         tabIndex={0}
                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         <li>
                              <a className="justify-between text-lg">
                                   Profile
                                   <span className="badge">New</span>
                              </a>
                         </li>
                         <li><a className="text-lg">Settings</a></li>

                         <Link onClick={handelLogOut} className="flex items-center gap-4 hover:bg-slate-950 px-2">
                              <CiLogout className="text-xl" />
                              <li className="text-lg">Logout</li>
                         </Link>
                    </ul>
               </div>
          </div>
     );
};

export default Header;