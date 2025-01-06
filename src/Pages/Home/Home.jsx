import ArchitecturalElementSection1 from "./ArchitecturalElement/ArchitecturalElementSection1";
import ArchitecturalElementSection2 from "./ArchitecturalElement/ArchitecturalElementSection2";
import Slider from "./Slider/Slider";
import Video from "./VideoSection/Video";

const Home = () => {


     return (
          <div >
               <Slider ></Slider>
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] py-1  px-0 mx-auto">

                    <ArchitecturalElementSection1 />
                    <ArchitecturalElementSection2 />
                    {/* <Video></Video> */}
               </div>
          </div>
     );
};

export default Home;