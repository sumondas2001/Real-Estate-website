import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import PagesTitle from "../Shared/PagesTitle/PagesTitle";
import ToggleProvider from "./ToggleProvider/ToggleProvider";

const AdminDashBoard = () => {
     return (
          <ToggleProvider>
               <div className="flex flex-row h-screen w-screen overflow-hidden">
                    <PagesTitle title={"DashBoard"} />

                    {/* Sidebar */}
                    <div className="flex-shrink-0">
                         <Sidebar />
                    </div>

                    {/* Main Content */}
                    <div className="w-full flex flex-col">
                         <Header />

                         {/* Scrollable Outlet */}
                         <div className="flex-1 overflow-y-auto p-4">
                              <Outlet />
                         </div>
                    </div>
               </div>
          </ToggleProvider>
     );
};

export default AdminDashBoard;
