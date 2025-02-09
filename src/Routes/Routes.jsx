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
import AboutSection from "../AdminDashBoard/HomePage/AboutSection/AboutSection";
import PortfolioFirst from "../AdminDashBoard/HomePage/PortfolioSection/PortfolioFirst";
import PortfolioSecond from "../AdminDashBoard/HomePage/PortfolioSection/PortfolioSecond ";
import HeroSection from "../AdminDashBoard/AboutPages/HeroSection/HeroSection";
import AboutUsSection from "../AdminDashBoard/AboutPages/AboutUsSection/AboutUsSection";
import AchievementsCountsSection from "../AdminDashBoard/AboutPages/achievementsCountsSection/achievementsCountsSection";
import OurMissionSection from "../AdminDashBoard/AboutPages/OurMissionSection/OurMissionSection";
import OurVisionSection from "../AdminDashBoard/AboutPages/OurVisionSection/OurVisionSection";
import ImgGallerySection from "../AdminDashBoard/AboutPages/ImgGallerySection/ImgGallerySection";
import PropertyHeroSection from "../AdminDashBoard/PropertyPages/PropertyHeroSection/PropertyHeroSection";
import BlogHeroSection from "../AdminDashBoard/BlogPages/BlogHeroSection/BlogHeroSection";
import BlogsSection from "../AdminDashBoard/BlogPages/BlogsSection/BlogsSection";
import CareerHeroSection from "../AdminDashBoard/CareerPages/CareerHeroSection/CareerHeroSection";
// import CareerDepartmentsSection from "../AdminDashBoard/CareerPages/CareerDepartmentsSection/CareerDepartmentsSection";
import AddressSection from "../AdminDashBoard/contactUsPages/AddressSection/AddressSection";
import ContactUsHeroSection from "../AdminDashBoard/contactUsPages/contactUsHeroSection/contactUsHeroSection";
import DashBoard from "../AdminDashBoard/DashBoard/DashBoard";
import BannerSection from "../AdminDashBoard/HomePage/BannerSection/BannerSection";
import VideoSection from "../AdminDashBoard/HomePage/VideoSection/VideoSection";
import CareerAbout from "../AdminDashBoard/CareerPages/CareerAbout/CareerAbout";
import AllSliderSection from "../AdminDashBoard/HomePage/SliderSection/AllSliderSection";
import AddSliderSection from "../AdminDashBoard/HomePage/SliderSection/AddSliderSection/AddSliderSection";
import AddImgGallerySection from "../AdminDashBoard/AboutPages/ImgGallerySection/AddImgGallerySection/AddImgGallerySection";
import AllPropertySection from "../AdminDashBoard/PropertyPages/PropertySection/AllPropertySection/AllPropertySection";
import AllBlogsSection from "../AdminDashBoard/BlogPages/BlogsSection/AllBlogsSection/AllBlogsSection";
import EditBlog from "../AdminDashBoard/BlogPages/EditBlog/EditBlog";
import AddPropertySection from "../AdminDashBoard/PropertyPages/PropertySection/AddPropertySection";
import PropertyEdit from "../AdminDashBoard/PropertyPages/PropertyEdit/PropertyEdit";
import PrivetRoute from "../ProviteRoute/PrivetRoute";


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

     // Admin panel start
     {
          path: '/admin-dashBoard',
          element: <PrivetRoute>
               <AdminDashBoard />
          </PrivetRoute>
          ,
          children: [
               {
                    path: '/admin-dashBoard',
                    element: <DashBoard />

               },
               // Home pages all section
               {
                    path: 'home-all-slider',
                    element: <AllSliderSection />
               },
               {
                    path: 'home-add-slider',
                    element: <AddSliderSection />
               },
               {
                    path: 'home-about',
                    element: <AboutSection />
               },
               {
                    path: 'home-banner',
                    element: <BannerSection />
               },
               {
                    path: 'home-video',
                    element: <VideoSection />
               },
               {
                    path: 'home-portfolio-1',
                    element: <PortfolioFirst />
               },
               {
                    path: 'home-portfolio-2',
                    element: <PortfolioSecond />
               },
               // About pages all section 
               {
                    path: 'about-hero',
                    element: <HeroSection />
               },
               {
                    path: 'about-aboutUs',
                    element: <AboutUsSection />
               },
               {
                    path: 'about-achievementsCounts',
                    element: <AchievementsCountsSection />
               },
               {
                    path: 'about-ourMission',
                    element: <OurMissionSection />
               },
               {
                    path: 'about-ourVision',
                    element: <OurVisionSection />
               },
               {
                    path: 'about-add-imgGallery',
                    element: <AddImgGallerySection />
               },
               {
                    path: 'about-all-imgGallery',
                    element: <ImgGallerySection />
               },
               // Property pages all section
               {
                    path: 'property-hero',
                    element: <PropertyHeroSection />
               },
               {
                    path: 'all-property-section',
                    element: <AllPropertySection />
               },
               {
                    path: 'add-property-section',
                    element: <AddPropertySection />
               },
               {
                    path: 'property-edit/:id',
                    element: <PropertyEdit />
               },
               // Blog pages all section
               {
                    path: 'blog-hero',
                    element: <BlogHeroSection />
               },
               {
                    path: 'all-blogs',
                    element: <AllBlogsSection />
               },
               {
                    path: 'add-blog',
                    element: <BlogsSection />
               },
               {
                    path: 'blog-edit/:id',
                    element: <EditBlog />
               },

               // career pages all section
               {
                    path: 'career-hero',
                    element: <CareerHeroSection />
               },
               {
                    path: 'career-about',
                    element: <CareerAbout />
               },

               // {
               //      path: 'career-departments',
               //      element: <CareerDepartmentsSection />
               // },
               // contacts us pages all section
               {
                    path: 'contactsUs-hero',
                    element: <ContactUsHeroSection />
               },
               {
                    path: 'contactsUs-address',
                    element: <AddressSection />
               },

          ]
     }
]);

export default router;