import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Property from "../Pages/Property/Property";
import Blog from "../Pages/Blog/Blog";
import Career from "../Pages/Career/Career";
import ContactUs from "../Pages/ContactUs/ContactUs";


const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/about',
                    element: <About></About>
               },
               {
                    path: '/property',
                    element: <Property></Property>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/career',
                    element: <Career></Career>
               },
               {
                    path: '/contactUs',
                    element: <ContactUs></ContactUs>
               }
          ]
     }
]);

export default router;