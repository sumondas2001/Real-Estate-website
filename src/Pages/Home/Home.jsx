import PagesTitle from "../../Shared/PagesTitle/PagesTitle";
import AboutUs from "./AboutUs/AboutUs";
import ArchitecturalElementSection1 from "./ArchitecturalElement/ArchitecturalElementSection1";
import ArchitecturalElementSection2 from "./ArchitecturalElement/ArchitecturalElementSection2";
import PropertySection from "./PropertySection/PropertySection";
import Slider from "./Slider/Slider";
import Video from "./VideoSection/Video";

const Home = () => {


     return (
          <div >
               <PagesTitle title={'Home'}></PagesTitle>
               <Slider ></Slider>
               <AboutUs></AboutUs>
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] py-1  px-0 mx-auto">
                    <PropertySection></PropertySection>
                    <ArchitecturalElementSection1 />
                    <ArchitecturalElementSection2 />
               </div>
               <Video></Video>
          </div>
     );
};

export default Home;