import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import PagesTitle from "../Shared/PagesTitle/PagesTitle";
import ToggleProvider from "./ToggleProvider/ToggleProvider";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const AdminDashBoard = () => {
     const { user } = useContext(AuthContext);
     console.log(user);

     return (
          <div>
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
                              <div className="flex-1 overflow-y-auto p-6">
                                   <Outlet />
                              </div>
                         </div>
                    </div>
               </ToggleProvider>
          </div>
     );
};

export default AdminDashBoard;
