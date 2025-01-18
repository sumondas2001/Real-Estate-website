import PagesCoverImg from "../../Shared/PagesCoverImg/PagesCoverImg";
import PagesTitle from "../../Shared/PagesTitle/PagesTitle";
import AboutUs from "./AboutUs/AboutUs";
import AchievementsCounts from "./achievementsCounts/achievementsCounts";
import GallerySection from "./GallerySection/GallerySection";
import OurMissionAndVision from "./OurMissionAndVision/OurMissionAndVision";

const About = () => {
     const CoverImg = 'https://sheltech.com.bd/CMS/admin/uploads/page/about-us/1707390568PpFJs.jpg';
     const title = 'ABOUT'
     const description = 'Take the next big step with Real State';
     const info = {
          CoverImg,
          title,
          description

     }

     return (
          <div>
               <PagesTitle title={"About"}></PagesTitle>

               <div>
                    <PagesCoverImg info={info} ></PagesCoverImg>
                    <AboutUs />
                    <AchievementsCounts />
                    <OurMissionAndVision />
                    <GallerySection />
               </div>


          </div>
     );
};

export default About;