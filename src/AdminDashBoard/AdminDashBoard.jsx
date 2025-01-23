import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import PagesTitle from "../Shared/PagesTitle/PagesTitle";

const AdminDashBoard = () => {
     return (
          <div className=" flex flex-row overflow-hidden h-screen w-screen">
               <PagesTitle title={'DashBoard'} />
               <div className="">
                    <Sidebar />
               </div>
               <div className="w-full  ">
                    <Header />
                    <div className="ml-10" >
                         <Outlet />
                    </div>
               </div>




          </div>
     );
};

export default AdminDashBoard;