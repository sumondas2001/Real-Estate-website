import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import { Toaster } from "react-hot-toast";

const Main = () => {
     const { pathname } = useLocation();
     useEffect(() => {
          Aos.init()
     }, []);
     useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname]);



     return (
          <div className="font-Playfair">
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