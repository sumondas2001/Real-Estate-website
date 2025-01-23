import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Property from "../Pages/Property/Property";
import Blog from "../Pages/Blog/Blog";
import Career from "../Pages/Career/Career";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import CustomerFrom from "../Pages/ContactUs/CustomerFrom/CustomerFrom";
import LandOwnerFrom from "../Pages/ContactUs/LandOwnerFrom/LandOwnerFrom";
import AllProjects from "../Pages/Property/AllProjects/AllProjects";
import UpcomingProjects from "../Pages/Property/UpcomingProjects/UpcomingProjects";
import CompletedProjects from "../Pages/Property/CompletedProjects/CompletedProjects";
import PropertyDetailsCard from "../Shared/PropertyDetailsCard/PropertyDetailsCard";
import BlogDetails from "../Shared/BlogDetails/BlogDetails";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Login from "../Pages/Login/Login";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import DashBoardLayOut from "../AdminDashBoard/DashBoardLayOut/DashBoardLayOut";
import AdminSlider from "../AdminDashBoard/AdminSlider/AdminSlider";


const router = createBrowserRouter([
     {
          path: '/',
          element: <Main />,
          errorElement: <ErrorPages />,
          children: [
               {
                    path: '/',
                    element: <Home />,

               },
               {
                    path: '/about',
                    element: <About />
               },
               {
                    path: '/property',
                    element: <Property />,
                    children: [
                         {
                              path: 'all-projects',
                              element: <AllProjects />
                         },
                         {
                              path: 'up-coming-projects',
                              element: <UpcomingProjects />
                         },
                         {
                              path: 'completed',
                              element: <CompletedProjects />
                         }
                    ]
               },
               {
                    path: '/blog',
                    element: <Blog />
               },
               {
                    path: '/career',
                    element: <Career />
               },
               {
                    path: '/contactUs',
                    element: <ContactUs />,
                    children: [

                         {
                              path: 'customerFrom',
                              element: <CustomerFrom />,
                         },
                         {
                              path: 'landOwnerFrom',
                              element: <LandOwnerFrom />
                         }
                    ]
               },
               {
                    path: '/property-details/:id',
                    element: <PropertyDetailsCard />
               },
               {
                    path: '/blog-details/:id',
                    element: <BlogDetails />
               },
               {
                    path: '/login',
                    element: <Login />
               }

          ]
     },

     // Admin panel 
     {
          path: '/admin-dashBoard',
          element: <AdminDashBoard />,
          children: [
               {
                    path: '/admin-dashBoard',
                    element: <div><h1>dash Board</h1></div>
               },
               {
                    path: 'admin-slider',
                    element: <div><h1>admin slider</h1></div>
               },
               {
                    path: 'admin-slider-2',
                    element: <div><h1>admin slider2</h1></div>
               },
               {
                    path: 'admin-aboutUs',
                    element: <div><h1>admin aboutUs</h1></div>
               }
          ]
     }
]);

export default router;