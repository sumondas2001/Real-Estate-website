import { createBrowserRouter, Navigate } from "react-router-dom";
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


const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>,

               },
               {
                    path: '/about',
                    element: <About></About>
               },
               {
                    path: '/property',
                    element: <Property></Property>,
                    children: [
                         {
                              path: 'all-projects',
                              element: <AllProjects></AllProjects>
                         },
                         {
                              path: 'up-coming-projects',
                              element: <UpcomingProjects></UpcomingProjects>
                         },
                         {
                              path: 'completed',
                              element: <CompletedProjects></CompletedProjects>
                         }
                    ]
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
                    element: <ContactUs></ContactUs>,
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
                    element: <PropertyDetailsCard></PropertyDetailsCard>
               }

          ]
     }
]);

export default router;