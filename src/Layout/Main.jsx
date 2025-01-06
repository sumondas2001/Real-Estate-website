import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import { Toaster } from "react-hot-toast";

const Main = () => {

     useEffect(() => {
          Aos.init()
     }, []);


     return (
          <div className="font-Cinzel">
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
               <Toaster
                    position="top-right"
                    reverseOrder={true}
               />

          </div>
     );
};

export default Main;