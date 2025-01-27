import DashBoardLayOut from "../DashBoardLayOut/DashBoardLayOut";
import { FaCommentDots, FaBookOpenReader } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsBuildingCheck, BsBuildings, BsBuildingAdd } from "react-icons/bs";



const DashBoard = () => {
     return (
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-6 lg:gap-x-6 md:gap-y-10 md:gap-x-4 gap-y-6 text-white">
               <div className="bg-gradient-to-r from-teal-400 to-blue-800  rounded-2xl ">

                    <DashBoardLayOut icon={<BsBuildings className="lg:size-10  md:size-10 size-10 opacity-50" />} label={'Total Property'} subLabel={'14'} />
               </div>
               <div className="bg-gradient-to-r from-[#3E7B27] to-[#123524] rounded-2xl">

                    <DashBoardLayOut icon={<FaCommentDots className="lg:size-10   size-8 opacity-50" />} label={'Total Blogs'} subLabel={'78'} />
               </div>
               <div className="bg-gradient-to-r from-[#3C5B6F] to-[#153448] rounded-2xl">

                    <DashBoardLayOut icon={<HiBuildingOffice2 className="lg:size-10   size-8 opacity-50" />} label={'Total OFFICE '} subLabel={'3'} />
               </div>
               <div className="bg-gradient-to-r from-[#FF6969] to-[#C80036] rounded-2xl">

                    <DashBoardLayOut icon={<FaBookOpenReader className="lg:size-10   size-8 opacity-50" />} label={'DEPARTMENTS'} subLabel={'8'} />
               </div>
               <div className="bg-gradient-to-r from-[#BC7FCD] to-[#86469C] rounded-2xl">

                    <DashBoardLayOut icon={<BsBuildingAdd className="lg:size-10   size-8 opacity-50" />} label={'up coming Property'} subLabel={'12'} />
               </div>
               <div className="bg-gradient-to-r from-[#6D2932] to-[#561C24] rounded-2xl">

                    <DashBoardLayOut icon={<BsBuildingCheck className="lg:size-10   size-8 opacity-50" />} label={'completed Property'} subLabel={'4'} />
               </div>

          </div>
     );
};

export default DashBoard;





