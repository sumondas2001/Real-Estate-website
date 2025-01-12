import { Outlet } from "react-router-dom";
import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";
import ProjectsNavBar from "./ProjectsNavBar/ProjectsNavBar";

const Property = () => {
     const CoverImg = 'https://i.ibb.co.com/gZ19Px0/jason-dent-w3e-Fhq-Xjk-ZE-unsplash.jpg';
     const title = 'PROPERTY'
     const description = 'Crafting Your Dream Property';
     const info = {
          CoverImg,
          title,
          description
     }

     return (
          <div>
               <div>
                    <PagesTitle title={"About"}></PagesTitle>
                    <PagesCoverImg info={info} ></PagesCoverImg>
               </div>
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px]  mx-auto">
                    <ProjectsNavBar></ProjectsNavBar>
                    <Outlet></Outlet>
               </div>
          </div>
     );
};


export default Property;