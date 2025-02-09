import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";
// import Lenis from '@studio-freight/lenis'

import { Toaster } from "react-hot-toast";
import AOS from 'aos';

const Main = () => {

     const pathname = useLocation();


     useEffect(() => {
          AOS.init();
     }, [])

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname.pathname]);




     return (
          <div className="font-Playfair bg-black">
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