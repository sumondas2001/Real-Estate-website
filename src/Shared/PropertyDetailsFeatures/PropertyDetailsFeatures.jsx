import { PiElevator } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { GiCctvCamera } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCarTunnel } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { MdOutlineDeck } from "react-icons/md";
import { Link } from "react-router-dom";






const PropertyDetailsFeatures = () => {
     return (

          <div
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="0"
               data-aos-duration="2000"
               data-aos-easing="ease-out-cubic"


               className="py-20 bg-secondaryColor mb-10">
               <div className="lg:max-w-[1200px] md:max-w-[700px] max-w-[360px] mx-auto space-y-16">
                    <div>
                         <h1 className="lg:text-3xl md:text-2xl text-xl  font-semibold text-primaryColor  ">
                              FEATURES & AMENITIES
                         </h1>
                    </div>
                    <div className="grid  lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10">
                         {/* High Speed Lifts */}
                         <Link className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer ">
                              <PiElevator className="lg:text-5xl md:text-4xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">High Speed Lifts</h1>
                         </Link>

                         {/* Swimming Pool */}
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <LiaSwimmingPoolSolid className="lg:text-5xl md:text-4xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">Swimming Pool</h1>
                         </div>

                         {/* CCTV Monitoring System */}
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <GiCctvCamera className="lg:text-5xl md:text-4xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">CCTV Monitoring</h1>
                         </div>

                         {/* Gym */}
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <CgGym className="lg:text-5xl md:text-4xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">Gym</h1>
                         </div>

                         {/* 100% Power Backup */}
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <ImPower className="lg:text-5xl md:text-4xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">100% Power Backup</h1>
                         </div>

                         {/* Security Guard */}
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <MdOutlineSecurity className="lg:text-5xl md:text-5xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">24 Hours
                                   Security</h1>
                         </div>
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <FaCarTunnel className="lg:text-5xl md:text-5xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">Spacious  Parking</h1>
                         </div>
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <GiBullseye className="lg:text-5xl md:text-5xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">Kids Play
                                   Zone</h1>
                         </div>
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer" >
                              <RiBuilding2Fill className="lg:text-5xl md:text-5xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">Modern Architecture</h1>
                         </div>
                         <div className="flex flex-col items-center space-y-2 hover:text-primaryColor text-white cursor-pointer">
                              <MdOutlineDeck className="lg:text-5xl md:text-5xl text-4xl " />
                              <h1 className="text-lg font-medium text-center">Rooftop Deck</h1>
                         </div>
                    </div>
               </div>
          </div>



     );
};

export default PropertyDetailsFeatures;